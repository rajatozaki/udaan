import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { NAV } from "@/lib/site";
import { useQuote } from "@/lib/quote";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { setOpen } = useQuote();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  const solid = scrolled || menu || pathname !== "/";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-amber-900/20 bg-[#1c120c]/95 backdrop-blur-xl shadow-lg shadow-black/20"
          : "border-b border-amber-900/10 bg-[#1c120c]/80 backdrop-blur-md",
      )}
    >
      <div className="site-wrap-wide flex h-16 items-center justify-between gap-4 md:h-20">
        <Logo onDark compact={false} />

        <nav
          className="hidden items-center gap-1 rounded-full border border-amber-900/30 bg-[#261a12]/80 p-1.5 backdrop-blur-md lg:flex"
          aria-label="Primary"
        >
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "rounded-full px-4 py-1.5 font-sans text-sm font-medium tracking-tight transition-all duration-200",
                pathname === item.to
                  ? "bg-amber-500/20 text-amber-400 font-semibold shadow-xs border border-amber-500/30"
                  : "text-[#d8c5b4] hover:bg-white/5 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex bg-gradient-to-r from-amber-600 to-amber-500 text-white border border-amber-400/40 shadow-sm hover:from-amber-500 hover:to-amber-400"
            onClick={() => setOpen(true)}
          >
            Request a quote
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-xl border border-amber-900/30 bg-[#261a12] text-[#fbf8f2] transition-colors hover:bg-white/10 lg:hidden"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            onClick={() => setMenu((v) => !v)}
          >
            {menu ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {menu ? (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-between border-t border-amber-900/20 bg-[#1a110b]/98 px-6 pb-12 pt-8 backdrop-blur-2xl lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-xl px-4 py-3.5 font-sans text-xl font-medium transition-colors",
                  pathname === item.to
                    ? "bg-amber-500/20 text-amber-400 font-semibold"
                    : "text-[#d8c5b4] hover:bg-white/5 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 border-t border-amber-900/20 pt-6">
            <Button
              className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white border border-amber-400/40"
              size="lg"
              onClick={() => {
                setMenu(false);
                setOpen(true);
              }}
            >
              Request a quote
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
