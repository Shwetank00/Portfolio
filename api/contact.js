// api/contact.js
import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Body can be parsed automatically on Vercel; fall back just in case
    const body = req.body || (await new Promise((resolve) => {
      let data = '';
      req.on('data', (c) => (data += c));
      req.on('end', () => resolve(data ? JSON.parse(data) : {}));
    }));

    const { name = '', email = '', message = '', hp = '' } = body;

    // Honeypot (hidden field) — basic spam protection
    if (hp) return res.status(200).json({ ok: true });

    if (!email || !/^\S+@\S+\.\S+$/.test(email) || !message.trim()) {
      return res.status(400).json({ error: 'Invalid payload' });
    }
    if (message.length > 1000) {
      return res.status(400).json({ error: 'Message too long' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const FROM = process.env.RESEND_FROM || 'onboarding@resend.dev'; // replace with a verified sender
    const TO = process.env.CONTACT_TO || 'shwetankjain00@gmail.com';

    const subject = `Portfolio message from ${name || 'Someone'}`;
    const text = `You received a new message from your portfolio site.

Name: ${name || '—'}
Email: ${email}
Message:
${message}
`;

    await resend.emails.send({
      from: `Portfolio <${FROM}>`,
      to: [TO],
      reply_to: email,
      subject,
      text,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Email failed to send' });
  }
}
