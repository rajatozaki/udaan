import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  children,
  easterEgg,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  image: string;
  children?: ReactNode;
  easterEgg?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-amber-900/15 bg-[#faf6ee] text-[#221610]">
      {/* Warm Ambient Craft & Sunlit Atmospheric Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 left-1/3 -translate-x-1/2 size-[44rem] rounded-full bg-gradient-to-b from-amber-500/15 via-amber-600/5 to-transparent blur-3xl" />
        <div className="absolute top-1/4 right-0 size-[32rem] rounded-full bg-emerald-600/6 blur-3xl" />

        {/* Artisanal Laid-Paper Texture Lines */}
        <svg className="absolute inset-0 size-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-laid-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <line x1="0" y1="40" x2="40" y2="40" stroke="#221610" strokeWidth="0.8" />
              <line x1="40" y1="0" x2="40" y2="40" stroke="#221610" strokeWidth="0.8" />
              <line x1="0" y1="20" x2="40" y2="20" stroke="#221610" strokeWidth="0.3" strokeDasharray="1 3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-laid-grid)" />
        </svg>

        {/* Page-Specific Creative Easter Egg Artwork */}
        {easterEgg}
      </div>

      <div className="grid md:min-h-[36rem] md:grid-cols-12">
        <div className="hero-enter relative z-10 flex flex-col justify-end px-6 pb-12 pt-32 sm:px-10 md:col-span-7 md:pb-16 md:pt-40 lg:px-16">
          {eyebrow ? (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-900/15 bg-amber-600/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-amber-950 shadow-xs backdrop-blur-md">
              <span className="size-2 rounded-full bg-emerald-600 animate-pulse" />
              <p className="eyebrow">{eyebrow}</p>
            </div>
          ) : null}
          <h1 className="max-w-2xl font-display text-4xl font-extrabold tracking-tight text-[#221610] sm:text-5xl md:text-6xl leading-[1.05]">
            {title}
          </h1>
          {lede ? (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5c4a3e] sm:text-lg font-sans font-medium">
              {lede}
            </p>
          ) : null}
          {children}
        </div>

        <div className="relative min-h-[300px] overflow-hidden md:col-span-5 md:min-h-full">
          <img
            src={image}
            alt=""
            className="hero-media absolute inset-0 size-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#faf6ee] via-[#faf6ee]/50 to-transparent md:bg-gradient-to-r md:from-[#faf6ee] md:via-[#faf6ee]/40 md:to-transparent" />
          <div className="absolute bottom-6 right-6 z-10 hidden rounded-full border border-amber-900/20 bg-[#241911]/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#d8c5b4] backdrop-blur-md shadow-lg md:block">
            Udaan Paper Industries
          </div>
        </div>
      </div>
    </section>
  );
}
