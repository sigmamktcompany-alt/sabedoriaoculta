import re
import json
import urllib.request
import urllib.parse

with open("ordem137_inspect/index.js", "r", encoding="utf-8") as f:
    js = f.read()

# Check how file_url is used in index.js
for m in re.finditer(r'library-files', js):
    start = max(0, m.start() - 100)
    end = min(len(js), m.end() + 200)
    print("--- library-files occurrence ---")
    print(js[start:end])

# Also check createSignedUrl or getPublicUrl
for m in re.finditer(r'createSignedUrl|getPublicUrl', js):
    start = max(0, m.start() - 100)
    end = min(len(js), m.end() + 200)
    print("--- Signed/Public URL occurrence ---")
    print(js[start:end])
