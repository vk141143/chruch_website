import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="sync">
        {slides.map((slide, idx) => idx === current && (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <motion.img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1.15 }}
              transition={{ duration: 9, ease: "linear" }}
            />
            <div className="absolute inset-0 bg-gradient-hero" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl w-full px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3">
                <span className="gold-divider" />
                <span className="text-xs font-semibold tracking-[0.35em] uppercase text-gold">
                  {slides[current].eyebrow}
                </span>
              </div>
              <h1 className="mt-5 font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-white">
                <AnimatedText text={slides[current].title} delay={200} mode="words" />
              </h1>
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-7 max-w-xl text-lg md:text-xl text-white/90 font-serif italic"
              >
                "{slides[current].verse}"
                <footer className="mt-2 text-sm tracking-widest uppercase not-italic font-sans text-gold">
                  — {slides[current].ref}
                </footer>
              </motion.blockquote>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="mt-9 flex flex-wrap gap-4"
              >
                <Link
                  to={slides[current].cta.to}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-navy shadow-gold hover:scale-[1.03] transition-transform"
                >
                  {slides[current].cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                {slides[current].cta2 && (
                  <Link
                    to={slides[current].cta2.to}
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    {slides[current].cta2.label}
                  </Link>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-10 flex items-center justify-between px-6 md:px-12">
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1 transition-all rounded-full ${
                idx === current ? "w-12 bg-gold" : "w-6 bg-white/40"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
        <div className="hidden md:flex gap-2">
          <button
            onClick={prev}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
