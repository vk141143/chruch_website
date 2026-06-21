import { motion } from "framer-motion";
import { BookOpen, User } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface Props {
  image: string;
  title: string;
  teacher: string;
  lessons: number;
  progress?: number;
  index?: number;
}

export function CourseCard({ image, title, teacher, lessons, progress, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elegant transition-all duration-500"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl text-navy line-clamp-2 group-hover:text-gold transition-colors">{title}</h3>
        <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
          <User className="h-4 w-4 text-gold" />
          <span>{teacher}</span>
        </div>
        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <BookOpen className="h-4 w-4 text-gold" />
          <span>{lessons} Lessons</span>
        </div>
        {progress !== undefined && (
          <div className="mt-4">
            <div className="h-1.5 rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-gradient-gold transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-1.5 text-xs text-muted-foreground">{progress}% Complete</p>
          </div>
        )}
        <Link
          to="/bible-academy"
          className="mt-5 inline-flex items-center text-sm font-semibold text-gold hover:text-navy transition-colors"
        >
          View Course →
        </Link>
      </div>
    </motion.article>
  );
}
