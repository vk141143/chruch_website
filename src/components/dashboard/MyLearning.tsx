import { useState } from "react";
import { PlayCircle, Award, Lock, Crown } from "lucide-react";
import { MOCK_COURSES, type Course } from "@/lib/mockData";
import type { DashView } from "./DashboardLayout";

type Tab = "in-progress" | "completed" | "saved" | "certificates";

interface Props {
  isPremium: boolean;
  onCourseSelect: (c: Course) => void;
  onViewChange: (v: DashView) => void;
}

export function MyLearning({ isPremium, onCourseSelect, onViewChange }: Props) {
  const [tab, setTab] = useState<Tab>("in-progress");

  const filtered = MOCK_COURSES.filter((c) => {
    if (tab === "in-progress") return c.status === "in-progress";
    if (tab === "completed") return c.status === "completed";
    if (tab === "saved") return c.status === "saved";
    return false;
  });

  const TABS: { id: Tab; label: string; count: number }[] = [
    { id: "in-progress", label: "In Progress", count: MOCK_COURSES.filter((c) => c.status === "in-progress").length },
    { id: "completed", label: "Completed", count: MOCK_COURSES.filter((c) => c.status === "completed").length },
    { id: "saved", label: "Saved Courses", count: MOCK_COURSES.filter((c) => c.status === "saved").length },
    { id: "certificates", label: "Certificates", count: 1 },
  ];

  if (tab === "certificates") {
    return (
      <div className="p-4 md:p-6 max-w-5xl mx-auto">
        <Tabs tabs={TABS} active={tab} onChange={(t) => setTab(t as Tab)} />
        <div className="mt-6">
          {MOCK_COURSES.filter((c) => c.status === "completed").map((c) => (
            <div key={c.id} className="rounded-2xl bg-background border border-border p-6 flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-gold shadow-gold">
                <Award className="h-8 w-8 text-navy" />
              </div>
              <div className="flex-1">
                <p className="font-serif text-lg text-navy">{c.title}</p>
                <p className="text-sm text-muted-foreground">{c.instructor} · {c.totalLessons} lessons</p>
              </div>
              <button className="rounded-full bg-gradient-gold px-4 py-2 text-sm font-semibold text-navy shadow-gold">
                Download
              </button>
            </div>
          ))}
          {MOCK_COURSES.filter((c) => c.status === "completed").length === 0 && (
            <EmptyState icon="🎓" title="No certificates yet" desc="Complete a course to earn your certificate." />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 max-w-5xl mx-auto">
      <Tabs tabs={TABS} active={tab} onChange={(t) => setTab(t as Tab)} />
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((course) => {
          const locked = course.premium && !isPremium;
          return (
            <div key={course.id} className="rounded-2xl bg-background border border-border overflow-hidden flex flex-col">
              <div className="relative h-36 bg-navy flex items-center justify-center text-5xl">
                {course.thumbnail}
                {locked && (
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2">
                    <Lock className="h-6 w-6 text-white" />
                    <span className="text-white text-xs font-medium">Premium</span>
                  </div>
                )}
              </div>
              <div className="p-4 flex flex-col flex-1">
                <p className="text-xs text-gold font-semibold uppercase tracking-wide">{course.category}</p>
                <h4 className="font-serif text-base text-navy mt-1 leading-snug">{course.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{course.instructor}</p>
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>{course.lessonsCompleted}/{course.totalLessons} lessons</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-cream overflow-hidden">
                    <div className="h-full bg-gradient-gold" style={{ width: `${course.progress}%` }} />
                  </div>
                </div>
                <div className="mt-4 mt-auto pt-3">
                  {locked ? (
                    <button
                      onClick={() => onViewChange("subscription")}
                      className="flex items-center justify-center gap-2 w-full rounded-full bg-gradient-gold py-2 text-sm font-semibold text-navy shadow-gold"
                    >
                      <Crown className="h-4 w-4" /> Upgrade to Unlock
                    </button>
                  ) : (
                    <button
                      onClick={() => onCourseSelect(course)}
                      className="flex items-center justify-center gap-2 w-full rounded-full bg-navy py-2 text-sm font-medium text-white hover:bg-navy/90 transition-colors"
                    >
                      <PlayCircle className="h-4 w-4" />
                      {course.status === "completed" ? "Review" : tab === "saved" ? "Start" : "Continue"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <div className="col-span-full">
            <EmptyState icon="📚" title="Nothing here yet" desc="Courses you enroll in will appear here." />
          </div>
        )}
      </div>
    </div>
  );
}

function Tabs({ tabs, active, onChange }: { tabs: { id: string; label: string; count: number }[]; active: string; onChange: (t: string) => void }) {
  return (
    <div className="flex gap-1 rounded-xl bg-cream p-1 overflow-x-auto">
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap transition-all ${
            active === t.id ? "bg-background text-navy shadow-sm" : "text-muted-foreground hover:text-navy"
          }`}
        >
          {t.label}
          <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${active === t.id ? "bg-gold/20 text-gold" : "bg-border text-muted-foreground"}`}>
            {t.count}
          </span>
        </button>
      ))}
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
