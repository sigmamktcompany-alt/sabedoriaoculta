with open("/Users/sigmamarketing/Desktop/cupula33/app/index.html", "r", encoding="utf-8") as f:
    html = f.read()

import re
tags = re.findall(r'<section[^>]*id="([^"]+)"|<div[^>]*id="([^"]+)"', html)
ids = [t[0] or t[1] for t in tags if (t[0] or t[1])]
print("IDs principais em index.html:", ids[:30])

# Procurar tags de navegação
navs = re.findall(r'<nav[^>]*>.*?</nav>', html, re.DOTALL)
print(f"Total de tags <nav>: {len(navs)}")
for i, n in enumerate(navs):
    print(f"Nav {i}:", n[:200])
