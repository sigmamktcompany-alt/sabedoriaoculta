import configparser
import os

token_str = '{"access_token":"ya29.a0AehfTOmvidaCRBs2iAcWMacFHjLT0wGlufZHSPLh2X0KO3RXCTiay0Vl5paRBXHgabcwKzkFCy93DzvdFjmOiGwdLSQ_hX8r5T3NFJgxDHthQcGEqoJfC8_dvrj13O0wij9MrYWOYLu-rNZm51nQp6ZK-PZznCn0pwre8XeNWVodJE7QxXuB5gqBfhcucN9s8q6k6tMaCgYKAXUSARQSFQHGX2MiIP8UlmXiIsdBIq7qXVhHyw0206","token_type":"Bearer","refresh_token":"1//0hlz9wmslgsKICgYIARAAGBESSQF-L9IrsIRdPccYXmqqnKky_zsB6LYswKAo-tCYTIw1sPO6vDX-DxDWk4gG3O41EU-W7-cZLJr-ezOa5DHpLkyybVbIyBJiK2E","expiry":"2026-11-22T19:52:40.805343-05:00","expires_in":3599}'

conf_path = os.path.expanduser("~/.config/rclone/rclone.conf")
os.makedirs(os.path.dirname(conf_path), exist_ok=True)

conf_content = f"""[suporte_drive]
type = drive
scope = drive
token = {token_str}

[gdrive]
type = drive
scope = drive
token = {token_str}
"""

with open(conf_path, "w") as f:
    f.write(conf_content)

print("[+] Token da conta suportesabedoriaoculta gravado com sucesso no rclone!")
