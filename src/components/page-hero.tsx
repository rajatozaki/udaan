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
    <section className="grid overflow-hidden border-b border-line-paper bg-paper md:min-h-[38rem] md:grid-cols-[1.07fr_0.93fr]">
      <div className="hero-image-offset relative order-2 min-h-[280px] overflow-hidden bg-ink sm:min-h-[340px] md:order-1 md:min-h-full">
        <img
          src={image}
          alt=""
          className="hero-media absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-ink/10" />
        <p className="absolute bottom-5 left-5 z-10 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-fg/75 sm:left-8 md:bottom-8 md:left-10">
          Udaan Paper Industries
        </p>
      </div>
      <div className="hero-panel hero-enter relative flex flex-col justify-end overflow-hidden bg-ink px-5 pb-10 pt-28 text-fg sm:px-8 md:order-2 md:px-10 md:pb-14 md:pt-32 lg:px-14">
        {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
        <h1 className="max-w-xl font-display text-title text-fg">{title}</h1>
        {lede ? (
          <p className="mt-5 max-w-md text-lede text-fg-muted">{lede}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
