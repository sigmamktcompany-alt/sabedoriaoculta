import re

with open("/Users/sigmamarketing/Desktop/cupula33/app/index.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Atualizar o Título e Meta
html = re.sub(r'<title>.*?</title>', '<title>ORDEM 137 - Biblioteca Oculta</title>', html)
html = re.sub(r'<meta name="apple-mobile-web-app-title" content=".*?">', '<meta name="apple-mobile-web-app-title" content="Ordem 137">', html)
html = re.sub(r'<meta name="theme-color" content=".*?">', '<meta name="theme-color" content="#000000">', html)

# 2. Atualizar o logo em todo o arquivo
html = html.replace('src="assets/logo.jpg"', 'src="assets/logo_ordem.png"')
html = html.replace("src='assets/logo.jpg'", "src='assets/logo_ordem.png'")

# 3. Atualizar o Brand em texto no sidebar e headers
html = html.replace('CÚPULA <span class="text-[#D2042D]">33</span>', 'ORDEM <span class="text-[#D2042D]">137</span>')
html = html.replace('CÚPULA <span class="text-gold-400">33</span>', 'ORDEM <span class="text-[#D2042D]">137</span>')

# 4. Atualizar o vipLoginGate para o padrão escuro e carmesim
old_gate = """  <!-- ==================== TELA INICIAL DE LOGIN VIP (GATEWAY OBRIGATÓRIO) ==================== -->
  <div id="vipLoginGate" class="fixed inset-0 z-[10000] bg-dark-950/98 backdrop-blur-2xl flex items-center justify-center p-4 transition-opacity duration-300">
    <div class="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/15 via-dark-950/80 to-dark-950"></div>
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]"></div>

    <div class="relative w-full max-w-md rounded-3xl p-7 sm:p-9 border border-gold-500/40 bg-[#0b0c10]/95 shadow-[0_0_50px_rgba(212,175,55,0.15)] text-center">
      <div class="relative w-20 h-20 mx-auto mb-5">
        <div class="absolute inset-0 rounded-2xl bg-gold-500/20 blur-xl animate-pulse"></div>
        <img src="assets/logo.jpg" alt="Cúpula 33" class="relative w-20 h-20 rounded-2xl object-cover border-2 border-gold-500/60 shadow-2xl mx-auto">
      </div>

      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-400 text-[10px] font-black uppercase tracking-widest mb-3">
        <i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Portal Exclusivo de Membros
      </div>

      <h1 class="font-cinzel font-black text-2xl sm:text-3xl tracking-wider text-white mb-2">
        CÚPULA <span class="text-gold-400">33</span>
      </h1>"""

new_gate = """  <!-- ==================== TELA INICIAL DE LOGIN VIP (GATEWAY OBRIGATÓRIO) ==================== -->
  <div id="vipLoginGate" class="fixed inset-0 z-[10000] bg-black/98 backdrop-blur-2xl flex items-center justify-center p-4 transition-opacity duration-300">
    <div class="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D2042D]/15 via-black/80 to-black"></div>

    <div class="relative w-full max-w-md rounded-3xl p-7 sm:p-9 border border-white/10 bg-[#121212] shadow-[0_0_60px_rgba(210,4,45,0.2)] text-center">
      <div class="relative w-20 h-20 mx-auto mb-5">
        <div class="absolute inset-0 rounded-2xl bg-[#D2042D]/20 blur-xl animate-pulse"></div>
        <img src="assets/logo_ordem.png" alt="Ordem 137" class="relative w-20 h-20 rounded-2xl object-cover border border-white/10 shadow-2xl mx-auto">
      </div>

      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D2042D]/10 border border-[#D2042D]/30 text-[#D2042D] text-[10px] font-bold uppercase tracking-widest mb-3">
        <i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Biblioteca Oculta
      </div>

      <h1 class="font-serif font-black text-2xl sm:text-3xl tracking-wider text-white mb-2">
        ORDEM <span class="text-[#D2042D]">137</span>
      </h1>"""

if old_gate in html:
    html = html.replace(old_gate, new_gate, 1)

# Substituir o botão do gate de login
html = html.replace(
    'bg-gradient-to-r from-gold-500 via-amber-400 to-gold-500 text-black font-black text-xs uppercase tracking-wider',
    'bg-[#D2042D] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider'
)

# Substituir cores nos modais de perfil e frequências
html = html.replace('border-gold-500/50', 'border-white/10')
html = html.replace('border-gold-500/40', 'border-white/10')
html = html.replace('border-gold-500/30', 'border-white/10')
html = html.replace('border-gold-500/20', 'border-white/10')
html = html.replace('border-gold-500', 'border-[#D2042D]')
html = html.replace('text-gold-400', 'text-[#D2042D]')
html = html.replace('text-gold-300', 'text-[#D2042D]')
html = html.replace('text-gold-500', 'text-[#D2042D]')
html = html.replace('bg-gold-500/20', 'bg-[#D2042D]/20')
html = html.replace('bg-gold-500/10', 'bg-[#D2042D]/10')
html = html.replace('bg-gold-500/15', 'bg-[#D2042D]/15')
html = html.replace('bg-gold-500', 'bg-[#D2042D]')

with open("/Users/sigmamarketing/Desktop/cupula33/app/index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("HTML atualizado com logo e paleta de cores Ordem 137!")
