with open("app/app.js", "r", encoding="utf-8") as f:
    code = f.read()

p_start = code.find('let currentReaderPage = 1;')
p_end = code.find('// SISTEMA DE MARCACAO', p_start)

new_reader = '''let currentReaderPage = 1;

function openReaderModal(book, startPage) {
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

  let targetUrl = book.pdfUrl;
  if (targetUrl.includes("drive.google.com")) {
    if (targetUrl.includes("/view")) {
      targetUrl = targetUrl.replace(/\\/view(\\?.*)?$/, "/preview");
    } else if (!targetUrl.includes("/preview")) {
      targetUrl = targetUrl.replace(/\\?.*$/, "") + "/preview";
    }
  }

  const finalUrl = startPage > 1 ? (targetUrl.split('#')[0] + "#page=" + startPage) : targetUrl;
  const iframe = document.getElementById("readerIframe");
  if (iframe) iframe.src = finalUrl;

  saveReadingProgress(book.id, startPage, book.pages);
  openModal("readerModal");
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
  const iframe = document.getElementById("readerIframe");
  if (iframe) iframe.src = "";
  closeModal("readerModal");
}

function bookmarkCurrentPage() {
  if (!currentBookModalData) return;
  saveReadingProgress(currentBookModalData.id, currentReaderPage, currentBookModalData.pages);
  showToast("Marcador gravado: pág. " + currentReaderPage + " de " + currentBookModalData.pages + "!");
}
'''

if p_start != -1 and p_end != -1:
    code = code[:p_start] + new_reader + "\n" + code[p_end:]
    print("Fixed reader functions in app.js")

with open("app/app.js", "w", encoding="utf-8") as f:
    f.write(code)
