with open('app/index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update tab-audiobooks container and header
old_audio_header = '''    <!-- ==================== ABA 3: AUDIOLIVROS (EXATAMENTE COMO NAS SCREENSHOTS) ==================== -->
    <section id="tab-audiobooks" class="app-tab-section hidden animate-fade-in">
      <div class="px-6 sm:px-12 py-8">

        <!-- Header com Título e Seletor dos 2 Grupos -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 text-left">
          <div>
            <div class="flex items-center gap-3">
              <i data-lucide="headphones" class="w-6 h-6 text-yellow-400"></i>
              <h1 id="audioMainHeaderTitle"
                class="text-2xl sm:text-3xl font-serif text-white font-bold border-l-4 border-yellow-500 pl-4 tracking-tight">
                Áudios & Frequências
              </h1>
            </div>
            <p id="audioMainHeaderSubtitle" class="text-xs text-gray-400 mt-2 pl-7">
              Selecione o grupo desejado: Frequências Sonoras de Solfeggio ou Audiolivros narrados.
            </p>
          </div>

          <!-- SELETOR DOS DOIS GRUPOS: FREQUÊNCIAS SONORAS vs AUDIOLIVROS -->
          <div
            class="inline-flex items-center p-1.5 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-md">
            <button id="groupBtnFrequencies" onclick="switchAudioGroup('frequencies')"
              class="px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer bg-yellow-500 text-black shadow-lg shadow-yellow-500/20">
              <i data-lucide="radio" class="w-4 h-4"></i>
              <span>Frequências Sonoras</span>
            </button>
            <button id="groupBtnAudiobooks" onclick="switchAudioGroup('audiobooks')"
              class="px-5 py-2.5 rounded-xl text-xs font-medium text-gray-400 hover:text-white transition-all flex items-center gap-2 cursor-pointer">
              <i data-lucide="book-open" class="w-4 h-4"></i>
              <span>Audiolivros</span>
            </button>
          </div>
        </div>'''

new_audio_header = '''    <!-- ==================== ABA 3: AUDIOLIVROS & FREQUÊNCIAS SAGRADAS ==================== -->
    <section id="tab-audiobooks" class="app-tab-section hidden animate-fade-in">
      <div class="px-4 sm:px-8 lg:px-12 py-6 max-w-7xl mx-auto">

        <!-- Header com Título e Seletor dos 2 Grupos (Totalmente Responsivo) -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 text-left">
          <div class="flex items-center space-x-3 shrink-0">
            <h1 id="audioMainHeaderTitle"
              class="text-2xl sm:text-3xl font-serif text-white border-l-4 border-yellow-500 pl-3.5 font-bold tracking-tight">
              Áudios & Frequências
            </h1>
          </div>

          <!-- SELETOR DOS DOIS GRUPOS: FREQUÊNCIAS SONORAS vs AUDIOLIVROS -->
          <div
            class="inline-flex items-center p-1 rounded-2xl bg-[#141414] border border-white/10 shadow-lg w-full sm:w-auto justify-center sm:justify-start">
            <button id="groupBtnFrequencies" onclick="switchAudioGroup('frequencies')"
              class="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer bg-yellow-500 text-black shadow-lg shadow-yellow-500/20">
              <i data-lucide="radio" class="w-3.5 h-3.5"></i>
              <span>Frequências Sonoras</span>
            </button>
            <button id="groupBtnAudiobooks" onclick="switchAudioGroup('audiobooks')"
              class="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-medium text-gray-400 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer">
              <i data-lucide="book-open" class="w-3.5 h-3.5"></i>
              <span>Audiolivros</span>
            </button>
          </div>
        </div>'''

assert old_audio_header in text, 'old_audio_header not found'
text = text.replace(old_audio_header, new_audio_header)

# 2. Update groupViewFrequencies banner and list container
old_group_freq = '''        <!-- GRUPO 1: FREQUÊNCIAS SONORAS -->
        <div id="groupViewFrequencies" class="space-y-8 animate-fade-in">
          <!-- Player de Frequências Sagradas 100% Funcional e Audível -->
          <div
            class="esoteric-card rounded-3xl p-6 sm:p-8 mb-10 border border-white/10 max-w-5xl text-left relative overflow-hidden">
            <div class="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none">
            </div>

            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
              <div>
                <span
                  class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider mb-2 border border-[#D4AF37]/30 shadow-sm">
                  <i data-lucide="radio" class="w-3.5 h-3.5"></i> Ressonância de Solfeggio Ativa
                </span>
                <h2 class="text-xl sm:text-2xl font-serif font-bold text-white">Frequências Sonoras & Ondas Sagradas
                </h2>
                <p class="text-xs text-gray-400 mt-1.5 max-w-lg leading-relaxed">Batimentos binaurais de ondas senoidais
                  puras calibrados para concentração profunda, desbloqueio de chakras e expansão da consciência.</p>
              </div>

              <div class="flex flex-col items-center sm:items-end gap-2.5 shrink-0">
                <div id="soundWaveBox"
                  class="px-4 py-2.5 rounded-2xl bg-black/90 border border-white/15 flex items-center gap-2.5 shadow-lg wave-paused">
                  <span class="wave-bar"></span>
                  <span class="wave-bar"></span>
                  <span class="wave-bar"></span>
                  <span class="wave-bar"></span>
                  <span class="wave-bar"></span>
                  <span id="playerCurrentHz" class="font-mono font-bold text-xs text-[#D4AF37] tracking-wide">Santuário
                    em Silêncio</span>
                </div>
                <button onclick="stopFrequency(true)"
                  class="text-xs text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer py-1 px-2.5 rounded-lg hover:bg-white/5">
                  <i data-lucide="square" class="w-3.5 h-3.5"></i> Parar Frequência
                </button>
              </div>
            </div>

            <!-- Grade Dinâmica Completa com as 8 Frequências Sagradas de Solfeggio -->
            <div class="mt-8 pt-6 border-t border-white/10 relative z-10">
              <div class="flex items-center justify-between mb-4">
                <span class="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Sintonizar Matriz
                  Sonora</span>
                <span class="text-[10px] font-mono text-[#D4AF37]">Ondas Senoidais 432Hz - 963Hz</span>
              </div>
              <div id="frequenciesList" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                <!-- Injetado dinamicamente via renderFrequencies() -->
              </div>
            </div>
          </div>
        </div>'''

new_group_freq = '''        <!-- GRUPO 1: FREQUÊNCIAS SONORAS SAGRADAS -->
        <div id="groupViewFrequencies" class="space-y-6 animate-fade-in text-left">
          
          <!-- Banner de Status & Sintonia (Compacto e Harmonioso) -->
          <div class="esoteric-card rounded-2xl p-4 sm:p-6 border border-white/10 relative overflow-hidden bg-gradient-to-r from-[#121212] via-black to-[#121212]">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
              <div class="flex items-center gap-3.5">
                <div class="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400 shadow-md shrink-0">
                  <i data-lucide="radio" class="w-5 h-5 animate-pulse"></i>
                </div>
                <div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest">MATRIZ DE SOLFEGGIO</span>
                    <span class="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                    <span class="text-[10px] font-mono text-gray-400">432Hz - 963Hz</span>
                  </div>
                  <p class="text-xs text-gray-300 mt-0.5 leading-snug">Batimentos binaurais de ondas senoidais puras para meditação, estudo e alinhamento dos chakras.</p>
                </div>
              </div>

              <!-- Status Atual do Player -->
              <div class="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-2.5 sm:pt-0 border-white/5">
                <div id="soundWaveBox" class="px-3.5 py-1.5 rounded-xl bg-black border border-white/15 flex items-center gap-2 shadow-lg wave-paused shrink-0">
                  <span class="wave-bar"></span>
                  <span class="wave-bar"></span>
                  <span class="wave-bar"></span>
                  <span class="wave-bar"></span>
                  <span class="wave-bar"></span>
                  <span id="playerCurrentHz" class="font-mono font-bold text-xs text-yellow-400 tracking-wide">Santuário em Silêncio</span>
                </div>
                <button onclick="stopFrequency(true)" class="text-xs text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer py-1.5 px-3 rounded-xl hover:bg-white/10 border border-white/10 shrink-0">
                  <i data-lucide="square" class="w-3.5 h-3.5"></i> Parar
                </button>
              </div>
            </div>
          </div>

          <!-- Grade das 8 Frequências Sagradas (Proporção Impecável Mobile & Desktop) -->
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-[11px] font-bold text-gray-400 uppercase tracking-widest font-mono">SINTONIZAR MATRIZ SONORA</span>
              <span class="text-[10px] font-mono text-yellow-500/80">8 Ondas Disponíveis</span>
            </div>
            <div id="frequenciesList" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <!-- Injetado dinamicamente via renderFrequencies() -->
            </div>
          </div>

        </div>'''

assert old_group_freq in text, 'old_group_freq not found'
text = text.replace(old_group_freq, new_group_freq)

# Bump cache buster
import re
text = re.sub(r'app\.js\?v=\d+', 'app.js?v=1795580000', text)

with open('app/index.html', 'w', encoding='utf-8') as f:
    f.write(text)

print('app/index.html updated with proportional layout for audio & frequencies!')
