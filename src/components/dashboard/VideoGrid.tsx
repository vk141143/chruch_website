import { useState, useMemo } from "react";
import { Search, Lock, PlayCircle } from "lucide-react";
import { MOCK_VIDEOS, VIDEO_CATEGORIES, type Video } from "@/lib/videoData";
import { VideoCard } from "./VideoCard";
import { VideoPlayerModal } from "./VideoPlayerModal";
import { SubscriptionModal } from "./SubscriptionModal";
import type { DashView } from "./DashboardLayout";

interface Props {
  isPremium: boolean;
  onViewChange: (v: DashView) => void;
}

type AccessFilter = "all" | "free" | "premium";

export function VideoGrid({ isPremium, onViewChange }: Props) {
  const [search, setSearch]         = useState("");
  const [category, setCategory]     = useState("all");
  const [access, setAccess]         = useState<AccessFilter>("all");
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const [subOpen, setSubOpen]       = useState(false);

  const filtered = useMemo(() => {
    return MOCK_VIDEOS.filter((v) => {
      const matchSearch =
        v.title.toLowerCase().includes(search.toLowerCase()) ||
        v.description.toLowerCase().includes(search.toLowerCase()) ||
        v.instructor.toLowerCase().includes(search.toLowerCase());
      const matchCat    = category === "all" || v.category === category;
      const matchAccess =
        access === "all" ||
        (access === "free"    && !v.premium) ||
        (access === "premium" && v.premium);
      return matchSearch && matchCat && matchAccess;
    });
  }, [search, category, access]);

  const totalVideos   = MOCK_VIDEOS.length;
  const freeCount     = MOCK_VIDEOS.filter((v) => !v.premium).length;
  const premiumCount  = MOCK_VIDEOS.filter((v) =>  v.premium).length;
  const lockedCount   = isPremium ? 0 : premiumCount;

  return (
    <div className="p-4 md:p-6 space-y-5 max-w-[1400px] mx-auto">

      {/* ── Page header ──────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-2xl text-navy">Video Library</h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            {totalVideos} videos · {freeCount} free · {premiumCount} premium
          </p>
        </div>
        {isPremium ? (
          <div className="flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-sm text-gold shrink-0">
            <PlayCircle className="h-4 w-4" /> Full Access Active
          </div>
        ) : (
          <button
            onClick={() => setSubOpen(true)}
            className="flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform shrink-0"
          >
            <Lock className="h-4 w-4" /> Unlock All Videos
          </button>
        )}
      </div>

      {/* ── Stats row ────────────────────────────────────────────────── */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Total Videos",   value: totalVideos,  icon: PlayCircle, color: "text-blue-500"    },
          { label: "Free Videos",    value: freeCount,    icon: PlayCircle, color: "text-emerald-500" },
          { label: "Premium Videos", value: premiumCount, icon: Lock,       color: "text-gold"        },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="rounded-2xl bg-background border border-border p-4 text-center">
            <Icon className={`h-5 w-5 ${color} mx-auto mb-2`} />
            <p className="font-serif text-xl text-navy">{value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* ── Search + access filter ────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search videos, instructors..."
            className="w-full rounded-xl border border-border bg-background pl-10 pr-4 py-2.5 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
        </div>

        <div className="flex gap-1 rounded-xl bg-cream p-1 shrink-0">
          {(["all", "free", "premium"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setAccess(f)}
              className={`rounded-lg px-4 py-2 text-xs font-medium capitalize transition-all ${
                access === f ? "bg-background text-navy shadow-sm" : "text-muted-foreground hover:text-navy"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ── Category tabs ─────────────────────────────────────────────── */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {VIDEO_CATEGORIES.map((cat) => {
          const count = cat.id === "all"
            ? MOCK_VIDEOS.length
            : MOCK_VIDEOS.filter((v) => v.category === cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium transition-all shrink-0 ${
                category === cat.id
                  ? "bg-navy text-white"
                  : "bg-background border border-border text-muted-foreground hover:border-gold hover:text-navy"
              }`}
            >
              {cat.label}
              <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                category === cat.id ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Locked banner (free users only) ──────────────────────────── */}
      {!isPremium && lockedCount > 0 && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 dark:border-amber-900/40 dark:bg-amber-950/20 px-4 py-3">
          <div className="flex items-center gap-2.5 text-sm">
            <Lock className="h-4 w-4 text-amber-600 shrink-0" />
            <span className="text-amber-800 dark:text-amber-200">
              <span className="font-semibold">{lockedCount} premium videos</span> are locked.
              Subscribe to access the full library.
            </span>
          </div>
          <button
            onClick={() => setSubOpen(true)}
            className="shrink-0 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform"
          >
            Subscribe Now
          </button>
        </div>
      )}

      {/* ── Grid ──────────────────────────────────────────────────────── */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              isPremium={isPremium}
              onPlay={setActiveVideo}
              onSubscribe={() => setSubOpen(true)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <span className="text-5xl mb-4">🎥</span>
          <p className="font-serif text-xl text-navy">No videos found</p>
          <p className="text-sm text-muted-foreground mt-1 max-w-xs">
            Try adjusting your search or category filter.
          </p>
          <button
            onClick={() => { setSearch(""); setCategory("all"); setAccess("all"); }}
            className="mt-4 rounded-full border border-border px-5 py-2 text-sm font-medium text-navy hover:bg-cream transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* ── Modals ────────────────────────────────────────────────────── */}
      <VideoPlayerModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      <SubscriptionModal open={subOpen} onClose={() => setSubOpen(false)} onViewChange={onViewChange} />
    </div>
  );
}
