with open("/Users/sigmamarketing/Desktop/cupula33/ordem137_inspect/index.js", "r", encoding="utf-8") as f:
    js = f.read()

import re
matches = [m.start() for m in re.finditer(r'\bBk\s*=\s*(?:function|\([^)]*\)\s*=>)', js)]
print(f"Matches para Bk definition: {len(matches)}")
for m in matches:
    print(js[m:m+5000])
    print("="*60)
