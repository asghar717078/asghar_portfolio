import { Reveal, SectionHeading } from "./Reveal";
import { skillGroups } from "@/data/portfolio";
import { Bot, Code2, Container, Database, Server, ShieldCheck, Users } from "lucide-react";

const icons = { Code2, Server, Database, Container, ShieldCheck, Bot, Users } as const;

export function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Stack"
          title="Tools I build"
          highlight="production with"
          description="The backend toolkit I reach for — grouped the way a system is actually assembled."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon as keyof typeof icons];
            return (
              <Reveal key={group.title} delay={i * 0.07}>
                <div className="group h-full rounded-3xl glass p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-glow">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                      <Icon className="size-5" strokeWidth={2.2} />
                    </span>
                    <h3 className="text-base font-semibold">{group.title}</h3>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm">
                        <span className="size-1.5 shrink-0 rounded-full bg-primary/70 transition-transform group-hover:scale-125" />
                        <span className="text-muted-foreground transition-colors group-hover:text-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
