with open('app/app.js', 'r') as f:
    content = f.read()

# 1. Update switchTab alias
content = content.replace(
    'function switchTab(tabName) {\n  const allTabs = ["home", "library", "audiobooks", "courses", "community", "profile"];',
    'function switchTab(tabName) {\n  if (tabName === "books") tabName = "library";\n  const allTabs = ["home", "library", "audiobooks", "courses", "community", "profile"];'
)

# 2. Update CANONICAL_MODULES filtering in moduleRowsContainer and renderCategoriesGrid
old_mod_filter = '(b.module && b.module.toLowerCase() === mod.code.toLowerCase()) ||\n        (b.category && b.category.toLowerCase().includes(mod.name.toLowerCase()))'
new_mod_filter = '(b.module && (b.module.toLowerCase().includes(mod.code.toLowerCase()) || b.module.toLowerCase().includes(mod.name.toLowerCase()))) ||\n        (b.category && b.category.toLowerCase().includes(mod.name.toLowerCase()))'
content = content.replace(old_mod_filter, new_mod_filter)

old_cat_filter = '(b.module && b.module.toLowerCase() === mod.code.toLowerCase()) ||\n      (b.category && b.category.toLowerCase().includes(mod.name.toLowerCase()))'
new_cat_filter = '(b.module && (b.module.toLowerCase().includes(mod.code.toLowerCase()) || b.module.toLowerCase().includes(mod.name.toLowerCase()))) ||\n      (b.category && b.category.toLowerCase().includes(mod.name.toLowerCase()))'
content = content.replace(old_cat_filter, new_cat_filter)

# 3. Update handleBookClick and add openBookDetailsModal
old_handle_book = '''function handleBookClick(bookId) {
  const all = getAllBooks();
  const book = all.find(b => String(b.id) === String(bookId));
  if (!book) {
    console.warn("Livro não encontrado com ID:", bookId);
    return;
  }

  currentBookModalData = book;
  openBookModal(book);
}'''

new_handle_book = '''function handleBookClick(bookId) {
  // Toque direto no livro abre a leitura imediatamente (sem barreiras ou etapas extras)
  openReaderModalDirect(bookId);
}

function openBookDetailsModal(bookId) {
  const all = getAllBooks();
  const book = all.find(b => String(b.id) === String(bookId));
  if (!book) return;
  currentBookModalData = book;
  openBookModal(book);
}'''
content = content.replace(old_handle_book, new_handle_book)

# 4. Update createBookCardHTML to add info button
old_card_badge = '''        <!-- Badges Superiores -->
        <div class="absolute top-2.5 left-2.5 z-20 flex flex-col gap-1 items-start">'''

new_card_badge = '''        <!-- Botão de Detalhes (i) -->
        <button type="button" onclick="event.stopPropagation(); openBookDetailsModal('${book.id}')" class="absolute top-2.5 right-2.5 z-20 w-7 h-7 rounded-full bg-black/75 hover:bg-[#D4AF37] hover:text-black text-gray-300 border border-white/20 flex items-center justify-center transition-all shadow-md active:scale-90 cursor-pointer" title="Ver Detalhes da Obra">
          <i data-lucide="info" class="w-3.5 h-3.5"></i>
        </button>

        <!-- Badges Superiores -->
        <div class="absolute top-2.5 left-2.5 z-20 flex flex-col gap-1 items-start">'''

content = content.replace(old_card_badge, new_card_badge)

# 5. Update openReaderModalDirect and openReaderModal
old_direct = '''function openReaderModalDirect(bookId) {
  const book = booksData.find(b => b.id == bookId);
  if (!book) return;
  openReaderModal(book);
}

async function openReaderModal(book, startPage) {
  if (typeof book === "number" || typeof book === "string") {
    book = booksData.find(b => b.id == book);
  }'''

new_direct = '''function openReaderModalDirect(bookId) {
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
  }'''

content = content.replace(old_direct, new_direct)

# 6. Add getSignedSupabaseUrl
signed_helper = '''
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
'''

content = content.replace('let cachedOrdemToken = null;', signed_helper + '\nlet cachedOrdemToken = null;')

# 7. Update renderNativePDF logic for signed URL streaming
old_pdf_param = '''    if (pdfUrl.includes("supabase.co")) {
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
    }'''

new_pdf_param = '''    if (pdfUrl.includes("/object/sign/")) {
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
    }'''

content = content.replace(old_pdf_param, new_pdf_param)

with open('app/app.js', 'w') as f:
    f.write(content)

print("app.js updated successfully!")
