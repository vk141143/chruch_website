import { PlayCircle, Lock, Crown, Search } from "lucide-react";
import { useState } from "react";
import { MOCK_COURSES, type Course } from "@/lib/mockData";
import type { DashView } from "./DashboardLayout";

const ALL_COURSES: Course[] = [
  ...MOCK_COURSES,
  {
    id: "c7", title: "The Book of Revelation", category: "Prophecy",
    instructor: "Pastor Caleb Nwosu", progress: 0, lessonsCompleted: 0,
    totalLessons: 24, lastWatched: "Never", thumbnail: "🔮",
    status: "saved", currentLesson: "Introduction", duration: "10h total", premium: true,
  },
  {
    id: "c8", title: "New Testament Greek Basics", category: "Biblical Languages",
    instructor: "Pastor Daniel Yusuf", progress: 0, lessonsCompleted: 0,
    totalLessons: 20, lastWatched: "Never", thumbnail: "🏛️",
    status: "saved", currentLesson: "Introduction", duration: "9h total", premium: true,
  },
];

const CATEGORIES = ["All", "New Testament", "Old Testament", "Prayer", "Christian Living", "Ministry Training", "Prophecy", "Biblical Languages"];

interface Props {
  isPremium: boolean;
  onCourseSelect: (c: Course) => void;
  onViewChange: (v: DashView) => void;
}

export function BibleAcademyPage({ isPremium, onCourseSelect, onViewChange }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = ALL_COURSES.filter((c) => {
    const matchSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.instructor.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || c.category === category;
    return matchSearch && matchCat;
  });

  return (
    <div className="p-4 md:p-6 max-w-6xl mx-auto">
      {/* Hero Banner */}
      <div className="rounded-2xl bg-navy text-white p-6 mb-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <p className="relative text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-2">
          Bible Academy
        </p>
        <h2 className="relative font-serif text-2xl md:text-3xl">
          Grow Deeper in God's Word
        </h2>
        <p className="relative text-white/60 text-sm mt-2 max-w-lg">
          Expert-taught courses by seasoned pastors and theologians. From
          foundational faith to deep biblical study.
        </p>
        <div className="relative flex gap-4 mt-4 text-sm text-white/70">
          <span>📚 {ALL_COURSES.length} Courses</span>
          <span>🎓 7 Instructors</span>
          <span>⏱️ 80+ Hours</span>
        </div>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses or instructors..."
            className="w-full rounded-xl border border-border bg-background pl-9 pr-4 py-2.5 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 flex-wrap mb-6">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
              category === cat
                ? "bg-navy text-white"
                : "bg-cream text-muted-foreground hover:text-navy"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <span className="text-5xl mb-3">📚</span>
          <p className="font-serif text-xl text-navy">No courses found</p>
          <p className="text-sm text-muted-foreground mt-1">
            Try a different search or category.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((course) => {
            const locked = course.premium && !isPremium;
            const isEnrolled =
              course.status === "in-progress" || course.status === "completed";
            return (
              <div
                key={course.id}
                className="rounded-2xl bg-background border border-border overflow-hidden flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="relative h-32 bg-navy flex items-center justify-center text-5xl">
                  {course.thumbnail}
                  {locked && (
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-1.5">
                      <Lock className="h-5 w-5 text-white" />
                      <span className="text-white text-[10px] font-medium">Premium</span>
                    </div>
                  )}
                  {isEnrolled && (
                    <div className="absolute top-2 right-2 rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-bold text-white">
                      Enrolled
                    </div>
                  )}
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <p className="text-[10px] text-gold font-semibold uppercase tracking-wide">
                    {course.category}
                  </p>
                  <h4 className="font-serif text-sm text-navy mt-0.5 leading-snug flex-1">
                    {course.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {course.instructor}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {course.totalLessons} lessons · {course.duration}
                  </p>
                  {isEnrolled && (
                    <div className="mt-2">
                      <div className="h-1 rounded-full bg-cream overflow-hidden">
                        <div
                          className="h-full bg-gradient-gold"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {course.progress}% complete
                      </p>
                    </div>
                  )}
                  <div className="mt-3">
                    {locked ? (
                      <button
                        onClick={() => onViewChange("subscription")}
                        className="flex items-center justify-center gap-1.5 w-full rounded-full bg-gradient-gold py-2 text-xs font-semibold text-navy shadow-gold"
                      >
                        <Crown className="h-3.5 w-3.5" /> Upgrade to Unlock
                      </button>
                    ) : (
                      <button
                        onClick={() => onCourseSelect(course)}
                        className="flex items-center justify-center gap-1.5 w-full rounded-full bg-navy py-2 text-xs font-medium text-white hover:bg-navy/90 transition-colors"
                      >
                        <PlayCircle className="h-3.5 w-3.5" />
                        {isEnrolled ? "Continue" : "Start Course"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
