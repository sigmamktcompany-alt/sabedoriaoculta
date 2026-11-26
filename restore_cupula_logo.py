import re

# 1. Ajustar index.html
with open("/Users/sigmamarketing/Desktop/cupula33/app/index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Restaurar logo.jpg
html = html.replace('assets/logo_ordem.png', 'assets/logo.jpg')

# Restaurar Título e Branding
html = re.sub(r'<title>.*?</title>', '<title>CÚPULA 33 | Plataforma de Membros & Acervo Hermético</title>', html)
html = re.sub(r'<meta name="apple-mobile-web-app-title" content=".*?">', '<meta name="apple-mobile-web-app-title" content="Cúpula 33">', html)

# No texto
html = html.replace('ORDEM <span class="text-[#D2042D]">137</span>', 'CÚPULA <span class="text-[#D2042D]">33</span>')
html = html.replace('ORDEM 137', 'CÚPULA 33')
html = html.replace('Ordem 137', 'Cúpula 33')

with open("/Users/sigmamarketing/Desktop/cupula33/app/index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("[+] index.html restaurado para logo e nome Cúpula 33!")

# 2. Ajustar app.js
with open("/Users/sigmamarketing/Desktop/cupula33/app/app.js", "r", encoding="utf-8") as f:
    js = f.read()

js = js.replace("Ordem 137", "Cúpula 33")
js = js.replace("ORDEM 137", "CÚPULA 33")

with open("/Users/sigmamarketing/Desktop/cupula33/app/app.js", "w", encoding="utf-8") as f:
    f.write(js)

print("[+] app.js branding restaurado para Cúpula 33!")
