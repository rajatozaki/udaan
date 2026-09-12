import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans text-sm font-medium tracking-tight transition-[color,background-color,border-color,transform,opacity] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kraft focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-paper text-ink-fg ring-offset-ink hover:bg-paper-2",
        ink: "bg-ink text-fg ring-offset-paper hover:bg-ink-2",
        outline:
          "border border-current bg-transparent text-inherit hover:bg-fg/8",
        ghost: "bg-transparent text-inherit hover:text-kraft",
      },
      size: {
        md: "h-12 px-6",
        lg: "h-14 px-8",
        sm: "h-10 px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
