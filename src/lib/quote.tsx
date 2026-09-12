import { createContext, useContext, useState, type ReactNode } from "react";

type QuoteContextValue = {
  open: boolean;
  setOpen: (next: boolean) => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <QuoteContext.Provider value={{ open, setOpen }}>{children}</QuoteContext.Provider>;
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used within QuoteProvider");
  return ctx;
}
