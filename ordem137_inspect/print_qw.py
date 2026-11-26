with open("/Users/sigmamarketing/Desktop/cupula33/ordem137_inspect/index.js", "r", encoding="utf-8") as f:
    js = f.read()

import re
m = re.search(r'\bQW\s*=\s*(?:function|\([^)]*\)\s*=>)', js)
if m:
    pos = m.start()
    print(js[pos:pos+4000])
else:
    print("QW definition not found directly")
