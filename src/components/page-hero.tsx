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
    <section className="grid overflow-hidden border-b border-line-paper bg-paper md:grid-cols-2 md:min-h-[32rem]">
      <div className="relative min-h-[240px] overflow-hidden bg-ink sm:min-h-[300px] md:min-h-full">
        <img
          src={image}
          alt=""
          className="hero-media absolute inset-0 size-full object-cover"
        />
      </div>
      <div className="hero-enter flex flex-col justify-end px-5 pb-8 pt-24 sm:px-8 md:px-10 md:pb-12 md:pt-28 lg:px-14">
        {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
        <h1 className="max-w-xl font-display text-title text-ink-fg">{title}</h1>
        {lede ? (
          <p className="mt-4 max-w-md text-lede text-ink-muted">{lede}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
