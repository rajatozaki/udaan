import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { ImageRail } from "@/components/image-rail";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { CERTS, EQUIPMENT, GALLERY, PLANTS } from "@/lib/site";

export const Route = createFileRoute("/plants")({
  component: PlantsPage,
  head: () => ({
    meta: [{ title: "Plants — Udaan Paper Industries" }],
  }),
});

function PlantsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Plants"
        title={
          <>
            State of the art,
            <br />
            fully automatic.
          </>
        }
        lede="Two plants. Thirty thousand tonnes a year, expanding toward sixty. A laboratory on site. A fleet that does not wait on a vendor."
        image="/images/gallery-warehouse.jpg"
      />

      <ImageRail images={GALLERY} className="bg-ink" />

      {PLANTS.map((plant, i) => (
        <section
          key={plant.id}
          id={plant.id}
          className={`scroll-mt-24 py-12 md:py-16 ${i ? "bg-paper-2" : "bg-paper"}`}
        >
          <div className="site-wrap-wide grid items-start gap-10 md:grid-cols-12">
            <Reveal variant="image" className="img-zoom md:col-span-7">
              <img
                src={plant.image}
                alt=""
                className="aspect-[16/10] w-full object-cover"
              />
            </Reveal>
            <div className="md:col-span-5">
              <p className="eyebrow">{plant.region}</p>
              <h2 className="mt-4 font-display text-title">{plant.name}</h2>
              <p className="mt-4 text-ink-muted">{plant.address}</p>
              <dl className="mt-8 divide-y divide-line-paper border-y border-line-paper">
                {[
                  ["Serves", plant.serves],
                  ["Commissioned", plant.started],
                  ["Land", plant.area],
                  ["Installed", plant.capacity],
                  plant.expanding ? ["Expansion", plant.expanding] : null,
                ]
                  .filter((row): row is [string, string] => Boolean(row))
                  .map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-4 py-3">
                      <dt className="text-[0.7rem] tracking-[0.16em] uppercase text-ink-muted">
                        {k}
                      </dt>
                      <dd className="text-sm text-ink-fg">{v}</dd>
                    </div>
                  ))}
              </dl>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-ink py-12 text-fg md:py-16">
        <div className="site-wrap-wide grid items-center gap-12 md:grid-cols-2">
          <div>
            <SectionHeading
              onDark
              eyebrow="The hall"
              title={
                <>
                  Corrugation and conversion
                  <em> under one roof.</em>
                </>
              }
              lede="Kraft paper in, finished packs out. Automatic lines keep caliper, flute and print where the specification put them."
            />
          </div>
          <Reveal variant="image" className="img-zoom">
            <img
              src="/images/gallery-corrugator.jpg"
              alt="Automatic corrugator hall"
              className="aspect-[16/10] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-12 md:py-16">
        <div className="site-wrap-wide grid items-center gap-8 md:grid-cols-2">
          <Reveal variant="image" className="img-zoom md:order-2">
            <img
              src="/images/real-lab.jpg"
              alt="In-house quality laboratory"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Laboratory"
              title={
                <>
                  Quality is a room,
                  <em> not a poster.</em>
                </>
              }
              lede="Every lot can be asked to prove itself — burst, compression, GSM, moisture, RCT and ECT — before it leaves the yard."
            />
            <ul className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {EQUIPMENT.map((e) => (
                <li key={e} className="border-t border-line-paper pt-3 text-sm">
                  {e}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {CERTS.map((c) => (
                <div key={c.code}>
                  <p className="text-sm font-medium">{c.code}</p>
                  <p className="text-xs text-ink-muted">{c.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src="/images/gallery-dock.jpg" alt="" className="hero-media absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-ink/65" />
        <div className="site-wrap-wide relative grid gap-8 py-14 text-fg md:grid-cols-2 md:py-20">
          <Reveal>
            <p className="eyebrow mb-5">Logistics</p>
            <h2 className="font-display text-title">
              Twenty-six trucks.
              <em> Ours.</em>
            </h2>
          </Reveal>
          <Reveal delay={80} className="flex items-end">
            <p className="text-lede text-fg-muted">
              An in-house fleet runs finished goods from both plants into North,
              Central and West India. On-time is not a slogan when the keys are on
              the same ring as the plant.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
