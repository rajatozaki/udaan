import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
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
      <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-[#050811] text-fg md:min-h-svh">
        {/* Modern Layered Background */}
        <div className="absolute inset-0 bg-[#050811]" />
        {reduceMotion ? (
          <img
            src="/images/real-corrugator.jpg"
            alt=""
            className="hero-media absolute inset-0 size-full object-cover opacity-30"
          />
        ) : (
          <video
            className="hero-media absolute inset-0 size-full object-cover opacity-35"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/real-corrugator.jpg"
          >
            <source src="/videos/hero-line.mp4" type="video/mp4" />
          </video>
        )}

        {/* Modern Engineering Vector Grid Pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Ambient Glow Lights */}
        <div className="pointer-events-none absolute -top-40 right-0 size-[36rem] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 -left-20 size-[32rem] rounded-full bg-blue-600/10 blur-3xl" />

        <div className="hero-scrim absolute inset-0" />
        <div className="noise" />

        {/* Hero Content Container with comfortable padding and balanced grid */}
        <div className="hero-enter site-wrap-wide relative z-10 mx-auto w-full py-32 md:py-44">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400 backdrop-blur-md">
                <span className="size-2 rounded-full bg-amber-400 animate-pulse" />
                Udaan Paper Industries
              </div>
              <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                Built to hold.
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 bg-clip-text text-transparent">
                  Made to move.
                </span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl">
                Corrugated packaging engineered at scale for the brands that feed,
                clothe and move India.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" className="shadow-lg shadow-amber-500/20">
                  <Link to="/solutions">Explore solutions</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-fg" onClick={() => setOpen(true)}>
                  Request a quote
                </Button>
              </div>
            </div>

            {/* Right Column: Modern High-Tech Live Operations Monitor Card */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-amber-500/30">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="size-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white">Live Operations</span>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[0.7rem] font-semibold text-slate-300">
                    2 Units Active
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Unit I — Pithampur</span>
                      <span className="text-xs font-bold text-amber-400">22,500 TPA</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-amber-500 to-amber-300" />
                    </div>
                    <p className="mt-1.5 text-[0.7rem] text-slate-400">Expanding toward 52,500 TPA · Central & West India</p>
                  </div>

                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Unit II — Kanpur</span>
                      <span className="text-xs font-bold text-amber-400">7,500 TPA</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-amber-500 to-amber-300" />
                    </div>
                    <p className="mt-1.5 text-[0.7rem] text-slate-400">Commissioned 2024 · Serving North India</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center">
                      <p className="font-display text-2xl font-bold text-white">26</p>
                      <p className="text-[0.68rem] font-medium uppercase tracking-wider text-slate-400">Owned Trucks</p>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center">
                      <p className="font-display text-2xl font-bold text-white">100%</p>
                      <p className="text-[0.68rem] font-medium uppercase tracking-wider text-slate-400">Recyclable</p>
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
