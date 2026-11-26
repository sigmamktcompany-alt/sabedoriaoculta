import os
import sys
import json
import re
import shutil
import urllib.request
from concurrent.futures import ThreadPoolExecutor

SUPABASE_URL = "https://ajczjcjbsuvxrfdumwow.supabase.co"
CATALOG_PATH = "/Users/sigmamarketing/Desktop/cupula33/app/ordem137_catalog.json"
BASE_DOWNLOAD_DIR = "/Users/sigmamarketing/Desktop/cupula33/app/livros_pdf/ordem137"
MANIFEST_PATH = "/Users/sigmamarketing/Desktop/cupula33/app/ordem137_download_manifest.json"
MIN_FREE_DISK_MB = 350  # Limite rigoroso para preservar a integridade do Mac

def clean_filename(name):
    name = re.sub(r'[\\/*?:"<>|]', "", name)
    name = re.sub(r'\s+', " ", name).strip()
    return name[:100]

def get_free_disk_mb(path):
    stat = shutil.disk_usage(path)
    return stat.free / (1024 * 1024)

def load_auth():
    with open("/Users/sigmamarketing/Desktop/cupula33/ordem137_inspect/index.js", "r", encoding="utf-8") as f:
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

    return anon_key, access_token

def download_selected_batch(max_download=60):
    os.makedirs(BASE_DOWNLOAD_DIR, exist_ok=True)

    with open(CATALOG_PATH, "r", encoding="utf-8") as f:
        catalog = json.load(f)

    books = catalog["books"]

    # Agrupar livros por categoria para pegar os melhores/mais relevantes de cada categoria
    by_cat = {}
    for b in books:
        cat = b.get("category_name", "Geral")
        if cat not in by_cat:
            by_cat[cat] = []
        by_cat[cat].append(b)

    # Selecionar até 1 ou 2 livros de cada categoria (preferindo arquivos < 15MB para economizar espaço)
    selected = []
    for cat, cat_books in sorted(by_cat.items()):
        # ordenar por tamanho menor para maximizar variedade
        sorted_books = sorted(cat_books, key=lambda x: (x.get("file_size") or 99999999))
        for b in sorted_books:
            size_mb = (b.get("file_size") or 0) / (1024 * 1024)
            if 0.2 <= size_mb <= 15:
                selected.append(b)
                if len(selected) >= max_download:
                    break
        if len(selected) >= max_download:
            break

    print(f"[*] Selecionados {len(selected)} livros de diversas categorias para download...")

    anon_key, access_token = load_auth()

    manifest = {}
    if os.path.exists(MANIFEST_PATH):
        try:
            with open(MANIFEST_PATH, "r", encoding="utf-8") as f:
                manifest = json.load(f)
        except Exception:
            manifest = {}

    downloaded = 0
    skipped = 0
    errors = 0

    for i, book in enumerate(selected, 1):
        free_mb = get_free_disk_mb(BASE_DOWNLOAD_DIR)
        if free_mb < MIN_FREE_DISK_MB:
            print(f"[!] Espaço em disco limite atingido ({free_mb:.1f} MB livres). Interrompendo downloads.")
            break

        book_id = book["id"]
        title = book.get("title", f"book_{book_id}")
        cat_name = book.get("category_name", "Geral")
        cat_folder = os.path.join(BASE_DOWNLOAD_DIR, clean_filename(cat_name))
        os.makedirs(cat_folder, exist_ok=True)

        dest_file = os.path.join(cat_folder, f"{clean_filename(title)}.pdf")

        if os.path.exists(dest_file) and os.path.getsize(dest_file) > 1024:
            skipped += 1
            manifest[book_id] = {
                "title": title,
                "author": book.get("author"),
                "category": cat_name,
                "status": "already_exists",
                "local_path": dest_file,
                "file_size": os.path.getsize(dest_file)
            }
            continue

        file_path = (book.get("file_url_path") or "").lstrip("/")
        if not file_path:
            continue

        url = f"{SUPABASE_URL}/storage/v1/object/authenticated/library-files/{file_path}"
        req = urllib.request.Request(url, headers={
            "apikey": anon_key,
            "Authorization": f"Bearer {access_token}",
            "User-Agent": "Mozilla/5.0"
        })

        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                data = resp.read()
                if len(data) > 500:
                    with open(dest_file, "wb") as f_out:
                        f_out.write(data)
                    downloaded += 1
                    manifest[book_id] = {
                        "title": title,
                        "author": book.get("author"),
                        "category": cat_name,
                        "status": "downloaded",
                        "local_path": dest_file,
                        "file_size": len(data),
                        "file_size_mb": round(len(data) / (1024 * 1024), 2)
                    }
                    if downloaded % 5 == 0:
                        print(f"[{i}/{len(selected)}] Baixado: {clean_filename(title)[:40]} ({round(len(data)/1024/1024, 2)} MB) - Disco: {get_free_disk_mb(BASE_DOWNLOAD_DIR):.1f} MB")
        except Exception as e:
            errors += 1
            print(f"[-] Erro ao baixar '{title}': {e}")

    # Salvar manifesto
    with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)

    print("\n" + "="*60)
    print("CONCLUÍDO DOWNLOAD DO LOTE DIVERSIFICADO")
    print(f"Novos baixados: {downloaded}")
    print(f"Já existentes: {skipped}")
    print(f"Erros: {errors}")
    print(f"Espaço livre restante: {get_free_disk_mb(BASE_DOWNLOAD_DIR):.1f} MB")
    print("="*60)

if __name__ == "__main__":
    download_selected_batch(50)
