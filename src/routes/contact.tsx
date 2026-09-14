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

function ContactEasterEgg() {
  return (
    <svg
      viewBox="0 0 540 320"
      fill="none"
      className="w-full h-full text-amber-950/20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Registered Dock Dispatch Postmark & Franking Seal</title>
      {/* Postal Franking Waves */}
      <g stroke="currentColor" strokeWidth="1.5" opacity="0.65">
        <path d="M 280 60 Q 310 50, 340 60 T 400 60 T 460 60 T 520 60" fill="none" />
        <path d="M 280 75 Q 310 65, 340 75 T 400 75 T 460 75 T 520 75" fill="none" />
        <path d="M 280 90 Q 310 80, 340 90 T 400 90 T 460 90 T 520 90" fill="none" />
        <path d="M 280 105 Q 310 95, 340 105 T 400 105 T 460 105 T 520 105" fill="none" />
      </g>

      {/* Main Circular Postal Postmark */}
      <g transform="translate(140, 40)" opacity="0.8">
        <circle cx="80" cy="80" r="76" stroke="currentColor" strokeWidth="1.75" fill="none" />
        <circle cx="80" cy="80" r="68" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" fill="none" />
        <circle cx="80" cy="80" r="46" stroke="currentColor" strokeWidth="1.2" fill="none" />

        {/* Center Star & Text */}
        <path
          d="M 80 54 L 83 62 L 91 63 L 85 68 L 87 76 L 80 71 L 73 76 L 75 68 L 69 63 L 77 62 Z"
          fill="currentColor"
        />
        <text x="80" y="88" fill="currentColor" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle" letterSpacing="0.5">UDAAN DISPATCH</text>
        <text x="80" y="99" fill="currentColor" fontSize="6.5" fontFamily="monospace" textAnchor="middle">DIRECT DESK</text>
        <text x="80" y="110" fill="currentColor" fontSize="6" fontFamily="monospace" textAnchor="middle">MP & UP DOCKS</text>

        {/* Circular curved arc text approximation */}
        <text x="80" y="24" fill="currentColor" fontSize="6.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle" letterSpacing="1">★ REGISTERED FREIGHT ★</text>
        <text x="80" y="142" fill="currentColor" fontSize="6.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle" letterSpacing="1">26 OWNED UNITS</text>
      </g>

      {/* Perforated Postage Stamp Emblem */}
      <g transform="translate(380, 130)" opacity="0.75">
        <rect
          x="0"
          y="0"
          width="120"
          height="140"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 2.5"
          fill="none"
        />
        <rect x="8" y="8" width="104" height="124" stroke="currentColor" strokeWidth="1" fill="none" />
        
        {/* Stamp Content */}
        <circle cx="60" cy="50" r="24" stroke="currentColor" strokeWidth="1.2" fill="none" />
        {/* Udaan winged chevron in stamp */}
        <path d="M 46 54 Q 60 40, 74 54" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M 52 46 Q 60 36, 68 46" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="60" y1="36" x2="60" y2="58" stroke="currentColor" strokeWidth="1.5" />

        <text x="60" y="88" fill="currentColor" fontSize="7" fontWeight="bold" fontFamily="monospace" textAnchor="middle">SPECIFICATION</text>
        <text x="60" y="99" fill="currentColor" fontSize="6" fontFamily="monospace" textAnchor="middle">INQUIRY DOCK</text>
        <text x="60" y="120" fill="currentColor" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">EST. 1986</text>
      </g>

      {/* Transit Code Watermark */}
      <g transform="translate(40, 240)" opacity="0.65" fontFamily="monospace" fontSize="7.5" fill="currentColor">
        <text x="0" y="0">TELECOM: +91 93025 80112 · FAST RESPONSE</text>
        <text x="0" y="14">DIRECT DESK: PRAVEEN & PRANAV AGRAWAL</text>
        <text x="0" y="28">DISPATCH PRIORITY: INDUSTRIAL GRADE CORRUGATED</text>
      </g>
    </svg>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="bg-paper text-[#221610]">
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
        easterEgg={<ContactEasterEgg />}
      />

      <section className="bg-paper-2 border-t border-amber-900/10 py-20 md:py-28">
        <div className="site-wrap-wide grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <span className="inline-block rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold tracking-wider text-amber-900 uppercase border border-amber-900/15">
              Direct
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#221610] sm:text-4xl">
              Talk to Udaan
            </h2>
            <div className="mt-8 space-y-4">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-3 rounded-2xl border border-amber-900/15 bg-white p-4 font-semibold text-[#221610] shadow-xs transition-all hover:border-amber-500 hover:bg-amber-50/20"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700">
                  <Phone className="size-5" />
                </div>
                {SITE.phone}
              </a>
              <a
                href={SITE.emailHref}
                className="flex items-center gap-3 rounded-2xl border border-amber-900/15 bg-white p-4 font-semibold text-[#221610] shadow-xs transition-all hover:border-amber-500 hover:bg-amber-50/20"
              >
                <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700">
                  <Mail className="size-5" />
                </div>
                {SITE.email}
              </a>
            </div>

            <div className="mt-12 space-y-8">
              {PLANTS.map((plant) => (
                <div
                  key={plant.id}
                  className="overflow-hidden rounded-3xl border border-amber-900/15 bg-white p-5 shadow-sm transition-all hover:border-amber-500/50"
                >
                  <div className="overflow-hidden rounded-2xl bg-amber-50/40">
                    <img
                      src={plant.image}
                      alt=""
                      className="mb-4 aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold tracking-wider text-amber-900 uppercase border border-amber-900/15">
                    {plant.region}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold text-[#221610]">{plant.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#6b584c]">
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
                <span className="inline-block text-xs font-bold tracking-wider text-amber-700 uppercase">
                  Received
                </span>
                <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#221610]">
                  The brief is with us.
                </h3>
                <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[#5c4a3e]">
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
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#5c4a3e]">
                    Industry
                  </span>
                  <select
                    name="industry"
                    className="field-input text-[#221610] bg-white border-amber-900/20 focus:border-amber-600 focus:ring-amber-500/20"
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
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#5c4a3e]">
                    Brief
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="field-input text-[#221610] bg-white border-amber-900/20 focus:border-amber-600 focus:ring-amber-500/20"
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
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#5c4a3e]">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="field-input text-[#221610] bg-white border-amber-900/20 focus:border-amber-600 focus:ring-amber-500/20"
      />
    </label>
  );
}
