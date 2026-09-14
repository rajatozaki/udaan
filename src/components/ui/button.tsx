import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold tracking-tight rounded-xl transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 shadow-sm hover:from-amber-400 hover:to-amber-300 hover:shadow-lg hover:shadow-amber-500/25 border border-amber-400/50",
        ink: "bg-slate-900 text-white border border-slate-700/80 hover:bg-slate-800 shadow-sm",
        outline:
          "border border-white/20 bg-white/5 backdrop-blur-md text-fg hover:bg-white/10 hover:border-white/40",
        ghost: "bg-transparent text-inherit hover:text-amber-400 hover:bg-white/5",
      },
      size: {
        md: "h-11 px-5 text-sm",
        lg: "h-13 px-7 text-base",
        sm: "h-9 px-3.5 text-xs",
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
