with open("/Users/sigmamarketing/Desktop/cupula33/app/app.js", "r", encoding="utf-8") as f:
    js = f.read()

# 1. Atualizar switchTab para as 6 abas
new_switch_tab = """
let isSidebarCollapsed = false;

function toggleSidebarCollapse() {
  const sidebar = document.getElementById("desktopSidebar");
  const main = document.getElementById("mainContainer");
  const icon = document.getElementById("sidebarChevronIcon");
  if (!sidebar) return;

  isSidebarCollapsed = !isSidebarCollapsed;
  if (isSidebarCollapsed) {
    sidebar.classList.add("-translate-x-full");
    if (main) main.classList.remove("md:pl-60");
    if (icon) icon.setAttribute("data-lucide", "chevron-right");
  } else {
    sidebar.classList.remove("-translate-x-full");
    if (main) main.classList.add("md:pl-60");
    if (icon) icon.setAttribute("data-lucide", "chevron-left");
  }
  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

function switchTab(tabName) {
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
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}

function publishCommunityPost() {
  const input = document.getElementById("communityPostInput");
  const feed = document.getElementById("communityFeedContainer");
  if (!input || !feed) return;

  const text = input.value.trim();
  if (!text) {
    showToast("Digite algo para publicar na comunidade.");
    return;
  }

  const currentEmail = (localStorage.getItem("cupula33_user_email") || "paulo-reis51@hotmail.com").trim().toLowerCase();
  const userName = (typeof KNOWN_STUDENT_NAMES !== "undefined" && KNOWN_STUDENT_NAMES[currentEmail]) || "Iniciado da Cúpula";
  const initial = userName.charAt(0).toUpperCase();

  const newPostHTML = `
    <div class="esoteric-card rounded-2xl p-5 border border-white/10 animate-fade-in">
      <div class="flex items-center gap-3 mb-2.5">
        <div class="w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold text-xs">${initial}</div>
        <div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-white">${userName}</span>
            <span class="text-[9px] px-1.5 py-0.5 rounded bg-yellow-500/20 text-yellow-400 font-mono font-bold">NÍVEL 1</span>
          </div>
          <span class="text-[10px] text-gray-500">Agora mesmo</span>
        </div>
      </div>
      <p class="text-xs text-gray-200 mt-2">${text}</p>
      <div class="flex items-center gap-4 mt-4 pt-3 border-t border-white/5 text-gray-500 text-xs">
        <button onclick="this.classList.toggle('text-yellow-400')" class="flex items-center gap-1 hover:text-yellow-400 transition"><i data-lucide="heart" class="w-3.5 h-3.5"></i> 0</button>
        <button class="flex items-center gap-1 hover:text-white transition"><i data-lucide="message-square" class="w-3.5 h-3.5"></i> 0</button>
      </div>
    </div>
  `;

  feed.insertAdjacentHTML("afterbegin", newPostHTML);
  input.value = "";
  showToast("Publicado na comunidade!");
  if (window.lucide) try { lucide.createIcons(); } catch(e) {}
}
"""

# Substituir o switchTab existente
pos_switch = js.find("function switchTab(tabName) {")
if pos_switch != -1:
    pos_end_switch = js.find("window.scrollTo({ top: 0", pos_switch)
    pos_end_switch = js.find("}", pos_end_switch) + 1
    js = js[:pos_switch] + new_switch_tab + "\n" + js[pos_end_switch:]
    print("[+] switchTab atualizado para as 6 abas completas!")

# 2. Atualizar createBookCardHTML para usar Amarelo/Dourado em vez de vermelho
js = js.replace("#D2042D", "#eab308")
js = js.replace("bg-esoteric-red", "bg-yellow-500")
js = js.replace("text-esoteric-red", "text-yellow-400")
js = js.replace("border-esoteric-red", "border-yellow-500")

with open("/Users/sigmamarketing/Desktop/cupula33/app/app.js", "w", encoding="utf-8") as f:
    f.write(js)

print("[+] app.js atualizado com paleta amarela e suporte total às 6 telas!")
