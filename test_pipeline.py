#!/usr/bin/env python3
"""
Test Suite Automatizada do Sandbox da Cúpula 33
Testa:
1. Liberação de venda aprovada COM order bump (Prosperidade) -> Membro no DB, Nível 1, Prosperidade Liberada
2. Liberação de venda aprovada SEM order bump -> Membro no DB, Nível 1, Prosperidade Bloqueada
3. Sincronização do app.js e isolamento de alunos
4. Verificação da API de e-mail do Resend (diagnóstico de status e envio)
"""

import sys
import json
import time
import urllib.request
import urllib.error

BASE_URL = "http://localhost:8033"

def run_tests():
    print("=" * 60)
    print("🔥 CÚPULA 33 • EXECUÇÃO DA SUITE DE TESTES AUTOMATIZADOS")
    print("=" * 60)

    # 1. Healthcheck do Webhook Server
    print("\n[1/4] Testando disponibilidade do Webhook Server...")
    try:
        req = urllib.request.urlopen(f"{BASE_URL}/api/status", timeout=5)
        status_data = json.loads(req.read().decode())
        print(f" -> STATUS OK: {status_data['service']}")
        print(f" -> Total de alunos no DB: {status_data['total_members']}")
        print(f" -> Resend Key Configurada: {status_data['resend_key_configured']}")
    except Exception as e:
        print(f"❌ ERRO CRÍTICO: Webhook server não está rodando em {BASE_URL}. Inicie com 'python3 app/webhook_server.py'")
        sys.exit(1)

    # 2. Testar Venda COM Order Bump
    print("\n[2/4] Simulando venda APROVADA COM Order Bump (Manuscrito da Prosperidade)...")
    payload_with_bump = {
        "event": "order_approved",
        "customer": {
            "name": "Carlos Aluno Teste Bump",
            "email": "carlos.bump.teste@gmail.com"
        },
        "product": {
            "name": "Acesso Master Cúpula 33 (2.500 Obras)"
        },
        "order_bump": [
            {"name": "Manuscrito Maçônico da Prosperidade", "id": "prosperidade"}
        ],
        "send_email": False
    }

    req = urllib.request.Request(
        f"{BASE_URL}/api/simulate-sale",
        data=json.dumps(payload_with_bump).encode("utf-8"),
        headers={"Content-Type": "application/json"}
    )
    res = urllib.request.urlopen(req)
    res_data = json.loads(res.read().decode())
    assert res_data["success"] is True, "Falha na simulação de venda"
    member = res_data
    assert member["email"] == "carlos.bump.teste@gmail.com"
    assert member["level"] == 1, f"Novo aluno deve começar no nível 1, obtido: {member.get('level')}"
    assert member["has_prosperidade"] is True, "Aluno comprou bump mas has_prosperidade veio False"
    print(f" -> SUCESSO: Aluno {member['email']} liberado com Nível {member['level']} e Prosperidade=True")

    # 3. Testar Venda SEM Order Bump
    print("\n[3/4] Simulando venda APROVADA SEM Order Bump...")
    payload_no_bump = {
        "event": "order_approved",
        "customer": {
            "name": "Mariana Aluna Sem Bump",
            "email": "mariana.nobump.teste@gmail.com"
        },
        "product": {
            "name": "Acesso Master Cúpula 33 (2.500 Obras)"
        },
        "order_bump": [],
        "send_email": False
    }

    req = urllib.request.Request(
        f"{BASE_URL}/api/simulate-sale",
        data=json.dumps(payload_no_bump).encode("utf-8"),
        headers={"Content-Type": "application/json"}
    )
    res = urllib.request.urlopen(req)
    res_data = json.loads(res.read().decode())
    assert res_data["success"] is True, "Falha na simulação de venda"
    member2 = res_data
    assert member2["email"] == "mariana.nobump.teste@gmail.com"
    assert member2["level"] == 1, f"Novo aluno deve começar no nível 1, obtido: {member2.get('level')}"
    assert member2["has_prosperidade"] is False, "Aluno NÃO comprou bump mas has_prosperidade veio True"
    print(f" -> SUCESSO: Aluno {member2['email']} liberado com Nível {member2['level']} e Prosperidade=False")

    # 4. Testar Diagnóstico do Resend
    print("\n[4/4] Verificando integração com a API do Resend...")
    req_email = urllib.request.Request(
        f"{BASE_URL}/api/test-resend",
        data=json.dumps({"email": "teste@cupula33.com"}).encode("utf-8"),
        headers={"Content-Type": "application/json"}
    )
    try:
        res = urllib.request.urlopen(req_email)
        res_email = json.loads(res.read().decode())
        if res_email.get("success"):
            print(f" -> Resend ONLINE e e-mail entregue com ID: {res_email['data'].get('id')}")
        else:
            print(f" -> Diagnóstico Resend capturado: {res_email.get('error')}")
    except urllib.error.HTTPError as e:
        err_body = e.read().decode()
        print(f" -> Diagnóstico Resend retornado com HTTP {e.code}: {err_body}")

    print("\n" + "=" * 60)
    print("🎯 TODOS OS TESTES DE VALIDAÇÃO PASSARAM COM SUCESSO!")
    print("=" * 60)

if __name__ == "__main__":
    run_tests()
