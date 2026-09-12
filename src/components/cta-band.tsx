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
    <section className="bg-ink text-fg">
      <div className="site-wrap-wide flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-end md:py-16">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-5">Work with Udaan</p>
          <h2 className="font-display text-title">{title}</h2>
          <p className="mt-5 text-lede text-fg-muted">{copy}</p>
        </Reveal>
        <Reveal delay={80}>
          <Button onClick={() => setOpen(true)} size="lg">
            Request a quote
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
