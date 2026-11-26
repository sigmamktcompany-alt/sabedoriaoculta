import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import http.server
import socketserver
import threading

PORT = 8139

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

    # Login with Ricardo André Scola
    print("Logging in with ricardoscola4@gmail.com ...")
    driver.execute_script("""
        const emailInput = document.getElementById('gateEmailInput');
        if (emailInput) emailInput.value = 'ricardoscola4@gmail.com';
        if (typeof authenticateGateLogin === 'function') authenticateGateLogin();
    """)
    time.sleep(2)

    # Switch to audiobooks tab
    print("Switching to tab-audiobooks...")
    driver.execute_script("switchTab('audiobooks');")
    time.sleep(1)

    # 1. Verify buttons exist
    btn_freq = driver.find_element(By.ID, "groupBtnFrequencies")
    btn_aud = driver.find_element(By.ID, "groupBtnAudiobooks")
    print(f"Group buttons: '{btn_freq.text}', '{btn_aud.text}'")

    view_freq = driver.find_element(By.ID, "groupViewFrequencies")
    view_aud = driver.find_element(By.ID, "groupViewAudiobooks")
    print(f"Frequencies view visible: {not ('hidden' in view_freq.get_attribute('class'))}")
    print(f"Audiobooks view visible: {not ('hidden' in view_aud.get_attribute('class'))}")

    # Take screenshot of Frequencies group
    driver.save_screenshot("/Users/sigmamarketing/.gemini/antigravity/brain/0705776d-8fe4-458c-91de-1d42702b314b/audio_group_frequencies.png")
    print("Screenshot saved to audio_group_frequencies.png")

    # 2. Switch to Audiolivros group
    print("Clicking groupBtnAudiobooks...")
    driver.execute_script("switchAudioGroup('audiobooks');")
    time.sleep(1)

    print(f"After switch -> Frequencies view visible: {not ('hidden' in view_freq.get_attribute('class'))}")
    print(f"After switch -> Audiobooks view visible: {not ('hidden' in view_aud.get_attribute('class'))}")

    ab_cards = driver.find_elements(By.CSS_SELECTOR, "#audiobooksGrid > div")
    print(f"Rendered audiobook cards count: {len(ab_cards)}")
    assert len(ab_cards) >= 6, "Expected at least 6 audiobook cards!"

    # Take screenshot of Audiobooks catalog
    driver.save_screenshot("/Users/sigmamarketing/.gemini/antigravity/brain/0705776d-8fe4-458c-91de-1d42702b314b/audio_group_audiobooks.png")
    print("Screenshot saved to audio_group_audiobooks.png")

    # 3. Click 'Ouvir' on O Caibalion
    first_ab_btn = ab_cards[0].find_element(By.CSS_SELECTOR, "button[onclick*='openAudiobookPlayer']")
    print("Clicking 'Ouvir' on first audiobook card...")
    driver.execute_script("arguments[0].click();", first_ab_btn)
    time.sleep(2)

    ab_modal = driver.find_element(By.ID, "audiobookPlayerModal")
    modal_visible = not ("hidden" in ab_modal.get_attribute("class"))
    modal_title = driver.find_element(By.ID, "abPlayerTitle").text
    modal_status = driver.find_element(By.ID, "abPlayerStatus").text
    print(f"Audiobook Player Modal: visible={modal_visible}, title='{modal_title}', status='{modal_status}'")
    assert modal_visible, "Audiobook player modal did not open!"

    # Take screenshot of Audiobook Player
    driver.save_screenshot("/Users/sigmamarketing/.gemini/antigravity/brain/0705776d-8fe4-458c-91de-1d42702b314b/audiobook_player_active.png")
    print("Screenshot saved to audiobook_player_active.png")

    print(">>> ALL AUDIO GROUP TESTS PASSED 100% <<<")

finally:
    driver.quit()
    httpd.shutdown()
