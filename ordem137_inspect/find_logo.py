with open("/Users/sigmamarketing/Desktop/cupula33/ordem137_inspect/index.js", "r", encoding="utf-8") as f:
    js = f.read()

pos = js.find('children:f()})')
if pos != -1:
    chunk = js[pos-800:pos+200]
    print(chunk)
