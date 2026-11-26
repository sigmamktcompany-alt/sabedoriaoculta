with open("/Users/sigmamarketing/Desktop/cupula33/ordem137_inspect/index.js", "r", encoding="utf-8") as f:
    js = f.read()

pos = js.find('path:"/library",element:l.jsx(MK,{})')
if pos != -1:
    print("Encontrado uso do router em:", pos)
    # Procurar MK = ou function MK em todo o arquivo
    import re
    matches = [m.start() for m in re.finditer(r'\bMK\b', js)]
    print(f"Total de ocorrências de 'MK': {len(matches)}")
    for m in matches:
        print(js[max(0, m - 40):min(len(js), m + 80)])
        print("---")
