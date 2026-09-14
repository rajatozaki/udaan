import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { ImageRail } from "@/components/image-rail";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { useQuote } from "@/lib/quote";
import { GALLERY, PRODUCTS } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/solutions")({
  component: SolutionsPage,
  head: () => ({
    meta: [{ title: "Solutions — Udaan Paper Industries" }],
  }),
});

function SolutionsPage() {
  const { setOpen } = useQuote();

  return (
    <main>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Corrugated, considered
            <br />
            at scale.
          </>
        }
        lede="Boxes, printed cartons, sheets, rolls and die-cut structures — specified to the product, the route and the line they run on."
        image="/images/gallery-sheets.jpg"
      />

      <ImageRail images={GALLERY.slice(0, 8)} className="bg-ink" />

      {PRODUCTS.map((product, i) => (
        <section
          key={product.slug}
          id={product.slug}
          className={cn(
            "scroll-mt-24 py-16 md:py-24 border-t border-amber-900/10",
            i % 2 ? "bg-paper-2" : "bg-paper",
          )}
        >
          <div
            className={cn(
              "site-wrap-wide grid items-center gap-12 md:grid-cols-12 md:gap-16",
              i % 2 && "md:[&>*:first-child]:order-2",
            )}
          >
            <Reveal variant="image" className="img-zoom md:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-amber-900/15 bg-white shadow-xl">
                <img
                  src={product.image}
                  alt=""
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Reveal>
            <div className="md:col-span-6 md:px-4">
              <span className="inline-block rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold tracking-wider text-amber-800 uppercase">
                {product.kicker}
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {product.name}
              </h2>
              <p className="mt-5 text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
                {product.summary}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                {product.details}
              </p>
              <div className="mt-8">
                <Button variant="primary" size="lg" onClick={() => setOpen(true)}>
                  Specify this pack
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="relative overflow-hidden border-y border-white/10 bg-slate-950 py-20 text-fg md:py-28">
        <div className="site-wrap-wide grid gap-12 md:grid-cols-2 md:items-center">
          <SectionHeading
            onDark
            eyebrow="Capability"
            title={
              <>
                Short runs and long ones.
                <em> Same discipline.</em>
              </>
            }
            lede="Ten boxes or a shift of thousands — automatic machines, in-house print and a laboratory that does not wave lots through."
          />
          <Reveal className="grid gap-4 sm:grid-cols-2">
            {[
              ["3-ply & 5-ply", "Board constructions matched to stacking height and climate."],
              ["Print", "Single and multi-colour, on kraft and white-top liners."],
              ["Die-cut", "Inserts, partitions, fitments — designed with the outer."],
              ["Sheets & rolls", "For converters and packing halls that take board, not boxes."],
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/40 hover:bg-white/[0.06]"
              >
                <h3 className="font-display text-xl font-bold text-white">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
