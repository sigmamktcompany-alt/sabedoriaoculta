import re

with open("/Users/sigmamarketing/Desktop/cupula33/ordem137_inspect/index.js", "r", encoding="utf-8") as f:
    js = f.read()

# Procurar onde MK é definido
patterns = [
    r'function MK\s*\(',
    r'const MK\s*=\s*',
    r'let MK\s*=\s*',
    r'var MK\s*=\s*'
]

for p in patterns:
    m = re.search(p, js)
    if m:
        start = m.start()
        end = min(len(js), start + 8000)
        print(f"Encontrou com padrão '{p}':")
        print(js[start:end])
        break

