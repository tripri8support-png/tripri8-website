import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { EnquiryDialog } from "./EnquiryDialog";

interface EnquiryContextValue {
  openEnquiry: (subject?: string) => void;
}

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState<string | undefined>(undefined);

  const openEnquiry = useCallback((next?: string) => {
    setSubject(next);
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ openEnquiry }), [openEnquiry]);

  return (
    <EnquiryContext.Provider value={value}>
      {children}
      <EnquiryDialog open={open} onOpenChange={setOpen} subject={subject} />
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiry must be used inside EnquiryProvider");
  return ctx;
}
