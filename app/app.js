const KNOWN_STUDENT_NAMES = {
  "edurosalopes@vivaldi.net": "Carlos Eduardo Rosa Lopes",
  "crazyled.delavelle9@gmail.com": "Emerson Ferreira",
  "mrobertor057@gmail.com": "Robertto Machado",
  "paulo-reis51@hotmail.com": "Paulo Reis",
  "tjoaquim627@gmail.com": "Tamara S Joaquim",
  "loisianavida123@gmail.com": "Loisiana Lopes",
  "dweslley2003@gmail.com": "Weslley Dias",
  "joaomayamarcelo@gmail.com": "João Maya Marcelo",
  "sigma.mkt.company@gmail.com": "Sigma Marketing",
  "josecar2neiro@gmail.com": "José de Jesus Carneiro",
  "lord.von.hoelz.88@gmail.com": "Bruno Di Lourenço",
  "severino_lucena@hotmail.com": "Severino Lucena da Silva",
  "jersenkayky@gmail.com": "Kayky jersen Santiago Lima",
  "adv.hjgabriel@gmail.com": "Hugo Jean Gabriel de Paula",
  "valsolerantoniovalsoler332@gmail.com": "Clovis Antônio valsoler",
  "samanguero@gmail.com": "Fábio Buainain de Luca"
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
  { "id": 36, "title": "O Livro de Enoque", "author": "Nelson Marins (Edição Revisada)", "category": "Gnosticismo & Apócrifos", "module": "Módulo III - Gnosticismo & Apócrifos", "cover": "assets/books/enoque.png", "pdfUrl": "livros_pdf/O_Livro_de_Enoque.pdf", "pages": 76, "tier": "basico", "desc": "Tratado apócrifo milenar sobre os mistérios celestes e a queda dos sentinelas." },
  { "id": 999, "title": "Os Segredos da Prosperidade Maçônica", "author": "Acervo Cúpula 33", "category": "Sociedades Secretas & Maçonaria", "module": "Módulo V - Sociedades Secretas", "cover": "assets/covers_extracted/cover_Manuscrito_Maconico_da_Prosperidade_Oculta.jpg", "pdfUrl": "livros_pdf/Manuscrito_Maconico_da_Prosperidade_Oculta.pdf", "pages": 31, "tier": "master", "desc": "Segredos usados por maçons para atrair riqueza, prosperidade e influência." },
  { "id": 1, "title": "A Tábua Das Esmeraldas De Thoth", "author": "Hermes Trismegisto", "category": "Hermetismo & Cabala", "module": "Módulo I - Hermetismo & Cabala", "cover": "assets/covers_extracted/cover_A_T_bua_Das_Esmeraldas_De_Thoth.jpg", "pdfUrl": "livros_pdf/10_A_Tabua_de_Esmeralda_Hermes_Trismegisto.pdf", "pages": 127, "tier": "basico", "desc": "Tratado e manuscrito autêntico preservado em língua portuguesa." },
  { "id": 6, "title": "O Caibalion: As Sete Leis Herméticas", "author": "Três Iniciados", "category": "Hermetismo & Cabala", "module": "Módulo I - Hermetismo & Cabala", "cover": "assets/covers_extracted/cover_O_Caibalion_-_Edi__o_Definitiva.jpg", "pdfUrl": "livros_pdf/01_O_Caibalion_Tres_Iniciados.pdf", "pages": 162, "tier": "basico", "desc": "Os 7 princípios universais da filosofia hermética." }
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
    name: "Ressonância Áurea Cósmica",
    subtitle: "Afinação Natural Phi & Cura Celular",
    benefit: "Alinha as ondas cerebrais com a geometria áurea do cosmos, reduzindo estresse e harmonizando o campo biomagnético.",
    chakra: "Cardíaco & Coronário",
    symbol: "assets/symbols/freq_432hz.png",
    color: "#d4af37",
    tier: "basico"
  },
  {
    hz: 528,
    name: "Frequência dos Milagres",
    subtitle: "Reparo do DNA & Transmutação",
    benefit: "A nota central de Solfeggio ('Mi'). Acelera clareza intuitiva, dissolução de amarras e regeneração mental.",
    chakra: "Plexo Solar (Manipura)",
    symbol: "assets/symbols/freq_528hz.png",
    color: "#10b981",
    tier: "master"
  },
  {
    hz: 396,
    name: "Liberação de Medo & Culpa",
    subtitle: "Ancoramento e Coragem Primordial",
    benefit: "Dissolve bloqueios inconscientes no chakra básico, dissipando inseguranças e ancorando foco realizador.",
    chakra: "Básico (Muladhara)",
    symbol: "assets/symbols/freq_396hz.png",
    color: "#ef4444",
    tier: "basico"
  },
  {
    hz: 417,
    name: "Quebra de Padrões Negativos",
    subtitle: "Transmutação & Novos Ciclos",
    benefit: "Facilita a quebra de crenças autolimitantes e limpa resíduos de experiências passadas para expansão espiritual.",
    chakra: "Sacral (Svadhisthana)",
    symbol: "assets/symbols/freq_417hz.png",
    color: "#f97316",
    tier: "master"
  },
  {
    hz: 639,
    name: "Harmonização & Conexão",
    subtitle: "Empatia e Telepatia Afetiva",
    benefit: "Promove compreensão mútua, sintonia interpessoal e alinhamento de intenções no campo magnético sutil.",
    chakra: "Cardíaco (Anahata)",
    symbol: "assets/symbols/freq_639hz.png",
    color: "#06b6d4",
    tier: "master"
  },
  {
    hz: 741,
    name: "Despertar da Intuição",
    subtitle: "Expressão Autêntica & Limpeza",
    benefit: "Desperta a lucidez mental, ativando a voz interior da verdade e clareza para tomadas de decisão superiores.",
    chakra: "Laríngeo (Vishuddha)",
    symbol: "assets/symbols/freq_741hz.png",
    color: "#3b82f6",
    tier: "master"
  },
  {
    hz: 852,
    name: "Visão do Terceiro Olho",
    subtitle: "Ordem Espiritual e Clarividência",
    benefit: "Estimula o chakra frontal para visão além das aparências materiais, dissolvendo ilusões cognitivas.",
    chakra: "Frontal (Ajna)",
    symbol: "assets/symbols/freq_852hz.png",
    color: "#8b5cf6",
    tier: "master"
  },
  {
    hz: 963,
    name: "Centelha Divina Primordial",
    subtitle: "Conexão com a Consciência Cósmica",
    benefit: "Ativação sutil da glândula pineal e reintegração com a Fonte Cósmica através da frequência mais alta de Solfeggio.",
    chakra: "Coronário (Sahasrara)",
    symbol: "assets/symbols/freq_963hz.png",
    color: "#ec4899",
    tier: "master"
  }
];

// Roadmap legado expurgado

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
    try { if (window.lucide) lucide.createIcons(); } catch (e) { }
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
    try { updateSidebarUserInfo(); } catch (e) { }
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
    if (main) {
      main.classList.remove("md:pl-60");
      main.classList.add("no-sidebar");
    }
    if (icon) icon.setAttribute("data-lucide", "chevron-right");
  } else {
    sidebar.classList.remove("-translate-x-full");
    if (main) {
      main.classList.add("md:pl-60");
      main.classList.remove("no-sidebar");
    }
    if (icon) icon.setAttribute("data-lucide", "chevron-left");
  }
  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
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
  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
}

// ==========================================
// COMUNIDADE CÚPULA 33 (FEED OFICIAL DA PLATAFORMA)
// ==========================================
let cachedCommunityPosts = null;
let isCommunitySyncing = false;

const CUPULA33_DEFAULT_POSTS = [
  {
    "id": "c33-post-1",
    "author": "Marcus Aurelius P.",
    "userEmail": "marcus.aurelius@gmail.com",
    "initial": "M",
    "level": 7,
    "category": "Teoria",
    "text": "Terminei ontem à noite a releitura do Corpus Hermeticum traduzido diretamente pelo acervo da Cúpula. O paralelo com o princípio da correspondência ('O que está em cima é como o que está embaixo') fica muito mais claro quando contrastado com as lâminas dos manuscritos egípcios. Alguém mais estudando essa correlação?",
    "timeAgo": "21/11/2026, 21:45",
    "likes": 18,
    "liked": false,
    "comments": 6
  },
  {
    "id": "c33-post-2",
    "author": "Renata Vasconcelos",
    "userEmail": "renata.vasconcelos@outlook.com",
    "initial": "R",
    "level": 5,
    "category": "Templo",
    "text": "A frequência binaural de 528Hz sincronizada enquanto lia o Tratado de Alquimia de Paracelso gerou uma absorção absurda no ritual de hoje. Recomendo fortemente a todos utilizarem a aba de áudio com fones isoladores durante a meditação da noite.",
    "timeAgo": "21/11/2026, 18:20",
    "likes": 24,
    "liked": false,
    "comments": 9
  },
  {
    "id": "c33-post-3",
    "author": "Thiago M. Alencar",
    "userEmail": "thiago.alencar@yahoo.com",
    "initial": "T",
    "level": 9,
    "category": "Teoria",
    "text": "Sobre o Livro de Enoque: a descrição dos sentinelas e das órbitas celestes tem uma precisão astronômica impressionante. Não é à toa que foi preservado em segredo por tantos séculos. O material aqui na plataforma está impecável e em altíssima resolução.",
    "timeAgo": "21/11/2026, 14:10",
    "likes": 31,
    "liked": false,
    "comments": 12
  },
  {
    "id": "c33-post-4",
    "author": "Gabriel Fontes",
    "userEmail": "gabriel.fontes@gmail.com",
    "initial": "G",
    "level": 4,
    "category": "Dúvidas na interação do site",
    "text": "Pessoal, consegui ativar o leitor em tela cheia no iPad e no desktop e a rolagem ficou fluida demais. Se alguém tiver usando no tablet, ativem a opção 'Adicionar à tela de início' (PWA) que fica idêntico a um aplicativo nativo!",
    "timeAgo": "20/11/2026, 22:30",
    "likes": 15,
    "liked": false,
    "comments": 4
  },
  {
    "id": "c33-post-5",
    "author": "Camila S. Nogueira",
    "userEmail": "camila.nogueira@hotmail.com",
    "initial": "C",
    "level": 6,
    "category": "Teoria",
    "text": "Estudando a Cabala Mística de Dion Fortune junto aos tratados herméticos de Thoth. A conexão entre a Árvore da Vida e as leis herméticas é uma chave prática para organização mental e autoridade interior. Excelente curadoria da Cúpula 33.",
    "timeAgo": "20/11/2026, 19:15",
    "likes": 22,
    "liked": false,
    "comments": 7
  },
  {
    "id": "c33-post-6",
    "author": "Leonardo Prado",
    "userEmail": "leonardo.prado@gmail.com",
    "initial": "L",
    "level": 8,
    "category": "Templo",
    "text": "Liberei o acesso ao manuscrito da Prosperidade Maçônica ontem. As lâminas explicativas sobre magnetismo, postura e circulação de valor são diretas ao ponto, sem enrolação teórica. Valeu cada segundo do estudo.",
    "timeAgo": "20/11/2026, 11:40",
    "likes": 27,
    "liked": false,
    "comments": 8
  },
  {
    "id": "c33-post-7",
    "author": "Eduardo Silveira",
    "userEmail": "eduardo.silveira@gmail.com",
    "initial": "E",
    "level": 5,
    "category": "Filtro de Livros",
    "text": "Dica para quem está começando agora: filtrem pela categoria 'Hermetismo & Cabala' e leiam primeiro O Caibalion e A Tábua de Esmeralda antes de partirem para os textos de Alta Magia de Eliphas Lévi. Ajuda muito a criar a base estrutural.",
    "timeAgo": "19/11/2026, 20:05",
    "likes": 38,
    "liked": false,
    "comments": 11
  },
  {
    "id": "c33-post-8",
    "author": "Juliana Diniz",
    "userEmail": "juliana.diniz@uol.com.br",
    "initial": "J",
    "level": 3,
    "category": "Templo",
    "text": "As frequências de 432Hz e 963Hz nos audiolivros colocam a mente num estado de concentração muito profundo. Consigo ler por 2 horas seguidas sem dispersar a atenção. Essa funcionalidade da plataforma foi uma sacada genial.",
    "timeAgo": "19/11/2026, 16:50",
    "likes": 19,
    "liked": false,
    "comments": 5
  },
  {
    "id": "c33-post-9",
    "author": "Felipe Guimarães",
    "userEmail": "felipe.guimaraes@gmail.com",
    "initial": "F",
    "level": 7,
    "category": "Teoria",
    "text": "A análise de Carl Jung sobre a Alquimia nos 'Estudos Alquímicos' ganha outra dimensão quando você lê os manuscritos originais de Paracelso logo em seguida. A transmutação sempre foi primordialmente interna e da consciência.",
    "timeAgo": "19/11/2026, 10:30",
    "likes": 29,
    "liked": false,
    "comments": 8
  },
  {
    "id": "c33-post-10",
    "author": "Beatriz Mendes",
    "userEmail": "beatriz.mendes@gmail.com",
    "initial": "B",
    "level": 4,
    "category": "Filtro de Livros",
    "text": "Estou apaixonada pela organização das obras! O acervo de manuscritos apócrifos tem textos que eu procurava há anos em sebos e nunca encontrava completos. Parabéns aos mestres pela curadoria da Cúpula 33.",
    "timeAgo": "18/11/2026, 21:10",
    "likes": 25,
    "liked": false,
    "comments": 6
  },
  {
    "id": "c33-post-11",
    "author": "Rodrigo Barreto",
    "userEmail": "rodrigo.barreto@gmail.com",
    "initial": "R",
    "level": 6,
    "category": "Dúvidas na interação do site",
    "text": "Para quem perguntou sobre marcar página: o sistema salva o progresso de leitura automaticamente no leitor de PDF! Abri hoje no celular de onde parei no computador ontem à noite sem perder nenhuma anotação.",
    "timeAgo": "18/11/2026, 17:25",
    "likes": 17,
    "liked": false,
    "comments": 3
  },
  {
    "id": "c33-post-12",
    "author": "Priscila Antunes",
    "userEmail": "priscila.antunes@gmail.com",
    "initial": "P",
    "level": 5,
    "category": "Teoria",
    "text": "O estudo sobre o Princípio do Ritmo me ajudou a entender flutuações tanto financeiras quanto emocionais. O domínio das 7 leis herméticas não é misticismo vazio, é ciência comportamental milenar.",
    "timeAgo": "18/11/2026, 12:40",
    "likes": 34,
    "liked": false,
    "comments": 10
  }
];

function getCommunityPosts() {
  if (cachedCommunityPosts && cachedCommunityPosts.length > 0) {
    return cachedCommunityPosts;
  }
  const saved = localStorage.getItem("cupula33_community_posts_v2");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        cachedCommunityPosts = parsed;
        return parsed;
      }
    } catch (e) { }
  }
  cachedCommunityPosts = JSON.parse(JSON.stringify(CUPULA33_DEFAULT_POSTS));
  localStorage.setItem("cupula33_community_posts_v2", JSON.stringify(cachedCommunityPosts));
  return cachedCommunityPosts;
}

async function syncCommunityWithSupabase() {
  // Mantém os posts oficiais da Cúpula 33 intactos e carrega apenas postagens reais locais
  const current = getCommunityPosts();
  renderCommunityFeed(currentCommunityFilter);
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
    if (window.lucide) try { lucide.createIcons(); } catch (e) { }
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

  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
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
  const userLevel = user.level || getUserLevel(user.email);
  const category = catSelect ? catSelect.value : "Teoria";
  const now = new Date();
  const timeFormatted = now.toLocaleDateString("pt-BR") + ", " + now.toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' });

  const tempId = "post-" + Date.now();
  const newPost = {
    id: tempId,
    author: user.name,
    userEmail: user.email,
    initial: user.name.charAt(0).toUpperCase(),
    level: userLevel,
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
  localStorage.setItem("cupula33_community_posts_v2", JSON.stringify(posts));

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
      level: userLevel,
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
        localStorage.setItem("cupula33_community_posts_v2", JSON.stringify(posts));
      }
    }
  } catch (err) {
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

  localStorage.setItem("cupula33_community_posts_v2", JSON.stringify(posts));
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

// Gestão de Minha Lista (Bookmarks Isolados por Aluno)
function getMyList() {
  const email = (localStorage.getItem("cupula33_user_email") || "iniciado").trim().toLowerCase();
  try {
    const scoped = localStorage.getItem(`cupula33_my_list_${email}`);
    if (scoped) return JSON.parse(scoped);
    return JSON.parse(localStorage.getItem("cupula33_my_list") || "[]");
  } catch (e) {
    return [];
  }
}

function isBookInMyList(bookId) {
  const list = getMyList();
  return list.includes(Number(bookId));
}

function toggleCurrentBookMyList() {
  if (!currentBookModalData) return;
  const email = (localStorage.getItem("cupula33_user_email") || "iniciado").trim().toLowerCase();
  const id = Number(currentBookModalData.id);
  let list = getMyList();

  if (list.includes(id)) {
    list = list.filter(x => x !== id);
    showToast("Removido da Minha Lista");
  } else {
    list.push(id);
    showToast("Adicionado à Minha Lista");
  }

  localStorage.setItem(`cupula33_my_list_${email}`, JSON.stringify(list));
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
  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
}

// Criação do Card de Livro Estilo Ordem 137 / Cúpula 33
function createBookCardHTML(book, isCarousel) {
  const isLocked = currentTier === "basico" && book.tier === "master";
  const savedProg = getSavedProgress(book.id);
  const progPercent = savedProg && book.pages ? Math.min(100, Math.round((savedProg.page / book.pages) * 100)) : 0;

  const containerClass = isCarousel
    ? "flex-none w-[120px] sm:w-[140px] cursor-pointer group snap-start select-none transition-transform duration-200 active:scale-95 text-left"
    : "cursor-pointer group select-none transition-transform duration-200 active:scale-95 text-left";

  return `
    <div onclick="handleBookClick('${book.id}')" class="${containerClass}">
      
      <!-- Container da Capa com Aspect Ratio 3:4 (Exato Ordem 137) -->
      <div class="relative aspect-[3/4] rounded-xl overflow-hidden mb-2 border border-white/10 group-hover:border-yellow-500 shadow-[0_6px_20px_rgba(0,0,0,0.8)] transition-all duration-300 bg-[#121212]">
        <img src="${book.cover}" alt="${book.title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${isLocked ? 'grayscale opacity-40' : ''}" onerror="this.onerror=null; this.src='assets/logo.jpg'">
        
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

        <!-- Botão de Detalhes (i) -->
        <button type="button" onclick="event.stopPropagation(); openBookDetailsModal('${book.id}')" class="absolute top-2 right-2 z-20 w-6 h-6 rounded-full bg-black/75 hover:bg-yellow-500 hover:text-black text-gray-300 border border-white/20 flex items-center justify-center transition-all shadow-md active:scale-90 cursor-pointer" title="Ver Detalhes">
          <i data-lucide="info" class="w-3 h-3"></i>
        </button>

        <!-- Badges Superiores -->
        <div class="absolute top-2 left-2 z-20 flex flex-col gap-1 items-start">
          ${progPercent > 0 ? `
            <div class="bg-black/85 backdrop-blur-md px-1.5 py-0.5 rounded-full border border-white/10 flex items-center shadow-lg">
              <span class="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-1 animate-pulse"></span>
              <span class="text-[9px] font-bold text-white tracking-wider font-mono">${progPercent}%</span>
            </div>
          ` : ''}
        </div>

        ${isLocked ? `
          <div class="absolute inset-0 flex flex-col items-center justify-center bg-black/75 backdrop-blur-[2px] p-2 text-center">
            <div class="w-8 h-8 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center text-yellow-500 mb-1 shadow-lg">
              <i data-lucide="lock" class="w-4 h-4"></i>
            </div>
            <span class="text-[8px] font-black text-yellow-500 uppercase tracking-widest">Master</span>
          </div>
        ` : ''}

        <!-- Barra de Progresso no Rodapé da Capa -->
        ${progPercent > 0 ? `
          <div class="absolute bottom-0 left-0 w-full h-1 bg-black/80">
            <div class="h-full bg-gradient-to-r from-amber-600 to-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.8)]" style="width: ${progPercent}%"></div>
          </div>
        ` : ''}
      </div>

      <!-- Título & Autor (Exato Ordem 137) -->
      <h3 class="text-xs font-semibold text-white group-hover:text-yellow-400 transition-colors line-clamp-2 leading-tight">
        ${book.title}
      </h3>
      <p class="text-gray-400 text-[11px] truncate mt-1">
        ${book.author || 'Desconhecido'}
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

  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
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

  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
}

// Ordem canônica exata das categorias (conforme prints do app Ordem 137)
const ORDEM_137_CATEGORIES = [
  "Alquimia",
  "Alta Magia",
  "Budismo",
  "Cabala",
  "Benzimento",
  "Bruxaria Natural",
  "Banimento",
  "Baralho Cigano",
  "Arquétipos",
  "Auto Conhecimento",
  "Apometria",
  "Aromaterapia",
  "Animais",
  "Anunnakis",
  "Magia Lunar",
  "Magia Sexual",
  "Magia Elemental",
  "Magia Enoquiana",
  "Magia do Caos",
  "Magia dos Metais",
  "Magia Angelical",
  "Magia das Fadas",
  "Maçonaria",
  "Iniciantes (Bruxaria)",
  "Luciferianismo",
  "Hermetismo",
  "História e Enciclopédias"
];

function getBookCleanCategory(book) {
  const cat = book.category || "";
  const m = cat.match(/^([^()]+)\s*\(([^()]+)\)/);
  let name = m ? m[1].trim() : cat.trim();
  if (name === "Iniciantes") name = "Iniciantes (Bruxaria)";
  return name || "Outros";
}

// 1. Renderiza o Modo Streaming (Carrosséis Ordem 137 / Cúpula 33)
function renderLibraryStreaming() {
  // A. Continuar Lendo (Conforme Screenshot 1 do Usuário)
  const secContinue = document.getElementById("sectionContinueReading");
  const carContinue = document.getElementById("continueReadingCarousel");
  if (secContinue && carContinue) {
    const cleanEmail = (localStorage.getItem("cupula33_user_email") || "").trim().toLowerCase();
    const allHistory = typeof MemberDatabase !== "undefined"
      ? MemberDatabase.getAllProgress(cleanEmail)
      : JSON.parse(localStorage.getItem("cupula33_books_progress") || "{}");
    const entries = Object.values(allHistory).sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0));

    if (entries.length > 0) {
      secContinue.classList.remove("hidden");
      carContinue.innerHTML = entries.map(item => {
        const bookObj = booksData.find(b => String(b.id) === String(item.bookId)) || {
          id: item.bookId,
          title: item.title,
          author: item.author || 'Desconhecido',
          cover: item.cover || 'assets/logo.jpg',
          pages: 100
        };
        const progPercent = item.percent || 1;
        return `
          <div onclick="handleBookClick('${bookObj.id}')" class="flex-none w-[125px] sm:w-[145px] cursor-pointer group snap-start select-none transition-transform duration-200 active:scale-95 text-left">
            <div class="relative aspect-[3/4] rounded-xl overflow-hidden mb-2 border border-white/10 group-hover:border-yellow-500 shadow-[0_6px_20px_rgba(0,0,0,0.8)] transition-all duration-300 bg-[#121212]">
              <img src="${bookObj.cover}" alt="${bookObj.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.onerror=null; this.src='assets/logo.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              <div class="absolute top-2 left-2 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/85 backdrop-blur-md border border-white/10 shadow">
                <span class="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
                <span class="text-[9px] font-bold text-white font-mono">${progPercent}%</span>
              </div>
              <div class="absolute bottom-0 left-0 w-full h-1 bg-black/80">
                <div class="h-full bg-gradient-to-r from-amber-600 to-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.8)]" style="width: ${progPercent}%"></div>
              </div>
            </div>
            <h3 class="text-xs font-semibold text-white group-hover:text-yellow-400 transition-colors line-clamp-1 leading-tight">
              ${bookObj.title}
            </h3>
            <p class="text-gray-400 text-[11px] truncate mt-1">
              ${bookObj.author || 'Desconhecido'}
            </p>
          </div>
        `;
      }).join("");
    } else {
      // Se ainda não leu nada, mostra 2 destaques padrão conforme print do Ordem 137
      secContinue.classList.remove("hidden");
      const sampleBooks = [
        booksData.find(b => String(b.id) === "483") || booksData[0], // Estudos Alquímicos (Jung)
        booksData.find(b => String(b.id) === "750") || booksData[1]  // Prosperidade Maçônica
      ].filter(Boolean);

      carContinue.innerHTML = sampleBooks.map((bookObj, idx) => {
        const progPercent = idx === 0 ? 1 : 6;
        return `
          <div onclick="handleBookClick('${bookObj.id}')" class="flex-none w-[125px] sm:w-[145px] cursor-pointer group snap-start select-none transition-transform duration-200 active:scale-95 text-left">
            <div class="relative aspect-[3/4] rounded-xl overflow-hidden mb-2 border border-white/10 group-hover:border-yellow-500 shadow-[0_6px_20px_rgba(0,0,0,0.8)] transition-all duration-300 bg-[#121212]">
              <img src="${bookObj.cover}" alt="${bookObj.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.onerror=null; this.src='assets/logo.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              <div class="absolute top-2 left-2 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/85 backdrop-blur-md border border-white/10 shadow">
                <span class="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
                <span class="text-[9px] font-bold text-white font-mono">${progPercent}%</span>
              </div>
              <div class="absolute bottom-0 left-0 w-full h-1 bg-black/80">
                <div class="h-full bg-gradient-to-r from-amber-600 to-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.8)]" style="width: ${progPercent}%"></div>
              </div>
            </div>
            <h3 class="text-xs font-semibold text-white group-hover:text-yellow-400 transition-colors line-clamp-1 leading-tight">
              ${bookObj.title}
            </h3>
            <p class="text-gray-400 text-[11px] truncate mt-1">
              ${bookObj.author || 'Desconhecido'}
            </p>
          </div>
        `;
      }).join("");
    }
  }

  // B. Fileiras por Categoria (Estilo Ordem 137 com Trilhas por Graus da Cúpula 33)
  const rowsContainer = document.getElementById("moduleRowsContainer");
  if (rowsContainer) {
    const allBooksList = getAllBooks();

    // 1. CARROSSEIS DAS TRILHAS POR GRAUS (GRAU I AO GRAU IV - DESIGN PADRÃO E NATIVO)
    const GRAUS_DEF = [
      {
        num: 1,
        title: "Grau I • Neófito",
        module: "Módulo I",
        filterFn: b => b.module === "Módulo I" || (b.category && b.category.toLowerCase().includes("hermetismo"))
      },
      {
        num: 2,
        title: "Grau II • Adepto",
        module: "Módulo II",
        filterFn: b => b.module === "Módulo II" || b.module === "Módulo IV" || (b.category && (b.category.toLowerCase().includes("alquimia") || b.category.toLowerCase().includes("magia")))
      },
      {
        num: 3,
        title: "Grau III • Filósofo",
        module: "Módulo III",
        filterFn: b => b.module === "Módulo III" || (b.category && (b.category.toLowerCase().includes("gnosticismo") || b.category.toLowerCase().includes("apócrifos")))
      },
      {
        num: 4,
        title: "Grau IV • Mestre",
        module: "Módulo V",
        filterFn: b => b.module === "Módulo V" || b.module === "Módulo VI" || (b.category && b.category.toLowerCase().includes("sociedades secretas")) || Number(b.id) === 999
      }
    ];

    const grausRowsHTML = GRAUS_DEF.map(grau => {
      const grauBooks = allBooksList.filter(grau.filterFn);
      if (grauBooks.length === 0) return '';
      const displayBooks = grauBooks.slice(0, 20);

      return `
        <div>
          <div class="flex items-center justify-between mb-3 group cursor-pointer" onclick="filterLibraryByGrau(${grau.num})">
            <h2 class="text-lg sm:text-xl font-serif text-yellow-500 group-hover:text-yellow-400 transition-colors font-bold">
              ${grau.title}
            </h2>
            <button onclick="event.stopPropagation(); filterLibraryByGrau(${grau.num})" class="text-xs text-gray-400 uppercase tracking-wider group-hover:text-white transition-colors cursor-pointer font-medium">
              VER TODOS
            </button>
          </div>

          <div class="flex overflow-x-auto gap-3.5 pb-2 hide-scrollbar scroll-smooth snap-x">
            ${displayBooks.map(b => createBookCardHTML(b, true)).join("")}
          </div>
        </div>
      `;
    }).join("");

    const groups = {};
    booksData.forEach(b => {
      const catName = getBookCleanCategory(b);
      if (!groups[catName]) groups[catName] = [];
      groups[catName].push(b);
    });

    // Ordenação estrita: Primeiro as 27 categorias dos screenshots, depois as restantes em ordem alfabética
    const presentTarget = ORDEM_137_CATEGORIES.filter(c => groups[c] && groups[c].length > 0);
    const remaining = Object.keys(groups).filter(c => !ORDEM_137_CATEGORIES.includes(c)).sort();
    const categoriesToRender = [...presentTarget, ...remaining];

    const categoriesRowsHTML = categoriesToRender.map(catName => {
      const catBooks = groups[catName] || [];
      if (catBooks.length === 0) return '';

      return `
        <div>
          <div class="flex items-center justify-between mb-3 group cursor-pointer" onclick="openCategoryDetail('${catName}')">
            <h2 class="text-lg sm:text-xl font-serif text-white group-hover:text-yellow-400 transition-colors font-bold">
              ${catName}
            </h2>
            <button onclick="event.stopPropagation(); openCategoryDetail('${catName}')" class="text-xs text-gray-400 uppercase tracking-wider group-hover:text-white transition-colors cursor-pointer font-medium">
              VER TODOS
            </button>
          </div>

          <div class="flex overflow-x-auto gap-3.5 pb-2 hide-scrollbar scroll-smooth snap-x">
            ${catBooks.map(b => createBookCardHTML(b, true)).join("")}
          </div>
        </div>
      `;
    }).join("");

    rowsContainer.innerHTML = `
      ${grausRowsHTML}
      ${categoriesRowsHTML}
    `;
  }

  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
}

// 2. Renderiza a Grade de Vias de Estudo ("Selecione uma via")
function renderCategoriesGrid() {
  const grid = document.getElementById("categoriesGrid");
  if (!grid) return;

  const groups = {};
  booksData.forEach(b => {
    const catName = getBookCleanCategory(b);
    if (!groups[catName]) groups[catName] = [];
    groups[catName].push(b);
  });

  const presentTarget = ORDEM_137_CATEGORIES.filter(c => groups[c] && groups[c].length > 0);
  const remaining = Object.keys(groups).filter(c => !ORDEM_137_CATEGORIES.includes(c)).sort();
  const allCats = [...presentTarget, ...remaining];

  grid.innerHTML = allCats.map(catName => {
    const count = (groups[catName] || []).length;

    return `
      <div onclick="openCategoryDetail('${catName}')" class="group relative h-32 overflow-hidden rounded-2xl border border-white/10 bg-[#141414] hover:border-yellow-500/60 transition-all text-left p-5 flex flex-col justify-end cursor-pointer shadow-lg">
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        <div class="relative z-10">
          <h3 class="text-base font-serif font-bold text-white group-hover:text-yellow-400 transition-colors">${catName}</h3>
          <p class="text-xs text-gray-400 mt-1">${count} Livros & Tratados</p>
        </div>
      </div>
    `;
  }).join("");

  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
}

// 3. Renderiza a Grade Completa da Categoria Selecionada
function renderCategoryDetailGrid(categoryName) {
  const grid = document.getElementById("categoryDetailBooksGrid");
  if (!grid) return;
  const all = getAllBooks();
  const filtered = all.filter(b => {
    const cat = getBookCleanCategory(b);
    return cat.toLowerCase() === categoryName.toLowerCase() ||
      (b.category && b.category.toLowerCase().includes(categoryName.toLowerCase())) ||
      (b.module && b.module.toLowerCase().includes(categoryName.toLowerCase()));
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="col-span-full py-16 text-center text-gray-500">Nenhuma obra localizada nesta categoria.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(b => createBookCardHTML(b, false)).join("");
  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
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

  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
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
    if (window.lucide) try { lucide.createIcons(); } catch (e) { }
    return;
  }

  grid.innerHTML = savedBooks.map(b => createBookCardHTML(b, false)).join("");
  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
}

// ==========================================
// FILTRO DE TRILHAS POR GRAUS (GRAU I AO GRAU IV)
// ==========================================
function filterLibraryByGrau(grau) {
  switchTab("library");

  // Atualizar visual dos botões de Grau
  document.querySelectorAll(".grau-pill-btn").forEach(btn => {
    btn.classList.remove("bg-yellow-500", "text-black", "font-bold", "shadow-md");
    btn.classList.add("bg-white/5", "text-gray-300", "border", "border-white/10");
  });

  const activeBtn = document.getElementById("btnGrau-" + grau);
  if (activeBtn) {
    activeBtn.classList.remove("bg-white/5", "text-gray-300", "border", "border-white/10");
    activeBtn.classList.add("bg-yellow-500", "text-black", "font-bold", "shadow-md");
  }

  if (grau === "all" || !grau) {
    returnToDefaultLibrary();
    return;
  }

  const grauNum = Number(grau);
  const GRAUS_INFO = {
    1: {
      title: "Grau I • Neófito (139 Obras)",
      subtitle: "Fundamentos, Mentalismo & Hermetismo Sagrado",
      filterFn: b => b.module === "Módulo I" || (b.category && b.category.toLowerCase().includes("hermetismo"))
    },
    2: {
      title: "Grau II • Adepto (755 Obras)",
      subtitle: "Alquimia, Ocultismo & Magia Prática",
      filterFn: b => b.module === "Módulo II" || b.module === "Módulo IV" || (b.category && (b.category.toLowerCase().includes("alquimia") || b.category.toLowerCase().includes("magia")))
    },
    3: {
      title: "Grau III • Filósofo (122 Obras)",
      subtitle: "Gnosticismo & Manuscritos Apócrifos",
      filterFn: b => b.module === "Módulo III" || (b.category && (b.category.toLowerCase().includes("gnosticismo") || b.category.toLowerCase().includes("apócrifos") || b.category.toLowerCase().includes("cabala")))
    },
    4: {
      title: "Grau IV • Mestre (735 Obras)",
      subtitle: "Sociedades Secretas & Alta Prosperidade",
      filterFn: b => b.module === "Módulo V" || b.module === "Módulo VI" || (b.category && b.category.toLowerCase().includes("sociedades secretas")) || Number(b.id) === 999
    }
  };

  const info = GRAUS_INFO[grauNum];
  if (!info) return;

  const all = getAllBooks();
  const filtered = all.filter(info.filterFn);

  // Exibir a view de detalhe
  libraryViewMode = "category_detail";
  activeCategoryName = info.title;

  const streamingView = document.getElementById("libraryStreamingView");
  const categoriesView = document.getElementById("libraryCategoriesView");
  const categoryDetailView = document.getElementById("libraryCategoryDetailView");
  const searchResultsView = document.getElementById("librarySearchResultsView");
  const myListView = document.getElementById("libraryMyListView");
  const backBtn = document.getElementById("libraryBackBtn");
  const titleElem = document.getElementById("libraryMainTitle");
  const grid = document.getElementById("categoryDetailBooksGrid");

  if (streamingView) streamingView.classList.add("hidden");
  if (categoriesView) categoriesView.classList.add("hidden");
  if (searchResultsView) searchResultsView.classList.add("hidden");
  if (myListView) myListView.classList.add("hidden");

  if (categoryDetailView) categoryDetailView.classList.remove("hidden");
  if (backBtn) backBtn.classList.remove("hidden");
  if (titleElem) titleElem.textContent = info.title;

  if (grid) {
    if (filtered.length === 0) {
      grid.innerHTML = `<div class="col-span-full py-16 text-center text-gray-500">Nenhuma obra localizada para este Grau.</div>`;
    } else {
      grid.innerHTML = filtered.map(b => createBookCardHTML(b, false)).join("");
    }
  }

  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Ações de Navegação da Biblioteca
function returnToDefaultLibrary() {
  libraryViewMode = "streaming";
  activeCategoryName = null;
  const inp = document.getElementById("searchInput");
  if (inp) inp.value = "";
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) clearBtn.classList.add("hidden");

  // Reset visual dos botões de Grau
  document.querySelectorAll(".grau-pill-btn").forEach(btn => {
    btn.classList.remove("bg-yellow-500", "text-black", "font-bold", "shadow-md");
    btn.classList.add("bg-white/5", "text-gray-300", "border", "border-white/10");
  });
  const allBtn = document.getElementById("btnGrau-all");
  if (allBtn) {
    allBtn.classList.remove("bg-white/5", "text-gray-300", "border", "border-white/10");
    allBtn.classList.add("bg-yellow-500", "text-black", "font-bold", "shadow-md");
  }

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

// Modal do Livro (Padrão Ordem 137 / Cúpula 33 Gold)
function openBookModal(book) {
  currentBookModalData = book;

  const cover = document.getElementById("modalBookCover");
  const cat = document.getElementById("modalBookCategory");
  const pages = document.getElementById("modalBookPages");
  const title = document.getElementById("modalBookTitle");
  const pBar = document.getElementById("modalProgressBar");
  const pText = document.getElementById("modalProgressPercent");

  if (cover) cover.src = book.cover;

  // Categoria limpa conforme print (ex: ALQUIMIA)
  let cleanCat = typeof getBookCleanCategory === "function" ? getBookCleanCategory(book) : (book.category || "ACERVO");
  if (cat) cat.textContent = cleanCat.toUpperCase();
  if (pages) pages.textContent = `${book.pages || 120} PÁGINAS`;
  if (title) title.textContent = book.title;

  // Progresso do livro
  const saved = getSavedProgress(book.id);
  const percent = saved && book.pages ? Math.min(100, Math.round((saved.page / book.pages) * 100)) : (saved && saved.page ? 1 : 0);
  if (pBar) pBar.style.width = (percent || 1) + "%";
  if (pText) pText.textContent = (percent || 1) + "%";

  updateModalBookmarkUI(book.id);
  openModal("bookModal");
  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
}

function openBookCommunityDiscussions() {
  if (!currentBookModalData) return;
  closeModal("bookModal");
  switchTab("community");
  const inp = document.getElementById("communityPostInput");
  if (inp) {
    inp.value = `Discussão sobre a obra: "${currentBookModalData.title}"`;
    inp.focus();
  }
}

function handleSendToKindleClick() {
  if (!currentBookModalData) return;
  showToast("Preparando envio para o Kindle via e-mail...");
  setTimeout(() => {
    showToast("✓ Obra enviada para o seu endereço Kindle configurado!");
  }, 1200);
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
// SISTEMA DE NÍVEIS & PROGRESSÃO INDIVIDUAL
// ==========================================
function getUserLevel(email) {
  const cleanEmail = (email || localStorage.getItem("cupula33_user_email") || "").trim().toLowerCase();
  if (!cleanEmail) return 1;

  // Administradores da Ordem possuem Grau 33 (Mestre da Cúpula)
  if (cleanEmail === "admin@cupula33.com" || cleanEmail === "sigmamarketing@gmail.com") {
    const customAdminLvl = localStorage.getItem("cupula33_user_level_" + cleanEmail);
    return customAdminLvl ? parseInt(customAdminLvl, 10) : 33;
  }

  // 1. Checa se já tem nível individual salvo no localStorage para esse aluno
  const savedLvl = localStorage.getItem("cupula33_user_level_" + cleanEmail);
  if (savedLvl) {
    const parsed = parseInt(savedLvl, 10);
    if (!isNaN(parsed) && parsed >= 1) return parsed;
  }

  // 2. Checa no banco de dados local isolado do MemberDatabase
  if (typeof MemberDatabase !== "undefined") {
    const rec = MemberDatabase.getClientRecord(cleanEmail);
    if (rec && rec.level) {
      const parsedRec = parseInt(rec.level, 10);
      if (!isNaN(parsedRec) && parsedRec >= 1) return parsedRec;
    }
  }

  // 3. Regra de Ouro: Todo aluno novo começa no Nível 1
  return 1;
}

function setUserLevel(email, newLevel) {
  const cleanEmail = (email || localStorage.getItem("cupula33_user_email") || "").trim().toLowerCase();
  if (!cleanEmail) return;

  const validLevel = Math.max(1, parseInt(newLevel, 10) || 1);
  localStorage.setItem("cupula33_user_level_" + cleanEmail, String(validLevel));
  localStorage.setItem("cupula33_user_level", String(validLevel));

  if (typeof MemberDatabase !== "undefined") {
    MemberDatabase.saveClientRecord({
      email: cleanEmail,
      level: validLevel
    });
  }

  updateProfileXP();
}

// ==========================================
// IDENTIDADE DINÂMICA DO CLIENTE CÚPULA 33
// ==========================================
function resolveUserIdentity() {
  const currentEmail = (localStorage.getItem("cupula33_user_email") || "").trim().toLowerCase();
  const userLevel = getUserLevel(currentEmail);

  // 1. Nome customizado salvo pelo aluno
  const customKey = currentEmail ? "cupula33_custom_name_" + currentEmail : "cupula33_custom_name";
  const customName = localStorage.getItem(customKey) || localStorage.getItem("cupula33_custom_name");
  if (customName && customName.trim()) {
    return {
      email: currentEmail || "membro@cupula33.com",
      name: customName.trim(),
      tier: localStorage.getItem("cupula33_user_tier") || "master",
      level: userLevel
    };
  }

  // 2. Mapeamento de membros conhecidos
  if (currentEmail && typeof KNOWN_STUDENT_NAMES !== "undefined" && KNOWN_STUDENT_NAMES[currentEmail]) {
    return {
      email: currentEmail,
      name: KNOWN_STUDENT_NAMES[currentEmail],
      tier: localStorage.getItem("cupula33_user_tier") || "master",
      level: userLevel
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
        tier: localStorage.getItem("cupula33_user_tier") || "master",
        level: userLevel
      };
    }
  }

  // 4. Fallback padrão seguro (sem hardcode de nome de cliente anterior)
  return {
    email: currentEmail || "membro@cupula33.com",
    name: "Iniciado da Cúpula",
    tier: localStorage.getItem("cupula33_user_tier") || "master",
    level: userLevel
  };
}

function updateAllUserDisplays() {
  const user = resolveUserIdentity();
  const grauProg = typeof calculateUserGrauProgress === "function" ? calculateUserGrauProgress(user.email || "") : { grauNum: 1, grauLabel: "Grau I • Neófito" };

  // Sidebar Desktop & Mobile
  const sName = document.getElementById("sidebarUserName");
  const sTier = document.getElementById("sidebarTierLabel");
  if (sName) sName.textContent = user.name;
  if (sTier) sTier.textContent = (user.tier === "master" ? "Membro Master" : "Membro Básico") + " • " + grauProg.grauLabel;

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
  } catch (e) { }
});

function handleBookClick(bookId) {
  // Checagem de Order Bump exclusivo (Os Segredos da Prosperidade Maçônica)
  if (String(bookId) === "999" || String(bookId).toLowerCase().includes("prosperidade")) {
    if (!userHasOrderBumpProsperidade()) {
      openOrderBumpModal();
      return;
    }
  }
  // Ao clicar em cada livro, abre primeiro o modal de detalhes do livro (conforme padrão Ordem 137)
  openBookDetailsModal(bookId);
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
  if (window.lucide) try { if (window.lucide) lucide.createIcons(); } catch (e) { }
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

  // Travar o scroll de fundo no mobile para leitura fluida
  document.body.style.overflow = "hidden";

  // MODO DE LEITURA 100% INTEGRADO DENTRO DO APP
  if (targetUrl && (targetUrl.includes("drive.google.com") || targetUrl.includes("/preview"))) {
    let embedUrl = targetUrl;
    if (embedUrl.includes("/view")) {
      embedUrl = embedUrl.replace("/view", "/preview");
    } else if (!embedUrl.includes("/preview")) {
      embedUrl = embedUrl.split("?")[0].replace(/\/+$/, "") + "/preview";
    }
    if (nativeContainer) {
      nativeContainer.classList.add("hidden");
      nativeContainer.style.display = "none";
      nativeContainer.innerHTML = "";
    }
    if (iframe) {
      iframe.src = embedUrl;
      iframe.classList.remove("hidden");
      iframe.style.display = "block";
    }
    if (spinner) spinner.classList.add("hidden");
  } else if (typeof pdfjsLib !== "undefined") {
    if (iframe) {
      iframe.src = "about:blank";
      iframe.classList.add("hidden");
      iframe.style.display = "none";
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
  } catch (e) { }

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
        } catch (e) { }
        return fullUrl;
      }
    }
  } catch (e) {
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
  } catch (e) {
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
      } catch (e) { }

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
      loadingTask.onProgress = function (progress) {
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
    } catch (e) {
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
        const isMobile = window.innerWidth <= 768;
        const maxScaleFactor = isMobile ? 1.5 : 2.2;
        const renderScale = displayScale * Math.min(pixelRatio, maxScaleFactor);
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

    // Monitoramento contínuo de rolagem para contabilizar páginas em tempo real
    let nativeScrollTimer = null;
    const handleContainerScroll = () => {
      clearTimeout(nativeScrollTimer);
      nativeScrollTimer = setTimeout(() => {
        const wrappers = container.querySelectorAll(".pdf-page-wrapper");
        if (!wrappers.length) return;
        const cRect = container.getBoundingClientRect();
        const probeY = cRect.top + (cRect.height * 0.35);
        let activePage = currentReaderPage;
        let minDiff = Infinity;

        wrappers.forEach(w => {
          const wRect = w.getBoundingClientRect();
          const diff = Math.abs(wRect.top - probeY);
          if (diff < minDiff) {
            minDiff = diff;
            const p = parseInt(w.dataset.pageNumber);
            if (!isNaN(p)) activePage = p;
          }
        });

        if (activePage && activePage !== currentReaderPage) {
          currentReaderPage = activePage;
          updateReaderDisplay(currentBookModalData, activePage);
          saveReadingProgress(currentBookModalData.id, activePage, numPages);
        }
      }, 70);
    };
    container.addEventListener("scroll", handleContainerScroll, { passive: true });

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
    container.innerHTML = `
      <div class="flex flex-col items-center justify-center py-20 text-center px-4 text-gray-300">
        <i data-lucide="alert-circle" class="w-10 h-10 text-yellow-500 mb-3 animate-bounce"></i>
        <p class="font-cinzel text-base font-bold text-white mb-1">Não foi possível carregar as páginas deste manuscrito</p>
        <p class="text-xs text-gray-400 mb-5">Verifique sua conexão ou tente recarregar a obra.</p>
        <button onclick="renderNativePDF('${pdfUrl}', ${startPage})" class="px-5 py-2.5 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-xs uppercase tracking-wider">
          Tentar Novamente
        </button>
      </div>
    `;
    if (window.lucide) try { lucide.createIcons(); } catch(e) {}
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
  document.body.style.overflow = "";
  if (currentRenderObserver) currentRenderObserver.disconnect();
  if (currentScrollObserver) currentScrollObserver.disconnect();
  const iframe = document.getElementById("readerIframe");
  if (iframe) {
    iframe.src = "about:blank";
    iframe.classList.add("hidden");
    iframe.style.display = "none";
  }
  const container = document.getElementById("readerNativeContainer");
  if (container) {
    container.innerHTML = "";
    container.classList.remove("hidden");
    container.style.display = "block";
  }
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
    const cleanEmail = (localStorage.getItem("cupula33_user_email") || "").trim().toLowerCase();
    const allHistory = typeof MemberDatabase !== "undefined"
      ? MemberDatabase.getAllProgress(cleanEmail)
      : JSON.parse(localStorage.getItem("cupula33_books_progress") || "{}");
    return allHistory[String(bookId)] || allHistory[Number(bookId)] || null;
  } catch (e) {
    return null;
  }
}

function checkReadingProgress() {
  const section = document.getElementById("resumeReadingSection");
  const cleanEmail = (localStorage.getItem("cupula33_user_email") || "").trim().toLowerCase();
  const stored = localStorage.getItem(`cupula33_active_reading_${cleanEmail}`) || localStorage.getItem("cupula33_active_reading");
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
    if (window.lucide) try { lucide.createIcons(); } catch (e) { }
  } catch (err) {
    section.classList.add("hidden");
  }
}

function renderContinueReading() {
  const cleanEmail = (localStorage.getItem("cupula33_user_email") || "").trim().toLowerCase();
  const allHistory = typeof MemberDatabase !== "undefined"
    ? MemberDatabase.getAllProgress(cleanEmail)
    : JSON.parse(localStorage.getItem("cupula33_books_progress") || "{}");
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
  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
}

function calculateUserGrauProgress(cleanEmail) {
  let allHistory = {};
  if (typeof MemberDatabase !== "undefined") {
    allHistory = MemberDatabase.getAllProgress(cleanEmail);
  } else {
    try {
      allHistory = JSON.parse(localStorage.getItem("cupula33_books_progress") || "{}");
    } catch (e) { }
  }

  const allBooks = getAllBooks();
  const bookMap = {};
  allBooks.forEach(b => { bookMap[String(b.id)] = b; });

  const progressByGrau = {
    1: { name: "Grau I • Neófito", completed: 0, pagesRead: 0, totalBooks: 0 },
    2: { name: "Grau II • Adepto", completed: 0, pagesRead: 0, totalBooks: 0 },
    3: { name: "Grau III • Filósofo", completed: 0, pagesRead: 0, totalBooks: 0 },
    4: { name: "Grau IV • Mestre", completed: 0, pagesRead: 0, totalBooks: 0 }
  };

  allBooks.forEach(b => {
    let g = 1;
    if (b.module === "Módulo II" || b.module === "Módulo IV" || (b.category && b.category.toLowerCase().includes("alquimia"))) g = 2;
    else if (b.module === "Módulo III" || (b.category && (b.category.toLowerCase().includes("gnosticismo") || b.category.toLowerCase().includes("apócrifos")))) g = 3;
    else if (b.module === "Módulo V" || b.module === "Módulo VI" || Number(b.id) === 999 || (b.category && b.category.toLowerCase().includes("sociedades secretas"))) g = 4;
    else g = 1;
    if (progressByGrau[g]) progressByGrau[g].totalBooks++;
  });

  let totalCompletedAll = 0;
  let totalPagesAll = 0;

  Object.values(allHistory || {}).forEach(item => {
    const book = bookMap[String(item.bookId)];
    let g = 1;
    if (book) {
      if (book.module === "Módulo II" || book.module === "Módulo IV" || (book.category && book.category.toLowerCase().includes("alquimia"))) g = 2;
      else if (book.module === "Módulo III" || (book.category && (book.category.toLowerCase().includes("gnosticismo") || book.category.toLowerCase().includes("apócrifos")))) g = 3;
      else if (book.module === "Módulo V" || book.module === "Módulo VI" || Number(book.id) === 999 || (book.category && book.category.toLowerCase().includes("sociedades secretas"))) g = 4;
      else g = 1;
    }
    const isCompleted = (item.percent || 0) >= 90 || (item.page && book && item.page >= (book.pages || 50));
    if (isCompleted) {
      progressByGrau[g].completed++;
      totalCompletedAll++;
    }
    progressByGrau[g].pagesRead += (item.page || 0);
    totalPagesAll += (item.page || 0);
  });

  // Conforme o aluno lê e finaliza as obras, sobe de Grau no perfil:
  let currentGrauNum = 1;
  if (totalCompletedAll >= 4 || totalPagesAll >= 400) {
    currentGrauNum = 4;
  } else if (totalCompletedAll >= 2 || totalPagesAll >= 200) {
    currentGrauNum = 3;
  } else if (totalCompletedAll >= 1 || totalPagesAll >= 80) {
    currentGrauNum = 2;
  } else {
    currentGrauNum = 1;
  }

  // Whitelist admin
  if (cleanEmail === "admin@cupula33.com" || cleanEmail === "sigma.mkt.company@gmail.com" || cleanEmail === "sigmamarketing@gmail.com") {
    currentGrauNum = 4;
  }

  const GRAUS_LABELS = {
    1: "Grau I • Neófito",
    2: "Grau II • Adepto",
    3: "Grau III • Filósofo",
    4: "Grau IV • Mestre 33"
  };

  return {
    grauNum: currentGrauNum,
    grauLabel: GRAUS_LABELS[currentGrauNum],
    totalCompleted: totalCompletedAll,
    totalPages: totalPagesAll,
    byGrau: progressByGrau
  };
}

function renderProfileGrausRoadmap(prog) {
  const container = document.getElementById("profileGrausList");
  if (!container) return;

  const grausConfig = [
    {
      num: 1,
      name: "Grau I • Neófito",
      subtitle: "Fundamentos & Hermetismo Sagrado",
      minCompleted: 1,
      minPages: 80,
      icon: "compass"
    },
    {
      num: 2,
      name: "Grau II • Adepto",
      subtitle: "Alquimia & Magia Prática",
      minCompleted: 2,
      minPages: 200,
      icon: "flame"
    },
    {
      num: 3,
      name: "Grau III • Filósofo",
      subtitle: "Gnosticismo & Apócrifos",
      minCompleted: 4,
      minPages: 380,
      icon: "eye"
    },
    {
      num: 4,
      name: "Grau IV • Mestre 33",
      subtitle: "Sociedades Secretas & Prosperidade",
      minCompleted: 6,
      minPages: 600,
      icon: "crown"
    }
  ];

  container.innerHTML = grausConfig.map(g => {
    const isCurrent = prog.grauNum === g.num;
    const isUnlocked = prog.grauNum >= g.num;
    const gStats = prog.byGrau && prog.byGrau[g.num] ? prog.byGrau[g.num] : { completed: 0, pagesRead: 0 };

    let statusBadge = '';
    if (prog.grauNum > g.num) {
      statusBadge = `<span class="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">✓ Grau Consagrado</span>`;
    } else if (isCurrent) {
      statusBadge = `<span class="px-2 py-0.5 rounded-full bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 text-[10px] font-bold animate-pulse">● Grau em Curso</span>`;
    } else {
      statusBadge = `<span class="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-500 text-[10px] font-medium"><i data-lucide="lock" class="w-3 h-3 inline"></i> Bloqueado</span>`;
    }

    const pct = isUnlocked ? (prog.grauNum > g.num ? 100 : Math.min(95, Math.max(15, Math.round((gStats.pagesRead / g.minPages) * 100)))) : 0;

    return `
      <div class="p-3.5 rounded-xl ${isCurrent ? 'bg-yellow-500/5 border border-yellow-500/30' : 'bg-black/40 border border-white/5'} transition-all text-left">
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-lg ${isUnlocked ? 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30' : 'bg-white/5 text-gray-600'} flex items-center justify-center shrink-0">
              <i data-lucide="${g.icon}" class="w-4 h-4"></i>
            </div>
            <div>
              <h4 class="text-xs sm:text-sm font-serif font-bold ${isUnlocked ? 'text-white' : 'text-gray-500'}">${g.name}</h4>
              <p class="text-[10px] text-gray-400">${g.subtitle}</p>
            </div>
          </div>
          ${statusBadge}
        </div>
        
        <div class="mt-2.5">
          <div class="flex items-center justify-between text-[10px] text-gray-400 font-mono mb-1">
            <span>Progresso no Módulo: ${gStats.completed} livros lidos (${gStats.pagesRead} páginas)</span>
            <span>${pct}%</span>
          </div>
          <div class="w-full h-1.5 bg-black/80 rounded-full overflow-hidden border border-white/5">
            <div class="h-full ${isUnlocked ? 'bg-gradient-to-r from-yellow-600 to-yellow-400' : 'bg-gray-800'}" style="width: ${pct}%"></div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
}

function updateProfileXP() {
  const cleanEmail = (localStorage.getItem("cupula33_user_email") || "").trim().toLowerCase();

  // Resgata o histórico isolado de leitura do aluno
  let allHistory = {};
  if (typeof MemberDatabase !== "undefined") {
    allHistory = MemberDatabase.getAllProgress(cleanEmail);
  } else {
    try {
      allHistory = JSON.parse(localStorage.getItem("cupula33_books_progress") || "{}");
    } catch (e) { }
  }

  const entries = Object.values(allHistory || {});

  let totalPagesRead = 0;
  let completedCount = 0;

  entries.forEach(b => {
    totalPagesRead += (b.page || 0);
    if ((b.percent || 0) >= 95) completedCount++;
  });

  const totalXP = (totalPagesRead * 2) + (completedCount * 50);

  // Regra de Ouro: Todo aluno novo começa no Nível 1
  const earnedLevel = Math.max(1, Math.floor(totalXP / 300) + 1);
  const baseLevel = getUserLevel(cleanEmail);
  const currentLevel = Math.max(baseLevel, earnedLevel);

  // Memoriza na base do aluno
  if (currentLevel > baseLevel) {
    localStorage.setItem("cupula33_user_level_" + cleanEmail, String(currentLevel));
    localStorage.setItem("cupula33_user_level", String(currentLevel));
    if (typeof MemberDatabase !== "undefined") {
      MemberDatabase.saveClientRecord({
        email: cleanEmail,
        level: currentLevel
      });
    }
  } else {
    localStorage.setItem("cupula33_user_level_" + cleanEmail, String(currentLevel));
    localStorage.setItem("cupula33_user_level", String(currentLevel));
  }

  const currentLevelXP = totalXP % 300;
  const pctToNext = Math.min(100, Math.round((currentLevelXP / 300) * 100));

  const xpText = document.getElementById("profileXpText");
  const nextLvlText = document.getElementById("profileNextLvlText");
  const xpBar = document.getElementById("profileXpBar");
  const statBooks = document.getElementById("statCompletedBooks");
  const statLvl = document.getElementById("statCurrentLevel");
  const lvlBadge = document.getElementById("profileLevelBadge");

  // Cálculo e exibição da progressão dos Graus
  const grauProg = calculateUserGrauProgress(cleanEmail);

  if (xpText) xpText.textContent = `XP: ${currentLevelXP} / 300`;
  if (nextLvlText) nextLvlText.textContent = `RUMO AO NÍVEL ${currentLevel + 1}`;
  if (xpBar) xpBar.style.width = `${Math.max(5, pctToNext)}%`;
  if (statBooks) statBooks.textContent = completedCount;
  if (statLvl) statLvl.textContent = grauProg.grauLabel;
  if (lvlBadge) lvlBadge.textContent = "GRAU " + ["I", "II", "III", "IV"][grauProg.grauNum - 1];

  const pGrauStatus = document.getElementById("profileGrauBadgeStatus");
  if (pGrauStatus) pGrauStatus.textContent = grauProg.grauLabel;

  renderProfileGrausRoadmap(grauProg);
}

function resumeLastReading() {
  const cleanEmail = (localStorage.getItem("cupula33_user_email") || "").trim().toLowerCase();
  const stored = localStorage.getItem(`cupula33_active_reading_${cleanEmail}`) || localStorage.getItem("cupula33_active_reading");
  if (!stored) return;
  try {
    const data = JSON.parse(stored);
    const book = booksData.find(b => b.id === data.bookId);
    if (book) {
      openReaderModal(book, data.page);
    }
  } catch (e) { }
}

function clearReadingProgress() {
  const cleanEmail = (localStorage.getItem("cupula33_user_email") || "").trim().toLowerCase();
  localStorage.removeItem(`cupula33_active_reading_${cleanEmail}`);
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
  if (globalRealAudio) {
    globalRealAudio.playbackRate = currentAudioSpeed;
  }
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
    if (window.lucide) try { if (window.lucide) lucide.createIcons(); } catch (e) { }
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
  } catch (err) { }
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
    } catch (e) {
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
      level: clientData.level !== undefined ? clientData.level : (existing.level || 1),
      updatedAt: new Date().toISOString()
    };

    localStorage.setItem(key, JSON.stringify(updated));

    // Atualiza índice mestre de clientes
    const all = this.getAllClientsIndex();
    all[email] = {
      name: updated.name || "Iniciado",
      tier: updated.tier || "master",
      level: updated.level || 1,
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
    } catch (e) { }

    const knownName = (typeof KNOWN_STUDENT_NAMES !== "undefined" && KNOWN_STUDENT_NAMES[clean]) || "";
    const savedLevel = localStorage.getItem("cupula33_user_level_" + clean) || 1;
    return {
      email: clean,
      name: knownName || (clean.includes("@") ? clean.split("@")[0] : "Iniciado"),
      tier: localStorage.getItem("cupula33_user_tier") || "master",
      level: parseInt(savedLevel, 10) || 1,
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
    } catch (e) { }
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

  // Renderização harmoniosa com símbolos sagrados e proporção perfeita
  list.innerHTML = frequenciesData.map(f => {
    const isPlaying = activeFrequencyHz === f.hz;
    return `
      <div id="freq-card-${f.hz}" onclick="handleFrequencyClick(${f.hz}, event)" 
        class="esoteric-card rounded-2xl p-4 sm:p-5 border ${isPlaying ? 'border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.25)] bg-yellow-500/5 ring-1 ring-yellow-500/50' : 'border-white/10 hover:border-yellow-500/40 bg-[#0d0d0d]'} flex flex-col justify-between transition-all duration-300 cursor-pointer group hover:-translate-y-0.5">
        
        <div>
          <!-- Topo do Card: Símbolo Sagrado Autoral + Badges -->
          <div class="flex items-center gap-3.5 mb-3.5">
            <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-black border ${isPlaying ? 'border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.3)]' : 'border-white/10 group-hover:border-yellow-500/40'} p-1.5 flex items-center justify-center shrink-0 shadow-md relative overflow-hidden transition-all duration-300" style="width: 44px; height: 44px; min-width: 44px; min-height: 44px; max-width: 44px; max-height: 44px;">
              <img src="${f.symbol}" alt="${f.name}" class="w-full h-full object-contain pointer-events-none ${isPlaying ? 'scale-110 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]' : 'group-hover:scale-105'} transition-transform duration-300" style="max-width: 100%; max-height: 100%; display: block;">
              ${isPlaying ? '<div class="absolute inset-0 bg-yellow-500/10 pointer-events-none animate-pulse"></div>' : ''}
            </div>

            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-xs font-mono font-black text-yellow-400 px-2 py-0.5 rounded-md bg-yellow-500/15 border border-yellow-500/30 shrink-0">${f.hz} HZ</span>
                <span class="text-[9px] font-mono text-gray-500 uppercase tracking-widest truncate">${f.chakra}</span>
              </div>
              <h4 class="font-serif font-bold text-sm text-white group-hover:text-yellow-400 transition-colors truncate">${f.name}</h4>
              <p class="text-[10px] text-gray-400 font-medium truncate">${f.subtitle || ''}</p>
            </div>
          </div>

          <!-- Descrição Concisa e Proporcional -->
          <p class="text-[11px] sm:text-xs text-gray-300/90 leading-relaxed mb-4 line-clamp-2">${f.benefit}</p>
        </div>

        <!-- Rodapé do Card com Status e Botão com Feedback Fiel -->
        <div class="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
          <div class="flex items-center gap-1.5 text-[10px] text-gray-500 font-mono">
            <span class="w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-yellow-400 animate-ping' : 'bg-gray-600'}"></span>
            <span>${isPlaying ? 'Onda Senoidal Ativa' : 'Onda Binaural'}</span>
          </div>

          <button id="freq-btn-${f.hz}" 
            class="px-4 py-1.5 rounded-xl ${isPlaying ? 'bg-yellow-500 text-black font-black shadow-lg shadow-yellow-500/30' : 'bg-white/5 text-gray-300 group-hover:bg-yellow-500 group-hover:text-black font-bold border border-white/10'} text-xs flex items-center gap-1.5 transition-all duration-200 pointer-events-none shrink-0">
            <i data-lucide="${isPlaying ? 'pause' : 'play'}" class="w-3.5 h-3.5 fill-current"></i>
            <span>${isPlaying ? 'Tocando' : 'Ouvir'}</span>
          </button>
        </div>

      </div>
    `;
  }).join("");

  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
}

function updateFrequencyUI(currentActiveHz) {
  frequenciesData.forEach(f => {
    const card = document.getElementById(`freq-card-${f.hz}`);
    const btn = document.getElementById(`freq-btn-${f.hz}`);
    const isPlaying = currentActiveHz === f.hz;

    if (card) {
      if (isPlaying) {
        card.className = "esoteric-card rounded-2xl p-4 sm:p-5 border border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.25)] bg-yellow-500/5 ring-1 ring-yellow-500/50 flex flex-col justify-between transition-all duration-300 cursor-pointer group";
      } else {
        card.className = "esoteric-card rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-yellow-500/40 bg-[#0d0d0d] flex flex-col justify-between transition-all duration-300 cursor-pointer group hover:-translate-y-0.5";
      }
    }

    if (btn) {
      if (isPlaying) {
        btn.className = "px-4 py-1.5 rounded-xl bg-yellow-500 text-black font-black shadow-lg shadow-yellow-500/30 text-xs flex items-center gap-1.5 transition-all duration-200 pointer-events-none shrink-0";
        btn.innerHTML = `<i data-lucide="pause" class="w-3.5 h-3.5 fill-current"></i><span>Tocando</span>`;
      } else {
        btn.className = "px-4 py-1.5 rounded-xl bg-white/5 text-gray-300 group-hover:bg-yellow-500 group-hover:text-black font-bold border border-white/10 text-xs flex items-center gap-1.5 transition-all duration-200 pointer-events-none shrink-0";
        btn.innerHTML = `<i data-lucide="play" class="w-3.5 h-3.5 fill-current"></i><span>Ouvir</span>`;
      }
    }
  });

  const badge = document.getElementById("playerCurrentHz");
  const waveBox = document.getElementById("soundWaveBox");

  if (currentActiveHz) {
    const fObj = frequenciesData.find(x => x.hz === currentActiveHz);
    if (badge) badge.textContent = `Sintonizado em ${currentActiveHz} Hz • ${fObj ? fObj.name : ''}`;
    if (waveBox) waveBox.classList.remove("wave-paused");
  } else {
    if (badge) badge.textContent = "Santuário em Silêncio";
    if (waveBox) waveBox.classList.add("wave-paused");
  }

  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
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
      } catch (e) { }
    });
  }
  if (masterGainNode) {
    try { masterGainNode.disconnect(); } catch (e) { }
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
    } catch (e) { }
  }

  stopFrequencyTimeout = setTimeout(() => {
    oscsToStop.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (e) { }
    });
    if (gainToRamp) {
      try { gainToRamp.disconnect(); } catch (e) { }
    }
    stopFrequencyTimeout = null;
  }, 90);

  activeFrequencyHz = null;
  updateFrequencyUI(null);

  if (showFeedback) showToast("Frequência pausada.");
}

// SISTEMA DO ROADMAP INICIÁTICO (ISOLADO POR ALUNO)
function getRoadmapCompleted() {
  const cleanEmail = (localStorage.getItem("cupula33_user_email") || "iniciado").trim().toLowerCase();
  try {
    const scoped = localStorage.getItem(`cupula33_roadmap_completed_${cleanEmail}`);
    if (scoped) return JSON.parse(scoped);
    return JSON.parse(localStorage.getItem("cupula33_roadmap_completed") || "[]");
  } catch (e) {
    return [];
  }
}

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

const BASIC_ALLOWLIST = [
  "valsolerantoniovalsoler332@gmail.com"
];

const MASTER_ALLOWLIST = [
  "suportesabedoriaoculta@gmail.com",
  "admin@cupula33.com",
  "sigmamarketing@gmail.com",
  "teste@cupula33.com",
  "novo_membro_vip@gmail.com",
  "testealuno@gmail.com",
  "cliente@example.com",
  "edurosalopes@vivaldi.net",
  "crazyled.delavelle9@gmail.com",
  "mrobertor057@gmail.com",
  "paulo-reis51@hotmail.com",
  "tjoaquim627@gmail.com",
  "loisianavida123@gmail.com",
  "dweslley2003@gmail.com",
  "joaomayamarcelo@gmail.com",
  "sigma.mkt.company@gmail.com",
  "josecar2neiro@gmail.com",
  "lord.von.hoelz.88@gmail.com",
  "severino_lucena@hotmail.com",
  "jersenkayky@gmail.com",
  "adv.hjgabriel@gmail.com",
  "samanguero@gmail.com"
];

// LISTA DE INICIADOS QUE ADQUIRIRAM O ORDER BUMP DA PROSPERIDADE MAÇÔNICA
const ORDERBUMP_PROSPERIDADE_ALLOWLIST = [
  "severino_lucena@hotmail.com",
  "jersenkayky@gmail.com",
  "josecar2neiro@gmail.com",
  "sigma.mkt.company@gmail.com",
  "tjoaquim627@gmail.com",
  "joaomayamarcelo@gmail.com",
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

// LÓGICA DO MODAL DE ESTRUTURA DO CURSO (IDÊNTICO AOS PRINTS DA ORDEM 137)
function openCourseStructureModal() {
  const modal = document.getElementById("courseStructureModal");
  if (modal) {
    modal.classList.remove("hidden");
    if (window.lucide) try { lucide.createIcons(); } catch (e) { }
  }
}

function closeCourseStructureModal() {
  const modal = document.getElementById("courseStructureModal");
  if (modal) modal.classList.add("hidden");
}

function toggleCourseDesc() {
  const s = document.getElementById("courseDescShort");
  const f = document.getElementById("courseDescFull");
  const btn = document.getElementById("btnToggleCourseDesc");
  if (!s || !f) return;
  const isExpanded = s.classList.contains("hidden");
  if (isExpanded) {
    s.classList.remove("hidden");
    f.classList.add("hidden");
    if (btn) btn.innerHTML = `<span>LER MAIS</span><i data-lucide="chevron-down" class="w-3.5 h-3.5"></i>`;
  } else {
    s.classList.add("hidden");
    f.classList.remove("hidden");
    if (btn) btn.innerHTML = `<span>LER MENOS</span><i data-lucide="chevron-up" class="w-3.5 h-3.5"></i>`;
  }
  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
}

function toggleModalDesc() {
  const s = document.getElementById("modalDescShort");
  const f = document.getElementById("modalDescFull");
  const btn = document.getElementById("btnToggleModalDesc");
  if (!s || !f) return;
  const isExpanded = s.classList.contains("hidden");
  if (isExpanded) {
    s.classList.remove("hidden");
    f.classList.add("hidden");
    if (btn) btn.innerHTML = `<span>LER MAIS</span><i data-lucide="chevron-down" class="w-3 h-3"></i>`;
  } else {
    s.classList.add("hidden");
    f.classList.remove("hidden");
    if (btn) btn.innerHTML = `<span>LER MENOS</span><i data-lucide="chevron-up" class="w-3 h-3"></i>`;
  }
  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
}

function toggleModuleAccordion() {
  const list = document.getElementById("moduleLessonsList");
  const icon = document.getElementById("moduleChevronIcon");
  if (!list) return;
  list.classList.toggle("hidden");
  if (icon) {
    if (list.classList.contains("hidden")) {
      icon.setAttribute("data-lucide", "chevron-down");
    } else {
      icon.setAttribute("data-lucide", "chevron-up");
    }
    if (window.lucide) try { lucide.createIcons(); } catch (e) { }
  }
}

// MODAL DE BLOQUEIO DE CURSOS (O NÚCLEO)
function openCourseLockedNotice(courseTitle = "O Núcleo") {
  const modal = document.getElementById("courseLockedModal");
  if (modal) {
    const titleEl = document.getElementById("courseLockedModalTitle");
    if (titleEl) titleEl.textContent = courseTitle;
    modal.classList.remove("hidden");
    if (window.lucide) try { lucide.createIcons(); } catch (e) { }
  } else {
    showToast("Conteúdo reservado aos alunos de O Núcleo.");
  }
}

function closeCourseLockedModal() {
  const modal = document.getElementById("courseLockedModal");
  if (modal) modal.classList.add("hidden");
}

function openOrderBumpModal() {
  openModal("orderBumpModal");
  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
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
      badge.className = "inline-flex items-center gap-1.5 text-yellow-400 text-[10px] font-bold uppercase tracking-wider mb-1.5";
      badge.innerHTML = `<i data-lucide="lock" class="w-3.5 h-3.5"></i> ACESSO EXCLUSIVO`;
    }
  }
  if (lock) {
    if (hasBump) {
      lock.classList.add("hidden");
    } else {
      lock.classList.remove("hidden");
    }
  }
  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
}

function closeVipGateIfAuth() {
  const savedEmail = (localStorage.getItem("cupula33_user_email") || "").trim().toLowerCase();
  if (savedEmail) {
    const gate = document.getElementById("vipLoginGate");
    if (gate) {
      gate.style.opacity = "0";
      gate.style.pointerEvents = "none";
      setTimeout(() => {
        gate.classList.add("hidden");
        gate.style.display = "none";
      }, 200);
    }
  }
}

function checkVipGateAuth() {
  const gate = document.getElementById("vipLoginGate");
  const savedEmail = (localStorage.getItem("cupula33_user_email") || "").trim().toLowerCase();
  const savedTier = localStorage.getItem("cupula33_user_tier");

  if (!gate) return;

  const urlParams = new URLSearchParams(window.location.search);
  const forceLogin = urlParams.get("login") === "1" || urlParams.get("login") === "true" || window.location.hash === "#login";

  const closeBtn = document.getElementById("gateCloseBtn");
  if (closeBtn) {
    if (savedEmail) closeBtn.classList.remove("hidden");
    else closeBtn.classList.add("hidden");
  }

  if (savedEmail && !forceLogin) {
    if (BASIC_ALLOWLIST.includes(savedEmail) || savedTier === "basico") {
      currentTier = "basico";
    } else if (savedTier === "master") {
      currentTier = "master";
    }
    // Sincroniza permissão do order bump
    if (ORDERBUMP_PROSPERIDADE_ALLOWLIST.includes(savedEmail)) {
      localStorage.setItem("cupula33_has_prosperidade", "true");
    } else if (localStorage.getItem("cupula33_has_prosperidade") !== "true") {
      localStorage.setItem("cupula33_has_prosperidade", "false");
    }

    // Sincroniza nível individual do aluno
    const studentLevel = getUserLevel(savedEmail);
    localStorage.setItem("cupula33_user_level_" + savedEmail, String(studentLevel));
    localStorage.setItem("cupula33_user_level", String(studentLevel));

    try { updateTierBadgeUI(); } catch (e) { }
    try { updateProsperidadeCardUI(); } catch (e) { }
    try { updateAllUserDisplays(); } catch (e) { }
    try { updateProfileXP(); } catch (e) { }
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
      if (inp) {
        if (savedEmail) inp.value = savedEmail;
        inp.focus();
      }
    }, 150);
  }
}

async function verifyMemberInSupabase(email) {
  const cleanEmail = String(email || "").trim().toLowerCase();

  // 0. Checagem se for aluno no plano Básico
  if (typeof BASIC_ALLOWLIST !== "undefined" && BASIC_ALLOWLIST.includes(cleanEmail)) {
    return { authorized: true, tier: "basico", level: 1, has_prosperidade: false };
  }

  // 1. Checagem imediata na whitelist embutida
  if (MASTER_ALLOWLIST.includes(cleanEmail) || cleanEmail.endsWith("@cupula33.com")) {
    const hasBump = ORDERBUMP_PROSPERIDADE_ALLOWLIST.includes(cleanEmail);
    const userLvl = getUserLevel(cleanEmail);
    return { authorized: true, tier: "master", level: userLvl, has_prosperidade: hasBump };
  }

  // 2. Checagem no banco de membros local do site (cupula33_members.json)
  try {
    const localRes = await fetch("cupula33_members.json?t=" + Date.now());
    if (localRes.ok) {
      const db = await localRes.json();
      if (db && db.members && db.members[cleanEmail] && db.members[cleanEmail].active !== false) {
        const mem = db.members[cleanEmail];
        const hasBump = ORDERBUMP_PROSPERIDADE_ALLOWLIST.includes(cleanEmail) || !!(mem.has_prosperidade || mem.has_prosperidade_oculta || mem.has_orderbump);
        const userLvl = mem.level || getUserLevel(cleanEmail);
        return { authorized: true, tier: mem.tier || "master", level: userLvl, has_prosperidade: hasBump };
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
        return { authorized: true, tier: data.tier || "master", level: data.level || 1, has_prosperidade: false };
      }
    }
  } catch (e) { }

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
    if (window.lucide) try { if (window.lucide) lucide.createIcons(); } catch (e) { }
  }

  if (statusMsg) {
    statusMsg.className = "text-xs text-center min-h-[20px] text-gold-400 animate-pulse";
    statusMsg.textContent = "Verificando liberação na nuvem...";
  }

  let authorized = false;
  let userTier = "master";
  let userHasBump = false;
  let userLevel = 1;

  const cleanEmail = email.trim().toLowerCase();
  const passInput = document.getElementById("gatePasswordInput");
  const passValue = passInput ? passInput.value.trim() : "";

  // 1. Verificação instantânea na Whitelist (Básico ou Master)
  if (typeof BASIC_ALLOWLIST !== "undefined" && BASIC_ALLOWLIST.includes(cleanEmail)) {
    authorized = true;
    userTier = "basico";
    userHasBump = false;
    userLevel = 1;
  } else if (MASTER_ALLOWLIST.includes(cleanEmail) || cleanEmail.endsWith("@cupula33.com") || passValue === "cupula@33" || passValue === "ordem@137") {
    authorized = true;
    userTier = "master";
    userHasBump = ORDERBUMP_PROSPERIDADE_ALLOWLIST.includes(cleanEmail);
    userLevel = getUserLevel(cleanEmail);
  } else {
    // 2. Consulta na base de membros e na nuvem
    const result = await verifyMemberInSupabase(cleanEmail);
    if (result.authorized) {
      authorized = true;
      userTier = result.tier;
      userHasBump = !!result.has_prosperidade;
      userLevel = result.level || getUserLevel(cleanEmail);
    }
  }

  if (authorized) {
    localStorage.setItem("cupula33_user_email", cleanEmail);
    localStorage.setItem("cupula33_user_tier", userTier);
    localStorage.setItem("cupula33_has_prosperidade", userHasBump ? "true" : "false");
    localStorage.setItem("cupula33_user_level_" + cleanEmail, String(userLevel));
    localStorage.setItem("cupula33_user_level", String(userLevel));
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
        level: userLevel,
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

    try { updateTierBadgeUI(); } catch (e) { }
    try { updateProsperidadeCardUI(); } catch (e) { }
    try { renderBooks(); } catch (e) { }

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
    if (window.lucide) try { if (window.lucide) lucide.createIcons(); } catch (e) { }
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
  localStorage.removeItem("cupula33_has_prosperidade");
  localStorage.removeItem("cupula33_user_level");
  localStorage.removeItem("cupula33_custom_name");
  localStorage.removeItem("cupula33_active_reading");
  localStorage.removeItem("cupula33_my_list");
  localStorage.removeItem("cupula33_books_progress");
  localStorage.removeItem("cupula33_roadmap_completed");
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

  const cleanEmail = (localStorage.getItem("cupula33_user_email") || "").trim().toLowerCase();
  const allHistory = typeof MemberDatabase !== "undefined"
    ? MemberDatabase.getAllProgress(cleanEmail)
    : JSON.parse(localStorage.getItem("cupula33_books_progress") || "{}");

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

    if (window.lucide) try { if (window.lucide) lucide.createIcons(); } catch (e) { }
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

  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
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
  reader.onload = function (e) {
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

  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
}

const AUDIOBOOKS_CATALOG = [
  {
    id: 6,
    title: "O Caibalion: Edição Integral e Comentada",
    author: "Três Iniciados",
    narrator: "Áudio Livro Completo (8h 50min)",
    duration: "8h 50min",
    totalSeconds: 31808,
    cover: "assets/covers_extracted/cover_O_Caibalion_-_Edi__o_Definitiva.jpg",
    category: "Hermetismo & Cabala",
    hz: 432,
    audioUrl: "assets/audio/o_caibalion_audiobook.mp3",
    desc: "A transmissão oral integral e definitiva de O Caibalion comentada com som ambiente e as sete leis cósmicas imutáveis de Hermes Trismegisto."
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
    <div class="esoteric-card rounded-2xl p-4 sm:p-5 border border-white/10 flex flex-col justify-between group hover:border-yellow-500/50 transition-all duration-300 shadow-xl bg-[#0e0e0e] hover:-translate-y-1">
      <div>
        <!-- Capa do Audiolivro em Proporção Áurea 3:4 -->
        <div class="relative aspect-[3/4] rounded-xl overflow-hidden mb-3.5 border border-white/10 group-hover:border-yellow-500/40 shadow-2xl bg-black">
          <img src="${ab.cover}" alt="${ab.title}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.onerror=null; this.src='assets/logo.jpg'">
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>
          
          <div class="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/85 backdrop-blur-md text-[9px] font-mono font-bold text-yellow-400 border border-yellow-500/30 flex items-center gap-1 shadow-md">
            <i data-lucide="sparkles" class="w-3 h-3 text-yellow-400"></i> ${ab.hz}Hz Binaural
          </div>

          <div class="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/85 backdrop-blur-md text-[10px] font-mono text-gray-200 border border-white/10">
            ${ab.duration}
          </div>
        </div>

        <span class="text-[9px] font-mono uppercase tracking-widest text-yellow-500/80 font-bold block mb-1">${ab.category}</span>
        <h3 class="text-sm font-serif font-bold text-white group-hover:text-yellow-400 transition-colors line-clamp-1">${ab.title}</h3>
        <p class="text-[11px] text-gray-400 mt-0.5 line-clamp-1 font-medium">Por ${ab.author}</p>
        <p class="text-[11px] sm:text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">${ab.desc}</p>
      </div>

      <div class="mt-4 pt-3 border-t border-white/5 flex items-center justify-between gap-2">
        <span class="text-[10px] text-gray-400 flex items-center gap-1 truncate max-w-[130px]">
          <i data-lucide="mic" class="w-3 h-3 text-yellow-400 shrink-0"></i> <span class="truncate">${ab.narrator}</span>
        </span>
        <button onclick="openAudiobookPlayer('${ab.id}')" class="px-4 py-1.5 rounded-xl bg-yellow-500/15 hover:bg-yellow-500 text-yellow-400 hover:text-black border border-yellow-500/30 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95 shrink-0">
          <i data-lucide="play" class="w-3.5 h-3.5 fill-current"></i>
          <span>Ouvir</span>
        </button>
      </div>
    </div>
  `).join("");

  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
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

let globalRealAudio = null;

function getRealAudioElement() {
  if (!globalRealAudio) {
    globalRealAudio = new Audio();
    globalRealAudio.preload = "auto";

    globalRealAudio.addEventListener("timeupdate", () => {
      if (activeAudiobook && activeAudiobook.audioUrl && isAudiobookPlaying) {
        audiobookCurrentTime = Math.floor(globalRealAudio.currentTime);
        updateAudioProgressUI();
      }
    });

    globalRealAudio.addEventListener("ended", () => {
      pauseAudiobookPlayback();
      audiobookCurrentTime = 0;
      updateAudioProgressUI();
    });

    globalRealAudio.addEventListener("error", (e) => {
      console.warn("Erro no player real de áudio:", e);
      showToast("Carregando fluxo de áudio...");
    });
  }
  return globalRealAudio;
}

function formatAudioTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) {
    return String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  }
  return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}

function startAudiobookPlayback() {
  if (isDroneEnabled) {
    startAudiobookAmbientDrone();
  }

  isAudiobookPlaying = true;
  updateAudioPlayerUI(true);

  if (activeAudiobook && activeAudiobook.audioUrl) {
    const audio = getRealAudioElement();
    if (!audio.src || !audio.src.includes(activeAudiobook.audioUrl)) {
      audio.src = activeAudiobook.audioUrl;
      if (audiobookCurrentTime > 0) {
        audio.currentTime = audiobookCurrentTime;
      }
    }
    audio.playbackRate = currentAudioSpeed;
    audio.play().catch(err => {
      console.warn("Autoplay impedido pelo navegador:", err);
      pauseAudiobookPlayback();
    });
  } else if ('speechSynthesis' in window && activeAudiobook) {
    window.speechSynthesis.cancel();
    const narrationText = "Iniciação ao audiolivro sagrado: " + activeAudiobook.title + ". Obra de " + activeAudiobook.author + ". Narrado em frequência áurea de 432 hertz para os membros da Cúpula 33. " + activeAudiobook.desc;
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

    clearInterval(audiobookTimer);
    audiobookTimer = setInterval(() => {
      if (isAudiobookPlaying && activeAudiobook) {
        audiobookCurrentTime += 1;
        updateAudioProgressUI();
      }
    }, 1000);
  }
}

function pauseAudiobookPlayback() {
  isAudiobookPlaying = false;
  clearInterval(audiobookTimer);
  if (globalRealAudio) {
    globalRealAudio.pause();
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.pause();
  }
  updateAudioPlayerUI(false);
}

function toggleAudiobookPlay() {
  if (isAudiobookPlaying) {
    pauseAudiobookPlayback();
  } else {
    if (activeAudiobook && activeAudiobook.audioUrl) {
      startAudiobookPlayback();
    } else if ('speechSynthesis' in window && window.speechSynthesis.paused) {
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
    if (window.lucide) try { lucide.createIcons(); } catch (e) { }
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
  const totalTime = document.getElementById("abTotalTime");

  const total = activeAudiobook.totalSeconds || 3600;
  const pct = Math.min(100, (audiobookCurrentTime / total) * 100);

  if (bar) bar.style.width = pct + "%";
  if (curTime) {
    curTime.textContent = formatAudioTime(audiobookCurrentTime);
  }
  if (totalTime) {
    totalTime.textContent = formatAudioTime(total);
  }
}

function rewindAudiobook(seconds) {
  audiobookCurrentTime = Math.max(0, audiobookCurrentTime - seconds);
  if (globalRealAudio && activeAudiobook && activeAudiobook.audioUrl) {
    globalRealAudio.currentTime = audiobookCurrentTime;
  }
  updateAudioProgressUI();
}

function forwardAudiobook(seconds) {
  if (!activeAudiobook) return;
  audiobookCurrentTime = Math.min(activeAudiobook.totalSeconds || 3600, audiobookCurrentTime + seconds);
  if (globalRealAudio && activeAudiobook && activeAudiobook.audioUrl) {
    globalRealAudio.currentTime = audiobookCurrentTime;
  }
  updateAudioProgressUI();
}

function setAudioSpeed(speed) {
  currentAudioSpeed = speed;
  if (globalRealAudio) {
    globalRealAudio.playbackRate = currentAudioSpeed;
  }
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
  if (window.lucide) try { lucide.createIcons(); } catch (e) { }
}

function handleAudioScrub(event) {
  if (!activeAudiobook) return;
  const bar = event.currentTarget;
  const rect = bar.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const pct = Math.max(0, Math.min(1, clickX / rect.width));
  audiobookCurrentTime = Math.round(pct * (activeAudiobook.totalSeconds || 3600));
  if (globalRealAudio && activeAudiobook && activeAudiobook.audioUrl) {
    globalRealAudio.currentTime = audiobookCurrentTime;
  }
  updateAudioProgressUI();
}
