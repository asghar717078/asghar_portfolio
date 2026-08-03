import { Reveal, SectionHeading } from "./Reveal";
import { profile, focusAreas } from "@/data/portfolio";
import { GitBranch, LockKeyhole, Rocket, Workflow, MapPin } from "lucide-react";

const pillars = [
  {
    icon: Workflow,
    title: "Clean architecture",
    body: "Thin views, service layers and serializers with one responsibility each — features land without touching unrelated code.",
  },
  {
    icon: LockKeyhole,
    title: "Secure by default",
    body: "JWT auth, granular permissions, validated payloads and audit-friendly logs on every write path.",
  },
  {
    icon: Rocket,
    title: "Performance minded",
    body: "Redis caching, select/prefetch tuning and pagination budgets keep p95 latency low as data grows.",
  },
  {
    icon: GitBranch,
    title: "Reliable delivery",
    body: "Dockerised environments, reproducible migrations and reviewed PRs from local to production.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="About me"
          title="Backend engineering,"
          highlight="end to end"
          description="From data model to documented endpoint — I own the parts of the product users never see but always feel."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <Reveal className="rounded-3xl glass p-7 md:p-9">
            <p className="text-base leading-relaxed text-muted-foreground">
              I'm a Backend Developer with{" "}
              <span className="text-foreground">2+ years of professional experience</span> developing
              scalable backend systems, REST APIs, automation solutions and enterprise applications
              using Python, Django, Django REST Framework, FastAPI, PostgreSQL, MySQL, Redis, Docker
              and Selenium.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              I build production-grade APIs, database-driven applications, authentication systems and
              automation workflows, and I integrate third-party services where the product needs
              them. Every API I ship is documented with Swagger/OpenAPI so client teams are never
              guessing.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              I also develop browser and desktop automation solutions for enterprise clients —
              multi-portal Selenium workflows, data extraction pipelines and resilient exception
              handling — and run services on Linux with Docker. I care about measurable outcomes:
              fewer queries, lower latency, cleaner code, fewer incidents.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {focusAreas.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-6 flex items-center gap-2 font-mono text-xs text-primary">
              <MapPin className="size-3.5" />
              {profile.location}
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                  <span className="grid size-10 place-items-center rounded-xl bg-primary/12 text-primary">
                    <p.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
