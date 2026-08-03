import { Reveal, SectionHeading } from "./Reveal";
import { certifications, education, languages } from "@/data/portfolio";
import { Award, GraduationCap, Languages as LanguagesIcon } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Education & credentials"
          title="Formal training,"
          highlight="verified work"
          description="Academic background in information technology, backed by documented professional experience."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-5">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.08}>
                <article className="rounded-3xl glass p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-start gap-4">
                      <span className="grid size-11 place-items-center rounded-2xl bg-primary/12 text-primary">
                        <GraduationCap className="size-5" />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold md:text-lg">{e.degree}</h3>
                        <p className="mt-0.5 text-sm text-primary">{e.school}</p>
                      </div>
                    </div>
                    <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-[11px] text-muted-foreground">
                      {e.period}
                    </span>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{e.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="space-y-5">
            <Reveal delay={0.1} className="rounded-3xl glass p-7">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-accent/12 text-accent">
                  <Award className="size-5" />
                </span>
                <h3 className="text-base font-semibold">Certifications</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {certifications.map((c) => (
                  <li
                    key={c.title}
                    className="rounded-2xl border border-transparent bg-secondary/40 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40"
                  >
                    <p className="text-sm font-medium">{c.title}</p>
                    <p className="mt-1 font-mono text-[11px] text-muted-foreground">{c.detail}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.18} className="rounded-3xl glass p-7">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-primary/12 text-primary">
                  <LanguagesIcon className="size-5" />
                </span>
                <h3 className="text-base font-semibold">Languages</h3>
              </div>
              <ul className="mt-5 space-y-2.5">
                {languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-center justify-between gap-3 border-b border-border pb-2.5 last:border-0 last:pb-0"
                  >
                    <span className="text-sm">{l.name}</span>
                    <span className="font-mono text-[11px] text-muted-foreground">{l.level}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
