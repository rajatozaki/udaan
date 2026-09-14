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

function PlantsEasterEgg() {
  return (
    <svg
      viewBox="0 0 540 320"
      fill="none"
      className="w-full h-full text-amber-950/20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>5-Ply Corrugator Line Engineering Blueprint</title>
      {/* Blueprint Grid */}
      <g stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 4" opacity="0.35">
        <line x1="20" y1="50" x2="520" y2="50" />
        <line x1="20" y1="130" x2="520" y2="130" />
        <line x1="20" y1="210" x2="520" y2="210" />
        <line x1="20" y1="290" x2="520" y2="290" />
        <line x1="110" y1="20" x2="110" y2="300" />
        <line x1="220" y1="20" x2="220" y2="300" />
        <line x1="330" y1="20" x2="330" y2="300" />
        <line x1="440" y1="20" x2="440" y2="300" />
      </g>

      {/* Corrugator Line Flow Schematic */}
      <g stroke="currentColor" strokeWidth="1.2" opacity="0.7">
        {/* Stage 1: Mill Roll Stands */}
        <circle cx="50" cy="90" r="18" fill="none" strokeWidth="1.5" />
        <circle cx="50" cy="90" r="6" fill="currentColor" />
        <circle cx="50" cy="140" r="18" fill="none" strokeWidth="1.5" />
        <circle cx="50" cy="140" r="6" fill="currentColor" />
        <text x="50" y="172" fill="currentColor" fontSize="6.5" fontFamily="monospace" textAnchor="middle">MILL ROLLS</text>

        {/* Paper web paths */}
        <path d="M 68 90 L 120 90 L 135 110" fill="none" strokeWidth="1.2" />
        <path d="M 68 140 L 120 140 L 135 120" fill="none" strokeWidth="1.2" />

        {/* Stage 2: Single Facer (Corrugating Rollers) */}
        <rect x="135" y="95" width="45" height="40" rx="3" fill="none" strokeWidth="1.5" />
        <circle cx="150" cy="115" r="9" strokeWidth="1" strokeDasharray="2 1" />
        <circle cx="165" cy="115" r="9" strokeWidth="1" strokeDasharray="2 1" />
        <text x="157" y="146" fill="currentColor" fontSize="6.5" fontFamily="monospace" textAnchor="middle">SINGLE FACER</text>

        {/* Flute Wave on Bridge */}
        <path
          d="M 180 115 Q 185 110, 190 115 T 200 115 T 210 115 T 220 115 T 230 115 T 240 115 T 250 115"
          fill="none"
          strokeWidth="1.5"
        />
        <text x="215" y="105" fill="currentColor" fontSize="6" fontFamily="monospace" textAnchor="middle">OVERHEAD BRIDGE</text>

        {/* Stage 3: Double Backer / Glue Machine */}
        <rect x="250" y="100" width="55" height="30" rx="3" fill="none" strokeWidth="1.5" />
        <line x1="250" y1="115" x2="305" y2="115" strokeWidth="2" />
        <text x="277" y="142" fill="currentColor" fontSize="6.5" fontFamily="monospace" textAnchor="middle">DOUBLE BACKER</text>

        {/* Combined 5-Ply Board Web */}
        <line x1="305" y1="115" x2="360" y2="115" strokeWidth="3" />

        {/* Stage 4: Slitter Scorer & Cut-off */}
        <rect x="360" y="98" width="48" height="34" rx="3" fill="none" strokeWidth="1.5" />
        <circle cx="384" cy="115" r="10" strokeWidth="1" />
        <line x1="384" y1="102" x2="384" y2="128" strokeWidth="1.5" />
        <text x="384" y="144" fill="currentColor" fontSize="6.5" fontFamily="monospace" textAnchor="middle">SLITTER/SCORER</text>

        {/* Stage 5: Automatic Stacker */}
        <line x1="408" y1="115" x2="435" y2="115" strokeWidth="2" strokeDasharray="3 2" />
        <rect x="435" y="90" width="50" height="50" rx="3" fill="none" strokeWidth="1.5" />
        <line x1="443" y1="125" x2="477" y2="125" strokeWidth="1.5" />
        <line x1="443" y1="118" x2="477" y2="118" strokeWidth="1.5" />
        <line x1="443" y1="111" x2="477" y2="111" strokeWidth="1.5" />
        <line x1="443" y1="104" x2="477" y2="104" strokeWidth="1.5" />
        <text x="460" y="152" fill="currentColor" fontSize="6.5" fontFamily="monospace" textAnchor="middle">AUTO STACKER</text>
      </g>

      {/* Dual Manufacturing Plant Geographic Coordinates */}
      <g transform="translate(30, 215)" opacity="0.8" fontFamily="monospace">
        {/* Pithampur Node */}
        <rect x="0" y="0" width="225" height="58" rx="4" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="16" cy="20" r="4" fill="currentColor" />
        <text x="28" y="18" fill="currentColor" fontSize="8" fontWeight="bold">UNIT 01: PITHAMPUR (MP)</text>
        <text x="28" y="31" fill="currentColor" fontSize="7">22°36'50" N · 75°40'56" E</text>
        <text x="28" y="44" fill="currentColor" fontSize="7">CAPACITY: 20,000 MT/YR · 5-PLY AUTO</text>

        {/* Kanpur Node */}
        <rect x="250" y="0" width="235" height="58" rx="4" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="266" cy="20" r="4" fill="currentColor" />
        <text x="278" y="18" fill="currentColor" fontSize="8" fontWeight="bold">UNIT 02: KANPUR (UP)</text>
        <text x="278" y="31" fill="currentColor" fontSize="7">26°26'59" N · 80°19'54" E</text>
        <text x="278" y="44" fill="currentColor" fontSize="7">CAPACITY: 10,000 MT/YR · DUAL CONVERSION</text>
      </g>
    </svg>
  );
}

function PlantsPage() {
  return (
    <main className="bg-paper text-[#221610]">
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
        easterEgg={<PlantsEasterEgg />}
      />

      <ImageRail images={GALLERY} className="bg-paper-2" />

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
              <span className="inline-block rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold tracking-wider text-amber-900 uppercase border border-amber-900/15">
                {plant.region}
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#221610] sm:text-4xl">
                {plant.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#6b584c]">{plant.address}</p>
              
              <div className="mt-8 overflow-hidden rounded-2xl border border-amber-900/15 bg-white p-5 shadow-xs">
                <dl className="divide-y divide-amber-900/10">
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
                        <dt className="text-xs font-bold uppercase tracking-wider text-[#8c7462]">
                          {k}
                        </dt>
                        <dd className="font-semibold text-[#221610] text-sm">{v}</dd>
                      </div>
                    ))}
                </dl>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="relative overflow-hidden border-y border-amber-900/20 bg-[#1c120c] py-20 text-[#fbf8f2] md:py-28">
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
            <div className="overflow-hidden rounded-3xl border border-amber-900/30 shadow-2xl">
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
                  className="flex items-center gap-2.5 rounded-xl border border-amber-900/15 bg-white/80 p-3 text-xs font-semibold text-[#382618]"
                >
                  <span className="size-2 rounded-full bg-amber-600" />
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
                  <p className="text-xs font-bold text-[#221610]">{c.code}</p>
                  <p className="text-[0.7rem] text-[#6b584c]">{c.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#18110a] text-[#fbf8f2] border-t border-amber-900/20">
        <img src="/images/gallery-dock.jpg" alt="" className="hero-media absolute inset-0 size-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#18110a] via-[#18110a]/85 to-transparent" />
        <div className="site-wrap-wide relative z-10 grid gap-8 py-20 md:grid-cols-2 md:py-28">
          <Reveal>
            <div className="mb-3 flex items-center gap-2">
              <span className="size-2 rounded-full bg-amber-400" />
              <p className="eyebrow text-xs tracking-widest text-amber-400">Logistics</p>
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-[#fbf8f2] sm:text-5xl">
              Twenty-six trucks.
              <em className="block text-amber-400"> Ours.</em>
            </h2>
          </Reveal>
          <Reveal delay={80} className="flex items-end">
            <p className="text-base leading-relaxed text-[#dfd0c0] sm:text-lg">
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
