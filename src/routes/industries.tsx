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

      <section className="bg-paper py-12 md:py-16">
        <div className="site-wrap-wide grid gap-3 sm:grid-cols-2">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 40}>
              <article
                id={ind.slug}
                className="group relative block overflow-hidden scroll-mt-24"
              >
                <div className="img-zoom">
                  <img
                    src={ind.image}
                    alt=""
                    className="aspect-[16/11] w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-fg md:p-7">
                  <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
                  <h2 className="mt-2 font-display text-3xl">{ind.name}</h2>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-fg-muted">
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
