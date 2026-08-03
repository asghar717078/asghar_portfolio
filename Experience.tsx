import { Reveal, SectionHeading } from "./Reveal";
import { experience } from "@/data/portfolio";
import { Briefcase, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've"
          highlight="shipped"
          description="Two-plus years of backend engineering, on top of a client-facing background in sales and customer service."
        />

        <div className="mt-14 space-y-6">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.06}>
              <article className="relative overflow-hidden rounded-3xl glass p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-glow md:p-9">
                <span
                  className="absolute inset-x-0 top-0 h-px bg-gradient-brand opacity-70"
                  aria-hidden
                />
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="grid size-11 place-items-center rounded-2xl bg-primary/12 text-primary">
                      <Briefcase className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold md:text-xl">{job.role}</h3>
                      <p className="mt-0.5 text-sm text-primary">{job.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {job.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/12 px-3 py-1 font-mono text-[11px] text-primary">
                        <span className="size-1.5 rounded-full bg-primary animate-pulse-dot" />
                        Current
                      </span>
                    )}
                    <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-[11px] text-muted-foreground">
                      {job.period}
                    </span>
                  </div>
                </div>

                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
