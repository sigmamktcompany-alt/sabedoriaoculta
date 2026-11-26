import http.server
import socketserver
import threading
import time
import os
import json
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

PORT = 8122
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
options.add_argument("--window-size=430,932") # iPhone 15 Pro Max
# Add mobile user agent
options.add_argument("--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1")

driver = webdriver.Chrome(options=options)
try:
    url = f"http://127.0.0.1:{PORT}/index.html"
    print(f"Opening {url}...")
    driver.get(url)
    
    # 1. Check maintenance banner
    banner = driver.find_element(By.ID, "systemUpdateBanner")
    print("Maintenance banner visible:", banner.is_displayed())
    print("Banner text preview:", banner.text[:80])
    assert "ATUALIZAÇÃO EM ANDAMENTO" in banner.text.upper()
    
    # 2. Check total books loaded
    total_books = driver.execute_script("return (window.BOOKS_DATABASE || window.booksData || []).length;")
    print(f"Total books in memory: {total_books}")
    assert total_books >= 1335
    
    PORT = 8120
    # 3. Test Enoque reader fix
    print("Testing Livro de Enoque reader...")
    # Clear localStorage first
    driver.execute_script("localStorage.clear();")
    driver.execute_script("""
        const b = (window.BOOKS_DATABASE || window.booksData || []).find(x => x.title && x.title.toLowerCase().includes('enoque'));
        console.log("Found enoque:", b);
        openReaderModal(b, 1);
    """)
    
    # Wait for canvas to render
    WebDriverWait(driver, 25).until(
        lambda d: d.execute_script("""
            const c = document.querySelector('#pdf-page-wrapper-1 canvas');
            return c && c.height > 200;
        """)
    )
    
    time.sleep(2)
    
    reader_state = driver.execute_script("""
        const page1 = document.querySelector('#pdf-page-wrapper-1');
        const canvas1 = document.querySelector('#pdf-page-wrapper-1 canvas');
        const numIndicator = document.querySelector('#readerPageNum')?.innerText || '';
        const savedProg = localStorage.getItem('cupula33_books_progress');
        return {
            page1Height: page1 ? page1.offsetHeight : 0,
            canvas1Height: canvas1 ? canvas1.offsetHeight : 0,
            canvas1InternalHeight: canvas1 ? canvas1.height : 0,
            readerPageNum: numIndicator,
            savedProgress: savedProg
        };
    """)
    print("Enoque Reader State:", json.dumps(reader_state, indent=2))
    assert reader_state["canvas1Height"] > 300, "Canvas height is too small!"
    assert reader_state["page1Height"] > 300, "Page 1 wrapper height collapsed!"
    driver.save_screenshot("/Users/sigmamarketing/.gemini/antigravity/brain/0705776d-8fe4-458c-91de-1d42702b314b/enoque_perfect_test.png")
    
    # Close reader
    driver.execute_script("closeModal('readerModal');")
    time.sleep(1)
    
    # 4. Test Ordem 137 cloud book reading (pick a cloud book)
    cloud_book = driver.execute_script("""
        const b = (window.BOOKS_DATABASE || []).find(x => x.pdfUrl && x.pdfUrl.includes('supabase.co'));
        return b ? { id: b.id, title: b.title, pdfUrl: b.pdfUrl } : null;
    """)
    print("Selected Cloud Book:", cloud_book)
    
    if cloud_book:
        print(f"Testing cloud book reading: {cloud_book['title']} (ID: {cloud_book['id']})...")
        driver.execute_script(f"""
            const b = (window.BOOKS_DATABASE || []).find(x => String(x.id) === '{cloud_book['id']}');
            openReaderModal(b, 1);
        """)
        
        # Wait for canvas to render
        WebDriverWait(driver, 30).until(
            lambda d: d.execute_script("""
                const c = document.querySelector('#pdf-page-wrapper-1 canvas');
                return c && c.height > 200;
            """)
        )
        time.sleep(2)
        
        cloud_reader_state = driver.execute_script("""
            const page1 = document.querySelector('#pdf-page-wrapper-1');
            const canvas1 = document.querySelector('#pdf-page-wrapper-1 canvas');
            return {
                page1Height: page1 ? page1.offsetHeight : 0,
                canvas1Height: canvas1 ? canvas1.offsetHeight : 0,
                canvas1InternalHeight: canvas1 ? canvas1.height : 0
            };
        """)
        print("Cloud Book Reader State:", json.dumps(cloud_reader_state, indent=2))
        assert cloud_reader_state["canvas1Height"] > 300, "Cloud book canvas failed to render!"
        driver.save_screenshot("/Users/sigmamarketing/.gemini/antigravity/brain/0705776d-8fe4-458c-91de-1d42702b314b/cloud_book_perfect_test.png")
        print("Cloud book successfully fetched and rendered in native PDF reader!")

    print("ALL TESTS PASSED CLEANLY!")
finally:
    driver.quit()
    httpd.shutdown()
