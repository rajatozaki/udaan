import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { ImageRail } from "@/components/image-rail";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { OrigamiBirdSmall, OrigamiBirdSeal, OrigamiFoldDivider } from "@/components/origami-birds";
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
        easterEgg={
          /* EASTER EGG: The 1986 Origami Flight & Tree Rings */
          <svg
            viewBox="0 0 900 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-10 left-10 size-[42rem] opacity-[0.2] pointer-events-none"
          >
            {/* Concentric botanical tree growth rings (paper fiber heritage) */}
            <circle cx="380" cy="280" r="80" stroke="#b45309" strokeWidth="0.8" strokeDasharray="3 4" />
            <circle cx="380" cy="280" r="140" stroke="#d97706" strokeWidth="1" />
            <circle cx="380" cy="280" r="200" stroke="#b45309" strokeWidth="0.8" strokeDasharray="6 8" />
            <circle cx="380" cy="280" r="260" stroke="#d97706" strokeWidth="0.75" />

            {/* Geometric Origami Paper Bird in Flight ("Udaan") */}
            <g transform="translate(260, 160) scale(1.1)">
              <polygon points="120,40 180,110 90,110" fill="#d97706" fillOpacity="0.25" stroke="#b45309" strokeWidth="1.2" />
              <polygon points="180,110 240,60 180,40" fill="#f59e0b" fillOpacity="0.2" stroke="#b45309" strokeWidth="1" />
              <polygon points="90,110 30,80 70,140" fill="#b45309" fillOpacity="0.2" stroke="#b45309" strokeWidth="1" />
              <polygon points="120,40 90,110 140,160" fill="#d97706" fillOpacity="0.3" stroke="#b45309" strokeWidth="1.2" />
              <polygon points="140,160 180,110 120,40" fill="#f59e0b" fillOpacity="0.35" stroke="#b45309" strokeWidth="1.2" />
              <polygon points="140,160 130,220 160,180" fill="#b45309" fillOpacity="0.25" stroke="#b45309" strokeWidth="1" />
            </g>

            {/* Heritage Foundation Seal */}
            <g transform="translate(180, 420)">
              <circle cx="60" cy="20" r="45" stroke="#b45309" strokeWidth="1.2" strokeDasharray="4 4" />
              <circle cx="60" cy="20" r="41" stroke="#d97706" strokeWidth="0.6" />
              <text x="60" y="16" textAnchor="middle" fill="#b45309" fontSize="10" fontWeight="bold" letterSpacing="1.5">EST. 1986</text>
              <text x="60" y="28" textAnchor="middle" fill="#78350f" fontSize="7" fontWeight="bold" letterSpacing="1">HERITAGE</text>
            </g>
          </svg>
        }
      />

      <ImageRail images={GALLERY} className="bg-paper-2" />

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
                className="overflow-hidden rounded-3xl paper-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-xl"
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
                  <div className="flex aspect-[3/4] flex-col justify-between bg-gradient-to-br from-[#2c1f17] to-[#1c120c] p-6 text-white border-b border-amber-900/20">
                    <div className="flex justify-end">
                      <OrigamiBirdSmall className="size-5 text-amber-400/40" />
                    </div>
                    <div className="flex flex-col items-center justify-center my-auto">
                      <div className="flex size-20 items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 shadow-inner">
                        <span className="font-display text-2xl font-bold text-amber-300">SJ</span>
                      </div>
                      <span className="mono-spec mt-3 text-[10px] text-amber-400/70 font-semibold">Promoter & Director</span>
                    </div>
                    <div className="text-center">
                      <span className="mono-spec text-[10px] text-amber-200/50">Udaan Governance Board</span>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <span className="mono-spec inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900 border border-amber-900/15">
                    {person.role}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#221610]">
                    {person.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5c4a3e]">{person.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1c120c] text-[#fbf8f2]">
        <div className="grid md:grid-cols-2">
          <img
            src="/images/people/promoters.jpg"
            alt="Yash Bakliwal and Sapan Bakliwal"
            className="aspect-[4/3] w-full object-cover object-top md:aspect-auto md:min-h-[32rem]"
          />
          <div className="flex flex-col justify-center px-6 py-16 sm:px-12 md:px-16">
            <div className="mb-3 flex items-center gap-2">
              <OrigamiBirdSmall className="size-3.5 text-amber-400" />
              <p className="eyebrow text-xs tracking-widest text-amber-400">Promoters</p>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Yash Bakliwal
              <br />
              <span className="text-amber-400">and Sapan Bakliwal.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#d8c5b4] sm:text-lg">
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
            <div className="overflow-hidden rounded-3xl border border-amber-900/15 paper-card shadow-xl">
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
            <Reveal className="mt-6 space-y-4 text-base leading-relaxed text-[#5c4a3e]">
              <p>
                Manufacturing began at Pithampur in FY 2021–22. Kanpur followed in
                2024. In January 2025 the company converted to a public limited
                house. Industry Outlook named Udaan among India’s Top 10 corrugated
                box manufacturers in 2023.
              </p>
            </Reveal>
            <div className="mt-8 space-y-3">
              {STRENGTHS.map((s) => (
                <div key={s} className="flex items-center gap-3 rounded-xl border border-amber-900/15 paper-card p-3.5 text-sm font-medium text-[#382618] shadow-xs">
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
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((item, i) => (
              <Reveal
                key={item.year}
                delay={i * 30}
                className="relative overflow-hidden rounded-2xl border border-amber-900/15 paper-card p-6 transition-all duration-300 hover:border-amber-500/50 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="mono-spec rounded-lg bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900 border border-amber-900/15">
                    {item.year}
                  </span>
                  <OrigamiBirdSmall className="size-4 text-amber-600/40" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#5c4a3e] font-medium">
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
