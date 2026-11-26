import urllib.request
import json

token = "ya29.a0AehfTOmZhr9wQohdXxWBFl2eWr1bhqnhfgIKQkFEjBrBle7p-MKQZJ-TMpuLlS1W6KPXdCTT6VoDPGb-KAuBPxheYRLzvieTuSSYGZj7_UXB7ZcIaMUjFlasCuaU5hDUoaFnCetLaCerGrYbmnZuo9lFdfcXpm82PEJvvAqmyZ3mIdTjiyiwag9KDr5bettwYR8vyA8aCgYKAfoSARQSFQHGX2MilSiPrIbpRhuQSeOUSiZ8LQ0206"
url = "https://www.googleapis.com/drive/v3/about?fields=user"

try:
    req = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}"})
    with urllib.request.urlopen(req) as r:
        info = json.loads(r.read().decode('utf-8'))
        print("Dono da conta conectada:", info.get("user", {}).get("emailAddress"))
except Exception as e:
    print("Erro Drive API:", e)
