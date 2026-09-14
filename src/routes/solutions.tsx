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
        easterEgg={
          /* EASTER EGG: The Master Packaging Net & Flute Blueprint */
          <svg
            viewBox="0 0 900 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-12 left-8 size-[42rem] opacity-[0.18] pointer-events-none"
          >
            {/* Box Die-Cut Folding Net Schematic */}
            <g transform="translate(60, 80) scale(0.9)" stroke="#b45309" strokeWidth="1">
              {/* Main Panels */}
              <rect x="120" y="100" width="160" height="200" fill="none" stroke="#b45309" strokeWidth="1.4" />
              <rect x="280" y="100" width="100" height="200" fill="none" stroke="#d97706" strokeWidth="1.2" strokeDasharray="4 4" />
              <rect x="380" y="100" width="160" height="200" fill="none" stroke="#b45309" strokeWidth="1.4" />
              <rect x="540" y="100" width="100" height="200" fill="none" stroke="#d97706" strokeWidth="1.2" strokeDasharray="4 4" />

              {/* Glue Tab */}
              <polygon points="120,110 80,130 80,270 120,290" fill="#d97706" fillOpacity="0.1" stroke="#b45309" strokeWidth="1" strokeDasharray="3 3" />
              <text x="95" y="205" fill="#b45309" fontSize="8" fontWeight="bold" transform="rotate(-90 95 205)">GLUE TAB</text>

              {/* Top Flaps */}
              <polygon points="120,100 130,20 270,20 280,100" fill="none" stroke="#b45309" strokeWidth="1" />
              <polygon points="280,100 290,40 370,40 380,100" fill="none" stroke="#d97706" strokeWidth="0.8" />
              <polygon points="380,100 390,20 530,20 540,100" fill="none" stroke="#b45309" strokeWidth="1" />
              <polygon points="540,100 550,40 630,40 640,100" fill="none" stroke="#d97706" strokeWidth="0.8" />

              {/* Bottom Flaps */}
              <polygon points="120,300 130,380 270,380 280,300" fill="none" stroke="#b45309" strokeWidth="1" />
              <polygon points="280,300 290,360 370,360 380,300" fill="none" stroke="#d97706" strokeWidth="0.8" />
              <polygon points="380,300 390,380 530,380 540,300" fill="none" stroke="#b45309" strokeWidth="1" />
              <polygon points="540,300 550,360 630,360 640,300" fill="none" stroke="#d97706" strokeWidth="0.8" />

              {/* Dimension Calipers */}
              <line x1="120" y1="410" x2="640" y2="410" stroke="#78350f" strokeWidth="0.8" markerEnd="url(#arrow)" />
              <text x="380" y="425" textAnchor="middle" fill="#78350f" fontSize="9" fontWeight="bold" letterSpacing="1">L + W + H CALIPER TOLERANCE ±0.5MM</text>
            </g>

            {/* Flute Profile Cross-Sections (A, B, C, E) */}
            <g transform="translate(180, 480)" stroke="#b45309">
              <text x="0" y="10" fill="#b45309" fontSize="8" fontWeight="bold">FLUTE ARCHITECTURE</text>
              {/* E-Flute: 1.5mm */}
              <path d="M120 8 Q125 0 130 8 T140 8 T150 8 T160 8 T170 8" fill="none" strokeWidth="1" />
              <text x="180" y="10" fill="#78350f" fontSize="7">E: 1.5mm</text>
              {/* B-Flute: 3.0mm */}
              <path d="M240 8 Q248 -4 256 8 T272 8 T288 8 T304 8" fill="none" strokeWidth="1.2" stroke="#d97706" />
              <text x="315" y="10" fill="#78350f" fontSize="7">B: 3.0mm</text>
              {/* C-Flute: 4.0mm */}
              <path d="M380 8 Q390 -8 400 8 T420 8 T440 8" fill="none" strokeWidth="1.4" />
              <text x="450" y="10" fill="#78350f" fontSize="7">C: 4.0mm</text>
            </g>
          </svg>
        }
      />

      <ImageRail images={GALLERY.slice(0, 8)} className="bg-paper-2" />

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
              <span className="inline-block rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold tracking-wider text-amber-900 uppercase border border-amber-900/15">
                {product.kicker}
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#221610] sm:text-4xl">
                {product.name}
              </h2>
              <p className="mt-5 text-base font-medium leading-relaxed text-[#221610] sm:text-lg">
                {product.summary}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#6b584c]">
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

      <section className="relative overflow-hidden border-y border-amber-900/20 bg-[#1c120c] py-20 text-[#fbf8f2] md:py-28">
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
                className="rounded-2xl border border-amber-900/30 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/40 hover:bg-white/[0.08]"
              >
                <h3 className="font-display text-xl font-bold text-white">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#dfd0c0]">{d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
