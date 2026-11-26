import urllib.request
import re

url = "https://ordem137.online/assets/index-B5RLPrGA.js"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req) as resp:
    content = resp.read().decode("utf-8", errors="ignore")

urls = re.findall(r"https://ajczjcjbsuvxrfdumwow\.supabase\.co[^\s\"\'\`]+", content)
print("Supabase URLs count:", len(urls))
print("Sample:", set(urls[:10]))

# Search for reader component code
pos = content.find("react-pdf")
if pos != -1:
    print("\nSnippet around react-pdf:")
    print(content[pos-100:pos+300])

# Search for onScroll or IntersectionObserver in reader
for m in re.finditer(r"IntersectionObserver|onScroll", content):
    p = m.start()
    snippet = content[max(0, p-60):p+140]
    if "page" in snippet.lower() or "pdf" in snippet.lower():
        print("\nReader Scroll snippet:", snippet)
        break
