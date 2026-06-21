import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { AnimatedText } from "../site/AnimatedText";

export interface HeroSlide {
  image: string;
  eyebrow: string;
  title: string;
  verse: string;
  ref: string;
  cta: { label: string; to: string };
  cta2?: { label: string; to: string };
}

interface Props {
  slides: HeroSlide[];
}

export function HeroCarousel({ slides }: Props) {
  const [current, setCurrent] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const go = (idx: number) => setCurrent((idx + slides.length) % slides.length);

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden" aria-label="Hero carousel">
      {/* Background images */}
      <AnimatePresence mode="sync">
        {slides.map((slide, idx) =>
          idx === current ? (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4 }}
              className="absolute inset-0"
            >
              <motion.img
                src={slide.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ scale: reduce ? 1 : 1.06 }}
                animate={{ scale: reduce ? 1 : 1.14 }}
                transition={{ duration: 9, ease: "linear" }}
              />
              <div className="absolute inset-0 bg-gradient-hero" />
              {/* bottom vignette */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl w-full px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: reduce ? 0 : 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -24 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="gold-divider" />
                <span className="text-xs font-semibold tracking-[0.38em] uppercase text-gold">
                  {slides[current].eyebrow}
                </span>
              </motion.div>

              {/* Title */}
              <h1 className="mt-5 font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.04] text-white">
                <AnimatedText text={slides[current].title} delay={200} mode="words" />
              </h1>

              {/* Verse */}
              <motion.blockquote
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="mt-7 max-w-xl text-lg md:text-xl text-white/88 font-serif italic border-l-2 border-gold/60 pl-5"
              >
                &ldquo;{slides[current].verse}&rdquo;
                <footer className="mt-2.5 text-xs tracking-[0.3em] uppercase not-italic font-sans text-gold">
                  — {slides[current].ref}
                </footer>
              </motion.blockquote>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.75 }}
                className="mt-9 flex flex-wrap gap-4"
              >
                <Link
                  to={slides[current].cta.to}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-navy shadow-gold hover:scale-[1.04] active:scale-[0.98] transition-transform"
                >
                  {slides[current].cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                {slides[current].cta2 && (
                  <Link
                    to={slides[current].cta2!.to}
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
                  >
                    {slides[current].cta2!.label}
                  </Link>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls bar */}
      <div className="absolute bottom-9 left-0 right-0 z-10 flex items-center justify-between px-6 md:px-12">
        {/* Dot indicators */}
        <div className="flex gap-2" role="tablist" aria-label="Slides">
          {slides.map((_, idx) => (
            <button
              key={idx}
              role="tab"
              aria-selected={idx === current}
              onClick={() => go(idx)}
              className={`h-[3px] rounded-full transition-all duration-400 ${
                idx === current ? "w-10 bg-gold" : "w-5 bg-white/35 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => go(current - 1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/15 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => go(current + 1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/15 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute top-1/2 -translate-y-1/2 right-6 md:right-12 z-10 hidden md:flex flex-col items-center gap-1.5">
        <span className="text-white font-semibold text-sm">{String(current + 1).padStart(2, "0")}</span>
        <span className="w-px h-8 bg-white/25" />
        <span className="text-white/50 text-sm">{String(slides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
