import { Reveal, SectionHeading } from "./Reveal";
import { tools } from "@/data/portfolio";
import {
  Bot,
  Code2,
  Container,
  Database,
  GitBranch,
  Github,
  HardDrive,
  SquareTerminal,
} from "lucide-react";

const icons = {
  Code2,
  SquareTerminal,
  GitBranch,
  Github,
  Container,
  Database,
  HardDrive,
  Bot,
} as const;

export function Tools() {
  return (
    <section id="tools" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Tools"
          title="My daily"
          highlight="workbench"
          description="The editors, engines and runtimes I live in while shipping backend features."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {tools.map((tool, i) => {
            const Icon = icons[tool.icon as keyof typeof icons];
            return (
              <Reveal key={tool.name} delay={i * 0.05}>
                <div className="group flex h-full items-center gap-3 rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary transition-transform group-hover:scale-110">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-sm font-medium">{tool.name}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
