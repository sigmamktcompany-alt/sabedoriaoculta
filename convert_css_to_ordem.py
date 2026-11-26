with open("/Users/sigmamarketing/Desktop/cupula33/app/app.css", "r", encoding="utf-8") as f:
    css = f.read()

# Substituir variáveis gold por esoteric-red
css = css.replace('--color-gold: #d4af37;', '--color-gold: #D2042D;')
css = css.replace('--color-gold-light: #f3e5ab;', '--color-gold-light: #ff4d6d;')
css = css.replace('--color-gold-dark: #aa8c2c;', '--color-gold-dark: #a00323;')
css = css.replace('--color-gold-glow: rgba(212, 175, 55, 0.25);', '--color-gold-glow: rgba(210, 4, 45, 0.35);')
css = css.replace('--bg-dark: #070709;', '--bg-dark: #000000;')

# Body e Scrollbar
css = css.replace('background-color: #070709;', 'background-color: #000000;')
css = css.replace('background: #0d0e12;', 'background: #0a0a0a;')
css = css.replace('background: #d4af37;', 'background: #D2042D;')
css = css.replace('#d4af37', '#D2042D')

# Painéis
css = css.replace('rgba(13, 14, 18, 0.85)', 'rgba(18, 18, 18, 0.95)')
css = css.replace('rgba(212, 175, 55, 0.18)', 'rgba(255, 255, 255, 0.1)')
css = css.replace('rgba(212, 175, 55, 0.4)', 'rgba(210, 4, 45, 0.4)')
css = css.replace('rgba(212, 175, 55, 0.55)', 'rgba(210, 4, 45, 0.6)')

# Badges e botões ativos
css = css.replace('linear-gradient(135deg, #d4af37 0%, #aa8c2c 100%)', 'linear-gradient(135deg, #D2042D 0%, #8b0000 100%)')

with open("/Users/sigmamarketing/Desktop/cupula33/app/app.css", "w", encoding="utf-8") as f:
    f.write(css)

print("app.css atualizado com a paleta Carmesim e Dark da Ordem 137!")
