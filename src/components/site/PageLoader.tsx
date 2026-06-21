import { useEffect, useState, type ReactNode } from "react";

export function PageLoader({ children }: { children: ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div
        aria-hidden={loaded}
        className={`fixed inset-0 z-[100] grid place-items-center bg-navy transition-opacity duration-[1200ms] ease-out ${
          loaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          <span className="relative grid h-16 w-16 place-items-center">
            <span className="absolute inset-0 rounded-full border-2 border-gold/30" />
            <span className="absolute inset-0 rounded-full border-2 border-gold border-t-transparent animate-spin" />
            <span className="font-serif text-2xl text-gold">✝</span>
          </span>
          <p className="text-xs tracking-[0.35em] uppercase text-gold/80">Kingdom Life</p>
        </div>
      </div>
      <div
        className={`transition-opacity duration-[1400ms] ease-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
