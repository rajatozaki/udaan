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
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300",
        solid
          ? "border-b border-line/80 bg-ink/92 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="site-wrap-wide flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <Logo onDark compact={false} />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "font-sans text-[0.9375rem] font-medium tracking-tight transition-colors duration-200",
                pathname === item.to ? "text-gold" : "text-fg/80 hover:text-fg",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => setOpen(true)}
          >
            Request a quote
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center text-fg lg:hidden"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            onClick={() => setMenu((v) => !v)}
          >
            {menu ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {menu ? (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 bg-ink px-5 pb-10 pt-6 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-line py-4 font-display text-3xl font-medium text-fg"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button className="mt-8 w-full" onClick={() => setOpen(true)}>
            Request a quote
          </Button>
        </div>
      ) : null}
    </header>
  );
}
