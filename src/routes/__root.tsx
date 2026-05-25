import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader, SiteFooter } from "../components/SiteHeader";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="mt-4 text-muted-foreground">This page doesn't exist.</p>
        <Link to="/" className="mt-6 inline-block rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground"
        >Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "R. Devendar Naidu — Personal Portfolio" },
      { name: "description", content: "Personal portfolio of R. Devendar Naidu — skills in C programming and MS Office, certifications, hobbies and contact." },
      { name: "author", content: "R. Devendar Naidu" },
      { property: "og:site_name", content: "R. Devendar Naidu" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { property: "og:title", content: "R. Devendar Naidu — Personal Portfolio" },
      { name: "twitter:title", content: "R. Devendar Naidu — Personal Portfolio" },
      { property: "og:description", content: "Personal portfolio of R. Devendar Naidu — skills in C programming and MS Office, certifications, hobbies and contact." },
      { name: "twitter:description", content: "Personal portfolio of R. Devendar Naidu — skills in C programming and MS Office, certifications, hobbies and contact." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ca95f7d3-ac5e-4c04-8d24-8d86a51c191e/id-preview-5c9782b5--27274903-650f-46cf-bbbd-848ef46a7c03.lovable.app-1779695676046.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ca95f7d3-ac5e-4c04-8d24-8d86a51c191e/id-preview-5c9782b5--27274903-650f-46cf-bbbd-848ef46a7c03.lovable.app-1779695676046.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "R. Devendar Naidu",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ramachandra Rao Peta",
          addressLocality: "Tadepalligudem",
          addressRegion: "Andhra Pradesh",
          postalCode: "534102",
          addressCountry: "IN",
        },
        knowsAbout: ["C Programming", "MS Office"],
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1"><Outlet /></main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
