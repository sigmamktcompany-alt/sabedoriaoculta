import urllib.request
import json
import re

SUPABASE_URL = "https://ajczjcjbsuvxrfdumwow.supabase.co"

with open("ordem137_inspect/index.js", "r", encoding="utf-8") as f:
    js = f.read()

tokens = set(re.findall(r'eyJ[a-zA-Z0-9_-]{15,}\.[a-zA-Z0-9_-]{15,}\.[a-zA-Z0-9_-]{15,}', js))
anon_key = [t for t in tokens if len(t) > 50][0]

login_payload = {
    "email": "elevarevenue@gmail.com",
    "password": "ordem@137"
}

auth_url = f"{SUPABASE_URL}/auth/v1/token?grant_type=password"
req = urllib.request.Request(auth_url, data=json.dumps(login_payload).encode("utf-8"), headers={
    "apikey": anon_key,
    "Content-Type": "application/json"
}, method="POST")

with urllib.request.urlopen(req) as resp:
    auth_data = json.loads(resp.read().decode("utf-8"))
    access_token = auth_data["access_token"]

auth_headers = {
    "apikey": anon_key,
    "Authorization": f"Bearer {access_token}",
    "Content-Type": "application/json"
}

# 2. Get total books count
count_req = urllib.request.Request(
    f"{SUPABASE_URL}/rest/v1/books?select=count",
    headers={**auth_headers, "Prefer": "count=exact"}
)
with urllib.request.urlopen(count_req) as resp:
    print("Content-Range:", resp.headers.get("Content-Range"))
    count_data = json.loads(resp.read().decode("utf-8"))
    print("Count response:", count_data)

# 3. Get categories
cat_req = urllib.request.Request(f"{SUPABASE_URL}/rest/v1/categories?select=*&order=name.asc", headers=auth_headers)
with urllib.request.urlopen(cat_req) as resp:
    categories = json.loads(resp.read().decode("utf-8"))
    print(f"\nTotal categories: {len(categories)}")
    for c in categories:
        print(f"  ID: {c.get('id')} | Name: {c.get('name')}")

# 4. Fetch 1 book to test download
book_req = urllib.request.Request(f"{SUPABASE_URL}/rest/v1/books?select=*&limit=1", headers=auth_headers)
with urllib.request.urlopen(book_req) as resp:
    book = json.loads(resp.read().decode("utf-8"))[0]
    print("\nTest Book:", book["title"], "| File URL:", book["file_url"])

# 5. Test createSignedUrl
file_path = book["file_url"].lstrip("/")
sign_url = f"{SUPABASE_URL}/storage/v1/object/sign/library-files/{file_path}"
sign_req = urllib.request.Request(sign_url, data=json.dumps({"expiresIn": 3600}).encode("utf-8"), headers=auth_headers, method="POST")
try:
    with urllib.request.urlopen(sign_req) as resp:
        sign_data = json.loads(resp.read().decode("utf-8"))
        print("\nSigned URL response:", sign_data)
        signed_full_url = f"{SUPABASE_URL}/storage/v1{sign_data['signedURL']}"
        print("Full signed URL:", signed_full_url)
        
        # Test download 1KB
        dl_req = urllib.request.Request(signed_full_url, headers={"Range": "bytes=0-1024"})
        with urllib.request.urlopen(dl_req) as dl_resp:
            chunk = dl_resp.read()
            print(f"Signed URL download success: read {len(chunk)} bytes! Header: {chunk[:10]}")
except Exception as e:
    print("Error signing URL:", e)

# 6. Test direct authenticated download
auth_dl_url = f"{SUPABASE_URL}/storage/v1/object/authenticated/library-files/{file_path}"
auth_dl_req = urllib.request.Request(auth_dl_url, headers={
    "apikey": anon_key,
    "Authorization": f"Bearer {access_token}",
    "Range": "bytes=0-1024"
})
try:
    with urllib.request.urlopen(auth_dl_req) as dl_resp:
        chunk = dl_resp.read()
        print(f"Direct authenticated download success: read {len(chunk)} bytes! Header: {chunk[:10]}")
except Exception as e:
    print("Direct auth download error:", e)

# 7. Test public download
public_dl_url = f"{SUPABASE_URL}/storage/v1/object/public/library-files/{file_path}"
pub_req = urllib.request.Request(public_dl_url, headers={"Range": "bytes=0-1024"})
try:
    with urllib.request.urlopen(pub_req) as dl_resp:
        chunk = dl_resp.read()
        print(f"Public download success: read {len(chunk)} bytes! Header: {chunk[:10]}")
except Exception as e:
    print("Public download error:", e)
