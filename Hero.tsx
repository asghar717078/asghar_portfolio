import { motion } from "motion/react";
import { ArrowUpRight, Download, Mail, Server, Database, Activity } from "lucide-react";
import { profile, stats } from "@/data/portfolio";

const endpoints = [
  { method: "GET", path: "/api/v1/health", ms: "12ms" },
  { method: "POST", path: "/api/v1/auth/token", ms: "48ms" },
  { method: "GET", path: "/api/v1/orders", ms: "86ms" },
  { method: "PATCH", path: "/api/v1/inventory/1042", ms: "39ms" },
];

const methodTone: Record<string, string> = {
  GET: "text-primary",
  POST: "text-accent",
  PATCH: "text-signal",
};

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] halo" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="size-2 rounded-full bg-primary animate-pulse-dot" />
            Available for backend roles & contracts
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-3 font-display text-2xl font-semibold sm:text-3xl"
          >
            <span className="text-gradient">Backend Developer</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={profile.resume}
              download
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <Download className="size-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl border border-border glass px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Mail className="size-4" />
              Contact Me
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <dl className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.07 }}
                className="flex flex-col-reverse rounded-2xl glass p-4 transition-colors hover:border-primary/40"
              >
                <dt className="mt-1 text-[11px] leading-tight text-muted-foreground">{s.label}</dt>
                <dd className="font-display text-xl font-bold">{s.value}</dd>
              </motion.div>
            ))}
          </dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="rounded-3xl glass p-1.5 shadow-panel">
            <div className="flex items-center justify-between rounded-2xl bg-surface-2/60 px-4 py-2.5">
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <Server className="size-3.5 text-primary" />
                api-gateway · production
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-primary/12 px-2.5 py-1 font-mono text-[10px] text-primary">
                <span className="size-1.5 rounded-full bg-primary animate-pulse-dot" /> 200 OK
              </span>
            </div>

            <div className="space-y-1 px-3 py-3">
              {endpoints.map((e, i) => (
                <motion.div
                  key={e.path}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 font-mono text-[12px] transition-colors hover:bg-secondary/70"
                >
                  <span className={`w-14 font-semibold ${methodTone[e.method]}`}>{e.method}</span>
                  <span className="flex-1 truncate text-foreground/85">{e.path}</span>
                  <span className="text-muted-foreground">{e.ms}</span>
                </motion.div>
              ))}
            </div>

            <pre className="mx-3 mb-3 overflow-x-auto rounded-2xl bg-background/70 p-4 font-mono text-[11.5px] leading-relaxed text-muted-foreground">
              <code>{`{
  "service": "royal-cloud-api",
  "stack": ["Django", "DRF", "PostgreSQL"],
  "cache": "redis://hit-rate=0.94",
  "auth": "JWT + refresh rotation",
  "docs": "/api/schema/swagger-ui/"
}`}</code>
            </pre>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            {[
              { icon: Database, label: "PostgreSQL · indexed", value: "queries < 40ms" },
              { icon: Activity, label: "Celery workers", value: "queue healthy" },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl glass p-4">
                <c.icon className="size-4 text-accent" />
                <p className="mt-2 text-xs text-muted-foreground">{c.label}</p>
                <p className="font-mono text-[13px] text-foreground/90">{c.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
