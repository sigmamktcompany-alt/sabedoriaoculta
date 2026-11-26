import subprocess
import json
import os

RCLONE = "/Users/sigmamarketing/Desktop/brainsyncproject.com-main/rclone"
ROOT_DRIVE = "suporte_drive:Cúpula 33 - Acervo Completo 2500 Obras"

modules = [
    "Módulo I - Hermetismo & Cabala",
    "Módulo II - Grimórios & Alta Magia",
    "Módulo III - Gnosticismo & Apócrifos",
    "Módulo IV - Alquimia & Transmutação",
    "Módulo V - Sociedades Secretas",
    "Módulo VI - Mente & Projeção Astral"
]

all_files = []
module_counts = {}

print("Verificando pastas no Google Drive:")
for mod in modules:
    res = subprocess.run([RCLONE, "lsjson", f"{ROOT_DRIVE}/{mod}"], capture_output=True, text=True)
    try:
        items = json.loads(res.stdout)
        files = [it for it in items if not it.get("IsDir")]
        module_counts[mod] = len(files)
        print(f"  📁 {mod}: {len(files)} livros")
        for f in files:
            all_files.append({
                "name": f.get("Name"),
                "id": f.get("ID"),
                "module": mod
            })
    except Exception as e:
        print(f"  Erro ao ler {mod}: {e}")

# Checar também a raiz
res_root = subprocess.run([RCLONE, "lsjson", ROOT_DRIVE], capture_output=True, text=True)
try:
    items_root = json.loads(res_root.stdout)
    root_files = [it for it in items_root if not it.get("IsDir")]
    print(f"  📁 Raiz do Acervo: {len(root_files)} livros")
    for f in root_files:
        all_files.append({
            "name": f.get("Name"),
            "id": f.get("ID"),
            "module": "Geral"
        })
except Exception as e:
    print(f"  Erro raiz: {e}")

print(f"\nTotal consolidado de arquivos indexados no Drive: {len(all_files)}")

# Salva mapeamento completo
with open("/Users/sigmamarketing/Desktop/cupula33/app/drive_catalog_live.json", "w", encoding="utf-8") as f:
    json.dump(all_files, f, ensure_ascii=False, indent=2)

