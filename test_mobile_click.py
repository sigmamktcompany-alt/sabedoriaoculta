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

    # Let's see what is on screen
    cards = driver.find_elements(By.CSS_SELECTOR, "#categoryDetailBooksGrid > div")
    print(f"Mobile: found {len(cards)} cards")

    # Let's inspect the first 5 cards
    for idx in range(min(5, len(cards))):
        c = cards[idx]
        print(f"Card {idx}: text={c.get_attribute('textContent').strip()[:40]}, rect={c.rect}")

    # Let's find Doutrina Secreta
    doutrina_card = None
    for c in cards:
        if "doutrina secreta" in c.get_attribute("textContent").lower():
            doutrina_card = c
            break

    if doutrina_card:
        print("Doutrina card rect:", doutrina_card.rect)
        # Scroll to it
        driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", doutrina_card)
        time.sleep(1)
        print("After scroll rect:", doutrina_card.rect)

        # Let's click it using ActionChains or real touch
        from selenium.webdriver.common.action_chains import ActionChains
        ActionChains(driver).move_to_element(doutrina_card).click().perform()
        time.sleep(2)

        modal = driver.find_element(By.ID, "bookModal")
        is_visible = not ("hidden" in modal.get_attribute("class"))
        print(f"After mobile click -> bookModal visible: {is_visible}")

        driver.save_screenshot("/Users/sigmamarketing/.gemini/antigravity/brain/0705776d-8fe4-458c-91de-1d42702b314b/mobile_click_result.png")
        print("Screenshot saved to mobile_click_result.png")

    logs = driver.get_log("browser")
    for l in logs:
        print(f"  [{l['level']}] {l['message']}")

finally:
    driver.quit()
