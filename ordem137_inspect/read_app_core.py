with open("/Users/sigmamarketing/Desktop/cupula33/app/index.html", "r", encoding="utf-8") as f:
    lines = f.readlines()

print(f"Total lines in index.html: {len(lines)}")
# Vamos ver onde começa o header principal e a biblioteca
for i, line in enumerate(lines):
    if 'id="tab-books"' in line or 'mainLibraryView' in line:
        print(f"Line {i+1}: {line.strip()}")
