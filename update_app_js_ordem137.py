with open("/Users/sigmamarketing/Desktop/cupula33/app/app.js", "r", encoding="utf-8") as f:
    js = f.read()

new_logic = """
// ==========================================
// ORDEM 137 ENGINE - BIBLIOTECA, STREAMING & MINHA LISTA
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
let currentBookModalData = null;

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
    btn.className = "w-full sm:w-auto py-3 px-4 rounded-xl bg-[#D2042D]/20 border border-[#D2042D]/60 text-[#D2042D] text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer";
    if (text) text.textContent = "Salvo na Lista";
    if (icon) icon.className = "w-4 h-4 fill-[#D2042D]";
  } else {
    btn.className = "w-full sm:w-auto py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-[#D2042D] text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer";
    if (text) text.textContent = "Salvar";
    if (icon) icon.className = "w-4 h-4";
  }
  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

// Criação do Card de Livro Estilo Ordem 137
function createBookCardHTML(book, isCarousel) {
  const isLocked = currentTier === "basico" && book.tier === "master";
  const savedProg = getSavedProgress(book.id);
  const progPercent = savedProg && book.pages ? Math.min(100, Math.round((savedProg.page / book.pages) * 100)) : 0;
  
  const containerClass = isCarousel 
    ? "flex-none w-[145px] sm:w-[165px] cursor-pointer group snap-start select-none"
    : "cursor-pointer group select-none";

  return `
    <div onclick="handleBookClick(${book.id})" class="${containerClass}">
      
      <!-- Container da Capa com Aspect Ratio 2:3 -->
      <div class="relative aspect-[2/3] rounded-xl overflow-hidden mb-2.5 border border-white/10 group-hover:border-[#D2042D] shadow-lg shadow-black/60 transition-all bg-[#0d0d0d]">
        <img src="${book.cover}" alt="${book.title}" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${isLocked ? 'grayscale opacity-50' : ''}">
        
        <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>

        <!-- Badges Superiores -->
        <div class="absolute top-2 left-2 z-20 flex flex-col gap-1 items-start">
          ${!isLocked && book.id <= 15 ? `
            <div class="bg-[#D2042D] text-white text-[9px] font-black px-2 py-0.5 rounded shadow-lg uppercase tracking-wider">
              NOVO
            </div>
          ` : ''}

          ${progPercent > 0 ? `
            <div class="bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 flex items-center shadow-lg">
              <span class="w-1.5 h-1.5 rounded-full bg-[#D2042D] mr-1.5 animate-pulse"></span>
              <span class="text-[9px] font-bold text-white tracking-wider">${progPercent}%</span>
            </div>
          ` : ''}
        </div>

        ${isLocked ? `
          <div class="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-2 text-center">
            <i data-lucide="lock" class="text-white/80 w-7 h-7 mb-1"></i>
            <span class="text-[9px] font-black text-amber-300 uppercase tracking-wider">Master</span>
          </div>
        ` : ''}

        <!-- Barra de Progresso no Rodapé da Capa -->
        ${progPercent > 0 ? `
          <div class="absolute bottom-0 left-0 w-full h-1 bg-gray-900/80">
            <div class="h-full bg-[#D2042D] shadow-[0_0_8px_rgba(210,4,45,0.8)]" style="width: ${progPercent}%"></div>
          </div>
        ` : ''}
      </div>

      <!-- Título & Autor -->
      <h3 class="text-xs sm:text-sm font-medium truncate text-white group-hover:text-[#D2042D] transition-colors leading-snug">
        ${book.title}
      </h3>
      <p class="text-gray-500 text-[11px] truncate mt-0.5">
        ${book.author}
      </p>
    </div>
  `;
}

// Orquestrador de Renderização da Biblioteca
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

// 1. Renderiza o Modo Streaming (Carrosséis Netflix / Ordem 137)
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
        (b.module && b.module.toLowerCase() === mod.code.toLowerCase()) ||
        (b.category && b.category.toLowerCase().includes(mod.name.toLowerCase()))
      );

      if (modBooks.length === 0) return '';

      return `
        <div>
          <div class="flex items-center justify-between mb-3.5 group cursor-pointer" onclick="openCategoryDetail('${mod.name}')">
            <h2 class="text-lg sm:text-xl font-serif text-white group-hover:text-[#D2042D] transition-colors flex items-center gap-2">
              <span class="text-xs font-mono font-bold text-[#D2042D]">${mod.code}</span>
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
      (b.module && b.module.toLowerCase() === mod.code.toLowerCase()) ||
      (b.category && b.category.toLowerCase().includes(mod.name.toLowerCase()))
    ).length;

    return `
      <div onclick="openCategoryDetail('${mod.name}')" class="group relative h-36 overflow-hidden rounded-2xl border border-white/10 bg-[#141414] hover:border-[#D2042D]/50 transition-all text-left p-6 flex flex-col justify-end cursor-pointer shadow-lg">
        <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:text-[#D2042D] transition-all">
          <i data-lucide="${mod.icon}" class="w-14 h-14"></i>
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        <div class="relative z-10">
          <span class="text-[10px] font-mono font-bold text-[#D2042D] tracking-widest block uppercase">${mod.code}</span>
          <h3 class="text-lg font-serif font-bold text-white group-hover:text-[#D2042D] transition-colors mt-0.5">${mod.name}</h3>
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

  const filtered = booksData.filter(b => 
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
          <button onclick="clearSearch()" class="mt-4 px-4 py-2 rounded-xl bg-white/5 text-[#D2042D] border border-[#D2042D]/40 text-xs font-bold hover:bg-[#D2042D] hover:text-white transition">
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
        <button onclick="returnToDefaultLibrary()" class="mt-5 px-5 py-2.5 rounded-xl bg-[#D2042D]/20 text-[#D2042D] border border-[#D2042D]/40 text-xs font-bold hover:bg-[#D2042D] hover:text-white transition">
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

// Modal do Livro (Padrão Bk Ordem 137)
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
  const page = saved ? saved.page : 1;
  openReaderModal(currentBookModalData, page);
}

function triggerDownloadFromDetails() {
  if (!currentBookModalData) return;
  triggerDownload(currentBookModalData);
}

// Atualização de Informações do Membro no Sidebar e Telas
function updateSidebarUserInfo() {
  const currentEmail = (localStorage.getItem("cupula33_user_email") || "paulo-reis51@hotmail.com").trim().toLowerCase();
  const name = (typeof KNOWN_STUDENT_NAMES !== "undefined" && KNOWN_STUDENT_NAMES[currentEmail]) || "Iniciado da Cúpula";
  const tier = (localStorage.getItem("cupula33_user_tier") || "master") === "master" ? "Membro Master" : "Membro Básico";

  const sName = document.getElementById("sidebarUserName");
  const sTier = document.getElementById("sidebarTierLabel");
  if (sName) sName.textContent = name;
  if (sTier) sTier.textContent = tier;
}

// Integrar no carregamento inicial
window.addEventListener("DOMContentLoaded", () => {
  try {
    updateSidebarUserInfo();
  } catch(e) {}
});
"""

# Substituir a antiga renderBooks até openBookModal por esta nova suíte completa
start_marker = "function renderBooks() {"
end_marker = "function handleBookClick(bookId) {"

idx_start = js.find(start_marker)
idx_end = js.find(end_marker)

if idx_start != -1 and idx_end != -1:
    js = js[:idx_start] + new_logic + "\n" + js[idx_end:]
    with open("/Users/sigmamarketing/Desktop/cupula33/app/app.js", "w", encoding="utf-8") as f:
        f.write(js)
    print("✅ app.js atualizado com o motor visual completo da Ordem 137!")
else:
    print("⚠️ Marcadores não encontrados em app.js")

