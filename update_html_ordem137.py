import re

with open("/Users/sigmamarketing/Desktop/cupula33/app/index.html", "r", encoding="utf-8") as f:
    html = f.read()

# 1. Injetar novas cores no Tailwind Config
old_tailwind = """          colors: {
            gold: {"""
new_tailwind = """          colors: {
            'esoteric-red': '#D2042D',
            'esoteric-dark': '#0a0a0a',
            'esoteric-card': '#141414',
            'esoteric-paper': '#121212',
            gold: {"""
if old_tailwind in html and "'esoteric-red'" not in html:
    html = html.replace(old_tailwind, new_tailwind, 1)

# 2. Localizar onde termina o vipLoginGate e o appToast
# e substituir o <header> e a estrutura externa pelo Sidebar Desktop + Mobile Header + Mobile Bottom Nav
sidebar_markup = """
  <!-- ==================== SIDEBAR DESKTOP (ESTILO ORDEM 137) ==================== -->
  <aside class="hidden md:flex flex-col h-screen fixed left-0 top-0 bg-[#0a0a0a] border-r border-white/10 z-50 w-64 text-left select-none">
    
    <!-- Top Brand & Emblema -->
    <div class="p-5 flex items-center justify-between border-b border-white/10">
      <div class="flex items-center gap-3 cursor-pointer" onclick="switchTab('books'); returnToDefaultLibrary();">
        <img src="assets/logo.jpg" alt="Cúpula 33" class="w-10 h-10 rounded-xl object-cover border border-white/10 shadow-lg shadow-black/50">
        <div>
          <div class="font-cinzel font-black text-sm tracking-wider text-white">CÚPULA <span class="text-[#D2042D]">33</span></div>
          <div class="text-[9px] tracking-widest text-gray-500 uppercase font-mono">Biblioteca Oculta</div>
        </div>
      </div>
    </div>

    <!-- Navegação Vertical -->
    <nav class="flex-1 px-3 py-4 space-y-1.5 overflow-y-auto hide-scrollbar">
      <button onclick="switchTab('books'); returnToDefaultLibrary();" id="sideNav-books" class="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-bold text-white bg-white/5 border border-[#D2042D]/50 transition-all text-left">
        <i data-lucide="book-open" class="w-4 h-4 text-[#D2042D]"></i>
        <span>Biblioteca</span>
      </button>

      <button onclick="openCategoriesFromNav()" id="sideNav-categories" class="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all text-left">
        <i data-lucide="layout-grid" class="w-4 h-4 text-gray-400"></i>
        <span>Vias de Estudo</span>
      </button>

      <button onclick="openMyList()" id="sideNav-mylist" class="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all text-left">
        <i data-lucide="bookmark" class="w-4 h-4 text-gray-400"></i>
        <span>Minha Lista</span>
      </button>

      <button onclick="switchTab('frequencies')" id="sideNav-frequencies" class="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all text-left">
        <i data-lucide="headphones" class="w-4 h-4 text-gray-400"></i>
        <span>Frequências 432/528Hz</span>
      </button>

      <button onclick="switchTab('roadmap')" id="sideNav-roadmap" class="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all text-left">
        <i data-lucide="compass" class="w-4 h-4 text-gray-400"></i>
        <span>12 Graus da Cúpula</span>
      </button>

      <button onclick="openModal('profileModal')" id="sideNav-profile" class="w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all text-left">
        <i data-lucide="user" class="w-4 h-4 text-gray-400"></i>
        <span>Perfil do Membro</span>
      </button>
    </nav>

    <!-- Card de Membro Inferior -->
    <div class="p-4 border-t border-white/10 bg-[#0d0d0d]">
      <div onclick="openModal('profileModal')" class="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 cursor-pointer transition">
        <div class="w-9 h-9 rounded-xl overflow-hidden bg-dark-900 border border-white/10 shrink-0">
          <img id="sidebarAvatarImg" src="assets/logo.jpg" alt="Avatar" class="w-full h-full object-cover">
        </div>
        <div class="flex-1 min-w-0">
          <div id="sidebarUserName" class="text-xs font-bold text-white truncate">Paulo Reis</div>
          <div class="flex items-center gap-1.5 text-[10px] text-emerald-400 font-medium">
            <span class="w-1.5 h-1.5 rounded-full bg-[#D2042D] animate-pulse"></span>
            <span id="sidebarTierLabel">Membro Master</span>
          </div>
        </div>
        <button onclick="event.stopPropagation(); triggerPWAInstall();" title="Instalar Aplicativo" class="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition">
          <i data-lucide="download" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  </aside>

  <!-- ==================== HEADER MOBILE ==================== -->
  <header class="md:hidden sticky top-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 px-4 py-3 flex items-center justify-between">
    <div class="flex items-center gap-2.5 cursor-pointer" onclick="switchTab('books'); returnToDefaultLibrary();">
      <img src="assets/logo.jpg" alt="Cúpula 33" class="w-8 h-8 rounded-lg object-cover border border-white/10">
      <span class="font-cinzel font-black text-sm text-white">CÚPULA <span class="text-[#D2042D]">33</span></span>
    </div>
    <div class="flex items-center gap-2">
      <button onclick="triggerPWAInstall()" class="px-2.5 py-1 rounded-lg bg-[#D2042D]/20 text-[#D2042D] border border-[#D2042D]/40 text-[10px] font-bold flex items-center gap-1 active:scale-95 transition">
        <i data-lucide="download" class="w-3 h-3"></i> App
      </button>
      <button onclick="openModal('profileModal')" class="w-8 h-8 rounded-lg overflow-hidden border border-white/10">
        <img id="mobileAvatarImg" src="assets/logo.jpg" alt="Avatar" class="w-full h-full object-cover">
      </button>
    </div>
  </header>

  <!-- ==================== MOBILE BOTTOM NAVIGATION ==================== -->
  <nav class="md:hidden fixed bottom-0 left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10 z-50 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
    <div class="flex justify-around items-center p-2">
      <button id="navBtn-books" onclick="switchTab('books'); returnToDefaultLibrary();" class="flex flex-col items-center gap-1 text-[#D2042D] text-[10px] font-bold py-1">
        <i data-lucide="book-open" class="w-5 h-5"></i>
        <span>Biblioteca</span>
      </button>
      <button id="navBtn-categories" onclick="openCategoriesFromNav()" class="flex flex-col items-center gap-1 text-gray-400 text-[10px] font-medium py-1">
        <i data-lucide="layout-grid" class="w-5 h-5"></i>
        <span>Vias</span>
      </button>
      <button id="navBtn-frequencies" onclick="switchTab('frequencies')" class="flex flex-col items-center gap-1 text-gray-400 text-[10px] font-medium py-1">
        <i data-lucide="headphones" class="w-5 h-5"></i>
        <span>Áudio</span>
      </button>
      <button id="navBtn-mylist" onclick="openMyList()" class="flex flex-col items-center gap-1 text-gray-400 text-[10px] font-medium py-1">
        <i data-lucide="bookmark" class="w-5 h-5"></i>
        <span>Salvos</span>
      </button>
      <button onclick="openModal('profileModal')" class="flex flex-col items-center gap-1 text-gray-400 text-[10px] font-medium py-1">
        <i data-lucide="user" class="w-5 h-5"></i>
        <span>Perfil</span>
      </button>
    </div>
  </nav>
"""

# Substituir o antigo header e o banner de PWA pelo novo layout
header_start = html.find("<!-- CABEÇALHO DO APP")
main_start = html.find("<main class=")

if header_start != -1 and main_start != -1:
    html = html[:header_start] + sidebar_markup + "\n  <!-- CONTEÚDO PRINCIPAL (COM MARGEM DA SIDEBAR DESKTOP) -->\n  <main class=\"min-h-screen pb-24 md:pl-64 bg-[#000000] text-gray-200\">\n" + html[main_start + len('<main class="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 relative z-10">'):]

# 3. Remover a antiga nav inferior duplicada perto da linha 550
old_nav_idx = html.find('<nav class="fixed bottom-0 left-0 right-0 z-50 glass-panel')
if old_nav_idx != -1:
    end_old_nav = html.find('</nav>', old_nav_idx) + 6
    html = html[:old_nav_idx] + "<!-- Antiga nav mobile substituída -->" + html[end_old_nav:]

with open("/Users/sigmamarketing/Desktop/cupula33/app/index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Etapa 1 concluída: Sidebar Desktop e Mobile Navigation integrados!")
