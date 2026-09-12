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

      <section className="bg-paper py-12 md:py-16">
        <div className="site-wrap-wide grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Direct</p>
            <h2 className="mt-4 font-display text-title">Talk to Udaan</h2>
            <div className="mt-10 space-y-6">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-3 text-ink-fg transition-colors hover:text-ink-muted"
              >
                <Phone className="size-4" />
                {SITE.phone}
              </a>
              <a
                href={SITE.emailHref}
                className="flex items-center gap-3 text-ink-fg transition-colors hover:text-ink-muted"
              >
                <Mail className="size-4" />
                {SITE.email}
              </a>
            </div>

            <div className="mt-12 space-y-8">
              {PLANTS.map((plant) => (
                <div key={plant.id}>
                  <img
                    src={plant.image}
                    alt=""
                    className="mb-3 aspect-[16/10] w-full object-cover"
                  />
                  <p className="eyebrow">{plant.region}</p>
                  <h3 className="mt-2 font-display text-2xl">{plant.name}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
                    {plant.address}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Reveal className="border border-line-paper bg-paper p-6 md:p-10 md:col-span-7">
            {sent ? (
              <div className="flex min-h-80 flex-col justify-center">
                <p className="eyebrow">Received</p>
                <h3 className="mt-4 font-display text-4xl">The brief is with us.</h3>
                <p className="mt-4 max-w-md text-ink-muted">
                  We’ll reply with a specification or a question. For something that
                  cannot wait, call {SITE.phone}.
                </p>
              </div>
            ) : (
              <form className="grid gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
                <Field label="Name" name="name" required />
                <Field label="Company" name="company" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" required />
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-[0.68rem] font-medium tracking-[0.16em] uppercase text-ink-muted">
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
                  <span className="mb-2 block text-[0.68rem] font-medium tracking-[0.16em] uppercase text-ink-muted">
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
                <div className="sm:col-span-2">
                  <Button variant="ink" type="submit">
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
      <span className="mb-2 block text-[0.68rem] font-medium tracking-[0.16em] uppercase text-ink-muted">
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
