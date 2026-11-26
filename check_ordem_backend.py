import urllib.request
import re
import json

try:
    req = urllib.request.Request("https://ordem137.online", headers={"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"})
    html = urllib.request.urlopen(req).read().decode("utf-8")
    print("Homepage HTML length:", len(html))
    print("HTML script tags:")
    for s in re.findall(r'<script[^>]*src="([^"]+)"', html):
        print("  script src:", s)
except Exception as e:
    print("Error fetching HTML:", e)

with open("ordem137_inspect/index.js", "r", encoding="utf-8") as f:
    js = f.read()

sb_urls = set(re.findall(r'https://[a-zA-Z0-9-]+\.supabase\.co[^\s"\'`)]*', js))
print("\nSupabase URLs:", sb_urls)

tokens = set(re.findall(r'eyJ[a-zA-Z0-9_-]{15,}\.[a-zA-Z0-9_-]{15,}\.[a-zA-Z0-9_-]{15,}', js))
print("JWT / Keys found in JS:", len(tokens))
for t in tokens:
    print("  Token/Anon key:", t[:30] + "..." + t[-15:])

# Search for login or auth method
auth_matches = re.findall(r'signInWithPassword\s*\(\s*\{[^}]+\}', js)
print("\nsignInWithPassword matches:", auth_matches)

# Search for tables queried (e.g. .from("...") or similar)
from_tables = set(re.findall(r'\.from\s*\(\s*["\']([a-zA-Z0-9_-]+)["\']\s*\)', js))
print("\nSupabase tables (.from):", from_tables)
