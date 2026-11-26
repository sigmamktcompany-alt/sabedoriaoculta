import re

with open("/Users/sigmamarketing/Desktop/cupula33/app/index.html", "r", encoding="utf-8") as f:
    html = f.read()

with open("/Users/sigmamarketing/Desktop/cupula33/app/app.js", "r", encoding="utf-8") as f:
    js = f.read()

# Pegar todos os getElementById em app.js
js_ids = set(re.findall(r'getElementById\(["\']([^"\']+)["\']\)', js))
# Pegar todos os id="..." em index.html
html_ids = set(re.findall(r'id=["\']([^"\']+)["\']', html))

missing_in_html = js_ids - html_ids
print(f"Total IDs em JS: {len(js_ids)}")
print(f"Total IDs em HTML: {len(html_ids)}")
print("\nIDs usados em JS mas NÃO encontrados no HTML:")
for m in sorted(missing_in_html):
    print("  -", m)
