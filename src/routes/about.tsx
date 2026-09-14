import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { ImageRail } from "@/components/image-rail";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { GALLERY, LEADERSHIP, STRENGTHS, TIMELINE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [{ title: "About — Udaan Paper Industries" }],
  }),
});

function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title={
          <>
            A packaging house,
            <br />
            recast.
          </>
        }
        lede="Professionally managed. Growth-oriented. Two automatic plants, a working laboratory, and a fleet that belongs to us."
        image="/images/real-corrugator.jpg"
      />

      <ImageRail images={GALLERY} className="bg-ink" />

      <section className="bg-paper py-20 md:py-28">
        <div className="site-wrap-wide">
          <SectionHeading
            eyebrow="The board"
            title="The people who run the plants."
            lede="Brothers who came up in corrugated, and a promoter-director on the board. Not a hired-in letterhead."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP.map((person, i) => (
              <Reveal
                key={person.name}
                delay={i * 70}
                className="overflow-hidden rounded-3xl border border-amber-900/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-xl"
              >
                {person.image ? (
                  <div className="img-zoom overflow-hidden bg-amber-50/40">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="aspect-[3/4] w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[3/4] items-end bg-slate-950 p-8 text-fg">
                    <p className="font-display text-7xl font-bold text-amber-400">SJ</p>
                  </div>
                )}
                <div className="p-6">
                  <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold tracking-wider text-amber-800 uppercase">
                    {person.role}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-950">
                    {person.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{person.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 text-fg">
        <div className="grid md:grid-cols-2">
          <img
            src="/images/people/promoters.jpg"
            alt="Yash Bakliwal and Sapan Bakliwal"
            className="aspect-[4/3] w-full object-cover object-top md:aspect-auto md:min-h-[32rem]"
          />
          <div className="flex flex-col justify-center px-6 py-16 sm:px-12 md:px-16">
            <div className="mb-3 flex items-center gap-2">
              <span className="size-2 rounded-full bg-amber-400" />
              <p className="eyebrow text-xs tracking-widest text-amber-400">Promoters</p>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Yash Bakliwal
              <br />
              <span className="text-amber-400">and Sapan Bakliwal.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
              Managing Director and Whole-time Director & CFO. Civil engineers who
              learned corrugated on the floor, then bought the company and built the
              second plant.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-2 border-t border-amber-900/10 py-20 md:py-28">
        <div className="site-wrap-wide grid items-center gap-12 md:grid-cols-12 md:gap-16">
          <Reveal variant="image" className="img-zoom md:col-span-6">
            <div className="overflow-hidden rounded-3xl border border-amber-900/15 bg-white shadow-xl">
              <img
                src="/images/real-lab.jpg"
                alt="Quality laboratory at the Pithampur plant"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </Reveal>
          <div className="md:col-span-6">
            <SectionHeading
              eyebrow="The story"
              title="From a 1986 incorporation to a corrugated platform."
              lede="The current promoters acquired the business between FY 2020 and 2022 and turned it toward packaging."
            />
            <Reveal className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                Manufacturing began at Pithampur in FY 2021–22. Kanpur followed in
                2024. In January 2025 the company converted to a public limited
                house. Industry Outlook named Udaan among India’s Top 10 corrugated
                box manufacturers in 2023.
              </p>
            </Reveal>
            <div className="mt-8 space-y-3">
              {STRENGTHS.map((s) => (
                <div key={s} className="flex items-center gap-3 rounded-xl border border-amber-900/15 bg-white p-3.5 text-sm font-medium text-slate-800 shadow-xs">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">
                    ✓
                  </span>
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper border-t border-amber-900/10 py-20 md:py-28">
        <div className="site-wrap-wide">
          <SectionHeading eyebrow="Journey" title="Milestones, not slogans." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((item, i) => (
              <Reveal
                key={item.year}
                delay={i * 20}
                className="rounded-2xl border border-amber-900/15 bg-white/80 p-6 transition-all duration-300 hover:border-amber-500/50 hover:bg-white hover:shadow-md"
              >
                <span className="inline-block rounded-lg bg-amber-100 px-3 py-1 font-sans text-xs font-bold text-amber-800">
                  {item.year}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-slate-700 font-medium">
                  {item.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
