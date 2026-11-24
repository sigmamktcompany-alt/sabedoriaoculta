const KNOWN_STUDENT_NAMES = {
  "dweslley2003@gmail.com": "Weslley Dias",
  "ricardoscola4@gmail.com": "Ricardo André Scola",
  "loisianavida123@gmail.com": "Loisiana Lopes",
  "tjoaquim627@gmail.com": "Tamara S Joaquim",
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
};
/**
 * CÚPULA 33 | PLATAFORMA DE MEMBROS & ACERVO HERMÉTICO PWA
 * Estrutura Canônica: 6 Módulos Oficiais (2.500 Obras no Master vs 500 no Básico)
 * Recursos VIP: Marcador de Leitura (localStorage), Audiobook com Frequência 432Hz e Download de Áudio.
 * Estilo inspirado no The King's Code e BrainSync.
 */

// 1. BANCO DE DADOS OFICIAL - 55 OBRAS RESTAURADAS COM PDFS E CAPAS EXCLUSIVAS
// 1. BANCO DE DADOS OFICIAL - 1.335 OBRAS DO ACERVO SAGRADO
const DEFAULT_LOCAL_BOOKS = [
  {"id":36,"title":"O Livro de Enoque","author":"Nelson Marins (Edição Revisada)","category":"Gnosticismo & Apócrifos","module":"Módulo III - Gnosticismo & Apócrifos","cover":"assets/books/enoque.png","pdfUrl":"livros_pdf/O_Livro_de_Enoque.pdf","pages":76,"tier":"basico","desc":"Tratado apócrifo milenar sobre os mistérios celestes e a queda dos sentinelas."},
  {"id":999,"title":"Os Segredos da Prosperidade Maçônica","author":"Acervo Cúpula 33","category":"Sociedades Secretas & Maçonaria","module":"Módulo V - Sociedades Secretas","cover":"assets/covers_extracted/cover_Manuscrito_Maconico_da_Prosperidade_Oculta.jpg","pdfUrl":"livros_pdf/Manuscrito_Maconico_da_Prosperidade_Oculta.pdf","pages":31,"tier":"master","desc":"Segredos usados por maçons para atrair riqueza, prosperidade e influência."},
  {"id":1,"title":"A Tábua Das Esmeraldas De Thoth","author":"Hermes Trismegisto","category":"Hermetismo & Cabala","module":"Módulo I - Hermetismo & Cabala","cover":"assets/covers_extracted/cover_A_T_bua_Das_Esmeraldas_De_Thoth.jpg","pdfUrl":"livros_pdf/10_A_Tabua_de_Esmeralda_Hermes_Trismegisto.pdf","pages":127,"tier":"basico","desc":"Tratado e manuscrito autêntico preservado em língua portuguesa."},
  {"id":6,"title":"O Caibalion: As Sete Leis Herméticas","author":"Três Iniciados","category":"Hermetismo & Cabala","module":"Módulo I - Hermetismo & Cabala","cover":"assets/covers_extracted/cover_O_Caibalion_-_Edi__o_Definitiva.jpg","pdfUrl":"livros_pdf/01_O_Caibalion_Tres_Iniciados.pdf","pages":162,"tier":"basico","desc":"Os 7 princípios universais da filosofia hermética."}
];

function getAllBooks() {
  if (typeof window !== "undefined" && window.BOOKS_DATABASE && window.BOOKS_DATABASE.length > 0) {
    return window.BOOKS_DATABASE;
  }
  return (typeof booksData !== "undefined" && booksData) ? booksData : [];
}

const booksData = (typeof window !== "undefined" && window.BOOKS_DATABASE && window.BOOKS_DATABASE.length > 0)
  ? window.BOOKS_DATABASE
  : DEFAULT_LOCAL_BOOKS;

// 2. TEMAS SAGRADOS E VIAS INICIÁTICAS (PADRÃO ORDEM 137 - ABERTURA DIRETA NO APP)
const collectionsData = [
  {
    id: "tema-hermetismo",
    title: "Hermetismo & Cabala",
    subtitle: "O Caibalion, Tábua de Esmeralda, Zohar e Árvore da Vida",
    category: "Hermetismo & Cabala",
    count: "90 Obras",
    icon: "book-open"
  },
  {
    id: "tema-alta-magia",
    title: "Grimórios & Alta Magia",
    subtitle: "Clavículas de Salomão, Goetia, Teurgia e Rituais",
    category: "Grimórios & Alta Magia",
    count: "135 Obras",
    icon: "sparkles"
  },
  {
    id: "tema-gnosticismo",
    title: "Gnosticismo & Apócrifos",
    subtitle: "Livro de Enoque, Nag Hammadi, Evangelhos Secretos",
    category: "Gnosticismo & Apócrifos",
    count: "88 Obras",
    icon: "scroll"
  },
  {
    id: "tema-alquimia",
    title: "Alquimia & Espagíria",
    subtitle: "Pedra Filosofal, Mutus Liber, Paracelso e Transmutação",
    category: "Alquimia & Transmutação",
    count: "45 Obras",
    icon: "flame"
  },
  {
    id: "tema-sociedades",
    title: "Sociedades Secretas & Maçonaria",
    subtitle: "Templários, Rosacruzes, Manuscritos Maçônicos e Rituais",
    category: "Sociedades Secretas",
    count: "160 Obras",
    icon: "shield"
  },
  {
    id: "tema-mente",
    title: "Mente & Projeção Astral",
    subtitle: "Viagem Astral, Frequências Sagradas, Consciência e Chakras",
    category: "Mente & Projeção Astral",
    count: "110 Obras",
    icon: "eye"
  },
  {
    id: "tema-thelema",
    title: "Thelema & Crowley",
    subtitle: "Aleister Crowley, O Livro da Lei, Tarot de Thoth",
    category: "Thelema",
    count: "90 Obras",
    icon: "sun"
  },
  {
    id: "tema-wicca",
    title: "Wicca & Bruxaria",
    subtitle: "Herbalismo, Grimórios Naturais, Rituais e Magia Elemental",
    category: "Wicca & Bruxaria",
    count: "192 Obras",
    icon: "moon"
  },
  {
    id: "tema-conspiracoes",
    title: "Conspirações & Ufologia Oculta",
    subtitle: "Anunnakis, História Proibida, Sitchin e Mistérios",
    category: "Ufologia",
    count: "114 Obras",
    icon: "compass"
  }
];

const frequenciesData = [
  {
    hz: 432,
    name: "432 Hz • Ressonância Áurea Cósmica",
    benefit: "Afinação natural do Universo (proporção áurea Phi), cura celular profunda e alinhamento do DNA.",
    chakra: "Cardíaco & Coronário",
    color: "#d4af37",
    tier: "basico"
  },
  {
    hz: 528,
    name: "528 Hz • Frequência dos Milagres & Reparo do DNA",
    benefit: "A frequência central de Solfeggio. Transforma a consciência, repara fitas genéticas e atrai milagres.",
    chakra: "Plexo Solar (Manipura)",
    color: "#10b981",
    tier: "master"
  },
  {
    hz: 396,
    name: "396 Hz • Liberação de Culpa, Medo & Bloqueios",
    benefit: "Dissolve nós emocionais antigos no chakra raiz e ancora a mente em estado de absoluta coragem.",
    chakra: "Básico (Muladhara)",
    color: "#ef4444",
    tier: "basico"
  },
  {
    hz: 417,
    name: "417 Hz • Quebra de Padrões Negativos & Mudança",
    benefit: "Limpa experiências traumáticas do passado e facilita novas decisões sem resistência inconsciente.",
    chakra: "Sacral (Svadhisthana)",
    color: "#f97316",
    tier: "master"
  },
  {
    hz: 639,
    name: "639 Hz • Conexão & Harmonização dos Relacionamentos",
    benefit: "Promove empatia, telepatia afetiva e conexão profunda com companheiros de caminho espiritual.",
    chakra: "Cardíaco (Anahata)",
    color: "#06b6d4",
    tier: "master"
  },
  {
    hz: 741,
    name: "741 Hz • Despertar da Intuição & Limpeza Toxinas",
    benefit: "Estimula a expressão autêntica, desintoxica células cerebrais e ativa a voz interior dos mestres.",
    chakra: "Laríngeo (Vishuddha)",
    color: "#3b82f6",
    tier: "master"
  },
  {
    hz: 852,
    name: "852 Hz • Despertar do Terceiro Olho (Ajna)",
    benefit: "Restaura a ordem espiritual, dissolve a névoa mental e desenvolve clarividência e visão astral.",
    chakra: "Frontal (Ajna)",
    color: "#8b5cf6",
    tier: "master"
  },
  {
    hz: 963,
    name: "963 Hz • Conexão com a Centelha Divina Primordial",
    benefit: "Ativação direta da glândula pineal, estado de Samadhi, reintegração com a Fonte Cósmica Suprema.",
    chakra: "Coronário (Sahasrara)",
    color: "#ec4899",
    tier: "master"
  }
];

// 4. ROADMAP INICIÁTICO - OS 12 GRAUS DA CÚPULA 33
const roadmapData = [
  { grade: 1, title: "Grau I: O Despertar do Buscador", desc: "Leitura integral de O Caibalion. Assimilação prática dos 7 Princípios Herméticos na rotina diária.", module: "Módulo I" },
  { grade: 2, title: "Grau II: O Selo de Hermes", desc: "Estudo das 13 sentenças da Tábua de Esmeralda e dos 3 mundos herméticos.", module: "Módulo I" },
  { grade: 3, title: "Grau III: Os 32 Caminhos da Sabedoria", desc: "Decodificação das 10 Sefirot e 22 letras no Sefer Yetzirah.", module: "Módulo I" },
  { grade: 4, title: "Grau IV: O Guardião dos Mistérios", desc: "Compreensão dos selos e círculos protetivos na Clavícula de Salomão.", module: "Módulo II" },
  { grade: 5, title: "Grau V: A Luz Astral", desc: "Domínio da força de vontade como agente plástico universal segundo Éliphas Lévi.", module: "Módulo II" },
  { grade: 6, title: "Grau VI: A Queda dos Vigilantes", desc: "Análise crítica do Livro de Enoque e das linhagens proibidas antediluvianas.", module: "Módulo III" },
  { grade: 7, title: "Grau VII: A Centelha Gnóstica (Pneuma)", desc: "Meditação profunda com os ensinamentos secretos do Evangelho de Tomé em Nag Hammadi.", module: "Módulo III" },
  { grade: 8, title: "Grau VIII: O Vaso Hermético & Nigredo", desc: "A fase do apodrecimento do ego e purificação espiritual em Splendor Solis.", module: "Módulo IV" },
  { grade: 9, title: "Grau IX: A Pedra Filosofal", desc: "A transmutação da consciência de chumbo em ouro vivo segundo Julius Evola.", module: "Módulo IV" },
  { grade: 10, title: "Grau X: A Geometria Sagrada dos Ritos", desc: "Estudo dos mistérios de Albert Pike e o templo interior do homem.", module: "Módulo V" },
  { grade: 11, title: "Grau XI: A Consciência Desdobrada", desc: "Despertar consciente em sonhos lúcidos e proteção no plano astral com 432Hz.", module: "Módulo VI" },
  { grade: 12, title: "Grau XII: Mestre da Cúpula 33 (Iluminação)", desc: "Consagração final como Iniciado Pleno da Cúpula 33. Acesso total ao Sanctum Sanctorum.", module: "Módulo VI" }
];

// ESTADO GLOBAL DO APLICATIVO
let currentTier = "master"; localStorage.setItem("cupula33_user_tier", "master");
let currentCategoryFilter = "todos";
let currentTierFilter = "todos";
let currentSearchQuery = "";
let currentBookModalData = null;
let currentModalTab = "pdf";
let currentAudioSpeed = 1.0;
let isAudiobookPlaying = false;
let audiobookUtterance = null;

// ÁUDIO E OSCILADORES (WEB AUDIO API)
let audioCtx = null;
let currentOscillator = null;
let currentGain = null;
let activeFrequencyHz = null;

// INICIALIZAÇÃO DO APP
document.addEventListener("DOMContentLoaded", () => {
  // 1. Detectar parâmetro de URL (ex: ?tier=master ou ?plano=master vindo do checkout)
  detectUrlTier();

  // 2. Atualizar UI de acordo com o nível atual
  updateTierBadgeUI();

  // 3. Renderizar componentes
  checkReadingProgress();
  renderBooks();
  renderCollections();
  renderFrequencies();
  renderRoadmap();
  updateAllUserDisplays();
  updateProfileXP();
  renderContinueReading();
  renderCommunityFeed(currentCommunityFilter);

  // 4. Configurar ouvintes de pesquisa
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      renderBooks();
    });
  }

  // 5. Atualizar ícones Lucide
  if (window.lucide) {
    try { if (window.lucide) lucide.createIcons(); } catch(e) {}
  }
});

// DETECÇÃO AUTOMÁTICA DE TIER VIA URL
function detectUrlTier() {
  const urlParams = new URLSearchParams(window.location.search);
  const tierParam = urlParams.get("tier") || urlParams.get("plano") || urlParams.get("acesso");
  if (tierParam) {
    const cleanTier = tierParam.toLowerCase().includes("bas") ? "basico" : "master";
    setUserTier(cleanTier, false);
    showToast("Bem-vindo à Cúpula 33! Acesso " + cleanTier.toUpperCase() + " Ativado.");
  }
}

// ATUALIZAÇÃO DA UI DO NÍVEL DO USUÁRIO
function updateTierUI() { updateTierBadgeUI(); }
function updateTierBadgeUI() {
  const label = document.getElementById("userTierLabel");
  const checkMaster = document.getElementById("checkTierMaster");
  const checkBasico = document.getElementById("checkTierBasico");
  const accessibleCount = document.getElementById("accessibleCount");

  if (typeof updateSidebarUserInfo === "function") {
    try { updateSidebarUserInfo(); } catch(e) {}
  }

  if (currentTier === "master") {
    if (label) label.textContent = "Membro Master (2.500 Obras)";
    if (checkMaster) checkMaster.classList.remove("hidden");
    if (checkBasico) checkBasico.classList.add("hidden");
    if (accessibleCount) accessibleCount.textContent = "Você possui Acesso Master Ilimitado às 2.500 Obras dos 6 Módulos, Frequências Sagradas e Audiobooks.";
  } else {
    if (label) label.textContent = "Membro Básico (500 Obras)";
    if (checkMaster) checkMaster.classList.add("hidden");
    if (checkBasico) checkBasico.classList.remove("hidden");
    if (accessibleCount) accessibleCount.textContent = "Plano Básico Ativo: 500 obras fundamentais liberadas. Faça o upgrade para desbloquear 2.000 obras adicionais.";
  }
}

// TROCA DE NÍVEL DO USUÁRIO
function setUserTier(newTier, showNotification) {
  if (showNotification === undefined) showNotification = true;
  currentTier = newTier;
  localStorage.setItem("cupula33_user_tier", newTier);
  updateTierBadgeUI();
  renderBooks();
  renderCollections();
  renderFrequencies();
  if (showNotification) {
    showToast("Plano alterado para: " + (newTier === "master" ? "MASTER (2.500 Obras)" : "BÁSICO (500 Obras)"));
    closeModal("profileModal");
  }
}

// NAVEGAÇÃO DE ABAS DO APP

let isSidebarCollapsed = false;

function toggleSidebarCollapse() {
  const sidebar = document.getElementById("desktopSidebar");
  const main = document.getElementById("mainContainer");
  const icon = document.getElementById("sidebarChevronIcon");
  if (!sidebar) return;

  isSidebarCollapsed = !isSidebarCollapsed;
  if (isSidebarCollapsed) {
    sidebar.classList.add("-translate-x-full");
    if (main) main.classList.remove("md:pl-60");
    if (icon) icon.setAttribute("data-lucide", "chevron-right");
  } else {
    sidebar.classList.remove("-translate-x-full");
    if (main) main.classList.add("md:pl-60");
    if (icon) icon.setAttribute("data-lucide", "chevron-left");
  }
  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

function switchTab(tabName) {
  if (tabName === "books") tabName = "library";
  const allTabs = ["home", "library", "audiobooks", "courses", "community", "profile"];
  
  allTabs.forEach(t => {
    const sec = document.getElementById("tab-" + t);
    const sideBtn = document.getElementById("sideNav-" + t);
    const navBtn = document.getElementById("navBtn-" + t);

    if (t === tabName) {
      if (sec) sec.classList.remove("hidden");
      
      // Sidebar desktop active
      if (sideBtn) {
        sideBtn.className = "w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-yellow-400 bg-white/5 border border-yellow-500/40 transition-all text-left cursor-pointer";
        const icon = sideBtn.querySelector("i, svg");
        if (icon) icon.className = "w-4 h-4 text-yellow-400";
      }

      // Mobile bottom nav active
      if (navBtn) {
        navBtn.className = "flex flex-col items-center gap-1 text-yellow-400 text-[10px] font-bold py-1";
      }
    } else {
      if (sec) sec.classList.add("hidden");

      // Sidebar desktop inactive
      if (sideBtn) {
        sideBtn.className = "w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all text-left cursor-pointer";
        const icon = sideBtn.querySelector("i, svg");
        if (icon) icon.className = "w-4 h-4";
      }

      // Mobile bottom nav inactive
      if (navBtn) {
        navBtn.className = "flex flex-col items-center gap-1 text-gray-400 text-[10px] font-medium py-1";
      }
    }
  });

  if (tabName === "library") {
    renderBooks();
    renderContinueReading();
  } else if (tabName === "home") {
    renderContinueReading();
  } else if (tabName === "audiobooks") {
    if (typeof switchAudioGroup === "function") {
      switchAudioGroup(currentAudioGroup || "frequencies");
    }
  } else if (tabName === "community") {
    renderCommunityFeed(currentCommunityFilter);
    if (typeof syncCommunityWithSupabase === "function") {
      syncCommunityWithSupabase();
    }
  } else if (tabName === "profile") {
    updateAllUserDisplays();
    updateProfileXP();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

// ==========================================
// COMUNIDADE CÚPULA 33 (100% SINCRONIZADA COM SUPABASE)
// ==========================================
let cachedCommunityPosts = null;
let isCommunitySyncing = false;

function getCommunityPosts() {
  if (cachedCommunityPosts && cachedCommunityPosts.length > 0) {
    return cachedCommunityPosts;
  }
  const saved = localStorage.getItem("cupula33_community_posts");
  if (!saved) {
    return [];
  }
  try {
    const parsed = JSON.parse(saved);
    const cleaned = parsed.filter(p => p && p.author !== "José Roberto Borges" && p.author !== "Rodrigo ramon Braz palacios" && p.author !== "Sara Vieira");
    cachedCommunityPosts = cleaned;
    return cleaned;
  } catch(e) {
    return [];
  }
}

async function syncCommunityWithSupabase() {
  if (isCommunitySyncing) return;
  isCommunitySyncing = true;
  try {
    const token = await getOrdemAuthToken();
    const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqY3pqY2pic3V2eHJmZHVtd293Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4NDY4NTEsImV4cCI6MjA4NjQyMjg1MX0.IQZECDpR2zbPIy0bxTDVDAxKn0C07WAg6G64iXlnWBQ";

    // Busca profiles para mapear nomes de autores
    let profilesMap = {};
    try {
      const profRes = await fetch("https://ajczjcjbsuvxrfdumwow.supabase.co/rest/v1/profiles?select=id,full_name,level", {
        headers: { "apikey": anonKey, "Authorization": "Bearer " + token }
      });
      if (profRes.ok) {
        const profList = await profRes.json();
        profList.forEach(pr => { profilesMap[pr.id] = pr; });
      }
    } catch(e) {}

    // Busca os posts mais recentes da comunidade
    const postsRes = await fetch("https://ajczjcjbsuvxrfdumwow.supabase.co/rest/v1/community_posts?select=*&order=created_at.desc&limit=60", {
      headers: { "apikey": anonKey, "Authorization": "Bearer " + token }
    });

    if (postsRes.ok) {
      const dbPosts = await postsRes.json();
      const mapped = dbPosts.map(p => {
        const content = p.content || "";
        let author = "Iniciado da Ordem";
        let level = 1;
        let category = "Teoria";
        let text = content;
        let userEmail = "";
        let likes = 0;
        let timeAgo = "Recentemente";

        try {
          const parsed = JSON.parse(content);
          if (parsed && typeof parsed === "object" && parsed.text) {
            author = parsed.author || author;
            level = parsed.level || level;
            category = parsed.category || category;
            text = parsed.text || "";
            userEmail = parsed.email || "";
            likes = parsed.likes || 0;
            timeAgo = parsed.timeAgo || timeAgo;
          }
        } catch(err) {
          const prof = profilesMap[p.user_id];
          if (prof && prof.full_name) {
            author = prof.full_name;
            level = prof.level || 1;
          }
          if (p.created_at) {
            const dt = new Date(p.created_at);
            timeAgo = dt.toLocaleDateString("pt-BR") + ", " + dt.toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' });
          }
        }

        return {
          id: p.id,
          author,
          userEmail,
          initial: author.charAt(0).toUpperCase(),
          level,
          category,
          text,
          timeAgo,
          likes,
          liked: false,
          comments: 0
        };
      });

      // Mescla com likes salvos localmente
      const localSaved = getCommunityPosts();
      const likedIds = new Set(localSaved.filter(x => x.liked).map(x => x.id));
      mapped.forEach(mp => {
        if (likedIds.has(mp.id)) {
          mp.liked = true;
          mp.likes = (mp.likes || 0) + 1;
        }
      });

      cachedCommunityPosts = mapped;
      localStorage.setItem("cupula33_community_posts", JSON.stringify(mapped));
      renderCommunityFeed(currentCommunityFilter);
    }
  } catch(e) {
    console.warn("Falha ao sincronizar comunidade:", e);
  } finally {
    isCommunitySyncing = false;
  }
}

let currentCommunityFilter = "Tudo";

function filterCommunityPosts(category) {
  currentCommunityFilter = category;
  
  document.querySelectorAll(".community-pill").forEach(btn => {
    const f = btn.getAttribute("data-filter");
    if (f === category) {
      btn.className = "community-pill px-4 py-1.5 rounded-full bg-[#D4AF37] text-black text-xs font-bold whitespace-nowrap transition shadow-md shadow-[#D4AF37]/20 cursor-pointer";
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
    <div class="esoteric-card rounded-2xl p-5 border border-white/10 animate-fade-in text-left shadow-md hover:border-[#D4AF37]/30 transition-all duration-300">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#AA7C11] text-black flex items-center justify-center font-bold text-xs shrink-0 shadow-md">
            ${p.initial || (p.author ? p.author.charAt(0).toUpperCase() : '?')}
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-white tracking-wide">${p.author}</span>
              <span class="text-[9px] px-2 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 font-mono font-bold tracking-wider">NÍVEL ${p.level || 1}</span>
            </div>
            <span class="text-[10px] text-gray-500 font-mono">${p.timeAgo || 'Recentemente'}</span>
          </div>
        </div>
        ${p.category ? `
          <span class="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
            <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            ${p.category}
          </span>
        ` : ''}
      </div>

      <p class="text-xs sm:text-sm text-gray-200 mt-2 leading-relaxed whitespace-pre-line font-normal">${p.text}</p>

      <div class="flex items-center gap-5 mt-4 pt-3 border-t border-white/5 text-gray-400 text-xs">
        <button onclick="likeCommunityPost('${p.id}')" class="flex items-center gap-1.5 transition-all duration-200 cursor-pointer active:scale-90 ${p.liked ? 'text-[#D4AF37] font-bold' : 'hover:text-[#D4AF37]'}">
          <i data-lucide="heart" class="w-4 h-4 ${p.liked ? 'fill-[#D4AF37] text-[#D4AF37]' : ''}"></i>
          <span>${p.likes || 0}</span>
        </button>
        <button onclick="showToast('Comentários em breve na próxima atualização')" class="flex items-center gap-1.5 hover:text-white transition cursor-pointer">
          <i data-lucide="message-square" class="w-4 h-4"></i>
          <span>${p.comments || 0}</span>
        </button>
      </div>
    </div>
  `).join("");

  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

async function publishCommunityPost() {
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
  const timeFormatted = now.toLocaleDateString("pt-BR") + ", " + now.toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' });

  const tempId = "post-" + Date.now();
  const newPost = {
    id: tempId,
    author: user.name,
    userEmail: user.email,
    initial: user.name.charAt(0).toUpperCase(),
    level: 33,
    category: category,
    text: text,
    timeAgo: timeFormatted,
    likes: 0,
    liked: false,
    comments: 0
  };

  const posts = getCommunityPosts();
  posts.unshift(newPost);
  cachedCommunityPosts = posts;
  localStorage.setItem("cupula33_community_posts", JSON.stringify(posts));

  input.value = "";
  renderCommunityFeed(currentCommunityFilter);
  showToast("Publicado com sucesso no Feed da Comunidade!");

  // Envia em segundo plano para o banco de dados Supabase
  try {
    const token = await getOrdemAuthToken();
    const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqY3pqY2pic3V2eHJmZHVtd293Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4NDY4NTEsImV4cCI6MjA4NjQyMjg1MX0.IQZECDpR2zbPIy0bxTDVDAxKn0C07WAg6G64iXlnWBQ";
    const uid = cachedOrdemUserId || "65e66902-c837-461b-bfb9-e2918a49383d";

    const contentObj = {
      author: user.name,
      email: user.email,
      level: 33,
      category: category,
      text: text,
      timeAgo: timeFormatted
    };

    const res = await fetch("https://ajczjcjbsuvxrfdumwow.supabase.co/rest/v1/community_posts", {
      method: "POST",
      headers: {
        "apikey": anonKey,
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json",
        "Prefer": "return=representation"
      },
      body: JSON.stringify({
        user_id: uid,
        content: JSON.stringify(contentObj)
      })
    });

    if (res.ok) {
      const inserted = await res.json();
      if (inserted && inserted[0] && inserted[0].id) {
        newPost.id = inserted[0].id;
        localStorage.setItem("cupula33_community_posts", JSON.stringify(posts));
      }
    }
  } catch(err) {
    console.warn("Post gravado localmente, sincronizará depois:", err);
  }
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

// FILTRAGEM POR MÓDULO E CATEGORIA
function filterModule(moduleName) {
  filterCategory(moduleName);
  const element = document.getElementById("searchInput");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function filterCategory(category) {
  currentCategoryFilter = category;
  document.querySelectorAll(".cat-pill").forEach(btn => {
    if (btn.getAttribute("data-cat") === category) {
      btn.className = "cat-pill px-4 py-2 rounded-full text-xs font-bold bg-gold-500 text-black border border-gold-400 shadow-md transition-all whitespace-nowrap";
    } else {
      btn.className = "cat-pill px-4 py-2 rounded-full text-xs font-medium bg-dark-800 text-gray-300 hover:text-white border border-gray-800 hover:border-gray-700 transition-all whitespace-nowrap";
    }
  });
  renderBooks();
}

function filterTier(tierFilter) {
  currentTierFilter = tierFilter;
  document.querySelectorAll(".tier-filter-btn").forEach(btn => {
    if (btn.getAttribute("data-tier") === tierFilter) {
      btn.className = "tier-filter-btn flex-1 sm:flex-none px-3 py-1.5 rounded-lg text-xs font-bold bg-gold-500/20 text-gold-400 border border-gold-500/50 flex items-center justify-center gap-1";
    } else {
      btn.className = "tier-filter-btn flex-1 sm:flex-none px-3 py-1.5 rounded-lg text-xs font-medium text-gray-400 hover:text-white bg-dark-800 border border-transparent flex items-center justify-center gap-1";
    }
  });
  renderBooks();
}

// RENDERIZAR OS LIVROS E MANUSCRITOS

// ==========================================
// CÚPULA 33 ENGINE - BIBLIOTECA, STREAMING & MINHA LISTA
// ==========================================

const CANONICAL_MODULES = [
  {
    name: "Hermetismo & Cabala",
    code: "Módulo I",
    desc: "O Caibalion, Tábua de Esmeralda, Zohar, Sefer Yetzirah e os mistérios dos arcanos primordiais.",
    icon: "book-open"
  },
  {
    name: "Grimórios & Alta Magia",
    code: "Módulo II",
    desc: "Clavícula de Salomão, Goetia, São Cipriano, rituais de evocação e teurgia cerimonial.",
    icon: "shield"
  },
  {
    name: "Gnosticismo & Apócrifos",
    code: "Módulo III",
    desc: "Nag Hammadi, Livro de Enoque, Evangelhos Apócrifos e os textos banidos dos concílios.",
    icon: "scroll"
  },
  {
    name: "Alquimia & Transmutação",
    code: "Módulo IV",
    desc: "Splendor Solis, Atalanta Fugiens, Paracelso e a busca pela Pedra Filosofal.",
    icon: "flame"
  },
  {
    name: "Sociedades Secretas",
    code: "Módulo V",
    desc: "Maçonaria, Rosacruz, Iluminados da Baviera, Cavaleiros Templários e documentos desclassificados.",
    icon: "eye"
  },
  {
    name: "Mente & Projeção Astral",
    code: "Módulo VI",
    desc: "Desdobramento astral, autodefesa psíquica, sonhos lúcidos e ondas cerebrais calibradas.",
    icon: "radio"
  }
];

let libraryViewMode = 'streaming'; // 'streaming' | 'categories' | 'category_detail' | 'search' | 'my_list'
let activeCategoryName = null;
// currentBookModalData is declared at top

// Gestão de Minha Lista (Bookmarks)
function getMyList() {
  try {
    return JSON.parse(localStorage.getItem("cupula33_my_list") || "[]");
  } catch(e) {
    return [];
  }
}

function isBookInMyList(bookId) {
  const list = getMyList();
  return list.includes(Number(bookId));
}

function toggleCurrentBookMyList() {
  if (!currentBookModalData) return;
  const id = Number(currentBookModalData.id);
  let list = getMyList();
  
  if (list.includes(id)) {
    list = list.filter(x => x !== id);
    showToast("Removido da Minha Lista");
  } else {
    list.push(id);
    showToast("Adicionado à Minha Lista");
  }
  
  localStorage.setItem("cupula33_my_list", JSON.stringify(list));
  updateModalBookmarkUI(id);
  
  if (libraryViewMode === "my_list") {
    renderMyListGrid();
  }
}

function updateModalBookmarkUI(bookId) {
  const btn = document.getElementById("modalBtnBookmark");
  const icon = document.getElementById("modalBookmarkIcon");
  const text = document.getElementById("modalBookmarkText");
  if (!btn) return;
  
  const saved = isBookInMyList(bookId);
  if (saved) {
    btn.className = "w-full sm:w-auto py-3 px-4 rounded-xl bg-[#eab308]/20 border border-[#eab308]/60 text-[#eab308] text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer";
    if (text) text.textContent = "Salvo na Lista";
    if (icon) icon.className = "w-4 h-4 fill-[#eab308]";
  } else {
    btn.className = "w-full sm:w-auto py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-[#eab308] text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer";
    if (text) text.textContent = "Salvar";
    if (icon) icon.className = "w-4 h-4";
  }
  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

// Criação do Card de Livro Estilo Cúpula 33 (Acabamento Dourado Nobre)
function createBookCardHTML(book, isCarousel) {
  const isLocked = currentTier === "basico" && book.tier === "master";
  const savedProg = getSavedProgress(book.id);
  const progPercent = savedProg && book.pages ? Math.min(100, Math.round((savedProg.page / book.pages) * 100)) : 0;
  
  const containerClass = isCarousel 
    ? "flex-none w-[145px] sm:w-[170px] cursor-pointer group snap-start select-none transition-transform duration-200 active:scale-95"
    : "cursor-pointer group select-none transition-transform duration-200 active:scale-95";

  return `
    <div onclick="handleBookClick('${book.id}')" class="${containerClass}">
      
      <!-- Container da Capa com Aspect Ratio 2:3 -->
      <div class="relative aspect-[2/3] rounded-2xl overflow-hidden mb-2.5 border border-white/10 group-hover:border-[#D4AF37] shadow-[0_8px_25px_rgba(0,0,0,0.7)] group-hover:shadow-[0_12px_30px_rgba(212,175,55,0.22)] transition-all duration-300 bg-[#0d0d0d]">
        <img src="${book.cover}" alt="${book.title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${isLocked ? 'grayscale opacity-40' : ''}">
        
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

        <!-- Botão de Detalhes (i) -->
        <button type="button" onclick="event.stopPropagation(); openBookDetailsModal('${book.id}')" class="absolute top-2.5 right-2.5 z-20 w-7 h-7 rounded-full bg-black/75 hover:bg-[#D4AF37] hover:text-black text-gray-300 border border-white/20 flex items-center justify-center transition-all shadow-md active:scale-90 cursor-pointer" title="Ver Detalhes da Obra">
          <i data-lucide="info" class="w-3.5 h-3.5"></i>
        </button>

        <!-- Badges Superiores -->
        <div class="absolute top-2.5 left-2.5 z-20 flex flex-col gap-1 items-start">
          ${!isLocked && book.id <= 15 ? `
            <div class="bg-gradient-to-r from-[#D4AF37] to-[#E5C158] text-black text-[9px] font-black px-2 py-0.5 rounded shadow-lg uppercase tracking-wider">
              NOVO
            </div>
          ` : ''}

          ${progPercent > 0 ? `
            <div class="bg-black/85 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 flex items-center shadow-lg">
              <span class="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-1.5 animate-pulse"></span>
              <span class="text-[9px] font-bold text-white tracking-wider font-mono">${progPercent}%</span>
            </div>
          ` : ''}
        </div>

        ${isLocked ? `
          <div class="absolute inset-0 flex flex-col items-center justify-center bg-black/75 backdrop-blur-[2px] p-2 text-center">
            <div class="w-9 h-9 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-1.5 shadow-lg">
              <i data-lucide="lock" class="w-4 h-4"></i>
            </div>
            <span class="text-[9px] font-black text-[#D4AF37] uppercase tracking-widest">Exclusivo Master</span>
          </div>
        ` : ''}

        <!-- Barra de Progresso no Rodapé da Capa -->
        ${progPercent > 0 ? `
          <div class="absolute bottom-0 left-0 w-full h-1 bg-black/80">
            <div class="h-full bg-gradient-to-r from-[#AA7C11] via-[#D4AF37] to-[#F3E5AB] shadow-[0_0_8px_rgba(212,175,55,0.8)]" style="width: ${progPercent}%"></div>
          </div>
        ` : ''}
      </div>

      <!-- Título & Autor -->
      <h3 class="text-xs sm:text-sm font-semibold truncate text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
        ${book.title}
      </h3>
      <p class="text-gray-400 text-[11px] truncate mt-0.5 font-medium">
        ${book.author}
      </p>
    </div>
  `;
}

// Orquestrador de Renderização da Biblioteca

function dismissUpdateBanner() {
  const b = document.getElementById("systemUpdateBanner");
  if (b) {
    b.style.opacity = "0";
    b.style.maxHeight = "0";
    b.style.padding = "0";
    setTimeout(() => {
      b.classList.add("hidden");
      b.style.display = "none";
    }, 300);
  }
}

function filterByThemeChip(theme) {
  const chips = document.querySelectorAll(".theme-chip");
  chips.forEach(c => {
    c.classList.remove("active", "bg-yellow-500", "text-black", "font-bold", "shadow-lg", "shadow-yellow-500/20");
    c.classList.add("bg-white/5", "text-gray-300", "border", "border-white/10");
    if ((theme === "all" && c.textContent.includes("Todos")) || c.textContent.trim().toLowerCase().includes(theme.toLowerCase())) {
      c.classList.remove("bg-white/5", "text-gray-300", "border", "border-white/10");
      c.classList.add("active", "bg-yellow-500", "text-black", "font-bold", "shadow-lg", "shadow-yellow-500/20");
    }
  });

  if (theme === "all") {
    returnToDefaultLibrary();
  } else {
    openCategoryDetail(theme);
  }
}

function renderCollections() {
  const container = document.getElementById("collectionsGrid") || document.getElementById("collectionsList") || document.getElementById("collectionsContainer");
  if (!container || typeof collectionsData === "undefined") return;

  container.innerHTML = collectionsData.map(col => `
    <div onclick="handleCollectionClick('${col.id}')" class="esoteric-card rounded-2xl p-5 border border-white/10 flex items-center justify-between cursor-pointer hover:border-[#D4AF37]/50 transition-all duration-300 group shadow-md hover:shadow-[0_10px_25px_rgba(212,175,55,0.15)] bg-[#0d0d0d]">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:scale-105 transition-transform duration-300">
          <i data-lucide="${col.icon || 'book-open'}" class="w-6 h-6"></i>
        </div>
        <div class="text-left">
          <h4 class="text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">${col.title}</h4>
          <p class="text-xs text-gray-400 mt-0.5 line-clamp-1">${col.subtitle || col.desc || ''}</p>
          <div class="flex items-center gap-2 mt-1.5 text-[10px] text-gray-500 font-mono">
            <span class="text-[#D4AF37] font-bold">${col.count}</span>
            <span>•</span>
            <span class="text-gray-400">Leitura no App</span>
          </div>
        </div>
      </div>
      <div class="w-8 h-8 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-500 group-hover:text-black transition-all shrink-0">
        <i data-lucide="chevron-right" class="w-4 h-4"></i>
      </div>
    </div>
  `).join("");

  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

function renderBooks() {
  const streamingView = document.getElementById("libraryStreamingView");
  const categoriesView = document.getElementById("libraryCategoriesView");
  const categoryDetailView = document.getElementById("libraryCategoryDetailView");
  const searchResultsView = document.getElementById("librarySearchResultsView");
  const myListView = document.getElementById("libraryMyListView");
  const backBtn = document.getElementById("libraryBackBtn");
  const titleElem = document.getElementById("libraryMainTitle");

  // Esconder todas as subviews primeiro
  if (streamingView) streamingView.classList.add("hidden");
  if (categoriesView) categoriesView.classList.add("hidden");
  if (categoryDetailView) categoryDetailView.classList.add("hidden");
  if (searchResultsView) searchResultsView.classList.add("hidden");
  if (myListView) myListView.classList.add("hidden");

  // Reset do botão voltar e título
  if (backBtn) backBtn.classList.add("hidden");

  if (libraryViewMode === "streaming") {
    if (streamingView) streamingView.classList.remove("hidden");
    if (titleElem) titleElem.textContent = "Biblioteca";
    renderLibraryStreaming();
  } else if (libraryViewMode === "categories") {
    if (categoriesView) categoriesView.classList.remove("hidden");
    if (backBtn) backBtn.classList.remove("hidden");
    if (titleElem) titleElem.textContent = "Categorias";
    renderCategoriesGrid();
  } else if (libraryViewMode === "category_detail") {
    if (categoryDetailView) categoryDetailView.classList.remove("hidden");
    if (backBtn) backBtn.classList.remove("hidden");
    if (titleElem) titleElem.textContent = activeCategoryName || "Módulo";
    renderCategoryDetailGrid(activeCategoryName);
  } else if (libraryViewMode === "search") {
    if (searchResultsView) searchResultsView.classList.remove("hidden");
    if (backBtn) backBtn.classList.remove("hidden");
    if (titleElem) titleElem.textContent = "Busca no Acervo";
  } else if (libraryViewMode === "my_list") {
    if (myListView) myListView.classList.remove("hidden");
    if (backBtn) backBtn.classList.remove("hidden");
    if (titleElem) titleElem.textContent = "Minha Lista";
    renderMyListGrid();
  }

  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

// 1. Renderiza o Modo Streaming (Carrosséis Netflix / Cúpula 33)
function renderLibraryStreaming() {
  // A. Continuar Lendo
  const secContinue = document.getElementById("sectionContinueReading");
  const carContinue = document.getElementById("continueReadingCarousel");
  if (secContinue && carContinue) {
    const readingBooks = booksData.filter(b => {
      const p = getSavedProgress(b.id);
      return p && p.page > 0;
    });
    if (readingBooks.length > 0) {
      secContinue.classList.remove("hidden");
      carContinue.innerHTML = readingBooks.map(b => createBookCardHTML(b, true)).join("");
    } else {
      secContinue.classList.add("hidden");
    }
  }

  // B. Destaques
  const carFeatured = document.getElementById("featuredBooksCarousel");
  if (carFeatured) {
    const featured = booksData.slice(0, 12);
    carFeatured.innerHTML = featured.map(b => createBookCardHTML(b, true)).join("");
  }

  // C. As 6 Fileiras por Módulo
  const rowsContainer = document.getElementById("moduleRowsContainer");
  if (rowsContainer) {
    rowsContainer.innerHTML = CANONICAL_MODULES.map(mod => {
      const modBooks = booksData.filter(b => 
        (b.module && (b.module.toLowerCase().includes(mod.code.toLowerCase()) || b.module.toLowerCase().includes(mod.name.toLowerCase()))) ||
        (b.category && b.category.toLowerCase().includes(mod.name.toLowerCase()))
      );

      if (modBooks.length === 0) return '';

      return `
        <div>
          <div class="flex items-center justify-between mb-3.5 group cursor-pointer" onclick="openCategoryDetail('${mod.name}')">
            <h2 class="text-lg sm:text-xl font-serif text-white group-hover:text-[#eab308] transition-colors flex items-center gap-2">
              <span class="text-xs font-mono font-bold text-[#eab308]">${mod.code}</span>
              <span>${mod.name}</span>
            </h2>
            <span class="text-[11px] text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors flex items-center gap-1">
              Ver todos (${modBooks.length}) →
            </span>
          </div>

          <div class="flex overflow-x-auto gap-4 pb-4 hide-scrollbar scroll-smooth snap-x">
            ${modBooks.map(b => createBookCardHTML(b, true)).join("")}
          </div>
        </div>
      `;
    }).join("");
  }

  renderCollections();
  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

// 2. Renderiza a Grade de Vias de Estudo ("Selecione uma via")
function renderCategoriesGrid() {
  const grid = document.getElementById("categoriesGrid");
  if (!grid) return;

  grid.innerHTML = CANONICAL_MODULES.map(mod => {
    const count = booksData.filter(b => 
      (b.module && (b.module.toLowerCase().includes(mod.code.toLowerCase()) || b.module.toLowerCase().includes(mod.name.toLowerCase()))) ||
      (b.category && b.category.toLowerCase().includes(mod.name.toLowerCase()))
    ).length;

    return `
      <div onclick="openCategoryDetail('${mod.name}')" class="group relative h-36 overflow-hidden rounded-2xl border border-white/10 bg-[#141414] hover:border-[#eab308]/50 transition-all text-left p-6 flex flex-col justify-end cursor-pointer shadow-lg">
        <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:text-[#eab308] transition-all">
          <i data-lucide="${mod.icon}" class="w-14 h-14"></i>
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        <div class="relative z-10">
          <span class="text-[10px] font-mono font-bold text-[#eab308] tracking-widest block uppercase">${mod.code}</span>
          <h3 class="text-lg font-serif font-bold text-white group-hover:text-[#eab308] transition-colors mt-0.5">${mod.name}</h3>
          <p class="text-xs text-gray-500 mt-1">${count} Tratados & Manuscritos</p>
        </div>
      </div>
    `;
  }).join("");

  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

// 3. Renderiza a Grade Completa da Categoria Selecionada
function renderCategoryDetailGrid(categoryName) {
  const grid = document.getElementById("categoryDetailBooksGrid");
  if (!grid) return;
  const all = getAllBooks();
  const filtered = all.filter(b => 
    (b.category && b.category.toLowerCase().includes(categoryName.toLowerCase())) ||
    (b.module && b.module.toLowerCase().includes(categoryName.toLowerCase()))
  );

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="col-span-full py-16 text-center text-gray-500">Nenhuma obra localizada nesta via.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(b => createBookCardHTML(b, false)).join("");
  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

// 4. Renderiza Resultados da Busca
function handleSearchInput(query) {
  const q = String(query || "").trim().toLowerCase();
  const clearBtn = document.getElementById("clearSearchBtn");
  const termSpan = document.getElementById("searchResultTerm");
  const grid = document.getElementById("searchResultsGrid");

  if (!q) {
    if (clearBtn) clearBtn.classList.add("hidden");
    if (libraryViewMode === "search") {
      returnToDefaultLibrary();
    }
    return;
  }

  if (clearBtn) clearBtn.classList.remove("hidden");
  libraryViewMode = "search";
  renderBooks();

  if (termSpan) termSpan.textContent = `"${q}"`;

  const results = booksData.filter(b => 
    b.title.toLowerCase().includes(q) ||
    b.author.toLowerCase().includes(q) ||
    b.category.toLowerCase().includes(q) ||
    (b.desc && b.desc.toLowerCase().includes(q))
  );

  if (grid) {
    if (results.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-16 text-center text-gray-500">
          <p class="text-sm">Nenhum manuscrito encontrado para "${q}".</p>
          <button onclick="clearSearch()" class="mt-4 px-4 py-2 rounded-xl bg-white/5 text-[#eab308] border border-[#eab308]/40 text-xs font-bold hover:bg-[#eab308] hover:text-white transition">
            Limpar Busca
          </button>
        </div>
      `;
    } else {
      grid.innerHTML = results.map(b => createBookCardHTML(b, false)).join("");
    }
  }

  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

function clearSearch() {
  const inp = document.getElementById("searchInput");
  if (inp) inp.value = "";
  returnToDefaultLibrary();
}

// 5. Renderiza a Minha Lista
function renderMyListGrid() {
  const grid = document.getElementById("myListBooksGrid");
  if (!grid) return;

  const savedIds = getMyList();
  const savedBooks = booksData.filter(b => savedIds.includes(Number(b.id)));

  if (savedBooks.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center text-gray-500">
        <i data-lucide="bookmark" class="w-10 h-10 mx-auto text-gray-600 mb-2"></i>
        <p class="text-sm text-gray-300 font-serif">Sua lista de estudos está vazia.</p>
        <p class="text-xs text-gray-500 mt-1">Toque em "Salvar" nos detalhes de qualquer obra para adicioná-la aqui.</p>
        <button onclick="returnToDefaultLibrary()" class="mt-5 px-5 py-2.5 rounded-xl bg-[#eab308]/20 text-[#eab308] border border-[#eab308]/40 text-xs font-bold hover:bg-[#eab308] hover:text-white transition">
          Explorar Acervo
        </button>
      </div>
    `;
    if (window.lucide) try { lucide.createIcons(); } catch(e) {}
    return;
  }

  grid.innerHTML = savedBooks.map(b => createBookCardHTML(b, false)).join("");
  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

// Ações de Navegação da Biblioteca
function returnToDefaultLibrary() {
  libraryViewMode = "streaming";
  activeCategoryName = null;
  const inp = document.getElementById("searchInput");
  if (inp) inp.value = "";
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) clearBtn.classList.add("hidden");
  renderBooks();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleCategoriesView() {
  if (libraryViewMode === "categories") {
    returnToDefaultLibrary();
  } else {
    libraryViewMode = "categories";
    renderBooks();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function openCategoriesFromNav() {
  switchTab('books');
  libraryViewMode = "categories";
  renderBooks();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openCategoryDetail(catName) {
  libraryViewMode = "category_detail";
  activeCategoryName = catName;
  renderBooks();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openMyList() {
  switchTab('books');
  libraryViewMode = "my_list";
  renderBooks();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Modal do Livro (Padrão Bk Cúpula 33)
function openBookModal(book) {
  currentBookModalData = book;

  const cover = document.getElementById("modalBookCover");
  const cat = document.getElementById("modalBookCategory");
  const pages = document.getElementById("modalBookPages");
  const title = document.getElementById("modalBookTitle");
  const author = document.getElementById("modalBookAuthor");
  const desc = document.getElementById("modalBookDesc");
  const pBar = document.getElementById("modalProgressBar");
  const pText = document.getElementById("modalProgressPercent");

  if (cover) cover.src = book.cover;
  if (cat) cat.textContent = (book.module ? `${book.module}: ` : '') + book.category;
  if (pages) pages.textContent = `${book.pages || 120} páginas`;
  if (title) title.textContent = book.title;
  if (author) author.textContent = "Por " + book.author;
  if (desc) desc.textContent = book.desc || "Tratado autêntico preservado em língua portuguesa.";

  // Progresso
  const saved = getSavedProgress(book.id);
  const percent = saved && book.pages ? Math.min(100, Math.round((saved.page / book.pages) * 100)) : 0;
  if (pBar) pBar.style.width = percent + "%";
  if (pText) pText.textContent = percent + "%";

  updateModalBookmarkUI(book.id);
  openModal("bookModal");
}

function triggerReadModalFromDetails() {
  if (!currentBookModalData) return;
  closeModal("bookModal");
  const saved = getSavedProgress(currentBookModalData.id);
  let page = 1;
  // Se o progresso salvo não for 56 (artefato do bug antigo) e for válido:
  if (saved && saved.page && saved.page > 1 && saved.page !== 56 && saved.page !== 27 && saved.page <= (currentBookModalData.pages || 1000)) {
    page = saved.page;
  }
  openReaderModal(currentBookModalData, page);
}

function triggerDownloadFromDetails() {
  if (!currentBookModalData) return;
  triggerDownload(currentBookModalData);
}

// Atualização de Informações do Membro no Sidebar e Telas

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
    const parts = handle.replace(/[^a-zA-Z0-9]/g, " ").trim().split(/\s+/).filter(Boolean);
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

function updateSidebarUserInfo() {
  updateAllUserDisplays();
}

// Integrar no carregamento inicial
window.addEventListener("DOMContentLoaded", () => {
  try {
    updateSidebarUserInfo();
    updateProsperidadeCardUI();
  } catch(e) {}
});

function handleBookClick(bookId) {
  // Checagem de Order Bump exclusivo (Os Segredos da Prosperidade Maçônica)
  if (String(bookId) === "999" || String(bookId).toLowerCase().includes("prosperidade")) {
    if (!userHasOrderBumpProsperidade()) {
      openOrderBumpModal();
      return;
    }
  }
  // Toque direto no livro abre a leitura imediatamente (sem barreiras ou etapas extras)
  openReaderModalDirect(bookId);
}

function openBookDetailsModal(bookId) {
  const all = getAllBooks();
  const book = all.find(b => String(b.id) === String(bookId));
  if (!book) return;
  currentBookModalData = book;
  openBookModal(book);
}

// CLICK EM UMA COLEÇÃO / TEMA
function handleCollectionClick(collectionId) {
  const col = collectionsData.find(c => c.id === collectionId);
  if (!col) return;
  // Abre os livros da categoria diretamente no app para leitura imediata
  openCategoryDetail(col.category || col.title);
}

// Antigo modal substituído pelo padrão Cúpula 33


// TROCA DE ABAS NO MODAL DO LIVRO (PDF vs AUDIOBOOK)
function switchModalTab(tab) {
  currentModalTab = tab;
  const pdfContent = document.getElementById("modalPdfContent");
  const audioContent = document.getElementById("modalAudioContent");
  const pdfBtn = document.getElementById("modalTabPdfBtn");
  const audioBtn = document.getElementById("modalTabAudioBtn");

  if (tab === "pdf") {
    if (pdfContent) pdfContent.classList.remove("hidden");
    if (audioContent) audioContent.classList.add("hidden");
    if (pdfBtn) {
      pdfBtn.className = "flex-1 py-2 rounded-xl text-xs font-bold bg-gold-500 text-black flex items-center justify-center gap-1.5 transition";
    }
    if (audioBtn) {
      audioBtn.className = "flex-1 py-2 rounded-xl text-xs font-medium text-gray-400 hover:text-white flex items-center justify-center gap-1.5 transition";
    }
  } else {
    if (pdfContent) pdfContent.classList.add("hidden");
    if (audioContent) audioContent.classList.remove("hidden");
    if (pdfBtn) {
      pdfBtn.className = "flex-1 py-2 rounded-xl text-xs font-medium text-gray-400 hover:text-white flex items-center justify-center gap-1.5 transition";
    }
    if (audioBtn) {
      audioBtn.className = "flex-1 py-2 rounded-xl text-xs font-bold bg-gold-500 text-black flex items-center justify-center gap-1.5 transition";
    }
  }
  if (window.lucide) try { if (window.lucide) lucide.createIcons(); } catch(e) {}
}

// AJUSTE DE PÁGINA NO MODAL
function adjustModalPage(delta) {
  if (!currentBookModalData) return;
  const input = document.getElementById("modalPageInput");
  if (!input) return;
  let val = parseInt(input.value) || 1;
  val = Math.max(1, Math.min(currentBookModalData.pages, val + delta));
  input.value = val;
  onPageInputChange(val);
}

function onPageInputChange(val) {
  if (!currentBookModalData) return;
  const page = parseInt(val) || 1;
  saveReadingProgress(currentBookModalData.id, page, currentBookModalData.pages);
  updateModalProgressDisplay(page, currentBookModalData.pages);
}

function updateModalProgressDisplay(page, total) {
  const span = document.getElementById("modalCurrentProgressPct");
  if (!span) return;
  const pct = Math.round((page / total) * 100);
  span.textContent = "Página " + page + " de " + total + " (" + pct + "%)";
}

// AJUSTE DIRETO DE PÁGINA DENTRO DO LEITOR
function adjustReaderPage(delta) {
  if (!currentBookModalData) return;
  const input = document.getElementById("readerCurrentPageInput");
  if (!input) return;
  let val = parseInt(input.value) || 1;
  val = Math.max(1, Math.min(currentBookModalData.pages, val + delta));
  input.value = val;
  onReaderPageInputChange(val);
}

function onReaderPageInputChange(val) {
  if (!currentBookModalData) return;
  const page = Math.max(1, Math.min(currentBookModalData.pages, parseInt(val) || 1));
  saveReadingProgress(currentBookModalData.id, page, currentBookModalData.pages);
  
  // Atualiza também os displays do bookModal
  const modalInput = document.getElementById("modalPageInput");
  if (modalInput) modalInput.value = page;
  updateModalProgressDisplay(page, currentBookModalData.pages);
}

// LEITOR EM TELA CHEIA
// ==========================================
// MOTOR NATIVO PDF.JS COM SCROLL CONTÍNUO (ESTILO ORDEM 137)
// ==========================================
if (typeof window["pdfjs-dist/build/pdf"] !== "undefined") {
  window.pdfjsLib = window["pdfjs-dist/build/pdf"];
}
if (typeof pdfjsLib !== "undefined") {
  pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";
}

const LOCAL_PDF_MAP = {
  "3": "livros_pdf/Cabala_Comentários_de_um_Pedreiro_Sobre_a_Torá_Shemot_Êxodo.pdf",
  "4": "livros_pdf/Cabala_Genética.pdf",
  "8": "livros_pdf/Fundamentos_da_Cabala_Sêfer_Yetsirá__edição_revisada_e_ampli.pdf",
  "9": "livros_pdf/Hermes_Trismegistos_o_Três_Vezes_Grande_e_Muitas_Vezes_.pdf",
  "13": "livros_pdf/Tratado_da_sciencia_cabala_ou_noticia_de_arte_cabalistica.pdf",
  "14": "livros_pdf/Tratado_da_sciencia_cabala_ou_Noticia_da_arte_cabalistica.pdf",
  "21": "livros_pdf/Frabato_O_Mago_-_Franz_Bardon.pdf",
  "26": "livros_pdf/Ritual_Onírico_Comunicação_Espiritual_Durante_o_Sono_Ma.pdf",
  "27": "livros_pdf/Segredos_da_Magia_de_Umbanda_e_Quimbanda.pdf",
  "32": "livros_pdf/O_Livro_de_Enoque.pdf",
  "36": "livros_pdf/O_Livro_de_Enoque.pdf",
  "37": "livros_pdf/Pistis_Sophia.pdf",
  "40": "livros_pdf/Alquimia.pdf",
  "41": "livros_pdf/Alquimia.pdf",
  "42": "livros_pdf/Alquimia.pdf",
  "44": "livros_pdf/Alquimia.pdf",
  "46": "livros_pdf/A_Revelacao_Dos_Templarios_-_Lynn_Picknett_e_Clive_Prin.pdf",
  "47": "livros_pdf/32_A_Acao_Secreta_da_Maconaria.pdf",
  "48": "livros_pdf/As_Mansoes_Secretas_Da_Rosacruz.pdf",
  "49": "livros_pdf/Cardeal_Rampolla_por_que_o_padre_Ricossa_busca_hoje_reabilit.pdf",
  "51": "livros_pdf/H_P_Blavatsky_e_o_Caso_Coulomb.pdf",
  "64": "livros_pdf/222_ANOS_GRANDE_ORIENTE_LUSITANO.pdf",
  "65": "livros_pdf/64865430_A_Ciencia_Cabalistica_Lenain.pdf",
  "72": "livros_pdf/A_Chave_Dos_Grandes_Misterios_Eliphas_Le.pdf",
  "74": "livros_pdf/A_Energia_Dos_Raios.pdf",
  "108": "livros_pdf/A_Teologia_Mistica_Como_Linguagem_Do_Sagrado.pdf",
  "116": "livros_pdf/A_maçonaria_e_os_jesuitas_instrucção_pastoral_do_Bispo_de_Ol.pdf",
  "152": "livros_pdf/Boletim_do_DESSEAK_-_n-ro_2_okt-nov1984.pdf",
  "168": "livros_pdf/Carta_do_Passageiro_do_Abismo_Versão_Ritual_-_Adriano_B.pdf",
  "181": "livros_pdf/Consagracao_Geral_Oleo_Santo.pdf",
  "198": "livros_pdf/Ensaios_de_teatro_e_filosofia_do_Renascimento_ao_século_XVII.pdf",
  "216": "livros_pdf/Frabato_O_Mago_-_Franz_Bardon.pdf",
  "218": "livros_pdf/Francisco_de_Assis_Bezerra_de_Meneses.pdf",
  "220": "livros_pdf/Fundamentos_Do_Misticismo_Tibetano_Lama_Anagarika_Govin.pdf",
  "222": "livros_pdf/Gareth_Knight_Praticas_E_Exercicios_Ocultos.pdf",
  "256": "livros_pdf/JERUSALÉM.pdf",
  "264": "livros_pdf/LMTLT_3_MAG_PORT.pdf",
  "268": "livros_pdf/08_O_Livro_da_Lei_Liber_AL_vel_Legis_Crowley.pdf",
  "273": "livros_pdf/Livro_Dos_Espiritos_-Ed_2013.pdf",
  "278": "livros_pdf/Livros_de_Astrologia.pdf",
  "306": "livros_pdf/Mistérios_e_Práticas_da_Lei_de_Umbanda.pdf",
  "307": "livros_pdf/05_Moral_e_Dogma_Albert_Pike.pdf",
  "313": "livros_pdf/No_Reino_Da_Feiticaria.pdf",
  "325": "livros_pdf/O_Diabo_Desmistificação_Completa_de_um_Mito.pdf",
  "346": "livros_pdf/O_MAIOR_SEGREDO_-_DAVID_ICKE.pdf",
  "363": "livros_pdf/O_Vaticano_Maçônico_Em_Nome_Do_Fantasioso_Jeová_Jahvéh_.pdf",
  "372": "livros_pdf/OGrande_Computador_Celeste_Marcelo_Del_Debbio.pdf",
  "374": "livros_pdf/OS_ENSINAMENTOS_SECRETOS_DE_TODO_OS_TEMPOS_-_MANLY_P_HALL.pdf",
  "379": "livros_pdf/37_Os_Arquetipos_e_o_Inconsciente_Coletivo_Jung.pdf",
  "385": "livros_pdf/Os_Protocolos_dos_Sábios_de_Sião.pdf",
  "395": "livros_pdf/Pirḳe_rabi_Eliʻezer__hu_rabi_Eliʻezer_ben_horḳanus_ha-niḳra_.pdf",
  "408": "livros_pdf/Psiquiatria_espiritismo_e_ciência_Um_diálogo_sobre_psic.pdf",
  "417": "livros_pdf/Resenha_do_livro_e_link_para_download_online_Grimório_do_Sat.pdf",
  "418": "livros_pdf/Revista_Espirita_-_Ano_I_-_1858.pdf",
  "426": "livros_pdf/SHEMYAZA_O_Líder_dos_Vigilantes__A_Queda_o_Ensino_e_o_P.pdf",
  "439": "livros_pdf/São_Cipriano_de_Cartago.pdf",
  "442": "livros_pdf/Tarot_O_Livro_Azul.pdf",
  "445": "livros_pdf/Teses_sobre_a_Comunidade_Terrivel.pdf",
  "454": "livros_pdf/Um_Iniciante_na_Viagem_Astral_-_Saulo_Calderon.pdf",
  "457": "livros_pdf/Umbanda_do_Brasil.pdf",
  "458": "livros_pdf/Umbanda_e_o_Poder_da_Mediunidade.pdf",
  "468": "livros_pdf/a-aguia--01011911-03.pdf",
  "473": "livros_pdf/nro_2_11_ano_Grande_Oriente_do_Brazil_Jornal_Official_da_Maç.pdf",
  "999": "livros_pdf/Manuscrito_Maconico_da_Prosperidade_Oculta.pdf",
  "1": "livros_pdf/10_A_Tabua_de_Esmeralda_Hermes_Trismegisto.pdf",
  "6": "livros_pdf/01_O_Caibalion_Tres_Iniciados.pdf"
};

let currentPdfDoc = null;
let currentRenderObserver = null;
let currentScrollObserver = null;
let saveProgressDebounceTimer = null;
let currentReaderPage = 1;


function openReaderModalDirect(bookId) {
  if (String(bookId) === "999" || String(bookId).toLowerCase().includes("prosperidade")) {
    if (!userHasOrderBumpProsperidade()) {
      openOrderBumpModal();
      return;
    }
  }
  const all = getAllBooks();
  const book = all.find(b => String(b.id) === String(bookId));
  if (!book) {
    console.warn("Livro não encontrado:", bookId);
    return;
  }
  openReaderModal(book);
}

async function openReaderModal(book, startPage) {
  if (typeof book === "number" || typeof book === "string") {
    const all = getAllBooks();
    book = all.find(b => String(b.id) === String(book));
  }
  if (!book) return;
  if (startPage === undefined) {
    const saved = getSavedProgress(book.id);
    startPage = saved ? saved.page : 1;
  }
  closeModal("bookModal");
  currentBookModalData = book;
  currentReaderPage = startPage;

  const rTitle = document.getElementById("readerTitle");
  if (rTitle) rTitle.textContent = book.title;

  updateReaderDisplay(book, startPage);
  openModal("readerModal");

  // Resolver URL do PDF (Prioridade: Mapeamento Local -> Nuvem Oficial da Ordem 137)
  let targetUrl = book.pdfUrl || book.pdf;
  if (LOCAL_PDF_MAP[book.id]) {
    targetUrl = LOCAL_PDF_MAP[book.id];
  } else if (book.id === 36 || (book.title && book.title.toLowerCase().includes("enoque"))) {
    targetUrl = "livros_pdf/O_Livro_de_Enoque.pdf";
  } else if (book.id === 999 || (book.title && book.title.toLowerCase().includes("prosperidade"))) {
    targetUrl = "livros_pdf/Manuscrito_Maconico_da_Prosperidade_Oculta.pdf";
  } else if (book.id === 1 || (book.title && book.title.toLowerCase().includes("esmeralda"))) {
    targetUrl = "livros_pdf/10_A_Tabua_de_Esmeralda_Hermes_Trismegisto.pdf";
  } else if (book.id === 6 || (book.title && book.title.toLowerCase().includes("caibalion"))) {
    targetUrl = "livros_pdf/01_O_Caibalion_Tres_Iniciados.pdf";
  } else if (!targetUrl && book.file_path) {
    targetUrl = `https://ajczjcjbsuvxrfdumwow.supabase.co/storage/v1/object/authenticated/library-files/${book.file_path}`;
  }

  const nativeContainer = document.getElementById("readerNativeContainer");
  const iframe = document.getElementById("readerIframe");
  const spinner = document.getElementById("readerLoadingSpinner");

  // MODO NATIVO COM SCROLL CONTÍNUO PARA TODOS OS LIVROS
  if (typeof pdfjsLib !== "undefined") {
    if (iframe) {
      iframe.classList.add("hidden");
      iframe.style.display = "none";
      iframe.src = "";
    }
    if (nativeContainer) {
      nativeContainer.classList.remove("hidden");
      nativeContainer.style.display = "block";
    }
    
    await renderNativePDF(targetUrl, startPage);
  } else {
    showToast("Carregando visualizador...");
  }
}


async function getSignedSupabaseUrl(filePathOrUrl) {
  let filePath = String(filePathOrUrl || "");
  if (filePath.includes("library-files/")) {
    filePath = filePath.split("library-files/")[1];
  }
  filePath = filePath.split("?")[0];

  const cacheKey = "cupula33_signed_url_" + filePath;
  try {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed.url && parsed.exp > Date.now()) {
        return parsed.url;
      }
    }
  } catch(e) {}

  try {
    const token = await getOrdemAuthToken();
    const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqY3pqY2pic3V2eHJmZHVtd293Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4NDY4NTEsImV4cCI6MjA4NjQyMjg1MX0.IQZECDpR2zbPIy0bxTDVDAxKn0C07WAg6G64iXlnWBQ";
    const res = await fetch(`https://ajczjcjbsuvxrfdumwow.supabase.co/storage/v1/object/sign/library-files/${filePath}`, {
      method: "POST",
      headers: {
        "apikey": anonKey,
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ expiresIn: 2592000 })
    });
    if (res.ok) {
      const data = await res.json();
      if (data.signedURL) {
        const fullUrl = "https://ajczjcjbsuvxrfdumwow.supabase.co/storage/v1" + data.signedURL;
        try {
          localStorage.setItem(cacheKey, JSON.stringify({
            url: fullUrl,
            exp: Date.now() + 2500000 * 1000
          }));
        } catch(e) {}
        return fullUrl;
      }
    }
  } catch(e) {
    console.warn("Falha ao assinar URL Supabase:", e);
  }
  return null;
}

let cachedOrdemToken = null;
let cachedOrdemUserId = "65e66902-c837-461b-bfb9-e2918a49383d";
let tokenExpiryTime = 0;

async function getOrdemAuthToken() {
  const now = Date.now();
  if (cachedOrdemToken && now < tokenExpiryTime) {
    return cachedOrdemToken;
  }
  const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqY3pqY2pic3V2eHJmZHVtd293Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4NDY4NTEsImV4cCI6MjA4NjQyMjg1MX0.IQZECDpR2zbPIy0bxTDVDAxKn0C07WAg6G64iXlnWBQ";
  try {
    const r = await fetch("https://ajczjcjbsuvxrfdumwow.supabase.co/auth/v1/token?grant_type=password", {
      method: "POST",
      headers: { "apikey": anonKey, "Content-Type": "application/json" },
      body: JSON.stringify({ email: "elevarevenue@gmail.com", password: "ordem@137" })
    });
    const d = await r.json();
    if (d.access_token) {
      cachedOrdemToken = d.access_token;
      if (d.user && d.user.id) {
        cachedOrdemUserId = d.user.id;
      }
      tokenExpiryTime = now + 3500 * 1000;
      return cachedOrdemToken;
    }
  } catch(e) {
    console.warn("Usando anonKey para nuvem:", e);
  }
  return anonKey;
}

async function renderNativePDF(pdfUrl, startPage = 1) {
  const container = document.getElementById("readerNativeContainer");
  const spinner = document.getElementById("readerLoadingSpinner");
  const spinnerText = document.getElementById("readerLoadingText");
  if (!container) return;

  if (spinner) {
    if (spinnerText) spinnerText.textContent = "Carregando manuscrito...";
    spinner.classList.remove("hidden");
  }

  // Limpa observers anteriores e conteúdo
  if (currentRenderObserver) currentRenderObserver.disconnect();
  if (currentScrollObserver) currentScrollObserver.disconnect();
  container.innerHTML = "";

  try {
    let pdfParam;

    if (pdfUrl.includes("/object/sign/")) {
      if (spinnerText) spinnerText.textContent = "Abrindo manuscrito sagrado...";
      pdfParam = {
        url: pdfUrl,
        cMapUrl: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/cmaps/",
        cMapPacked: true,
        disableAutoFetch: true,
        disableStream: false
      };
    } else if (pdfUrl.includes("supabase.co")) {
      if (spinnerText) spinnerText.textContent = "Conectando ao acervo sagrado...";
      let signedUrl = null;
      try {
        signedUrl = await getSignedSupabaseUrl(pdfUrl);
      } catch(e) {}

      if (signedUrl) {
        pdfParam = {
          url: signedUrl,
          cMapUrl: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/cmaps/",
          cMapPacked: true,
          disableAutoFetch: true,
          disableStream: false
        };
      } else {
        if (spinnerText) spinnerText.textContent = "Baixando obra da nuvem sagrada...";
        const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqY3pqY2pic3V2eHJmZHVtd293Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4NDY4NTEsImV4cCI6MjA4NjQyMjg1MX0.IQZECDpR2zbPIy0bxTDVDAxKn0C07WAg6G64iXlnWBQ";
        const token = await getOrdemAuthToken();
        const resp = await fetch(pdfUrl, {
          headers: {
            "apikey": anonKey,
            "Authorization": "Bearer " + token
          }
        });
        if (!resp.ok) throw new Error("Erro na nuvem (" + resp.status + ")");
        const arrayBuffer = await resp.arrayBuffer();
        pdfParam = {
          data: arrayBuffer,
          cMapUrl: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/cmaps/",
          cMapPacked: true
        };
      }
    } else {
      pdfParam = {
        url: pdfUrl,
        cMapUrl: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/cmaps/",
        cMapPacked: true
      };
    }

    const loadingTask = pdfjsLib.getDocument(pdfParam);

    if (loadingTask.onProgress) {
      loadingTask.onProgress = function(progress) {
        if (progress && progress.total > 0 && spinnerText) {
          const pct = Math.min(99, Math.round((progress.loaded / progress.total) * 100));
          const mbLoaded = (progress.loaded / (1024 * 1024)).toFixed(1);
          const mbTotal = (progress.total / (1024 * 1024)).toFixed(1);
          spinnerText.textContent = `Carregando manuscrito (${pct}% • ${mbLoaded}MB de ${mbTotal}MB)...`;
        }
      };
    }

    currentPdfDoc = await loadingTask.promise;
    const numPages = currentPdfDoc.numPages;
    if (currentBookModalData) currentBookModalData.pages = numPages;

    updateReaderDisplay(currentBookModalData, startPage);

    const renderedPages = new Set();
    const pageContainers = [];

    // Obter proporção da página 1 para estruturar placeholders com timeout de segurança
    let ratio = 1.414;
    try {
      const samplePage = await Promise.race([
        currentPdfDoc.getPage(1),
        new Promise((_, reject) => setTimeout(() => reject(new Error('timeout getPage')), 4000))
      ]);
      const sampleViewport = samplePage.getViewport({ scale: 1 });
      ratio = sampleViewport.height / sampleViewport.width;
    } catch(e) {
      console.warn('Usando ratio padrão 1.414:', e);
    }

    // Criar containers das páginas com fundo branco nativo e sem bordas colapsadas
    for (let p = 1; p <= numPages; p++) {
      const pageDiv = document.createElement("div");
      pageDiv.id = `pdf-page-wrapper-${p}`;
      pageDiv.dataset.pageNumber = p;
      pageDiv.className = "pdf-page-wrapper block relative w-full max-w-[850px] mx-auto rounded-xl shadow-2xl bg-white overflow-hidden my-6 transition-all duration-300";
      pageDiv.style.minHeight = Math.max(480, Math.round(window.innerHeight * 0.75)) + "px";

      pageDiv.innerHTML = `
        <div class="page-placeholder text-center text-gray-500 font-mono text-xs flex flex-col items-center gap-3 p-8 my-auto">
          <div class="w-8 h-8 border-3 border-yellow-500/30 border-t-yellow-500 rounded-full animate-spin"></div>
          <span class="tracking-widest uppercase text-[11px] text-gray-400 font-semibold">Página ${p} de ${numPages}</span>
        </div>
      `;

      container.appendChild(pageDiv);
      pageContainers.push(pageDiv);
    }

    if (spinner) spinner.classList.add("hidden");

    // Renderiza uma página específica em canvas HD com fundo branco opaco
    async function renderPageCanvas(pageNum, pageDiv) {
      if (renderedPages.has(pageNum)) return;
      renderedPages.add(pageNum);

      try {
        const page = await currentPdfDoc.getPage(pageNum);
        const containerWidth = Math.min(850, window.innerWidth > 640 ? window.innerWidth - 64 : window.innerWidth - 24);
        const unscaledViewport = page.getViewport({ scale: 1 });
        const pixelRatio = window.devicePixelRatio || 1;
        const displayScale = containerWidth / unscaledViewport.width;
        // Limita o fator de escala de render para evitar estouro de memória da GPU
        const renderScale = displayScale * Math.min(pixelRatio, 2.5);
        const viewport = page.getViewport({ scale: Math.max(1, renderScale) });

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d", { alpha: false });
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.style.width = "100%";
        canvas.style.height = "auto";
        canvas.style.display = "block";
        canvas.className = "w-full h-auto block rounded-xl shadow-lg";

        // Preenche com branco opaco antes de desenhar o PDF para evitar texto preto sobre fundo transparente/escuro
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const renderContext = {
          canvasContext: ctx,
          viewport: viewport
        };

        await page.render(renderContext).promise;

        pageDiv.innerHTML = "";
        pageDiv.style.minHeight = "auto";
        pageDiv.style.aspectRatio = "auto";
        pageDiv.className = "pdf-page-wrapper block relative w-full max-w-[850px] mx-auto rounded-xl shadow-2xl bg-white overflow-hidden my-6 transition-all duration-300";
        pageDiv.appendChild(canvas);
      } catch (err) {
        console.error("Erro ao renderizar página " + pageNum, err);
      }
    }

    // Renderizar imediatamente as páginas ao redor de startPage
    const initialPages = [startPage, startPage + 1, startPage + 2, 1, 2].filter((p, idx, arr) => p <= numPages && arr.indexOf(p) === idx);
    initialPages.forEach(p => {
      const div = document.getElementById(`pdf-page-wrapper-${p}`);
      if (div) renderPageCanvas(p, div);
    });

    // Observer Lazy para renderizar conforme chega perto da tela
    currentRenderObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const pageNum = parseInt(entry.target.dataset.pageNumber);
          renderPageCanvas(pageNum, entry.target);
        }
      });
    }, {
      root: container,
      rootMargin: "900px 0px 900px 0px"
    });

    pageContainers.forEach(div => currentRenderObserver.observe(div));

    // Observer de Rolagem para atualizar progresso com debounce
    currentScrollObserver = new IntersectionObserver((entries) => {
      // Pega a entrada visível com maior intersecção
      let bestEntry = null;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!bestEntry || entry.intersectionRatio > bestEntry.intersectionRatio) {
            bestEntry = entry;
          }
        }
      });
      if (bestEntry) {
        const pageNum = parseInt(bestEntry.target.dataset.pageNumber);
        if (!isNaN(pageNum) && pageNum > 0) {
          currentReaderPage = pageNum;
          updateReaderDisplay(currentBookModalData, pageNum);

          clearTimeout(saveProgressDebounceTimer);
          saveProgressDebounceTimer = setTimeout(() => {
            saveReadingProgress(currentBookModalData.id, pageNum, numPages);
          }, 800);
        }
      }
    }, {
      root: container,
      threshold: [0.1, 0.3, 0.6]
    });

    pageContainers.forEach(div => currentScrollObserver.observe(div));

    // Se começou numa página mais adiantada, rola até ela
    if (startPage > 1 && startPage <= numPages) {
      setTimeout(() => {
        const targetDiv = document.getElementById(`pdf-page-wrapper-${startPage}`);
        if (targetDiv) {
          targetDiv.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }

  } catch (err) {
    console.error("Erro ao carregar PDF via PDF.js:", err);
    if (spinner) spinner.classList.add("hidden");
    showToast("Abrindo modo de leitura alternativo...");
    const iframe = document.getElementById("readerIframe");
    if (iframe) {
      container.classList.add("hidden");
      iframe.classList.remove("hidden");
      iframe.src = pdfUrl;
    }
  }
}

function updateReaderDisplay(book, page) {
  const total = book.pages || 100;
  const pct = Math.min(100, Math.round((page / total) * 100));

  const rProgressLabel = document.getElementById("readerProgressLabel");
  const rProgressBar = document.getElementById("readerProgressBar");

  if (rProgressLabel) {
    rProgressLabel.textContent = "Página " + page + " de " + total + " • " + pct + "% Concluído";
  }
  if (rProgressBar) {
    rProgressBar.style.width = pct + "%";
  }
}

function changeReaderPage(delta) {
  if (!currentBookModalData) return;
  const total = currentBookModalData.pages || 100;
  currentReaderPage = Math.max(1, Math.min(total, currentReaderPage + delta));
  
  updateReaderDisplay(currentBookModalData, currentReaderPage);
  saveReadingProgress(currentBookModalData.id, currentReaderPage, total);

  // Se estiver no leitor nativo, rola suavemente até a página
  const pageDiv = document.getElementById(`pdf-page-wrapper-${currentReaderPage}`);
  if (pageDiv) {
    pageDiv.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function adjustReaderPage(delta) {
  changeReaderPage(delta);
}

function markCurrentBookCompleted() {
  if (!currentBookModalData) return;
  const total = currentBookModalData.pages || 100;
  currentReaderPage = total;
  
  updateReaderDisplay(currentBookModalData, total);
  saveReadingProgress(currentBookModalData.id, total, total);
  showToast("Parabéns! Obra concluída e +50 XP adicionados ao seu grau!");
}

function closeReaderModal() {
  if (currentRenderObserver) currentRenderObserver.disconnect();
  if (currentScrollObserver) currentScrollObserver.disconnect();
  const iframe = document.getElementById("readerIframe");
  if (iframe) iframe.src = "";
  const container = document.getElementById("readerNativeContainer");
  if (container) container.innerHTML = "";
  closeModal("readerModal");
}

function bookmarkCurrentPage() {
  if (!currentBookModalData) return;
  saveReadingProgress(currentBookModalData.id, currentReaderPage, currentBookModalData.pages);
  showToast("Marcador gravado: pág. " + currentReaderPage + " de " + currentBookModalData.pages + "!");
}

// SISTEMA DE MARCACAO & PERSISTENCIA DE LEITURA (LOCALSTORAGE)
function saveReadingProgress(bookId, page, totalPages) {
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
    <div onclick="handleBookClick('${item.bookId}')" class="shrink-0 w-36 sm:w-44 group cursor-pointer text-left snap-start">
      <div class="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#141414] border border-white/10 group-hover:border-yellow-500/60 shadow-lg transition-all duration-300">
        <img src="${item.cover || 'assets/logo.jpg'}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.onerror=null; this.src='assets/logo.jpg'">
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

function togglePlayAudiobook() {
  if (isAudiobookPlaying) {
    pauseAudiobook();
  } else {
    playAudiobook();
  }
}

function playAudiobook() {
  if (!currentBookModalData) return;
  const book = currentBookModalData;

  // Iniciar frequência de fundo 432Hz suave
  startAudiobookAmbientDrone();

  // Texto da narração
  const narrationText = "Iniciação ao tratado sagrado: " + book.title + ". Autor: " + book.author + ". Pertencente ao acervo da Cúpula 33, " + (book.module || 'Módulo Oficial') + ". " + book.desc + " Este manuscrito guarda as chaves ancestrais da transmutação da mente. Ouça com atenção plena e permita que os ensinamentos façam morada em sua consciência.";

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    audiobookUtterance = new SpeechSynthesisUtterance(narrationText);
    audiobookUtterance.lang = 'pt-BR';
    audiobookUtterance.rate = currentAudioSpeed;
    audiobookUtterance.pitch = 0.95;

    // Buscar voz em português se disponível
    const voices = window.speechSynthesis.getVoices();
    const ptVoice = voices.find(v => v.lang.includes('pt') || v.lang.includes('PT'));
    if (ptVoice) audiobookUtterance.voice = ptVoice;

    audiobookUtterance.onend = () => {
      stopAudiobook();
    };

    audiobookUtterance.onerror = () => {
      stopAudiobook();
    };

    window.speechSynthesis.speak(audiobookUtterance);
    isAudiobookPlaying = true;
    updateAudiobookControlsUI(true);
  } else {
    showToast("Síntese de voz não suportada neste navegador.");
  }
}

function pauseAudiobook() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.pause();
  }
  stopAudiobookAmbientDrone();
  isAudiobookPlaying = false;
  updateAudiobookControlsUI(false);
}

function stopAudiobook() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  stopAudiobookAmbientDrone();
  isAudiobookPlaying = false;
  updateAudiobookControlsUI(false);
}

function restartAudiobook() {
  stopAudiobook();
  setTimeout(() => playAudiobook(), 200);
}

function setAudioSpeed(speed) {
  currentAudioSpeed = speed;
  document.querySelectorAll(".audio-speed-btn").forEach(btn => {
    if (parseFloat(btn.getAttribute("data-speed")) === speed) {
      btn.className = "audio-speed-btn px-2.5 py-1 rounded-lg bg-gold-500/20 text-gold-400 border border-gold-500/40 font-bold";
    } else {
      btn.className = "audio-speed-btn px-2.5 py-1 rounded-lg bg-dark-800 text-gray-400 hover:text-white border border-dark-700";
    }
  });

  if (isAudiobookPlaying) {
    playAudiobook();
  }
}

function updateAudiobookControlsUI(playing) {
  const icon = document.getElementById("audiobookPlayIcon");
  const status = document.getElementById("audiobookStatus");
  if (icon) {
    icon.setAttribute("data-lucide", playing ? "pause" : "play");
    if (window.lucide) try { if (window.lucide) lucide.createIcons(); } catch(e) {}
  }
  if (status) {
    status.textContent = playing ? "Reproduzindo narração com frequência de fundo 432Hz..." : "Reprodução pausada.";
  }
}

// FREQUÊNCIA DE FUNDO AMBIENTE PARA O AUDIOBOOK (432Hz)
let audiobookOsc = null;
let audiobookGain = null;

function startAudiobookAmbientDrone() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioCtx) audioCtx = new AudioContextClass();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    stopAudiobookAmbientDrone();

    audiobookOsc = audioCtx.createOscillator();
    audiobookGain = audioCtx.createGain();

    audiobookOsc.type = 'sine';
    audiobookOsc.frequency.setValueAtTime(432, audioCtx.currentTime);

    audiobookGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    audiobookGain.gain.exponentialRampToValueAtTime(0.04, audioCtx.currentTime + 1.5);

    audiobookOsc.connect(audiobookGain);
    audiobookGain.connect(audioCtx.destination);
    audiobookOsc.start();
  } catch (err) {
    console.log("Drone error:", err);
  }
}

function stopAudiobookAmbientDrone() {
  try {
    if (audiobookGain && audioCtx) {
      audiobookGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);
      setTimeout(() => {
        if (audiobookOsc) {
          audiobookOsc.stop();
          audiobookOsc.disconnect();
          audiobookOsc = null;
        }
      }, 500);
    }
  } catch (err) {}
}

// BAIXAR ÁUDIO DO AUDIOBOOK PARA SMARTPHONE
function downloadAudiobookTrack() {
  if (!currentBookModalData) return;
  const book = currentBookModalData;

  showToast("Gerando arquivo de áudio para: " + book.title + "...");

  // Gera um arquivo de áudio místico calibrado a 432Hz em formato WAV real sintetizado
  const sampleRate = 44100;
  const duration = 12; // 12 segundos do tom harmônico de apresentação da obra
  const numSamples = sampleRate * duration;
  const buffer = new Float32Array(numSamples);

  // Sintetiza onda harmônica 432Hz + sobretons
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const env = Math.sin((Math.PI * i) / numSamples); // Envelope suave
    buffer[i] = (Math.sin(2 * Math.PI * 432 * t) * 0.6 + Math.sin(2 * Math.PI * 864 * t) * 0.2) * env;
  }

  // Monta arquivo WAV
  const wavBytes = encodeWAV(buffer, sampleRate);
  const blob = new Blob([wavBytes], { type: 'audio/wav' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  const safeTitle = book.title.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 30);
  a.href = url;
  a.download = "Audiobook_432Hz_" + safeTitle + "_Cupula33.wav";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast("Download do Audiobook iniciado com sucesso!");
}

// ENCODER WAV
function encodeWAV(samples, sampleRate) {
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);

  /* RIFF identifier */
  writeString(view, 0, 'RIFF');
  /* file length */
  view.setUint32(4, 36 + samples.length * 2, true);
  /* RIFF type */
  writeString(view, 8, 'WAVE');
  /* format chunk identifier */
  writeString(view, 12, 'fmt ');
  /* format chunk length */
  view.setUint32(16, 16, true);
  /* sample format (raw) */
  view.setUint16(20, 1, true);
  /* channel count */
  view.setUint16(22, 1, true);
  /* sample rate */
  view.setUint32(24, sampleRate, true);
  /* byte rate (sample rate * block align) */
  view.setUint32(28, sampleRate * 2, true);
  /* block align (channel count * bytes per sample) */
  view.setUint16(32, 2, true);
  /* bits per sample */
  view.setUint16(34, 16, true);
  /* data chunk identifier */
  writeString(view, 36, 'data');
  /* data chunk length */
  view.setUint32(40, samples.length * 2, true);

  // Escrever samples PCM 16-bit
  let offset = 44;
  for (let i = 0; i < samples.length; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
    offset += 2;
  }

  return buffer;
}

function writeString(view, offset, string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}

// SISTEMA DE FREQUÊNCIAS DE SOLFEGGIO
// ==========================================
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
    const scopedKey = this.getProgressKey(clean);
    try {
      const scoped = localStorage.getItem(scopedKey);
      if (scoped) return JSON.parse(scoped);
    } catch(e) {}
    // Novo cliente sempre inicia com progresso limpo e isolado
    return {};
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
// ==========================================
let currentOscillators = [];
let masterGainNode = null;

function renderFrequencies() {
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
}

// SISTEMA DO ROADMAP INICIÁTICO
function renderRoadmap() {
  const list = document.getElementById("roadmapList");
  if (!list) return;

  const completed = JSON.parse(localStorage.getItem("cupula33_roadmap_completed") || "[]");
  const pct = Math.round((completed.length / roadmapData.length) * 100);

  const progText = document.getElementById("roadmapProgressText");
  const progBar = document.getElementById("roadmapProgressBar");
  if (progText) progText.textContent = completed.length + " de 12 Graus (" + pct + "%)";
  if (progBar) progBar.style.width = pct + "%";

  list.innerHTML = roadmapData.map(r => {
    const isDone = completed.includes(r.grade);

    return `
      <div onclick="toggleRoadmapGrade(${r.grade})" class="glass-panel glass-panel-hover rounded-2xl p-4 sm:p-5 border ${isDone ? 'border-gold-500/50 bg-gold-500/5' : 'border-gold-500/20'} flex items-start justify-between gap-4 cursor-pointer transition-all">
        <div class="flex items-start gap-3.5">
          <div class="w-8 h-8 rounded-xl ${isDone ? 'bg-gold-500 text-black' : 'bg-dark-800 text-gold-400 border border-gold-500/30'} flex items-center justify-center font-cinzel font-bold text-xs shrink-0 mt-0.5">
            ${isDone ? '<i data-lucide="check" class="w-4 h-4 stroke-[3]"></i>' : r.grade}
          </div>
          <div>
            <span class="text-[9px] font-bold text-gold-500 uppercase tracking-widest block">${r.module}</span>
            <h4 class="font-cinzel font-bold text-sm text-gray-100 ${isDone ? 'line-through text-gray-400' : ''}">${r.title}</h4>
            <p class="text-xs text-gray-400 mt-0.5">${r.desc}</p>
          </div>
        </div>

        <span class="text-xs text-gray-500 font-bold shrink-0 mt-1">
          ${isDone ? '<span class="text-gold-400">Concluído</span>' : 'Pendente'}
        </span>
      </div>
    `;
  }).join("");

  if (window.lucide) try { if (window.lucide) lucide.createIcons(); } catch(e) {}
}

function toggleRoadmapGrade(grade) {
  let completed = JSON.parse(localStorage.getItem("cupula33_roadmap_completed") || "[]");
  if (completed.includes(grade)) {
    completed = completed.filter(g => g !== grade);
  } else {
    completed.push(grade);
    showToast("Grau " + grade + " concluído com sucesso!");
  }
  localStorage.setItem("cupula33_roadmap_completed", JSON.stringify(completed));
  renderRoadmap();
}

// SISTEMA DE DOWNLOADS
function triggerDownload(book) {
  showToast("Iniciando download seguro de: " + book.title + "...");
  const a = document.createElement('a');
  a.href = book.pdfUrl || 'livros_pdf/01_O_Caibalion_Tres_Iniciados.pdf';
  a.download = '';
  a.target = '_blank';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function triggerCollectionDownload(title, url) {
  showToast("Conectando ao Drive Oficial: " + title + "...");
  window.open(url, '_blank');
}

// MODAIS
function openModal(modalId) {
  if (modalId === "profileModal") {
    loadUserProfile();
  }
  const m = document.getElementById(modalId);
  if (m) {
    m.classList.remove("hidden");
    m.style.display = "flex";
  }
}

function closeModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) {
    m.classList.add("hidden");
    m.style.display = "none";
  }
}

function openUpgradeModal(title) {
  document.getElementById("upgradeModalTitle").textContent = "Desbloquear: " + title;
  openModal("upgradeModal");
}

// TOAST
function showToast(text) {
  const toast = document.getElementById("appToast");
  const span = document.getElementById("appToastText");
  if (!toast || !span) return;
  span.textContent = text;
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3500);
}

function resetFilters() {
  currentSearchQuery = "";
  currentCategoryFilter = "todos";
  currentTierFilter = "todos";
  const input = document.getElementById("searchInput");
  if (input) input.value = "";
  filterCategory("todos");
}

// PWA INSTALL PROMPT & BAIXAR APP
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const nativeBtn = document.getElementById('nativeInstallDirectBtn');
  if (nativeBtn) {
    nativeBtn.textContent = "Instalar Agora (1 Clique)";
  }
});

function triggerPWAInstall() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        showToast("Instalação iniciada com sucesso!");
      }
      deferredPrompt = null;
    });
  } else {
    // Abre modal com instruções completas para iOS e Android
    openModal('installAppModal');
  }
}

function executeNativeInstallPrompt() {
  if (deferredPrompt) {
    closeModal('installAppModal');
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        showToast("App Cúpula 33 instalado!");
      }
      deferredPrompt = null;
    });
  } else {
    // Se não há prompt nativo (ex: Safari no iOS ou já instalado), orienta direto
    showToast("Siga as instruções na tela para adicionar à Tela de Início!");
  }
}


// ==========================================
// AUTENTICAÇÃO VIP & INTEGRAÇÃO SUPABASE + PERFECTPAY
// ==========================================
const SUPABASE_CONFIG = {
  url: "https://wnfkbiqdyrxyuzgeekte.supabase.co",
  apiKey: "sb_secret_QuSI1iueatqHNwAo__i6fQ_NXgEfrZg",
  localVerifyApi: "http://127.0.0.1:8033/api/verify"
};

const MASTER_ALLOWLIST = [
  "dweslley2003@gmail.com",
  "ricardoscola4@gmail.com",
  "loisianavida123@gmail.com",
  "tjoaquim627@gmail.com",
  "paulo-reis51@hotmail.com",
  "mrobertor057@gmail.com",
  "crazyled.delavelle9@gmail.com",
  "edurosalopes@vivaldi.net",
  "testealuno@gmail.com",
  "cliente@example.com",
  "suportesabedoriaoculta@gmail.com",
  "admin@cupula33.com",
  "sigmamarketing@gmail.com",
  "teste@cupula33.com"
];

// LISTA DE INICIADOS QUE ADQUIRIRAM O ORDER BUMP DA PROSPERIDADE MAÇÔNICA
const ORDERBUMP_PROSPERIDADE_ALLOWLIST = [
  "mrobertor057@gmail.com",
  "admin@cupula33.com",
  "sigmamarketing@gmail.com"
];

function userHasOrderBumpProsperidade() {
  const email = (localStorage.getItem("cupula33_user_email") || "").trim().toLowerCase();
  if (ORDERBUMP_PROSPERIDADE_ALLOWLIST.includes(email)) return true;
  if (localStorage.getItem("cupula33_has_prosperidade") === "true") return true;
  return false;
}

function openOrderBumpModal() {
  openModal("orderBumpModal");
  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

function updateProsperidadeCardUI() {
  const badge = document.getElementById("homeProsperidadeBadge");
  const lock = document.getElementById("homeProsperidadeCoverLock");
  const hasBump = userHasOrderBumpProsperidade();
  
  if (badge) {
    if (hasBump) {
      badge.className = "inline-flex items-center gap-1.5 text-yellow-400 text-[10px] font-bold uppercase tracking-wider mb-1.5";
      badge.innerHTML = `<i data-lucide="book-open" class="w-3.5 h-3.5"></i> ACESSO PERMITIDO`;
    } else {
      badge.className = "inline-flex items-center gap-1.5 text-amber-400/90 text-[10px] font-bold uppercase tracking-wider mb-1.5";
      badge.innerHTML = `<i data-lucide="lock" class="w-3.5 h-3.5"></i> COMPLEMENTO ORDER BUMP`;
    }
  }
  if (lock) {
    if (hasBump) {
      lock.classList.add("hidden");
    } else {
      lock.classList.remove("hidden");
    }
  }
  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

function checkVipGateAuth() {
  const gate = document.getElementById("vipLoginGate");
  const savedEmail = (localStorage.getItem("cupula33_user_email") || "").trim().toLowerCase();
  const savedTier = localStorage.getItem("cupula33_user_tier");

  if (!gate) return;

  if (savedEmail) {
    if (savedTier === "master") {
      currentTier = "master";
    }
    // Sincroniza permissão do order bump
    if (ORDERBUMP_PROSPERIDADE_ALLOWLIST.includes(savedEmail)) {
      localStorage.setItem("cupula33_has_prosperidade", "true");
    } else if (localStorage.getItem("cupula33_has_prosperidade") !== "true") {
      localStorage.setItem("cupula33_has_prosperidade", "false");
    }
    try { updateTierBadgeUI(); } catch(e) {}
    try { updateProsperidadeCardUI(); } catch(e) {}
    try { updateAllUserDisplays(); } catch(e) {}
    gate.style.opacity = "0";
    gate.style.pointerEvents = "none";
    setTimeout(() => {
      gate.classList.add("hidden");
      gate.style.display = "none";
    }, 200);
  } else {
    gate.classList.remove("hidden");
    gate.style.display = "flex";
    gate.style.pointerEvents = "auto";
    gate.style.opacity = "1";
    setTimeout(() => {
      const inp = document.getElementById("gateEmailInput");
      if (inp) inp.focus();
    }, 150);
  }
}

async function verifyMemberInSupabase(email) {
  const cleanEmail = String(email || "").trim().toLowerCase();
  
  // 1. Checagem imediata na whitelist embutida
  if (MASTER_ALLOWLIST.includes(cleanEmail) || cleanEmail.endsWith("@cupula33.com")) {
    const hasBump = ORDERBUMP_PROSPERIDADE_ALLOWLIST.includes(cleanEmail);
    return { authorized: true, tier: "master", has_prosperidade: hasBump };
  }

  // 2. Checagem no banco de membros local do site (cupula33_members.json)
  try {
    const localRes = await fetch("cupula33_members.json?t=" + Date.now());
    if (localRes.ok) {
      const db = await localRes.json();
      if (db && db.members && db.members[cleanEmail] && db.members[cleanEmail].active !== false) {
        const mem = db.members[cleanEmail];
        const hasBump = ORDERBUMP_PROSPERIDADE_ALLOWLIST.includes(cleanEmail) || !!(mem.has_prosperidade || mem.has_prosperidade_oculta || mem.has_orderbump);
        return { authorized: true, tier: mem.tier || "master", has_prosperidade: hasBump };
      }
    }
  } catch (err) {
    console.warn("Falha ao checar cupula33_members.json:", err);
  }

  // 3. Fallback no webhook se estiver online
  try {
    const respLocal = await fetch(`${SUPABASE_CONFIG.localVerifyApi}?email=${encodeURIComponent(cleanEmail)}`);
    if (respLocal.ok) {
      const data = await respLocal.json();
      if (data && data.authorized) {
        return { authorized: true, tier: data.tier || "master", has_prosperidade: false };
      }
    }
  } catch (e) {}

  return { authorized: false };
}

async function authenticateGateLogin() {
  const input = document.getElementById("gateEmailInput");
  const btn = document.getElementById("gateSubmitBtn");
  const statusMsg = document.getElementById("gateStatusMsg");

  if (!input) return;
  const email = input.value.trim().toLowerCase();

  if (!email || !email.includes("@") || !email.includes(".")) {
    if (statusMsg) {
      statusMsg.className = "text-xs text-center min-h-[20px] font-bold text-red-400";
      statusMsg.textContent = "Digite um e-mail válido para prosseguir.";
    }
    return;
  }

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<i data-lucide="loader" class="w-4 h-4 animate-spin"></i><span>Consultando no Supabase...</span>`;
    if (window.lucide) try { if (window.lucide) lucide.createIcons(); } catch(e) {}
  }

  if (statusMsg) {
    statusMsg.className = "text-xs text-center min-h-[20px] text-gold-400 animate-pulse";
    statusMsg.textContent = "Verificando liberação na nuvem...";
  }

  let authorized = false;
  let userTier = "master";
  let userHasBump = false;

  const cleanEmail = email.trim().toLowerCase();
  const passInput = document.getElementById("gatePasswordInput");
  const passValue = passInput ? passInput.value.trim() : "";

  // 1. Verificação instantânea na Whitelist ou Senha Mestra Oficial (cupula@33 / ordem@137)
  if (MASTER_ALLOWLIST.includes(cleanEmail) || cleanEmail.endsWith("@cupula33.com") || passValue === "cupula@33" || passValue === "ordem@137") {
    authorized = true;
    userTier = "master";
    userHasBump = ORDERBUMP_PROSPERIDADE_ALLOWLIST.includes(cleanEmail);
  } else {
    // 2. Consulta na base de membros e na nuvem
    const result = await verifyMemberInSupabase(cleanEmail);
    if (result.authorized) {
      authorized = true;
      userTier = result.tier;
      userHasBump = !!result.has_prosperidade;
    }
  }

    if (authorized) {
    localStorage.setItem("cupula33_user_email", cleanEmail);
    localStorage.setItem("cupula33_user_tier", userTier);
    localStorage.setItem("cupula33_has_prosperidade", userHasBump ? "true" : "false");
    currentTier = userTier;

    // Resgata o nome próprio cadastrado do cliente ou formata pelo prefixo
    let clientName = (typeof KNOWN_STUDENT_NAMES !== "undefined" && KNOWN_STUDENT_NAMES[cleanEmail]) || "";
    if (!clientName) {
      const parts = cleanEmail.split("@")[0].replace(/[^a-zA-Z0-9]/g, " ").trim().split(/\s+/);
      clientName = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()).join(" ");
    }

    if (typeof MemberDatabase !== "undefined") {
      MemberDatabase.saveClientRecord({
        email: cleanEmail,
        name: clientName,
        tier: userTier,
        lastLogin: new Date().toISOString()
      });
    }

    localStorage.setItem("cupula33_custom_name_" + cleanEmail, clientName);
    localStorage.setItem("cupula33_custom_name", clientName);

    updateAllUserDisplays();
    updateProfileXP();
    renderContinueReading();
    renderCommunityFeed(currentCommunityFilter);

    if (statusMsg) {
      statusMsg.className = "text-xs text-center min-h-[20px] font-bold text-emerald-400";
      statusMsg.textContent = "✓ Acesso Autorizado! Carregando Acervo Sagrado...";
    }

    try { updateTierBadgeUI(); } catch(e) {}
    try { updateProsperidadeCardUI(); } catch(e) {}
    try { renderBooks(); } catch(e) {}

    // Fecha o portal de login imediatamente
    const gate = document.getElementById("vipLoginGate");
    if (gate) {
      gate.style.opacity = "0";
      setTimeout(() => {
        gate.classList.add("hidden");
        gate.style.display = "none";
      }, 300);
    }
  } else {
    if (statusMsg) {
      statusMsg.className = "text-xs text-center min-h-[20px] font-bold text-rose-400";
      statusMsg.innerHTML = `E-mail não localizado no banco de dados. <a href="https://pay.kirvano.com/1fdcf9d3-915e-432f-9046-cd2285db206e" target="_blank" class="underline text-gold-400">Garanta seu acesso aqui</a>`;
    }
  }

  if (btn) {
    btn.disabled = false;
    btn.innerHTML = `<i data-lucide="lock-open" class="w-4 h-4"></i><span>Entrar no Acervo Sagrado</span>`;
    if (window.lucide) try { if (window.lucide) lucide.createIcons(); } catch(e) {}
  }
}

function loginWithEmail() {
  const memberInput = document.getElementById("memberEmailInput");
  const note = document.getElementById("memberStatusNote");
  if (!memberInput) return;
  const email = memberInput.value.trim().toLowerCase();

  if (!email || !email.includes("@")) {
    if (note) {
      note.className = "text-[11px] text-red-400 text-center pt-1 font-bold";
      note.textContent = "E-mail inválido.";
    }
    return;
  }

  localStorage.setItem("cupula33_user_email", email);
  localStorage.setItem("cupula33_user_tier", "master");
  currentTier = "master";
  updateTierUI();
  renderBooks();

  if (note) {
    note.className = "text-[11px] text-emerald-400 text-center pt-1 font-bold";
    note.textContent = "✓ Status Atualizado: Membro Master Vitalício!";
  }

  showToast("Identidade confirmada como Membro Master");
  setTimeout(() => closeModal("profileModal"), 900);
}

function logoutVipGate() {
  localStorage.removeItem("cupula33_user_email");
  localStorage.removeItem("cupula33_user_tier");
  window.location.reload();
}

// Inicializar verificação de login VIP assim que o script rodar sem travar em DOMContentLoaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", checkVipGateAuth);
} else {
  checkVipGateAuth();
}

// ==========================================
// PÁGINA DEDICADA DE MÓDULO (ESTILO BRAINSYNC)
// ==========================================
let currentActiveModule = null;

function openModuleDetail(moduleCategory) {
  currentActiveModule = moduleCategory;
  
  // Ocultar view geral da biblioteca e exibir view de detalhe do módulo
  const mainLibraryView = document.getElementById("mainLibraryView");
  const moduleDetailView = document.getElementById("moduleDetailView");
  
  if (mainLibraryView) mainLibraryView.classList.add("hidden");
  if (moduleDetailView) {
    moduleDetailView.classList.remove("hidden");
    renderModuleDetailContent(moduleCategory);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function closeModuleDetail() {
  currentActiveModule = null;
  const mainLibraryView = document.getElementById("mainLibraryView");
  const moduleDetailView = document.getElementById("moduleDetailView");
  
  if (moduleDetailView) moduleDetailView.classList.add("hidden");
  if (mainLibraryView) {
    mainLibraryView.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function renderModuleDetailContent(moduleCategory) {
  const titleEl = document.getElementById("moduleDetailTitle");
  const descEl = document.getElementById("moduleDetailDesc");
  const gridEl = document.getElementById("moduleDetailBooksGrid");
  const countEl = document.getElementById("moduleDetailCount");
  
  const moduleBooks = booksData.filter(b => b.category.toLowerCase() === moduleCategory.toLowerCase() || (b.module && b.module.toLowerCase() === moduleCategory.toLowerCase()));
  
  if (titleEl) titleEl.textContent = moduleCategory;
  if (countEl) countEl.textContent = moduleBooks.length + " Manuscritos & Tratados";
  
  const allHistory = JSON.parse(localStorage.getItem("cupula33_books_progress") || "{}");
  
  if (gridEl) {
    gridEl.innerHTML = moduleBooks.map(book => {
      const isLocked = currentTier === "basico" && book.tier === "master";
      const progress = allHistory[book.id];
      const percent = progress ? progress.percent : 0;
      const curPage = progress ? progress.page : 1;
      
      return `
        <div onclick="handleBookClick('${book.id}')" class="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-gold-500/20 flex flex-col justify-between cursor-pointer group relative transition-all">
          <div class="relative aspect-[3/4] bg-dark-900 overflow-hidden">
            <img src="${book.cover}" alt="${book.title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <span class="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-dark-950/85 backdrop-blur-md text-[9px] font-bold text-gold-400 border border-gold-500/30 tracking-wider uppercase">
              ${book.module}
            </span>
            ${isLocked ? `
              <div class="absolute inset-0 bg-dark-950/85 backdrop-blur-[2px] flex flex-col items-center justify-center p-3 text-center border-2 border-gold-500/50">
                <div class="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-500/50 flex items-center justify-center text-gold-400 mb-2">
                  <i data-lucide="lock" class="w-5 h-5"></i>
                </div>
                <span class="text-[10px] font-black text-gold-400 uppercase tracking-widest">Exclusivo Master</span>
                <span class="text-[9px] text-gray-300 mt-1">Toque para Desbloquear</span>
              </div>
            ` : `
              <div class="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-dark-950/80 backdrop-blur-md text-[9px] font-medium text-gray-300 border border-dark-700">
                ${book.pages} pág
              </div>
            `}
          </div>
          
          <div class="p-3 flex-1 flex flex-col justify-between">
            <div>
              <span class="text-[9px] font-semibold text-gold-500/90 uppercase tracking-wider block mb-0.5">${book.category}</span>
              <h4 class="font-cinzel font-bold text-xs text-gray-100 group-hover:text-gold-300 transition-colors line-clamp-2">${book.title}</h4>
              <p class="text-[11px] text-gray-400 mt-0.5 line-clamp-1">${book.author}</p>
            </div>
            
            <div class="mt-3">
              <!-- Barra de Progresso Individual de Leitura -->
              <div class="flex items-center justify-between text-[10px] text-gray-400 mb-1">
                <span>Progresso:</span>
                <span class="text-gold-400 font-bold">${percent}%</span>
              </div>
              <div class="w-full h-1.5 rounded-full bg-dark-900 border border-dark-700 overflow-hidden mb-2">
                <div class="h-full bg-gradient-to-r from-gold-500 to-amber-300" style="width: ${percent}%"></div>
              </div>
              
              <div class="pt-2 border-t border-dark-700/60 flex items-center justify-between text-[10px]">
                <span class="text-gold-400/90 font-serif italic">${book.rarity}</span>
                <span class="font-bold ${isLocked ? 'text-amber-400' : 'text-gray-300 group-hover:text-gold-400'} flex items-center gap-1">
                  ${isLocked ? '<i data-lucide="crown" class="w-3 h-3 text-gold-400"></i> Upgrade' : '<i data-lucide="book-open" class="w-3 h-3"></i> Ler Agora'}
                </span>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join("");
    
    if (window.lucide) try { if (window.lucide) lucide.createIcons(); } catch(e) {}
  }
}


// ==========================================
// SISTEMA DE PERFIL 100% PERSONALIZÁVEL POR CLIENTE
// ==========================================

function getProfileStorageKey() {
  const currentEmail = (localStorage.getItem('cupula33_user_email') || 'aluno').trim().toLowerCase();
  return 'cupula33_profile_' + currentEmail;
}

function loadUserProfile() {
  const currentEmail = localStorage.getItem('cupula33_user_email') || 'testealuno@gmail.com';
  const key = getProfileStorageKey();
  const savedProfile = JSON.parse(localStorage.getItem(key) || '{}');

  // Valores padrão: para cada novo cliente vem zerado / vazio, apenas com nome derivado e email fixo
  const defaultName = savedProfile.name || (typeof KNOWN_STUDENT_NAMES !== "undefined" && KNOWN_STUDENT_NAMES[currentEmail.toLowerCase()]) || "Iniciado da Cúpula";
  const defaultTitle = savedProfile.title || '';
  const defaultBio = savedProfile.bio || '';
  const defaultFreq = savedProfile.frequency || '432';
  const defaultModule = savedProfile.focusModule || 'Módulo I';
  const defaultAvatar = savedProfile.avatar || 'assets/logo.jpg';

  // Atualizar visual do modal
  const dispName = document.getElementById('profileDisplayName');
  const dispEmail = document.getElementById('profileDisplayEmail');
  const avatarImg = document.getElementById('profileAvatarImg');

  const inpName = document.getElementById('profileInputName');
  const inpEmail = document.getElementById('profileInputEmail');
  const inpTitle = document.getElementById('profileInputTitle');
  const inpBio = document.getElementById('profileInputBio');
  const inpFreq = document.getElementById('profileInputFrequency');
  const inpModule = document.getElementById('profileInputFocusModule');

  if (dispName) dispName.textContent = defaultName;
  if (dispEmail) dispEmail.textContent = currentEmail;
  if (avatarImg) avatarImg.src = defaultAvatar;

  if (inpName) inpName.value = defaultName;
  if (inpEmail) inpEmail.value = currentEmail;
  if (inpTitle) inpTitle.value = defaultTitle;
  if (inpBio) inpBio.value = defaultBio;
  if (inpFreq) inpFreq.value = defaultFreq;
  if (inpModule) inpModule.value = defaultModule;

  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

function saveUserProfile() {
  const currentEmail = localStorage.getItem('cupula33_user_email') || 'testealuno@gmail.com';
  const key = getProfileStorageKey();
  const savedProfile = JSON.parse(localStorage.getItem(key) || '{}');

  const name = document.getElementById('profileInputName') ? document.getElementById('profileInputName').value.trim() : '';
  const title = document.getElementById('profileInputTitle') ? document.getElementById('profileInputTitle').value.trim() : '';
  const bio = document.getElementById('profileInputBio') ? document.getElementById('profileInputBio').value.trim() : '';
  const freq = document.getElementById('profileInputFrequency') ? document.getElementById('profileInputFrequency').value : '432';
  const module = document.getElementById('profileInputFocusModule') ? document.getElementById('profileInputFocusModule').value : 'Módulo I';

  const updatedProfile = {
    ...savedProfile,
    email: currentEmail,
    name: name || savedProfile.name || 'Iniciado da Cúpula',
    title: title,
    bio: bio,
    frequency: freq,
    focusModule: module,
    updatedAt: new Date().toISOString()
  };

  localStorage.setItem(key, JSON.stringify(updatedProfile));

  // Atualizar elementos na tela
  const dispName = document.getElementById('profileDisplayName');
  if (dispName) dispName.textContent = updatedProfile.name;

  showToast('Perfil salvo com sucesso!');
  setTimeout(() => closeModal('profileModal'), 600);
}

function handleProfileAvatarChange(event) {
  const file = event.target.files[0];
  if (!file) return;

  if (file.size > 2 * 1024 * 1024) {
    showToast('Escolha uma foto menor que 2MB.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const base64Img = e.target.result;
    const avatarImg = document.getElementById('profileAvatarImg');
    if (avatarImg) avatarImg.src = base64Img;

    const key = getProfileStorageKey();
    const savedProfile = JSON.parse(localStorage.getItem(key) || '{}');
    savedProfile.avatar = base64Img;
    localStorage.setItem(key, JSON.stringify(savedProfile));

    showToast('Foto do perfil atualizada!');
  };
  reader.readAsDataURL(file);
}

// Hook no openModal para carregar os dados sempre que abrir o profileModal
const _originalOpenModal = window.openModal;


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
  if (String(abId) === "999" || String(abId).toLowerCase().includes("prosperidade")) {
    if (!userHasOrderBumpProsperidade()) {
      openOrderBumpModal();
      return;
    }
  }
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
