import { motion } from "framer-motion";
import { Play, Calendar, BookOpen, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface Props {
  thumbnail: string;
  title: string;
  speaker: string;
  reference: string;
  date: string;
  duration?: string;
  index?: number;
}

export function SermonCard({ thumbnail, title, speaker, reference, date, duration, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      className="group flex-shrink-0 w-full sm:w-[340px] flex flex-col rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elegant hover:border-gold/40 transition-all duration-500"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/30 transition-colors duration-400" />

        {/* Play button */}
        <div className="absolute inset-0 grid place-items-center">
          <motion.div
            whileHover={{ scale: 1.18 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="grid h-16 w-16 place-items-center rounded-full bg-gradient-gold shadow-gold ring-4 ring-gold/25"
          >
            <Play className="h-6 w-6 text-navy fill-navy ml-1" />
          </motion.div>
        </div>

        {/* Reference badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-navy/70 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-gold">
          <BookOpen className="h-3 w-3" />
          {reference}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-serif text-lg leading-snug text-navy group-hover:text-gold transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        <p className="mt-2 text-sm font-medium text-muted-foreground">{speaker}</p>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3 w-3 text-gold" /> {date}
          </span>
          {duration && (
            <span className="flex items-center gap-1.5">
              <Clock className="h-3 w-3 text-gold" /> {duration}
            </span>
          )}
        </div>

        <div className="mt-auto pt-5">
          <Link
            to="/sermons"
            className="inline-flex items-center justify-center w-full gap-2 rounded-full bg-gradient-gold px-4 py-2.5 text-sm font-semibold text-navy shadow-gold hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            <Play className="h-3.5 w-3.5 fill-navy" /> Watch Now
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
