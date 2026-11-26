import json
import os
import re

# 1. Run update_html_pdfjs.py first
import subprocess
subprocess.run(["python3", "update_html_pdfjs.py"], check=True)

# 2. Build LOCAL_PDF_MAP from local files in app/livros_pdf/
local_files = [f for f in os.listdir('app/livros_pdf') if f.endswith('.pdf')]

def normalize(name):
    name = re.sub(r'^[0-9]+_', '', name)
    name = re.sub(r'\.pdf$', '', name, flags=re.IGNORECASE)
    name = re.sub(r'[^a-zA-Z0-9]', '', name).lower()
    return name

norm_files = {normalize(f): f for f in local_files}

with open('app/app.js', 'r', encoding='utf-8') as f:
    text = f.read()

p = text.find('const booksData = [')
p2 = text.find('];\n\n// 2. LOTES', p)
books = json.loads(text[p + len('const booksData = '):p2+1])

pdf_map = {}
for b in books:
    t_norm = normalize(b['title'])
    found = None
    if t_norm in norm_files:
        found = norm_files[t_norm]
    else:
        for nf, orig in norm_files.items():
            if len(t_norm) > 5 and (t_norm in nf or nf in t_norm):
                found = orig
                break
    if found:
        pdf_map[b['id']] = 'livros_pdf/' + found

# Ensure key books are explicitly mapped
pdf_map[36] = "livros_pdf/04_O_Livro_de_Enoque_Completo.pdf"
pdf_map[32] = "livros_pdf/01_O_Livro_de_Enoque_Completo.pdf"
pdf_map[999] = "livros_pdf/Manuscrito_Maconico_da_Prosperidade_Oculta.pdf"
pdf_map[1] = "livros_pdf/10_A_Tabua_de_Esmeralda_Hermes_Trismegisto.pdf"
pdf_map[6] = "livros_pdf/01_O_Caibalion_Tres_Iniciados.pdf"
pdf_map[37] = "livros_pdf/Pistis_Sophia.pdf"

print(f"Generated LOCAL_PDF_MAP with {len(pdf_map)} mapped books.")

# 3. Write PDF.js setup and reader logic
new_reader_engine = f'''// ==========================================
// MOTOR NATIVO PDF.JS COM SCROLL CONTÍNUO (ESTILO ORDEM 137)
// ==========================================
if (typeof pdfjsLib !== "undefined") {{
  pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
}}

const LOCAL_PDF_MAP = {json.dumps(pdf_map, indent=2, ensure_ascii=False)};

let currentPdfDoc = null;
let currentRenderObserver = null;
let currentScrollObserver = null;
let saveProgressDebounceTimer = null;
let currentReaderPage = 1;

async function openReaderModal(book, startPage) {{
  if (startPage === undefined) {{
    const saved = getSavedProgress(book.id);
    startPage = saved ? saved.page : 1;
  }}
  closeModal("bookModal");
  currentBookModalData = book;
  currentReaderPage = startPage;

  const rTitle = document.getElementById("readerTitle");
  if (rTitle) rTitle.textContent = book.title;

  updateReaderDisplay(book, startPage);
  openModal("readerModal");

  // Resolver URL do PDF (Prioridade: Mapeamento Local com CORS -> Fallback Drive)
  let targetUrl = book.pdfUrl;
  if (LOCAL_PDF_MAP[book.id]) {{
    targetUrl = LOCAL_PDF_MAP[book.id];
  }} else if (book.id === 36 || (book.title && book.title.toLowerCase().includes("enoque"))) {{
    targetUrl = "livros_pdf/04_O_Livro_de_Enoque_Completo.pdf";
  }} else if (book.id === 999 || (book.title && book.title.toLowerCase().includes("prosperidade"))) {{
    targetUrl = "livros_pdf/Manuscrito_Maconico_da_Prosperidade_Oculta.pdf";
  }} else if (book.id === 1 || (book.title && book.title.toLowerCase().includes("esmeralda"))) {{
    targetUrl = "livros_pdf/10_A_Tabua_de_Esmeralda_Hermes_Trismegisto.pdf";
  }} else if (book.id === 6 || (book.title && book.title.toLowerCase().includes("caibalion"))) {{
    targetUrl = "livros_pdf/01_O_Caibalion_Tres_Iniciados.pdf";
  }}

  const isLocalPDF = targetUrl && !targetUrl.includes("drive.google.com");

  const nativeContainer = document.getElementById("readerNativeContainer");
  const iframe = document.getElementById("readerIframe");
  const spinner = document.getElementById("readerLoadingSpinner");

  if (isLocalPDF && typeof pdfjsLib !== "undefined") {{
    // MODO NATIVO COM SCROLL CONTÍNUO (ESTILO ORDEM 137)
    if (iframe) {{
      iframe.classList.add("hidden");
      iframe.src = "";
    }}
    if (nativeContainer) nativeContainer.classList.remove("hidden");
    
    await renderNativePDF(targetUrl, startPage);
  }} else {{
    // FALLBACK DRIVE (IFRAME)
    if (nativeContainer) nativeContainer.classList.add("hidden");
    if (spinner) spinner.classList.add("hidden");
    if (iframe) {{
      iframe.classList.remove("hidden");
      let driveUrl = targetUrl;
      if (driveUrl.includes("drive.google.com")) {{
        if (driveUrl.includes("/view")) {{
          driveUrl = driveUrl.replace(/\\/view(\\?.*)?$/, "/preview");
        }} else if (!driveUrl.includes("/preview")) {{
          driveUrl = driveUrl.replace(/\\?.*$/, "") + "/preview";
        }}
      }}
      iframe.src = driveUrl;
    }}
    saveReadingProgress(book.id, startPage, book.pages);
  }}
}}

async function renderNativePDF(pdfUrl, startPage = 1) {{
  const container = document.getElementById("readerNativeContainer");
  const spinner = document.getElementById("readerLoadingSpinner");
  const spinnerText = document.getElementById("readerLoadingText");
  if (!container) return;

  if (spinner) {{
    if (spinnerText) spinnerText.textContent = "Carregando páginas do manuscrito...";
    spinner.classList.remove("hidden");
  }}

  // Limpa observers anteriores e conteúdo
  if (currentRenderObserver) currentRenderObserver.disconnect();
  if (currentScrollObserver) currentScrollObserver.disconnect();
  container.innerHTML = "";

  try {{
    const loadingTask = pdfjsLib.getDocument({{
      url: pdfUrl,
      cMapUrl: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/cmaps/",
      cMapPacked: true
    }});

    currentPdfDoc = await loadingTask.promise;
    const numPages = currentPdfDoc.numPages;
    if (currentBookModalData) currentBookModalData.pages = numPages;

    updateReaderDisplay(currentBookModalData, startPage);

    const renderedPages = new Set();
    const pageContainers = [];

    // Obter proporção da página 1
    const samplePage = await currentPdfDoc.getPage(1);
    const sampleViewport = samplePage.getViewport({{ scale: 1 }});
    const aspectRatio = sampleViewport.height / sampleViewport.width;

    // Criar placeholders estruturados para cada página
    for (let p = 1; p <= numPages; p++) {{
      const pageDiv = document.createElement("div");
      pageDiv.id = `pdf-page-wrapper-${{p}}`;
      pageDiv.dataset.pageNumber = p;
      pageDiv.className = "pdf-page-wrapper relative w-full max-w-[850px] mx-auto rounded-xl shadow-2xl bg-[#141414] border border-white/5 overflow-hidden flex items-center justify-center transition-opacity duration-300";
      pageDiv.style.aspectRatio = `1 / ${{aspectRatio.toFixed(3)}}`;

      pageDiv.innerHTML = `
        <div class="page-placeholder text-center text-gray-500 font-mono text-xs flex flex-col items-center gap-2 p-6">
          <div class="w-6 h-6 border-2 border-yellow-500/20 border-t-yellow-500 rounded-full animate-spin"></div>
          <span>Página ${{p}} de ${{numPages}}</span>
        </div>
      `;

      container.appendChild(pageDiv);
      pageContainers.push(pageDiv);
    }}

    if (spinner) spinner.classList.add("hidden");

    // Renderiza uma página específica em canvas HD
    async function renderPageCanvas(pageNum, pageDiv) {{
      if (renderedPages.has(pageNum)) return;
      renderedPages.add(pageNum);

      try {{
        const page = await currentPdfDoc.getPage(pageNum);
        const containerWidth = Math.min(850, window.innerWidth > 640 ? window.innerWidth - 64 : window.innerWidth - 16);
        const scale = (containerWidth / page.getViewport({{ scale: 1 }}).width) * (window.devicePixelRatio || 1);
        const viewport = page.getViewport({{ scale: Math.max(1, scale) }});

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.className = "w-full h-full object-contain rounded-xl";

        const renderContext = {{
          canvasContext: ctx,
          viewport: viewport
        }};

        await page.render(renderContext).promise;

        pageDiv.innerHTML = "";
        pageDiv.appendChild(canvas);
        pageDiv.style.aspectRatio = "";
      }} catch (err) {{
        console.error("Erro ao renderizar página " + pageNum, err);
      }}
    }}

    // Renderizar imediatamente as páginas ao redor de startPage
    const initialPages = [startPage, startPage + 1, startPage + 2, 1, 2].filter(p => p <= numPages);
    initialPages.forEach(p => {{
      const div = document.getElementById(`pdf-page-wrapper-${{p}}`);
      if (div) renderPageCanvas(p, div);
    }});

    // Observer Lazy para renderizar conforme chega perto da tela
    currentRenderObserver = new IntersectionObserver((entries) => {{
      entries.forEach(entry => {{
        if (entry.isIntersecting) {{
          const pageNum = parseInt(entry.target.dataset.pageNumber);
          renderPageCanvas(pageNum, entry.target);
        }}
      }});
    }}, {{
      root: container,
      rootMargin: "800px 0px 800px 0px"
    }});

    pageContainers.forEach(div => currentRenderObserver.observe(div));

    // Observer de Rolagem para atualizar progresso (Igual ao Ordem 137)
    currentScrollObserver = new IntersectionObserver((entries) => {{
      entries.forEach(entry => {{
        if (entry.isIntersecting) {{
          const pageNum = parseInt(entry.target.dataset.pageNumber);
          currentReaderPage = pageNum;
          updateReaderDisplay(currentBookModalData, pageNum);

          clearTimeout(saveProgressDebounceTimer);
          saveProgressDebounceTimer = setTimeout(() => {{
            saveReadingProgress(currentBookModalData.id, pageNum, numPages);
          }}, 350);
        }}
      }});
    }}, {{
      root: container,
      threshold: 0.5
    }});

    pageContainers.forEach(div => currentScrollObserver.observe(div));

    // Se começou numa página mais adiantada, rola até ela
    if (startPage > 1 && startPage <= numPages) {{
      setTimeout(() => {{
        const targetDiv = document.getElementById(`pdf-page-wrapper-${{startPage}}`);
        if (targetDiv) {{
          targetDiv.scrollIntoView({{ behavior: "smooth", block: "start" }});
        }}
      }}, 300);
    }}

  }} catch (err) {{
    console.error("Erro ao carregar PDF via PDF.js:", err);
    if (spinner) spinner.classList.add("hidden");
    showToast("Abrindo modo de leitura alternativo...");
    const iframe = document.getElementById("readerIframe");
    if (iframe) {{
      container.classList.add("hidden");
      iframe.classList.remove("hidden");
      iframe.src = pdfUrl;
    }}
  }}
}}

function updateReaderDisplay(book, page) {{
  const total = book.pages || 100;
  const pct = Math.min(100, Math.round((page / total) * 100));

  const rProgressLabel = document.getElementById("readerProgressLabel");
  const rProgressBar = document.getElementById("readerProgressBar");

  if (rProgressLabel) {{
    rProgressLabel.textContent = "Página " + page + " de " + total + " • " + pct + "% Concluído";
  }}
  if (rProgressBar) {{
    rProgressBar.style.width = pct + "%";
  }}
}}

function changeReaderPage(delta) {{
  if (!currentBookModalData) return;
  const total = currentBookModalData.pages || 100;
  currentReaderPage = Math.max(1, Math.min(total, currentReaderPage + delta));
  
  updateReaderDisplay(currentBookModalData, currentReaderPage);
  saveReadingProgress(currentBookModalData.id, currentReaderPage, total);

  // Se estiver no leitor nativo, rola suavemente até a página
  const pageDiv = document.getElementById(`pdf-page-wrapper-${{currentReaderPage}}`);
  if (pageDiv) {{
    pageDiv.scrollIntoView({{ behavior: "smooth", block: "start" }});
  }}
}}

function adjustReaderPage(delta) {{
  changeReaderPage(delta);
}}

function markCurrentBookCompleted() {{
  if (!currentBookModalData) return;
  const total = currentBookModalData.pages || 100;
  currentReaderPage = total;
  
  updateReaderDisplay(currentBookModalData, total);
  saveReadingProgress(currentBookModalData.id, total, total);
  showToast("Parabéns! Obra concluída e +50 XP adicionados ao seu grau!");
}}

function closeReaderModal() {{
  if (currentRenderObserver) currentRenderObserver.disconnect();
  if (currentScrollObserver) currentScrollObserver.disconnect();
  const iframe = document.getElementById("readerIframe");
  if (iframe) iframe.src = "";
  const container = document.getElementById("readerNativeContainer");
  if (container) container.innerHTML = "";
  closeModal("readerModal");
}}

function bookmarkCurrentPage() {{
  if (!currentBookModalData) return;
  saveReadingProgress(currentBookModalData.id, currentReaderPage, currentBookModalData.pages);
  showToast("Marcador gravado: pág. " + currentReaderPage + " de " + currentBookModalData.pages + "!");
}}
'''

# Replace reader logic in app.js
p_start = text.find('let currentReaderPage = 1;')
p_end = text.find('// SISTEMA DE MARCACAO', p_start)

if p_start != -1 and p_end != -1:
    text = text[:p_start] + new_reader_engine + "\n" + text[p_end:]
    print("Replaced reader logic in app.js with Native PDF.js Suite")

with open('app/app.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("Saved app/app.js successfully!")
