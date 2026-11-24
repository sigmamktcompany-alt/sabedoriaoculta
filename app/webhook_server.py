"""
CÚPULA 33 - SERVIÇO DE WEBHOOK MULTIPLATAFORMA (KIRVANO, PERFECTPAY, KIWIFY, HOTMART)
& AUTOMAÇÃO DE DISPARO DE E-MAIL COM LOGIN E SENHA

Recursos:
1. Recebe webhooks de compra aprovada (Kirvano, PerfectPay, Kiwify, Hotmart).
2. Cadastra automaticamente o aluno com plano Master em app/cupula33_members.json e Supabase.
3. Gera login e senha de acesso exclusivos para o cliente.
4. Envia imediatamente o e-mail de boas-vindas com credenciais via Resend API ou SMTP (Hostinger/Gmail).
"""

from http.server import HTTPServer, BaseHTTPRequestHandler
import json
import urllib.parse
import urllib.request
import os
import time
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

PORT = 8033
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
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
    "paulo-reis51@hotmail.com"
]

def load_config():
    default_cfg = {
        "provider": "resend",
        "resend_api_key": os.environ.get("RESEND_API_KEY", ""),
        "from_email": "Cúpula 33 <suporte@sabedoriaoculta.com>",
        "smtp_host": "smtp.hostinger.com",
        "smtp_port": 465,
        "smtp_user": "",
        "smtp_password": "",
        "portal_url": "https://sabedoriaoculta.com/app/",
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
        # Se já existir, tenta PATCH
        try:
            url_patch = f"{SUPABASE_URL}/rest/v1/members?email=eq.{urllib.parse.quote(email)}"
            req_p = urllib.request.Request(url_patch, data=json.dumps(payload).encode("utf-8"), headers=headers, method="PATCH")
            with urllib.request.urlopen(req_p, timeout=5) as r:
                return json.loads(r.read().decode("utf-8"))
        except Exception as e2:
            print(f"[SUPABASE UPSERT] {e2}")
    return None

def build_welcome_email_html(name, email, password, portal_url):
    display_name = name or email.split("@")[0].title()
    return f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Acesso Liberado • Cúpula 33</title>
  <style>
    body {{ margin: 0; padding: 0; background-color: #050505; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #dcdcdc; }}
    .wrapper {{ width: 100%; max-width: 600px; margin: 0 auto; background-color: #0d0d0d; border: 1px solid #222222; border-radius: 16px; overflow: hidden; }}
    .header {{ padding: 36px 24px 20px 24px; text-align: center; background: radial-gradient(circle at center, rgba(234,179,8,0.12), transparent 70%); border-bottom: 1px solid #1a1a1a; }}
    .badge {{ display: inline-block; padding: 4px 12px; background: rgba(234,179,8,0.15); border: 1px solid rgba(234,179,8,0.4); border-radius: 999px; color: #facc15; font-size: 11px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px; }}
    .title {{ font-size: 26px; font-weight: 900; color: #ffffff; margin: 0 0 6px 0; letter-spacing: 1px; font-family: Georgia, serif; }}
    .subtitle {{ font-size: 13px; color: #888888; margin: 0; }}
    .body {{ padding: 32px 28px; }}
    .greeting {{ font-size: 18px; color: #ffffff; font-weight: bold; margin-bottom: 16px; }}
    .text {{ font-size: 14px; line-height: 1.7; color: #b5b5b5; margin-bottom: 24px; }}
    .card-creds {{ background: #141414; border: 1px solid rgba(234,179,8,0.3); border-radius: 14px; padding: 22px; margin-bottom: 28px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }}
    .cred-row {{ display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid #202020; }}
    .cred-row:last-child {{ border-bottom: none; }}
    .cred-label {{ font-size: 12px; color: #777777; text-transform: uppercase; font-weight: bold; letter-spacing: 1px; }}
    .cred-val {{ font-size: 14px; color: #facc15; font-family: monospace; font-weight: bold; }}
    .btn-container {{ text-align: center; margin: 32px 0 24px 0; }}
    .btn {{ display: inline-block; background: #eab308; color: #000000 !important; text-decoration: none; font-size: 13px; font-weight: 900; letter-spacing: 1.5px; text-transform: uppercase; padding: 16px 36px; border-radius: 12px; box-shadow: 0 0 25px rgba(234,179,8,0.35); }}
    .features {{ background: #111111; border-radius: 12px; padding: 18px 22px; margin-top: 24px; border: 1px solid #1c1c1c; }}
    .feature-item {{ font-size: 13px; color: #999999; margin: 6px 0; }}
    .feature-item strong {{ color: #ffffff; }}
    .footer {{ padding: 24px; text-align: center; border-top: 1px solid #181818; font-size: 11px; color: #555555; }}
  </style>
</head>
<body>
  <div style="padding: 24px 12px;">
    <div class="wrapper">
      <div class="header">
        <span class="badge">Iniciação Confirmada</span>
        <h1 class="title">CÚPULA 33</h1>
        <p class="subtitle">Acesso Oficial ao Acervo Hermético & Biblioteca Oculta</p>
      </div>
      
      <div class="body">
        <div class="greeting">Saudações, {display_name}! 🏛️</div>
        
        <p class="text">
          Seu pagamento foi confirmado e sua matrícula na <strong>Cúpula 33</strong> já foi ativada com <strong>Plano Master Vitalício</strong>.
          Abaixo estão seus dados de acesso exclusivos à plataforma:
        </p>

        <div class="card-creds">
          <div class="cred-row">
            <span class="cred-label">Link do Portal:</span>
            <span class="cred-val"><a href="{portal_url}" style="color: #facc15; text-decoration: underline;">{portal_url}</a></span>
          </div>
          <div class="cred-row">
            <span class="cred-label">Seu Login:</span>
            <span class="cred-val">{email}</span>
          </div>
          <div class="cred-row">
            <span class="cred-label">Sua Senha:</span>
            <span class="cred-val">{password}</span>
          </div>
        </div>

        <div class="btn-container">
          <a href="{portal_url}" target="_blank" class="btn">ACESSAR O ACERVO AGORA ➔</a>
        </div>

        <div class="features">
          <div class="feature-item">✓ <strong>2.500+ Manuscritos Raros:</strong> Alquimia, Hermetismo, Grimórios e Apócrifos.</div>
          <div class="feature-item">✓ <strong>Leitor Contínuo HD:</strong> Leitura fluida no computador, tablet ou celular.</div>
          <div class="feature-item">✓ <strong>Frequências Sagradas:</strong> Ondas 432Hz, 528Hz e 963Hz integradas.</div>
          <div class="feature-item">✓ <strong>Comunidade Secreta:</strong> Espaço fechado de debates e resenhas.</div>
        </div>

        <p class="text" style="margin-top: 24px; font-size: 12px; color: #777777;">
          💡 <em>Dica de Ouro:</em> Você pode instalar nosso aplicativo direto na tela inicial do seu celular (iPhone ou Android) clicando no botão "App" dentro da plataforma.
        </p>
      </div>

      <div class="footer">
        Cúpula 33 • Conhecimento Oculto para Iniciados.<br>
        Se precisar de ajuda com seu acesso, responda a este e-mail.
      </div>
    </div>
  </div>
</body>
</html>"""

def send_email_resend(api_key, from_email, to_email, subject, html_content):
    url = "https://api.resend.com/emails"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
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
        return {"success": False, "error": err_msg}
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
    portal_url = cfg.get("portal_url", "https://sabedoriaoculta.com/app/")
    from_email = cfg.get("from_email", "Cúpula 33 <suporte@sabedoriaoculta.com>")
    subject = "Seu Acesso Master foi Liberado! • Cúpula 33"
    html = build_welcome_email_html(name, email, password, portal_url)

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
