// src/sections/Contact.jsx
import { useRef, useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import toast from "react-hot-toast";
import config from "../config";

export default function Contact() {
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const hpRef = useRef(null); // honeypot

  const [count, setCount] = useState(0);
  const [sending, setSending] = useState(false);
  const MAX = 1000;

  const safeParse = async (res) => {
    const ct = res.headers.get("content-type") || "";
    const text = await res.text();
    if (!ct.includes("application/json") || !text) return {};
    try {
      return JSON.parse(text);
    } catch {
      return {};
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    const email = emailRef.current.value.trim();
    const message = messageRef.current.value.trim();
    const hp = hpRef.current.value.trim();
    if (!email || !message)
      return toast.error("Email and message are required");
    if (!/^\S+@\S+\.\S+$/.test(email))
      return toast.error("Please enter a valid email");
    if (message.length > MAX) return toast.error("Please shorten your message");

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "", email, message, hp }),
      });
      const data = await safeParse(res);
      if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
      if (data.skipped === "honeypot")
        throw new Error("Message skipped (honeypot). Try again.");
      if (!data.id)
        throw new Error("Email not sent (no id). Check server logs.");

      toast.success("Message sent.");
      emailRef.current.value = "";
      messageRef.current.value = "";
      setCount(0);
    } catch (err) {
      toast.error(err.message || "Failed to send");
    } finally {
      setSending(false);
    }
  };

  const onKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") onSubmit(e);
  };

  return (
    <AnimatedSection id="contact" className="py-20 bg-gray-50 dark:bg-black/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">
          Get In Touch
        </h2>

        <form
          onSubmit={onSubmit}
          autoComplete="off"
          className="max-w-xl mx-auto bg-white/70 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm backdrop-blur"
        >
          {/* Honeypot (hidden) */}
          <input
            ref={hpRef}
            type="text"
            name="notes_field"
            autoComplete="off"
            tabIndex="-1"
            aria-hidden="true"
            style={{ display: "none" }}
          />

          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                ref={emailRef}
                type="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                Message <span className="text-gray-400">(⌘/Ctrl + Enter)</span>
              </label>
              <textarea
                ref={messageRef}
                rows={5}
                maxLength={2000}
                placeholder="Message"
                onChange={(e) => setCount(e.target.value.length)}
                onKeyDown={onKeyDown}
                className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-y"
                required
              />
              <div className="mt-1 flex items-center justify-end text-xs text-gray-500">
                <span>
                  {count}/{MAX}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-5 py-2.5 font-semibold hover:bg-black disabled:opacity-60 disabled:cursor-not-allowed dark:bg-gray-700 dark:hover:bg-gray-800"
              >
                {sending && (
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-transparent" />
                )}
                {sending ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </form>

        {/* Optional quick email link under the form */}
        <div className="mt-4 text-center text-sm text-gray-500">
          Or email me directly:{" "}
          <a
            href={`mailto:${config.email}`}
            className="underline hover:text-gray-700 dark:hover:text-gray-300"
          >
            {config.email}
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
