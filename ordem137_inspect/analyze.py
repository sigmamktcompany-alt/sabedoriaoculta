import re
import json

with open("/Users/sigmamarketing/Desktop/cupula33/ordem137_inspect/index.js", "r", encoding="utf-8") as f:
    js = f.read()

print(f"Tamanho do bundle JS: {len(js)} bytes")

# 1. Procurar rotas
routes = re.findall(r'path:"([^"]+)"', js)
print("Rotas encontradas:", set(routes))

# 2. Procurar categorias/módulos
categories = re.findall(r'["\']([A-ZÀ-Ú][a-zà-ú\s&]+(?:Hermetismo|Cabala|Magia|Ocultismo|Alquimia|Grimórios|Astrologia|Tarot|Gnosticismo|Maçonaria|Mentalismo|Chakras)[^"\']*)["\']', js)
print("\nCategorias/Módulos detectados:", set(categories[:20]))

# 3. Procurar textos de navegação e componentes
nav_items = re.findall(r'label:"([^"]+)"', js)
print("\nLabels de navegação:", set(nav_items))

# 4. Procurar títulos de páginas ou seções
sections = re.findall(r'([A-Za-z0-9_]+Library[A-Za-z0-9_]*)', js)
print("\nComponentes Library:", set(sections[:15]))

# 5. Procurar estrutura de dados de livros (ex: title, author, cover, pdf, drive)
book_fields = re.findall(r'([a-zA-Z0-9_]+):(?:[a-zA-Z0-9_]+|\"[^\"]*\")(?=.*(?:title|author|cover|pdfUrl|driveUrl|pages|category))', js[:5000])

