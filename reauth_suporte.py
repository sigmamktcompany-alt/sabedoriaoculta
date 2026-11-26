import subprocess
import time

RCLONE = "/Users/sigmamarketing/Desktop/brainsyncproject.com-main/rclone"

# Configurar um novo remote chamado 'suporte_drive' do tipo drive
# Vamos chamar o rclone config reconnect com browser
cmd = [RCLONE, "config", "reconnect", "gdrive:"]
p = subprocess.Popen(cmd)
print("[*] Aguardando abertura da janela de login do Google no Chrome...")
