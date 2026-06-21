import { useState } from "react";
import { Bookmark, PlayCircle, BookOpen, Trash2 } from "lucide-react";
import { MOCK_SERMONS, MOCK_COURSES, BIBLE_VERSES } from "@/lib/mockData";

type SavedTab = "sermons" | "courses" | "verses";

export function SavedContentPage() {
  const [tab, setTab] = useState<SavedTab>("sermons");
  const [savedSermons, setSavedSermons] = useState(
    MOCK_SERMONS.filter((s) => s.saved)
  );
  const [savedVerses] = useState(BIBLE_VERSES.slice(0, 3));
  const savedCourses = MOCK_COURSES.filter((c) => c.status === "saved");

  const TABS = [
    { id: "sermons" as SavedTab, label: "Sermons", count: savedSermons.length },
    { id: "courses" as SavedTab, label: "Courses", count: savedCourses.length },
    { id: "verses" as SavedTab, label: "Bible Verses", count: savedVerses.length },
  ];

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="font-serif text-2xl text-navy">Saved Content</h2>
        <p className="text-sm text-muted-foreground mt-0.5">
          Everything you've bookmarked for later
        </p>
      </div>

      <div className="flex gap-1 rounded-xl bg-cream p-1 mb-6">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex items-center gap-2 flex-1 justify-center rounded-lg py-2 text-sm font-medium transition-all ${
              tab === t.id
                ? "bg-background text-navy shadow-sm"
                : "text-muted-foreground hover:text-navy"
            }`}
          >
            {t.label}
            <span
              className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                tab === t.id
                  ? "bg-gold/20 text-gold"
                  : "bg-border text-muted-foreground"
              }`}
            >
              {t.count}
            </span>
          </button>
        ))}
      </div>

      {/* Sermons */}
      {tab === "sermons" && (
        <div className="space-y-3">
          {savedSermons.length === 0 ? (
            <EmptyState icon="🎙️" title="No saved sermons" desc="Bookmark sermons to find them here." />
          ) : (
            savedSermons.map((s) => (
              <div
                key={s.id}
                className="flex items-center gap-4 rounded-2xl bg-background border border-border p-4"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-2xl">
                  {s.thumbnail}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-navy truncate">{s.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {s.speaker} · {s.bibleRef} · {s.date}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button className="flex items-center gap-1.5 rounded-full bg-navy px-3 py-1.5 text-xs text-white">
                    <PlayCircle className="h-3.5 w-3.5" /> Play
                  </button>
                  <button
                    onClick={() =>
                      setSavedSermons((prev) => prev.filter((x) => x.id !== s.id))
                    }
                    className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground hover:text-red-500 hover:border-red-200 transition-colors"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Courses */}
      {tab === "courses" && (
        <div className="grid sm:grid-cols-2 gap-4">
          {savedCourses.length === 0 ? (
            <div className="col-span-full">
              <EmptyState icon="📚" title="No saved courses" desc="Save courses to start them later." />
            </div>
          ) : (
            savedCourses.map((c) => (
              <div key={c.id} className="rounded-2xl bg-background border border-border overflow-hidden flex">
                <div className="grid h-full w-14 shrink-0 place-items-center bg-navy text-2xl">
                  {c.thumbnail}
                </div>
                <div className="p-4 flex-1">
                  <p className="text-xs text-gold font-semibold uppercase tracking-wide">
                    {c.category}
                  </p>
                  <p className="font-medium text-navy text-sm mt-0.5 leading-snug">
                    {c.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {c.instructor}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {c.totalLessons} lessons · {c.duration}
                  </p>
                  <button className="mt-2 flex items-center gap-1.5 text-xs font-medium text-navy hover:text-gold transition-colors">
                    <PlayCircle className="h-3.5 w-3.5" /> Start Course
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Verses */}
      {tab === "verses" && (
        <div className="space-y-3">
          {savedVerses.map((v, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gold/30 bg-background p-5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-gold opacity-5 rounded-full -translate-y-4 translate-x-4" />
              <div className="flex items-start gap-3 relative">
                <BookOpen className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <blockquote className="font-serif text-lg text-navy leading-relaxed">
                    "{v.verse}"
                  </blockquote>
                  <p className="text-gold font-semibold text-sm mt-2">— {v.ref}</p>
                </div>
                <button className="ml-auto grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors">
                  <Bookmark className="h-3.5 w-3.5 fill-current" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function EmptyState({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <span className="text-5xl mb-3">{icon}</span>
      <p className="font-serif text-xl text-navy">{title}</p>
      <p className="text-sm text-muted-foreground mt-1">{desc}</p>
    </div>
  );
}
