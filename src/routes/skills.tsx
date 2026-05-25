import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — R. Devendar Naidu" },
      { name: "description", content: "Technical and productivity skills of R. Devendar Naidu including C programming and MS Office." },
      { property: "og:title", content: "Skills — R. Devendar Naidu" },
      { property: "og:description", content: "C programming and MS Office skills." },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: Skills,
});

const skills = [
  { name: "C Programming", level: 80, desc: "Syntax, control flow, functions, arrays, pointers." },
  { name: "MS Word", level: 90, desc: "Reports, formatting, mail merge, layouts." },
  { name: "MS Excel", level: 85, desc: "Formulas, tables, charts, basic data analysis." },
  { name: "MS PowerPoint", level: 85, desc: "Slide design, transitions, presentations." },
];

function Skills() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Skills</p>
      <h1 className="mt-3 font-display text-5xl">What I work with.</h1>

      <div className="mt-12 space-y-6">
        {skills.map((s) => (
          <div key={s.name} className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-xl">{s.name}</h3>
              <span className="text-sm text-muted-foreground">{s.level}%</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${s.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
