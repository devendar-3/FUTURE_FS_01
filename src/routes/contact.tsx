import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — R. Devendar Naidu" },
      { name: "description", content: "Get in touch with R. Devendar Naidu — based in Tadepalligudem, Andhra Pradesh." },
      { property: "og:title", content: "Contact — R. Devendar Naidu" },
      { property: "og:description", content: "Reach out via the contact form." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    if (!name || name.length > 100) return;
    if (!email || email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    if (!message || message.length > 1000) return;
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.2fr]">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
        <h1 className="mt-3 font-display text-5xl">Let's talk.</h1>
        <p className="mt-6 text-muted-foreground">
          I'd love to hear from you — opportunities, collaborations, or just to say hello.
        </p>
        <dl className="mt-8 space-y-4 text-sm">
          <div>
            <dt className="text-muted-foreground">Address</dt>
            <dd className="mt-1">Ramachandra Rao Peta, Tadepalligudem,<br/>Andhra Pradesh — 534102</dd>
          </div>
        </dl>
      </div>

      <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
        <div className="space-y-5">
          <Field label="Name">
            <input
              required maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-ring"
            />
          </Field>
          <Field label="Email">
            <input
              type="email" required maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-ring"
            />
          </Field>
          <Field label="Message">
            <textarea
              required maxLength={1000} rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-ring"
            />
          </Field>
          <button type="submit" className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
            Send message
          </button>
          {sent && <p className="text-center text-sm text-muted-foreground">Opening your email app…</p>}
        </div>
      </form>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
