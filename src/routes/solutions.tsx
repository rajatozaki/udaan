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
          className={cn("scroll-mt-24 py-12 md:py-16", i % 2 ? "bg-paper-2" : "bg-paper")}
        >
          <div
            className={cn(
              "site-wrap-wide grid items-center gap-10 md:grid-cols-12",
              i % 2 && "md:[&>*:first-child]:order-2",
            )}
          >
            <Reveal variant="image" className="img-zoom md:col-span-6">
              <img
                src={product.image}
                alt=""
                className="aspect-[4/3] w-full object-cover"
              />
            </Reveal>
            <div className="md:col-span-6 md:px-6">
              <p className="eyebrow">{product.kicker}</p>
              <h2 className="mt-4 font-display text-title">{product.name}</h2>
              <p className="mt-5 text-lede text-ink-muted">{product.summary}</p>
              <p className="mt-4 text-ink-muted">{product.details}</p>
              <Button variant="ink" className="mt-8" onClick={() => setOpen(true)}>
                Specify this pack
              </Button>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-ink py-12 text-fg md:py-16">
        <div className="site-wrap-wide grid gap-12 md:grid-cols-2">
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
          <Reveal className="grid gap-px bg-line sm:grid-cols-2">
            {[
              ["3-ply & 5-ply", "Board constructions matched to stacking height and climate."],
              ["Print", "Single and multi-colour, on kraft and white-top liners."],
              ["Die-cut", "Inserts, partitions, fitments — designed with the outer."],
              ["Sheets & rolls", "For converters and packing halls that take board, not boxes."],
            ].map(([t, d]) => (
              <div key={t} className="bg-ink p-6">
                <h3 className="font-display text-2xl">{t}</h3>
                <p className="mt-3 text-sm text-fg-muted">{d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
