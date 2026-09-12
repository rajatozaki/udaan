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
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2
        className={cn(
          "font-display text-title",
          onDark ? "text-fg" : "text-ink-fg",
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lede",
            onDark ? "text-fg-muted" : "text-ink-muted",
          )}
        >
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}
