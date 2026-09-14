import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-slate-950 text-fg">
      <div className="grid md:min-h-[36rem] md:grid-cols-12">
        <div className="hero-enter relative z-10 flex flex-col justify-end px-6 pb-12 pt-32 sm:px-10 md:col-span-7 md:pb-16 md:pt-40 lg:px-16">
          {eyebrow ? (
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="size-2 rounded-full bg-amber-400" />
              <p className="eyebrow text-xs tracking-widest text-amber-400">{eyebrow}</p>
            </div>
          ) : null}
          <h1 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {lede ? (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
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
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent md:bg-gradient-to-r md:from-slate-950 md:via-slate-950/40 md:to-transparent" />
          <div className="absolute bottom-6 right-6 z-10 hidden rounded-full border border-white/10 bg-slate-950/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-slate-300 backdrop-blur-md md:block">
            Udaan Paper Industries
          </div>
        </div>
      </div>
    </section>
  );
}
