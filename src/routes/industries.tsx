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

function IndustriesPage() {
  return (
    <main>
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
      />

      <ImageRail
        images={INDUSTRIES.map((ind) => ({ src: ind.image, alt: ind.name }))}
        className="bg-ink"
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="site-wrap-wide grid gap-6 sm:grid-cols-2">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 40}>
              <article
                id={ind.slug}
                className="group relative block overflow-hidden rounded-3xl border border-slate-200/80 shadow-sm scroll-mt-28 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-xl"
              >
                <div className="img-zoom">
                  <img
                    src={ind.image}
                    alt=""
                    className="aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                  <span className="inline-block rounded-full bg-amber-400/20 px-3 py-1 font-sans text-xs font-bold tracking-widest text-amber-400 backdrop-blur-md">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-bold tracking-tight md:text-3xl">
                    {ind.name}
                  </h2>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-300">
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
