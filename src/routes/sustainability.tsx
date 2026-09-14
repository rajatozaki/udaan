import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { ImageRail } from "@/components/image-rail";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { GALLERY } from "@/lib/site";

export const Route = createFileRoute("/sustainability")({
  component: SustainabilityPage,
  head: () => ({
    meta: [{ title: "Sustainability — Udaan Paper Industries" }],
  }),
});

const PILLARS = [
  {
    n: "01",
    t: "100% recyclable",
    d: "Every corrugated product we manufacture is designed to re-enter the paper cycle. Plastic is not part of the brief.",
  },
  {
    n: "02",
    t: "Less material, same strength",
    d: "Board grade and flute are engineered to the load — not padded ‘to be safe’. Protection without surplus fibre.",
  },
  {
    n: "03",
    t: "Energy-aware production",
    d: "Automatic lines, in-house conversion and fewer wasted kilometres between plant and customer.",
  },
  {
    n: "04",
    t: "Responsible fibre",
    d: "Kraft paper sourced with an eye on the mill, the grade and the job it has to do — then qualified on arrival.",
  },
] as const;

function SustainabilityPage() {
  return (
    <main>
      <PageHero
        eyebrow="Sustainability"
        title={
          <>
            Paper-first.
            <br />
            Always.
          </>
        }
        lede="Corrugated that protects the goods and the ground they travel over — recyclable, specified, and made on plants we own."
        image="/images/gallery-rolls.jpg"
      />

      <ImageRail images={GALLERY.slice(0, 8)} className="bg-ink" />

      <section className="bg-slate-950 py-8">
        <div className="site-wrap-wide grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-xl">
            <img
              src="/images/gallery-sheets.jpg"
              alt="Corrugated sheets"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105 md:min-h-[26rem]"
            />
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-xl">
            <img
              src="/images/sustainability.jpg"
              alt="Paper-first packaging"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105 md:min-h-[26rem]"
            />
          </div>
        </div>
      </section>

      <section className="bg-paper border-t border-amber-900/10 py-20 md:py-28">
        <div className="site-wrap-wide grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <SectionHeading
              eyebrow="The stance"
              title={
                <>
                  The pack should not
                  <em> outlive the product.</em>
                </>
              }
            />
          </div>
          <Reveal className="space-y-6 text-base leading-relaxed text-slate-600 sm:text-lg md:col-span-7">
            <p>
              Plastic packaging has a long afterlife. Corrugated does not have to.
              Udaan manufactures 100% recyclable boxes, sheets and rolls, keeps
              fibre use to the specification, and runs ISO 14001 environmental
              management across both plants.
            </p>
            <p>
              Sustainability here is not a campaign. It is the material, the
              machine, the kilometre and the lot — paper-first by design, ISO 14001
              and GMP by system.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-slate-950 py-20 text-fg md:py-28">
        <div className="site-wrap-wide grid gap-6 sm:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 50}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/40 hover:bg-white/[0.06] md:p-10"
            >
              <span className="inline-block rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-1 font-sans text-xs font-bold tracking-widest text-amber-400">
                {p.n}
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                {p.t}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 md:text-base">
                {p.d}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper-2 border-t border-amber-900/10 py-20 md:py-28">
        <div className="site-wrap-wide grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal className="img-zoom">
            <div className="overflow-hidden rounded-3xl border border-amber-900/15 bg-white shadow-xl">
              <img
                src="/images/flute.jpg"
                alt="Corrugated flute fibre"
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Circularity"
              title="Fibre that can come back."
              lede="Corrugated is one of the most recovered packaging materials in the world. We design for that recovery — clean liners, honest grades, no decorative plastic that wrecks the bale."
            />
          </div>
        </div>
      </section>

      <CtaBand title="Specify a greener pack without losing the stack." />
    </main>
  );
}
