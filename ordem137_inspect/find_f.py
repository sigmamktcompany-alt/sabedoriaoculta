with open("/Users/sigmamarketing/Desktop/cupula33/ordem137_inspect/index.js", "r", encoding="utf-8") as f:
    js = f.read()

pos = js.find('l.jsxs("aside",{className:"hidden md:flex flex-col h-screen fixed left-0 top-0 bg-esoteric-dark')
if pos != -1:
    chunk = js[pos-1500:pos]
    print(chunk)
