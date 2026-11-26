import urllib.request
import re

url = "https://ordem137.online/assets/index-B5RLPrGA.js"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req) as resp:
    content = resp.read().decode("utf-8", errors="ignore")

# Find where Document file= or pdfUrl is used
m = re.findall(r'file\s*:\s*([a-zA-Z0-9_\.\(\)]+)', content)
print("File props found:", m[:10])

# Search for reader component (search for 'Página ' or 'Concluído')
for m in re.finditer(r'Página\s*|Concluído', content, re.IGNORECASE):
    p = m.start()
    print("Found text snippet:", content[max(0, p-100):p+150])
