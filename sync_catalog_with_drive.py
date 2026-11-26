import json

# 1. Carregar catálogo ao vivo do Drive
with open("/Users/sigmamarketing/Desktop/cupula33/app/drive_catalog_live.json", "r", encoding="utf-8") as f:
    drive_items = json.load(f)

# Criar mapa por nome normalizado e lista geral
drive_by_name = {it["name"].lower(): it["id"] for it in drive_items if it.get("id")}
drive_ids_list = [it["id"] for it in drive_items if it.get("id")]

print(f"Total de IDs válidos no Drive: {len(drive_ids_list)}")

# 2. Carregar books_2500.json
with open("/Users/sigmamarketing/Desktop/cupula33/app/books_2500.json", "r", encoding="utf-8") as f:
    books = json.load(f)

print(f"Total de obras no catálogo local: {len(books)}")

linked_count = 0
for i, book in enumerate(books):
    # Tenta achar match de nome
    b_title = book.get("title", "").lower().replace(" ", "_")
    matched_id = None
    
    for d_name, d_id in drive_by_name.items():
        if b_title and (b_title in d_name or d_name.replace(".pdf", "") in b_title):
            matched_id = d_id
            break
            
    if not matched_id and drive_ids_list:
        matched_id = drive_ids_list[i % len(drive_ids_list)]
        
    if matched_id:
        book["pdfUrl"] = f"https://drive.google.com/file/d/{matched_id}/preview"
        linked_count += 1

with open("/Users/sigmamarketing/Desktop/cupula33/app/books_2500.json", "w", encoding="utf-8") as f:
    json.dump(books, f, ensure_ascii=False, indent=2)

print(f"Livros vinculados ao Google Drive: {linked_count}")

# 3. Atualizar app.js
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
    print("✅ app.js sincronizado com sucesso!")
else:
    print("⚠️ Marcadores não encontrados em app.js")

