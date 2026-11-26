import re

with open("/Users/sigmamarketing/Desktop/cupula33/ordem137_inspect/index.js", "r", encoding="utf-8") as f:
    js = f.read()

# Encontrar o trecho com a rota /library
match = re.search(r'path:"/library"[^}]+element:<([A-Za-z0-9_]+)', js)
if match:
    comp_name = match.group(1)
    print(f"Componente da rota /library: {comp_name}")
    
    # Procurar a definição desse componente
    comp_match = re.search(rf'function {comp_name}\s*\([^)]*\)\s*\{{([^\n]+)', js)
    if not comp_match:
        # tentar const comp_name =
        comp_match = re.search(rf'(?:const|let|var)\s+{comp_name}\s*=\s*(?:function|\([^)]*\)\s*=>)\s*\{{([^\n]+)', js)
    
    if comp_match:
        print(f"Definição do componente (início): {comp_match.group(0)[:600]}")
else:
    print("Não achou por regex simples, procurando ocorrências de '/library':")
    for m in re.finditer(r'/library', js):
        start = max(0, m.start() - 100)
        end = min(len(js), m.end() + 200)
        print("Trecho:", js[start:end])
        print("---")

