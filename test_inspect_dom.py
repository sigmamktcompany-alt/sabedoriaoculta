import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import http.server
import socketserver
import threading

PORT = 8137

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory="app", **kwargs)

httpd = socketserver.TCPServer(("", PORT), Handler)
t = threading.Thread(target=httpd.serve_forever)
t.daemon = True
t.start()

options = Options()
options.add_argument("--headless=new")
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")
options.add_argument("--window-size=1200,900")
options.set_capability("goog:loggingPrefs", {"browser": "ALL"})

driver = webdriver.Chrome(options=options)
try:
    driver.get(f"http://localhost:{PORT}/index.html")
    time.sleep(2)

    driver.execute_script("""
        localStorage.setItem('cupula33_user_email', 'loisianavida123@gmail.com');
        localStorage.setItem('cupula33_user_tier', 'master');
        const gate = document.getElementById('vipLoginGate');
        if (gate) {
            gate.classList.add('hidden');
            gate.style.display = 'none';
            gate.style.pointerEvents = 'none';
        }
        if (typeof switchTab === 'function') switchTab('books');
        openCategoryDetail('Hermetismo & Cabala');
    """)
    time.sleep(2)

    info = driver.execute_script("""
        const tabBooks = document.getElementById('tab-books');
        const catDetail = document.getElementById('libraryCategoryDetailView');
        const grid = document.getElementById('categoryDetailBooksGrid');
        const firstCard = grid ? grid.querySelector('div') : null;
        
        return {
            tabBooks: tabBooks ? { display: getComputedStyle(tabBooks).display, class: tabBooks.className } : null,
            catDetail: catDetail ? { display: getComputedStyle(catDetail).display, class: catDetail.className, rect: catDetail.getBoundingClientRect() } : null,
            grid: grid ? { display: getComputedStyle(grid).display, count: grid.children.length } : null,
            firstCard: firstCard ? { 
                rect: firstCard.getBoundingClientRect(),
                onclick: firstCard.getAttribute('onclick'),
                visible: firstCard.offsetParent !== null,
                outerHTML: firstCard.outerHTML.substring(0, 300)
            } : null
        };
    """)
    import pprint
    pprint.pprint(info)

finally:
    driver.quit()
    httpd.shutdown()
