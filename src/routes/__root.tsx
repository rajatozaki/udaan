import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { QuoteSheet } from "@/components/quote-sheet";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { QuoteProvider } from "@/lib/quote";
import { SITE } from "@/lib/site";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE.name} — Engineered corrugated packaging` },
      {
        name: "description",
        content:
          "Udaan Paper Industries Limited manufactures corrugated boxes, sheets and rolls at fully automatic plants in Pithampur and Kanpur — serving FMCG, food, textile and industrial brands across India.",
      },
      { name: "theme-color", content: "#0b0a08" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <QuoteProvider>
            <SiteHeader />
            <Outlet />
            <SiteFooter />
            <QuoteSheet />
          </QuoteProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
