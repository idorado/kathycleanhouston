"use client";
import { useState, useEffect } from "react";
import { CtaButton } from "@/components/ui/CtaButton";

export default function StickyCtaMobile() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");
    if (!heroCta) return;
    const observer = new IntersectionObserver(
      (entries) => setVisible(!(entries[0]?.isIntersecting ?? true)),
      { threshold: 0 }
    );
    observer.observe(heroCta);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0a1628]/95 backdrop-blur-sm p-3 shadow-lg border-t border-white/10">
      <CtaButton
        href="/request-quote"
        className="w-full bg-primary text-white font-semibold py-3 rounded-md text-center block text-sm"
      >
        Get a Quote — Free, No Obligation
      </CtaButton>
    </div>
  );
}
