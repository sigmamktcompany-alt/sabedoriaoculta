with open('app/app.js', 'r') as f:
    js = f.read()

audio_group_code = '''
// ==========================================
// SELEÇÃO DE GRUPOS DE ÁUDIO: FREQUÊNCIAS vs AUDIOLIVROS
// ==========================================
let currentAudioGroup = "frequencies"; // "frequencies" | "audiobooks"

function switchAudioGroup(group) {
  currentAudioGroup = group;
  const btnFreq = document.getElementById("groupBtnFrequencies");
  const btnAud = document.getElementById("groupBtnAudiobooks");
  const viewFreq = document.getElementById("groupViewFrequencies");
  const viewAud = document.getElementById("groupViewAudiobooks");
  const subTitle = document.getElementById("audioMainHeaderSubtitle");

  if (group === "frequencies") {
    if (viewFreq) viewFreq.classList.remove("hidden");
    if (viewAud) viewAud.classList.add("hidden");
    if (btnFreq) {
      btnFreq.className = "px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer bg-yellow-500 text-black shadow-lg shadow-yellow-500/20";
    }
    if (btnAud) {
      btnAud.className = "px-5 py-2.5 rounded-xl text-xs font-medium text-gray-400 hover:text-white transition-all flex items-center gap-2 cursor-pointer";
    }
    if (subTitle) subTitle.textContent = "Batimentos binaurais de ondas senoidais puras calibrados para concentração profunda, desbloqueio de chakras e expansão da consciência.";
    renderFrequencies();
  } else {
    if (viewFreq) viewFreq.classList.add("hidden");
    if (viewAud) viewAud.classList.remove("hidden");
    if (btnAud) {
      btnAud.className = "px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer bg-yellow-500 text-black shadow-lg shadow-yellow-500/20";
    }
    if (btnFreq) {
      btnFreq.className = "px-5 py-2.5 rounded-xl text-xs font-medium text-gray-400 hover:text-white transition-all flex items-center gap-2 cursor-pointer";
    }
    if (subTitle) subTitle.textContent = "Obras sagradas e tratados herméticos narrados com frequência de fundo em 432Hz.";
    renderAudiobooksList();
  }

  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

const AUDIOBOOKS_CATALOG = [
  {
    id: 6,
    title: "O Caibalion: As Sete Leis Herméticas",
    author: "Três Iniciados",
    narrator: "Voz Iniciática Cúpula 33",
    duration: "3h 45min",
    totalSeconds: 13500,
    cover: "assets/covers_extracted/cover_O_Caibalion_-_Edi__o_Definitiva.jpg",
    category: "Hermetismo & Cabala",
    hz: 432,
    desc: "A transmissão oral dos sete princípios universais de Hermes Trismegisto: Mentalismo, Correspondência, Vibração, Polaridade, Ritmo, Causa e Efeito, e Gênero."
  },
  {
    id: 36,
    title: "O Livro de Enoque: Tratado Apócrifo",
    author: "Nelson Marins (Edição Revisada)",
    narrator: "Tradição Gnóstica Cúpula 33",
    duration: "2h 30min",
    totalSeconds: 9000,
    cover: "assets/books/enoque.png",
    category: "Gnosticismo & Apócrifos",
    hz: 528,
    desc: "A revelação celeste da jornada de Enoque através das esferas superiores, a queda dos Sentinelas e os mistérios cósmicos proibidos."
  },
  {
    id: 1,
    title: "A Tábua Das Esmeraldas De Thoth",
    author: "Hermes Trismegisto",
    narrator: "Voz Alquímica Cúpula 33",
    duration: "1h 45min",
    totalSeconds: 6300,
    cover: "assets/covers_extracted/cover_A_T_bua_Das_Esmeraldas_De_Thoth.jpg",
    category: "Hermetismo & Cabala",
    hz: 432,
    desc: "O texto original gravado na esmeralda sagrada pelo Três Vezes Grande. As chaves imutáveis do microcosmo e macrocosmo."
  },
  {
    id: 999,
    title: "Os Segredos da Prosperidade Maçônica",
    author: "Acervo Cúpula 33",
    narrator: "Mestre da Ordem 33",
    duration: "4h 15min",
    totalSeconds: 15300,
    cover: "assets/covers_extracted/cover_Manuscrito_Maconico_da_Prosperidade_Oculta.jpg",
    category: "Sociedades Secretas",
    hz: 528,
    desc: "Instrução iniciática sobre as leis da atração magnética, códigos de influência, arquétipos de poder e prosperidade secular."
  },
  {
    id: "ordem_47b2fd41",
    title: "A Doutrina Secreta: Antropogênese",
    author: "Helena Blavatsky",
    narrator: "Tradição Teosófica Cúpula 33",
    duration: "5h 20min",
    totalSeconds: 19200,
    cover: "https://ajczjcjbsuvxrfdumwow.supabase.co/storage/v1/object/public/library-covers/covers/1788347143904_3ffc8q.jpg",
    category: "Teosofia",
    hz: 639,
    desc: "A evolução espiritual da humanidade, as raças-raiz pré-diluvianas e a conexão do homem com a hierarquia oculta planetária."
  },
  {
    id: "ordem_c6d8fe2e",
    title: "A Doutrina Secreta: Cosmogênese",
    author: "Helena Blavatsky",
    narrator: "Tradição Teosófica Cúpula 33",
    duration: "6h 10min",
    totalSeconds: 22200,
    cover: "https://ajczjcjbsuvxrfdumwow.supabase.co/storage/v1/object/public/library-covers/covers/1788347068753_0rivce.jpg",
    category: "Teosofia",
    hz: 432,
    desc: "A gênese universal, o despertar do Universo a partir do Caos primordial e as estrofes secretas de Dzyan."
  },
  {
    id: "ordem_ca323ff0",
    title: "A Doutrina Secreta: Prática da Filosofia Oculta",
    author: "Helena Blavatsky",
    narrator: "Tradição Teosófica Cúpula 33",
    duration: "4h 40min",
    totalSeconds: 16800,
    cover: "https://ajczjcjbsuvxrfdumwow.supabase.co/storage/v1/object/public/library-covers/covers/1788347253884_culug.jpg",
    category: "Teosofia",
    hz: 528,
    desc: "Instruções esotéricas práticas sobre os mistérios antigos, a constituição setenária do homem e as leis da iniciação."
  },
  {
    id: 10,
    title: "Corpus Hermeticum: Diálogo com Poimandres",
    author: "Hermes Trismegisto",
    narrator: "Voz Iniciática Cúpula 33",
    duration: "3h 10min",
    totalSeconds: 11400,
    cover: "assets/covers_extracted/cover_Livro_Grandes_Mulheres_na_Tradi__o_Rosacruz.jpg",
    category: "Hermetismo & Cabala",
    hz: 432,
    desc: "A visão suprema de Hermes sobre o Noûs universal, a queda do homem cósmico na matéria e a ascensão através das oito esferas celestes."
  }
];

function renderAudiobooksList() {
  const grid = document.getElementById("audiobooksGrid");
  if (!grid) return;

  grid.innerHTML = AUDIOBOOKS_CATALOG.map(ab => `
    <div class="esoteric-card rounded-2xl p-5 border border-white/10 flex flex-col justify-between group hover:border-[#D4AF37]/50 transition-all duration-300 shadow-lg bg-[#0d0d0d]">
      <div>
        <div class="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 border border-white/10 group-hover:border-[#D4AF37]/40 shadow-xl bg-black">
          <img src="${ab.cover}" alt="${ab.title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          <div class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/85 backdrop-blur-md text-[9px] font-bold text-[#D4AF37] border border-[#D4AF37]/30 flex items-center gap-1 shadow-md">
            <i data-lucide="sparkles" class="w-3 h-3"></i> ${ab.hz}Hz HD
          </div>

          <div class="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/85 backdrop-blur-md text-[10px] font-mono text-gray-300 border border-white/10">
            ${ab.duration}
          </div>
        </div>

        <span class="text-[9px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold block mb-1">${ab.category}</span>
        <h3 class="text-sm font-serif font-bold text-white group-hover:text-[#D4AF37] transition-colors line-clamp-1">${ab.title}</h3>
        <p class="text-[11px] text-gray-400 mt-0.5 line-clamp-1">Por ${ab.author}</p>
        <p class="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">${ab.desc}</p>
      </div>

      <div class="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between gap-2">
        <span class="text-[10px] text-gray-400 flex items-center gap-1">
          <i data-lucide="mic" class="w-3 h-3 text-[#D4AF37]"></i> ${ab.narrator}
        </span>
        <button onclick="openAudiobookPlayer('${ab.id}')" class="px-3.5 py-1.5 rounded-xl bg-yellow-500/10 hover:bg-yellow-500 text-yellow-400 hover:text-black border border-yellow-500/30 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95">
          <i data-lucide="play" class="w-3.5 h-3.5 fill-current"></i>
          <span>Ouvir</span>
        </button>
      </div>
    </div>
  `).join("");

  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

let activeAudiobook = null;
let audiobookCurrentTime = 0;
let audiobookTimer = null;
let isDroneEnabled = true;

function openAudiobookPlayer(abId) {
  const ab = AUDIOBOOKS_CATALOG.find(a => String(a.id) === String(abId));
  if (!ab) return;
  activeAudiobook = ab;

  const modal = document.getElementById("audiobookPlayerModal");
  const cover = document.getElementById("abPlayerCover");
  const cat = document.getElementById("abPlayerCategory");
  const title = document.getElementById("abPlayerTitle");
  const author = document.getElementById("abPlayerAuthor");
  const totalTime = document.getElementById("abTotalTime");

  if (cover) cover.src = ab.cover;
  if (cat) cat.textContent = ab.category;
  if (title) title.textContent = ab.title;
  if (author) author.textContent = "Por " + ab.author + " • " + ab.narrator;
  if (totalTime) totalTime.textContent = ab.duration;

  if (modal) {
    modal.classList.remove("hidden");
    modal.style.display = "flex";
  }

  audiobookCurrentTime = 0;
  updateAudioProgressUI();
  startAudiobookPlayback();
}

function closeAudiobookPlayerModal() {
  const modal = document.getElementById("audiobookPlayerModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.style.display = "none";
  }
  pauseAudiobookPlayback();
  stopAudiobookAmbientDrone();
}

function startAudiobookPlayback() {
  if (isDroneEnabled) {
    startAudiobookAmbientDrone();
  }

  isAudiobookPlaying = true;
  updateAudioPlayerUI(true);

  if ('speechSynthesis' in window && activeAudiobook) {
    window.speechSynthesis.cancel();
    const narrationText = "Iniciação ao audiolivro sagrado: " + activeAudiobook.title + ". Obra de " + activeAudiobook.author + ". Narrado em frequência áurea de 432 hertz para os membros da Cúpula 33. " + activeAudiobook.desc + ". Respire profundamente e permita que os ensinamentos da tradição ancestral iluminem sua mente.";
    audiobookUtterance = new SpeechSynthesisUtterance(narrationText);
    audiobookUtterance.lang = 'pt-BR';
    audiobookUtterance.rate = currentAudioSpeed;
    audiobookUtterance.pitch = 0.95;

    const voices = window.speechSynthesis.getVoices();
    const ptVoice = voices.find(v => v.lang.includes('pt') || v.lang.includes('PT'));
    if (ptVoice) audiobookUtterance.voice = ptVoice;

    audiobookUtterance.onend = () => {
      pauseAudiobookPlayback();
    };

    window.speechSynthesis.speak(audiobookUtterance);
  }

  clearInterval(audiobookTimer);
  audiobookTimer = setInterval(() => {
    if (isAudiobookPlaying && activeAudiobook) {
      audiobookCurrentTime += 1;
      updateAudioProgressUI();
    }
  }, 1000);
}

function pauseAudiobookPlayback() {
  isAudiobookPlaying = false;
  clearInterval(audiobookTimer);
  if ('speechSynthesis' in window) {
    window.speechSynthesis.pause();
  }
  updateAudioPlayerUI(false);
}

function toggleAudiobookPlay() {
  if (isAudiobookPlaying) {
    pauseAudiobookPlayback();
  } else {
    if ('speechSynthesis' in window && window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      isAudiobookPlaying = true;
      updateAudioPlayerUI(true);
      clearInterval(audiobookTimer);
      audiobookTimer = setInterval(() => {
        if (isAudiobookPlaying && activeAudiobook) {
          audiobookCurrentTime += 1;
          updateAudioProgressUI();
        }
      }, 1000);
    } else {
      startAudiobookPlayback();
    }
  }
}

function updateAudioPlayerUI(playing) {
  const icon = document.getElementById("abPlayIcon");
  const waveBox = document.getElementById("abWaveBox");
  const status = document.getElementById("abPlayerStatus");

  if (icon) {
    icon.setAttribute("data-lucide", playing ? "pause" : "play");
    if (window.lucide) try { lucide.createIcons(); } catch(e) {}
  }

  if (waveBox) {
    if (playing) waveBox.classList.remove("wave-paused");
    else waveBox.classList.add("wave-paused");
  }

  if (status) {
    status.textContent = playing ? "Reproduzindo narração com frequência 432Hz..." : "Reprodução pausada";
  }
}

function updateAudioProgressUI() {
  if (!activeAudiobook) return;
  const bar = document.getElementById("abProgressBar");
  const curTime = document.getElementById("abCurrentTime");

  const total = activeAudiobook.totalSeconds || 3600;
  const pct = Math.min(100, (audiobookCurrentTime / total) * 100);

  if (bar) bar.style.width = pct + "%";
  if (curTime) {
    const mins = Math.floor(audiobookCurrentTime / 60);
    const secs = audiobookCurrentTime % 60;
    curTime.textContent = String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0");
  }
}

function rewindAudiobook(seconds) {
  audiobookCurrentTime = Math.max(0, audiobookCurrentTime - seconds);
  updateAudioProgressUI();
}

function forwardAudiobook(seconds) {
  if (!activeAudiobook) return;
  audiobookCurrentTime = Math.min(activeAudiobook.totalSeconds || 3600, audiobookCurrentTime + seconds);
  updateAudioProgressUI();
}

function setAudioSpeed(speed) {
  currentAudioSpeed = speed;
  [1.0, 1.25, 1.5].forEach(s => {
    const btn = document.getElementById("abSpeed" + String(s).replace(".", ""));
    if (btn) {
      if (s === speed) {
        btn.className = "px-2 py-0.5 rounded bg-yellow-500 text-black font-bold text-[10px]";
      } else {
        btn.className = "px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-gray-300 font-bold text-[10px]";
      }
    }
  });

  if (isAudiobookPlaying && activeAudiobook) {
    startAudiobookPlayback();
  }
}

function toggleAmbientDrone() {
  isDroneEnabled = !isDroneEnabled;
  const btn = document.getElementById("abDroneToggleBtn");
  if (isDroneEnabled) {
    if (isAudiobookPlaying) startAudiobookAmbientDrone();
    if (btn) {
      btn.className = "flex items-center gap-1.5 px-3 py-1 rounded-lg bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 text-[11px] font-bold cursor-pointer";
      btn.innerHTML = `<i data-lucide="volume-2" class="w-3.5 h-3.5"></i> Drone 432Hz: ON`;
    }
  } else {
    stopAudiobookAmbientDrone();
    if (btn) {
      btn.className = "flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 text-gray-400 border border-white/10 text-[11px] font-bold cursor-pointer";
      btn.innerHTML = `<i data-lucide="volume-x" class="w-3.5 h-3.5"></i> Drone 432Hz: OFF`;
    }
  }
  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

function handleAudioScrub(event) {
  if (!activeAudiobook) return;
  const bar = event.currentTarget;
  const rect = bar.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const pct = Math.max(0, Math.min(1, clickX / rect.width));
  audiobookCurrentTime = Math.round(pct * (activeAudiobook.totalSeconds || 3600));
  updateAudioProgressUI();
}
'''

# Append to app.js
js = js + "\n" + audio_group_code

with open('app/app.js', 'w') as f:
    f.write(js)

print("Audio groups appended to app.js!")
