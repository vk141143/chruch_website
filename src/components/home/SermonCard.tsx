import { motion } from "framer-motion";
import { Play, Calendar, BookOpen } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface Props {
  thumbnail: string;
  title: string;
  speaker: string;
  reference: string;
  date: string;
  index?: number;
}

export function SermonCard({ thumbnail, title, speaker, reference, date, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex-shrink-0 w-full sm:w-[340px] rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elegant transition-all duration-500"
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors" />
        <motion.div
          whileHover={{ scale: 1.15 }}
          className="absolute inset-0 grid place-items-center"
        >
          <div className="grid h-14 w-14 place-items-center rounded-full bg-gold shadow-gold">
            <Play className="h-6 w-6 text-navy fill-navy ml-1" />
          </div>
        </motion.div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-gold font-semibold">
          <BookOpen className="h-3.5 w-3.5" />
          <span>{reference}</span>
        </div>
        <h3 className="mt-2 font-serif text-lg text-navy line-clamp-2 group-hover:text-gold transition-colors">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{speaker}</p>
        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="h-3.5 w-3.5" />
          <span>{date}</span>
        </div>
        <Link
          to="/sermons"
          className="mt-4 inline-flex items-center justify-center w-full rounded-full border border-gold bg-gradient-gold px-4 py-2.5 text-sm font-semibold text-navy hover:scale-[1.02] transition-transform"
        >
          Watch Now
        </Link>
      </div>
    </motion.article>
  );
}
