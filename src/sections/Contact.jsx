import { useRef, useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import config from "../config";
import toast from "react-hot-toast";
import TiltCard from "../components/TiltCard";

export default function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const hpRef = useRef(null);

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

    const name = nameRef.current.value.trim();
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
        body: JSON.stringify({ name, email, message, hp }),
      });
      const data = await safeParse(res);
      if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
      if (data.skipped === "honeypot")
        throw new Error("Message skipped (honeypot).");
      if (!data.id) throw new Error("Email not sent (no id).");

      toast.success("Message sent! I’ll reply soon.");
      nameRef.current.value = "";
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
    <AnimatedSection id="contact" className="py-20">
      <div className="container-pro px-6 lg:px-8">
        <h2 className="font-display text-4xl font-extrabold text-neutral-900 dark:text-neutral-100 text-center mb-8">
          Get In Touch
        </h2>

        <TiltCard className="max-w-2xl mx-auto" halo max={8} hoverScale={1.002}>
          <div className="card card-accent p-6 md:p-7">
            <form onSubmit={onSubmit} className="space-y-4" autoComplete="off">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  ref={nameRef}
                  type="text"
                  placeholder="Name"
                  className="focus-ring w-full px-4 py-2.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
                />
                <input
                  ref={emailRef}
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="focus-ring w-full px-4 py-2.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
                />
              </div>

              <div>
                <textarea
                  ref={messageRef}
                  rows={5}
                  maxLength={2000}
                  placeholder="What would you like to build together?"
                  onChange={(e) => setCount(e.target.value.length)}
                  onKeyDown={onKeyDown}
                  className="focus-ring w-full px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 resize-y"
                  required
                />
                <div className="mt-1 flex items-center justify-between text-xs text-neutral-500">
                  <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-800 rounded overflow-hidden mr-3">
                    <div
                      className="h-full bg-neutral-800 dark:bg-neutral-300"
                      style={{
                        width: `${Math.min((count / MAX) * 100, 100)}%`,
                      }}
                    />
                  </div>
                  <span>
                    {count}/{MAX}
                  </span>
                </div>
              </div>

              {/* Honeypot (hidden) */}
              <input
                ref={hpRef}
                type="text"
                name="notes_field"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
                style={{ display: "none" }}
              />

              <div className="flex items-center justify-end">
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary"
                >
                  {sending ? "Sending…" : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </TiltCard>
      </div>
    </AnimatedSection>
  );
}
