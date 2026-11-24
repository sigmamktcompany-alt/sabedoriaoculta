"""
Template Oficial de E-mail de Boas-Vindas & Acesso Cúpula 33
Design: Premium Dark & Gold Esotérico / Alta Conversão
"""

def render_cupula_email(
    name="Iniciado",
    email="",
    password="cupula@33",
    portal_url="https://sabedoriaoculta.com/app/",
    vip_group_url="https://chat.whatsapp.com/invite/cupula33-vip",
    has_orderbump=False
):
    display_name = (name or "").strip()
    if not display_name:
        display_name = email.split("@")[0].title() if email else "Iniciado"

    orderbump_row = ""
    if has_orderbump:
        orderbump_row = """
                    <!-- LINHA: ORDER BUMP PROSPERIDADE -->
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 12px; border-bottom: 1px solid #1c1c1c; padding-bottom: 10px;">
                      <tr>
                        <td width="35%" style="font-size: 12px; color: #777777; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Bônus Especial:</td>
                        <td width="65%" style="font-size: 13px; color: #facc15; font-weight: 800; text-align: right;">
                          ✦ Segredos da Prosperidade Maçônica ✦
                        </td>
                      </tr>
                    </table>
        """

    return f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Acesso Liberado • Cúpula 33</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td, a {{ font-family: Arial, sans-serif !important; }}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #050505; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #dcdcdc; -webkit-font-smoothing: antialiased;">
  <!-- WRAPPER EXTERNO -->
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #050505; width: 100%;">
    <tr>
      <td align="center" style="padding: 32px 12px 48px 12px;">
        
        <!-- CONTAINER PRINCIPAL (600px max) -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #0a0a0a; border: 1px solid #222222; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.85);">
          
          <!-- TOPO / HEADER DOURADO -->
          <tr>
            <td align="center" style="padding: 44px 28px 28px 28px; background: #0e0e0e; border-bottom: 1px solid #1a1a1a;">
              <!-- BADGE -->
              <table role="presentation" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding: 5px 16px; background-color: rgba(234, 179, 8, 0.12); border: 1px solid rgba(234, 179, 8, 0.45); border-radius: 999px; text-align: center;">
                    <span style="color: #facc15; font-size: 11px; font-weight: 800; letter-spacing: 2.5px; text-transform: uppercase;">✦ INICIAÇÃO CONFIRMADA • PLANO MASTER ✦</span>
                  </td>
                </tr>
              </table>

              <!-- LOGO / TÍTULO -->
              <h1 style="margin: 20px 0 6px 0; color: #ffffff; font-size: 32px; font-weight: 900; letter-spacing: 3px; font-family: Georgia, 'Cinzel', serif;">CÚPULA 33</h1>
              <p style="margin: 0; color: #888888; font-size: 13px; letter-spacing: 1px; text-transform: uppercase;">Acervo Hermético • Biblioteca Oculta • Comunidade Secreta</p>
            </td>
          </tr>

          <!-- CORPO PRINCIPAL -->
          <tr>
            <td style="padding: 36px 32px 28px 32px;">
              <!-- SAUDAÇÃO -->
              <h2 style="margin: 0 0 16px 0; color: #ffffff; font-size: 21px; font-weight: 700;">
                Saudações, <span style="color: #facc15;">{display_name}</span>. 🏛️
              </h2>
              
              <p style="margin: 0 0 24px 0; font-size: 15px; line-height: 1.7; color: #b5b5b5;">
                Sua iniciação foi autenticada no Círculo Interno da <strong style="color: #ffffff;">Cúpula 33</strong>. Seu acesso <strong>Master Vitalício</strong> está 100% liberado com entrada ilimitada aos mais de 2.500 manuscritos sagrados, frequências herméticas e ao aplicativo PWA exclusivo.
              </p>

              <!-- CARD DE CREDENCIAIS (ALTA CONVERSÃO & DESIGN FINO) -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #121212; border: 1px solid rgba(234, 179, 8, 0.35); border-radius: 14px; margin-bottom: 30px; box-shadow: inset 0 0 30px rgba(0,0,0,0.5);">
                <tr>
                  <td style="padding: 22px 24px;">
                    <div style="font-size: 11px; font-weight: 800; color: #eab308; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 16px; border-bottom: 1px solid #202020; padding-bottom: 8px;">
                      🔑 Suas Credenciais de Membro
                    </div>

                    <!-- LINHA: PORTAL -->
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 12px; border-bottom: 1px solid #1c1c1c; padding-bottom: 10px;">
                      <tr>
                        <td width="35%" style="font-size: 12px; color: #777777; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Portal Web / PWA:</td>
                        <td width="65%" style="font-size: 13px; font-weight: 600; text-align: right;">
                          <a href="{portal_url}" target="_blank" style="color: #facc15; text-decoration: none;">Acessar Portal ➔</a>
                        </td>
                      </tr>
                    </table>

                    <!-- LINHA: LOGIN -->
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 12px; border-bottom: 1px solid #1c1c1c; padding-bottom: 10px;">
                      <tr>
                        <td width="35%" style="font-size: 12px; color: #777777; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Seu E-mail (Login):</td>
                        <td width="65%" style="font-size: 14px; color: #ffffff; font-family: 'Courier New', Courier, monospace; font-weight: 700; text-align: right;">{email}</td>
                      </tr>
                    </table>

                    <!-- LINHA: SENHA -->
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="35%" style="font-size: 12px; color: #777777; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Senha Inicial:</td>
                        <td width="65%" style="font-size: 15px; color: #facc15; font-family: 'Courier New', Courier, monospace; font-weight: 800; text-align: right;">{password}</td>
                      </tr>
                    </table>
                    {orderbump_row}
                  </td>
                </tr>
              </table>

              <!-- BOTÃO DE AÇÃO PRINCIPAL (CTA DOURADO RESPLANDECENTE) -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 32px;">
                <tr>
                  <td align="center">
                    <a href="{portal_url}" target="_blank" style="display: inline-block; background: linear-gradient(135deg, #facc15 0%, #eab308 50%, #ca8a04 100%); color: #000000 !important; font-size: 14px; font-weight: 900; letter-spacing: 1.5px; text-transform: uppercase; text-decoration: none; padding: 18px 42px; border-radius: 12px; box-shadow: 0 4px 30px rgba(234, 179, 8, 0.45); border: 1px solid #fef08a;">
                      ENTRAR NO ACERVO AGORA ➔
                    </a>
                  </td>
                </tr>
              </table>

              <!-- SEÇÃO: GRUPO SECRETO VIP -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background: linear-gradient(180deg, #131313 0%, #0c0c0c 100%); border: 1px dashed rgba(234, 179, 8, 0.4); border-radius: 14px; margin-bottom: 28px;">
                <tr>
                  <td style="padding: 22px 24px; text-align: center;">
                    <span style="display: inline-block; font-size: 24px; margin-bottom: 8px;">👑</span>
                    <h3 style="margin: 0 0 8px 0; color: #ffffff; font-size: 17px; font-weight: 800; letter-spacing: 0.5px;">Círculo Interno Secreto • Grupo VIP</h3>
                    <p style="margin: 0 0 16px 0; font-size: 13px; line-height: 1.6; color: #999999;">
                      Conecte-se com os outros mestres e iniciados da Ordem. Discussões reservadas sobre práticas esotéricas, desdobramento astral, cabala prática e novos grimórios decifrados.
                    </p>
                    <a href="{vip_group_url}" target="_blank" style="display: inline-block; background-color: #1e1e1e; border: 1px solid #facc15; color: #facc15 !important; font-size: 12px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; text-decoration: none; padding: 12px 28px; border-radius: 10px;">
                      ✦ ENTRAR NO GRUPO VIP EXCLUSIVO ✦
                    </a>
                  </td>
                </tr>
              </table>

              <!-- SEÇÃO: GUIA DE INSTALAÇÃO DO APP PWA (CELULAR & TABLET) -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0f0f0f; border: 1px solid #202020; border-radius: 14px; margin-bottom: 28px;">
                <tr>
                  <td style="padding: 22px 24px;">
                    <div style="font-size: 12px; font-weight: 800; color: #ffffff; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 12px;">
                      📱 Como Instalar o Aplicativo no Celular (Sem Lojas de Apps)
                    </div>
                    
                    <!-- PASSO A PASSO IPHONE -->
                    <p style="margin: 0 0 10px 0; font-size: 13px; line-height: 1.6; color: #cccccc;">
                      <strong style="color: #facc15;">No iPhone (Safari):</strong> Abra o link do portal no Safari, toque no ícone de <em>Compartilhar</em> (quadrado com seta para cima) e selecione <strong style="color: #ffffff;">"Adicionar à Tela de Início"</strong>.
                    </p>
                    <!-- PASSO A PASSO ANDROID -->
                    <p style="margin: 0 0 10px 0; font-size: 13px; line-height: 1.6; color: #cccccc;">
                      <strong style="color: #facc15;">No Android (Chrome):</strong> Abra o link no Chrome, toque nos <em>3 pontinhos</em> no topo superior direito e selecione <strong style="color: #ffffff;">"Instalar aplicativo"</strong> ou "Adicionar à tela inicial".
                    </p>
                    <p style="margin: 0; font-size: 12px; color: #888888;">
                      O app funcionará em tela cheia com navegação rápida, modo offline e salvamento de página.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- RESUMO DO QUE ESTÁ INCLUSO -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 20px;">
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #888888;">
                    <span style="color: #facc15; font-weight: bold; margin-right: 8px;">✓</span> <strong style="color: #ffffff;">2.500+ Manuscritos Raros:</strong> Alquimia, Hermetismo, Cabala, Grimórios e Apócrifos.
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #888888;">
                    <span style="color: #facc15; font-weight: bold; margin-right: 8px;">✓</span> <strong style="color: #ffffff;">Leitor Contínuo HD:</strong> Visualização nativa com zoom, índice e modo noturno.
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #888888;">
                    <span style="color: #facc15; font-weight: bold; margin-right: 8px;">✓</span> <strong style="color: #ffffff;">Frequências Sagradas:</strong> Ondas Binaurais 432Hz, 528Hz e 963Hz integradas para meditação.
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- RODAPÉ -->
          <tr>
            <td align="center" style="padding: 24px 32px 32px 32px; background-color: #070707; border-top: 1px solid #161616;">
              <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: bold; color: #facc15; letter-spacing: 1px;">CÚPULA 33 • ORDEM HERMÉTICA</p>
              <p style="margin: 0 0 12px 0; font-size: 11px; color: #555555; line-height: 1.5;">
                Este e-mail contém dados de acesso confidenciais e intransferíveis.<br>
                Em caso de dúvidas técnicas ou suporte com seu login, responda diretamente a esta mensagem.
              </p>
              <p style="margin: 0; font-size: 10px; color: #333333;">
                © 2026 Cúpula 33. Todos os direitos reservados.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>"""
