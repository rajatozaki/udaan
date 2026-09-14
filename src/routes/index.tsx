import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Layers, Sparkles, ShieldCheck } from "lucide-react";
import { CountUp } from "@/components/count-up";
import { CtaBand } from "@/components/cta-band";
import { ImageRail } from "@/components/image-rail";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { PaperFluteCanvas } from "@/components/paper-flute-canvas";
import { useQuote } from "@/lib/quote";
import {
  CERTS,
  CLIENTS,
  GALLERY,
  INDUSTRIES,
  LEADERSHIP,
  MARQUEE,
  PLANTS,
  PROCESS,
  PRODUCTS,
  STATS,
} from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { setOpen } = useQuote();
  const [reduceMotion, setReduceMotion] = useState(false);
  const [activeFlute, setActiveFlute] = useState<"B" | "C" | "BC">("BC");

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <main>
      {/* ART & CRAFT HERO SECTION */}
      <section className="relative flex min-h-[94svh] items-center overflow-hidden bg-[#100c08] text-fg md:min-h-svh">
        {/* Deep Tactile Kraft Fiber & Laid Paper Background */}
        <div className="absolute inset-0 bg-radial-[ellipse_at_top,_#261c12_0%,_#100c08_70%,_#090604_100%]" />

        {/* Tactile Kinetic Paper Flute Canvas */}
        <PaperFluteCanvas className="absolute inset-0 size-full opacity-65 mix-blend-screen pointer-events-none" />

        {/* Architectural Packaging Scoring & Registration Marks */}
        <div className="pointer-events-none absolute inset-0 select-none">
          {/* Corner Crosshairs */}
          <div className="absolute top-8 left-8 text-amber-400/30 font-mono text-xs flex items-center gap-2">
            <span>⌖</span>
            <span className="hidden sm:inline tracking-widest text-[0.65rem] uppercase">REGISTRATION: 0.02mm · DIE-CUT SPEC</span>
          </div>
          <div className="absolute top-8 right-8 text-amber-400/30 font-mono text-xs flex items-center gap-2">
            <span className="hidden sm:inline tracking-widest text-[0.65rem] uppercase">CALIPER TOLERANCE: ±0.05mm</span>
            <span>⌖</span>
          </div>
          {/* Fine Technical Scoring Guide Lines */}
          <div className="absolute inset-x-8 top-16 border-t border-dashed border-amber-400/10" />
          <div className="absolute inset-x-8 bottom-16 border-b border-dashed border-amber-400/10" />
        </div>

        {/* Tactile Paper Texture Scrim */}
        <div className="hero-scrim absolute inset-0 bg-gradient-to-b from-[#100c08]/60 via-transparent to-[#100c08]/90" />
        <div className="noise opacity-15" />

        {/* Hero Content Container */}
        <div className="hero-enter site-wrap-wide relative z-10 mx-auto w-full py-28 md:py-36">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            
            {/* Left Column: Sculptural Clash Display Typography & Art Direction */}
            <div className="lg:col-span-7">
              {/* Artisanal Packaging Studio Hallmark */}
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-[#241a12]/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300 shadow-md backdrop-blur-md">
                <span className="size-2 rounded-full bg-amber-400 animate-pulse" />
                <span>Udaan Paper Industries · Est. 1986</span>
              </div>

              {/* Sculptural Clash Display Headline */}
              <h1 className="font-display text-5xl font-bold tracking-tight text-[#fdfbf7] sm:text-6xl md:text-7xl lg:text-8xl leading-[0.98]">
                Built to hold.
                <br />
                <span className="font-display italic font-light text-amber-300">
                  Made to move.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#dfd7c5] md:text-xl font-sans">
                Corrugated packaging engineered at scale for the brands that feed,
                clothe and move India.
              </p>

              {/* High-Craft Action Controls */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl bg-amber-500 px-7 py-3.5 font-sans font-semibold text-slate-950 shadow-xl shadow-amber-950/50 transition-all duration-300 hover:bg-amber-400 hover:scale-105"
                >
                  <Link to="/solutions">Explore solutions</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-xl border border-amber-300/30 bg-white/[0.04] px-7 py-3.5 font-sans font-semibold text-[#fdfbf7] backdrop-blur-md transition-all duration-300 hover:border-amber-400 hover:bg-white/[0.08]"
                  onClick={() => setOpen(true)}
                >
                  Request a quote
                </Button>
              </div>

              {/* Technical Papercraft Footnote */}
              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-amber-400/15 pt-6 text-xs text-[#b8a994] font-mono">
                <span className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-amber-400" />
                  3-Ply & 5-Ply Flute Engineering
                </span>
                <span className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-amber-400" />
                  In-House Testing Laboratory
                </span>
                <span className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-amber-400" />
                  100% Recyclable Virgin & Kraft Fibre
                </span>
              </div>
            </div>

            {/* Right Column: Tactile Structural Packaging Craft Matrix (Replaces SaaS Widget) */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-amber-400/25 bg-[#1b140e]/85 p-7 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-amber-400/50">
                {/* Physical Packaging Specimen Header */}
                <div className="flex items-center justify-between border-b border-amber-400/15 pb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-7 items-center justify-center rounded-lg bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-mono">
                      ⌖
                    </div>
                    <div>
                      <p className="font-display text-sm font-bold tracking-wide text-white">Structural Fluting Specimen</p>
                      <p className="text-[0.68rem] text-amber-400/80 font-mono tracking-wider uppercase">Caliper & Board Architecture</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[0.7rem] font-semibold text-amber-300">
                    Grade A+ Heavy
                  </span>
                </div>

                {/* Interactive Flute Architecture Selector */}
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Select Board Configuration:</p>
                  <div className="mt-2.5 grid grid-cols-3 gap-2">
                    {(["B", "C", "BC"] as const).map((flute) => (
                      <button
                        key={flute}
                        type="button"
                        onClick={() => setActiveFlute(flute)}
                        className={`cursor-pointer rounded-xl border p-2.5 text-center transition-all ${
                          activeFlute === flute
                            ? "border-amber-400 bg-amber-500/20 text-white shadow-md shadow-amber-500/10"
                            : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        <p className="font-display text-sm font-bold">{flute}-Flute</p>
                        <p className="text-[0.65rem] text-amber-300/80">
                          {flute === "B" ? "3.0mm" : flute === "C" ? "4.0mm" : "7.0mm 5-Ply"}
                        </p>
                      </button>
                    ))}
                  </div>

                  {/* Physical Fluting Profile Diagram */}
                  <div className="mt-4 rounded-2xl border border-amber-400/15 bg-black/30 p-4">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span className="font-mono text-amber-300">
                        {activeFlute === "B" && "B-Flute · 48 flutes/ft · High Crush Resistance"}
                        {activeFlute === "C" && "C-Flute · 39 flutes/ft · Cushioning & Compression"}
                        {activeFlute === "BC" && "BC Double Wall · 5-Ply · Heavy Export & Industrial"}
                      </span>
                    </div>
                    {/* SVG Diagram of Flute Waves */}
                    <div className="mt-3 flex items-center justify-center py-2">
                      <svg className="w-full h-8 text-amber-400" viewBox="0 0 300 32" fill="none" stroke="currentColor">
                        {/* Top linerboard */}
                        <line x1="0" y1="2" x2="300" y2="2" strokeWidth="2.5" stroke="rgba(245, 158, 11, 0.9)" />
                        {/* Fluting Sine Wave */}
                        {activeFlute === "BC" ? (
                          <>
                            <path d="M0,16 Q10,4 20,16 T40,16 T60,16 T80,16 T100,16 T120,16 T140,16 T160,16 T180,16 T200,16 T220,16 T240,16 T260,16 T280,16 T300,16" strokeWidth="2" stroke="rgba(251, 191, 36, 0.8)" fill="none" />
                            <line x1="0" y1="16" x2="300" y2="16" strokeWidth="1.5" stroke="rgba(245, 158, 11, 0.6)" />
                            <path d="M0,30 Q15,16 30,30 T60,30 T90,30 T120,30 T150,30 T180,30 T210,30 T240,30 T270,30 T300,30" strokeWidth="2" stroke="rgba(251, 191, 36, 0.8)" fill="none" />
                          </>
                        ) : (
                          <path d="M0,30 Q12,2 24,30 T48,30 T72,30 T96,30 T120,30 T144,30 T168,30 T192,30 T216,30 T240,30 T264,30 T288,30 T312,30" strokeWidth="2.5" stroke="rgba(251, 191, 36, 0.85)" fill="none" />
                        )}
                        {/* Bottom linerboard */}
                        <line x1="0" y1="30" x2="300" y2="30" strokeWidth="2.5" stroke="rgba(245, 158, 11, 0.9)" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Authentic Plant Capabilities (Strictly Preserved) */}
                <div className="mt-5 space-y-3 pt-3 border-t border-amber-400/15">
                  <div className="flex items-center justify-between rounded-xl bg-white/[0.02] p-3 border border-white/5">
                    <div>
                      <p className="text-xs font-bold text-white">Unit I — Pithampur</p>
                      <p className="text-[0.68rem] text-slate-400">Expanding toward 52,500 TPA · Central & West India</p>
                    </div>
                    <span className="font-display font-bold text-amber-400 text-sm">22,500 TPA</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-white/[0.02] p-3 border border-white/5">
                    <div>
                      <p className="text-xs font-bold text-white">Unit II — Kanpur</p>
                      <p className="text-[0.68rem] text-slate-400">Commissioned 2024 · Serving North India</p>
                    </div>
                    <span className="font-display font-bold text-amber-400 text-sm">7,500 TPA</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5 text-center">
                      <p className="font-display text-xl font-bold text-white">26</p>
                      <p className="text-[0.65rem] font-medium uppercase tracking-wider text-slate-400">Owned Trucks</p>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5 text-center">
                      <p className="font-display text-xl font-bold text-amber-400">100%</p>
                      <p className="text-[0.65rem] font-medium uppercase tracking-wider text-slate-400">Recyclable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Modern Bento Stats Strip */}
      <section className="relative z-20 -mt-10 px-4 sm:px-6">
        <div className="site-wrap-wide grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-xl md:grid-cols-4 md:p-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col justify-between rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:border-amber-500/30 hover:bg-white/[0.04] md:p-6"
            >
              <p className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-400 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12">
        <ImageRail images={GALLERY} className="bg-slate-950" />
      </div>

      <div className="overflow-hidden border-y border-white/10 bg-slate-950 py-5 text-fg">
        <div className="marquee-track">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-8 font-sans text-xs font-semibold uppercase tracking-widest text-slate-400"
            >
              {item}
              <span className="size-1.5 rounded-full bg-amber-400" aria-hidden />
            </span>
          ))}
        </div>
      </div>

      <section className="bg-paper py-20 md:py-28">
        <div className="site-wrap-wide grid items-center gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <SectionHeading
              eyebrow="The company"
              title={
                <>
                  Two plants. One standard.
                  <em> No compromise.</em>
                </>
              }
              lede="Udaan Paper Industries Limited is a corrugated packaging manufacturer with fully automatic production at Pithampur, Madhya Pradesh and Kanpur, Uttar Pradesh — close to the FMCG, food and textile clusters we serve."
            />
            <Reveal delay={80}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600">
                From board design to the dock, the process stays in-house: corrugation,
                conversion, quality testing and delivery on our own fleet.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-xl border border-amber-900/15 bg-white/90 px-5 py-2.5 text-sm font-semibold tracking-tight text-slate-900 shadow-xs transition-all hover:border-amber-500 hover:bg-white hover:shadow-md"
              >
                Read the story
                <ArrowUpRight className="size-4 text-amber-600" />
              </Link>
            </Reveal>
          </div>
          <Reveal variant="image" className="img-zoom md:col-span-7" delay={100}>
            <div className="overflow-hidden rounded-3xl border border-amber-900/15 bg-white shadow-xl">
              <img
                src="/images/real-warehouse.jpg"
                alt="Kraft boxes staged in the Pithampur warehouse"
                className="aspect-[16/11] w-full object-cover object-center"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-2 border-t border-amber-900/10 py-20 md:py-28">
        <div className="site-wrap-wide grid items-start gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:sticky md:top-28 md:col-span-4">
            <SectionHeading
              eyebrow="The board"
              title="The people who run the plants."
              lede="Brothers who came up in corrugated — not a hired-in letterhead."
            />
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-amber-900/15 bg-white/90 px-5 py-2.5 text-sm font-semibold tracking-tight text-slate-900 shadow-xs transition-all hover:border-amber-500 hover:bg-white hover:shadow-md"
            >
              Meet the promoters
              <ArrowUpRight className="size-4 text-amber-600" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:col-span-8">
            {LEADERSHIP.filter((p) => p.image).map((person, i) => (
              <Reveal key={person.name} delay={i * 60}>
                <Link
                  to="/about"
                  className="group block overflow-hidden rounded-3xl border border-amber-900/15 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-xl"
                >
                  <div className="overflow-hidden rounded-2xl bg-amber-50/40">
                    <img
                      src={person.image!}
                      alt={person.name}
                      className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 pt-5">
                    <p className="font-display text-2xl font-bold tracking-tight text-slate-950">{person.name}</p>
                    <p className="mt-1 text-sm font-medium text-amber-600">{person.role}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper border-t border-amber-900/10 py-20 md:py-28">
        <div className="site-wrap-wide">
          <SectionHeading
            eyebrow="Solutions"
            title={
              <>
                Packaging, specified
                <em> for the product.</em>
              </>
            }
            lede="Boxes, printed cartons, sheets, rolls and engineered structures — produced on automatic lines, qualified in our laboratory."
          />
          <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2">
            {PRODUCTS.map((product, i) => (
              <Reveal key={product.slug} delay={i * 60} className="h-full">
                <Link
                  to="/solutions"
                  hash={product.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-amber-900/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-xl"
                >
                  <div className="overflow-hidden bg-amber-50/40">
                    <img
                      src={product.image}
                      alt=""
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 items-start justify-between gap-4 p-8">
                    <div>
                      <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold tracking-wider text-amber-800 uppercase">
                        {product.kicker}
                      </span>
                      <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                        {product.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {product.summary}
                      </p>
                    </div>
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 transition-all group-hover:border-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950">
                      <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-slate-950 py-20 text-fg md:py-28">
        <div className="site-wrap-wide relative z-10">
          <SectionHeading
            onDark
            eyebrow="The Udaan cycle"
            title={
              <>
                From brief to
                <em> dock.</em>
              </>
            }
            lede="Five steps, none of them outsourced. The same team that designs the pack qualifies it and puts it on a truck."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((step, i) => (
              <Reveal
                key={step.n}
                delay={i * 50}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/40 hover:bg-white/[0.06]"
              >
                <div>
                  <span className="inline-block rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-1 font-sans text-xs font-bold tracking-widest text-amber-400">
                    {step.n}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{step.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-2 border-t border-amber-900/10 py-20 md:py-28">
        <div className="site-wrap-wide">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Industries"
              title={
                <>
                  Built for the way
                  <em> India ships.</em>
                </>
              }
            />
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 rounded-xl border border-amber-900/15 bg-white/90 px-5 py-2.5 text-sm font-semibold tracking-tight text-slate-900 shadow-xs transition-all hover:border-amber-500 hover:bg-white hover:shadow-md"
            >
              All industries
              <ArrowUpRight className="size-4 text-amber-600" />
            </Link>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
            {INDUSTRIES.map((ind, i) => (
              <Reveal
                key={ind.slug}
                delay={i * 50}
                className={i === INDUSTRIES.length - 1 ? "lg:col-span-6" : "lg:col-span-3"}
              >
                <Link
                  to="/industries"
                  hash={ind.slug}
                  className="group relative block h-full min-h-[280px] overflow-hidden rounded-3xl border border-amber-900/15 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-xl"
                >
                  <div className="h-full overflow-hidden">
                    <img
                      src={ind.image}
                      alt=""
                      className="aspect-[4/5] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="font-display text-2xl font-bold tracking-tight">{ind.name}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-300">{ind.copy}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper border-t border-amber-900/10 py-20 md:py-28">
        <div className="site-wrap-wide">
          <SectionHeading
            eyebrow="Infrastructure"
            title={
              <>
                Pithampur. Kanpur.
                <em> North, Central, West.</em>
              </>
            }
            lede="Two automatic plants placed against the consumption belts they serve, with an in-house fleet between the dock and the customer."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {PLANTS.map((plant, i) => (
              <Reveal key={plant.id} delay={i * 70}>
                <Link
                  to="/plants"
                  hash={plant.id}
                  className="group block overflow-hidden rounded-3xl border border-amber-900/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-xl"
                >
                  <div className="overflow-hidden bg-amber-50/40">
                    <img
                      src={plant.image}
                      alt=""
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold tracking-wider text-amber-800 uppercase">
                        {plant.serves}
                      </span>
                      <div className="flex size-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 transition-all group-hover:border-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950">
                        <ArrowUpRight className="size-4.5" />
                      </div>
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                      {plant.name}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
                      <span className="rounded-lg bg-white px-2.5 py-1 border border-amber-900/15">
                        {plant.capacity} installed
                      </span>
                      <span className="rounded-lg bg-white px-2.5 py-1 border border-amber-900/15">
                        {plant.area}
                      </span>
                      {plant.expanding ? (
                        <span className="rounded-lg bg-amber-50 px-2.5 py-1 border border-amber-200 text-amber-700 font-semibold">
                          expanding to {plant.expanding}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 text-fg">
        <img
          src="/images/flute.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
        <div className="site-wrap-wide relative z-10 grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <Reveal className="md:col-span-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="size-2 rounded-full bg-amber-400" />
              <p className="eyebrow text-xs tracking-widest text-amber-400">Trusted by</p>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              The brands that already
              <em className="block text-amber-400"> move on Udaan board.</em>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-300">
              And a growing book across food, textile and industrial accounts in
              North, Central and West India.
            </p>
          </Reveal>
          <Reveal delay={80} className="md:col-span-7">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CLIENTS.map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all hover:border-amber-400/40 hover:bg-white/[0.06]"
                >
                  <span className="size-2 rounded-full bg-amber-400" />
                  {c}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-amber-900/10 bg-paper-2 py-16 md:py-20">
        <div className="site-wrap-wide grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-3">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-amber-500" />
              <p className="eyebrow text-xs text-amber-600">Certified systems</p>
            </div>
            <p className="mt-2 text-sm font-medium text-slate-500">Global standards & audits</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:col-span-9 lg:grid-cols-5">
            {CERTS.map((c) => (
              <div
                key={c.code}
                className="rounded-2xl border border-amber-900/15 bg-white/80 p-4 shadow-xs transition-all hover:border-amber-500/50 hover:bg-white hover:shadow-md"
              >
                <p className="font-sans text-sm font-bold text-slate-950">{c.code}</p>
                <p className="mt-1 text-xs text-slate-500">{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
