import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

options = Options()
options.add_argument("--headless=new")
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")
options.add_experimental_option("mobileEmulation", {"deviceName": "iPhone 14 Pro"})
options.set_capability("goog:loggingPrefs", {"browser": "ALL"})

driver = webdriver.Chrome(options=options)
try:
    driver.get("https://sabedoriaoculta.com/app/")
    time.sleep(3)

    driver.execute_script("""
        localStorage.setItem('cupula33_user_email', 'loisianavida123@gmail.com');
        localStorage.setItem('cupula33_user_tier', 'master');
        const gate = document.getElementById('vipLoginGate');
        if (gate) { gate.classList.add('hidden'); gate.style.display = 'none'; }
        switchTab('library');
        filterByThemeChip('Hermetismo & Cabala');
    """)
    time.sleep(2)

    # Click Doutrina Secreta
    cards = driver.find_elements(By.CSS_SELECTOR, "#categoryDetailBooksGrid > div")
    doutrina_card = None
    for c in cards:
        if "doutrina secreta" in c.get_attribute("textContent").lower():
            doutrina_card = c
            break

    if doutrina_card:
        driver.execute_script("arguments[0].click();", doutrina_card)
        time.sleep(2)

        # Now click 'Ler Manuscrito'
        btn_read = driver.find_element(By.ID, "modalBtnRead")
        print("Clicking modalBtnRead on mobile...")
        from selenium.webdriver.common.action_chains import ActionChains
        ActionChains(driver).move_to_element(btn_read).click().perform()

        # Let's monitor for 12 seconds
        for s in range(12):
            time.sleep(1)
            reader_modal = driver.find_element(By.ID, "readerModal")
            reader_visible = not ("hidden" in reader_modal.get_attribute("class"))
            spinner = driver.find_element(By.ID, "readerLoadingSpinner")
            spinnerText = driver.find_element(By.ID, "readerLoadingText").text
            spinner_visible = not ("hidden" in spinner.get_attribute("class"))
            canvases = driver.find_elements(By.CSS_SELECTOR, "#readerNativeContainer canvas")
            wrappers = driver.find_elements(By.CSS_SELECTOR, "#readerNativeContainer .pdf-page-wrapper")
            print(f"Sec {s+1}: Reader visible={reader_visible}, Spinner={spinner_visible} ('{spinnerText}'), Wrappers={len(wrappers)}, Canvases={len(canvases)}")
            if len(canvases) > 0:
                print("PDF rendered!")
                break

        driver.save_screenshot("/Users/sigmamarketing/.gemini/antigravity/brain/0705776d-8fe4-458c-91de-1d42702b314b/mobile_reader_result.png")
        print("Screenshot saved to mobile_reader_result.png")

    logs = driver.get_log("browser")
    for l in logs:
        print(f"  [{l['level']}] {l['message']}")

finally:
    driver.quit()
