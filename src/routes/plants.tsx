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
          className={`scroll-mt-24 py-16 md:py-24 border-t border-amber-900/10 ${i ? "bg-paper-2" : "bg-paper"}`}
        >
          <div className="site-wrap-wide grid items-center gap-12 md:grid-cols-12 md:gap-16">
            <Reveal variant="image" className="img-zoom md:col-span-7">
              <div className="overflow-hidden rounded-3xl border border-amber-900/15 bg-white shadow-xl">
                <img
                  src={plant.image}
                  alt=""
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Reveal>
            <div className="md:col-span-5">
              <span className="inline-block rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold tracking-wider text-amber-800 uppercase">
                {plant.region}
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {plant.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">{plant.address}</p>
              
              <div className="mt-8 overflow-hidden rounded-2xl border border-amber-900/15 bg-white p-5 shadow-xs">
                <dl className="divide-y divide-slate-100">
                  {[
                    ["Serves", plant.serves],
                    ["Commissioned", plant.started],
                    ["Land", plant.area],
                    ["Installed", plant.capacity],
                    plant.expanding ? ["Expansion", plant.expanding] : null,
                  ]
                    .filter((row): row is [string, string] => Boolean(row))
                    .map(([k, v]) => (
                      <div key={k} className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
                        <dt className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          {k}
                        </dt>
                        <dd className="font-semibold text-slate-900 text-sm">{v}</dd>
                      </div>
                    ))}
                </dl>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="relative overflow-hidden border-y border-white/10 bg-slate-950 py-20 text-fg md:py-28">
        <div className="site-wrap-wide grid items-center gap-12 md:grid-cols-2 md:gap-16">
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
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img
                src="/images/gallery-corrugator.jpg"
                alt="Automatic corrugator hall"
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper border-t border-amber-900/10 py-20 md:py-28">
        <div className="site-wrap-wide grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal variant="image" className="img-zoom md:order-2">
            <div className="overflow-hidden rounded-3xl border border-amber-900/15 bg-white shadow-xl">
              <img
                src="/images/real-lab.jpg"
                alt="In-house quality laboratory"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
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
            <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {EQUIPMENT.map((e) => (
                <div
                  key={e}
                  className="flex items-center gap-2.5 rounded-xl border border-amber-900/15 bg-white/80 p-3 text-xs font-semibold text-slate-800"
                >
                  <span className="size-2 rounded-full bg-amber-500" />
                  {e}
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              {CERTS.map((c) => (
                <div
                  key={c.code}
                  className="rounded-xl border border-amber-900/15 bg-white p-3 shadow-xs"
                >
                  <p className="text-xs font-bold text-slate-950">{c.code}</p>
                  <p className="text-[0.7rem] text-slate-500">{c.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 text-fg">
        <img src="/images/gallery-dock.jpg" alt="" className="hero-media absolute inset-0 size-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        <div className="site-wrap-wide relative z-10 grid gap-8 py-20 text-fg md:grid-cols-2 md:py-28">
          <Reveal>
            <div className="mb-3 flex items-center gap-2">
              <span className="size-2 rounded-full bg-amber-400" />
              <p className="eyebrow text-xs tracking-widest text-amber-400">Logistics</p>
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Twenty-six trucks.
              <em className="block text-amber-400"> Ours.</em>
            </h2>
          </Reveal>
          <Reveal delay={80} className="flex items-end">
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
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
