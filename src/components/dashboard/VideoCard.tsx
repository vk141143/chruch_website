import { Play, Lock, Eye, Clock, Star } from "lucide-react";
import type { Video } from "@/lib/videoData";

interface Props {
  video: Video;
  isPremium: boolean;
  onPlay: (v: Video) => void;
  onSubscribe: () => void;
}

export function VideoCard({ video, isPremium, onPlay, onSubscribe }: Props) {
  const locked = video.premium && !isPremium;

  function handleClick() {
    locked ? onSubscribe() : onPlay(video);
  }

  return (
    <article className="group flex flex-col rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elegant hover:border-gold/40 transition-all duration-400 cursor-pointer">

      {/* ── Thumbnail ─────────────────────────────────────────────────────── */}
      <div className="relative aspect-video overflow-hidden bg-muted" onClick={handleClick}>
        {/* Image */}
        <img
          src={video.thumbnail}
          alt={video.title}
          loading="lazy"
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.06] ${
            locked ? "blur-[3px] brightness-[0.65]" : ""
          }`}
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 transition-colors duration-300 ${
            locked ? "bg-navy/55" : "bg-black/25 group-hover:bg-black/15"
          }`}
        />

        {/* Centre icon */}
        <div className="absolute inset-0 grid place-items-center">
          {locked ? (
            <div className="grid h-14 w-14 place-items-center rounded-full border-2 border-white/40 bg-black/30 backdrop-blur-sm">
              <Lock className="h-6 w-6 text-white" />
            </div>
          ) : (
            <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-gold shadow-gold ring-4 ring-gold/20 scale-90 group-hover:scale-100 transition-transform duration-300">
              <Play className="h-6 w-6 text-navy fill-navy ml-0.5" />
            </div>
          )}
        </div>

        {/* Top-left badge */}
        <div className="absolute top-3 left-3">
          {video.premium ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-gradient-gold px-2.5 py-1 text-[10px] font-bold text-navy shadow-gold">
              <Star className="h-3 w-3 fill-navy" /> Premium
            </span>
          ) : (
            <span className="rounded-full bg-emerald-600/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold text-white">
              Free
            </span>
          )}
        </div>

        {/* Top-right duration */}
        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/55 backdrop-blur-sm px-2 py-1 text-[10px] text-white/90">
          <Clock className="h-3 w-3" /> {video.duration}
        </div>

        {/* Bottom category */}
        <div className="absolute bottom-3 left-3">
          <span className="rounded-full bg-navy/70 backdrop-blur-sm px-2.5 py-1 text-[10px] font-medium capitalize text-white/90">
            {video.category.replace("-", " ")}
          </span>
        </div>
      </div>

      {/* ── Body ──────────────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-4" onClick={handleClick}>
        <h3 className="font-serif text-base leading-snug text-navy group-hover:text-gold transition-colors duration-300 line-clamp-2">
          {video.title}
        </h3>
        <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
          {video.description}
        </p>

        <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="truncate">{video.instructor.replace("Pastor ", "")}</span>
          <span className="flex items-center gap-1 shrink-0">
            <Eye className="h-3 w-3 text-gold" />
            {video.views.toLocaleString()}
          </span>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-4">
          {locked ? (
            <button
              onClick={(e) => { e.stopPropagation(); onSubscribe(); }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-4 py-2.5 text-sm font-semibold text-navy shadow-gold hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              <Lock className="h-3.5 w-3.5" /> Subscribe to Unlock
            </button>
          ) : (
            <button
              onClick={(e) => { e.stopPropagation(); onPlay(video); }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/60 bg-gold/5 px-4 py-2.5 text-sm font-semibold text-gold hover:bg-gradient-gold hover:text-navy transition-all duration-300"
            >
              <Play className="h-3.5 w-3.5 fill-current" /> Watch Now
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
