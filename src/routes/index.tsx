import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "R. Devendar Naidu — Portfolio" },
      { name: "description", content: "Welcome to the personal portfolio of R. Devendar Naidu — based in Tadepalligudem, Andhra Pradesh." },
      { property: "og:title", content: "R. Devendar Naidu — Portfolio" },
      { property: "og:description", content: "Skills, certifications, and projects of R. Devendar Naidu." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[var(--gradient-warm)]" />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.4fr_1fr] md:py-32">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Available for opportunities
          </p>
          <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">
            Hello, I'm <span className="italic text-primary">Devendar Naidu</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            A curious learner from Tadepalligudem with a foundation in C programming and
            MS Office — passionate about singing, gardening, and drawing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:opacity-90">
              View my work
            </Link>
            <Link to="/about" className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition hover:bg-accent">
              About me
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square w-full rounded-3xl bg-gradient-to-br from-primary via-accent to-secondary shadow-[var(--shadow-soft)]" />
          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
            <p className="font-display text-3xl">2</p>
            <p className="text-xs text-muted-foreground">Certifications</p>
          </div>
          <div className="absolute -top-6 -right-6 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
            <p className="font-display text-3xl">3</p>
            <p className="text-xs text-muted-foreground">Hobbies & passions</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl border-t border-border/60 px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { t: "Programming", d: "Building logic with C — loops, functions, pointers." },
            { t: "Productivity", d: "Comfortable across the MS Office suite for documents & data." },
            { t: "Creative", d: "I sing, garden, and draw — creativity fuels my work." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-xl">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
