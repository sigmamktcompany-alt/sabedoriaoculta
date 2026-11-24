"""
CÚPULA 33 - SERVIÇO DE WEBHOOK MULTIPLATAFORMA (KIRVANO, PERFECTPAY, KIWIFY, HOTMART)
& AMBIENTE DE TESTES / AUTOMAÇÃO DE DISPARO DE E-MAIL COM RESEND API

Recursos:
1. Recebe webhooks de compra aprovada reais da Kirvano, Kiwify, Hotmart, PerfectPay.
2. Ambiente de teste de vendas (/api/simulate-sale e /sandbox).
3. Detecção automática e inteligente de Order Bump (Os Segredos da Prosperidade Maçônica).
4. Inicialização automática de todo aluno novo no Nível 1 e persistência no banco.
5. Sincronização em tempo real de cupula33_members.json e app.js.
6. Disparo automático do e-mail de acesso com credenciais via Resend API ou SMTP.
7. Ferramenta de teste de chaves Resend em tempo real (/api/test-resend).
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

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.dirname(BASE_DIR)
if ROOT_DIR not in sys.path:
    sys.path.insert(0, ROOT_DIR)

try:
    from email_template import render_cupula_email
except ImportError:
    def render_cupula_email(name, email, password, portal_url, vip_group_url, has_orderbump=False):
        bump_text = " [COM ORDER BUMP PROSPERIDADE]" if has_orderbump else ""
        return f"<p>Acesso Liberado para {name} ({email}){bump_text} - Senha: {password}</p>"

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
        "portal_url": "https://sabedoriaoculta.com/app/",
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

def sync_student_to_app_js(name, email, tier="master", has_bump=False):
    app_js_path = os.path.join(BASE_DIR, "app.js")
    if not os.path.exists(app_js_path):
        return
    try:
        with open(app_js_path, "r", encoding="utf-8") as f:
            content = f.read()

        clean_email = email.strip().lower()
        clean_name = name or clean_email.split("@")[0].title()

        # 1. Adicionar em KNOWN_STUDENT_NAMES se não existir
        if f'"{clean_email}"' not in content:
            target = "const KNOWN_STUDENT_NAMES = {"
            replacement = f'const KNOWN_STUDENT_NAMES = {{\n  "{clean_email}": "{clean_name}",'
            content = content.replace(target, replacement, 1)

        # 2. Adicionar em MASTER_ALLOWLIST se não existir e tier for master
        if tier == "master" and "const MASTER_ALLOWLIST = [" in content:
            allow_section = content.split("const MASTER_ALLOWLIST = [")[1].split("];")[0]
            if f'"{clean_email}"' not in allow_section:
                target = "const MASTER_ALLOWLIST = ["
                replacement = f'const MASTER_ALLOWLIST = [\n  "{clean_email}",'
                content = content.replace(target, replacement, 1)

        # 3. Adicionar em ORDERBUMP_PROSPERIDADE_ALLOWLIST se tiver bump
        if has_bump and "const ORDERBUMP_PROSPERIDADE_ALLOWLIST = [" in content:
            bump_section = content.split("const ORDERBUMP_PROSPERIDADE_ALLOWLIST = [")[1].split("];")[0]
            if f'"{clean_email}"' not in bump_section:
                target = "const ORDERBUMP_PROSPERIDADE_ALLOWLIST = ["
                replacement = f'const ORDERBUMP_PROSPERIDADE_ALLOWLIST = [\n  "{clean_email}",'
                content = content.replace(target, replacement, 1)

        with open(app_js_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"[SYNC APP.JS] Aluno {clean_email} sincronizado no app.js (Bump={has_bump})")
    except Exception as e:
        print(f"[SYNC APP.JS ERROR] {e}")

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
            pass
    return None

def send_email_resend(api_key, from_email, to_email, subject, html_content=None, template_id=None, template_vars=None):
    url = "https://api.resend.com/emails"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Cupula33/1.0"
    }
    payload = {
        "from": from_email,
        "to": [to_email]
    }
    if template_id:
        payload["template"] = {"id": template_id}
        if template_vars:
            payload["template"]["variables"] = template_vars
    else:
        payload["subject"] = subject
        payload["html"] = html_content

    req = urllib.request.Request(url, data=json.dumps(payload).encode("utf-8"), headers=headers, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            print(f"[RESEND SUCCESS] E-mail enviado para {to_email}: ID {data.get('id')}")
            return {"success": True, "provider": "resend", "id": data.get("id")}
    except urllib.error.HTTPError as e:
        err_msg = e.read().decode("utf-8")
        print(f"[RESEND HTTP ERROR {e.code}] {err_msg}")
        return {"success": False, "provider": "resend", "error": err_msg, "code": e.code}
    except Exception as e:
        print(f"[RESEND ERROR] {e}")
        return {"success": False, "provider": "resend", "error": str(e)}

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
        return {"success": True, "provider": "smtp"}
    except Exception as e:
        print(f"[SMTP ERROR] {e}")
        return {"success": False, "provider": "smtp", "error": str(e)}

def dispatch_access_email(name, email, password, has_orderbump=False):
    cfg = load_config()
    local_cfg = os.path.join(BASE_DIR, "email_config.local.json")
    if os.path.exists(local_cfg):
        try:
            with open(local_cfg, "r", encoding="utf-8") as f:
                cfg.update(json.load(f))
        except Exception:
            pass
    portal_url = cfg.get("portal_url", "https://sabedoriaoculta.com/app/")
    vip_group_url = cfg.get("vip_group_url", "https://chat.whatsapp.com/invite/cupula33-vip")
    from_email = cfg.get("from_email", "Cúpula 33 <onboarding@resend.dev>")
    subject = "Seu Acesso Master foi Liberado! • Cúpula 33"
    html = render_cupula_email(
        name=name,
        email=email,
        password=password,
        portal_url=portal_url,
        vip_group_url=vip_group_url,
        has_orderbump=has_orderbump
    )

    resend_key = cfg.get("resend_api_key", "").strip()
    smtp_user = cfg.get("smtp_user", "").strip()
    smtp_pass = cfg.get("smtp_password", "").strip()

    # 1. Tentar Resend se configurado (prioriza o template cadastrado no Resend)
    if resend_key and resend_key.startswith("re_"):
        print(f"[DISPATCH] Tentando envio via Resend para {email}...")
        template_id = cfg.get("resend_template_id", "c0225bd8-6763-4f23-820f-a35dfb6aa868")
        template_vars = {
            "name": name,
            "email": email,
            "password": password,
            "portal_url": portal_url,
            "vip_group_url": vip_group_url
        }
        res = send_email_resend(
            resend_key,
            from_email,
            email,
            subject,
            html_content=html,
            template_id=template_id,
            template_vars=template_vars
        )
        res["html_preview"] = html
        return res

    # 2. Tentar SMTP se configurado
    if smtp_user and smtp_pass:
        print(f"[DISPATCH] Tentando envio via SMTP para {email}...")
        host = cfg.get("smtp_host", "smtp.hostinger.com")
        port = int(cfg.get("smtp_port", 465))
        res = send_email_smtp(host, port, smtp_user, smtp_pass, from_email, email, subject, html)
        res["html_preview"] = html
        return res

    print(f"[DISPATCH WARNING] Nenhuma credencial de envio ativa. E-mail de {email} gerado para preview.")
    return {
        "success": False,
        "warning": "Credencial Resend inválida ou expirada. Gere uma nova chave em resend.com",
        "html_preview": html
    }

def process_sale_payload(data):
    """
    Processa uma venda de forma agnóstica (Kirvano, Kiwify, PerfectPay, Hotmart ou Teste)
    """
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

    if not email:
        return {"success": False, "error": "Nenhum e-mail identificado no payload"}

    email = email.strip().lower()
    name = (name or email.split("@")[0].title()).strip()
    sale_code = data.get("code") or data.get("sale_id") or data.get("order_id") or data.get("id") or "DIRECT_SALE"
    status = str(data.get("status") or data.get("sale_status") or data.get("event") or "approved").lower()

    is_refund = any(s in status for s in ["refund", "chargeback", "cancel", "devolvida"])
    active = not is_refund

    # Detecção inteligente de Order Bump (Kirvano / Kiwify / Testes)
    has_bump = False
    raw_str = json.dumps(data).lower()
    if data.get("has_order_bump") is True or data.get("order_bump") is True or data.get("has_prosperidade") is True:
        has_bump = True
    elif "items" in data and isinstance(data["items"], list):
        for it in data["items"]:
            it_name = str(it.get("name") or it.get("title") or "").lower()
            if any(k in it_name for k in ["prosperidade", "bump", "maçon", "orderbump"]):
                has_bump = True
    elif "products" in data and isinstance(data["products"], list):
        for pr in data["products"]:
            pr_name = str(pr.get("name") or pr.get("title") or pr).lower()
            if any(k in pr_name for k in ["prosperidade", "bump", "maçon", "orderbump"]):
                has_bump = True
    elif "prosperidade" in raw_str or "orderbump" in raw_str:
        has_bump = True

    tier = data.get("tier") or "master"
    cfg = load_config()
    local_cfg = os.path.join(BASE_DIR, "email_config.local.json")
    if os.path.exists(local_cfg):
        try:
            with open(local_cfg, "r", encoding="utf-8") as f:
                cfg.update(json.load(f))
        except Exception:
            pass
    default_pass = cfg.get("default_password", "cupula@33")

    # 1. Gravar em cupula33_members.json
    local_db = load_local_members()
    local_db.setdefault("members", {})

    if active:
        local_db["members"][email] = {
            "name": name,
            "password": default_pass,
            "tier": tier,
            "level": 1, # Todo aluno novo inicia no Nível 1
            "has_prosperidade": has_bump,
            "has_orderbump": has_bump,
            "active": True,
            "status": "approved",
            "sale_code": str(sale_code),
            "updated_at": time.time()
        }
        sync_student_to_app_js(name, email, tier=tier, has_bump=has_bump)
    else:
        if email in local_db["members"]:
            del local_db["members"][email]

    save_local_members(local_db)

    # 2. Gravar no Supabase
    supabase_upsert_member(email, name=name, tier=tier, sale_code=str(sale_code), active=active)

    # 3. Disparo do e-mail de acesso
    email_res = None
    should_send = data.get("send_email", True)
    if active and should_send:
        email_res = dispatch_access_email(name, email, default_pass, has_orderbump=has_bump)

    portal_url = cfg.get("portal_url", "https://sabedoriaoculta.com/app/")

    return {
        "success": True,
        "email": email,
        "name": name,
        "tier": tier,
        "level": 1,
        "has_prosperidade": has_bump,
        "status": "approved" if active else "revoked",
        "sale_code": str(sale_code),
        "email_dispatched": email_res,
        "test_login_url": f"{portal_url}?email={email}&autologin=1"
    }

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

        # 1. Rota de verificação de membro (/api/verify?email=...)
        if path in ["/api/verify", "/verify"]:
            email = query.get("email", [""])[0].strip().lower()
            if not email:
                self._set_cors_headers(400)
                self.wfile.write(json.dumps({"success": False, "error": "Email is required"}).encode("utf-8"))
                return

            if email in MASTER_EMAILS or email.endswith("@cupula33.com"):
                self._set_cors_headers(200)
                self.wfile.write(json.dumps({"success": True, "authorized": True, "tier": "master", "level": 1, "source": "whitelist"}).encode("utf-8"))
                return

            local_db = load_local_members()
            if email in local_db.get("members", {}):
                m = local_db["members"][email]
                self._set_cors_headers(200)
                self.wfile.write(json.dumps({
                    "success": True,
                    "authorized": True,
                    "tier": m.get("tier", "master"),
                    "level": m.get("level", 1),
                    "has_prosperidade": bool(m.get("has_prosperidade") or m.get("has_orderbump")),
                    "source": "local_members"
                }).encode("utf-8"))
                return

            self._set_cors_headers(200)
            self.wfile.write(json.dumps({"success": True, "authorized": False}).encode("utf-8"))
            return

        # 2. Status geral do sistema (/api/status)
        if path in ["/api/status", "/status"]:
            cfg = load_config()
            db = load_local_members()
            self._set_cors_headers(200)
            self.wfile.write(json.dumps({
                "status": "online",
                "service": "Cúpula 33 Webhook & Email Engine",
                "total_members": len(db.get("members", {})),
                "resend_key_configured": bool(cfg.get("resend_api_key", "").startswith("re_")),
                "smtp_configured": bool(cfg.get("smtp_user")),
                "from_email": cfg.get("from_email")
            }).encode("utf-8"))
            return

        # 3. Servir página do Sandbox de Testes (/sandbox ou /test)
        if path in ["/sandbox", "/test", "/tester"]:
            sandbox_file = os.path.join(BASE_DIR, "sandbox.html")
            if os.path.exists(sandbox_file):
                with open(sandbox_file, "r", encoding="utf-8") as f:
                    content = f.read()
                self._set_cors_headers(200, content_type="text/html; charset=utf-8")
                self.wfile.write(content.encode("utf-8"))
                return

        # 4. Preview do E-mail de Boas-Vindas (/api/email-preview)
        if path == "/api/email-preview":
            preview_email = query.get("email", ["aluno@cupula33.com"])[0]
            preview_name = query.get("name", ["Iniciado"])[0]
            preview_bump = query.get("orderbump", ["1"])[0] in ["1", "true", "yes"]

            html_email = generate_welcome_email(preview_name, preview_email, has_orderbump=preview_bump)
            self._set_cors_headers(200, content_type="text/html; charset=utf-8")
            self.wfile.write(html_email.encode("utf-8"))
            return

        self._set_cors_headers(404)
        self.wfile.write(json.dumps({"error": "Endpoint não encontrado"}).encode("utf-8"))

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

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

        # 1. Rota de Webhook Oficial (Kirvano / Kiwify) ou Simulação de Venda
        if path in ["/api/webhook", "/webhook", "/api/simulate-sale", "/simulate"]:
            result = process_sale_payload(data)
            self._set_cors_headers(200 if result.get("success") else 400)
            self.wfile.write(json.dumps(result, ensure_ascii=False).encode("utf-8"))
            return

        # 2. Rota de Teste Direto de Chave Resend (/api/test-resend)
        if path in ["/api/test-resend", "/test-resend"]:
            key = data.get("api_key") or load_config().get("resend_api_key")
            from_email = data.get("from_email") or load_config().get("from_email", "Cúpula 33 <onboarding@resend.dev>")
            to_email = data.get("to_email", "sigmamarketing@gmail.com")

            test_html = "<h2>Teste de Disparo Cúpula 33</h2><p>Chave Resend validada com sucesso!</p>"
            res = send_email_resend(key, from_email, to_email, "Teste de Conexão Resend • Cúpula 33", test_html)

            # Salva na configuração se o teste for bem sucedido ou se o usuário pediu
            if data.get("save_config") and key:
                cfg = load_config()
                cfg["resend_api_key"] = key
                if "from_email" in data:
                    cfg["from_email"] = from_email
                try:
                    with open(CONFIG_FILE, "w", encoding="utf-8") as f:
                        json.dump(cfg, f, indent=2)
                except Exception:
                    pass

            self._set_cors_headers(200)
            self.wfile.write(json.dumps(res).encode("utf-8"))
            return

        self._set_cors_headers(404)
        self.wfile.write(json.dumps({"error": "Endpoint não encontrado"}).encode("utf-8"))

def run():
    server_address = ("", PORT)
    httpd = HTTPServer(server_address, WebhookAutomationHandler)
    print(f"⚡ Automação Cúpula 33 rodando na porta {PORT}")
    print(f"   Webhook: http://127.0.0.1:{PORT}/api/webhook")
    print(f"   Ambiente de Testes (Sandbox): http://127.0.0.1:{PORT}/sandbox")
    httpd.serve_forever()

if __name__ == "__main__":
    run()
