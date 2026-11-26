import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

options = Options()
options.add_argument("--headless=new")
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")
options.add_argument("--window-size=1200,900")
options.set_capability("goog:loggingPrefs", {"browser": "ALL"})

driver = webdriver.Chrome(options=options)
try:
    print("Navigating to production https://sabedoriaoculta.com/app/ ...")
    driver.get("https://sabedoriaoculta.com/app/")
    time.sleep(3)

    # Login with Loisiana Lopes
    print("Logging in with Loisiana Lopes...")
    driver.execute_script("""
        const emailInput = document.getElementById('gateEmailInput');
        if (emailInput) emailInput.value = 'loisianavida123@gmail.com';
        if (typeof authenticateGateLogin === 'function') authenticateGateLogin();
    """)
    time.sleep(2)

    # Switch to library tab
    print("Switching to library tab...")
    driver.execute_script("""
        const navLib = document.getElementById('navBtn-library') || document.getElementById('sideNav-library');
        if (navLib) navLib.click();
        else switchTab('library');
    """)
    time.sleep(2)

    # Click theme 'Hermetismo & Cabala'
    print("Clicking theme 'Hermetismo & Cabala'...")
    driver.execute_script("""
        filterByThemeChip('Hermetismo & Cabala');
    """)
    time.sleep(2)

    # Find Doutrina Secreta card
    cards = driver.find_elements(By.CSS_SELECTOR, "#categoryDetailBooksGrid > div")
    print(f"Cards in category detail: {len(cards)}")
    
    doutrina_card = None
    for idx, c in enumerate(cards):
        txt = c.get_attribute("textContent").lower()
        if "doutrina secreta" in txt:
            doutrina_card = c
            print(f"Found at index {idx}: {c.get_attribute('textContent').strip()[:70]}")
            break

    if doutrina_card:
        # Check onclick attribute
        onclick = doutrina_card.get_attribute("onclick")
        print(f"Card onclick attribute: {onclick}")

        print("Simulating user click on card...")
        driver.execute_script("arguments[0].click();", doutrina_card)
        time.sleep(2)

        # Check bookModal
        modal = driver.find_element(By.ID, "bookModal")
        is_modal_visible = not ("hidden" in modal.get_attribute("class"))
        modal_title = driver.find_element(By.ID, "modalBookTitle").text
        print(f"BookModal visible: {is_modal_visible}, Title: '{modal_title}'")

        # Now click 'Ler Manuscrito'
        btn_read = driver.find_element(By.ID, "modalBtnRead")
        print(f"Clicking modalBtnRead (disabled={btn_read.get_attribute('disabled')})...")
        driver.execute_script("arguments[0].click();", btn_read)
        time.sleep(6)

        # Check readerModal
        reader_modal = driver.find_element(By.ID, "readerModal")
        reader_visible = not ("hidden" in reader_modal.get_attribute("class"))
        reader_title = driver.find_element(By.ID, "readerTitle").text
        spinnerText = driver.find_element(By.ID, "readerLoadingText").text
        spinner = driver.find_element(By.ID, "readerLoadingSpinner")
        spinner_visible = not ("hidden" in spinner.get_attribute("class"))
        canvases = driver.find_elements(By.CSS_SELECTOR, "#readerNativeContainer canvas")
        print(f"ReaderModal: visible={reader_visible}, title='{reader_title}', spinner={spinner_visible} ('{spinnerText}'), canvases={len(canvases)}")

    logs = driver.get_log("browser")
    print(f"Browser logs on production ({len(logs)}):")
    for l in logs:
        print(f"  [{l['level']}] {l['message']}")

finally:
    driver.quit()
