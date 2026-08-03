import { Reveal, SectionHeading } from "./Reveal";
import { projects } from "@/data/portfolio";
import { ArrowUpRight, Building2, Dot } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-24 h-96 halo" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Featured work"
          title="Systems behind"
          highlight="the screens"
          description="Backends and automation platforms I've designed and built — APIs, data models and enterprise workflows."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl glass transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-glow">
                <div className="border-b border-border bg-background/50 p-5">
                  <div className="mb-3 flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-destructive/70" />
                    <span className="size-2.5 rounded-full bg-signal/80" />
                    <span className="size-2.5 rounded-full bg-primary/80" />
                  </div>
                  <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed text-muted-foreground">
                    <code>{p.snippet}</code>
                  </pre>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="font-mono text-[11px] tracking-wider text-accent uppercase">
                    {p.kind}
                  </span>
                  <h3 className="mt-2 flex items-start gap-1.5 text-lg leading-snug font-semibold">
                    {p.name}
                    <ArrowUpRight className="mt-1 size-4 shrink-0 text-primary opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                    <Building2 className="size-3.5 text-primary" />
                    {p.org} · {p.roleLabel}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>

                  <ul className="mt-5 space-y-1.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center text-[13px] text-muted-foreground">
                        <Dot className="size-4 shrink-0 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5 pt-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-lg border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[10.5px] text-muted-foreground transition-colors group-hover:border-primary/30"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
