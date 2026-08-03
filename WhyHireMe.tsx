import { Reveal, SectionHeading } from "./Reveal";
import { whyHireMe } from "@/data/portfolio";
import { Bot, Database, Gauge, Layers, Plug, Puzzle, Sparkles, Users } from "lucide-react";

const icons = { Sparkles, Layers, Plug, Database, Puzzle, Gauge, Users, Bot } as const;

export function WhyHireMe() {
  return (
    <section id="why-hire-me" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Why hire me"
          title="What you get on"
          highlight="day one"
          description="Not just endpoints that work today — a backend your team can keep building on."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyHireMe.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="relative h-full overflow-hidden rounded-3xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <span
                    className="absolute -top-16 -right-16 size-32 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 hover:opacity-100"
                    aria-hidden
                  />
                  <span className="grid size-11 place-items-center rounded-2xl bg-secondary/70 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
