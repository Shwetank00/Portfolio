import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  try {
    const body =
      req.body ||
      (await new Promise((resolve) => {
        let data = "";
        req.on("data", (c) => (data += c));
        req.on("end", () => resolve(data ? JSON.parse(data) : {}));
      }));

    const { name = "", email = "", message = "", hp = "" } = body;

    // If honeypot is filled, SKIP send but tell the client clearly.
    if (hp && hp.trim().length > 0) {
      console.warn("Honeypot triggered. Value:", hp);
      return res.status(202).json({ ok: false, skipped: "honeypot" });
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email) || !message.trim()) {
      return res.status(400).json({ ok: false, error: "Invalid payload" });
    }
    if (message.length > 1000) {
      return res.status(400).json({ ok: false, error: "Message too long" });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const TO = process.env.CONTACT_TO || "shwetankjain00@gmail.com";

    const rawFrom = process.env.RESEND_FROM || "onboarding@resend.dev";
    const fromValue = /<.+>/.test(rawFrom) ? rawFrom : `Portfolio <${rawFrom}>`;

    const subject = `Portfolio message from ${name || "Someone"}`;
    const text = `You received a new message from your portfolio site.

Name: ${name || "—"}
Email: ${email}
Message:
${message}
`;

    const { data, error } = await resend.emails.send({
      from: fromValue, // must NOT be a gmail.com sender
      to: [TO],
      subject,
      text,
      replyTo: email, // correct casing for Node SDK
    });

    if (error) {
      console.error("Resend error:", error);
      return res
        .status(500)
        .json({ ok: false, error: error.message || "Email failed to send" });
    }

    // Success: include id so the client can verify it really sent
    return res.status(200).json({ ok: true, id: data?.id || null });
  } catch (err) {
    console.error("Handler error:", err);
    return res.status(500).json({ ok: false, error: "Email failed to send" });
  }
}
