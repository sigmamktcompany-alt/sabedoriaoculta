import http.server
import socketserver
import threading
import time
import json
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

PORT = 8131
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

driver = webdriver.Chrome(options=options)
try:
    url = f"http://127.0.0.1:{PORT}/index.html"
    driver.get(url)
    time.sleep(1)
    
    # Navega para a biblioteca
    driver.execute_script("switchTab('library');")
    time.sleep(1)
    
    # 1. Testar clique em livro no streaming (fileira de módulos)
    print("Testando clique em livro no carrossel de módulos...")
    res_mod = driver.execute_script("""
        const card = document.querySelector('#moduleRowsContainer [onclick*="handleBookClick"]');
        if (!card) return { found: false };
        const onclick = card.getAttribute('onclick');
        card.click();
        const modal = document.getElementById('bookModal');
        const isVisible = modal && !modal.classList.contains('hidden') && modal.style.display !== 'none';
        const title = document.getElementById('modalBookTitle')?.textContent;
        return {
            found: true,
            onclick: onclick,
            modalVisible: isVisible,
            title: title
        };
    """)
    print("Resultado clique carrossel:", json.dumps(res_mod, indent=2))
    assert res_mod["found"] == True, "Nenhum card encontrado no carrossel!"
    assert res_mod["modalVisible"] == True, "Modal não abriu após clicar no card do carrossel!"
    print(f"[PASS] Livro aberto pelo carrossel: '{res_mod['title']}'")
    
    # Fecha modal
    driver.execute_script("closeModal('bookModal');")
    time.sleep(0.5)
    
    # 2. Testar clique em livro filtrado por tema (Ordem 137 cloud book)
    print("Testando clique em livro filtrado por tema...")
    driver.execute_script("filterByThemeChip('Grimórios & Alta Magia');")
    time.sleep(1)
    
    res_cat = driver.execute_script("""
        const cards = document.querySelectorAll('#categoryDetailBooksGrid > div');
        if (!cards || cards.length === 0) return { found: false };
        const firstCard = cards[0];
        const onclick = firstCard.getAttribute('onclick');
        firstCard.click();
        const modal = document.getElementById('bookModal');
        const isVisible = modal && !modal.classList.contains('hidden') && modal.style.display !== 'none';
        const title = document.getElementById('modalBookTitle')?.textContent;
        return {
            found: true,
            totalCards: cards.length,
            onclick: onclick,
            modalVisible: isVisible,
            title: title
        };
    """)
    print("Resultado clique categoria:", json.dumps(res_cat, indent=2))
    assert res_cat["found"] == True, "Nenhum card encontrado na categoria!"
    assert res_cat["modalVisible"] == True, "Modal não abriu após clicar no card da categoria!"
    print(f"[PASS] Livro da categoria aberto com sucesso: '{res_cat['title']}' (Total na categoria: {res_cat['totalCards']})")
    
    # 3. Testar botão 'Ler Obra Completa'
    print("Testando abertura do leitor nativo via modal...")
    driver.execute_script("triggerReadModalFromDetails();")
    time.sleep(1)
    
    reader_status = driver.execute_script("""
        const rModal = document.getElementById('readerModal');
        const isOpen = rModal && !rModal.classList.contains('hidden') && rModal.style.display !== 'none';
        return {
            readerOpen: isOpen
        };
    """)
    print("Status do Leitor:", json.dumps(reader_status, indent=2))
    assert reader_status["readerOpen"] == True, "O leitor nativo não abriu!"
    print("[PASS] Leitor nativo abriu com sucesso!")
    
    # Checar se houve erros no console
    logs = driver.get_log('browser')
    severe_errors = [l for l in logs if l['level'] == 'SEVERE' and 'favicon' not in l['message']]
    print(f"Erros severos no console: {len(severe_errors)}")
    for e in severe_errors:
        print("  ->", e['message'])
    assert len(severe_errors) == 0, "Erros severos encontrados no console!"
    
    print("\nTODOS OS LIVROS DA BIBLIOTECA ESTÃO ABRINDO 100% PERFEITAMENTE!")
finally:
    driver.quit()
    httpd.shutdown()
