import urllib.request
import re

url = "https://ordem137.online/assets/index-B5RLPrGA.js"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req) as resp:
    content = resp.read().decode("utf-8", errors="ignore")

# Find reader component: where Document or Page from react-pdf is used
pos = content.find("react-pdf")
while pos != -1:
    snippet = content[max(0, pos-200):pos+800]
    print("=== React-PDF usage ===")
    print(snippet)
    pos = content.find("react-pdf", pos+1)
    if pos > 0:
        # only show first 2
        break
