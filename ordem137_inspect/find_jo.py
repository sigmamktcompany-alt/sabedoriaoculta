with open("/Users/sigmamarketing/Desktop/cupula33/ordem137_inspect/index.js", "r", encoding="utf-8") as f:
    js = f.read()

import re
m = re.search(r'([A-Za-z0-9_]+)\s*as\s*Jo\b', js)
if m:
    print("Jo é:", m.group(0))
else:
    # procurar onde Jo é atribuído
    matches = [m.start() for m in re.finditer(r'\bJo\s*=', js)]
    print(f"Matches para Jo=: {len(matches)}")
    for idx in matches[:5]:
        print(js[idx:idx+200])
