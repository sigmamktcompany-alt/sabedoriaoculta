import subprocess
import os

RCLONE = "/Users/sigmamarketing/Desktop/brainsyncproject.com-main/rclone"
ROOT = "suporte_drive:Cúpula 33 - Acervo Completo 2500 Obras"

modules = [
    "Módulo I - Hermetismo & Cabala",
    "Módulo II - Grimórios & Alta Magia",
    "Módulo III - Gnosticismo & Apócrifos",
    "Módulo IV - Alquimia & Transmutação",
    "Módulo V - Sociedades Secretas",
    "Módulo VI - Mente & Projeção Astral"
]

print("[*] Criando estrutura das pastas dos 6 módulos no Drive do suporte...")
for m in modules:
    target = f"{ROOT}/{m}"
    cmd = [RCLONE, "mkdir", target]
    res = subprocess.run(cmd, capture_output=True, text=True)
    print(f"  ✓ Pasta criada: {m} (Code: {res.returncode})")

