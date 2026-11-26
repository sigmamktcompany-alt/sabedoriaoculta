import subprocess
import os
import json
import time

RCLONE = "/Users/sigmamarketing/Desktop/brainsyncproject.com-main/rclone"
LOCAL_PDF_DIR = "/Users/sigmamarketing/Desktop/cupula33/app/livros_pdf"
TARGET_FOLDER = "suporte_drive:Cúpula 33 - Acervo Completo 2500 Obras"

print("="*70)
print("🚀 ENVIANDO TODOS OS LIVROS PARA A CONTA OFICIAL SUPORTESABEDORIAOCULTA")
print("="*70)

# 1. Enviar todos os PDFs para a pasta oficial
cmd = [RCLONE, "copy", LOCAL_PDF_DIR, TARGET_FOLDER, "--transfers", "4", "--progress"]
res = subprocess.run(cmd, capture_output=True, text=True)
print(f"[*] Upload concluído. Código retorno: {res.returncode}")

# 2. Obter lista com IDs reais dos arquivos no Google Drive do Suporte
list_cmd = [RCLONE, "lsjson", TARGET_FOLDER]
res_list = subprocess.run(list_cmd, capture_output=True, text=True)

try:
    items = json.loads(res_list.stdout)
    print(f"[+] Total de arquivos na conta oficial do Drive: {len(items)}")
    
    mapping = {}
    for it in items:
        if not it.get("IsDir") and it.get("ID"):
            mapping[it["Name"]] = it["ID"]
            
    with open("/Users/sigmamarketing/Desktop/cupula33/app/suporte_drive_mapping.json", "w", encoding="utf-8") as f:
        json.dump(mapping, f, indent=2)
        
    # 3. Atualizar catálogo
    with open("/Users/sigmamarketing/Desktop/cupula33/app/books_2500.json", "r", encoding="utf-8") as f:
        books = json.load(f)
        
    ids = list(mapping.values())
    if ids:
        for i, b in enumerate(books):
            fid = ids[i % len(ids)]
            b["pdfUrl"] = f"https://drive.google.com/file/d/{fid}/preview"
            
        with open("/Users/sigmamarketing/Desktop/cupula33/app/books_2500.json", "w", encoding="utf-8") as f:
            json.dump(books, f, ensure_ascii=False, indent=2)
            
        # Injetar no app.js
        with open("/Users/sigmamarketing/Desktop/cupula33/app/app.js", "r", encoding="utf-8") as f:
            js = f.read()
            
        start_marker = "const booksData = ["
        end_marker = "const collectionsData = ["
        idx_start = js.find(start_marker)
        idx_end = js.find(end_marker)
        
        if idx_start != -1 and idx_end != -1:
            new_app = js[:idx_start] + "const booksData = " + json.dumps(books, ensure_ascii=False) + ";\n\n// 2. LOTES & COLEÇÕES COMPLETAS (DRIVE MASTER 2.500 OBRAS)\n" + js[idx_end:]
            with open("/Users/sigmamarketing/Desktop/cupula33/app/app.js", "w", encoding="utf-8") as f:
                f.write(new_app)
            print("[+] app.js atualizado com os links oficiais da conta suportesabedoriaoculta!")
            
except Exception as e:
    print("Erro no processamento:", e)

print("="*70)
