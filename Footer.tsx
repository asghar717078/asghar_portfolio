import { Github, Linkedin, Mail, MessageCircle, Terminal } from "lucide-react";
import { profile } from "@/data/portfolio";

const socials = [
  { icon: Github, href: profile.github, label: "GitHub" },
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: MessageCircle, href: profile.whatsapp, label: "WhatsApp" },
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-8">
        <div className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-brand text-primary-foreground">
            <Terminal className="size-4" strokeWidth={2.4} />
          </span>
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{profile.name}</span> · Backend Developer
          </p>
        </div>

        <ul className="flex items-center gap-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid size-10 place-items-center rounded-xl border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                <s.icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>

        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} — built with Python & care
        </p>
      </div>
    </footer>
  );
}
