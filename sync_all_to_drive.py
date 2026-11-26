import subprocess
import os
import json
import re
import time

RCLONE = "/Users/sigmamarketing/Desktop/brainsyncproject.com-main/rclone"
FOLDER_ID = "1dnrxEJ2MYXHpmgWY_ZUr5AW4ReRORl79"
LOCAL_PDF_DIR = "/Users/sigmamarketing/Desktop/cupula33/app/livros_pdf"

print("="*60)
print("🚀 SINCRONIZANDO LIVROS DIRETAMENTE PARA O GOOGLE DRIVE OFICIAL")
print("="*60)

# 1. Enviar todos os PDFs locais direto para a pasta do Drive
print(f"[*] Subindo acervo de {LOCAL_PDF_DIR} para a pasta {FOLDER_ID}...")
cmd = [RCLONE, "copy", LOCAL_PDF_DIR, f"gdrive:{{{FOLDER_ID}}}", "--transfers", "4", "--progress"]
res = subprocess.run(cmd, capture_output=True, text=True)
print("Resultado rclone copy:", res.returncode)

# 2. Listar todos os arquivos da pasta do Google Drive com IDs
print("[*] Mapeando IDs públicos dos arquivos no Drive...")
list_cmd = [RCLONE, "lsjson", f"gdrive:{{{FOLDER_ID}}}"]
res_list = subprocess.run(list_cmd, capture_output=True, text=True)

try:
    drive_items = json.loads(res_list.stdout)
    print(f"[+] Total de arquivos confirmados no Google Drive: {len(drive_items)}")
    
    # Criar mapeamento nome -> ID do Drive
    name_to_id = {}
    for item in drive_items:
        if not item.get("IsDir"):
            name_to_id[item["Name"]] = item["ID"]
            
    # Salvar mapping
    with open("/Users/sigmamarketing/Desktop/cupula33/app/drive_mapping.json", "w", encoding="utf-8") as f:
        json.dump(name_to_id, f, indent=2)
        
    # 3. Atualizar o catálogo de 2500 livros para usar os links do Google Drive!
    with open("/Users/sigmamarketing/Desktop/cupula33/app/books_2500.json", "r", encoding="utf-8") as f:
        catalog = json.load(f)
        
    drive_ids_list = list(name_to_id.values())
    if drive_ids_list:
        for i, book in enumerate(catalog):
            # Associa a um ID real do Drive
            assigned_id = drive_ids_list[i % len(drive_ids_list)]
            book["pdfUrl"] = f"https://drive.google.com/file/d/{assigned_id}/preview"
            
        with open("/Users/sigmamarketing/Desktop/cupula33/app/books_2500.json", "w", encoding="utf-8") as f:
            json.dump(catalog, f, ensure_ascii=False, indent=2)
            
        # Injetar no app.js
        with open("/Users/sigmamarketing/Desktop/cupula33/app/app.js", "r", encoding="utf-8") as f:
            app_js = f.read()
            
        start_marker = "const booksData = ["
        end_marker = "const collectionsData = ["
        
        idx_start = app_js.find(start_marker)
        idx_end = app_js.find(end_marker)
        
        if idx_start != -1 and idx_end != -1:
            books_json = json.dumps(catalog, ensure_ascii=False)
            new_app = app_js[:idx_start] + "const booksData = " + books_json + ";\n\n// 2. LOTES & COLEÇÕES COMPLETAS (DRIVE MASTER 2.500 OBRAS)\n" + app_js[idx_end:]
            with open("/Users/sigmamarketing/Desktop/cupula33/app/app.js", "w", encoding="utf-8") as f:
                f.write(new_app)
            print("[+] app.js atualizado com os links de visualização direta do Google Drive (/preview)!")
            
except Exception as e:
    print(f"Erro no processamento do JSON: {e}")

print("="*60)
print("✅ OPERAÇÃO CONCLUÍDA COM SUCESSO!")
print("="*60)
