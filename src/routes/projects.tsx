import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — R. Devendar Naidu" },
      { name: "description", content: "A selection of practice projects and creative work by R. Devendar Naidu." },
      { property: "og:title", content: "Projects — R. Devendar Naidu" },
      { property: "og:description", content: "Practice projects and creative work." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const projects = [
  {
    title: "Calculator in C",
    tag: "C Programming",
    desc: "A console-based calculator supporting basic arithmetic — built to practice functions and control flow.",
  },
  {
    title: "Student Records Manager",
    tag: "C Programming",
    desc: "A small program that stores and looks up student details using arrays and file handling.",
  },
  {
    title: "Class Presentation Deck",
    tag: "MS PowerPoint",
    desc: "A polished, animated slide deck designed with consistent typography and clean layouts.",
  },
  {
    title: "Budget Tracker Sheet",
    tag: "MS Excel",
    desc: "A monthly budget workbook with formulas, conditional formatting, and a summary chart.",
  },
];

function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Projects</p>
      <h1 className="mt-3 font-display text-5xl">Things I've built.</h1>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="group rounded-2xl border border-border bg-card p-6 transition hover:shadow-[var(--shadow-soft)]">
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs text-accent-foreground">
              {p.tag}
            </span>
            <h3 className="mt-4 font-display text-2xl">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
