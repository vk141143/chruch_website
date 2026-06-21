import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

interface Props {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative">
      <div className="relative min-h-[320px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center px-6"
          >
            <Quote className="mx-auto h-10 w-10 text-gold mb-6" />
            <p className="font-serif text-2xl md:text-3xl text-navy leading-relaxed italic">
              "{testimonials[current].content}"
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="h-14 w-14 rounded-full object-cover border-2 border-gold"
              />
              <div>
                <p className="font-semibold text-navy">{testimonials[current].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-gold hover:bg-cream transition-colors"
        >
          <ChevronLeft className="h-5 w-5 text-navy" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === current ? "w-8 bg-gold" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-gold hover:bg-cream transition-colors"
        >
          <ChevronRight className="h-5 w-5 text-navy" />
        </button>
      </div>
    </div>
  );
}
