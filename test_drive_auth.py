import subprocess
import os

RCLONE = "/Users/sigmamarketing/Desktop/brainsyncproject.com-main/rclone"

# Testar se conseguimos listar arquivos na pasta compartilhada 1dnrxEJ2MYXHpmgWY_ZUr5AW4ReRORl79
cmd = [RCLONE, "lsjson", "--drive-root-folder-id", "1dnrxEJ2MYXHpmgWY_ZUr5AW4ReRORl79", "gdrive:"]
res = subprocess.run(cmd, capture_output=True, text=True)
print("Returncode:", res.returncode)
print("Stdout:", res.stdout[:200])
print("Stderr:", res.stderr[:200])
