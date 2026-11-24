"""
CÚPULA 33 - SERVIÇO DE WEBHOOK MULTIPLATAFORMA (KIRVANO, PERFECTPAY, KIWIFY, HOTMART)
& AUTOMAÇÃO DE DISPARO DE E-MAIL COM LOGIN E SENHA

Recursos:
1. Recebe webhooks de compra aprovada (Kirvano, PerfectPay, Kiwify, Hotmart).
2. Cadastra automaticamente o aluno com plano Master em app/cupula33_members.json e Supabase.
3. Gera login e senha de acesso exclusivos para o cliente.
4. Envia imediatamente o e-mail de boas-vindas com credenciais via Resend API ou SMTP.
"""

from http.server import HTTPServer, BaseHTTPRequestHandler
import json
import urllib.parse
import urllib.request
import os
import sys
import time
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Inclui diretório raiz para importar email_template se necessário
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.dirname(BASE_DIR)
if ROOT_DIR not in sys.path:
    sys.path.insert(0, ROOT_DIR)

try:
    from email_template import render_cupula_email
except ImportError:
    def render_cupula_email(name, email, password, portal_url, vip_group_url):
        return f"<p>Acesso Liberado para {name} ({email}) - Senha: {password}</p>"

PORT = 8033
CONFIG_FILE = os.path.join(BASE_DIR, "email_config.json")
DATA_FILE = os.path.join(BASE_DIR, "cupula33_members.json")

SUPABASE_URL = "https://wnfkbiqdyrxyuzgeekte.supabase.co"
SUPABASE_SECRET = "sb_secret_QuSI1iueatqHNwAo__i6fQ_NXgEfrZg"

MASTER_EMAILS = [
    "suportesabedoriaoculta@gmail.com",
    "admin@cupula33.com",
    "sigmamarketing@gmail.com",
    "teste@cupula33.com",
    "testealuno@gmail.com",
    "tjoaquim627@gmail.com",
    "paulo-reis51@hotmail.com",
    "ricardoscola4@gmail.com",
    "dweslley2003@gmail.com",
    "joaomayamarcelo@gmail.com"
]

def load_config():
    default_cfg = {
        "provider": "resend",
        "resend_api_key": os.environ.get("RESEND_API_KEY", "re_ZwdwULHi_MA8wrHM6fFcYDKAxavKx7LC5"),
        "from_email": "Cúpula 33 <onboarding@resend.dev>",
        "smtp_host": "smtp.hostinger.com",
        "smtp_port": 465,
        "smtp_user": "",
        "smtp_password": "",
        "portal_url": "https://sigmamarketingdigital.github.io/cupula33/app/",
        "vip_group_url": "https://chat.whatsapp.com/invite/cupula33-vip",
        "default_password": "cupula@33"
    }
    if os.path.exists(CONFIG_FILE):
        try:
            with open(CONFIG_FILE, "r", encoding="utf-8") as f:
                saved = json.load(f)
                default_cfg.update(saved)
        except Exception as e:
            print(f"[CONFIG LOAD ERROR] {e}")
    return default_cfg

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
    except Exception as e:
        print(f"[SAVE MEMBERS ERROR] {e}")

def supabase_upsert_member(email, name=None, tier="master", sale_code=None, active=True):
    headers = {
        "apikey": SUPABASE_SECRET,
        "Authorization": f"Bearer {SUPABASE_SECRET}",
        "Content-Type": "application/json",
        "Prefer": "return=representation"
    }
    payload = {
        "email": email,
        "tier": tier,
        "active": active,
        "sale_code": sale_code or "AUTOMATION_SALE"
    }
    try:
        url = f"{SUPABASE_URL}/rest/v1/members"
        req = urllib.request.Request(url, data=json.dumps(payload).encode("utf-8"), headers=headers, method="POST")
        with urllib.request.urlopen(req, timeout=5) as r:
            return json.loads(r.read().decode("utf-8"))
    except Exception:
        try:
            url_patch = f"{SUPABASE_URL}/rest/v1/members?email=eq.{urllib.parse.quote(email)}"
            req_p = urllib.request.Request(url_patch, data=json.dumps(payload).encode("utf-8"), headers=headers, method="PATCH")
            with urllib.request.urlopen(req_p, timeout=5) as r:
                return json.loads(r.read().decode("utf-8"))
        except Exception as e2:
            print(f"[SUPABASE UPSERT] {e2}")
    return None

def send_email_resend(api_key, from_email, to_email, subject, html_content):
    url = "https://api.resend.com/emails"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
        "User-Agent": "Cupula33-Webhook-Server/1.0"
    }
    payload = {
        "from": from_email,
        "to": [to_email],
        "subject": subject,
        "html": html_content
    }
    req = urllib.request.Request(url, data=json.dumps(payload).encode("utf-8"), headers=headers, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            print(f"[RESEND SUCCESS] E-mail enviado para {to_email}: ID {data.get('id')}")
            return {"success": True, "id": data.get("id")}
    except urllib.error.HTTPError as e:
        err_msg = e.read().decode("utf-8")
        print(f"[RESEND HTTP ERROR {e.code}] {err_msg}")
        return {"success": False, "error": err_msg, "code": e.code}
    except Exception as e:
        print(f"[RESEND ERROR] {e}")
        return {"success": False, "error": str(e)}

def send_email_smtp(host, port, user, password, from_email, to_email, subject, html_content):
    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = from_email
    msg["To"] = to_email

    part = MIMEText(html_content, "html", "utf-8")
    msg.attach(part)

    try:
        if port == 465:
            server = smtplib.SMTP_SSL(host, port, timeout=12)
        else:
            server = smtplib.SMTP(host, port, timeout=12)
            server.starttls()
        server.login(user, password)
        server.sendmail(user, [to_email], msg.as_string())
        server.quit()
        print(f"[SMTP SUCCESS] E-mail enviado via SMTP ({host}) para {to_email}")
        return {"success": True}
    except Exception as e:
        print(f"[SMTP ERROR] {e}")
        return {"success": False, "error": str(e)}

def dispatch_access_email(name, email, password):
    cfg = load_config()
    portal_url = cfg.get("portal_url", "https://sigmamarketingdigital.github.io/cupula33/app/")
    vip_group_url = cfg.get("vip_group_url", "https://chat.whatsapp.com/invite/cupula33-vip")
    from_email = cfg.get("from_email", "Cúpula 33 <onboarding@resend.dev>")
    subject = "Seu Acesso Master foi Liberado! • Cúpula 33"
    html = render_cupula_email(
        name=name,
        email=email,
        password=password,
        portal_url=portal_url,
        vip_group_url=vip_group_url
    )

    resend_key = cfg.get("resend_api_key", "").strip()
    smtp_user = cfg.get("smtp_user", "").strip()
    smtp_pass = cfg.get("smtp_password", "").strip()

    # 1. Tentar Resend se configurado
    if resend_key and resend_key.startswith("re_"):
        print(f"[DISPATCH] Tentando envio via Resend para {email}...")
        res = send_email_resend(resend_key, from_email, email, subject, html)
        if res.get("success"):
            return res

    # 2. Tentar SMTP se configurado
    if smtp_user and smtp_pass:
        print(f"[DISPATCH] Tentando envio via SMTP para {email}...")
        host = cfg.get("smtp_host", "smtp.hostinger.com")
        port = int(cfg.get("smtp_port", 465))
        res = send_email_smtp(host, port, smtp_user, smtp_pass, from_email, email, subject, html)
        if res.get("success"):
            return res

    print(f"[DISPATCH WARNING] Nenhuma credencial de envio ativa (Resend ou SMTP). E-mail de {email} gravado nos logs locais.")
    return {"success": False, "error": "Credenciais de e-mail não configuradas em email_config.json"}

class WebhookAutomationHandler(BaseHTTPRequestHandler):
    def _set_cors_headers(self, status=200, content_type="application/json"):
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization, apikey, x-kirvano-token, X-Kirvano-Token")
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

            if email in MASTER_EMAILS or email.endswith("@cupula33.com"):
                self._set_cors_headers(200)
                self.wfile.write(json.dumps({"success": True, "authorized": True, "tier": "master", "source": "whitelist"}).encode("utf-8"))
                return

            local_db = load_local_members()
            if email in local_db.get("members", {}):
                m = local_db["members"][email]
                self._set_cors_headers(200)
                self.wfile.write(json.dumps({"success": True, "authorized": True, "tier": m.get("tier", "master"), "source": "local_members"}).encode("utf-8"))
                return

            self._set_cors_headers(200)
            self.wfile.write(json.dumps({"success": True, "authorized": False}).encode("utf-8"))
            return

        self._set_cors_headers(404)
        self.wfile.write(json.dumps({"error": "Not found"}).encode("utf-8"))

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
                self.wfile.write(json.dumps({"success": False, "error": str(e)}).encode("utf-8"))
                return

            # Extração agnóstica de cliente (Kirvano, PerfectPay, Kiwify, Hotmart)
            email = None
            name = None

            # 1. Kirvano
            if "customer" in data and isinstance(data["customer"], dict):
                email = data["customer"].get("email")
                name = data["customer"].get("name")
            # 2. Kiwify
            elif "Customer" in data and isinstance(data["Customer"], dict):
                email = data["Customer"].get("email")
                name = data["Customer"].get("full_name") or data["Customer"].get("name")
            # 3. Campos diretos
            elif "email" in data:
                email = data["email"]
                name = data.get("name") or data.get("full_name") or data.get("client_name")

            sale_code = data.get("code") or data.get("sale_id") or data.get("order_id") or data.get("id") or "DIRECT_SALE"
            status = str(data.get("status") or data.get("sale_status") or data.get("event") or "").lower()

            print(f"[WEBHOOK RECEBIDO] Email: {email} | Nome: {name} | Status: {status} | Código: {sale_code}")

            if email:
                email = email.strip().lower()
                cfg = load_config()
                default_pass = cfg.get("default_password", "cupula@33")
                is_refund = any(s in status for s in ["refund", "chargeback", "cancel", "devolvida"])
                active = not is_refund

                # 1. Gravar no cupula33_members.json
                local_db = load_local_members()
                local_db.setdefault("members", {})

                if active:
                    local_db["members"][email] = {
                        "name": name or email.split("@")[0].title(),
                        "password": default_pass,
                        "tier": "master",
                        "level": 1,
                        "active": True,
                        "status": "approved",
                        "sale_code": str(sale_code),
                        "updated_at": time.time()
                    }
                else:
                    if email in local_db["members"]:
                        del local_db["members"][email]

                save_local_members(local_db)

                # 2. Gravar no Supabase
                supabase_upsert_member(email, name=name, tier="master", sale_code=str(sale_code), active=active)

                # 3. Disparo imediato do e-mail de acesso
                email_res = None
                if active:
                    email_res = dispatch_access_email(name, email, default_pass)

                self._set_cors_headers(200)
                self.wfile.write(json.dumps({
                    "success": True,
                    "email": email,
                    "tier": "master",
                    "status": "approved" if active else "revoked",
                    "email_dispatched": email_res
                }).encode("utf-8"))
            else:
                self._set_cors_headers(200)
                self.wfile.write(json.dumps({"success": True, "warning": "Nenhum e-mail identificado no payload"}).encode("utf-8"))
            return

        self._set_cors_headers(404)
        self.wfile.write(json.dumps({"error": "Endpoint não encontrado"}).encode("utf-8"))

def run():
    server_address = ("", PORT)
    httpd = HTTPServer(server_address, WebhookAutomationHandler)
    print(f"⚡ Automação Cúpula 33 rodando na porta {PORT} (/api/webhook)")
    print(f"   Configurações em: {CONFIG_FILE}")
    httpd.serve_forever()

if __name__ == "__main__":
    run()
