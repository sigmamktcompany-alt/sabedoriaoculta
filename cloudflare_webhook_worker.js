/**
 * CÚPULA 33 - CLOUDFLARE WORKER WEBHOOK & DISPARO DE E-MAIL (RESEND)
 * 100% Gratuito, Serverless e 24/7 na nuvem (sem precisar de servidor ligado).
 * 
 * Como usar:
 * 1. Acesse https://dash.cloudflare.com -> Workers & Pages -> Create Worker.
 * 2. Cole este código no editor do Worker e clique em 'Deploy'.
 * 3. Em Settings -> Variables, adicione:
 *    - RESEND_API_KEY: sua chave do resend (ex: re_6DLLvTuV_GNFRdUwdJGrTW2oZbYUTC3rU)
 *    - FROM_EMAIL: Cúpula 33 <acesso@sabedoriaoculta.com> (domínio sabedoriaoculta.com verificado)
 *    - PORTAL_URL: https://sigmamarketingdigital.github.io/cupula33/app/
 *    - VIP_GROUP_URL: https://chat.whatsapp.com/invite/cupula33-vip
 * 4. Copie a URL do seu Worker (ex: https://cupula33-webhook.seu-subdomain.workers.dev)
 * 5. Cole essa URL no painel da Kirvano / Kiwify / PerfectPay em 'Webhooks'.
 */

function buildCupulaEmailHtml({
  name = "Iniciado",
  email = "",
  password = "cupula@33",
  portalUrl = "https://sigmamarketingdigital.github.io/cupula33/app/",
  vipGroupUrl = "https://chat.whatsapp.com/invite/cupula33-vip"
} = {}) {
  const displayName = name ? name.trim() : (email ? email.split("@")[0] : "Iniciado");

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Acesso Liberado • Cúpula 33</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td, a { font-family: Arial, sans-serif !important; }
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
                Saudações, <span style="color: #facc15;">${displayName}</span>. 🏛️
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
                          <a href="${portalUrl}" target="_blank" style="color: #facc15; text-decoration: none;">Acessar Portal ➔</a>
                        </td>
                      </tr>
                    </table>

                    <!-- LINHA: LOGIN -->
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 12px; border-bottom: 1px solid #1c1c1c; padding-bottom: 10px;">
                      <tr>
                        <td width="35%" style="font-size: 12px; color: #777777; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Seu E-mail (Login):</td>
                        <td width="65%" style="font-size: 14px; color: #ffffff; font-family: 'Courier New', Courier, monospace; font-weight: 700; text-align: right;">${email}</td>
                      </tr>
                    </table>

                    <!-- LINHA: SENHA -->
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="35%" style="font-size: 12px; color: #777777; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Senha Inicial:</td>
                        <td width="65%" style="font-size: 15px; color: #facc15; font-family: 'Courier New', Courier, monospace; font-weight: 800; text-align: right;">${password}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- BOTÃO DE AÇÃO PRINCIPAL (CTA DOURADO RESPLANDECENTE) -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 32px;">
                <tr>
                  <td align="center">
                    <a href="${portalUrl}" target="_blank" style="display: inline-block; background: linear-gradient(135deg, #facc15 0%, #eab308 50%, #ca8a04 100%); color: #000000 !important; font-size: 14px; font-weight: 900; letter-spacing: 1.5px; text-transform: uppercase; text-decoration: none; padding: 18px 42px; border-radius: 12px; box-shadow: 0 4px 30px rgba(234, 179, 8, 0.45); border: 1px solid #fef08a;">
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
                    <a href="${vipGroupUrl}" target="_blank" style="display: inline-block; background-color: #1e1e1e; border: 1px solid #facc15; color: #facc15 !important; font-size: 12px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; text-decoration: none; padding: 12px 28px; border-radius: 10px;">
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
</html>`;
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Kirvano-Token, x-kirvano-token",
        },
      });
    }

    if (request.method === "POST" && (url.pathname === "/webhook" || url.pathname === "/api/webhook" || url.pathname === "/")) {
      try {
        const body = await request.json();
        
        // Extrai cliente agnóstico (Kirvano, Kiwify, PerfectPay, Hotmart, etc.)
        let email = "";
        let name = "Iniciado";
        let saleCode = "DIRECT_SALE";
        let status = "";

        if (body.customer && typeof body.customer === "object") {
          email = body.customer.email || "";
          name = body.customer.name || "";
        } else if (body.Customer && typeof body.Customer === "object") {
          email = body.Customer.email || "";
          name = body.Customer.full_name || body.Customer.name || "";
        } else if (body.email) {
          email = body.email;
          name = body.name || "";
        }

        saleCode = body.code || (body.sale && body.sale.id) || body.order_id || body.id || "KIRVANO_SALE";
        status = String(body.status || (body.sale && body.sale.status) || body.event || "").toLowerCase();

        if (!email) {
          return new Response(JSON.stringify({ success: false, error: "Nenhum email encontrado" }), {
            status: 400,
            headers: { "Content-Type": "application/json" }
          });
        }

        email = email.trim().toLowerCase();
        name = name ? name.trim() : email.split("@")[0];
        const defaultPassword = env.DEFAULT_PASSWORD || "cupula@33";
        const portalUrl = env.PORTAL_URL || "https://sigmamarketingdigital.github.io/cupula33/app/";
        const vipGroupUrl = env.VIP_GROUP_URL || "https://chat.whatsapp.com/invite/cupula33-vip";
        const fromEmail = env.FROM_EMAIL || "Cúpula 33 <acesso@sabedoriaoculta.com>";
        const resendKey = env.RESEND_API_KEY || "re_6DLLvTuV_GNFRdUwdJGrTW2oZbYUTC3rU";

        // Validação opcional de Token de segurança da Kirvano
        const authHeader = request.headers.get("Authorization") || "";
        const kirvanoToken = request.headers.get("x-kirvano-token") || request.headers.get("X-Kirvano-Token") || "";
        const expectedToken = env.KIRVANO_TOKEN || "Resend@Resend";

        // Se a requisição enviar token ou se esperamos token, valida
        if (kirvanoToken && kirvanoToken !== expectedToken) {
          return new Response(JSON.stringify({ success: false, error: "Token Kirvano invalido" }), {
            status: 401,
            headers: { "Content-Type": "application/json" }
          });
        }

        const isRefund = ["refund", "chargeback", "cancel", "devolvida"].some(s => status.includes(s));

        if (isRefund) {
          return new Response(JSON.stringify({ success: true, action: "refund_logged", email }), {
            headers: { "Content-Type": "application/json" }
          });
        }

        // Enviar E-mail via Resend API
        let emailResult = null;
        if (resendKey) {
          const emailHtml = buildCupulaEmailHtml({
            name,
            email,
            password: defaultPassword,
            portalUrl,
            vipGroupUrl
          });

          const resendResp = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${resendKey}`,
              "Content-Type": "application/json",
              "User-Agent": "Cupula33-Webhook-Worker/1.0"
            },
            body: JSON.stringify({
              from: fromEmail,
              to: [email],
              subject: "Seu Acesso Master foi Liberado! • Cúpula 33",
              html: emailHtml
            })
          });

          emailResult = await resendResp.json();
        }

        return new Response(JSON.stringify({
          success: true,
          email,
          tier: "master",
          status: "approved",
          email_sent: emailResult
        }), {
          headers: { "Content-Type": "application/json" }
        });

      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }
    }

    return new Response("Cúpula 33 Webhook Service Running.", { status: 200 });
  }
};
