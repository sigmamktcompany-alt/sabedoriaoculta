import http.server
import socketserver
import threading
import time
import json
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

PORT = 8129
DIRECTORY = "/Users/sigmamarketing/Desktop/cupula33/app"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

socketserver.TCPServer.allow_reuse_address = True
httpd = socketserver.TCPServer(("", PORT), Handler)
server_thread = threading.Thread(target=httpd.serve_forever)
server_thread.daemon = True
server_thread.start()
print(f"HTTP server running on port {PORT}")

options = Options()
options.add_argument("--headless=new")
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")
options.add_argument("--window-size=430,932")
options.add_argument("--autoplay-policy=no-user-gesture-required")

driver = webdriver.Chrome(options=options)
try:
    url = f"http://127.0.0.1:{PORT}/index.html"
    print(f"Opening {url}...")
    driver.get(url)
    
    # ==========================================
    # TESTE 1: CLIQUE EM LIVROS DA BIBLIOTECA
    # ==========================================
    print("\n--- TESTE 1: Clique em Livros da Biblioteca ---")
    driver.execute_script("switchTab('library');")
    time.sleep(1)
    
    # Filtrar por tema para carregar livros da nuvem Ordem 137
    driver.execute_script("filterByThemeChip('Hermetismo & Cabala');")
    time.sleep(1)
    
    # Encontra o primeiro card de livro e clica nele
    card_info = driver.execute_script("""
        const card = document.querySelector('#categoryDetailBooksGrid > div');
        if (!card) return null;
        const onclickAttr = card.getAttribute('onclick') || '';
        card.click();
        return {
            onclick: onclickAttr,
            modalVisible: !document.getElementById('bookModal')?.classList.contains('hidden'),
            modalTitle: document.getElementById('modalBookTitle')?.textContent
        };
    """)
    print("Card Click Result:", json.dumps(card_info, indent=2))
    assert card_info is not None, "Nenhum card encontrado na categoria!"
    assert card_info["modalVisible"] == True, "O modal do livro NÃO abriu ao clicar!"
    assert len(card_info["modalTitle"].strip()) > 0, "O modal do livro abriu sem título!"
    print(f"[PASS] Modal abriu com sucesso para a obra: '{card_info['modalTitle']}'!")
    
    # Fecha o modal
    driver.execute_script("closeModal('bookModal');")
    time.sleep(0.5)

    # ==========================================
    # TESTE 2: REPRODUÇÃO CONTÍNUA DE TODAS AS FREQUÊNCIAS
    # ==========================================
    print("\n--- TESTE 2: Frequências Contínuas (Sem Parar no Bip) ---")
    driver.execute_script("switchTab('audiobooks');")
    time.sleep(1)
    
    freqs_to_test = [432, 528, 396, 417]
    for hz in freqs_to_test:
        print(f"Testando {hz} Hz...")
        driver.execute_script(f"handleFrequencyClick({hz});")
        time.sleep(2) # Aguarda 2 segundos (muito além dos 120ms do antigo bip)
        
        status = driver.execute_script("""
            return {
                activeHz: activeFrequencyHz,
                oscCount: currentOscillators ? currentOscillators.length : 0,
                badge: document.getElementById('playerCurrentHz')?.textContent
            };
        """)
        print(f"Status {hz} Hz após 2s:", json.dumps(status))
        assert status["activeHz"] == hz, f"Frequência {hz} parou inesperadamente! activeHz: {status['activeHz']}"
        assert status["oscCount"] == 2, f"Osciladores de {hz} Hz morreram! oscCount: {status['oscCount']}"
        assert str(hz) in status["badge"], f"Badge não reflete {hz} Hz!"
        print(f"[PASS] {hz} Hz tocando perfeitamente sem interrupção!")

    driver.execute_script("stopFrequency(true);")
    time.sleep(0.5)

    # ==========================================
    # TESTE 3: BANCO DE DADOS DE CLIENTES E HISTÓRICO ISOLADO
    # ==========================================
    print("\n--- TESTE 3: Banco de Dados Isolado por Cliente ---")
    
    # 3.1 Cliente 1: Loisiana Lopes
    client1_res = driver.execute_script("""
        localStorage.setItem('cupula33_user_email', 'loisianavida123@gmail.com');
        localStorage.setItem('cupula33_user_tier', 'master');
        
        // Simula login de Loisiana
        const email = 'loisianavida123@gmail.com';
        const name = (typeof KNOWN_STUDENT_NAMES !== 'undefined' && KNOWN_STUDENT_NAMES[email]) || 'Loisiana Lopes';
        MemberDatabase.saveClientRecord({
            email: email,
            name: name,
            tier: 'master'
        });
        
        // Salva leitura para Loisiana: Livro 36, página 12 de 76
        saveReadingProgress(36, 12, 76);
        
        return {
            client: MemberDatabase.getClientRecord(email),
            savedProg: getSavedProgress(36),
            allClients: MemberDatabase.getAllClientsIndex()
        };
    """)
    print("Cliente 1 (Loisiana):", json.dumps(client1_res["client"], indent=2))
    assert client1_res["client"]["name"] == "Loisiana Lopes"
    assert client1_res["savedProg"]["page"] == 12
    print("[PASS] Dados de Loisiana Lopes salvos com sucesso!")

    # 3.2 Cliente 2: Paulo Reis (deve ter histórico isolado!)
    client2_res = driver.execute_script("""
        localStorage.setItem('cupula33_user_email', 'paulo-reis51@hotmail.com');
        localStorage.setItem('cupula33_user_tier', 'master');
        
        const email = 'paulo-reis51@hotmail.com';
        const name = (typeof KNOWN_STUDENT_NAMES !== 'undefined' && KNOWN_STUDENT_NAMES[email]) || 'Paulo Reis';
        MemberDatabase.saveClientRecord({
            email: email,
            name: name,
            tier: 'master'
        });
        
        // Salva leitura para Paulo: Livro 1, página 5 de 127
        saveReadingProgress(1, 5, 127);
        
        return {
            client: MemberDatabase.getClientRecord(email),
            progBook1: getSavedProgress(1),
            progBook36: MemberDatabase.getAllProgress(email)['36'] || null, // Não deve ter lido Enoque!
            allClients: MemberDatabase.getAllClientsIndex()
        };
    """)
    print("Cliente 2 (Paulo Reis):", json.dumps(client2_res["client"], indent=2))
    assert client2_res["client"]["name"] == "Paulo Reis"
    assert client2_res["progBook1"]["page"] == 5
    assert client2_res["progBook36"] is None, "Vazamento de progresso entre clientes detectado!"
    print("[PASS] Dados de Paulo Reis isolados com sucesso!")

    # 3.3 Verifica se o índice mestre contém os dois clientes
    all_clients = driver.execute_script("return MemberDatabase.getAllClientsIndex();")
    print("Índice de Clientes Cadastrados:", json.dumps(all_clients, indent=2))
    assert "loisianavida123@gmail.com" in all_clients
    assert "paulo-reis51@hotmail.com" in all_clients
    print("[PASS] Índice geral de clientes funcionando perfeitamente!")

    print("\n==============================================")
    print("TODOS OS TESTES FORAM APROVADOS COM 100% DE SUCESSO!")
    print("==============================================")

finally:
    driver.quit()
    httpd.shutdown()
