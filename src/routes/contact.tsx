import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { INDUSTRIES, PLANTS, SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [{ title: "Contact — Udaan Paper Industries" }],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            The plants are running.
            <br />
            Send the brief.
          </>
        }
        lede="Pithampur and Kanpur. A laboratory. Twenty-six trucks. Tell us the pack."
        image="/images/fleet.jpg"
      />

      <section className="bg-paper-2 border-t border-amber-900/10 py-20 md:py-28">
        <div className="site-wrap-wide grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <span className="inline-block rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold tracking-wider text-amber-800 uppercase">
              Direct
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Talk to Udaan
            </h2>
            <div className="mt-8 space-y-4">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-3 rounded-2xl border border-amber-900/15 bg-white p-4 font-semibold text-slate-900 shadow-xs transition-all hover:border-amber-400 hover:bg-slate-50"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                  <Phone className="size-5" />
                </div>
                {SITE.phone}
              </a>
              <a
                href={SITE.emailHref}
                className="flex items-center gap-3 rounded-2xl border border-amber-900/15 bg-white p-4 font-semibold text-slate-900 shadow-xs transition-all hover:border-amber-400 hover:bg-slate-50"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                  <Mail className="size-5" />
                </div>
                {SITE.email}
              </a>
            </div>

            <div className="mt-12 space-y-8">
              {PLANTS.map((plant) => (
                <div
                  key={plant.id}
                  className="overflow-hidden rounded-3xl border border-amber-900/15 bg-white p-5 shadow-sm transition-all hover:border-amber-400/50"
                >
                  <div className="overflow-hidden rounded-2xl bg-amber-50/40">
                    <img
                      src={plant.image}
                      alt=""
                      className="mb-4 aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold tracking-wider text-amber-800 uppercase">
                    {plant.region}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold text-slate-950">{plant.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {plant.address}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Reveal className="rounded-3xl border border-amber-900/15 bg-white p-8 shadow-xl md:col-span-7 md:p-12">
            {sent ? (
              <div className="flex min-h-96 flex-col justify-center text-center">
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  ✓
                </div>
                <span className="inline-block text-xs font-bold tracking-wider text-amber-600 uppercase">
                  Received
                </span>
                <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-950">
                  The brief is with us.
                </h3>
                <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-600">
                  We’ll reply with a specification or a question. For something that
                  cannot wait, call {SITE.phone}.
                </p>
              </div>
            ) : (
              <form className="grid gap-5 sm:grid-cols-2" onSubmit={onSubmit}>
                <Field label="Name" name="name" required />
                <Field label="Company" name="company" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" required />
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Industry
                  </span>
                  <select
                    name="industry"
                    className="field-input"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    {INDUSTRIES.map((ind) => (
                      <option key={ind.slug} value={ind.name}>
                        {ind.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Brief
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="field-input"
                    placeholder="Board grade, size, print, monthly volume, destination…"
                  />
                </label>
                <div className="sm:col-span-2 pt-2">
                  <Button variant="primary" size="lg" type="submit" className="w-full sm:w-auto">
                    Send
                  </Button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="field-input"
      />
    </label>
  );
}
