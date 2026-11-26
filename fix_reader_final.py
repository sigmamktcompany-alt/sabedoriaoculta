import json
import re

# 1. Update app/app.css with guaranteed modal display and hidden rules
with open("app/app.css", "r", encoding="utf-8") as f:
    css = f.read()

modal_css = '''
/* Garantia de exibição do Leitor e Modais */
.hidden {
  display: none !important;
}

#readerModal {
  position: fixed !important;
  inset: 0 !important;
  z-index: 10000 !important;
  background-color: #000000 !important;
}

#bookModal {
  z-index: 9990 !important;
}

#vipLoginGate {
  z-index: 20000 !important;
}
'''

if "#readerModal" not in css:
    css += "\n" + modal_css
    with open("app/app.css", "w", encoding="utf-8") as f:
        f.write(css)
    print("Updated app/app.css with modal z-index and .hidden rules")

# 2. Update app/index.html for cover names and Ler button
with open("app/index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Fix cover_O_Livro_de_Enoque.jpg to cover_O_Livro_De_Enoque.jpg (case sensitive)
html = html.replace("cover_O_Livro_de_Enoque.jpg", "cover_O_Livro_De_Enoque.jpg")

# Fix missing Evola cover to valid cover
html = html.replace("cover_A_Tradi__o_Herm_tica__Julius_Evola.jpg", "cover_Livro_Grandes_Mulheres_na_Tradi__o_Rosacruz.jpg")

# Ensure Hero Ler button calls openReaderModalDirect(36)
html = html.replace('onclick="handleBookClick(36)"', 'onclick="openReaderModalDirect(36)"')

with open("app/index.html", "w", encoding="utf-8") as f:
    f.write(html)
print("Updated app/index.html")

# 3. Update app/app.js
with open("app/app.js", "r", encoding="utf-8") as f:
    js = f.read()

# Add renderCollections if missing
if "function renderCollections()" not in js:
    render_col_code = '''
function renderCollections() {
  const container = document.getElementById("collectionsList") || document.getElementById("collectionsContainer");
  if (!container || typeof collectionsData === "undefined") return;

  container.innerHTML = collectionsData.map(col => `
    <div onclick="handleCollectionClick('${col.id}')" class="esoteric-card rounded-2xl p-5 border border-white/10 flex items-center justify-between cursor-pointer hover:border-yellow-500/50 transition-all group">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400 shrink-0 group-hover:scale-105 transition-transform">
          <i data-lucide="${col.icon || 'crown'}" class="w-6 h-6"></i>
        </div>
        <div class="text-left">
          <h4 class="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">${col.title}</h4>
          <p class="text-xs text-gray-400">${col.subtitle || col.desc || ''}</p>
          <div class="flex items-center gap-2 mt-1 text-[10px] text-gray-500">
            <span>${col.count}</span>
            <span>•</span>
            <span>${col.size}</span>
          </div>
        </div>
      </div>
      <i data-lucide="download" class="w-4 h-4 text-gray-500 group-hover:text-yellow-400 transition-colors"></i>
    </div>
  `).join("");

  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}
'''
    p_books = js.find('function renderBooks()')
    if p_books != -1:
        js = js[:p_books] + render_col_code + "\n" + js[p_books:]
        print("Added renderCollections() function")

# Add openReaderModalDirect function
if "function openReaderModalDirect" not in js:
    direct_code = '''
function openReaderModalDirect(bookId) {
  const book = booksData.find(b => b.id == bookId);
  if (!book) return;
  openReaderModal(book);
}
'''
    p_open_reader = js.find('async function openReaderModal(')
    if p_open_reader != -1:
        js = js[:p_open_reader] + direct_code + "\n" + js[p_open_reader:]
        print("Added openReaderModalDirect() function")

# Update openModal and closeModal to explicitly handle style.display
old_open_modal = '''function openModal(modalId) {
  if (modalId === "profileModal") {
    loadUserProfile();
  }
  const m = document.getElementById(modalId);
  if (m) m.classList.remove("hidden");
}

function closeModal(modalId) {
  const m = document.getElementById(modalId);
  if (m) m.classList.add("hidden");
}'''

new_open_modal = '''function openModal(modalId) {
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
}'''

if old_open_modal in js:
    js = js.replace(old_open_modal, new_open_modal)
    print("Replaced openModal and closeModal with explicit display control")

# Enhance openReaderModal to accept both book object and bookId
old_open_sig = 'async function openReaderModal(book, startPage) {'
new_open_sig = '''async function openReaderModal(book, startPage) {
  if (typeof book === "number" || typeof book === "string") {
    book = booksData.find(b => b.id == book);
  }
  if (!book) return;'''

if old_open_sig in js and 'if (typeof book === "number"' not in js:
    js = js.replace(old_open_sig, new_open_sig)
    print("Enhanced openReaderModal signature to accept ID or Object")

# Also enhance display toggles inside openReaderModal
old_reader_toggle = '''    if (iframe) {
      iframe.classList.add("hidden");
      iframe.src = "";
    }
    if (nativeContainer) nativeContainer.classList.remove("hidden");'''

new_reader_toggle = '''    if (iframe) {
      iframe.classList.add("hidden");
      iframe.style.display = "none";
      iframe.src = "";
    }
    if (nativeContainer) {
      nativeContainer.classList.remove("hidden");
      nativeContainer.style.display = "flex";
    }'''

if old_reader_toggle in js:
    js = js.replace(old_reader_toggle, new_reader_toggle)

old_fallback_toggle = '''    // FALLBACK DRIVE (IFRAME)
    if (nativeContainer) nativeContainer.classList.add("hidden");
    if (spinner) spinner.classList.add("hidden");
    if (iframe) {
      iframe.classList.remove("hidden");'''

new_fallback_toggle = '''    // FALLBACK DRIVE (IFRAME)
    if (nativeContainer) {
      nativeContainer.classList.add("hidden");
      nativeContainer.style.display = "none";
    }
    if (spinner) {
      spinner.classList.add("hidden");
      spinner.style.display = "none";
    }
    if (iframe) {
      iframe.classList.remove("hidden");
      iframe.style.display = "block";'''

if old_fallback_toggle in js:
    js = js.replace(old_fallback_toggle, new_fallback_toggle)

with open("app/app.js", "w", encoding="utf-8") as f:
    f.write(js)

print("Saved app/app.js")
