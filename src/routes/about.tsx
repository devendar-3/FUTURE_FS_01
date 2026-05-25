import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — R. Devendar Naidu" },
      { name: "description", content: "Learn about R. Devendar Naidu — background, hobbies, and certifications." },
      { property: "og:title", content: "About — R. Devendar Naidu" },
      { property: "og:description", content: "Background, hobbies, and certifications of R. Devendar Naidu." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">About</p>
      <h1 className="mt-3 font-display text-5xl">A little about me.</h1>
      <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
        I'm R. Devendar Naidu, based in Tadepalligudem, Andhra Pradesh. I enjoy
        learning new things — whether that's writing my first programs in C,
        polishing documents in MS Office, or unwinding with music and the garden.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="font-display text-2xl">Hobbies</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>🎵 Singing</li>
            <li>🌱 Gardening</li>
            <li>✏️ Drawing</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="font-display text-2xl">Certifications</h2>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>Certified in C Language</li>
            <li>Certified in MS Office</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
