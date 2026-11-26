import urllib.request
import json
import time

anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqY3pqY2pic3V2eHJmZHVtd293Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4NDY4NTEsImV4cCI6MjA4NjQyMjg1MX0.IQZECDpR2zbPIy0bxTDVDAxKn0C07WAg6G64iXlnWBQ'

# 1. Login to get token
req = urllib.request.Request(
    'https://ajczjcjbsuvxrfdumwow.supabase.co/auth/v1/token?grant_type=password',
    data=json.dumps({'email': 'elevarevenue@gmail.com', 'password': 'ordem@137'}).encode(),
    headers={'apikey': anonKey, 'Content-Type': 'application/json'}
)
resp = urllib.request.urlopen(req)
token = json.loads(resp.read().decode())['access_token']
print("Authenticated with Supabase successfully.")

# 2. Load books
with open('app/books_unified.json', 'r') as f:
    books = json.load(f)

# Collect paths
path_to_books = {}
for b in books:
    fp = b.get('file_path')
    if not fp and 'library-files/' in b.get('pdfUrl', ''):
        fp = b['pdfUrl'].split('library-files/')[1].split('?')[0]
    if fp:
        path_to_books[fp] = b

all_paths = list(path_to_books.keys())
print(f"Total cloud paths to sign: {len(all_paths)}")

signed_map = {}
chunk_size = 100
for i in range(0, len(all_paths), chunk_size):
    chunk = all_paths[i:i+chunk_size]
    print(f"Signing chunk {i} to {i+len(chunk)}...")
    batch_req = urllib.request.Request(
        'https://ajczjcjbsuvxrfdumwow.supabase.co/storage/v1/object/sign/library-files',
        data=json.dumps({'paths': chunk, 'expiresIn': 31536000}).encode(),
        headers={'apikey': anonKey, 'Authorization': f'Bearer {token}', 'Content-Type': 'application/json'}
    )
    try:
        res = urllib.request.urlopen(batch_req)
        data = json.loads(res.read().decode())
        for item in data:
            if item.get('signedURL'):
                full_url = 'https://ajczjcjbsuvxrfdumwow.supabase.co/storage/v1' + item['signedURL']
                signed_map[item['path']] = full_url
    except Exception as e:
        print(f"Error in chunk {i}: {e}")
    time.sleep(0.2)

print(f"Successfully signed {len(signed_map)} cloud files!")

# Update books
updated_count = 0
for b in books:
    fp = b.get('file_path')
    if not fp and 'library-files/' in b.get('pdfUrl', ''):
        fp = b['pdfUrl'].split('library-files/')[1].split('?')[0]
    if fp and fp in signed_map:
        b['pdfUrl'] = signed_map[fp]
        b['file_path'] = fp
        updated_count += 1

print(f"Updated {updated_count} books with direct signed URLs.")

# Save books_unified.json
with open('app/books_unified.json', 'w') as f:
    json.dump(books, f, ensure_ascii=False)

# Save books_data.js
with open('app/books_data.js', 'w') as f:
    f.write("window.BOOKS_DATABASE = " + json.dumps(books, ensure_ascii=False) + ";\n")

print("books_unified.json and books_data.js updated!")
