/**
 * CÚPULA 33 - CLOUDFLARE WORKER WEBHOOK & DISPARO DE E-MAIL (RESEND)
 * 100% Gratuito, Serverless e 24/7 na nuvem (sem precisar de servidor ligado).
 * 
 * Como usar:
 * 1. Acesse https://dash.cloudflare.com -> Workers & Pages -> Create Worker.
 * 2. Cole este código no editor do Worker e clique em 'Deploy'.
 * 3. Em Settings -> Variables, adicione:
 *    - RESEND_API_KEY: sua chave do resend (ex: re_123456789)
 *    - FROM_EMAIL: Cúpula 33 <suporte@sabedoriaoculta.com> (ou onboarding@resend.dev para testes)
 * 4. Copie a URL do seu Worker (ex: https://cupula33-webhook.seu-subdomain.workers.dev)
 * 5. Cole essa URL no painel da Kirvano / Kiwify / PerfectPay em 'Webhooks'.
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
    }

    if (request.method === "POST" && (url.pathname === "/webhook" || url.pathname === "/api/webhook" || url.pathname === "/")) {
      try {
        const body = await request.json();
        
        // Extrai cliente agnóstico (Kirvano, Kiwify, PerfectPay, etc.)
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
        const portalUrl = "https://sabedoriaoculta.com/app/";
        const fromEmail = env.FROM_EMAIL || "Cúpula 33 <onboarding@resend.dev>";
        const resendKey = env.RESEND_API_KEY || "re_ZwdwULHi_MA8wrHM6fFcYDKAxavKx7LC5";

        const isRefund = ["refund", "chargeback", "cancel", "devolvida"].some(s => status.includes(s));

        if (isRefund) {
          return new Response(JSON.stringify({ success: true, action: "refund_logged", email }), {
            headers: { "Content-Type": "application/json" }
          });
        }

        // Enviar E-mail via Resend API
        let emailResult = null;
        if (resendKey) {
          const emailHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <style>
    body { margin: 0; padding: 0; background-color: #050505; font-family: -apple-system, sans-serif; color: #dcdcdc; }
    .wrapper { max-width: 600px; margin: 0 auto; background-color: #0d0d0d; border: 1px solid #222; border-radius: 16px; overflow: hidden; }
    .header { padding: 36px 24px; text-align: center; background: radial-gradient(circle at center, rgba(234,179,8,0.12), transparent 70%); border-bottom: 1px solid #1a1a1a; }
    .badge { display: inline-block; padding: 4px 12px; background: rgba(234,179,8,0.15); border: 1px solid rgba(234,179,8,0.4); border-radius: 999px; color: #facc15; font-size: 11px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px; }
    .title { font-size: 26px; font-weight: 900; color: #fff; margin: 0 0 6px 0; font-family: Georgia, serif; }
    .body { padding: 32px 28px; }
    .card-creds { background: #141414; border: 1px solid rgba(234,179,8,0.3); border-radius: 14px; padding: 22px; margin: 24px 0; }
    .cred-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #202020; }
    .cred-row:last-child { border-bottom: none; }
    .cred-label { font-size: 12px; color: #777; text-transform: uppercase; font-weight: bold; }
    .cred-val { font-size: 14px; color: #facc15; font-family: monospace; font-weight: bold; }
    .btn { display: inline-block; background: #eab308; color: #000 !important; text-decoration: none; font-size: 13px; font-weight: 900; text-transform: uppercase; padding: 16px 36px; border-radius: 12px; }
  </style>
</head>
<body>
  <div style="padding: 24px 12px;">
    <div class="wrapper">
      <div class="header">
        <span class="badge">Iniciação Confirmada</span>
        <h1 class="title">CÚPULA 33</h1>
        <p style="font-size: 13px; color: #888; margin: 0;">Acesso Oficial ao Acervo Hermético & Biblioteca Oculta</p>
      </div>
      <div class="body">
        <h2 style="color: #fff; margin-top: 0;">Saudações, ${name}! 🏛️</h2>
        <p style="color: #b5b5b5; line-height: 1.7;">Seu pagamento foi confirmado com sucesso. Seu plano <strong>Master Vitalício</strong> já está liberado. Utilize seus dados abaixo para acessar:</p>
        
        <div class="card-creds">
          <div class="cred-row"><span class="cred-label">Link do Portal:</span><span class="cred-val"><a href="${portalUrl}" style="color: #facc15;">${portalUrl}</a></span></div>
          <div class="cred-row"><span class="cred-label">Seu Login:</span><span class="cred-val">${email}</span></div>
          <div class="cred-row"><span class="cred-label">Sua Senha:</span><span class="cred-val">${defaultPassword}</span></div>
        </div>

        <div style="text-align: center; margin: 32px 0;">
          <a href="${portalUrl}" target="_blank" class="btn">ACESSAR O ACERVO AGORA ➔</a>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

          const resendResp = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${resendKey}`,
              "Content-Type": "application/json"
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
