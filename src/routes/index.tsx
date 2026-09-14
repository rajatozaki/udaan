import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Factory, Truck, Recycle, CheckCircle2 } from "lucide-react";
import { CountUp } from "@/components/count-up";
import { CtaBand } from "@/components/cta-band";
import { ImageRail } from "@/components/image-rail";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
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

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <main>
      {/* AUTHENTIC WARM CRAFT PAPER PACKAGING HERO */}
      <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-[#faf6ee] text-[#221610] md:min-h-svh border-b border-amber-900/10">
        {/* BESPOKE BRAND CRAFT BACKGROUND ARTWORK */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {/* Warm Ambient Craft & Sunlit Atmospheric Gradients */}
          <div className="absolute -top-32 left-1/3 -translate-x-1/2 size-[48rem] rounded-full bg-gradient-to-b from-amber-500/15 via-amber-600/5 to-transparent blur-3xl" />
          <div className="absolute top-1/4 right-0 size-[36rem] rounded-full bg-emerald-600/6 blur-3xl" />
          <div className="absolute bottom-0 left-0 size-[30rem] rounded-full bg-amber-700/8 blur-2xl" />

          {/* Artisanal Laid-Paper Texture Lines */}
          <svg className="absolute inset-0 size-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="paper-laid-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <line x1="0" y1="40" x2="40" y2="40" stroke="#221610" strokeWidth="0.8" />
                <line x1="40" y1="0" x2="40" y2="40" stroke="#221610" strokeWidth="0.8" />
                <line x1="0" y1="10" x2="40" y2="10" stroke="#221610" strokeWidth="0.3" strokeDasharray="1 3" />
                <line x1="0" y1="20" x2="40" y2="20" stroke="#221610" strokeWidth="0.3" strokeDasharray="1 3" />
                <line x1="0" y1="30" x2="40" y2="30" stroke="#221610" strokeWidth="0.3" strokeDasharray="1 3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#paper-laid-grid)" />
          </svg>

          {/* Flowing Corrugated Flute & Udaan Wing Craft Vector Lines */}
          <svg
            viewBox="0 0 1440 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 size-full object-cover"
          >
            {/* Soft Corrugated Flute Sine Contours across the background */}
            <path
              d="M-100 280 C 180 200, 380 360, 680 250 C 980 140, 1180 320, 1540 220"
              stroke="#b45309"
              strokeWidth="1.5"
              strokeOpacity="0.14"
              strokeDasharray="6 8"
            />
            <path
              d="M-100 310 C 180 230, 380 390, 680 280 C 980 170, 1180 350, 1540 250"
              stroke="#d97706"
              strokeWidth="1.2"
              strokeOpacity="0.18"
            />
            <path
              d="M-100 340 C 180 260, 380 420, 680 310 C 980 200, 1180 380, 1540 280"
              stroke="#b45309"
              strokeWidth="1"
              strokeOpacity="0.12"
              strokeDasharray="4 6"
            />

            {/* Bottom Corrugated Waves */}
            <path
              d="M-50 720 C 220 660, 480 780, 800 700 C 1120 620, 1340 760, 1550 680"
              stroke="#b45309"
              strokeWidth="1.2"
              strokeOpacity="0.12"
            />
            <path
              d="M-50 750 C 220 690, 480 810, 800 730 C 1120 650, 1340 790, 1550 710"
              stroke="#d97706"
              strokeWidth="1"
              strokeOpacity="0.15"
              strokeDasharray="8 6"
            />

            {/* Stylized Udaan Brand Sprout / Wings Emblem Watermark (Behind Left Headline & Center) */}
            <g transform="translate(140, 110) scale(1.7)" strokeOpacity="0.22" fillOpacity="0.04">
              {/* Left Wing / Sprout Petals */}
              <path
                d="M 100 160 C 85 105, 35 70, 0 75 C 40 90, 70 120, 85 160 Z"
                fill="#d97706"
                stroke="#b45309"
                strokeWidth="1.2"
              />
              <path
                d="M 100 160 C 90 120, 55 90, 20 92 C 55 105, 78 132, 92 160"
                stroke="#d97706"
                strokeWidth="0.9"
              />
              <path
                d="M 100 160 C 95 130, 70 108, 42 108 C 65 120, 85 140, 96 160"
                stroke="#b45309"
                strokeWidth="0.7"
              />

              {/* Right Wing / Sprout Petals */}
              <path
                d="M 100 160 C 115 105, 165 70, 200 75 C 160 90, 130 120, 115 160 Z"
                fill="#d97706"
                stroke="#b45309"
                strokeWidth="1.2"
              />
              <path
                d="M 100 160 C 110 120, 145 90, 180 92 C 145 105, 122 132, 108 160"
                stroke="#d97706"
                strokeWidth="0.9"
              />
              <path
                d="M 100 160 C 105 130, 130 108, 158 108 C 135 120, 115 140, 104 160"
                stroke="#b45309"
                strokeWidth="0.7"
              />

              {/* Central Sprout Stem */}
              <path
                d="M 100 160 L 100 185"
                stroke="#b45309"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </g>

            {/* Second Subtle Wing Motif in Upper Right */}
            <g transform="translate(1060, 50) scale(1.2) rotate(10)" strokeOpacity="0.16" fillOpacity="0.03">
              <path
                d="M 100 160 C 85 105, 35 70, 0 75 C 40 90, 70 120, 85 160 Z"
                fill="#b45309"
                stroke="#b45309"
                strokeWidth="1.2"
              />
              <path
                d="M 100 160 C 115 105, 165 70, 200 75 C 160 90, 130 120, 115 160 Z"
                fill="#b45309"
                stroke="#b45309"
                strokeWidth="1.2"
              />
            </g>
          </svg>
        </div>

        {/* Hero Content Container */}
        <div className="hero-enter site-wrap-wide relative z-10 mx-auto w-full py-28 md:py-36">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            
            {/* Left Column: Bold Industrial Headline & Value Proposition */}
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-amber-900/15 bg-amber-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-950 shadow-xs backdrop-blur-md">
                <span className="size-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>Udaan Paper Industries · Est. 1986</span>
              </div>

              <h1 className="font-display text-5xl font-extrabold tracking-tight text-[#221610] sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02]">
                Built to hold.
                <br />
                <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent">
                  Made to move.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#5c4a3e] md:text-xl font-sans">
                Corrugated packaging engineered at scale for the brands that feed,
                clothe and move India.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl bg-amber-700 px-7 py-3.5 font-sans font-semibold text-white shadow-xl shadow-amber-900/20 transition-all duration-300 hover:bg-amber-800 border border-amber-800/30"
                >
                  <Link to="/solutions">Explore solutions</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-xl border border-amber-900/20 bg-white/90 px-7 py-3.5 font-sans font-semibold text-[#221610] backdrop-blur-md transition-all duration-300 hover:border-amber-900/40 hover:bg-white shadow-xs"
                  onClick={() => setOpen(true)}
                >
                  Request a quote
                </Button>
              </div>

              {/* Manufacturing Capabilities Strip */}
              <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-amber-900/15 pt-6 text-xs text-[#5c4a3e]">
                <span className="flex items-center gap-2 font-medium">
                  <Factory className="size-4 text-amber-700" />
                  Automatic Corrugation Lines
                </span>
                <span className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="size-4 text-emerald-700" />
                  In-House Quality Laboratory
                </span>
                <span className="flex items-center gap-2 font-medium">
                  <Truck className="size-4 text-amber-700" />
                  26 Dedicated Fleet Trucks
                </span>
                <span className="flex items-center gap-2 font-medium">
                  <Recycle className="size-4 text-emerald-700" />
                  100% Recyclable Kraft Board
                </span>
              </div>
            </div>

            {/* Right Column: Minimal Paper Packaging Craft Showcase */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="group overflow-hidden rounded-3xl border border-amber-900/15 bg-white/90 p-4 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-amber-900/15">
                {/* Clean, Minimal Kraft Boxes Photography */}
                <div className="relative overflow-hidden rounded-2xl border border-amber-900/10 shadow-sm">
                  <img
                    src="/images/udaan-minimal-boxes.jpg"
                    alt="Sustainable corrugated kraft paper packaging boxes and fluted rolls by Udaan Paper Industries"
                    className="aspect-[16/11] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 rounded-full bg-emerald-800/85 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-white backdrop-blur-md border border-emerald-600/30 shadow-xs">
                    100% Recyclable
                  </div>
                </div>

                {/* Minimal Packaging Caption */}
                <div className="mt-3.5 flex items-center justify-between px-2 py-1">
                  <div>
                    <p className="font-display text-sm font-bold text-[#221610]">
                      Corrugated Kraft Packaging
                    </p>
                    <p className="text-xs text-[#6b584c]">
                      Two Fully Automatic Plants · Pithampur & Kanpur
                    </p>
                  </div>
                  <span className="rounded-full bg-amber-600/10 px-3 py-1 text-xs font-bold text-amber-800 border border-amber-600/20">
                    30,000 TPA
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Modern Bento Stats Strip */}
      <section className="relative z-20 -mt-10 px-4 sm:px-6">
        <div className="site-wrap-wide grid grid-cols-2 gap-4 rounded-3xl border border-amber-900/30 bg-[#221610] p-4 shadow-2xl backdrop-blur-xl md:grid-cols-4 md:p-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-amber-500/40 hover:bg-white/[0.08] md:p-6"
            >
              <p className="font-display text-3xl font-bold tracking-tight text-amber-400 md:text-5xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#dfd0c0] sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12">
        <ImageRail images={GALLERY} className="bg-paper-2" />
      </div>

      <div className="overflow-hidden border-y border-amber-900/15 bg-[#ebdccb] py-5 text-[#3e2e24]">
        <div className="marquee-track">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-8 font-sans text-xs font-semibold uppercase tracking-widest text-[#5c4a3e]"
            >
              {item}
              <span className="size-1.5 rounded-full bg-amber-600" aria-hidden />
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

      <section className="relative overflow-hidden border-y border-amber-900/20 bg-[#1c120c] py-20 text-[#fbf8f2] md:py-28">
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
                className="flex flex-col justify-between rounded-2xl border border-amber-900/30 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/40 hover:bg-white/[0.08]"
              >
                <div>
                  <span className="inline-block rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-1 font-sans text-xs font-bold tracking-widest text-amber-400">
                    {step.n}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#d8c5b4]">{step.copy}</p>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a110a]/90 via-[#1a110a]/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="font-display text-2xl font-bold tracking-tight">{ind.name}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#dfd0c0]">{ind.copy}</p>
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

      <section className="relative overflow-hidden bg-[#1a110a] text-[#fbf8f2]">
        <img
          src="/images/flute.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a110a] via-[#1a110a]/85 to-[#1a110a]" />
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
            <p className="mt-6 text-base leading-relaxed text-[#d8c5b4]">
              And a growing book across food, textile and industrial accounts in
              North, Central and West India.
            </p>
          </Reveal>
          <Reveal delay={80} className="md:col-span-7">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CLIENTS.map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-3 rounded-2xl border border-amber-900/30 bg-[#251a12]/90 p-4 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all hover:border-amber-400/40 hover:bg-[#2c1f17]"
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
