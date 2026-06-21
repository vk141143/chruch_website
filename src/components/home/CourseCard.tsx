import { motion } from "framer-motion";
import { BookOpen, User, Star, Lock } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface Props {
  image: string;
  title: string;
  teacher: string;
  lessons: number;
  progress?: number;
  premium?: boolean;
  category?: string;
  index?: number;
}

export function CourseCard({ image, title, teacher, lessons, progress, premium, category, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elegant hover:border-gold/40 transition-all duration-500"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-[1.07] transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors duration-500" />
        {premium && (
          <span className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-gradient-gold px-2.5 py-1 text-[10px] font-bold text-navy">
            <Star className="h-3 w-3 fill-navy" /> Premium
          </span>
        )}
        {category && (
          <span className="absolute top-3 left-3 rounded-full bg-navy/70 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white/90">
            {category}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-serif text-xl leading-snug text-navy group-hover:text-gold transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        <div className="mt-3 space-y-1.5">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-3.5 w-3.5 text-gold shrink-0" />
            <span className="truncate">{teacher}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="h-3.5 w-3.5 text-gold shrink-0" />
            <span>{lessons} Lessons</span>
          </div>
        </div>

        {progress !== undefined && (
          <div className="mt-4">
            <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
              <span>Progress</span>
              <span className="font-semibold text-gold">{progress}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-muted overflow-hidden">
              <motion.div
                className="h-full bg-gradient-gold rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>
        )}

        <div className="mt-auto pt-5">
          <Link
            to="/bible-academy"
            className="group/btn inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-gold/60 bg-gold/5 px-4 py-2.5 text-sm font-semibold text-gold hover:bg-gradient-gold hover:text-navy transition-all duration-300"
          >
            {premium && progress === undefined ? (
              <>
                <Lock className="h-3.5 w-3.5" /> Enroll Now
              </>
            ) : (
              "View Course →"
            )}
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
