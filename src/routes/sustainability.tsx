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

function SustainabilityEasterEgg() {
  return (
    <svg
      viewBox="0 0 540 320"
      fill="none"
      className="w-full h-full text-amber-950/20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Closed-Loop Circular Fibre Bio-Cycle</title>
      {/* Organic Cellular / Fibre Mesh Pattern in Background */}
      <g stroke="currentColor" strokeWidth="0.65" opacity="0.3" strokeDasharray="2 3">
        <path d="M 40 40 Q 90 90, 60 160 T 110 260" fill="none" />
        <path d="M 80 20 Q 140 80, 120 150 T 160 280" fill="none" />
        <path d="M 460 30 Q 420 110, 440 180 T 400 290" fill="none" />
        <path d="M 500 50 Q 460 130, 480 210 T 450 300" fill="none" />
      </g>

      {/* Central Closed Loop Circular Flow */}
      <g transform="translate(190, 40)" stroke="currentColor" strokeWidth="1.5" opacity="0.75">
        {/* Outer Circular Flow Track */}
        <circle cx="80" cy="80" r="70" strokeDasharray="5 5" fill="none" opacity="0.4" />
        
        {/* Loop Arrows (Continuous Mobius triad) */}
        {/* Node A: Virgin/Recycled Pulp */}
        <path d="M 80 10 A 70 70 0 0 1 145 60" fill="none" strokeWidth="2" />
        <polygon points="143,50 150,62 138,62" fill="currentColor" />
        
        {/* Node B: Corrugation & Box Manufacture */}
        <path d="M 145 100 A 70 70 0 0 1 80 150" fill="none" strokeWidth="2" />
        <polygon points="86,155 74,151 81,142" fill="currentColor" />

        {/* Node C: 100% Repulping & Re-entry */}
        <path d="M 25 100 A 70 70 0 0 1 70 12" fill="none" strokeWidth="2" />
        <polygon points="65,8 74,13 67,21" fill="currentColor" />

        {/* Center Emblem: Stylized Leaf / Cellulose Fibre with Origami Crane Nesting */}
        <path
          d="M 80 45 C 105 55, 110 85, 80 115 C 50 85, 55 55, 80 45 Z"
          fill="none"
          strokeWidth="1.5"
        />
        <line x1="80" y1="50" x2="80" y2="110" strokeWidth="1.2" />
        <path d="M 80 70 L 95 62 M 80 85 L 95 77 M 80 70 L 65 62 M 80 85 L 65 77" strokeWidth="1" />

        {/* Origami Crane in Eco-Loop Center */}
        <g transform="translate(68, 65) scale(0.5)">
          <polygon points="24,18 42,4 34,22" fill="#d97706" fillOpacity="0.4" stroke="#b45309" strokeWidth="1" />
          <polygon points="24,18 6,6 16,22" fill="#f59e0b" fillOpacity="0.5" stroke="#d97706" strokeWidth="1" />
          <polygon points="24,18 34,22 22,32 16,22" fill="#b45309" fillOpacity="0.3" stroke="#92400e" strokeWidth="1" />
        </g>

        {/* Stage Labels around circle */}
        <text x="80" y="0" fill="currentColor" fontSize="7" fontWeight="bold" fontFamily="monospace" textAnchor="middle">01 · RECOVERED FIBRE</text>
        <text x="165" y="82" fill="currentColor" fontSize="7" fontWeight="bold" fontFamily="monospace">02 · ZERO-PLASTIC PACK</text>
        <text x="80" y="168" fill="currentColor" fontSize="7" fontWeight="bold" fontFamily="monospace" textAnchor="middle">03 · 100% REPULPING</text>
        <text x="-5" y="82" fill="currentColor" fontSize="7" fontWeight="bold" fontFamily="monospace" textAnchor="end">CYCLE RETURN</text>
      </g>

      {/* ISO 14001 & Technical Specifications Stamps */}
      <g transform="translate(30, 220)" opacity="0.75" fontFamily="monospace">
        <rect x="0" y="0" width="160" height="54" rx="4" stroke="currentColor" strokeWidth="1" fill="none" />
        <text x="12" y="18" fill="currentColor" fontSize="8" fontWeight="bold">ISO 14001:2015</text>
        <text x="12" y="32" fill="currentColor" fontSize="7">ENVIRONMENTAL MGMT</text>
        <text x="12" y="44" fill="currentColor" fontSize="6.5">PITHAMPUR & KANPUR SITES</text>
      </g>

      <g transform="translate(350, 220)" opacity="0.75" fontFamily="monospace">
        <rect x="0" y="0" width="160" height="54" rx="4" stroke="currentColor" strokeWidth="1" fill="none" />
        <text x="12" y="18" fill="currentColor" fontSize="8" fontWeight="bold">BIODEGRADABLE FIBRE</text>
        <text x="12" y="32" fill="currentColor" fontSize="7">NO POLY-LAMINATION</text>
        <text x="12" y="44" fill="currentColor" fontSize="6.5">AQUASONIC CORN-STARCH ADHESIVES</text>
      </g>
    </svg>
  );
}

function SustainabilityPage() {
  return (
    <main className="bg-paper text-[#221610]">
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
        easterEgg={<SustainabilityEasterEgg />}
      />

      <ImageRail images={GALLERY.slice(0, 8)} className="bg-paper-2" />

      <section className="bg-[#1c120c] py-10 border-y border-amber-900/20">
        <div className="site-wrap-wide grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-amber-900/30 shadow-xl">
            <img
              src="/images/gallery-sheets.jpg"
              alt="Corrugated sheets"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105 md:min-h-[26rem]"
            />
          </div>
          <div className="overflow-hidden rounded-3xl border border-amber-900/30 shadow-xl">
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
          <Reveal className="space-y-6 text-base leading-relaxed text-[#5c4a3e] sm:text-lg md:col-span-7">
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

      <section className="relative overflow-hidden border-y border-amber-900/20 bg-[#1c120c] py-20 text-[#fbf8f2] md:py-28">
        <div className="site-wrap-wide grid gap-6 sm:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 50}
              className="rounded-3xl border border-amber-900/30 bg-[#251a12]/85 p-8 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/40 hover:bg-[#2c1f17] md:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="mono-spec inline-block rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-bold text-amber-400">
                  {p.n}
                </span>
                <span className="mono-spec text-[10px] text-amber-500/50">Udaan Bio-Cycle</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-[#fbf8f2] md:text-3xl">
                {p.t}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#dfd0c0] md:text-base">
                {p.d}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper-2 border-t border-amber-900/10 py-20 md:py-28">
        <div className="site-wrap-wide grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal className="img-zoom">
            <div className="overflow-hidden rounded-3xl border border-amber-900/15 paper-card shadow-xl">
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
