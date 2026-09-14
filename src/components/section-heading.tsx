import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  onDark = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <div className="mb-3 inline-flex items-center gap-2">
          <span className="size-2 rounded-full bg-amber-400" />
          <p className="eyebrow text-xs tracking-widest text-amber-500 font-semibold">{eyebrow}</p>
        </div>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
          onDark ? "text-white" : "text-slate-950",
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed sm:text-lg",
            onDark ? "text-slate-300" : "text-slate-600",
          )}
        >
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}
