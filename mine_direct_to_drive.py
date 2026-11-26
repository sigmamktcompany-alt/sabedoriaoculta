import urllib.request
import json
import subprocess
import os
import re
import time

RCLONE = "/Users/sigmamarketing/Desktop/brainsyncproject.com-main/rclone"
ROOT_DRIVE = "suporte_drive:Cúpula 33 - Acervo Completo 2500 Obras"
TEMP_DIR = "/Users/sigmamarketing/Desktop/cupula33/temp_miner"
os.makedirs(TEMP_DIR, exist_ok=True)

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

MODULE_CONFIGS = [
    {
        "folder": "Módulo I - Hermetismo & Cabala",
        "terms": ["hermetismo", "cabala", "caibalion", "zohar", "sefer yetzirah", "hermes trismegisto", "dion fortune"]
    },
    {
        "folder": "Módulo II - Grimórios & Alta Magia",
        "terms": ["grimorio", "alta magia", "sao cipriano", "eliphas levi", "goetia", "clavicula de salomao", "franz bardon"]
    },
    {
        "folder": "Módulo III - Gnosticismo & Apócrifos",
        "terms": ["gnosticismo", "nag hammadi", "livro de enoque", "evangelho apocrifo", "manuscritos mar morto", "pistis sophia"]
    },
    {
        "folder": "Módulo IV - Alquimia & Transmutação",
        "terms": ["alquimia", "pedra filosofal", "splendor solis", "transmutacao", "paracelso", "julius evola", "espagiria"]
    },
    {
        "folder": "Módulo V - Sociedades Secretas",
        "terms": ["maconaria", "rosacruz", "illuminati", "bilderberg", "sociedade secreta", "albert pike", "martinismo"]
    },
    {
        "folder": "Módulo VI - Mente & Projeção Astral",
        "terms": ["projecao astral", "viagem astral", "sonhos lucidos", "kardec", "espiritismo", "teosofia", "desdobramento astral"]
    }
]

print("="*70)
print("📥 MINERADOR CONTÍNUO: BAIXANDO E DISTRIBUINDO NOS 6 MÓDULOS DO DRIVE")
print("="*70)

total_uploaded = 0

for mod in MODULE_CONFIGS:
    target_drive_folder = f"{ROOT_DRIVE}/{mod['folder']}"
    print(f"\n[+] Minerando para: {mod['folder']}...")
    
    # Obter lista de arquivos que já estão nessa pasta do Drive
    res_list = subprocess.run([RCLONE, "lsjson", target_drive_folder], capture_output=True, text=True)
    existing_in_drive = set()
    try:
        items = json.loads(res_list.stdout)
        existing_in_drive = {it["Name"] for it in items if not it.get("IsDir")}
    except Exception:
        pass
        
    print(f"[*] Itens já existentes nesta pasta: {len(existing_in_drive)}")
    
    for term in mod["terms"]:
        url = f"https://archive.org/advancedsearch.php?q=({urllib.parse.quote(term)})+AND+language:por+AND+mediatype:texts&fl[]=identifier,title,creator&rows=30&output=json"
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=10) as r:
                docs = json.loads(r.read().decode('utf-8')).get('response', {}).get('docs', [])
                
            for d in docs:
                ident = d.get('identifier')
                title = d.get('title', ident)
                if not ident:
                    continue
                    
                clean_title = "".join(c for c in title if c.isalnum() or c in (' ', '_', '-')).rstrip()[:55].replace(" ", "_")
                filename = f"{clean_title}.pdf"
                
                if filename in existing_in_drive:
                    continue
                    
                # Obter metadata do arquivo PDF no Archive.org
                try:
                    meta_url = f"https://archive.org/metadata/{ident}/files"
                    mreq = urllib.request.Request(meta_url, headers=HEADERS)
                    with urllib.request.urlopen(mreq, timeout=8) as mr:
                        files = json.loads(mr.read().decode('utf-8')).get('result', [])
                        
                    pdf_files = [f for f in files if f.get('name', '').endswith('.pdf') and 25000 < int(f.get('size', 0)) < 25000000]
                    if not pdf_files:
                        continue
                        
                    chosen = sorted(pdf_files, key=lambda x: int(x.get('size', 0)))[0]
                    dl_url = f"https://archive.org/download/{ident}/{chosen['name']}"
                    
                    temp_filepath = os.path.join(TEMP_DIR, filename)
                    print(f"  ⬇️ Baixando: {clean_title} ({round(int(chosen['size'])/1024/1024, 2)} MB)...")
                    
                    # Baixa temporário
                    dreq = urllib.request.Request(dl_url, headers=HEADERS)
                    with urllib.request.urlopen(dreq, timeout=25) as dr, open(temp_filepath, 'wb') as out_f:
                        out_f.write(dr.read())
                        
                    # Sobe direto pro Google Drive do suporte na pasta correta
                    up_cmd = [RCLONE, "copyto", temp_filepath, f"{target_drive_folder}/{filename}"]
                    subprocess.run(up_cmd, capture_output=True)
                    
                    # Remove arquivo temporário pra não pesar o disco local
                    os.remove(temp_filepath)
                    
                    existing_in_drive.add(filename)
                    total_uploaded += 1
                    print(f"  ☁️ [OK] Subiu para o Drive: {mod['folder']}/{filename}")
                    time.sleep(0.5)
                except Exception:
                    if os.path.exists(temp_filepath):
                        os.remove(temp_filepath)
        except Exception:
            pass

print("\n" + "="*70)
print(f"🎉 CICLO DE MINERAÇÃO CONCLUÍDO! Total de novos livros no Drive: {total_uploaded}")
print("="*70)
