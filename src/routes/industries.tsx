import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { ImageRail } from "@/components/image-rail";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { INDUSTRIES } from "@/lib/site";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
  head: () => ({
    meta: [{ title: "Industries — Udaan Paper Industries" }],
  }),
});

function IndustriesEasterEgg() {
  return (
    <svg
      viewBox="0 0 540 320"
      fill="none"
      className="w-full h-full text-amber-950/20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Cargo Transit & Stencil Markings Easter Egg</title>
      {/* Background Logistics Grid */}
      <g stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 4" opacity="0.4">
        <line x1="20" y1="40" x2="520" y2="40" />
        <line x1="20" y1="120" x2="520" y2="120" />
        <line x1="20" y1="200" x2="520" y2="200" />
        <line x1="20" y1="280" x2="520" y2="280" />
        <line x1="140" y1="20" x2="140" y2="300" />
        <line x1="270" y1="20" x2="270" y2="300" />
        <line x1="400" y1="20" x2="400" y2="300" />
      </g>

      {/* Transit Route Nodes */}
      <g stroke="currentColor" strokeWidth="1.2" opacity="0.6">
        <path d="M 60 160 Q 140 90, 220 140 T 380 110 T 480 180" fill="none" strokeDasharray="4 4" />
        <circle cx="60" cy="160" r="4" fill="currentColor" />
        <circle cx="220" cy="140" r="3" fill="currentColor" />
        <circle cx="380" cy="110" r="4" fill="currentColor" />
        <circle cx="480" cy="180" r="3.5" fill="currentColor" />
        <text x="60" y="176" fill="currentColor" fontSize="7.5" fontFamily="monospace" textAnchor="middle">INDORE HUB</text>
        <text x="220" y="128" fill="currentColor" fontSize="7.5" fontFamily="monospace" textAnchor="middle">CORRIDOR 01</text>
        <text x="380" y="98" fill="currentColor" fontSize="7.5" fontFamily="monospace" textAnchor="middle">KANPUR HUB</text>
        <text x="480" y="196" fill="currentColor" fontSize="7.5" fontFamily="monospace" textAnchor="middle">DISPATCH</text>
      </g>

      {/* Carton Stencil 1: THIS SIDE UP */}
      <g transform="translate(40, 48)" opacity="0.75">
        <rect x="0" y="0" width="84" height="68" rx="4" stroke="currentColor" strokeWidth="1.5" />
        {/* Arrows */}
        <g fill="currentColor">
          <path d="M 28 44 L 28 26 L 22 26 L 32 14 L 42 26 L 36 26 L 36 44 Z" />
          <path d="M 52 44 L 52 26 L 46 26 L 56 14 L 66 26 L 60 26 L 60 44 Z" />
          <line x1="20" y1="48" x2="64" y2="48" stroke="currentColor" strokeWidth="1.5" />
        </g>
        <text x="42" y="60" fill="currentColor" fontSize="6.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle" letterSpacing="0.5">THIS SIDE UP</text>
      </g>

      {/* Carton Stencil 2: KEEP DRY (Umbrella) */}
      <g transform="translate(148, 48)" opacity="0.75">
        <rect x="0" y="0" width="84" height="68" rx="4" stroke="currentColor" strokeWidth="1.5" />
        {/* Umbrella Canopy & Handle */}
        <path d="M 24 34 C 24 22, 60 22, 60 34 Z" fill="currentColor" />
        <line x1="42" y1="20" x2="42" y2="42" stroke="currentColor" strokeWidth="1.75" />
        <path d="M 42 42 C 42 46, 36 46, 36 43" fill="none" stroke="currentColor" strokeWidth="1.75" />
        {/* Raindrops */}
        <circle cx="28" cy="20" r="1.2" fill="currentColor" />
        <circle cx="34" cy="16" r="1.2" fill="currentColor" />
        <circle cx="50" cy="17" r="1.2" fill="currentColor" />
        <text x="42" y="60" fill="currentColor" fontSize="6.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle" letterSpacing="0.5">KEEP DRY</text>
      </g>

      {/* Carton Stencil 3: FRAGILE (Wine Glass) */}
      <g transform="translate(308, 48)" opacity="0.75">
        <rect x="0" y="0" width="84" height="68" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M 32 18 C 32 30, 52 30, 52 18 Z" fill="none" stroke="currentColor" strokeWidth="1.75" />
        {/* Crack line */}
        <path d="M 38 18 L 41 23 L 39 26 L 43 30" fill="none" stroke="currentColor" strokeWidth="1" />
        <line x1="42" y1="30" x2="42" y2="43" stroke="currentColor" strokeWidth="1.75" />
        <line x1="34" y1="43" x2="50" y2="43" stroke="currentColor" strokeWidth="1.75" />
        <text x="42" y="60" fill="currentColor" fontSize="6.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle" letterSpacing="0.5">HANDLE CARE</text>
      </g>

      {/* Carton Stencil 4: MAX STACK LEVEL */}
      <g transform="translate(416, 48)" opacity="0.75">
        <rect x="0" y="0" width="84" height="68" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <rect x="26" y="16" width="32" height="6" stroke="currentColor" strokeWidth="1" fill="none" />
        <rect x="26" y="24" width="32" height="6" stroke="currentColor" strokeWidth="1" fill="none" />
        <rect x="26" y="32" width="32" height="6" stroke="currentColor" strokeWidth="1" fill="none" />
        <text x="42" y="27" fill="currentColor" fontSize="6" fontWeight="bold" fontFamily="monospace" textAnchor="middle">MAX</text>
        <text x="42" y="47" fill="currentColor" fontSize="7" fontWeight="bold" fontFamily="monospace" textAnchor="middle">5 TIERS</text>
        <text x="42" y="60" fill="currentColor" fontSize="6.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle" letterSpacing="0.5">STACK LIMIT</text>
      </g>

      {/* Barcode / Shipping Spec Stencil */}
      <g transform="translate(40, 220)" opacity="0.6">
        <line x1="0" y1="0" x2="0" y2="28" stroke="currentColor" strokeWidth="3" />
        <line x1="6" y1="0" x2="6" y2="28" stroke="currentColor" strokeWidth="1.5" />
        <line x1="11" y1="0" x2="11" y2="28" stroke="currentColor" strokeWidth="4" />
        <line x1="19" y1="0" x2="19" y2="28" stroke="currentColor" strokeWidth="1" />
        <line x1="24" y1="0" x2="24" y2="28" stroke="currentColor" strokeWidth="3" />
        <line x1="31" y1="0" x2="31" y2="28" stroke="currentColor" strokeWidth="2" />
        <line x1="38" y1="0" x2="38" y2="28" stroke="currentColor" strokeWidth="4.5" />
        <line x1="47" y1="0" x2="47" y2="28" stroke="currentColor" strokeWidth="1.5" />
        <line x1="53" y1="0" x2="53" y2="28" stroke="currentColor" strokeWidth="3" />
        <line x1="60" y1="0" x2="60" y2="28" stroke="currentColor" strokeWidth="2" />
        <line x1="68" y1="0" x2="68" y2="28" stroke="currentColor" strokeWidth="4" />
        <line x1="78" y1="0" x2="78" y2="28" stroke="currentColor" strokeWidth="1" />
        <line x1="84" y1="0" x2="84" y2="28" stroke="currentColor" strokeWidth="3" />
        <text x="42" y="38" fill="currentColor" fontSize="7" fontFamily="monospace" textAnchor="middle" letterSpacing="1.5">UDAAN-SPEC-4819</text>
      </g>

      {/* Engineering watermark text */}
      <g transform="translate(300, 235)" opacity="0.65" fontFamily="monospace" fontSize="8" fill="currentColor">
        <text x="0" y="0">TRANSIT SPEC: IS:2771 / ASTM-D4727</text>
        <text x="0" y="14">ECT: 32-55 LBS/IN · BCT CALIBRATED</text>
        <text x="0" y="28">DISPATCH: 26 UNITS IN-HOUSE CARRIER</text>
      </g>

      {/* Origami Bird Escort Over Transit Route */}
      <g transform="translate(230, 80) scale(0.6)" opacity="0.8">
        <polygon points="30,22 52,6 42,27" fill="#d97706" fillOpacity="0.4" stroke="#b45309" strokeWidth="1" />
        <polygon points="30,22 8,8 20,27" fill="#f59e0b" fillOpacity="0.5" stroke="#d97706" strokeWidth="1" />
        <polygon points="30,22 42,27 27,39 20,27" fill="#b45309" fillOpacity="0.3" stroke="#92400e" strokeWidth="1" />
      </g>
    </svg>
  );
}

function IndustriesPage() {
  return (
    <main className="bg-paper text-[#221610]">
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Packaging solutions
            <br />
            for every line.
          </>
        }
        lede="FMCG, food, dairy, textile, e-commerce, pharma and industrial — each with a different compression, hygiene and print brief."
        image="/images/gallery-print.jpg"
        easterEgg={<IndustriesEasterEgg />}
      />

      <ImageRail
        images={INDUSTRIES.map((ind) => ({ src: ind.image, alt: ind.name }))}
        className="bg-paper-2"
      />

      <section className="bg-paper py-16 md:py-24 border-t border-amber-900/10">
        <div className="site-wrap-wide grid gap-6 sm:grid-cols-2">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 40}>
              <article
                id={ind.slug}
                className="group relative block overflow-hidden rounded-3xl border border-amber-900/15 shadow-sm scroll-mt-28 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-xl"
              >
                <div className="img-zoom">
                  <img
                    src={ind.image}
                    alt=""
                    className="aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c120c]/85 via-[#1c120c]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                  <span className="mono-spec inline-block rounded-full bg-amber-400/20 px-3 py-1 font-bold text-amber-400 backdrop-blur-md border border-amber-400/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#fbf8f2] md:text-3xl">
                    {ind.name}
                  </h2>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-[#dfd0c0]">
                    {ind.copy}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="A new category? Send the brief." />
    </main>
  );
}
