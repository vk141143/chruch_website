import { useState } from "react";
import { Sun, CheckCircle, BookOpen, Heart } from "lucide-react";
import { DEVOTION, STREAK_DAYS, BIBLE_VERSES } from "@/lib/mockData";

export function DevotionPage() {
  const [completed, setCompleted] = useState(false);
  const [prayerDone, setPrayerDone] = useState(false);
  const todayVerse = BIBLE_VERSES[new Date().getDay() % BIBLE_VERSES.length];

  return (
    <div className="p-4 md:p-6 max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="rounded-2xl bg-navy text-white p-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="relative flex items-center gap-3 mb-2">
          <Sun className="h-6 w-6 text-gold" />
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">
            Daily Devotion
          </p>
        </div>
        <h2 className="relative font-serif text-2xl">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </h2>
        <p className="relative text-white/60 text-sm mt-1">
          Start your day with God's Word
        </p>
      </div>

      {/* Streak */}
      <div className="rounded-2xl bg-background border border-border p-5">
        <div className="flex items-center justify-between mb-4">
          <p className="font-serif text-lg text-navy">This Week's Streak 🔥</p>
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">
            4 day streak
          </span>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {STREAK_DAYS.map(({ day, done }) => (
            <div key={day} className="flex flex-col items-center gap-1.5">
              <div
                className={`grid h-9 w-9 place-items-center rounded-full text-sm font-medium ${
                  done
                    ? "bg-gradient-gold text-navy shadow-gold"
                    : "bg-cream text-muted-foreground"
                }`}
              >
                {done ? <CheckCircle className="h-4 w-4" /> : "○"}
              </div>
              <span className="text-xs text-muted-foreground">{day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Today's Verse */}
      <div className="rounded-2xl border border-gold/30 bg-background p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-gold opacity-5 rounded-full -translate-y-8 translate-x-8" />
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="h-4 w-4 text-gold" />
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">
            Today's Verse
          </p>
        </div>
        <blockquote className="font-serif text-xl text-navy leading-relaxed">
          "{todayVerse.verse}"
        </blockquote>
        <p className="text-gold font-semibold text-sm mt-3">
          — {todayVerse.ref}
        </p>
      </div>

      {/* Devotion Message */}
      <div className="rounded-2xl bg-background border border-border p-6 space-y-4">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-2">
            Today's Message
          </p>
          <blockquote className="font-serif text-xl text-navy leading-relaxed mb-2">
            "{DEVOTION.verse}"
          </blockquote>
          <p className="text-gold font-semibold text-sm">— {DEVOTION.ref}</p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {DEVOTION.message}
        </p>
      </div>

      {/* Reflection */}
      <div className="rounded-2xl bg-cream border border-border p-5">
        <p className="text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-3">
          Reflection Question
        </p>
        <p className="font-serif text-lg text-navy leading-relaxed">
          {DEVOTION.reflection}
        </p>
        <textarea
          placeholder="Write your reflection here..."
          rows={4}
          className="mt-4 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-navy placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-gold/30"
        />
      </div>

      {/* Prayer */}
      <div className="rounded-2xl bg-background border border-border p-5">
        <p className="text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-3">
          Today's Prayer
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed italic">
          {DEVOTION.prayer}
        </p>
        <button
          onClick={() => setPrayerDone(true)}
          className={`mt-4 flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
            prayerDone
              ? "bg-green-100 text-green-700"
              : "bg-navy text-white hover:bg-navy/90"
          }`}
        >
          <Heart className="h-4 w-4" />
          {prayerDone ? "Prayer Completed ✓" : "I've Prayed This"}
        </button>
      </div>

      {/* Mark Complete */}
      <button
        onClick={() => setCompleted(true)}
        disabled={completed}
        className={`w-full rounded-full py-3.5 text-sm font-semibold transition-all ${
          completed
            ? "bg-green-100 text-green-700 cursor-default"
            : "bg-gradient-gold text-navy shadow-gold hover:scale-[1.01]"
        }`}
      >
        {completed ? "✓ Devotion Completed — See you tomorrow!" : "Mark Devotion as Complete"}
      </button>
    </div>
  );
}
