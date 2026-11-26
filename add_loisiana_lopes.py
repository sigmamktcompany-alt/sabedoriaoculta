import urllib.request
import json
import os

SUPABASE_URL = "https://wnfkbiqdyrxyuzgeekte.supabase.co"
SUPABASE_SECRET = "sb_secret_QuSI1iueatqHNwAo__i6fQ_NXgEfrZg"
EMAIL = "loisianavida123@gmail.com"
NAME = "Loisiana Lopes"

print("="*60)
print(f"Cadastrando nova cliente: {NAME} <{EMAIL}>")
print("="*60)

# 1. Inserir/Atualizar no Supabase
headers = {
    "apikey": SUPABASE_SECRET,
    "Authorization": f"Bearer {SUPABASE_SECRET}",
    "Content-Type": "application/json",
    "Prefer": "return=representation"
}
payload = {
    "email": EMAIL,
    "tier": "master",
    "active": True,
    "sale_code": "MANUAL_APPROVAL_OFFICIAL"
}

try:
    url = f"{SUPABASE_URL}/rest/v1/members"
    req = urllib.request.Request(url, data=json.dumps(payload).encode("utf-8"), headers=headers, method="POST")
    with urllib.request.urlopen(req, timeout=8) as r:
        res = json.loads(r.read().decode("utf-8"))
        print("[+] Cadastrado com sucesso no Supabase:", res)
except Exception as e:
    print("[-] Supabase POST retornou erro (tentando PATCH se já existir):", e)
    try:
        url_patch = f"{SUPABASE_URL}/rest/v1/members?email=eq.{EMAIL}"
        req_p = urllib.request.Request(url_patch, data=json.dumps(payload).encode("utf-8"), headers=headers, method="PATCH")
        with urllib.request.urlopen(req_p, timeout=8) as r:
            res = json.loads(r.read().decode("utf-8"))
            print("[+] Atualizado no Supabase via PATCH:", res)
    except Exception as e2:
        print("[-] Erro no PATCH Supabase:", e2)

# 2. Atualizar cupula33_members.json
members_path = "/Users/sigmamarketing/Desktop/cupula33/app/cupula33_members.json"
try:
    with open(members_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    data.setdefault("members", {})[EMAIL] = {
        "name": NAME,
        "tier": "master",
        "active": True,
        "status": "approved",
        "sale_code": "MANUAL_APPROVAL_OFFICIAL"
    }
    
    with open(members_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print("[+] cupula33_members.json atualizado com sucesso!")
except Exception as e:
    print("[-] Erro ao atualizar cupula33_members.json:", e)

# 3. Atualizar app/app.js
appjs_path = "/Users/sigmamarketing/Desktop/cupula33/app/app.js"
try:
    with open(appjs_path, "r", encoding="utf-8") as f:
        js = f.read()

    # KNOWN_STUDENT_NAMES
    target_names = 'const KNOWN_STUDENT_NAMES = {'
    replacement_names = f'const KNOWN_STUDENT_NAMES = {{\n  "{EMAIL}": "{NAME}",'
    if EMAIL not in js and target_names in js:
        js = js.replace(target_names, replacement_names, 1)
        print("[+] Adicionado a KNOWN_STUDENT_NAMES")

    # MASTER_ALLOWLIST
    target_allowlist = 'const MASTER_ALLOWLIST = ['
    replacement_allowlist = f'const MASTER_ALLOWLIST = [\n  "{EMAIL}",'
    if f'"{EMAIL}"' not in js and target_allowlist in js:
        js = js.replace(target_allowlist, replacement_allowlist, 1)
        print("[+] Adicionado a MASTER_ALLOWLIST")

    with open(appjs_path, "w", encoding="utf-8") as f:
        f.write(js)
    print("[+] app/app.js salvo com sucesso!")
except Exception as e:
    print("[-] Erro ao atualizar app.js:", e)
