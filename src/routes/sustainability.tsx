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

      <section className="overflow-hidden bg-ink">
        <div className="grid md:grid-cols-2">
          <img
            src="/images/gallery-sheets.jpg"
            alt="Corrugated sheets"
            className="aspect-[4/3] w-full object-cover md:min-h-[28rem]"
          />
          <img
            src="/images/sustainability.jpg"
            alt="Paper-first packaging"
            className="aspect-[4/3] w-full object-cover md:min-h-[28rem]"
          />
        </div>
      </section>

      <section className="bg-paper py-12 md:py-16">
        <div className="site-wrap-wide grid gap-12 md:grid-cols-12">
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
          <Reveal className="md:col-span-7 space-y-5 text-lede text-ink-muted">
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

      <section className="bg-ink py-12 text-fg md:py-16">
        <div className="site-wrap-wide grid gap-px bg-line md:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal key={p.n} delay={i * 50} className="bg-ink p-8 md:p-12">
              <p className="eyebrow">{p.n}</p>
              <h3 className="mt-6 font-display text-3xl">{p.t}</h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-fg-muted">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper py-12 md:py-16">
        <div className="site-wrap-wide grid items-center gap-12 md:grid-cols-2">
          <Reveal className="img-zoom">
            <img
              src="/images/flute.jpg"
              alt="Corrugated flute fibre"
              className="aspect-[16/10] w-full object-cover"
            />
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
