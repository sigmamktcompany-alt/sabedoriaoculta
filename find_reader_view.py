import urllib.request
import re

url = "https://ordem137.online/assets/index-B5RLPrGA.js"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req) as resp:
    content = resp.read().decode("utf-8", errors="ignore")

# Find reader header with "Leitor" or progress bar or reader modal
for m in re.finditer(r'reader|numPages|pageNumber|onDocumentLoadSuccess', content, re.IGNORECASE):
    p = m.start()
    snippet = content[max(0, p-100):p+200]
    if "progress" in snippet.lower() or "canvas" in snippet.lower() or "scroll" in snippet.lower():
        print("Reader snippet:")
        print(snippet)
        print("---")
