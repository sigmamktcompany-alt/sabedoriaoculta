with open("/Users/sigmamarketing/Desktop/cupula33/ordem137_inspect/index.js", "r", encoding="utf-8") as f:
    js = f.read()

pos = js.find('Wr={to:"/",icon:OD')
if pos == -1:
    pos = js.find('Wr,{to:"/",icon:OD')

if pos != -1:
    print(js[pos-1000:pos+2500])
else:
    print("Não encontrado")
