import { X } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { INDUSTRIES, SITE } from "@/lib/site";
import { useQuote } from "@/lib/quote";
import { cn } from "@/lib/utils";

export function QuoteSheet() {
  const { open, setOpen } = useQuote();
  const [sent, setSent] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!open) {
      setEntered(false);
      return;
    }
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, [open]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  function close() {
    setEntered(false);
    window.setTimeout(() => {
      setOpen(false);
      setSent(false);
    }, 280);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <button
        type="button"
        aria-label="Close quote form"
        className={cn(
          "absolute inset-0 bg-[#18110a]/80 backdrop-blur-sm transition-opacity duration-300",
          entered ? "opacity-100" : "opacity-0",
        )}
        onClick={close}
      />
      <aside
        className={cn(
          "absolute inset-y-0 right-0 flex w-full max-w-lg flex-col border-l border-amber-900/30 bg-[#1c120c] text-[#fbf8f2] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          entered ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
      >
        <div className="flex items-center justify-between border-b border-amber-900/25 px-8 py-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-amber-400" />
              <p className="eyebrow text-xs tracking-widest text-amber-400">Specification</p>
            </div>
            <h2 id="quote-title" className="mt-1 font-display text-2xl font-bold text-[#fbf8f2]">
              Request a quote
            </h2>
          </div>
          <button
            type="button"
            onClick={close}
            className="flex size-10 items-center justify-center rounded-xl border border-amber-900/30 bg-white/5 text-[#dfd0c0] transition-colors hover:bg-white/10 hover:text-[#fbf8f2]"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          {sent ? (
            <div className="flex h-full flex-col justify-center text-center">
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl border border-amber-400/40 bg-amber-400/10 text-amber-400">
                ✓
              </div>
              <p className="eyebrow text-amber-400">Received</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-[#fbf8f2]">
                We’ll come back with a specification.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#dfd0c0]">
                A member of the Udaan team will reach you at the details you left.
                For something urgent, call {SITE.phone}.
              </p>
              <Button variant="primary" className="mx-auto mt-8 w-fit" onClick={close}>
                Close
              </Button>
            </div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={onSubmit}>
              <Field label="Name" name="name" required />
              <Field label="Company" name="company" required />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#dfd0c0]">
                  Industry
                </span>
                <select
                  name="industry"
                  className="field-input border-amber-900/30 bg-[#251a12] text-[#fbf8f2] focus:border-amber-500"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-[#251a12] text-[#dfd0c0]">
                    Select
                  </option>
                  {INDUSTRIES.map((ind) => (
                    <option key={ind.slug} value={ind.name} className="bg-[#251a12] text-[#fbf8f2]">
                      {ind.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#dfd0c0]">
                  What do you need?
                </span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="field-input border-amber-900/30 bg-[#251a12] text-[#fbf8f2] focus:border-amber-500"
                />
              </label>
              <Button variant="primary" size="lg" type="submit" className="mt-2">
                Send the brief
              </Button>
            </form>
          )}
        </div>
      </aside>
    </div>
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
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#dfd0c0]">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="field-input border-amber-900/30 bg-[#251a12] text-[#fbf8f2] focus:border-amber-500"
      />
    </label>
  );
}
