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

      <section className="bg-paper py-12 md:py-16">
        <div className="site-wrap-wide">
          <SectionHeading
            eyebrow="The board"
            title="The people who run the plants."
            lede="Brothers who came up in corrugated, and a promoter-director on the board. Not a hired-in letterhead."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP.map((person, i) => (
              <Reveal key={person.name} delay={i * 70} className="border border-line-paper bg-paper-2">
                {person.image ? (
                  <div className="img-zoom overflow-hidden bg-sand">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="aspect-[3/4] w-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[3/4] items-end bg-ink p-6 text-fg">
                    <p className="font-display text-6xl text-kraft">SJ</p>
                  </div>
                )}
                <div className="p-5">
                  <p className="eyebrow">{person.role}</p>
                  <h3 className="mt-2 font-display text-2xl">{person.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{person.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-ink text-fg">
        <div className="grid md:grid-cols-2">
          <img
            src="/images/people/promoters.jpg"
            alt="Yash Bakliwal and Sapan Bakliwal"
            className="aspect-[4/3] w-full object-cover object-top md:aspect-auto md:min-h-[28rem]"
          />
          <div className="flex flex-col justify-end px-5 py-10 sm:px-10 md:px-12">
            <p className="eyebrow mb-4">Promoters</p>
            <h2 className="font-display text-title">
              Yash Bakliwal
              <br />
              and Sapan Bakliwal.
            </h2>
            <p className="mt-5 max-w-md text-lede text-fg-muted">
              Managing Director and Whole-time Director & CFO. Civil engineers who
              learned corrugated on the floor, then bought the company and built the
              second plant.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper py-12 md:py-16">
        <div className="site-wrap-wide grid items-center gap-8 md:grid-cols-12">
          <Reveal variant="image" className="img-zoom md:col-span-6">
            <img
              src="/images/real-lab.jpg"
              alt="Quality laboratory at the Pithampur plant"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <div className="md:col-span-6">
            <SectionHeading
              eyebrow="The story"
              title="From a 1986 incorporation to a corrugated platform."
              lede="The current promoters acquired the business between FY 2020 and 2022 and turned it toward packaging."
            />
            <Reveal className="mt-5 space-y-3 text-ink-muted">
              <p>
                Manufacturing began at Pithampur in FY 2021–22. Kanpur followed in
                2024. In January 2025 the company converted to a public limited
                house. Industry Outlook named Udaan among India’s Top 10 corrugated
                box manufacturers in 2023.
              </p>
            </Reveal>
            <ul className="mt-6 space-y-2">
              {STRENGTHS.map((s) => (
                <li key={s} className="border-t border-line-paper pt-2 text-sm text-ink-fg">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-12 md:py-16">
        <div className="site-wrap-wide">
          <SectionHeading eyebrow="Journey" title="Milestones, not slogans." />
          <ol className="mt-8 grid gap-px bg-line-paper sm:grid-cols-2">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.year} delay={i * 20} className="bg-paper-2 p-5">
                <p className="font-sans text-sm font-medium text-kraft">{item.year}</p>
                <p className="mt-2 text-ink-fg">{item.copy}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
