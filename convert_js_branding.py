with open("/Users/sigmamarketing/Desktop/cupula33/app/app.js", "r", encoding="utf-8") as f:
    js = f.read()

# Substituir mensagens de boas-vindas
js = js.replace("Bem-vindo à Cúpula 33!", "Bem-vindo à Ordem 137!")
js = js.replace("Cúpula 33", "Ordem 137")
js = js.replace("CÚPULA 33", "ORDEM 137")

with open("/Users/sigmamarketing/Desktop/cupula33/app/app.js", "w", encoding="utf-8") as f:
    f.write(js)

print("app.js branding atualizado para Ordem 137!")
