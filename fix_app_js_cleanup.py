with open("/Users/sigmamarketing/Desktop/cupula33/app/app.js", "r", encoding="utf-8") as f:
    js = f.read()

# 1. Atualizar switchTab para manter sidebar desktop sincronizado
old_switch = """function switchTab(tabName) {
  const tabs = ["books", "frequencies", "roadmap"];
  tabs.forEach(t => {
    const sec = document.getElementById("tab-" + t);
    const navBtn = document.getElementById("navBtn-" + t);
    const tabBtn = document.getElementById("tabBtn-" + t);

    if (t === tabName) {
      if (sec) sec.classList.remove("hidden");
      if (navBtn) navBtn.classList.add("nav-active");
      if (tabBtn) {
        tabBtn.classList.add("tab-active");
        tabBtn.classList.remove("text-gray-400");
      }
    } else {
      if (sec) sec.classList.add("hidden");
      if (navBtn) navBtn.classList.remove("nav-active");
      if (tabBtn) {
        tabBtn.classList.remove("tab-active");
        tabBtn.classList.add("text-gray-400");
      }
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
  if (window.lucide) try { if (window.lucide) lucide.createIcons(); } catch(e) {}
}"""

new_switch = """function switchTab(tabName) {
  const tabs = ["books", "frequencies", "roadmap"];
  tabs.forEach(t => {
    const sec = document.getElementById("tab-" + t);
    const navBtn = document.getElementById("navBtn-" + t);
    const tabBtn = document.getElementById("tabBtn-" + t);
    const sideBtn = document.getElementById("sideNav-" + t);

    if (t === tabName) {
      if (sec) sec.classList.remove("hidden");
      if (navBtn) navBtn.className = "flex flex-col items-center gap-1 text-[#D2042D] text-[10px] font-bold py-1";
      if (tabBtn) {
        tabBtn.classList.add("tab-active");
        tabBtn.classList.remove("text-gray-400");
      }
      if (sideBtn) {
        sideBtn.className = "w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-bold text-white bg-white/5 border border-[#D2042D]/50 transition-all text-left";
        const icon = sideBtn.querySelector("i, svg");
        if (icon) icon.className = "w-4 h-4 text-[#D2042D]";
      }
    } else {
      if (sec) sec.classList.add("hidden");
      if (navBtn) navBtn.className = "flex flex-col items-center gap-1 text-gray-400 text-[10px] font-medium py-1";
      if (tabBtn) {
        tabBtn.classList.remove("tab-active");
        tabBtn.classList.add("text-gray-400");
      }
      if (sideBtn) {
        sideBtn.className = "w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all text-left";
        const icon = sideBtn.querySelector("i, svg");
        if (icon) icon.className = "w-4 h-4 text-gray-400";
      }
    }
  });

  const sideCat = document.getElementById("sideNav-categories");
  const sideList = document.getElementById("sideNav-mylist");
  if (tabName !== "books") {
    if (sideCat) sideCat.className = "w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all text-left";
    if (sideList) sideList.className = "w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all text-left";
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}"""

if old_switch in js:
    js = js.replace(old_switch, new_switch, 1)
    print("[+] switchTab atualizado para sincronizar sidebar!")

# 2. Remover a segunda ocorrência antiga de openBookModal
target_old_modal = """// ABRIR MODAL DO LIVRO
function openBookModal(book) {
  document.getElementById("modalBookTitle").textContent = book.title;
  document.getElementById("modalBookAuthor").textContent = "Por " + book.author;
  document.getElementById("modalBookCategory").textContent = (book.module || 'Módulo') + " • " + book.category;
  document.getElementById("modalBookPages").textContent = book.pages + " páginas";
  document.getElementById("modalBookRarity").textContent = book.rarity;
  document.getElementById("modalBookDesc").textContent = book.desc;
  document.getElementById("modalBookCover").src = book.cover;
  document.getElementById("modalBookTier").textContent = book.tier === "basico" ? "Liberado (Básico e Master)" : "Acervo Master";

  // Audiobook info
  document.getElementById("audiobookTitle").textContent = "Audiobook: " + book.title;
  document.getElementById("audiobookStatus").textContent = "Narração em português com frequência áurea 432Hz";

  // Configurar input de página e limites
  const pageInput = document.getElementById("modalPageInput");
  const maxPages = document.getElementById("modalMaxPages");
  if (pageInput) pageInput.max = book.pages;
  if (maxPages) maxPages.textContent = book.pages;

  // Carregar progresso salvo se existir
  const saved = getSavedProgress(book.id);
  const curPage = saved ? saved.page : 1;
  if (pageInput) pageInput.value = curPage;
  updateModalProgressDisplay(curPage, book.pages);

  // Configurar botões de ação
  const downloadBtn = document.getElementById("modalDownloadBtn");
  downloadBtn.onclick = () => triggerDownload(book);

  const readOnlineBtn = document.getElementById("modalReadOnlineBtn");
  readOnlineBtn.onclick = () => {
    const pInput = document.getElementById("modalPageInput");
    const p = pInput ? (parseInt(pInput.value) || 1) : curPage;
    openReaderModal(book, p);
  };

  // Resetar modo para PDF
  switchModalTab("pdf");

  openModal("bookModal");
}"""

if target_old_modal in js:
    js = js.replace(target_old_modal, "// Antigo modal substituído pelo padrão Ordem 137\n", 1)
    print("[+] Antigo openBookModal removido com sucesso!")

with open("/Users/sigmamarketing/Desktop/cupula33/app/app.js", "w", encoding="utf-8") as f:
    f.write(js)

print("Ajustes concluídos!")
