import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { NAV, PLANTS, SITE } from "@/lib/site";
import { useQuote } from "@/lib/quote";

export function SiteFooter() {
  const { setOpen } = useQuote();

  return (
    <footer className="bg-ink text-fg">
      <div className="site-wrap-wide grid gap-10 border-b border-line py-12 md:grid-cols-12 md:py-16">
        <div className="md:col-span-5">
          <Logo onDark size="lg" />
          <p className="mt-8 max-w-sm text-lede text-fg-muted">
            Corrugated boxes, sheets and rolls from two automatic plants —
            designed, qualified and delivered on our own fleet.
          </p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-medium tracking-tight text-gold transition-colors hover:text-fg"
          >
            Start a specification
            <ArrowUpRight className="size-4" />
          </button>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow mb-5">Navigate</p>
          <ul className="space-y-3">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5 grid gap-8 sm:grid-cols-2">
          {PLANTS.map((plant) => (
            <div key={plant.id}>
              <p className="eyebrow mb-3">{plant.region}</p>
              <p className="font-display text-xl text-fg">{plant.name.replace("Unit I — ", "").replace("Unit II — ", "")}</p>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{plant.address}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="site-wrap-wide flex flex-col gap-4 py-6 text-xs tracking-wide text-fg-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {SITE.legal}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href={SITE.phoneHref} className="hover:text-fg">
            {SITE.phone}
          </a>
          <a href={SITE.emailHref} className="hover:text-fg">
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
