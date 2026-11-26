import http.server
import socketserver
import threading
import time
import json
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

PORT = 8125
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
    
    # 1. Test Loisiana Lopes member
    member_check = driver.execute_script("""
        localStorage.setItem('cupula33_user_email', 'loisianavida123@gmail.com');
        const ident = resolveUserIdentity();
        const inAllowlist = (typeof MASTER_ALLOWLIST !== 'undefined') && MASTER_ALLOWLIST.includes('loisianavida123@gmail.com');
        const inKnown = (typeof KNOWN_STUDENT_NAMES !== 'undefined') && KNOWN_STUDENT_NAMES['loisianavida123@gmail.com'];
        return {
            identity: ident,
            inAllowlist: inAllowlist,
            inKnown: inKnown
        };
    """)
    print("Member Verification:", json.dumps(member_check, indent=2))
    assert member_check["inAllowlist"] == True, "Loisiana is not in MASTER_ALLOWLIST!"
    assert member_check["inKnown"] == "Loisiana Lopes", "Loisiana is not in KNOWN_STUDENT_NAMES!"
    assert member_check["identity"]["name"] == "Loisiana Lopes", "Identity did not resolve to Loisiana Lopes!"
    print("[PASS] Member Loisiana Lopes is fully registered and verified!")
    
    # 2. Test Frequencies
    driver.execute_script("switchTab('audiobooks');")
    time.sleep(1)
    
    # Play 432 Hz
    print("Playing 432 Hz...")
    driver.execute_script("handleFrequencyClick(432);")
    
    # Wait 2 seconds (the old bug stopped at 120ms!)
    time.sleep(2)
    
    status_432 = driver.execute_script("""
        return {
            activeHz: activeFrequencyHz,
            oscCount: currentOscillators ? currentOscillators.length : 0,
            hasGain: !!masterGainNode,
            badgeText: document.getElementById('playerCurrentHz')?.textContent
        };
    """)
    print("Status 432 Hz after 2s:", json.dumps(status_432, indent=2))
    assert status_432["activeHz"] == 432, f"Expected 432 Hz, got {status_432['activeHz']}"
    assert status_432["oscCount"] == 2, f"Expected 2 active oscillators, got {status_432['oscCount']}"
    assert "432" in status_432["badgeText"], "Badge does not show 432 Hz"
    print("[PASS] 432 Hz plays continuously without stopping!")
    
    # Switch to 528 Hz
    print("Switching to 528 Hz...")
    driver.execute_script("handleFrequencyClick(528);")
    time.sleep(2)
    
    status_528 = driver.execute_script("""
        return {
            activeHz: activeFrequencyHz,
            oscCount: currentOscillators ? currentOscillators.length : 0,
            hasGain: !!masterGainNode,
            badgeText: document.getElementById('playerCurrentHz')?.textContent
        };
    """)
    print("Status 528 Hz after 2s:", json.dumps(status_528, indent=2))
    assert status_528["activeHz"] == 528, f"Expected 528 Hz, got {status_528['activeHz']}"
    assert status_528["oscCount"] == 2, f"Expected 2 active oscillators, got {status_528['oscCount']}"
    print("[PASS] 528 Hz switched cleanly and continues playing!")
    
    # Stop frequency
    driver.execute_script("stopFrequency(true);")
    time.sleep(0.5)
    status_stop = driver.execute_script("""
        return {
            activeHz: activeFrequencyHz,
            oscCount: currentOscillators ? currentOscillators.length : 0,
            badgeText: document.getElementById('playerCurrentHz')?.textContent
        };
    """)
    print("Status Stop:", json.dumps(status_stop, indent=2))
    assert status_stop["activeHz"] is None, "Frequency not stopped!"
    assert status_stop["oscCount"] == 0, "Oscillators still running!"
    print("[PASS] stopFrequency works cleanly!")
    
    print("\nALL VERIFICATIONS PASSED 100% PERFECTLY!")
finally:
    driver.quit()
    httpd.shutdown()
