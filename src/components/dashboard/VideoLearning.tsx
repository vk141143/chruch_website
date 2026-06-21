import { useState } from "react";
import {
  PlayCircle, CheckCircle, Lock, ChevronDown, ChevronUp,
  FileText, BookOpen, Bookmark, Crown, ArrowLeft,
} from "lucide-react";
import type { Course } from "@/lib/mockData";
import type { DashView } from "./DashboardLayout";

const LESSONS = [
  { id: "l1", title: "Introduction & Overview", duration: "8:32", completed: true, free: true },
  { id: "l2", title: "Historical Context of John", duration: "12:14", completed: true, free: true },
  { id: "l3", title: "The Word Became Flesh", duration: "15:40", completed: true, free: false },
  { id: "l4", title: "The First Disciples", duration: "11:05", completed: true, free: false },
  { id: "l5", title: "The Wedding at Cana", duration: "9:28", completed: true, free: false },
  { id: "l6", title: "The Bread of Life", duration: "18:22", completed: false, free: false },
  { id: "l7", title: "Walking on Water", duration: "13:55", completed: false, free: false },
  { id: "l8", title: "The Good Shepherd", duration: "16:10", completed: false, free: false },
];

interface Props {
  course: Course;
  isPremium: boolean;
  onViewChange: (v: DashView) => void;
}

export function VideoLearning({ course, isPremium, onViewChange }: Props) {
  const [activeLesson, setActiveLesson] = useState(LESSONS[5]);
  const [completed, setCompleted] = useState<Set<string>>(new Set(LESSONS.filter((l) => l.completed).map((l) => l.id)));
  const [note, setNote] = useState("");
  const [savedNotes, setSavedNotes] = useState<string[]>([]);
  const [tab, setTab] = useState<"notes" | "resources" | "refs" | "bookmarks">("notes");
  const [lessonsOpen, setLessonsOpen] = useState(true);

  const isLocked = !isPremium && !activeLesson.free;
  const progress = Math.round((completed.size / LESSONS.length) * 100);

  function markDone() {
    setCompleted((prev) => new Set([...prev, activeLesson.id]));
    const idx = LESSONS.findIndex((l) => l.id === activeLesson.id);
    if (idx < LESSONS.length - 1) setActiveLesson(LESSONS[idx + 1]);
  }

  function saveNote() {
    if (note.trim()) {
      setSavedNotes((prev) => [`[${activeLesson.title}]: ${note.trim()}`, ...prev]);
      setNote("");
    }
  }

  return (
    <div className="flex flex-col lg:flex-row h-full overflow-hidden">
      {/* Main video area */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 md:p-6">
          <button
            onClick={() => onViewChange("my-learning")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-navy mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to My Learning
          </button>

          <p className="text-xs text-gold font-semibold uppercase tracking-wide">{course.category}</p>
          <h2 className="font-serif text-2xl text-navy mt-1">{course.title}</h2>
          <p className="text-sm text-muted-foreground mt-0.5">{course.instructor}</p>

          {/* Video Player */}
          <div className="relative mt-4 rounded-2xl overflow-hidden bg-navy aspect-video flex items-center justify-center">
            {isLocked ? (
              <div className="flex flex-col items-center gap-4 text-white text-center px-6">
                <Lock className="h-12 w-12 text-gold" />
                <div>
                  <p className="font-serif text-xl">Premium Content</p>
                  <p className="text-white/60 text-sm mt-1">Upgrade to access this lesson and all premium content</p>
                </div>
                <button
                  onClick={() => onViewChange("subscription")}
                  className="flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-navy shadow-gold"
                >
                  <Crown className="h-4 w-4" /> Upgrade to Premium
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3 text-white">
                <PlayCircle className="h-16 w-16 text-gold opacity-80" />
                <p className="text-sm text-white/60">{activeLesson.title}</p>
                <p className="text-xs text-white/40">{activeLesson.duration}</p>
              </div>
            )}
          </div>

          {/* Progress + Mark Done */}
          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>Course Progress</span>
                <span>{completed.size}/{LESSONS.length} lessons · {progress}%</span>
              </div>
              <div className="h-2 rounded-full bg-cream overflow-hidden">
                <div className="h-full bg-gradient-gold transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
            </div>
            {!isLocked && (
              <button
                onClick={markDone}
                disabled={completed.has(activeLesson.id)}
                className={`shrink-0 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  completed.has(activeLesson.id)
                    ? "bg-green-100 text-green-700 cursor-default"
                    : "bg-navy text-white hover:bg-navy/90"
                }`}
              >
                <CheckCircle className="h-4 w-4" />
                {completed.has(activeLesson.id) ? "Completed" : "Mark Complete"}
              </button>
            )}
          </div>

          {/* Tabs: Notes, Resources, Bible Refs, Bookmarks */}
          <div className="mt-6">
            <div className="flex gap-1 rounded-xl bg-cream p-1">
              {(["notes", "resources", "refs", "bookmarks"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex-1 rounded-lg py-2 text-xs font-medium capitalize transition-all ${
                    tab === t ? "bg-background text-navy shadow-sm" : "text-muted-foreground hover:text-navy"
                  }`}
                >
                  {t === "refs" ? "Bible Refs" : t}
                </button>
              ))}
            </div>

            <div className="mt-4">
              {tab === "notes" && (
                <div className="space-y-3">
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Take notes while watching..."
                    className="w-full rounded-xl border border-border bg-background p-3 text-sm text-navy placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-gold/30"
                    rows={3}
                  />
                  <button onClick={saveNote} className="rounded-full bg-navy px-4 py-2 text-sm text-white hover:bg-navy/90 transition-colors">
                    Save Note
                  </button>
                  {savedNotes.map((n, i) => (
                    <div key={i} className="rounded-xl bg-cream p-3 text-sm text-navy flex gap-2">
                      <FileText className="h-4 w-4 text-gold shrink-0 mt-0.5" /> {n}
                    </div>
                  ))}
                  {savedNotes.length === 0 && <p className="text-sm text-muted-foreground">No notes yet for this course.</p>}
                </div>
              )}
              {tab === "resources" && (
                <div className="space-y-2">
                  {["Lesson Slides (PDF)", "Study Guide", "Supplementary Reading"].map((r) => (
                    <div key={r} className="flex items-center gap-3 rounded-xl bg-cream p-3 cursor-pointer hover:bg-muted transition-colors">
                      <FileText className="h-4 w-4 text-gold" />
                      <span className="text-sm text-navy">{r}</span>
                    </div>
                  ))}
                </div>
              )}
              {tab === "refs" && (
                <div className="space-y-2">
                  {["John 6:35", "John 6:48", "Exodus 16:4", "Psalm 78:24"].map((ref) => (
                    <div key={ref} className="flex items-center gap-3 rounded-xl bg-cream p-3">
                      <BookOpen className="h-4 w-4 text-gold" />
                      <span className="text-sm font-medium text-navy">{ref}</span>
                    </div>
                  ))}
                </div>
              )}
              {tab === "bookmarks" && (
                <div className="space-y-2">
                  <div className="flex items-center gap-3 rounded-xl bg-cream p-3">
                    <Bookmark className="h-4 w-4 text-gold" />
                    <span className="text-sm text-navy">The Bread of Life — 4:22</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Add bookmarks while watching by pressing B.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lesson Sidebar */}
      <div className="lg:w-80 lg:border-l border-border overflow-y-auto bg-background">
        <button
          onClick={() => setLessonsOpen((v) => !v)}
          className="w-full flex items-center justify-between px-4 py-3 border-b border-border text-sm font-semibold text-navy sticky top-0 bg-background z-10"
        >
          <span>Lessons ({LESSONS.length})</span>
          {lessonsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        {lessonsOpen && (
          <div className="divide-y divide-border">
            {LESSONS.map((lesson, i) => {
              const locked = !isPremium && !lesson.free;
              const isDone = completed.has(lesson.id);
              const isActive = lesson.id === activeLesson.id;
              return (
                <button
                  key={lesson.id}
                  onClick={() => !locked && setActiveLesson(lesson)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    isActive ? "bg-gold/10 border-l-2 border-l-gold" : "hover:bg-cream"
                  } ${locked ? "cursor-not-allowed opacity-60" : ""}`}
                >
                  <div className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold ${
                    isDone ? "bg-green-500 text-white" : isActive ? "bg-gold text-navy" : "bg-cream text-muted-foreground"
                  }`}>
                    {isDone ? <CheckCircle className="h-4 w-4" /> : locked ? <Lock className="h-3 w-3" /> : i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs font-medium truncate ${isActive ? "text-navy" : "text-foreground"}`}>{lesson.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{lesson.duration}</p>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
