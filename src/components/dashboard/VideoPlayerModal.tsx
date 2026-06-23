import { useEffect } from "react";
import { X, Share2, Bookmark, ExternalLink, User, Calendar, Clock } from "lucide-react";
import type { Video } from "@/lib/videoData";

interface Props {
  video: Video | null;
  onClose: () => void;
}

export function VideoPlayerModal({ video, onClose }: Props) {
  // Close on Escape key
  useEffect(() => {
    if (!video) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [video, onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = video ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [video]);

  if (!video) return null;

  const embedUrl = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1&color=white`;

  function handleShare() {
    const url = `https://www.youtube.com/watch?v=${video.youtubeId}`;
    if (navigator.share) {
      navigator.share({ title: video.title, url });
    } else {
      navigator.clipboard.writeText(url);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Now playing: ${video.title}`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/82 backdrop-blur-sm" onClick={onClose} />

      {/* Modal panel */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col rounded-2xl bg-background overflow-hidden shadow-2xl max-h-[92vh]">

        {/* Header */}
        <div className="flex items-start gap-4 px-5 py-4 border-b border-border shrink-0">
          <div className="flex-1 min-w-0">
            <h2 className="font-serif text-lg text-navy leading-snug line-clamp-2">{video.title}</h2>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="h-3 w-3 text-gold" /> {video.instructor}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3 text-gold" /> {video.duration}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3 text-gold" /> {video.publishedAt}
              </span>
              <span className="capitalize rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium">
                {video.category.replace("-", " ")}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close player"
            className="shrink-0 grid h-9 w-9 place-items-center rounded-xl border border-border text-muted-foreground hover:bg-muted hover:text-navy transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* YouTube embed */}
        <div className="relative w-full aspect-video bg-black shrink-0">
          <iframe
            src={embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            loading="eager"
          />
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-border overflow-y-auto">
          {video.description && (
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{video.description}</p>
          )}
          <div className="flex flex-wrap gap-2">
            <button className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium text-navy hover:border-gold hover:bg-gold/5 transition-colors">
              <Bookmark className="h-3.5 w-3.5 text-gold" /> Save Video
            </button>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium text-navy hover:border-gold hover:bg-gold/5 transition-colors"
            >
              <Share2 className="h-3.5 w-3.5 text-gold" /> Share
            </button>
            <a
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium text-navy hover:border-gold hover:bg-gold/5 transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5 text-gold" /> Open on YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
