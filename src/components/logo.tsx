import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({
  size = "sm",
}: {
  onDark?: boolean;
  compact?: boolean;
  size?: "sm" | "lg";
}) {
  return (
    <Link
      to="/"
      className="inline-flex items-center"
      aria-label="Udaan Paper Industries, home"
    >
      <img
        src="/brand/udaan-logo.png"
        alt="Udaan Paper Industries"
        className={cn(
          "w-auto",
          size === "lg" ? "h-11 md:h-12" : "h-9 md:h-10",
        )}
      />
    </Link>
  );
}
