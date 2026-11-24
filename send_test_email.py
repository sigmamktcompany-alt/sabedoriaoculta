#!/usr/bin/env python3
"""
CÚPULA 33 - SCRIPT DE TESTE DE DISPARO DE E-MAIL
Permite testar o envio de e-mail de acesso para qualquer endereço.
Uso:
  python3 send_test_email.py seu-email@exemplo.com [Nome] [Senha]
"""

import sys
import os

# Adiciona o diretório app ao path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "app"))

from webhook_server import dispatch_access_email, load_config

def main():
    if len(sys.argv) < 2:
        print("Uso: python3 send_test_email.py <email_destino> [nome] [senha]")
        print("Exemplo: python3 send_test_email.py meuemail@gmail.com 'Carlos MKT' 'cupula@33'")
        sys.exit(1)

    to_email = sys.argv[1].strip().lower()
    name = sys.argv[2] if len(sys.argv) > 2 else "Iniciado"
    password = sys.argv[3] if len(sys.argv) > 3 else "cupula@33"

    print("=" * 60)
    print("⚡ TESTE DE DISPARO DE E-MAIL • CÚPULA 33")
    print("=" * 60)
    print(f"Destinatário: {name} <{to_email}>")
    print(f"Senha: {password}")

    cfg = load_config()
    print(f"Provedor configurado: {cfg.get('provider')}")
    print(f"De: {cfg.get('from_email')}")
    print(f"Resend Key: {'Configurada (' + cfg.get('resend_api_key')[:8] + '...)' if cfg.get('resend_api_key') else 'NÃO configurada'}")
    print(f"SMTP Host: {cfg.get('smtp_host')} (Usuário: {cfg.get('smtp_user') or 'NÃO configurado'})")
    print("-" * 60)

    res = dispatch_access_email(name, to_email, password)
    print("Resultado do envio:", res)
    if res.get("success"):
        print("✓ E-mail disparado com sucesso! Verifique a caixa de entrada / spam.")
    else:
        print(f"[-] Falha no envio: {res.get('error')}")
        print("💡 Para configurar o envio, edite 'app/email_config.json' colocando sua chave da Resend (ex: 're_...') ou seu usuário e senha SMTP da Hostinger.")

if __name__ == "__main__":
    main()
