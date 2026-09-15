import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";
import { OrigamiBirdSmall } from "@/components/origami-birds";

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
          <OrigamiBirdSmall className="size-3 text-amber-600" />
          <p className="eyebrow text-xs tracking-widest text-amber-500 font-semibold">{eyebrow}</p>
        </div>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
          onDark ? "text-[#fbf8f2]" : "text-[#221610]",
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed sm:text-lg",
            onDark ? "text-[#dfd0c0]" : "text-[#5c4a3e]",
          )}
        >
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}
