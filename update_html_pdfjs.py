import json
import os
import re

# 1. Update index.html to include PDF.js and the native reader container
with open("app/index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Add PDF.js script tag if not present
if "pdf.min.js" not in html:
    pdf_script = '<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"></script>\n  '
    html = html.replace('<script src="app.js', pdf_script + '<script src="app.js')
    print("Added PDF.js script tags to index.html")

# Replace readerModal body in index.html
old_reader_body = '''    <div class="flex-1 w-full h-full relative bg-black">
      <iframe id="readerIframe" src="" class="w-full h-full border-0" allow="fullscreen"></iframe>
    </div>'''

new_reader_body = '''    <!-- Container dos Visualizadores (Nativo PDF.js com Scroll Contínuo vs Fallback Drive) -->
    <div class="flex-1 w-full h-full relative bg-[#0d0d0d] overflow-hidden flex flex-col items-center">
      <!-- Spinner de Carregamento -->
      <div id="readerLoadingSpinner" class="hidden absolute inset-0 bg-black/85 z-20 flex flex-col items-center justify-center gap-3">
        <div class="w-10 h-10 border-4 border-yellow-500/20 border-t-yellow-500 rounded-full animate-spin"></div>
        <span class="text-xs text-yellow-400 font-mono font-bold" id="readerLoadingText">Renderizando manuscrito sagrado...</span>
      </div>

      <!-- Leitor Nativo PDF.js com Scroll Contínuo e IntersectionObserver -->
      <div id="readerNativeContainer" class="w-full h-full overflow-y-auto px-2 sm:px-4 py-8 space-y-6 flex flex-col items-center hide-scrollbar scroll-smooth">
        <!-- Páginas renderizadas dinamicamente aqui -->
      </div>

      <!-- Fallback de Iframe (Google Drive) -->
      <iframe id="readerIframe" src="" class="hidden w-full h-full border-0" allow="fullscreen"></iframe>
    </div>'''

if old_reader_body in html:
    html = html.replace(old_reader_body, new_reader_body)
    print("Replaced readerModal body in index.html")
else:
    print("Warning: old_reader_body not matched exactly")

with open("app/index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Updated index.html successfully!")
