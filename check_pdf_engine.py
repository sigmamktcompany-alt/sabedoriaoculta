import urllib.request

url = "https://ordem137.online/assets/index-B5RLPrGA.js"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req) as resp:
    content = resp.read().decode("utf-8", errors="ignore")

pos = content.find('PDF carregado, páginas:')
if pos != -1:
    print(content[pos-300:pos+1500])
