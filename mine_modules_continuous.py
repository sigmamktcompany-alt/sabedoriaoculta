import urllib.request
import json
import subprocess
import os
import time

RCLONE = "/Users/sigmamarketing/Desktop/brainsyncproject.com-main/rclone"
ROOT_DRIVE = "suporte_drive:Cúpula 33 - Acervo Completo 2500 Obras"
TEMP_DIR = "/Users/sigmamarketing/Desktop/cupula33/temp_miner"
os.makedirs(TEMP_DIR, exist_ok=True)

HEADERS = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'}

MODULES = [
    {
        "folder": "Módulo VI - Mente & Projeção Astral",
        "terms": ["projecao astral", "viagem astral", "desdobramento astral", "experiencia fora do corpo", "sonhos lucidos", "kardec", "espiritismo", "teosofia", "mente humana", "hipnose", "parapsicologia", "psiquismo", "chacras", "aura humana", "clarividencia"]
    },
    {
        "folder": "Módulo I - Hermetismo & Cabala",
        "terms": ["caibalion", "hermetismo", "cabala judaica", "sefer yetzirah", "zohar", "dion fortune", "hermes trismegisto", "arvore da vida", "astrologia hermetica"]
    },
    {
        "folder": "Módulo II - Grimórios & Alta Magia",
        "terms": ["alta magia", "eliphas levi", "sao cipriano", "franz bardon", "clavicula de salomao", "goetia", "grimorio", "magia cerimonial", "teurgia", "invocacao"]
    },
    {
        "folder": "Módulo III - Gnosticismo & Apócrifos",
        "terms": ["gnosticismo", "nag hammadi", "livro de enoque", "evangelho apocrifo", "manuscritos de qumran", "pistis sophia", "apocalipse de pedro", "heresias"]
    },
    {
        "folder": "Módulo IV - Alquimia & Transmutação",
        "terms": ["alquimia", "pedra filosofal", "splendor solis", "paracelso", "espagiria", "julius evola alquimia", "transmutacao mental", "ouro filosofal", "hermetismo alquimico"]
    },
    {
        "folder": "Módulo V - Sociedades Secretas",
        "terms": ["maconaria", "rosacruz", "illuminati", "ordem templaria", "cavaleiros templarios", "martinismo", "ritos maconicos", "albert pike", "historia da maconaria"]
    }
]

print("="*70)
print("🚀 MINERADOR CONTÍNUO MULTI-TERMO INICIADO")
print("="*70)

for mod in MODULES:
    target_drive_folder = f"{ROOT_DRIVE}/{mod['folder']}"
    print(f"\n📁 Minerando para {mod['folder']}...")
    
    # Lista arquivos existentes
    res_list = subprocess.run([RCLONE, "lsjson", target_drive_folder], capture_output=True, text=True)
    existing_in_drive = set()
    try:
        items = json.loads(res_list.stdout)
        existing_in_drive = {it["Name"] for it in items if not it.get("IsDir")}
    except Exception:
        pass
        
    print(f"[*] Total atual na pasta: {len(existing_in_drive)}")
    
    for term in mod["terms"]:
        url = f"https://archive.org/advancedsearch.php?q=({urllib.parse.quote(term)})+AND+language:por+AND+mediatype:texts&fl[]=identifier,title,creator&rows=25&output=json"
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
                    
                try:
                    meta_url = f"https://archive.org/metadata/{ident}/files"
                    mreq = urllib.request.Request(meta_url, headers=HEADERS)
                    with urllib.request.urlopen(mreq, timeout=8) as mr:
                        files = json.loads(mr.read().decode('utf-8')).get('result', [])
                        
                    pdf_files = [f for f in files if f.get('name', '').endswith('.pdf') and 25000 < int(f.get('size', 0)) < 30000000]
                    if not pdf_files:
                        continue
                        
                    chosen = sorted(pdf_files, key=lambda x: int(x.get('size', 0)))[0]
                    dl_url = f"https://archive.org/download/{ident}/{chosen['name']}"
                    
                    temp_filepath = os.path.join(TEMP_DIR, filename)
                    dreq = urllib.request.Request(dl_url, headers=HEADERS)
                    with urllib.request.urlopen(dreq, timeout=25) as dr, open(temp_filepath, 'wb') as out_f:
                        out_f.write(dr.read())
                        
                    up_cmd = [RCLONE, "copyto", temp_filepath, f"{target_drive_folder}/{filename}"]
                    subprocess.run(up_cmd, capture_output=True)
                    
                    if os.path.exists(temp_filepath):
                        os.remove(temp_filepath)
                        
                    existing_in_drive.add(filename)
                    print(f"  ☁️ [OK] {mod['folder']} -> {filename}")
                    time.sleep(0.4)
                except Exception:
                    if os.path.exists(temp_filepath):
                        os.remove(temp_filepath)
        except Exception:
            pass

print("\n🎉 Ciclo de mineração multi-termo finalizado!")
