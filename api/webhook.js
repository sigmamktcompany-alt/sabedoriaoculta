// Vercel Serverless Function: Webhook Kirvano -> Resend + DB
export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-kirvano-token');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      status: 'online',
      service: 'Cúpula 33 Kirvano Webhook Serverless',
      timestamp: new Date().toISOString()
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body || {};
    let email = null;
    let name = null;

    // 1. Extração de dados (Kirvano / Kiwify / Testes)
    if (data.customer && typeof data.customer === 'object') {
      email = data.customer.email;
      name = data.customer.name;
    } else if (data.Customer && typeof data.Customer === 'object') {
      email = data.Customer.email;
      name = data.Customer.full_name || data.Customer.name;
    } else if (data.email) {
      email = data.email;
      name = data.name || data.full_name;
    }

    if (!email) {
      return res.status(400).json({ success: false, error: 'E-mail não encontrado no payload' });
    }

    email = email.trim().toLowerCase();
    name = (name || email.split('@')[0]).trim();

    // 2. Detecção de Order Bump (Manuscrito da Prosperidade)
    let hasOrderBump = false;
    const rawString = JSON.stringify(data).toLowerCase();

    if (data.has_order_bump === true || data.order_bump === true || data.has_prosperidade === true) {
      hasOrderBump = true;
    } else if (Array.isArray(data.items)) {
      hasOrderBump = data.items.some(it => {
        const title = (it.name || it.title || '').toLowerCase();
        return title.includes('prosperidade') || title.includes('bump') || title.includes('maçon');
      });
    } else if (Array.isArray(data.products)) {
      hasOrderBump = data.products.some(pr => {
        const title = (pr.name || pr.title || '').toLowerCase();
        return title.includes('prosperidade') || title.includes('bump') || title.includes('maçon');
      });
    } else if (rawString.includes('prosperidade') || rawString.includes('orderbump')) {
      hasOrderBump = true;
    }

    // 3. Disparar e-mail via Resend usando o template oficial Access Confirmation
    const resendApiKey = process.env.RESEND_API_KEY || 're_dXYquaat_GapeNaBsqPXccrJj9x9AtPVE';
    const templateId = process.env.RESEND_TEMPLATE_ID || 'c0225bd8-6763-4f23-820f-a35dfb6aa868';
    const portalUrl = 'https://sabedoriaoculta.com/app/';
    const defaultPassword = 'cupula@33';

    let emailResult = null;
    try {
      const emailRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
          'User-Agent': 'Cupula33-Vercel/1.0'
        },
        body: JSON.stringify({
          from: 'Cúpula 33 <acesso@sabedoriaoculta.com>',
          to: [email],
          template: {
            id: templateId,
            variables: {
              name: name,
              email: email,
              password: defaultPassword,
              portal_url: portalUrl,
              has_orderbump: hasOrderBump ? '1' : '0'
            }
          }
        })
      });

      emailResult = await emailRes.json();
    } catch (err) {
      emailResult = { error: err.message };
    }

    return res.status(200).json({
      success: true,
      message: 'Venda processada com sucesso via Vercel',
      student: {
        email,
        name,
        tier: 'master',
        level: 1,
        has_prosperidade: hasOrderBump
      },
      email_dispatched: emailResult
    });

  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
