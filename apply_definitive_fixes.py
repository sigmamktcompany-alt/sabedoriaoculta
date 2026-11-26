import re

appjs_path = "/Users/sigmamarketing/Desktop/cupula33/app/app.js"

with open(appjs_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Adicionar getAllBooks no topo
if "function getAllBooks()" not in content:
    target_top = "const booksData ="
    replacement_top = """function getAllBooks() {
  if (typeof window !== "undefined" && window.BOOKS_DATABASE && window.BOOKS_DATABASE.length > 0) {
    return window.BOOKS_DATABASE;
  }
  return (typeof booksData !== "undefined" && booksData) ? booksData : [];
}

const booksData ="""
    content = content.replace(target_top, replacement_top, 1)
    print("[+] Adicionado helper getAllBooks()")

# 2. Corrigir aspas em handleBookClick em createBookCardHTML
content = re.sub(
    r'<div onclick="handleBookClick\(\$\{book\.id\}\)"',
    r"""<div onclick="handleBookClick('${book.id}')\"""",
    content
)
print("[+] Corrigido handleBookClick('${book.id}') em createBookCardHTML")

# 3. Corrigir aspas em renderContinueReading
content = re.sub(
    r'<div onclick="handleBookClick\(\$\{item\.bookId\}\)"',
    r"""<div onclick="handleBookClick('${item.bookId}')\"""",
    content
)
print("[+] Corrigido handleBookClick('${item.bookId}') em renderContinueReading")

# 4. Corrigir aspas em renderReadingHistoryGrid
content = re.sub(
    r'<div onclick="handleBookClick\(\$\{book\.id\}\)"',
    r"""<div onclick="handleBookClick('${book.id}')\"""",
    content
)
print("[+] Corrigido handleBookClick('${book.id}') em renderReadingHistoryGrid")

# 5. Atualizar handleBookClick para usar getAllBooks e comparação de strings
target_handle_book = """function handleBookClick(bookId) {
  const book = booksData.find(b => b.id === bookId);
  if (!book) return;

  currentBookModalData = book;
  openBookModal(book);
}"""

replacement_handle_book = """function handleBookClick(bookId) {
  const all = getAllBooks();
  const book = all.find(b => String(b.id) === String(bookId));
  if (!book) {
    console.warn("Livro não encontrado com ID:", bookId);
    return;
  }

  currentBookModalData = book;
  openBookModal(book);
}"""

if target_handle_book in content:
    content = content.replace(target_handle_book, replacement_handle_book, 1)
    print("[+] Atualizado handleBookClick com busca universal e comparador de strings")

# 6. Atualizar renderCategoryDetailGrid para usar getAllBooks
content = re.sub(
    r'function renderCategoryDetailGrid\(categoryName\) \{\s*const grid = document\.getElementById\("categoryDetailBooksGrid"\);\s*if \(!grid\) return;\s*const filtered = booksData\.filter\(',
    r"""function renderCategoryDetailGrid(categoryName) {
  const grid = document.getElementById("categoryDetailBooksGrid");
  if (!grid) return;
  const all = getAllBooks();
  const filtered = all.filter(""",
    content
)
print("[+] Atualizado renderCategoryDetailGrid para usar getAllBooks()")

# 7. Substituir o sistema de frequências e o banco de dados de clientes
# Procuramos a seção // MOTOR DE FREQUÊNCIAS SAGRADAS
target_freq_section = """// ==========================================
// MOTOR DE FREQUÊNCIAS SAGRADAS (SOLFEGGIO BINAURAL 3.0)
// =========================================="""

replacement_engine = """// ==========================================
// BANCO DE DADOS DE MEMBROS & HISTÓRICO DE CLIENTES
// ==========================================
const MemberDatabase = {
  getCurrentEmail() {
    return (localStorage.getItem("cupula33_user_email") || "iniciado@cupula33.com").trim().toLowerCase();
  },

  getClientKey(email) {
    const clean = (email || this.getCurrentEmail()).trim().toLowerCase();
    return `cupula33_client_${clean}`;
  },

  getProgressKey(email) {
    const clean = (email || this.getCurrentEmail()).trim().toLowerCase();
    return `cupula33_books_progress_${clean}`;
  },

  getAllClientsIndex() {
    try {
      return JSON.parse(localStorage.getItem("cupula33_all_clients") || "{}");
    } catch(e) {
      return {};
    }
  },

  saveClientRecord(clientData) {
    const email = (clientData.email || this.getCurrentEmail()).trim().toLowerCase();
    if (!email) return;

    const key = this.getClientKey(email);
    const existing = this.getClientRecord(email);
    const updated = {
      ...existing,
      ...clientData,
      email: email,
      updatedAt: new Date().toISOString()
    };

    localStorage.setItem(key, JSON.stringify(updated));

    // Atualiza índice mestre de clientes
    const all = this.getAllClientsIndex();
    all[email] = {
      name: updated.name || "Iniciado",
      tier: updated.tier || "master",
      email: email,
      lastActive: updated.updatedAt,
      booksReadCount: Object.keys(updated.booksProgress || {}).length
    };
    localStorage.setItem("cupula33_all_clients", JSON.stringify(all));

    return updated;
  },

  getClientRecord(email) {
    const clean = (email || this.getCurrentEmail()).trim().toLowerCase();
    const key = this.getClientKey(clean);
    try {
      const stored = localStorage.getItem(key);
      if (stored) return JSON.parse(stored);
    } catch(e) {}

    const knownName = (typeof KNOWN_STUDENT_NAMES !== "undefined" && KNOWN_STUDENT_NAMES[clean]) || "";
    return {
      email: clean,
      name: knownName || (clean.includes("@") ? clean.split("@")[0] : "Iniciado"),
      tier: localStorage.getItem("cupula33_user_tier") || "master",
      booksProgress: {},
      myList: [],
      roadmapCompleted: [],
      activeReading: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  },

  saveBookProgress(bookId, page, totalPages) {
    const email = this.getCurrentEmail();
    const allBooks = getAllBooks();
    const book = allBooks.find(b => String(b.id) === String(bookId));
    if (!book) return;

    const pct = totalPages > 0 ? Math.min(100, Math.round((page / totalPages) * 100)) : 0;
    const progressItem = {
      bookId: book.id,
      title: book.title,
      author: book.author,
      cover: book.cover,
      category: book.category,
      module: book.module || "Módulo I",
      page: page,
      totalPages: totalPages,
      percent: pct,
      pdfUrl: book.pdfUrl,
      timestamp: new Date().toISOString()
    };

    // 1. Salva na chave isolada do cliente
    const clientProgress = this.getAllProgress(email);
    clientProgress[String(book.id)] = progressItem;
    localStorage.setItem(this.getProgressKey(email), JSON.stringify(clientProgress));

    // 2. Atualiza registro completo do cliente
    const client = this.getClientRecord(email);
    client.booksProgress = clientProgress;
    client.activeReading = progressItem;
    this.saveClientRecord(client);

    // 3. Salva legacy para retrocompatibilidade
    localStorage.setItem("cupula33_active_reading", JSON.stringify(progressItem));
    const legacyHistory = JSON.parse(localStorage.getItem("cupula33_books_progress") || "{}");
    legacyHistory[String(book.id)] = progressItem;
    localStorage.setItem("cupula33_books_progress", JSON.stringify(legacyHistory));

    return progressItem;
  },

  getAllProgress(email) {
    const clean = (email || this.getCurrentEmail()).trim().toLowerCase();
    try {
      const scoped = localStorage.getItem(this.getProgressKey(clean));
      if (scoped) return JSON.parse(scoped);
    } catch(e) {}
    try {
      return JSON.parse(localStorage.getItem("cupula33_books_progress") || "{}");
    } catch(e) {
      return {};
    }
  },

  getBookProgress(bookId, email) {
    const all = this.getAllProgress(email);
    const prog = all[String(bookId)] || all[Number(bookId)] || null;
    if (prog && (String(bookId) === "36" || (prog.title && prog.title.toLowerCase().includes("enoque"))) && (prog.page === 56 || prog.page === 27)) {
      delete all[String(bookId)];
      delete all[Number(bookId)];
      localStorage.setItem(this.getProgressKey(email || this.getCurrentEmail()), JSON.stringify(all));
      return null;
    }
    return prog;
  }
};

window.MemberDatabase = MemberDatabase;

// ==========================================
// MOTOR DE FREQUÊNCIAS SAGRADAS (SOLFEGGIO BINAURAL 3.0)
// =========================================="""

if target_freq_section in content and "const MemberDatabase =" not in content:
    content = content.replace(target_freq_section, replacement_engine, 1)
    print("[+] Adicionado MemberDatabase com particionamento por cliente")

# 8. Atualizar getSavedProgress e saveReadingProgress para usar MemberDatabase
target_progress_funcs = """function saveReadingProgress(bookId, page, totalPages) {
  const book = booksData.find(b => b.id === bookId);
  if (!book) return;

  const pct = Math.round((page / totalPages) * 100);
  const data = {
    bookId: book.id,
    title: book.title,
    author: book.author,
    cover: book.cover,
    category: book.category,
    module: book.module || "Módulo I",
    page: page,
    totalPages: totalPages,
    percent: pct,
    pdfUrl: book.pdfUrl,
    timestamp: new Date().toISOString()
  };

  localStorage.setItem("cupula33_active_reading", JSON.stringify(data));

  // Salvar no mapa histórico de todos os livros
  const allHistory = JSON.parse(localStorage.getItem("cupula33_books_progress") || "{}");
  allHistory[book.id] = data;
  localStorage.setItem("cupula33_books_progress", JSON.stringify(allHistory));

  checkReadingProgress();
  renderContinueReading();
  updateProfileXP();
}

function getSavedProgress(bookId) {
  try {
    const allHistory = JSON.parse(localStorage.getItem("cupula33_books_progress") || "{}");
    const prog = allHistory[bookId] || null;
    // Se o progresso salvo for a página 56 ou 27 do livro 36 (artefato do bug anterior), expurga e inicia limpo
    if (prog && (bookId === 36 || (prog.title && prog.title.toLowerCase().includes("enoque"))) && (prog.page === 56 || prog.page === 27)) {
      delete allHistory[bookId];
      localStorage.setItem("cupula33_books_progress", JSON.stringify(allHistory));
      return null;
    }
    return prog;
  } catch(e) {
    return null;
  }
}"""

replacement_progress_funcs = """function saveReadingProgress(bookId, page, totalPages) {
  if (typeof MemberDatabase !== "undefined") {
    const item = MemberDatabase.saveBookProgress(bookId, page, totalPages);
    checkReadingProgress();
    renderContinueReading();
    updateProfileXP();
    return item;
  }
}

function getSavedProgress(bookId) {
  if (typeof MemberDatabase !== "undefined") {
    return MemberDatabase.getBookProgress(bookId);
  }
  try {
    const allHistory = JSON.parse(localStorage.getItem("cupula33_books_progress") || "{}");
    return allHistory[String(bookId)] || allHistory[Number(bookId)] || null;
  } catch(e) {
    return null;
  }
}"""

if target_progress_funcs in content:
    content = content.replace(target_progress_funcs, replacement_progress_funcs, 1)
    print("[+] Atualizado saveReadingProgress e getSavedProgress para usar MemberDatabase")

# 9. Substituir renderFrequencies, handleFrequencyClick, playFrequency e stopFrequency
# para eliminar de vez a recriação do innerHTML durante o clique e adicionar debounce de 600ms
freq_code_regex = r'function renderFrequencies\(\)[\s\S]*?if \(showFeedback\) showToast\("Frequência pausada\."\);\s*\}'

new_freq_code = """function renderFrequencies() {
  const list = document.getElementById("frequenciesList");
  if (!list) return;

  // Se a grade já foi renderizada uma vez, apenas atualiza classes sem destruir a árvore DOM
  if (list.children.length === frequenciesData.length) {
    updateFrequencyUI(activeFrequencyHz);
    return;
  }

  list.innerHTML = frequenciesData.map(f => {
    const isPlaying = activeFrequencyHz === f.hz;
    return `
      <div id="freq-card-${f.hz}" onclick="handleFrequencyClick(${f.hz}, event)" class="esoteric-card rounded-2xl p-4.5 border ${isPlaying ? 'border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.3)] bg-[#D4AF37]/5' : 'border-white/10 hover:border-[#D4AF37]/40'} flex flex-col justify-between transition-all duration-300 cursor-pointer group">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-mono font-bold text-[#D4AF37] px-2 py-0.5 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20">${f.hz} HZ</span>
            <span class="text-[9px] font-bold text-gray-500 uppercase tracking-widest">${f.chakra || 'Solfeggio'}</span>
          </div>
          <h4 class="font-serif font-bold text-sm text-white group-hover:text-[#D4AF37] transition-colors mb-1 line-clamp-1">${f.name}</h4>
          <p class="text-xs text-gray-400 leading-relaxed mb-3 line-clamp-2">${f.benefit}</p>
        </div>
        <div class="pt-2.5 border-t border-white/5 flex items-center justify-between">
          <span class="text-[10px] text-gray-500 font-mono">Onda Binaural</span>
          <button id="freq-btn-${f.hz}" class="px-3 py-1.5 rounded-xl ${isPlaying ? 'bg-[#D4AF37] text-black font-black' : 'bg-white/5 text-gray-300 group-hover:bg-[#D4AF37] group-hover:text-black font-bold'} text-[11px] flex items-center gap-1.5 transition-all duration-200 pointer-events-none">
            <i data-lucide="${isPlaying ? 'pause' : 'play'}" class="w-3.5 h-3.5"></i>
            <span>${isPlaying ? 'Tocando' : 'Ouvir'}</span>
          </button>
        </div>
      </div>
    `;
  }).join("");

  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

function updateFrequencyUI(currentActiveHz) {
  frequenciesData.forEach(f => {
    const card = document.getElementById(`freq-card-${f.hz}`);
    const btn = document.getElementById(`freq-btn-${f.hz}`);
    const isPlaying = currentActiveHz === f.hz;

    if (card) {
      if (isPlaying) {
        card.className = "esoteric-card rounded-2xl p-4.5 border border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.3)] bg-[#D4AF37]/5 flex flex-col justify-between transition-all duration-300 cursor-pointer group";
      } else {
        card.className = "esoteric-card rounded-2xl p-4.5 border border-white/10 hover:border-[#D4AF37]/40 flex flex-col justify-between transition-all duration-300 cursor-pointer group";
      }
    }

    if (btn) {
      if (isPlaying) {
        btn.className = "px-3 py-1.5 rounded-xl bg-[#D4AF37] text-black font-black text-[11px] flex items-center gap-1.5 transition-all duration-200 pointer-events-none";
        btn.innerHTML = `<i data-lucide="pause" class="w-3.5 h-3.5"></i><span>Tocando</span>`;
      } else {
        btn.className = "px-3 py-1.5 rounded-xl bg-white/5 text-gray-300 group-hover:bg-[#D4AF37] group-hover:text-black font-bold text-[11px] flex items-center gap-1.5 transition-all duration-200 pointer-events-none";
        btn.innerHTML = `<i data-lucide="play" class="w-3.5 h-3.5"></i><span>Ouvir</span>`;
      }
    }
  });

  const badge = document.getElementById("playerCurrentHz");
  const waveBox = document.getElementById("soundWaveBox");

  if (currentActiveHz) {
    const fObj = frequenciesData.find(x => x.hz === currentActiveHz);
    if (badge) badge.textContent = `Sintonizado em ${currentActiveHz} Hz • ${fObj ? fObj.name.split('•')[1] || '' : ''}`;
    if (waveBox) waveBox.classList.remove("wave-paused");
  } else {
    if (badge) badge.textContent = "Santuário em Silêncio";
    if (waveBox) waveBox.classList.add("wave-paused");
  }

  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

let lastFrequencyToggleTime = 0;

function handleFrequencyClick(hz, event) {
  if (event && event.stopPropagation) {
    event.stopPropagation();
  }

  const now = Date.now();
  // Debounce robusto de 500ms para aniquilar qualquer duplo clique de touch screen
  if (now - lastFrequencyToggleTime < 500) {
    return;
  }
  lastFrequencyToggleTime = now;

  const targetHz = parseInt(hz);
  if (activeFrequencyHz === targetHz) {
    stopFrequency(true);
  } else {
    playFrequency(targetHz);
  }
}

let stopFrequencyTimeout = null;

async function playFrequency(hz, name) {
  const targetHz = parseInt(hz);
  if (activeFrequencyHz === targetHz) {
    stopFrequency(true);
    return;
  }

  if (stopFrequencyTimeout) {
    clearTimeout(stopFrequencyTimeout);
    stopFrequencyTimeout = null;
  }

  // Interrompe osciladores antigos imediatamente sem afetar o novo tom
  if (currentOscillators.length > 0) {
    const toStopNow = [...currentOscillators];
    currentOscillators = [];
    toStopNow.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch(e) {}
    });
  }
  if (masterGainNode) {
    try { masterGainNode.disconnect(); } catch(e) {}
    masterGainNode = null;
  }

  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      showToast("Áudio não suportado neste dispositivo.");
      return;
    }
    if (!audioCtx || audioCtx.state === 'closed') {
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      await audioCtx.resume();
    }

    const now = audioCtx.currentTime;
    const gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.001, now);
    gainNode.gain.linearRampToValueAtTime(0.35, now + 0.15);
    gainNode.connect(audioCtx.destination);
    masterGainNode = gainNode;

    const newOscs = [];

    // Oscilador 1: Tom Principal (Solfeggio Puro)
    const osc1 = audioCtx.createOscillator();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(targetHz, now);
    osc1.connect(gainNode);
    osc1.start();
    newOscs.push(osc1);

    // Oscilador 2: Batimento Harmônico Binaural (+4 Hz de modulação Theta)
    const osc2 = audioCtx.createOscillator();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(targetHz + 4, now);
    const osc2Gain = audioCtx.createGain();
    osc2Gain.gain.setValueAtTime(0.18, now);
    osc2.connect(osc2Gain);
    osc2Gain.connect(gainNode);
    osc2.start();
    newOscs.push(osc2);

    currentOscillators = newOscs;
    activeFrequencyHz = targetHz;

    // Atualiza a interface cirurgicamente sem reconstruir o DOM
    updateFrequencyUI(targetHz);
    showToast(`Frequência de ${targetHz} Hz Sintonizada`);
  } catch (err) {
    console.error("Erro ao ativar frequência:", err);
    showToast("Toque na tela para permitir áudio.");
  }
}

function stopFrequency(showFeedback = true) {
  if (stopFrequencyTimeout) {
    clearTimeout(stopFrequencyTimeout);
    stopFrequencyTimeout = null;
  }

  const oscsToStop = [...currentOscillators];
  currentOscillators = [];
  const gainToRamp = masterGainNode;
  masterGainNode = null;

  if (gainToRamp && audioCtx && audioCtx.state !== 'closed') {
    try {
      const now = audioCtx.currentTime;
      gainToRamp.gain.setValueAtTime(gainToRamp.gain.value, now);
      gainToRamp.gain.linearRampToValueAtTime(0.0001, now + 0.08);
    } catch(e) {}
  }

  stopFrequencyTimeout = setTimeout(() => {
    oscsToStop.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch(e) {}
    });
    if (gainToRamp) {
      try { gainToRamp.disconnect(); } catch(e) {}
    }
    stopFrequencyTimeout = null;
  }, 90);

  activeFrequencyHz = null;
  updateFrequencyUI(null);

  if (showFeedback) showToast("Frequência pausada.");
}"""

content = re.sub(freq_code_regex, new_freq_code, content)
print("[+] Substituído motor de frequências por arquitetura reativa sem reconstrução do DOM")

with open(appjs_path, "w", encoding="utf-8") as f:
    f.write(content)

print("[✓] app/app.js gravado com todas as correções definitivas!")
