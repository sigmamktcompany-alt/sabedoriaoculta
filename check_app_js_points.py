with open("/Users/sigmamarketing/Desktop/cupula33/app/app.js", "r", encoding="utf-8") as f:
    js = f.read()

import re
print("Tamanho de app.js:", len(js))
print("Posição de function renderBooks:", js.find("function renderBooks()"))
print("Posição de function openBookModal:", js.find("function openBookModal("))
print("Posição de function switchTab:", js.find("function switchTab("))
