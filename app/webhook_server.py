"""
CÚPULA 33 - SERVIÇO DE WEBHOOK PERFECTPAY & API DE AUTENTICAÇÃO COM SUPABASE
Salva compradores diretamente no Supabase na tabela 'members'
e verifica autenticação instantânea com redundância em cache local.
"""

from http.server import HTTPServer, BaseHTTPRequestHandler
import json
import urllib.parse
import urllib.request
import os
import time

PORT = 8033
SUPABASE_URL = "https://wnfkbiqdyrxyuzgeekte.supabase.co"
SUPABASE_SECRET = "sb_secret_QuSI1iueatqHNwAo__i6fQ_NXgEfrZg"
DATA_FILE = "/Users/sigmamarketing/Desktop/cupula33/app/cupula33_members.json"

MASTER_EMAILS = [
    "suportesabedoriaoculta@gmail.com",
    "admin@cupula33.com",
    "sigmamarketing@gmail.com",
    "teste@cupula33.com",
    "testealuno@gmail.com",
    "cliente@example.com"
]

def supabase_get_member(email):
    url = f"{SUPABASE_URL}/rest/v1/members?email=eq.{urllib.parse.quote(email)}&select=*"
    req = urllib.request.Request(url, headers={
        "apikey": SUPABASE_SECRET,
        "Authorization": f"Bearer {SUPABASE_SECRET}",
        "Accept": "application/json"
    })
    try:
        with urllib.request.urlopen(req, timeout=5) as r:
            res = json.loads(r.read().decode("utf-8"))
            if res and len(res) > 0:
                return res[0]
    except Exception as e:
        print(f"[SUPABASE GET ERROR] {e}")
    return None

def supabase_upsert_member(email, tier="master", sale_code=None, active=True):
    existing = supabase_get_member(email)
    headers = {
        "apikey": SUPABASE_SECRET,
        "Authorization": f"Bearer {SUPABASE_SECRET}",
        "Content-Type": "application/json",
        "Prefer": "return=representation"
    }
    payload = {
        "email": email,
        "tier": tier,
        "active": active
    }
    if sale_code:
        payload["sale_code"] = sale_code

    try:
        if existing:
            # PATCH
            url = f"{SUPABASE_URL}/rest/v1/members?email=eq.{urllib.parse.quote(email)}"
            req = urllib.request.Request(url, data=json.dumps(payload).encode("utf-8"), headers=headers, method="PATCH")
        else:
            # POST
            url = f"{SUPABASE_URL}/rest/v1/members"
            req = urllib.request.Request(url, data=json.dumps(payload).encode("utf-8"), headers=headers, method="POST")

        with urllib.request.urlopen(req, timeout=5) as r:
            res = json.loads(r.read().decode("utf-8"))
            print(f"[SUPABASE UPSERT SUCCESS] {email} -> {tier}")
            return res
    except Exception as e:
        print(f"[SUPABASE UPSERT ERROR] {e}")
        return None

def load_local_members():
    if not os.path.exists(DATA_FILE):
        return {"members": {}}
    try:
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return {"members": {}}

def save_local_members(data):
    try:
        with open(DATA_FILE, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
    except Exception:
        pass

class PerfectPayHandler(BaseHTTPRequestHandler):
    def _set_cors_headers(self, status=200, content_type="application/json"):
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization, apikey")
        self.end_headers()

    def do_OPTIONS(self):
        self._set_cors_headers(200)

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        query = urllib.parse.parse_qs(parsed.query)

        if path in ["/api/verify", "/verify"]:
            email = query.get("email", [""])[0].strip().lower()
            if not email:
                self._set_cors_headers(400)
                self.wfile.write(json.dumps({"success": False, "error": "Email is required"}).encode("utf-8"))
                return

            # Whitelist imediata
            if email in MASTER_EMAILS or email.endswith("@cupula33.com"):
                self._set_cors_headers(200)
                self.wfile.write(json.dumps({
                    "success": True,
                    "authorized": True,
                    "email": email,
                    "tier": "master",
                    "source": "admin_whitelist"
                }).encode("utf-8"))
                return

            # Consulta no Supabase
            member = supabase_get_member(email)
            if member and member.get("active", True):
                self._set_cors_headers(200)
                self.wfile.write(json.dumps({
                    "success": True,
                    "authorized": True,
                    "email": email,
                    "tier": member.get("tier", "master"),
                    "source": "supabase"
                }).encode("utf-8"))
                return

            # Contingência no cache local
            local_db = load_local_members()
            if email in local_db.get("members", {}):
                m = local_db["members"][email]
                self._set_cors_headers(200)
                self.wfile.write(json.dumps({
                    "success": True,
                    "authorized": True,
                    "email": email,
                    "tier": m.get("tier", "master"),
                    "source": "local_cache"
                }).encode("utf-8"))
                return

            self._set_cors_headers(200)
            self.wfile.write(json.dumps({
                "success": True,
                "authorized": False,
                "email": email,
                "message": "E-mail não localizado na base do Supabase/PerfectPay"
            }).encode("utf-8"))
            return

        self._set_cors_headers(404)
        self.wfile.write(json.dumps({"error": "Endpoint not found"}).encode("utf-8"))

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        if path in ["/api/webhook", "/webhook"]:
            content_length = int(self.headers.get("Content-Length", 0))
            post_body = self.rfile.read(content_length)

            data = {}
            try:
                ctype = self.headers.get("Content-Type", "")
                if "application/json" in ctype:
                    data = json.loads(post_body.decode("utf-8"))
                else:
                    data = urllib.parse.parse_qs(post_body.decode("utf-8"))
                    data = {k: v[0] if isinstance(v, list) and len(v) == 1 else v for k, v in data.items()}
            except Exception as e:
                self._set_cors_headers(400)
                self.wfile.write(json.dumps({"success": False, "error": f"Invalid payload: {e}"}).encode("utf-8"))
                return

            # Extração dos dados da PerfectPay
            email = None
            if "customer" in data and isinstance(data["customer"], dict):
                email = data["customer"].get("email")
            elif "customer[email]" in data:
                email = data["customer[email]"]
            elif "email" in data:
                email = data["email"]
            elif "client_email" in data:
                email = data["client_email"]

            sale_code = data.get("sale_code") or data.get("code") or data.get("sale_id")
            status = str(data.get("sale_status_enum") or data.get("status") or data.get("sale_status") or "").lower()

            print(f"[PERFECTPAY WEBHOOK] E-mail: {email} | Status: {status} | Código: {sale_code}")

            if email:
                email = email.strip().lower()
                is_refund = any(s in status for s in ["refund", "chargeback", "cancel", "devolvida"])
                active = not is_refund
                tier = "master"

                # 1. Gravar direto no Supabase
                supabase_upsert_member(email, tier=tier, sale_code=sale_code, active=active)

                # 2. Gravar no cache local
                local_db = load_local_members()
                local_db.setdefault("members", {})
                if active:
                    local_db["members"][email] = {
                        "tier": tier,
                        "sale_code": sale_code,
                        "status": status,
                        "time": time.time()
                    }
                else:
                    if email in local_db["members"]:
                        del local_db["members"][email]
                save_local_members(local_db)

                self._set_cors_headers(200)
                self.wfile.write(json.dumps({
                    "success": True,
                    "email": email,
                    "status": "processed",
                    "supabase": True
                }).encode("utf-8"))
            else:
                self._set_cors_headers(200)
                self.wfile.write(json.dumps({"success": True, "warning": "No email identified"}).encode("utf-8"))
            return

        self._set_cors_headers(404)
        self.wfile.write(json.dumps({"error": "Endpoint not found"}).encode("utf-8"))

def run():
    server_address = ("", PORT)
    httpd = HTTPServer(server_address, PerfectPayHandler)
    print(f"⚡ Servidor Webhook Cúpula 33 conectado ao Supabase na porta {PORT}")
    httpd.serve_forever()

if __name__ == "__main__":
    run()
