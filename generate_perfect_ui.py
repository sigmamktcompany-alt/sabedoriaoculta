import re

print("="*60)
print("Gerando app com layout idêntico às capturas:")
print("Cores: Amarelo / Dourado (#eab308 / #f59e0b) + Dark (#000000 / #0a0a0a)")
print("Logo: Cúpula 33 (assets/logo.jpg)")
print("="*60)

# 1. ATUALIZAR APP.CSS
app_css_content = """@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-accent: #eab308;
  --color-accent-hover: #ca8a04;
  --color-accent-glow: rgba(234, 179, 8, 0.4);
  --bg-dark: #000000;
  --sidebar-width: 250px;
}

body {
  background-color: #000000;
  color: #e5e5e5;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}

/* Custom Scrollbar - Padrão Ordem com Amarelo */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: #0a0a0a;
}
::-webkit-scrollbar-thumb {
  background: #262626;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #eab308;
}

/* Hide scrollbar utility */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Painéis e cards escuros */
.esoteric-card {
  background-color: #121212;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.esoteric-card-hover {
  transition: all 0.25s ease;
}
.esoteric-card-hover:hover {
  border-color: rgba(234, 179, 8, 0.5);
  box-shadow: 0 0 20px rgba(234, 179, 8, 0.15);
}

/* Animações suaves */
.animate-fade-in {
  animation: fadeIn 0.25s ease-out forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-slide-up {
  animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Ondas sonoras do player */
.wave-bar {
  display: inline-block;
  width: 3px;
  height: 12px;
  background-color: #eab308;
  margin: 0 1.5px;
  border-radius: 2px;
  animation: wave 1.2s infinite ease-in-out;
}
.wave-bar:nth-child(1) { animation-delay: 0.1s; }
.wave-bar:nth-child(2) { animation-delay: 0.3s; }
.wave-bar:nth-child(3) { animation-delay: 0.2s; }
.wave-bar:nth-child(4) { animation-delay: 0.45s; }
.wave-bar:nth-child(5) { animation-delay: 0.15s; }

@keyframes wave {
  0%, 100% { height: 6px; opacity: 0.4; }
  50% { height: 22px; opacity: 1; }
}
"""

with open("/Users/sigmamarketing/Desktop/cupula33/app/app.css", "w", encoding="utf-8") as f:
    f.write(app_css_content)
print("[+] app/app.css atualizado com paleta Amarelo/Dourado e Dark!")

