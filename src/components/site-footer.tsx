import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { NAV, PLANTS, SITE } from "@/lib/site";
import { useQuote } from "@/lib/quote";

export function SiteFooter() {
  const { setOpen } = useQuote();

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-fg">
      <div className="site-wrap-wide grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <Logo onDark size="lg" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
            Corrugated boxes, sheets and rolls from two automatic plants —
            designed, qualified and delivered on our own fleet.
          </p>
          <div className="mt-8">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-2.5 font-sans text-sm font-semibold text-amber-400 transition-all hover:border-amber-400 hover:bg-amber-500/20"
            >
              Start a specification
              <ArrowUpRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow mb-4 text-xs font-semibold text-amber-400">Navigate</p>
          <ul className="space-y-2.5">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="inline-block text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:col-span-5">
          {PLANTS.map((plant) => (
            <div
              key={plant.id}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-all hover:border-white/20"
            >
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-amber-400" />
                <p className="eyebrow text-xs text-amber-400">{plant.region}</p>
              </div>
              <p className="mt-2 font-display text-lg font-semibold text-white">
                {plant.name.replace("Unit I — ", "").replace("Unit II — ", "")}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{plant.address}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="site-wrap-wide flex flex-col gap-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.legal}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={SITE.phoneHref} className="transition-colors hover:text-white">
              {SITE.phone}
            </a>
            <a href={SITE.emailHref} className="transition-colors hover:text-white">
              {SITE.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
