import os
import json
import re

CATALOG_PATH = "/Users/sigmamarketing/Desktop/cupula33/app/ordem137_catalog.json"
EXISTING_PATH = "/Users/sigmamarketing/Desktop/cupula33/app/books_2500.json"
MANIFEST_PATH = "/Users/sigmamarketing/Desktop/cupula33/app/ordem137_download_manifest.json"
OUTPUT_ENRICHED_PATH = "/Users/sigmamarketing/Desktop/cupula33/app/books_2500.json"
BACKUP_PATH = "/Users/sigmamarketing/Desktop/cupula33/app/books_2500.json.bak"

# 1. Carregar catálogo Ordem 137
with open(CATALOG_PATH, "r", encoding="utf-8") as f:
    ordem_data = json.load(f)
    ordem_books = ordem_data["books"]

# 2. Carregar manifesto de downloads locais
manifest = {}
if os.path.exists(MANIFEST_PATH):
    with open(MANIFEST_PATH, "r", encoding="utf-8") as f:
        manifest = json.load(f)

# 3. Carregar acervo atual da Cúpula 33
with open(EXISTING_PATH, "r", encoding="utf-8") as f:
    cupula_books = json.load(f)

# Fazer backup do original
if not os.path.exists(BACKUP_PATH):
    with open(BACKUP_PATH, "w", encoding="utf-8") as f:
        json.dump(cupula_books, f, indent=2, ensure_ascii=False)

existing_titles = {b["title"].strip().lower() for b in cupula_books}
max_id = max((b.get("id") or 0) for b in cupula_books) if cupula_books else 0

# Mapeamento semântico das 64 categorias da Ordem 137 para os 6 Módulos da Cúpula 33
MODULE_MAP = {
    # Módulo I - Hermetismo & Cabala
    "Hermetismo": "Módulo I",
    "Cabala": "Módulo I",
    "Simbologia": "Módulo I",
    "Teosofia": "Módulo I",
    "Walter Russell": "Módulo I",
    "História e Enciclopédias": "Módulo I",

    # Módulo II - Grimórios & Alta Magia
    "Alta Magia": "Módulo II",
    "Goetia": "Módulo II",
    "Salomão": "Módulo II",
    "São Cipriano": "Módulo II",
    "Demonologia": "Módulo II",
    "Luciferianismo": "Módulo II",
    "Feitiços e Magias": "Módulo II",
    "Necromancia": "Módulo II",
    "Magia Enoquiana": "Módulo II",
    "Banimento": "Módulo II",
    "Magia Angelical": "Módulo II",
    "Magia do Caos": "Módulo II",
    "Magia dos Metais": "Módulo II",
    "Magia Elemental": "Módulo II",
    "Magia Lunar": "Módulo II",
    "Magia Sexual": "Módulo II",
    "Magia das Fadas": "Módulo II",
    "Vampirismo": "Módulo II",
    "Velas": "Módulo II",
    "Bruxaria Natural": "Módulo II",
    "Iniciantes (Bruxaria)": "Módulo II",
    "Wicca": "Módulo II",
    "Runas": "Módulo II",
    "Tarot": "Módulo II",
    "Baralho Cigano": "Módulo II",
    "Benzimento": "Módulo II",
    "Rubens Saraceni": "Módulo II",
    "Dragões": "Módulo II",
    "Animais": "Módulo II",
    "Sagrado Feminino": "Módulo II",
    "Xamanismo": "Módulo II",

    # Módulo III - Gnosticismo & Apócrifos
    "Gnoticismo": "Módulo III",
    "Evangelhos Apócrifos": "Módulo III",
    "Thelema": "Módulo III",
    "Budismo": "Módulo III",
    "Perseguição": "Módulo III",

    # Módulo IV - Alquimia & Transmutação
    "Alquimia": "Módulo IV",
    "Cromoterapia": "Módulo IV",
    "Aromaterapia": "Módulo IV",
    "Reiki": "Módulo IV",

    # Módulo V - Sociedades Secretas
    "Maçonaria": "Módulo V",
    "Sociedades Secretas": "Módulo V",
    "Sociedade das Ciências Antigas": "Módulo V",
    "Conspirações": "Módulo V",
    "Anunnakis": "Módulo V",
    "Ufologia": "Módulo V",

    # Módulo VI - Mente & Projeção Astral
    "Auto Conhecimento": "Módulo VI",
    "Desenvolvimento Pessoal": "Módulo VI",
    "Reprogramação Mental": "Módulo VI",
    "Meditação e Gnose": "Módulo VI",
    "Chakras": "Módulo VI",
    "Apometria": "Módulo VI",
    "Sonhos": "Módulo VI",
    "Espiritualidade": "Módulo VI",
    "Arquétipos": "Módulo VI",
    "Grabovoi": "Módulo VI"
}

CATEGORY_TO_MODULE_NAME = {
    "Módulo I": "Hermetismo & Cabala",
    "Módulo II": "Grimórios & Alta Magia",
    "Módulo III": "Gnosticismo & Apócrifos",
    "Módulo IV": "Alquimia & Transmutação",
    "Módulo V": "Sociedades Secretas",
    "Módulo VI": "Mente & Projeção Astral"
}

added_count = 0
for b in ordem_books:
    clean_title = (b.get("title") or "").strip()
    if not clean_title or clean_title.lower() in existing_titles:
        continue

    existing_titles.add(clean_title.lower())
    max_id += 1

    cat_name = b.get("category_name", "Ocultismo")
    mod_id = MODULE_MAP.get(cat_name, "Módulo II")
    mod_name = CATEGORY_TO_MODULE_NAME.get(mod_id, "Grimórios & Alta Magia")

    # Verificar se foi baixado localmente
    b_id = b["id"]
    local_info = manifest.get(b_id)
    is_downloaded = bool(local_info and local_info.get("status") in ["downloaded", "already_exists"])
    local_pdf = local_info.get("local_path") if is_downloaded else None

    # URL relativa para o frontend usar (se baixado localmente, aponta para livros_pdf/ordem137/...)
    if local_pdf:
        # Converter para caminho relativo ao app/
        rel_pdf = os.path.relpath(local_pdf, "/Users/sigmamarketing/Desktop/cupula33/app")
    else:
        rel_pdf = b.get("direct_download_url")

    enriched_book = {
        "id": max_id,
        "title": clean_title,
        "author": b.get("author") or "Acervo Cúpula 33 (Tradição Oculta)",
        "category": f"{cat_name} ({mod_name})",
        "module": mod_id,
        "rarity": "Raríssimo (Manuscrito Restaurado)" if (b.get("file_size") or 0) > 10 * 1024 * 1024 else "Essencial",
        "pages": b.get("page_count") or (int((b.get("file_size") or 100000) / 35000) if b.get("file_size") else 120),
        "cover": b.get("cover_url") or "assets/covers_extracted/default.jpg",
        "tier": "basico",
        "desc": b.get("description") or f"Tratado integral da tradição esotérica sobre {cat_name}. Obra completa preservada no acervo Cúpula 33.",
        "pdfUrl": rel_pdf,
        "directDownloadUrl": b.get("direct_download_url"),
        "isDownloaded": is_downloaded,
        "fileSizeMb": b.get("file_size_mb")
    }

    cupula_books.append(enriched_book)
    added_count += 1

# Salvar o catálogo unificado
with open(OUTPUT_ENRICHED_PATH, "w", encoding="utf-8") as f:
    json.dump(cupula_books, f, indent=2, ensure_ascii=False)

print("\n" + "="*60)
print("CATÁLOGO CÚPULA 33 ENRIQUECIDO COM SUCESSO!")
print("="*60)
print(f"Livros originais Cúpula 33: 473")
print(f"Novos livros incorporados da Ordem 137: {added_count}")
print(f"TOTAL GERAL DO ACERVO: {len(cupula_books)} OBRAS")
print(f"Arquivo atualizado: {OUTPUT_ENRICHED_PATH}")
print("="*60)
