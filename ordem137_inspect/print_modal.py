with open("/Users/sigmamarketing/Desktop/cupula33/ordem137_inspect/index.js", "r", encoding="utf-8") as f:
    js = f.read()

pos = js.find('MK=()=>{')
modal_pos = js.find('BookDetailsModal', pos)
if modal_pos == -1:
    # procurar o modal no componente MK
    # vamos ver os retornos de MK perto do final
    mk_chunk = js[pos:pos+30000]
    import re
    # achar onde renderiza modal
    print("Ocorrências de 'modal' ou 'fixed inset-0':")
    for m in re.finditer(r'fixed inset-0', mk_chunk):
        idx = m.start()
        print(mk_chunk[max(0, idx - 50):min(len(mk_chunk), idx + 1000)])
        print("===")
else:
    print(js[modal_pos-100:modal_pos+1000])

