import urllib.request
import json
import re
import os
import shutil

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
    user_info = auth_data.get("user", {})

print(f"[+] Autenticado com sucesso como: {user_info.get('email')} (ID: {user_info.get('id')})")

auth_headers = {
    "apikey": anon_key,
    "Authorization": f"Bearer {access_token}",
    "Content-Type": "application/json"
}

# 1. Obter Categorias
cat_req = urllib.request.Request(f"{SUPABASE_URL}/rest/v1/categories?select=*&order=name.asc", headers=auth_headers)
with urllib.request.urlopen(cat_req) as resp:
    categories = json.loads(resp.read().decode("utf-8"))
cat_map = {c["id"]: c["name"] for c in categories}
print(f"[+] {len(categories)} categorias carregadas.")

# 2. Obter todos os 1333 livros
all_books = []
offset = 0
limit = 1000

while True:
    b_req = urllib.request.Request(
        f"{SUPABASE_URL}/rest/v1/books?select=*&order=created_at.desc&offset={offset}&limit={limit}",
        headers=auth_headers
    )
    with urllib.request.urlopen(b_req) as resp:
        batch = json.loads(resp.read().decode("utf-8"))
        if not batch:
            break
        all_books.extend(batch)
        offset += len(batch)
        if len(batch) < limit:
            break

print(f"[+] {len(all_books)} livros obtidos com sucesso do catálogo!")

# 3. Enriquecer metadados com nomes de categoria e URLs de download
enriched_books = []
for b in all_books:
    cat_name = cat_map.get(b.get("category_id"), "Geral")
    file_path = (b.get("file_url") or "").lstrip("/")
    
    # URL autenticada direta do Supabase Storage
    direct_auth_url = f"{SUPABASE_URL}/storage/v1/object/authenticated/library-files/{file_path}" if file_path else None
    
    enriched_books.append({
        "id": b.get("id"),
        "title": b.get("title"),
        "author": b.get("author") or "Desconhecido",
        "description": b.get("description"),
        "category_id": b.get("category_id"),
        "category_name": cat_name,
        "file_url_path": b.get("file_url"),
        "direct_download_url": direct_auth_url,
        "cover_url": b.get("cover_url"),
        "file_size": b.get("file_size"),
        "file_size_mb": round((b.get("file_size") or 0) / (1024 * 1024), 2),
        "page_count": b.get("page_count"),
        "created_at": b.get("created_at"),
        "updated_at": b.get("updated_at"),
        "allowed_features": b.get("allowed_features")
    })

catalog_path = "/Users/sigmamarketing/Desktop/cupula33/app/ordem137_catalog.json"
with open(catalog_path, "w", encoding="utf-8") as f:
    json.dump({
        "total_books": len(enriched_books),
        "total_categories": len(categories),
        "categories": categories,
        "books": enriched_books
    }, f, indent=2, ensure_ascii=False)

print(f"[+] Catálogo salvo em: {catalog_path} ({len(enriched_books)} livros registrados)")
