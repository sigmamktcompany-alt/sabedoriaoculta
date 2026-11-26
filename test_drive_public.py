import urllib.request
import json
import re

FOLDER_ID = "1dnrxEJ2MYXHpmgWY_ZUr5AW4ReRORl79"
url = f"https://drive.google.com/embeddedfolderview?id={FOLDER_ID}"

headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'}
try:
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=10) as r:
        html = r.read().decode('utf-8', errors='ignore')
        print("Drive folder embed acessado! Tamanho HTML:", len(html))
        # Tenta achar IDs de arquivos dentro da pasta
        file_ids = re.findall(r'/file/d/([a-zA-Z0-9_-]{25,})', html)
        print(f"Arquivos encontrados na pasta: {len(file_ids)}")
except Exception as e:
    print(f"Erro ao acessar embed do drive: {e}")
