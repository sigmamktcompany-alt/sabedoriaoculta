import json

EMAIL = "tjoaquim627@gmail.com"
NAME = "Tamara S Joaquim"

print("="*60)
print(f"Adicionando cliente: {NAME} <{EMAIL}>")
print("="*60)

# 1. Atualizar cupula33_members.json
members_path = "app/cupula33_members.json"
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
    print("[+] app/cupula33_members.json atualizado com sucesso!")
except Exception as e:
    print("[-] Erro ao atualizar cupula33_members.json:", e)

# 2. Atualizar app/app.js
appjs_path = "app/app.js"
try:
    with open(appjs_path, "r", encoding="utf-8") as f:
        js = f.read()

    # KNOWN_STUDENT_NAMES
    target_names = 'const KNOWN_STUDENT_NAMES = {'
    replacement_names = f'const KNOWN_STUDENT_NAMES = {{\n  "{EMAIL}": "{NAME}",'
    if EMAIL not in js and target_names in js:
        js = js.replace(target_names, replacement_names, 1)

    # MASTER_ALLOWLIST
    target_allowlist = 'const MASTER_ALLOWLIST = ['
    replacement_allowlist = f'const MASTER_ALLOWLIST = [\n  "{EMAIL}",'
    if f'"{EMAIL}"' not in js and target_allowlist in js:
        js = js.replace(target_allowlist, replacement_allowlist, 1)

    with open(appjs_path, "w", encoding="utf-8") as f:
        f.write(js)
    print("[+] app/app.js atualizado com KNOWN_STUDENT_NAMES e MASTER_ALLOWLIST!")
except Exception as e:
    print("[-] Erro ao atualizar app.js:", e)
