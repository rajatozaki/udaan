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
    <main className="home-editorial">
      <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-ink text-fg md:min-h-svh">
        {reduceMotion ? (
          <img
            src="/images/hero-line.jpg"
            alt=""
            className="hero-media absolute inset-0 size-full object-cover"
          />
        ) : (
          <video
            className="hero-media absolute inset-0 size-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-line.jpg"
          >
            <source src="/videos/hero-line.mp4" type="video/mp4" />
          </video>
        )}
        <div className="hero-scrim absolute inset-0" />
        <div className="noise" />
        <div className="hero-enter site-wrap-wide home-hero-copy relative z-10 mb-8 w-full pb-10 pt-32 md:mb-12 md:pb-14">
          <div className="mb-8 flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-fg-muted">
            <span className="h-px w-10 bg-gold" />
            Udaan Paper Industries
          </div>
          <h1 className="home-hero-title font-display">
            Built to hold.
            <br />
            <span className="text-gold">Made to move.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lede text-fg-muted md:text-xl">
            Corrugated packaging engineered at scale for the brands that feed,
            clothe and move India.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/solutions">Explore solutions</Link>
            </Button>
            <Button variant="outline" className="text-fg" onClick={() => setOpen(true)}>
              Request a quote
            </Button>
          </div>
        </div>
      </section>

      <ImageRail images={GALLERY} className="bg-ink" />

      <div className="overflow-hidden border-y border-line bg-ink-2 py-4 text-fg">
        <div className="marquee-track">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-8 font-sans text-sm font-medium tracking-tight text-fg-muted"
            >
              {item}
              <span className="text-kraft" aria-hidden>
                /
              </span>
            </span>
          ))}
        </div>
      </div>

      <section className="editorial-grid bg-paper py-16 md:pb-28 md:pt-24">
        <div className="site-wrap-wide grid items-center gap-10 md:grid-cols-12 md:gap-14">
          <div className="editorial-rule md:col-span-5">
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
              <p className="mt-6 max-w-xl text-ink-muted">
                From board design to the dock, the process stays in-house: corrugation,
                conversion, quality testing and delivery on our own fleet.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-ink-fg transition-colors hover:text-ink-muted"
              >
                Read the story
                <ArrowUpRight className="size-4" />
              </Link>
            </Reveal>
          </div>
          <Reveal variant="image" className="editorial-image-offset editorial-image image-frame md:col-span-7" delay={100}>
            <img
              src="/images/real-warehouse.jpg"
              alt="Kraft boxes staged in the Pithampur warehouse"
              className="aspect-[5/4] w-full object-cover object-center"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-ink">
        <div className="site-wrap-wide grid grid-cols-2 gap-px bg-line md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="group flex min-h-40 flex-col justify-between bg-ink px-5 py-8 transition-colors duration-300 hover:bg-ink-2 md:min-h-52 md:px-8 md:py-10">
              <p className="font-display text-4xl text-fg md:text-6xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm tracking-tight text-fg-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="site-wrap-wide grid items-start gap-10 md:grid-cols-12 md:gap-14">
          <div className="editorial-rule md:sticky md:top-28 md:col-span-4">
            <SectionHeading
              eyebrow="The board"
              title="The people who run the plants."
              lede="Brothers who came up in corrugated — not a hired-in letterhead."
            />
            <Link
              to="/about"
                className="editorial-link mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-tight"
            >
              Meet the promoters
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:col-span-8 md:gap-5">
            {LEADERSHIP.filter((p) => p.image).map((person, i) => (
              <Reveal key={person.name} delay={i * 60}>
                <Link to="/about" className="group block">
                  <div className="editorial-image image-frame">
                    <img
                      src={person.image!}
                      alt={person.name}
                      className="aspect-[4/5] w-full object-cover object-top"
                    />
                  </div>
                  <p className="mt-4 border-t border-line-paper pt-3 font-display text-2xl">{person.name}</p>
                  <p className="mt-1 text-sm text-ink-muted">{person.role}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-16 md:py-24">
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
          <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2">
            {PRODUCTS.map((product, i) => (
              <Reveal key={product.slug} delay={i * 60} className="h-full">
                <Link
                  to="/solutions"
                  hash={product.slug}
                  className="editorial-card group flex h-full flex-col bg-paper"
                >
                  <div className="editorial-image image-frame">
                    <img
                      src={product.image}
                      alt=""
                      className="aspect-[16/10] w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 items-start justify-between gap-4 p-6 md:p-8">
                    <div>
                      <p className="eyebrow">{product.kicker}</p>
                      <h3 className="mt-3 font-display text-3xl">{product.name}</h3>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
                        {product.summary}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-1 size-5 shrink-0 text-ink-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-fg md:py-24">
        <div className="site-wrap-wide">
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
          <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((step, i) => (
              <Reveal
                key={step.n}
                delay={i * 50}
                className="flex min-h-64 flex-col bg-ink px-5 py-8 transition-colors duration-300 hover:bg-ink-2 md:px-6 md:py-10"
              >
                <p className="font-sans text-[0.7rem] tracking-[0.22em] text-kraft">
                  {step.n}
                </p>
                <h3 className="mt-auto pt-10 font-display text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{step.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
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
              className="editorial-link inline-flex items-center gap-2 text-sm font-medium tracking-tight"
            >
              All industries
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-12">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 50} className={i === INDUSTRIES.length - 1 ? "lg:col-span-6" : "lg:col-span-3"}>
                <Link to="/industries" hash={ind.slug} className="group relative block h-full overflow-hidden">
                  <div className="editorial-image h-full overflow-hidden">
                    <img
                      src={ind.image}
                      alt=""
                      className="aspect-[4/5] h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-fg">
                    <h3 className="font-display text-2xl">{ind.name}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-fg-muted">{ind.copy}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-16 md:py-24">
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
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {PLANTS.map((plant, i) => (
              <Reveal key={plant.id} delay={i * 70}>
                <Link to="/plants" hash={plant.id} className="group block border-t border-ink-fg pt-4">
                  <div className="editorial-image overflow-hidden">
                    <img
                      src={plant.image}
                      alt=""
                      className="aspect-[16/10] w-full object-cover"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="eyebrow">{plant.serves}</p>
                      <h3 className="mt-2 font-display text-3xl">{plant.name}</h3>
                      <p className="mt-2 text-sm text-ink-muted">
                        {plant.capacity} installed · {plant.area}
                        {plant.expanding ? ` · expanding to ${plant.expanding}` : ""}
                      </p>
                    </div>
                    <ArrowUpRight className="size-5 text-ink-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src="/images/flute.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="site-wrap-wide relative grid gap-10 py-16 text-fg md:grid-cols-12 md:py-24">
          <Reveal className="md:col-span-5">
            <p className="eyebrow mb-5">Trusted by</p>
            <h2 className="font-display text-title">
              The brands that already
              <em> move on Udaan board.</em>
            </h2>
          </Reveal>
          <Reveal delay={80} className="flex flex-col justify-end md:col-span-7">
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CLIENTS.map((c) => (
                <li
                  key={c}
                  className="border-t border-fg/15 pt-3 text-sm tracking-wide text-fg"
                >
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-fg-muted">
              And a growing book across food, textile and industrial accounts in
              North, Central and West India.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="site-wrap-wide grid gap-8 border-y border-line-paper py-8 md:grid-cols-12 md:items-start">
          <p className="eyebrow md:col-span-3">Certified systems</p>
          <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 md:col-span-9 lg:grid-cols-5">
            {CERTS.map((c) => (
              <div key={c.code}>
                <p className="font-sans text-sm font-medium text-ink-fg">{c.code}</p>
                <p className="text-xs text-ink-muted">{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
