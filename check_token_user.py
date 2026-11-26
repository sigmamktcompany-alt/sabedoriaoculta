import urllib.request
import json

token = "ya29.a0AehfTOmZhr9wQohdXxWBFl2eWr1bhqnhfgIKQkFEjBrBle7p-MKQZJ-TMpuLlS1W6KPXdCTT6VoDPGb-KAuBPxheYRLzvieTuSSYGZj7_UXB7ZcIaMUjFlasCuaU5hDUoaFnCetLaCerGrYbmnZuo9lFdfcXpm82PEJvvAqmyZ3mIdTjiyiwag9KDr5bettwYR8vyA8aCgYKAfoSARQSFQHGX2MilSiPrIbpRhuQSeOUSiZ8LQ0206"
url = f"https://www.googleapis.com/oauth2/v3/userinfo?access_token={token}"

try:
    req = urllib.request.Request(url)
    with urllib.request.urlopen(req) as r:
        info = json.loads(r.read().decode('utf-8'))
        print("Conta autorizada:", info.get("email"))
except Exception as e:
    print("Erro:", e)
