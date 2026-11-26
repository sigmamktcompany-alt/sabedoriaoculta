with open("/Users/sigmamarketing/Desktop/cupula33/ordem137_inspect/index.js", "r", encoding="utf-8") as f:
    js = f.read()

import re
# 1. Procurar rota /read/:id
read_matches = [m.start() for m in re.finditer(r'/read/:id', js)]
print(f"Ocorrências de /read/:id: {len(read_matches)}")
for m in read_matches:
    print(js[max(0, m - 100):min(len(js), m + 500)])
    print("---")

# 2. Procurar como o progresso é salvo no Ordem 137
prog_matches = [m.start() for m in re.finditer(r'progress', js)]
print(f"Total ocorrências de progress: {len(prog_matches)}")
