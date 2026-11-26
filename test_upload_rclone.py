import subprocess
import os

RCLONE = "/Users/sigmamarketing/Desktop/brainsyncproject.com-main/rclone"
FOLDER_ID = "1dnrxEJ2MYXHpmgWY_ZUr5AW4ReRORl79"

# Criar um arquivo de teste pequeno
test_file = "/Users/sigmamarketing/Desktop/cupula33/teste_upload.txt"
with open(test_file, "w") as f:
    f.write("Cupula 33 - Teste de Upload Oficial")

cmd = [RCLONE, "copyto", test_file, f"gdrive:{{{FOLDER_ID}}}/teste_upload.txt"]
print("Executando:", " ".join(cmd))
res = subprocess.run(cmd, capture_output=True, text=True)
print("Returncode:", res.returncode)
print("Stdout:", res.stdout)
print("Stderr:", res.stderr)
