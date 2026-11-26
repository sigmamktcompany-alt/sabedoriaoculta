import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import http.server
import socketserver
import threading

PORT = 8133

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory="app", **kwargs)

httpd = socketserver.TCPServer(("", PORT), Handler)
t = threading.Thread(target=httpd.serve_forever)
t.daemon = True
t.start()
print(f"Server started on {PORT}")

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

    # Bypass gate if present
    driver.execute_script("""
        localStorage.setItem('cupula33_user_email', 'loisianavida123@gmail.com');
        localStorage.setItem('cupula33_user_tier', 'master');
        if (typeof bypassGateDirectly === 'function') bypassGateDirectly();
        if (typeof switchTab === 'function') switchTab('books');
    """)
    time.sleep(2)

    # Let's see what happens if we click a theme or filter by theme
    print("Filtering by theme 'Hermetismo & Cabala' or finding 'Doutrina Secreta'...")
    driver.execute_script("""
        openCategoryDetail('Hermetismo & Cabala');
    """)
    time.sleep(2)

    # Check visible books in categoryDetailBooksGrid
    cards = driver.find_elements(By.CSS_SELECTOR, "#categoryDetailBooksGrid > div")
    print(f"Total cards rendered in category detail: {len(cards)}")

    # Find the card for Doutrina Secreta
    doutrina_card = None
    for card in cards:
        if "doutrina secreta" in card.text.lower():
            doutrina_card = card
            print(f"Found Doutrina Secreta card! Text:\n{card.text}")
            break

    if not doutrina_card:
        print("Doutrina Secreta card NOT found in 'Hermetismo & Cabala'. Searching across all cards...")
        # Check all books in window.BOOKS_DATABASE with 'doutrina'
        res = driver.execute_script("""
            const ds = window.BOOKS_DATABASE.filter(b => b.title.toLowerCase().includes('doutrina'));
            return ds.map(b => ({ id: b.id, title: b.title, category: b.category, module: b.module }));
        """)
        print(f"Books matching doutrina in DB: {res}")

    if doutrina_card:
        print("Attempting to click Doutrina Secreta card...")
        # Get console logs before click
        pre_logs = driver.get_log("browser")
        
        # Click the card
        doutrina_card.click()
        time.sleep(2)

        # Check modal state
        modal = driver.find_element(By.ID, "bookModal")
        is_modal_visible = not ("hidden" in modal.get_attribute("class"))
        modal_title = driver.find_element(By.ID, "modalBookTitle").text
        print(f"Book modal visible: {is_modal_visible}, Modal Title: '{modal_title}'")

        # Now click 'Ler Obra Completa'
        read_btn = driver.find_element(By.ID, "modalReadBtn")
        print("Clicking 'Ler Obra Completa' button...")
        read_btn.click()
        time.sleep(5)

        # Check reader modal
        reader_modal = driver.find_element(By.ID, "readerModal")
        reader_visible = not ("hidden" in reader_modal.get_attribute("class"))
        reader_title = driver.find_element(By.ID, "readerTitle").text
        print(f"Reader modal visible: {reader_visible}, Reader Title: '{reader_title}'")

        # Check rendered pages inside readerNativeContainer
        rendered_pages = driver.find_elements(By.CSS_SELECTOR, "#readerNativeContainer .pdf-page-wrapper")
        print(f"Rendered page wrappers: {len(rendered_pages)}")

        canvas_list = driver.find_elements(By.CSS_SELECTOR, "#readerNativeContainer canvas")
        print(f"Rendered canvases: {len(canvas_list)}")

    post_logs = driver.get_log("browser")
    print(f"Browser logs ({len(post_logs)} entries):")
    for log in post_logs:
        print(f"  [{log['level']}] {log['message']}")

finally:
    driver.quit()
    httpd.shutdown()
