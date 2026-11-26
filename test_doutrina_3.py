import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import http.server
import socketserver
import threading

PORT = 8136

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
        if (typeof switchTab === 'function') switchTab('library');
        openCategoryDetail('Hermetismo & Cabala');
    """)
    time.sleep(2)

    cards = driver.find_elements(By.CSS_SELECTOR, "#categoryDetailBooksGrid > div")
    print(f"Total cards rendered in category detail: {len(cards)}")

    doutrina_card = None
    for idx, card in enumerate(cards):
        text = card.get_attribute("textContent").lower()
        if "doutrina secreta" in text:
            doutrina_card = card
            print(f"Card {idx} matches Doutrina Secreta: {card.get_attribute('textContent').strip()[:60]}")
            break

    if doutrina_card:
        driver.execute_script("arguments[0].scrollIntoView(true);", doutrina_card)
        time.sleep(1)

        print("Clicking Doutrina Secreta card via real click...")
        doutrina_card.click()
        time.sleep(2)

        modal = driver.find_element(By.ID, "bookModal")
        is_modal_visible = not ("hidden" in modal.get_attribute("class"))
        modal_title = driver.find_element(By.ID, "modalBookTitle").text
        print(f"Book modal visible: {is_modal_visible}, Modal Title: '{modal_title}'")

        # Now click 'Ler Manuscrito'
        read_btn = driver.find_element(By.ID, "modalBtnRead")
        print("Clicking 'Ler Manuscrito' button...")
        read_btn.click()
        
        # Wait up to 20 seconds for download / render
        for i in range(20):
            time.sleep(1)
            reader_modal = driver.find_element(By.ID, "readerModal")
            reader_visible = not ("hidden" in reader_modal.get_attribute("class"))
            canvas_list = driver.find_elements(By.CSS_SELECTOR, "#readerNativeContainer canvas")
            spinnerText = driver.find_element(By.ID, "readerLoadingText").text
            spinner = driver.find_element(By.ID, "readerLoadingSpinner")
            spinner_visible = not ("hidden" in spinner.get_attribute("class"))
            print(f"Sec {i+1}: Reader visible={reader_visible}, Spinner visible={spinner_visible} ('{spinnerText}'), Canvases={len(canvas_list)}")
            if len(canvas_list) > 0:
                print("SUCCESS! PDF Canvas rendered!")
                break

    post_logs = driver.get_log("browser")
    print(f"Browser logs ({len(post_logs)} entries):")
    for log in post_logs:
        print(f"  [{log['level']}] {log['message']}")

finally:
    driver.quit()
    httpd.shutdown()
