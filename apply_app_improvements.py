import sys

with open("app/app.js", "r", encoding="utf-8") as f:
    code = f.read()

# 1. Update KNOWN_STUDENT_NAMES at top
new_known = '''const KNOWN_STUDENT_NAMES = {
  "paulo-reis51@hotmail.com": "Paulo Reis",
  "mrobertor057@gmail.com": "Robertto Machado",
  "edurosalopes@vivaldi.net": "Carlos Eduardo Rosa Lopes",
  "crazyled.delavelle9@gmail.com": "Emerson Ferreira",
  "elevarevenue@gmail.com": "Eleva Revenue",
  "suportesabedoriaoculta@gmail.com": "Suporte Cúpula 33",
  "admin@cupula33.com": "Administração Cúpula 33",
  "sigmamarketing@gmail.com": "Sigma Marketing",
  "novo_membro_vip@gmail.com": "Membro VIP Cúpula 33",
  "testealuno@gmail.com": "Aluno Iniciado"
};'''

p_known = code.find('const KNOWN_STUDENT_NAMES = {')
p_known_end = code.find('};', p_known)
if p_known != -1 and p_known_end != -1:
    code = code[:p_known] + new_known + code[p_known_end+2:]
    print("Updated KNOWN_STUDENT_NAMES")

# 2. Add book 999 to booksData if not present
if '"id": 999' not in code:
    b999 = '{"id": 999, "title": "Os Segredos da Prosperidade Maçônica", "author": "Acervo Cúpula 33 (Tradição Oculta)", "category": "Sociedades Secretas", "module": "Módulo V", "rarity": "Raríssimo (Edição Ouro)", "pages": 184, "cover": "assets/covers_extracted/cover_Manuscrito_Maconico_da_Prosperidade_Oculta.jpg", "tier": "master", "desc": "Segredos usados por maçons para atrair riqueza, prosperidade e influência. Rituais, códigos e princípios práticos da prosperidade oculta.", "pdfUrl": "livros_pdf/Manuscrito_Maconico_da_Prosperidade_Oculta.pdf"}, '
    p = code.find('const booksData = [')
    if p != -1:
        code = code[:p + len('const booksData = [')] + b999 + code[p + len('const booksData = ['):]
        print("Added book 999")

# 3. Insert centralized User Identity right before updateSidebarUserInfo
user_identity_code = '''
// ==========================================
// IDENTIDADE DINÂMICA DO CLIENTE CÚPULA 33
// ==========================================
function resolveUserIdentity() {
  const currentEmail = (localStorage.getItem("cupula33_user_email") || "").trim().toLowerCase();
  
  // 1. Nome customizado salvo pelo aluno
  const customKey = currentEmail ? "cupula33_custom_name_" + currentEmail : "cupula33_custom_name";
  const customName = localStorage.getItem(customKey) || localStorage.getItem("cupula33_custom_name");
  if (customName && customName.trim()) {
    return {
      email: currentEmail || "membro@cupula33.com",
      name: customName.trim(),
      tier: localStorage.getItem("cupula33_user_tier") || "master"
    };
  }

  // 2. Mapeamento de membros conhecidos
  if (currentEmail && typeof KNOWN_STUDENT_NAMES !== "undefined" && KNOWN_STUDENT_NAMES[currentEmail]) {
    return {
      email: currentEmail,
      name: KNOWN_STUDENT_NAMES[currentEmail],
      tier: localStorage.getItem("cupula33_user_tier") || "master"
    };
  }

  // 3. Gerar nome elegante a partir do prefixo do e-mail
  if (currentEmail && currentEmail.includes("@")) {
    const handle = currentEmail.split("@")[0];
    const parts = handle.replace(/[^a-zA-Z0-9]/g, " ").trim().split(/\\s+/).filter(Boolean);
    if (parts.length > 0) {
      const formattedName = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()).join(" ");
      return {
        email: currentEmail,
        name: formattedName,
        tier: localStorage.getItem("cupula33_user_tier") || "master"
      };
    }
  }

  // 4. Fallback padrão seguro (sem hardcode de nome de cliente anterior)
  return {
    email: currentEmail || "membro@cupula33.com",
    name: "Iniciado da Cúpula",
    tier: localStorage.getItem("cupula33_user_tier") || "master"
  };
}

function updateAllUserDisplays() {
  const user = resolveUserIdentity();
  
  // Sidebar Desktop & Mobile
  const sName = document.getElementById("sidebarUserName");
  const sTier = document.getElementById("sidebarTierLabel");
  if (sName) sName.textContent = user.name;
  if (sTier) sTier.textContent = user.tier === "master" ? "Membro Master" : "Membro Básico";

  // Perfil
  const pName = document.getElementById("profileDisplayName");
  const pEmail = document.getElementById("profileDisplayEmail");
  const pId = document.getElementById("profileUserId");
  if (pName) pName.textContent = user.name;
  if (pEmail) pEmail.textContent = user.email || "Não informado";
  if (pId) {
    let hash = 0;
    const str = user.email || "cupula33_initiate";
    for (let i = 0; i < str.length; i++) hash = ((hash << 5) - hash) + str.charCodeAt(i);
    const hex = Math.abs(hash).toString(16).padStart(8, '0');
    pId.textContent = `cupula33-usr-${hex.slice(0, 4)}-${hex.slice(4, 8)}`;
  }

  // Avatar da Comunidade Composer
  const cLetter = document.getElementById("composerAvatarLetter");
  if (cLetter) {
    cLetter.textContent = user.name.charAt(0).toUpperCase();
  }
}

function promptEditUserName() {
  const current = resolveUserIdentity();
  const newName = prompt("Como você deseja ser chamado na Cúpula 33?", current.name);
  if (newName && newName.trim()) {
    const cleanEmail = (localStorage.getItem("cupula33_user_email") || "").trim().toLowerCase();
    if (cleanEmail) {
      localStorage.setItem("cupula33_custom_name_" + cleanEmail, newName.trim());
    }
    localStorage.setItem("cupula33_custom_name", newName.trim());
    updateAllUserDisplays();
    renderCommunityFeed(currentCommunityFilter);
    showToast("Nome de iniciado atualizado!");
  }
}
'''

p_side = code.find('function updateSidebarUserInfo()')
if p_side != -1:
    code = code[:p_side] + user_identity_code + "\n" + code[p_side:]
    print("Added user_identity_code")

# Replace body of updateSidebarUserInfo
old_side_func = '''function updateSidebarUserInfo() {
  const currentEmail = (localStorage.getItem("cupula33_user_email") || "paulo-reis51@hotmail.com").trim().toLowerCase();
  const name = (typeof KNOWN_STUDENT_NAMES !== "undefined" && KNOWN_STUDENT_NAMES[currentEmail]) || "Iniciado da Cúpula";
  const tier = (localStorage.getItem("cupula33_user_tier") || "master") === "master" ? "Membro Master" : "Membro Básico";

  const sName = document.getElementById("sidebarUserName");
  const sTier = document.getElementById("sidebarTierLabel");
  if (sName) sName.textContent = name;
  if (sTier) sTier.textContent = tier;
}'''

new_side_func = '''function updateSidebarUserInfo() {
  updateAllUserDisplays();
}'''

if old_side_func in code:
    code = code.replace(old_side_func, new_side_func)
    print("Replaced updateSidebarUserInfo")
else:
    print("Could not match exact old_side_func, doing regex replace...")
    import re
    code = re.sub(r'function updateSidebarUserInfo\(\)\s*\{[^}]+sTier\.textContent = tier;\s*\}', new_side_func, code)

# 4. Replace publishCommunityPost with full Community suite
old_comm_start = code.find('function publishCommunityPost')
old_comm_end = code.find('// FILTRAGEM POR MÓDULO', old_comm_start)

new_community_block = '''// ==========================================
// COMUNIDADE CÚPULA 33 (100% FUNCIONAL)
// ==========================================
const DEFAULT_COMMUNITY_POSTS = [
  {
    id: "post-1",
    author: "José Roberto Borges",
    userEmail: "jroberto@exemplo.com",
    initial: "J",
    level: 1,
    category: "Dúvidas na interação do site",
    text: "Pensei que era áudio book",
    timeAgo: "22/11/2026, 22:02:41",
    likes: 2,
    liked: false,
    comments: 0
  },
  {
    id: "post-2",
    author: "Rodrigo ramon Braz palacios",
    userEmail: "rodrigo.palacios@exemplo.com",
    initial: "R",
    level: 1,
    category: "Teoria",
    text: "No face aparece uma porção de livros que na verdade aqui não estão",
    timeAgo: "18/11/2026, 23:17:39",
    likes: 5,
    liked: false,
    comments: 0
  },
  {
    id: "post-3",
    author: "Sara Vieira",
    userEmail: "elevarevenue@gmail.com",
    initial: "S",
    level: 1,
    category: "Templo",
    text: "Iniciando os estudos hoje com O Livro de Enoque e A Tábua de Esmeraldas. A profundidade dos textos é incomparável.",
    timeAgo: "15/11/2026, 14:30:12",
    likes: 9,
    liked: false,
    comments: 3
  }
];

function getCommunityPosts() {
  const saved = localStorage.getItem("cupula33_community_posts");
  if (!saved) {
    localStorage.setItem("cupula33_community_posts", JSON.stringify(DEFAULT_COMMUNITY_POSTS));
    return DEFAULT_COMMUNITY_POSTS;
  }
  try {
    return JSON.parse(saved);
  } catch(e) {
    return DEFAULT_COMMUNITY_POSTS;
  }
}

let currentCommunityFilter = "Tudo";

function filterCommunityPosts(category) {
  currentCommunityFilter = category;
  
  document.querySelectorAll(".community-pill").forEach(btn => {
    const f = btn.getAttribute("data-filter");
    if (f === category) {
      btn.className = "community-pill px-4 py-1.5 rounded-full bg-yellow-500 text-black text-xs font-bold whitespace-nowrap transition cursor-pointer";
    } else {
      btn.className = "community-pill px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 text-xs font-medium whitespace-nowrap transition cursor-pointer";
    }
  });

  renderCommunityFeed(category);
}

function renderCommunityFeed(filter = "Tudo") {
  const container = document.getElementById("communityFeedContainer");
  if (!container) return;

  const user = resolveUserIdentity();
  let posts = getCommunityPosts();

  if (filter === "Meus Posts") {
    posts = posts.filter(p => (p.userEmail && p.userEmail.toLowerCase() === user.email.toLowerCase()) || p.author === user.name);
  } else if (filter && filter !== "Tudo") {
    posts = posts.filter(p => p.category && p.category.toLowerCase() === filter.toLowerCase());
  }

  if (posts.length === 0) {
    container.innerHTML = `
      <div class="esoteric-card rounded-2xl p-10 text-center border border-white/10">
        <i data-lucide="message-square" class="w-8 h-8 text-gray-600 mx-auto mb-3"></i>
        <p class="text-sm text-gray-400">Nenhuma discussão encontrada nesta categoria.</p>
        <p class="text-xs text-gray-500 mt-1">Seja o primeiro a publicar usando o campo acima!</p>
      </div>
    `;
    if (window.lucide) try { lucide.createIcons(); } catch(e) {}
    return;
  }

  container.innerHTML = posts.map(p => `
    <div class="esoteric-card rounded-2xl p-5 border border-white/10 animate-fade-in text-left">
      <div class="flex items-center gap-3 mb-2.5">
        <div class="w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold text-xs shrink-0">
          ${p.initial || (p.author ? p.author.charAt(0).toUpperCase() : '?')}
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-white">${p.author}</span>
            <span class="text-[9px] px-1.5 py-0.5 rounded bg-yellow-500/20 text-yellow-400 font-mono font-bold">NÍVEL ${p.level || 1}</span>
          </div>
          <span class="text-[10px] text-gray-500 font-mono">${p.timeAgo || 'Recentemente'}</span>
        </div>
      </div>

      ${p.category ? `
        <div class="mb-2">
          <span class="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">
            <i data-lucide="message-circle" class="w-3 h-3 text-yellow-400"></i> ${p.category}
          </span>
        </div>
      ` : ''}

      <p class="text-xs sm:text-sm text-gray-200 mt-2 leading-relaxed whitespace-pre-line">${p.text}</p>

      <div class="flex items-center gap-5 mt-4 pt-3 border-t border-white/5 text-gray-500 text-xs">
        <button onclick="likeCommunityPost('${p.id}')" class="flex items-center gap-1.5 transition cursor-pointer ${p.liked ? 'text-yellow-400 font-bold' : 'hover:text-yellow-400'}">
          <i data-lucide="heart" class="w-3.5 h-3.5 ${p.liked ? 'fill-yellow-400 text-yellow-400' : ''}"></i>
          <span>${p.likes || 0}</span>
        </button>
        <button onclick="showToast('Comentários em breve na próxima atualização')" class="flex items-center gap-1.5 hover:text-white transition cursor-pointer">
          <i data-lucide="message-square" class="w-3.5 h-3.5"></i>
          <span>${p.comments || 0}</span>
        </button>
      </div>
    </div>
  `).join("");

  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

function publishCommunityPost() {
  const input = document.getElementById("communityPostInput");
  const catSelect = document.getElementById("communityPostCategory");
  if (!input) return;

  const text = input.value.trim();
  if (!text) {
    showToast("Digite algo para publicar na comunidade.");
    return;
  }

  const user = resolveUserIdentity();
  const category = catSelect ? catSelect.value : "Teoria";
  const now = new Date();
  const timeFormatted = now.toLocaleDateString("pt-BR") + ", " + now.toLocaleTimeString("pt-BR");

  const newPost = {
    id: "post-" + Date.now(),
    author: user.name,
    userEmail: user.email,
    initial: user.name.charAt(0).toUpperCase(),
    level: 1,
    category: category,
    text: text,
    timeAgo: timeFormatted,
    likes: 0,
    liked: false,
    comments: 0
  };

  const posts = getCommunityPosts();
  posts.unshift(newPost);
  localStorage.setItem("cupula33_community_posts", JSON.stringify(posts));

  input.value = "";
  renderCommunityFeed(currentCommunityFilter);
  showToast("Publicado com sucesso no Feed Geral!");
}

function likeCommunityPost(postId) {
  const posts = getCommunityPosts();
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  if (post.liked) {
    post.liked = false;
    post.likes = Math.max(0, (post.likes || 1) - 1);
  } else {
    post.liked = true;
    post.likes = (post.likes || 0) + 1;
  }

  localStorage.setItem("cupula33_community_posts", JSON.stringify(posts));
  renderCommunityFeed(currentCommunityFilter);
}

'''

if old_comm_start != -1 and old_comm_end != -1:
    code = code[:old_comm_start] + new_community_block + code[old_comm_end:]
    print("Replaced Community Suite")

# 5. Replace Solfeggio Audio Engine
p_freq_start = code.find('function renderFrequencies()')
p_freq_end = code.find('// SISTEMA DO ROADMAP', p_freq_start)

new_audio_block = '''// ==========================================
// MOTOR DE FREQUÊNCIAS SAGRADAS (SOLFEGGIO BINAURAL 3.0)
// ==========================================
let audioCtx = null;
let currentOscillators = [];
let masterGainNode = null;
let activeFrequencyHz = null;

function renderFrequencies() {
  const list = document.getElementById("frequenciesList");
  if (!list) return;

  list.innerHTML = frequenciesData.map(f => {
    const isLocked = currentTier === "basico" && f.tier === "master";
    const isPlaying = activeFrequencyHz === f.hz;

    return `
      <div class="glass-panel glass-panel-hover rounded-2xl p-5 border ${isPlaying ? 'border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.25)]' : 'border-white/10'} flex flex-col justify-between transition-all">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-serif font-bold text-yellow-400">${f.hz} HZ</span>
            <span class="text-[10px] font-bold text-gray-400">${f.chakra || ''}</span>
          </div>
          <h4 class="font-serif font-bold text-base text-gray-100 mb-1">${f.name}</h4>
          <p class="text-xs text-gray-400 leading-relaxed mb-4">${f.benefit}</p>
        </div>
        <div class="pt-3 border-t border-white/10 flex items-center justify-between">
          <span class="text-[11px] text-gray-500">Onda Pura Senoidal</span>
          <button onclick="handleFrequencyClick(${f.hz})" class="px-4 py-2 rounded-xl ${isPlaying ? 'bg-yellow-400 text-black font-black' : 'bg-yellow-500 text-black font-bold'} text-xs flex items-center gap-1.5 transition-all shadow-md">
            <i data-lucide="${isPlaying ? 'pause' : 'play'}" class="w-3.5 h-3.5"></i>
            <span>${isPlaying ? 'Pausar' : 'Sintonizar'}</span>
          </button>
        </div>
      </div>
    `;
  }).join("");

  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

function handleFrequencyClick(hz) {
  const targetHz = parseInt(hz);
  if (activeFrequencyHz === targetHz) {
    stopFrequency(true);
  } else {
    playFrequency(targetHz);
  }
}

async function playFrequency(hz, name) {
  const targetHz = parseInt(hz);
  if (activeFrequencyHz === targetHz) {
    stopFrequency(true);
    return;
  }
  stopFrequency(false);

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

    masterGainNode = audioCtx.createGain();
    masterGainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
    masterGainNode.gain.linearRampToValueAtTime(0.40, audioCtx.currentTime + 0.15);
    masterGainNode.connect(audioCtx.destination);

    // Oscilador 1: Tom Principal
    const osc1 = audioCtx.createOscillator();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(targetHz, audioCtx.currentTime);
    osc1.connect(masterGainNode);
    osc1.start();
    currentOscillators.push(osc1);

    // Oscilador 2: Batimento Harmônico (+4 Hz)
    const osc2 = audioCtx.createOscillator();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(targetHz + 4, audioCtx.currentTime);
    const osc2Gain = audioCtx.createGain();
    osc2Gain.gain.setValueAtTime(0.20, audioCtx.currentTime);
    osc2.connect(osc2Gain);
    osc2Gain.connect(masterGainNode);
    osc2.start();
    currentOscillators.push(osc2);

    activeFrequencyHz = targetHz;

    const badge = document.getElementById("playerCurrentHz");
    if (badge) badge.textContent = `Sintonizado em ${targetHz} Hz ${name ? '• ' + name : ''}`;

    document.querySelectorAll("[data-freq-btn]").forEach(btn => {
      const bHz = parseInt(btn.getAttribute("data-freq-btn"));
      if (bHz === targetHz) {
        btn.classList.add("border-yellow-500", "bg-yellow-500/10", "shadow-[0_0_20px_rgba(234,179,8,0.3)]");
        btn.classList.remove("border-white/10", "bg-white/5");
      } else {
        btn.classList.remove("border-yellow-500", "bg-yellow-500/10", "shadow-[0_0_20px_rgba(234,179,8,0.3)]");
        btn.classList.add("border-white/10", "bg-white/5");
      }
    });

    renderFrequencies();
    showToast(`Frequência de ${targetHz} Hz Sintonizada`);
  } catch (err) {
    console.error("Erro ao ativar frequência:", err);
    showToast("Toque na tela para permitir áudio.");
  }
}

function stopFrequency(showFeedback = true) {
  if (masterGainNode && audioCtx && audioCtx.state !== 'closed') {
    try {
      masterGainNode.gain.setValueAtTime(masterGainNode.gain.value, audioCtx.currentTime);
      masterGainNode.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
    } catch(e) {}
  }

  setTimeout(() => {
    currentOscillators.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch(e) {}
    });
    currentOscillators = [];
  }, 120);

  activeFrequencyHz = null;

  const badge = document.getElementById("playerCurrentHz");
  if (badge) badge.textContent = "Santuário em Silêncio";

  document.querySelectorAll("[data-freq-btn]").forEach(btn => {
    btn.classList.remove("border-yellow-500", "bg-yellow-500/10", "shadow-[0_0_20px_rgba(234,179,8,0.3)]");
    btn.classList.add("border-white/10", "bg-white/5");
  });

  renderFrequencies();
  if (showFeedback) showToast("Frequência pausada.");
}

'''

if p_freq_start != -1 and p_freq_end != -1:
    code = code[:p_freq_start] + new_audio_block + code[p_freq_end:]
    print("Replaced Audio Engine")

# 6. Add Continue Reading & XP Engine right after checkReadingProgress
p_read_start = code.find('function saveReadingProgress')
p_read_end = code.find('function togglePlayAudiobook', p_read_start)

new_reading_block = '''function saveReadingProgress(bookId, page, totalPages) {
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
  const allHistory = JSON.parse(localStorage.getItem("cupula33_books_progress") || "{}");
  return allHistory[bookId] || null;
}

function checkReadingProgress() {
  const section = document.getElementById("resumeReadingSection");
  const stored = localStorage.getItem("cupula33_active_reading");
  if (!section) return;

  if (!stored) {
    section.classList.add("hidden");
    return;
  }

  try {
    const data = JSON.parse(stored);
    const rCover = document.getElementById("resumeCover");
    const rTitle = document.getElementById("resumeTitle");
    const rText = document.getElementById("resumeProgressText");
    const rBar = document.getElementById("resumeProgressBar");

    if (rCover) rCover.src = data.cover;
    if (rTitle) rTitle.textContent = data.title;
    if (rText) rText.textContent = "Página " + data.page + " de " + data.totalPages + " • " + data.percent + "% Concluído";
    if (rBar) rBar.style.width = data.percent + "%";
    section.classList.remove("hidden");
    if (window.lucide) try { lucide.createIcons(); } catch(e) {}
  } catch (err) {
    section.classList.add("hidden");
  }
}

function renderContinueReading() {
  const allHistory = JSON.parse(localStorage.getItem("cupula33_books_progress") || "{}");
  const entries = Object.values(allHistory).sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0));

  const homeSection = document.getElementById("homeContinueSection");
  const homeCarousel = document.getElementById("homeContinueCarousel");
  const libSection = document.getElementById("sectionContinueReading");
  const libCarousel = document.getElementById("continueReadingCarousel");

  if (entries.length === 0) {
    if (homeSection) homeSection.classList.add("hidden");
    if (libSection) libSection.classList.add("hidden");
    return;
  }

  const cardsHTML = entries.map(item => `
    <div onclick="handleBookClick(${item.bookId})" class="shrink-0 w-36 sm:w-44 group cursor-pointer text-left snap-start">
      <div class="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#141414] border border-white/10 group-hover:border-yellow-500/60 shadow-lg transition-all duration-300">
        <img src="${item.cover}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='assets/logo.jpg'">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 flex items-center gap-1.5 shadow">
          <span class="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
          <span class="font-mono font-bold text-[10px] text-white">${item.percent || 0}%</span>
        </div>
      </div>
      <h4 class="text-xs font-serif font-bold text-white mt-2.5 truncate group-hover:text-yellow-400 transition-colors">${item.title}</h4>
      <p class="text-[11px] text-gray-500 truncate">${item.author || 'Acervo Cúpula 33'}</p>
    </div>
  `).join("");

  if (homeSection && homeCarousel) {
    homeCarousel.innerHTML = cardsHTML;
    homeSection.classList.remove("hidden");
  }
  if (libSection && libCarousel) {
    libCarousel.innerHTML = cardsHTML;
    libSection.classList.remove("hidden");
  }
  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

function updateProfileXP() {
  const allHistory = JSON.parse(localStorage.getItem("cupula33_books_progress") || "{}");
  const entries = Object.values(allHistory);
  
  let totalPagesRead = 0;
  let completedCount = 0;

  entries.forEach(b => {
    totalPagesRead += (b.page || 0);
    if ((b.percent || 0) >= 95) completedCount++;
  });

  const totalXP = (totalPagesRead * 2) + (completedCount * 50);
  const level = Math.max(1, Math.floor(totalXP / 300) + 1);
  const currentLevelXP = totalXP % 300;
  const pctToNext = Math.min(100, Math.round((currentLevelXP / 300) * 100));

  const xpText = document.getElementById("profileXpText");
  const nextLvlText = document.getElementById("profileNextLvlText");
  const xpBar = document.getElementById("profileXpBar");
  const statBooks = document.getElementById("statCompletedBooks");
  const statLvl = document.getElementById("statCurrentLevel");
  const lvlBadge = document.getElementById("profileLevelBadge");

  if (xpText) xpText.textContent = `XP: ${currentLevelXP} / 300`;
  if (nextLvlText) nextLvlText.textContent = `RUMO AO NÍVEL ${level + 1}`;
  if (xpBar) xpBar.style.width = `${Math.max(5, pctToNext)}%`;
  if (statBooks) statBooks.textContent = completedCount;
  if (statLvl) statLvl.textContent = `Nível ${level}`;
  if (lvlBadge) lvlBadge.textContent = `LVL ${level}`;
}

function resumeLastReading() {
  const stored = localStorage.getItem("cupula33_active_reading");
  if (!stored) return;
  try {
    const data = JSON.parse(stored);
    const book = booksData.find(b => b.id === data.bookId);
    if (book) {
      openReaderModal(book, data.page);
    }
  } catch(e) {}
}

function clearReadingProgress() {
  localStorage.removeItem("cupula33_active_reading");
  checkReadingProgress();
  renderContinueReading();
  showToast("Progresso de leitura resetado.");
}

'''

if p_read_start != -1 and p_read_end != -1:
    code = code[:p_read_start] + new_reading_block + code[p_read_end:]
    print("Replaced Reading Progress & XP Block")

# 7. Update switchTab to refresh sections
old_switch = '''  if (tabName === "library") {
    renderBooks();
  }'''

new_switch = '''  if (tabName === "library") {
    renderBooks();
    renderContinueReading();
  } else if (tabName === "home") {
    renderContinueReading();
  } else if (tabName === "community") {
    renderCommunityFeed(currentCommunityFilter);
  } else if (tabName === "profile") {
    updateAllUserDisplays();
    updateProfileXP();
  }'''

if old_switch in code:
    code = code.replace(old_switch, new_switch)
    print("Updated switchTab")

# 8. Update DOMContentLoaded at top
old_dom = '''  // 3. Renderizar componentes
  checkReadingProgress();
  renderBooks();
  renderCollections();
  renderFrequencies();
  renderRoadmap();'''

new_dom = '''  // 3. Renderizar componentes
  checkReadingProgress();
  renderBooks();
  renderCollections();
  renderFrequencies();
  renderRoadmap();
  updateAllUserDisplays();
  updateProfileXP();
  renderContinueReading();
  renderCommunityFeed(currentCommunityFilter);'''

if old_dom in code:
    code = code.replace(old_dom, new_dom)
    print("Updated DOMContentLoaded")

# 9. Update authenticateGateLogin to refresh displays
old_auth_success = '''    localStorage.setItem("cupula33_user_email", email);
    localStorage.setItem("cupula33_user_tier", userTier);
    currentTier = userTier;'''

new_auth_success = '''    localStorage.setItem("cupula33_user_email", email);
    localStorage.setItem("cupula33_user_tier", userTier);
    currentTier = userTier;
    updateAllUserDisplays();
    updateProfileXP();
    renderContinueReading();
    renderCommunityFeed(currentCommunityFilter);'''

if old_auth_success in code:
    code = code.replace(old_auth_success, new_auth_success)
    print("Updated authenticateGateLogin")

with open("app/app.js", "w", encoding="utf-8") as f:
    f.write(code)

print("Saved app/app.js successfully!")
