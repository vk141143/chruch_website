import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface Props {
  image: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type?: string;
  index?: number;
}

export function EventCard({ image, title, date, time, location, type, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elegant hover:border-gold/40 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-[1.07] transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/15 transition-colors duration-500" />

        {/* Date badge */}
        <div className="absolute top-3 left-3">
          <div className="rounded-xl bg-gradient-gold px-3 py-2 text-center shadow-gold min-w-[52px]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-navy/70 leading-none">
              {date.split(" ")[0]}
            </p>
            <p className="mt-0.5 text-xl font-bold text-navy leading-none">
              {date.split(" ")[1]?.replace(",", "")}
            </p>
          </div>
        </div>

        {/* Type badge */}
        {type && (
          <div className="absolute top-3 right-3">
            <span className="rounded-full bg-navy/70 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold text-white/90">
              {type}
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-serif text-xl leading-snug text-navy group-hover:text-gold transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-gold shrink-0" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-gold shrink-0" />
            <span className="truncate">{location}</span>
          </div>
        </div>

        <Link
          to="/events"
          className="mt-5 inline-flex items-center justify-center w-full gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-navy hover:border-gold hover:bg-gold/5 group-hover:border-gold transition-colors duration-300"
        >
          Register Now <ArrowRight className="h-3.5 w-3.5 text-gold" />
        </Link>
      </div>
    </motion.article>
  );
}
