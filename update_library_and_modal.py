import re

with open("/Users/sigmamarketing/Desktop/cupula33/app/index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Novo conteúdo completo para #tab-books
new_tab_books = """    <!-- ==================== ABA 1: BIBLIOTECA (ESTILO ORDEM 137) ==================== -->
    <section id="tab-books" class="app-tab-section">
      
      <!-- HEADER DA BIBLIOTECA -->
      <div class="px-4 sm:px-8 py-6">
        <div class="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          
          <!-- Título Dinâmico com Barra Vermelha Ordem 137 -->
          <div class="flex items-center space-x-4">
            <button id="libraryBackBtn" onclick="returnToDefaultLibrary()" class="hidden p-2.5 bg-white/5 rounded-full hover:bg-[#D2042D] hover:text-white transition-colors text-gray-400 cursor-pointer">
              <i data-lucide="arrow-left" class="w-5 h-5"></i>
            </button>
            <h1 id="libraryMainTitle" class="text-2xl sm:text-3xl font-serif text-white border-l-4 border-[#D2042D] pl-4 font-bold tracking-tight">
              Biblioteca
            </h1>
          </div>

          <!-- Barra de Ferramentas / Busca & Navegação -->
          <div class="flex items-center gap-2.5 w-full md:w-auto">
            
            <!-- Campo de Busca em Pílula -->
            <div class="relative flex-1 md:w-80">
              <i data-lucide="search" class="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
              <input type="text" id="searchInput" oninput="handleSearchInput(this.value)" placeholder="Buscar livros, autores ou temas..." class="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-10 text-white placeholder-gray-500 focus:outline-none focus:border-[#D2042D]/50 focus:ring-1 focus:ring-[#D2042D]/50 transition-all text-xs sm:text-sm">
              <button id="clearSearchBtn" onclick="clearSearch()" class="hidden absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white cursor-pointer">
                <i data-lucide="x" class="w-4 h-4"></i>
              </button>
            </div>

            <!-- Botão Grade de Categorias / Vias de Estudo -->
            <button onclick="toggleCategoriesView()" id="btnToggleCategories" class="p-2.5 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:border-[#D2042D]/50 transition-all cursor-pointer" title="Navegar por Categorias">
              <i data-lucide="layout-grid" class="w-5 h-5"></i>
            </button>

            <!-- Botão Minha Lista -->
            <button onclick="openMyList()" id="btnToggleMyList" class="p-2.5 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-[#D2042D] hover:bg-white/10 hover:border-[#D2042D]/50 transition-all cursor-pointer" title="Minha Lista">
              <i data-lucide="bookmark" class="w-5 h-5"></i>
            </button>

          </div>
        </div>

        <!-- 1. SUB-VIEW STREAMING / NETFLIX (PADRÃO ORDEM 137) -->
        <div id="libraryStreamingView" class="space-y-10 animate-fade-in">
          
          <!-- Carrossel: Continuar Lendo (Aparece se houver progresso) -->
          <div id="sectionContinueReading" class="hidden">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-xl font-serif text-white font-bold flex items-center gap-2">
                <i data-lucide="clock" class="w-5 h-5 text-[#D2042D]"></i> Continuar Lendo
              </h2>
            </div>
            <div id="continueReadingCarousel" class="flex overflow-x-auto gap-4 pb-4 hide-scrollbar scroll-smooth snap-x">
              <!-- Injetado dinamicamente via JS -->
            </div>
          </div>

          <!-- Carrossel: Destaques & Manuscritos Raros -->
          <div id="sectionFeaturedBooks">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-xl font-serif text-white font-bold flex items-center gap-2">
                <i data-lucide="sparkles" class="w-5 h-5 text-[#D2042D]"></i> Manuscritos em Destaque
              </h2>
              <span class="text-xs text-gray-500 uppercase tracking-widest font-mono">Acervo Oficial</span>
            </div>
            <div id="featuredBooksCarousel" class="flex overflow-x-auto gap-4 pb-4 hide-scrollbar scroll-smooth snap-x">
              <!-- Injetado dinamicamente via JS -->
            </div>
          </div>

          <!-- Fileiras Horizontais dos 6 Módulos Oficiais -->
          <div id="moduleRowsContainer" class="space-y-10">
            <!-- Injetado dinamicamente com as 6 fileiras via JS -->
          </div>

          <!-- Lotes & Coleções Completas do Drive (Cânone 500 & Master 2.500) -->
          <div class="pt-8 border-t border-white/10">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
              <div>
                <span class="text-[10px] font-bold text-[#D2042D] uppercase tracking-widest block mb-1">DOWNLOAD EM MASSA</span>
                <h3 class="font-cinzel font-bold text-xl text-white flex items-center gap-2">
                  <i data-lucide="archive" class="w-5 h-5 text-[#D2042D]"></i> Lotes dos 6 Módulos (Google Drive Oficial)
                </h3>
                <p class="text-xs text-gray-400 mt-1">Acesso direto às pastas organizadas dos 6 módulos no Google Drive para download em lote.</p>
              </div>
            </div>
            <div id="collectionsGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <!-- Injetado dinamicamente via renderCollections -->
            </div>
          </div>

        </div>

        <!-- 2. SUB-VIEW CATEGORIAS ("SELECIONE UMA VIA DE ESTUDO") -->
        <div id="libraryCategoriesView" class="hidden animate-fade-in">
          <p class="text-gray-400 mb-6 font-medium">Selecione uma via de estudo:</p>
          <div id="categoriesGrid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <!-- Injetado dinamicamente via JS -->
          </div>
        </div>

        <!-- 3. SUB-VIEW DETALHE DA CATEGORIA (GRID COMPLETO) -->
        <div id="libraryCategoryDetailView" class="hidden animate-fade-in">
          <div id="categoryDetailBooksGrid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 sm:gap-6">
            <!-- Injetado dinamicamente via JS -->
          </div>
        </div>

        <!-- 4. SUB-VIEW RESULTADOS DA BUSCA -->
        <div id="librarySearchResultsView" class="hidden animate-fade-in">
          <p class="text-gray-400 text-sm mb-6">Resultados para: <span id="searchResultTerm" class="text-[#D2042D] font-bold"></span></p>
          <div id="searchResultsGrid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 sm:gap-6">
            <!-- Injetado dinamicamente via JS -->
          </div>
        </div>

        <!-- 5. SUB-VIEW MINHA LISTA (LIVROS SALVOS) -->
        <div id="libraryMyListView" class="hidden animate-fade-in">
          <div id="myListBooksGrid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 sm:gap-6">
            <!-- Injetado dinamicamente via JS -->
          </div>
        </div>

      </div>

    </section>
"""

# Substituir o #tab-books antigo
tab_books_start = html.find('<!-- ==================== ABA 1: BIBLIOTECA')
if tab_books_start == -1:
    tab_books_start = html.find('<section id="tab-books"')

tab_freq_start = html.find('<!-- ==================== ABA 2: SANTUÁRIO DE FREQUÊNCIAS')
if tab_freq_start == -1:
    tab_freq_start = html.find('<section id="tab-frequencies"')

if tab_books_start != -1 and tab_freq_start != -1:
    html = html[:tab_books_start] + new_tab_books + "\n\n" + html[tab_freq_start:]
    print("[+] #tab-books substituído pelo padrão Ordem 137!")

# Novo Modal de Detalhes do Livro (Padrão Bk Ordem 137)
new_book_modal = """  <!-- ==================== MODAL DE DETALHES DO LIVRO (ESTILO ORDEM 137) ==================== -->
  <div id="bookModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md hidden animate-fade-in">
    <div class="absolute inset-0" onclick="closeModal('bookModal')"></div>
    
    <div class="relative bg-[#141414] w-full max-w-4xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col md:flex-row max-h-[90vh] z-10 text-left">
      
      <!-- Botão Fechar -->
      <button onclick="closeModal('bookModal')" class="absolute top-4 right-4 z-20 p-2 bg-black/60 rounded-full text-white hover:bg-[#D2042D] transition-colors cursor-pointer">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>

      <!-- Capa em Destaque no Lado Esquerdo -->
      <div class="w-full md:w-2/5 h-64 md:h-auto relative bg-black shrink-0 overflow-hidden">
        <img id="modalBookCover" src="" alt="Capa da Obra" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#141414]"></div>
      </div>

      <!-- Conteúdo e Ações no Lado Direito -->
      <div class="flex-1 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
        <div>
          <!-- Módulo e Páginas -->
          <div class="flex items-center space-x-2 text-[#D2042D] text-xs font-bold uppercase tracking-widest mb-2">
            <span id="modalBookCategory">Módulo I: Hermetismo & Cabala</span>
            <span>•</span>
            <span id="modalBookPages">127 páginas</span>
          </div>

          <!-- Título da Obra -->
          <h2 id="modalBookTitle" class="text-2xl md:text-3xl font-serif text-white font-bold mb-1 leading-snug">
            Título da Obra
          </h2>

          <!-- Autor e Raridade -->
          <p id="modalBookAuthor" class="text-gray-400 text-xs mb-4">Por Acervo Cúpula 33</p>

          <!-- Barra de Progresso de Leitura -->
          <div id="modalProgressContainer" class="mb-5 bg-white/5 border border-white/10 p-3 rounded-xl">
            <div class="flex justify-between items-center mb-1.5 text-xs">
              <span class="text-gray-400 font-bold uppercase tracking-wider text-[10px]">Progresso da Leitura</span>
              <span id="modalProgressPercent" class="text-[#D2042D] font-mono font-bold text-xs">0%</span>
            </div>
            <div class="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div id="modalProgressBar" class="h-full bg-[#D2042D] shadow-[0_0_8px_rgba(210,4,45,0.8)] transition-all duration-300" style="width: 0%"></div>
            </div>
          </div>

          <!-- Descrição e Sinopse -->
          <div class="text-xs text-gray-300 leading-relaxed space-y-2 mb-6">
            <p id="modalBookDesc">Tratado autêntico preservado em língua portuguesa.</p>
          </div>
        </div>

        <!-- Ações do Livro (Ler Obra, Baixar PDF, Minha Lista) -->
        <div class="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
          
          <button id="modalBtnRead" onclick="triggerReadModalFromDetails()" class="w-full sm:flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-[#D2042D] via-red-600 to-[#D2042D] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-900/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
            <i data-lucide="book-open" class="w-4 h-4"></i>
            <span>Ler Obra Completa</span>
          </button>

          <button id="modalBtnDownload" onclick="triggerDownloadFromDetails()" class="w-full sm:w-auto py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer" title="Baixar PDF">
            <i data-lucide="download" class="w-4 h-4"></i>
            <span>Baixar PDF</span>
          </button>

          <button id="modalBtnBookmark" onclick="toggleCurrentBookMyList()" class="w-full sm:w-auto py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-[#D2042D] text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer" title="Minha Lista">
            <i id="modalBookmarkIcon" data-lucide="bookmark" class="w-4 h-4"></i>
            <span id="modalBookmarkText">Salvar</span>
          </button>

        </div>

      </div>

    </div>
  </div>
"""

# Substituir o #bookModal antigo
book_modal_start = html.find('<!-- ==================== MODAL DE LEITURA, BOOKMARK & AUDIOBOOK')
if book_modal_start == -1:
    book_modal_start = html.find('<div id="bookModal"')

reader_modal_start = html.find('<!-- ==================== LEITOR DE PDF MODAL')
if reader_modal_start == -1:
    reader_modal_start = html.find('<div id="readerModal"')

if book_modal_start != -1 and reader_modal_start != -1:
    html = html[:book_modal_start] + new_book_modal + "\n\n  " + html[reader_modal_start:]
    print("[+] #bookModal atualizado para o padrão Ordem 137!")

with open("/Users/sigmamarketing/Desktop/cupula33/app/index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Etapa 2 concluída com sucesso!")
