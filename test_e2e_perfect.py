import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import http.server
import socketserver
import threading

PORT = 8138

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
    print(f"Loading http://localhost:{PORT}/index.html ...")
    driver.get(f"http://localhost:{PORT}/index.html")
    time.sleep(2)

    # 1. Login with Loisiana Lopes
    print("Testing login with Loisiana Lopes...")
    driver.execute_script("""
        const emailInput = document.getElementById('gateEmailInput');
        if (emailInput) emailInput.value = 'loisianavida123@gmail.com';
        if (typeof authenticateGateLogin === 'function') authenticateGateLogin();
    """)
    time.sleep(2)

    # 2. Switch to library tab
    print("Switching to library tab...")
    driver.execute_script("""
        switchTab('library');
        filterByThemeChip('Hermetismo & Cabala');
    """)
    time.sleep(2)

    # 3. Find Doutrina Secreta card
    cards = driver.find_elements(By.CSS_SELECTOR, "#categoryDetailBooksGrid > div")
    print(f"Total cards rendered: {len(cards)}")

    doutrina_card = None
    for c in cards:
        if "doutrina secreta" in c.get_attribute("textContent").lower():
            doutrina_card = c
            print(f"Found Doutrina Secreta: {c.get_attribute('textContent').strip()[:60]}")
            break

    assert doutrina_card is not None, "Doutrina Secreta card not found!"

    # 4. Scroll to it and click the card directly
    driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", doutrina_card)
    time.sleep(1)

    print("Clicking Doutrina Secreta card DIRECTLY (1 tap)...")
    driver.execute_script("arguments[0].click();", doutrina_card)

    # 5. Verify readerModal opens and renders Page 1
    canvas_rendered = False
    for s in range(15):
        time.sleep(1)
        reader_modal = driver.find_element(By.ID, "readerModal")
        reader_visible = not ("hidden" in reader_modal.get_attribute("class"))
        canvases = driver.find_elements(By.CSS_SELECTOR, "#readerNativeContainer canvas")
        spinnerText = driver.find_element(By.ID, "readerLoadingText").text
        spinner = driver.find_element(By.ID, "readerLoadingSpinner")
        spinner_visible = not ("hidden" in spinner.get_attribute("class"))
        print(f"Sec {s+1}: Reader visible={reader_visible}, Spinner={spinner_visible} ('{spinnerText}'), Canvases={len(canvases)}")
        if len(canvases) > 0:
            canvas_rendered = True
            print(">>> SUCCESS! Page 1 canvas rendered instantly from signed URL! <<<")
            break

    assert canvas_rendered, "Failed to render PDF canvas!"

    # Take screenshot of reader
    driver.save_screenshot("/Users/sigmamarketing/.gemini/antigravity/brain/0705776d-8fe4-458c-91de-1d42702b314b/doutrina_direct_reader_success.png")
    print("Screenshot saved to doutrina_direct_reader_success.png")

    # 6. Now close reader and test the info button (i)
    close_reader_btn = driver.find_element(By.CSS_SELECTOR, "#readerModal button[onclick*='closeModal']")
    close_reader_btn.click()
    time.sleep(1)

    # Click the info button on the card
    info_btn = doutrina_card.find_element(By.CSS_SELECTOR, "button[onclick*='openBookDetailsModal']")
    print("Clicking info (i) button on card...")
    driver.execute_script("arguments[0].click();", info_btn)
    time.sleep(1)

    book_modal = driver.find_element(By.ID, "bookModal")
    book_modal_visible = not ("hidden" in book_modal.get_attribute("class"))
    modal_title = driver.find_element(By.ID, "modalBookTitle").text
    print(f"Info button -> bookModal visible={book_modal_visible}, title='{modal_title}'")
    assert book_modal_visible, "Book details modal did not open on info button click!"

    print("ALL TESTS PASSED WITH 100% SUCCESS!")

    logs = driver.get_log("browser")
    for l in logs:
        print(f"  [{l['level']}] {l['message']}")

finally:
    driver.quit()
    httpd.shutdown()
