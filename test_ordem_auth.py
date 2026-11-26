import re
import json
import urllib.request
import urllib.parse

with open("ordem137_inspect/index.js", "r", encoding="utf-8") as f:
    js = f.read()

# Extract anon key
tokens = set(re.findall(r'eyJ[a-zA-Z0-9_-]{15,}\.[a-zA-Z0-9_-]{15,}\.[a-zA-Z0-9_-]{15,}', js))
anon_key = None
for t in tokens:
    if len(t) > 50:
        anon_key = t
        break

print(f"Anon key found: {anon_key[:30]}... (len {len(anon_key)})")

SUPABASE_URL = "https://ajczjcjbsuvxrfdumwow.supabase.co"

# 1. Login with credentials
auth_url = f"{SUPABASE_URL}/auth/v1/token?grant_type=password"
login_payload = {
    "email": "elevarevenue@gmail.com",
    "password": "ordem@137"
}

headers = {
    "apikey": anon_key,
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0"
}

req = urllib.request.Request(auth_url, data=json.dumps(login_payload).encode("utf-8"), headers=headers, method="POST")

try:
    with urllib.request.urlopen(req) as resp:
        auth_data = json.loads(resp.read().decode("utf-8"))
        print("\n[+] Login bem sucedido!")
        print(f"User ID: {auth_data.get('user', {}).get('id')}")
        print(f"Email: {auth_data.get('user', {}).get('email')}")
        access_token = auth_data.get("access_token")
        print(f"Access Token: {access_token[:30]}... (len {len(access_token)})")
except urllib.error.HTTPError as e:
    print(f"[-] Erro no login: {e.code} - {e.read().decode('utf-8')}")
    access_token = None

if access_token:
    # 2. Query books table
    books_url = f"{SUPABASE_URL}/rest/v1/books?select=*&limit=5"
    auth_headers = {
        "apikey": anon_key,
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json"
    }
    req2 = urllib.request.Request(books_url, headers=auth_headers)
    try:
        with urllib.request.urlopen(req2) as resp2:
            books_sample = json.loads(resp2.read().decode("utf-8"))
            print(f"\n[+] Amostra da tabela 'books' ({len(books_sample)} livros):")
            if books_sample:
                print("Campos do livro:", list(books_sample[0].keys()))
                print(json.dumps(books_sample[0], indent=2, ensure_ascii=False))
    except Exception as e:
        print(f"[-] Erro ao consultar books: {e}")
