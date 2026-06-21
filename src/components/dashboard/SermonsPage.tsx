import { useState } from "react";
import { PlayCircle, Bookmark, Search, BookOpen } from "lucide-react";
import { MOCK_SERMONS } from "@/lib/mockData";

const TOPICS = ["All", "Kingdom of God", "Grace", "Faith", "Prayer", "Redemption"];

export function SermonsPage() {
  const [saved, setSaved] = useState<Set<string>>(
    new Set(MOCK_SERMONS.filter((s) => s.saved).map((s) => s.id))
  );
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("All");

  const filtered = MOCK_SERMONS.filter((s) => {
    const matchSearch =
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.speaker.toLowerCase().includes(search.toLowerCase());
    const matchTopic = topic === "All" || s.topic === topic;
    return matchSearch && matchTopic;
  });

  function toggleSave(id: string) {
    setSaved((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <div className="p-4 md:p-6 max-w-5xl mx-auto">
      <div className="mb-6">
        <h2 className="font-serif text-2xl text-navy">Sermons</h2>
        <p className="text-sm text-muted-foreground mt-0.5">
          {MOCK_SERMONS.length} messages available
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search sermons or speakers..."
            className="w-full rounded-xl border border-border bg-background pl-9 pr-4 py-2.5 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {TOPICS.map((t) => (
            <button
              key={t}
              onClick={() => setTopic(t)}
              className={`rounded-full px-3 py-2 text-xs font-medium transition-colors ${
                topic === t
                  ? "bg-navy text-white"
                  : "bg-cream text-muted-foreground hover:text-navy"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Sermon List */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <span className="text-5xl mb-3">🎙️</span>
          <p className="font-serif text-xl text-navy">No sermons found</p>
          <p className="text-sm text-muted-foreground mt-1">
            Try a different search or topic filter.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((sermon) => (
            <div
              key={sermon.id}
              className="rounded-2xl bg-background border border-border p-4 flex items-center gap-4 hover:shadow-sm transition-shadow"
            >
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-navy text-2xl">
                {sermon.thumbnail}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-navy text-sm leading-snug">
                  {sermon.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {sermon.speaker}
                </p>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="flex items-center gap-1 text-xs text-gold font-medium">
                    <BookOpen className="h-3 w-3" /> {sermon.bibleRef}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {sermon.date}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {sermon.duration}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => toggleSave(sermon.id)}
                  className={`grid h-9 w-9 place-items-center rounded-full border transition-colors ${
                    saved.has(sermon.id)
                      ? "border-gold bg-gold/10 text-gold"
                      : "border-border text-muted-foreground hover:border-gold hover:text-gold"
                  }`}
                >
                  <Bookmark className="h-4 w-4" />
                </button>
                <button className="flex items-center gap-1.5 rounded-full bg-navy px-3 py-2 text-xs font-medium text-white hover:bg-navy/90 transition-colors">
                  <PlayCircle className="h-3.5 w-3.5" /> Play
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
