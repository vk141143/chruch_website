import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  initials: string;
}

interface Props {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const go = (idx: number) => setCurrent((idx + testimonials.length) % testimonials.length);

  return (
    <div className="relative">
      {/* Cards */}
      <div className="relative min-h-[340px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-3xl mx-auto text-center px-4"
          >
            {/* Quote icon */}
            <Quote className="mx-auto h-9 w-9 text-gold mb-6" />

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>

            {/* Content */}
            <p className="font-serif text-2xl md:text-3xl text-navy leading-relaxed italic">
              &ldquo;{testimonials[current].content}&rdquo;
            </p>

            {/* Author */}
            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-gold shadow-gold ring-4 ring-gold/15 text-navy font-bold text-lg">
                {testimonials[current].initials}
              </div>
              <div>
                <p className="font-semibold text-navy">{testimonials[current].name}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{testimonials[current].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => go(current - 1)}
          aria-label="Previous testimonial"
          className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-gold hover:bg-cream transition-colors"
        >
          <ChevronLeft className="h-5 w-5 text-navy" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-7 h-2 bg-gold" : "w-2 h-2 bg-border hover:bg-gold/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => go(current + 1)}
          aria-label="Next testimonial"
          className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-gold hover:bg-cream transition-colors"
        >
          <ChevronRight className="h-5 w-5 text-navy" />
        </button>
      </div>
    </div>
  );
}
