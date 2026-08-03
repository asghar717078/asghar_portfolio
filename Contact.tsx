import { useState } from "react";
import { toast } from "sonner";
import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { profile } from "@/data/portfolio";

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
  { icon: MapPin, label: "Location", value: profile.location, href: "#contact" },
  { icon: Linkedin, label: "LinkedIn", value: "/in/syed-asghar-ali", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "/syed-asghar-ali", href: profile.github },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat directly", href: profile.whatsapp },
];

const quickLinks = [
  { icon: Github, label: "GitHub", href: profile.github },
  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
  { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
  { icon: MessageCircle, label: "WhatsApp", href: profile.whatsapp },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    setSending(true);
    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…", {
      description: "Your message is pre-filled and ready to send.",
    });
    setTimeout(() => setSending(false), 800);
  }

  const field =
    "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors outline-none focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Let's connect"
          title="Have an API"
          highlight="to build?"
          description="Tell me about the system you need. I usually reply within 24 hours."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <Reveal className="rounded-3xl glass p-7 md:p-8">
            <h3 className="text-lg font-semibold">Contact details</h3>
            <ul className="mt-6 space-y-3">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-transparent bg-secondary/40 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40"
                  >
                    <span className="grid size-10 place-items-center rounded-xl bg-primary/12 text-primary">
                      <c.icon className="size-4.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-muted-foreground">{c.label}</span>
                      <span className="block truncate text-sm font-medium group-hover:text-primary">
                        {c.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-2">
              {quickLinks.map((q) => (
                <a
                  key={q.label}
                  href={q.href}
                  target={q.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/60 px-3.5 py-2 text-xs font-semibold transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  <q.icon className="size-3.5" />
                  {q.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl glass p-7 md:p-8">
            <h3 className="text-lg font-semibold">Send a message</h3>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium">
                  Your name
                </label>
                <input id="name" name="name" required placeholder="Jane Doe" className={field} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium">
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="We need a Django REST API for…"
                  className={`${field} resize-y`}
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-70"
              >
                <Send className="size-4" />
                {sending ? "Preparing…" : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
