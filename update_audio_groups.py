import re

# 1. Update app/index.html
with open('app/index.html', 'r') as f:
    html = f.read()

# Replace tab-audiobooks section
old_tab_audiobooks = '''    <!-- ==================== ABA 3: AUDIOLIVROS (SCREENSHOT 4) ==================== -->
    <section id="tab-audiobooks" class="app-tab-section hidden animate-fade-in">
      <div class="px-6 sm:px-12 py-8">
        
        <div class="mb-10 text-left">
          <div class="flex items-center gap-3">
            <i data-lucide="headphones" class="w-6 h-6 text-yellow-400"></i>
            <h1 class="text-2xl sm:text-3xl font-serif text-white font-bold border-l-4 border-yellow-500 pl-4 tracking-tight">
              Audiolivros
            </h1>
          </div>
          <p class="text-xs text-gray-400 mt-2 pl-7">
            Ouça os manuscritos narrados.
          </p>
        </div>

        <!-- Player de Frequências Sagradas 100% Funcional e Audível -->
        <div class="esoteric-card rounded-3xl p-6 sm:p-8 mb-10 border border-white/10 max-w-4xl text-left relative overflow-hidden">
          <div class="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none"></div>

          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
            <div>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider mb-2 border border-[#D4AF37]/30 shadow-sm">
                <i data-lucide="radio" class="w-3.5 h-3.5"></i> Ressonância de Solfeggio Ativa
              </span>
              <h2 class="text-xl sm:text-2xl font-serif font-bold text-white">Frequências Sonoras & Ondas Sagradas</h2>
              <p class="text-xs text-gray-400 mt-1.5 max-w-lg leading-relaxed">Batimentos binaurais de ondas senoidais puras calibrados para concentração profunda, desbloqueio de chakras e expansão da consciência.</p>
            </div>

            <div class="flex flex-col items-center sm:items-end gap-2.5 shrink-0">
              <div id="soundWaveBox" class="px-4 py-2.5 rounded-2xl bg-black/90 border border-white/15 flex items-center gap-2.5 shadow-lg wave-paused">
                <span class="wave-bar"></span>
                <span class="wave-bar"></span>
                <span class="wave-bar"></span>
                <span class="wave-bar"></span>
                <span class="wave-bar"></span>
                <span id="playerCurrentHz" class="font-mono font-bold text-xs text-[#D4AF37] tracking-wide">Santuário em Silêncio</span>
              </div>
              <button onclick="stopFrequency(true)" class="text-xs text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer py-1 px-2.5 rounded-lg hover:bg-white/5">
                <i data-lucide="square" class="w-3.5 h-3.5"></i> Parar Frequência
              </button>
            </div>
          </div>

          <!-- Grade Dinâmica Completa com as 8 Frequências Sagradas de Solfeggio -->
          <div class="mt-8 pt-6 border-t border-white/10 relative z-10">
            <div class="flex items-center justify-between mb-4">
              <span class="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Sintonizar Matriz Sonora</span>
              <span class="text-[10px] font-mono text-[#D4AF37]">Ondas Senoidais 432Hz - 963Hz</span>
            </div>
            <div id="frequenciesList" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              <!-- Injetado dinamicamente via renderFrequencies() -->
            </div>
          </div>
        </div>

      </div>
    </section>'''

new_tab_audiobooks = '''    <!-- ==================== ABA 3: ÁUDIOS & FREQUÊNCIAS ==================== -->
    <section id="tab-audiobooks" class="app-tab-section hidden animate-fade-in">
      <div class="px-6 sm:px-12 py-8">
        
        <!-- Header com Título e Seletor dos 2 Grupos -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 text-left">
          <div>
            <div class="flex items-center gap-3">
              <i data-lucide="headphones" class="w-6 h-6 text-yellow-400"></i>
              <h1 id="audioMainHeaderTitle" class="text-2xl sm:text-3xl font-serif text-white font-bold border-l-4 border-yellow-500 pl-4 tracking-tight">
                Áudios & Frequências
              </h1>
            </div>
            <p id="audioMainHeaderSubtitle" class="text-xs text-gray-400 mt-2 pl-7">
              Selecione o grupo desejado: Frequências Sonoras de Solfeggio ou Audiolivros narrados.
            </p>
          </div>

          <!-- SELETOR DOS DOIS GRUPOS: FREQUÊNCIAS SONORAS vs AUDIOLIVROS -->
          <div class="inline-flex items-center p-1.5 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-md">
            <button id="groupBtnFrequencies" onclick="switchAudioGroup('frequencies')" class="px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer bg-yellow-500 text-black shadow-lg shadow-yellow-500/20">
              <i data-lucide="radio" class="w-4 h-4"></i>
              <span>Frequências Sonoras</span>
            </button>
            <button id="groupBtnAudiobooks" onclick="switchAudioGroup('audiobooks')" class="px-5 py-2.5 rounded-xl text-xs font-medium text-gray-400 hover:text-white transition-all flex items-center gap-2 cursor-pointer">
              <i data-lucide="book-open" class="w-4 h-4"></i>
              <span>Audiolivros</span>
            </button>
          </div>
        </div>

        <!-- GRUPO 1: FREQUÊNCIAS SONORAS -->
        <div id="groupViewFrequencies" class="space-y-8 animate-fade-in">
          <!-- Player de Frequências Sagradas 100% Funcional e Audível -->
          <div class="esoteric-card rounded-3xl p-6 sm:p-8 mb-10 border border-white/10 max-w-5xl text-left relative overflow-hidden">
            <div class="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none"></div>

            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
              <div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider mb-2 border border-[#D4AF37]/30 shadow-sm">
                  <i data-lucide="radio" class="w-3.5 h-3.5"></i> Ressonância de Solfeggio Ativa
                </span>
                <h2 class="text-xl sm:text-2xl font-serif font-bold text-white">Frequências Sonoras & Ondas Sagradas</h2>
                <p class="text-xs text-gray-400 mt-1.5 max-w-lg leading-relaxed">Batimentos binaurais de ondas senoidais puras calibrados para concentração profunda, desbloqueio de chakras e expansão da consciência.</p>
              </div>

              <div class="flex flex-col items-center sm:items-end gap-2.5 shrink-0">
                <div id="soundWaveBox" class="px-4 py-2.5 rounded-2xl bg-black/90 border border-white/15 flex items-center gap-2.5 shadow-lg wave-paused">
                  <span class="wave-bar"></span>
                  <span class="wave-bar"></span>
                  <span class="wave-bar"></span>
                  <span class="wave-bar"></span>
                  <span class="wave-bar"></span>
                  <span id="playerCurrentHz" class="font-mono font-bold text-xs text-[#D4AF37] tracking-wide">Santuário em Silêncio</span>
                </div>
                <button onclick="stopFrequency(true)" class="text-xs text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer py-1 px-2.5 rounded-lg hover:bg-white/5">
                  <i data-lucide="square" class="w-3.5 h-3.5"></i> Parar Frequência
                </button>
              </div>
            </div>

            <!-- Grade Dinâmica Completa com as 8 Frequências Sagradas de Solfeggio -->
            <div class="mt-8 pt-6 border-t border-white/10 relative z-10">
              <div class="flex items-center justify-between mb-4">
                <span class="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Sintonizar Matriz Sonora</span>
                <span class="text-[10px] font-mono text-[#D4AF37]">Ondas Senoidais 432Hz - 963Hz</span>
              </div>
              <div id="frequenciesList" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                <!-- Injetado dinamicamente via renderFrequencies() -->
              </div>
            </div>
          </div>
        </div>

        <!-- GRUPO 2: AUDIOLIVROS -->
        <div id="groupViewAudiobooks" class="hidden space-y-8 animate-fade-in text-left">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <span class="text-[10px] font-bold text-yellow-400 uppercase tracking-widest block mb-1">ACERVO NARRADO EM ALTA DEFINIÇÃO</span>
              <h2 class="text-xl sm:text-2xl font-serif font-bold text-white flex items-center gap-2">
                <i data-lucide="sparkles" class="w-5 h-5 text-yellow-400"></i> Manuscritos Sagrados Narrados
              </h2>
              <p class="text-xs text-gray-400 mt-1">Tratados clássicos transmitidos oralmente com ambiência de fundo em frequência áurea 432Hz.</p>
            </div>
          </div>

          <!-- Grade dos Audiolivros -->
          <div id="audiobooksGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <!-- Injetado dinamicamente via renderAudiobooksList() -->
          </div>
        </div>

      </div>
    </section>'''

html = html.replace(old_tab_audiobooks, new_tab_audiobooks)

# Add audiobookPlayerModal before bookModal
old_book_modal = '  <!-- ==================== MODAL DE DETALHES DO LIVRO ==================== -->'
audiobook_modal_code = '''  <!-- ==================== MODAL DE REPRODUÇÃO DE AUDIOLIVRO ==================== -->
  <div id="audiobookPlayerModal" class="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md hidden animate-fade-in">
    <div class="absolute inset-0" onclick="closeAudiobookPlayerModal()"></div>
    
    <div class="relative bg-[#101010] w-full max-w-lg rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] border border-white/15 overflow-hidden p-6 sm:p-8 z-10 text-left animate-slide-up">
      <button onclick="closeAudiobookPlayerModal()" class="absolute top-4 right-4 z-30 p-2.5 bg-black/70 backdrop-blur-md rounded-full text-white/80 hover:text-black hover:bg-[#D4AF37] border border-white/10 transition-all cursor-pointer">
        <i data-lucide="x" class="w-4 h-4"></i>
      </button>

      <!-- Capa & Informações do Audiolivro -->
      <div class="flex flex-col items-center text-center mb-6">
        <div class="relative w-36 h-48 sm:w-44 sm:h-60 rounded-2xl overflow-hidden shadow-2xl border border-white/15 mb-4 group">
          <img id="abPlayerCover" src="" alt="Capa" class="w-full h-full object-cover">
          <div class="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[9px] font-bold text-[#D4AF37] border border-[#D4AF37]/30">
            432Hz HD
          </div>
        </div>

        <span id="abPlayerCategory" class="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold mb-1">Hermetismo & Cabala</span>
        <h3 id="abPlayerTitle" class="text-lg sm:text-xl font-serif font-bold text-white max-w-sm leading-snug">O Caibalion</h3>
        <p id="abPlayerAuthor" class="text-xs text-gray-400 mt-1">Por Três Iniciados • Narrado pela Cúpula 33</p>
      </div>

      <!-- Barra de Onda Sonora e Status -->
      <div class="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 mb-5">
        <div class="flex items-center gap-2">
          <div id="abWaveBox" class="flex items-center gap-1 wave-paused">
            <span class="wave-bar !h-3"></span>
            <span class="wave-bar !h-5"></span>
            <span class="wave-bar !h-2"></span>
            <span class="wave-bar !h-4"></span>
          </div>
          <span id="abPlayerStatus" class="text-[11px] font-medium text-gray-300">Pronto para reproduzir</span>
        </div>
        <div class="flex items-center gap-1 text-[10px] font-mono text-[#D4AF37]">
          <i data-lucide="sparkles" class="w-3 h-3"></i> 432Hz Ativo
        </div>
      </div>

      <!-- Barra de Progresso do Áudio -->
      <div class="space-y-1.5 mb-6">
        <div class="w-full h-2 rounded-full bg-white/10 overflow-hidden relative cursor-pointer" onclick="handleAudioScrub(event)">
          <div id="abProgressBar" class="h-full bg-gradient-to-r from-[#AA7C11] via-[#D4AF37] to-[#F3E5AB] transition-all duration-200" style="width: 0%"></div>
        </div>
        <div class="flex items-center justify-between text-[10px] font-mono text-gray-400">
          <span id="abCurrentTime">00:00</span>
          <span id="abTotalTime">03:45:00</span>
        </div>
      </div>

      <!-- Controles Principais -->
      <div class="flex items-center justify-center gap-6 mb-6">
        <button onclick="rewindAudiobook(15)" class="p-3 text-gray-400 hover:text-white transition-colors cursor-pointer" title="Voltar 15s">
          <i data-lucide="rotate-ccw" class="w-5 h-5"></i>
        </button>

        <button id="abPlayBtn" onclick="toggleAudiobookPlay()" class="w-14 h-14 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] text-black flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer">
          <i id="abPlayIcon" data-lucide="play" class="w-6 h-6 fill-black translate-x-0.5"></i>
        </button>

        <button onclick="forwardAudiobook(15)" class="p-3 text-gray-400 hover:text-white transition-colors cursor-pointer" title="Avançar 15s">
          <i data-lucide="rotate-cw" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- Seletores de Velocidade e Frequência de Fundo -->
      <div class="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
        <div class="flex items-center gap-1.5">
          <span class="text-gray-400 text-[11px]">Velocidade:</span>
          <button onclick="setAudioSpeed(1.0)" id="abSpeed10" class="px-2 py-0.5 rounded bg-yellow-500 text-black font-bold text-[10px]">1.0x</button>
          <button onclick="setAudioSpeed(1.25)" id="abSpeed125" class="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-gray-300 font-bold text-[10px]">1.25x</button>
          <button onclick="setAudioSpeed(1.5)" id="abSpeed15" class="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-gray-300 font-bold text-[10px]">1.5x</button>
        </div>

        <button onclick="toggleAmbientDrone()" id="abDroneToggleBtn" class="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 text-[11px] font-bold cursor-pointer">
          <i data-lucide="volume-2" class="w-3.5 h-3.5"></i> Drone 432Hz: ON
        </button>
      </div>
    </div>
  </div>

  <!-- ==================== MODAL DE DETALHES DO LIVRO ==================== -->'''

html = html.replace(old_book_modal, audiobook_modal_code)

with open('app/index.html', 'w') as f:
    f.write(html)

print("index.html updated with Audio Groups!")
