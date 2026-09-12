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
          "absolute inset-0 bg-ink/55 transition-opacity duration-300",
          entered ? "opacity-100" : "opacity-0",
        )}
        onClick={close}
      />
      <aside
        className={cn(
          "absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-paper text-ink-fg shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          entered ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
      >
        <div className="flex items-center justify-between border-b border-line-paper px-6 py-5">
          <div>
            <p className="eyebrow">Specification</p>
            <h2 id="quote-title" className="mt-1 font-display text-2xl">
              Request a quote
            </h2>
          </div>
          <button
            type="button"
            onClick={close}
            className="flex size-11 items-center justify-center"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {sent ? (
            <div className="flex h-full flex-col justify-center">
              <p className="eyebrow">Received</p>
              <h3 className="mt-3 font-display text-3xl">We’ll come back with a specification.</h3>
              <p className="mt-4 text-ink-muted">
                A member of the Udaan team will reach you at the details you left.
                For something urgent, call {SITE.phone}.
              </p>
              <Button variant="ink" className="mt-8 w-fit" onClick={close}>
                Close
              </Button>
            </div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={onSubmit}>
              <Field label="Name" name="name" required />
              <Field label="Company" name="company" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" required />
              <label className="block">
                <span className="mb-2 block text-[0.68rem] font-medium tracking-[0.16em] uppercase text-ink-muted">
                  Industry
                </span>
                <select name="industry" className="field-input" defaultValue="">
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
              <label className="block">
                <span className="mb-2 block text-[0.68rem] font-medium tracking-[0.16em] uppercase text-ink-muted">
                  What do you need?
                </span>
                <textarea name="message" required rows={4} className="field-input" />
              </label>
              <Button variant="ink" type="submit" className="mt-2">
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
      <span className="mb-2 block text-[0.68rem] font-medium tracking-[0.16em] uppercase text-ink-muted">
        {label}
      </span>
      <input name={name} type={type} required={required} className="field-input" />
    </label>
  );
}
