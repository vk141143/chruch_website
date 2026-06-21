import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface Props {
  image: string;
  title: string;
  date: string;
  time: string;
  location: string;
  index?: number;
}

export function EventCard({ image, title, date, time, location, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elegant transition-all duration-500"
    >
      <div className="aspect-[16/9] overflow-hidden bg-muted">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl text-navy line-clamp-2 group-hover:text-gold transition-colors">{title}</h3>
        <div className="mt-4 space-y-2.5">
          <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 text-gold" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-gold" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-gold" />
            <span>{location}</span>
          </div>
        </div>
        <Link
          to="/events"
          className="mt-5 inline-flex items-center justify-center w-full rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-navy hover:border-gold hover:bg-cream transition-colors"
        >
          Register Now
        </Link>
      </div>
    </motion.article>
  );
}
