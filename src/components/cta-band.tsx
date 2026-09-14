import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { useQuote } from "@/lib/quote";

export function CtaBand({
  title = "Tell us the pack. We’ll engineer the rest.",
  copy = "Share a volume, a board grade, a destination. The plants at Pithampur and Kanpur will take it from there.",
}: {
  title?: string;
  copy?: string;
}) {
  const { setOpen } = useQuote();
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-slate-950 py-16 text-fg md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="site-wrap-wide relative z-10 flex flex-col items-start justify-between gap-8 rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md md:flex-row md:items-center md:p-12">
        <Reveal className="max-w-2xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="size-2 rounded-full bg-amber-400" />
            <p className="eyebrow text-xs tracking-widest text-amber-400">Work with Udaan</p>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            {copy}
          </p>
        </Reveal>
        <Reveal delay={80} className="shrink-0">
          <Button onClick={() => setOpen(true)} size="lg" className="shadow-lg shadow-amber-500/20">
            Request a quote
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
