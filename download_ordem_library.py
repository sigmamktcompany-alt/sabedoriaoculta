import os
import sys
import re
import json
import time
import shutil
import urllib.request
import urllib.parse
from concurrent.futures import ThreadPoolExecutor, as_completed

SUPABASE_URL = "https://ajczjcjbsuvxrfdumwow.supabase.co"
CATALOG_PATH = "/Users/sigmamarketing/Desktop/cupula33/app/ordem137_catalog.json"
BASE_DOWNLOAD_DIR = "/Users/sigmamarketing/Desktop/cupula33/app/livros_pdf/ordem137"
MANIFEST_PATH = "/Users/sigmamarketing/Desktop/cupula33/app/ordem137_download_manifest.json"
MIN_FREE_DISK_MB = 200  # Margem de segurança de disco

def clean_filename(name):
    # Remove caracteres inválidos para nomes de arquivos
    name = re.sub(r'[\\/*?:"<>|]', "", name)
    name = re.sub(r'\s+', " ", name).strip()
    return name[:120]

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

def download_book(book, anon_key, access_token, manifest):
    book_id = book["id"]
    title = book.get("title") or f"book_{book_id}"
    cat_name = book.get("category_name") or "Geral"
    file_path = (book.get("file_url_path") or "").lstrip("/")

    if not file_path:
        return book_id, False, "no_file_url"

    cat_folder = os.path.join(BASE_DOWNLOAD_DIR, clean_filename(cat_name))
    os.makedirs(cat_folder, exist_ok=True)

    safe_title = clean_filename(title)
    dest_path = os.path.join(cat_folder, f"{safe_title}.pdf")

    # Se já foi baixado com sucesso e tamanho > 1KB
    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 1024:
        return book_id, True, "already_exists", dest_path, os.path.getsize(dest_path)

    # Verificar espaço em disco
    free_mb = get_free_disk_mb(BASE_DOWNLOAD_DIR)
    expected_mb = (book.get("file_size") or 0) / (1024 * 1024)
    if free_mb - expected_mb < MIN_FREE_DISK_MB:
        return book_id, False, f"disk_space_low (free: {free_mb:.1f}MB)"

    auth_dl_url = f"{SUPABASE_URL}/storage/v1/object/authenticated/library-files/{file_path}"
    req = urllib.request.Request(auth_dl_url, headers={
        "apikey": anon_key,
        "Authorization": f"Bearer {access_token}",
        "User-Agent": "Mozilla/5.0"
    })

    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
            if not data.startswith(b"%PDF"):
                # Pode ser epub ou outro arquivo, verificar tamanho
                if len(data) < 100:
                    return book_id, False, "invalid_pdf_content"

            with open(dest_path, "wb") as f_out:
                f_out.write(data)

            return book_id, True, "downloaded", dest_path, len(data)
    except Exception as e:
        return book_id, False, f"error: {str(e)}"

def run_download(limit=None):
    os.makedirs(BASE_DOWNLOAD_DIR, exist_ok=True)

    # Carregar catálogo
    with open(CATALOG_PATH, "r", encoding="utf-8") as f:
        catalog = json.load(f)

    books = catalog["books"]
    print(f"[*] Catálogo carregado: {len(books)} livros no total.")

    # Carregar manifesto existente se houver
    manifest = {}
    if os.path.exists(MANIFEST_PATH):
        try:
            with open(MANIFEST_PATH, "r", encoding="utf-8") as f:
                manifest = json.load(f)
        except Exception:
            manifest = {}

    print(f"[*] Autenticando com credenciais da Ordem 137...")
    anon_key, access_token = load_auth()
    print(f"[+] Autenticado.")

    initial_free = get_free_disk_mb(BASE_DOWNLOAD_DIR)
    print(f"[*] Espaço livre em disco: {initial_free:.1f} MB (Limite de segurança: {MIN_FREE_DISK_MB} MB)")

    to_process = books[:limit] if limit else books
    success_count = 0
    fail_count = 0
    skipped_count = 0

    print(f"[*] Iniciando download gerenciado de {len(to_process)} livros...")

    for i, book in enumerate(to_process, 1):
        # Checar se disco ainda aguenta
        free_mb = get_free_disk_mb(BASE_DOWNLOAD_DIR)
        if free_mb < MIN_FREE_DISK_MB + 50:
            print(f"\n[!] AVISO: Espaço em disco atingiu margem de segurança ({free_mb:.1f} MB livres). Pausando downloads físicos.")
            break

        book_id = book["id"]
        title = book.get("title")

        res = download_book(book, anon_key, access_token, manifest)
        status = res[2]

        if res[1]:
            dest_path = res[3]
            size = res[4]
            manifest[book_id] = {
                "title": title,
                "author": book.get("author"),
                "category": book.get("category_name"),
                "status": status,
                "local_path": dest_path,
                "file_size": size,
                "file_size_mb": round(size / (1024 * 1024), 2)
            }
            if status == "already_exists":
                skipped_count += 1
            else:
                success_count += 1
                if success_count % 10 == 0:
                    print(f"[{i}/{len(to_process)}] Baixados: {success_count} | Ignorados: {skipped_count} | Disco livre: {get_free_disk_mb(BASE_DOWNLOAD_DIR):.1f} MB")
        else:
            fail_count += 1
            manifest[book_id] = {
                "title": title,
                "author": book.get("author"),
                "category": book.get("category_name"),
                "status": f"failed: {status}",
                "file_url_path": book.get("file_url_path")
            }

        # Salvar manifesto periodicamente
        if i % 25 == 0:
            with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
                json.dump(manifest, f, indent=2, ensure_ascii=False)

    # Salvar manifesto final
    with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)

    final_free = get_free_disk_mb(BASE_DOWNLOAD_DIR)
    print("\n" + "="*60)
    print("RELATÓRIO DE EXTRAÇÃO & DOWNLOAD ORDEM 137")
    print("="*60)
    print(f"Total processados: {i}")
    print(f"Baixados com sucesso: {success_count}")
    print(f"Já existentes (reaproveitados): {skipped_count}")
    print(f"Falhas/Sem arquivo: {fail_count}")
    print(f"Espaço livre restante: {final_free:.1f} MB")
    print(f"Manifesto salvo em: {MANIFEST_PATH}")
    print("="*60)

if __name__ == "__main__":
    limit = int(sys.argv[1]) if len(sys.argv) > 1 else None
    run_download(limit)
