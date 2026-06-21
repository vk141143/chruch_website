import { Award, Download, Lock } from "lucide-react";
import { MOCK_COURSES } from "@/lib/mockData";
import type { DashView } from "./DashboardLayout";

interface Props {
  isPremium: boolean;
  onViewChange: (v: DashView) => void;
}

export function CertificatesPage({ isPremium, onViewChange }: Props) {
  const completed = MOCK_COURSES.filter((c) => c.status === "completed");
  const inProgress = MOCK_COURSES.filter((c) => c.status === "in-progress");

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="font-serif text-2xl text-navy">Certificates</h2>
        <p className="text-sm text-muted-foreground mt-0.5">
          Your earned certificates of completion
        </p>
      </div>

      {/* Earned */}
      {completed.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center rounded-2xl bg-background border border-border mb-6">
          <Award className="h-14 w-14 text-muted-foreground/30 mb-3" />
          <p className="font-serif text-xl text-navy">No certificates yet</p>
          <p className="text-sm text-muted-foreground mt-1">
            Complete a course to earn your first certificate.
          </p>
          <button
            onClick={() => onViewChange("my-learning")}
            className="mt-4 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-gold"
          >
            Browse Courses
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {completed.map((c) => (
            <div
              key={c.id}
              className="rounded-2xl border border-gold/40 bg-background overflow-hidden"
            >
              {/* Certificate header */}
              <div className="bg-gradient-gold p-6 text-center relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.3) 10px, rgba(255,255,255,.3) 11px)",
                  }}
                />
                <Award className="h-10 w-10 text-navy mx-auto mb-2" />
                <p className="text-[10px] tracking-[0.3em] uppercase text-navy/70 font-semibold">
                  Certificate of Completion
                </p>
                <p className="font-serif text-lg text-navy mt-1 leading-snug">
                  {c.title}
                </p>
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground">
                  Instructor: <span className="font-medium text-navy">{c.instructor}</span>
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {c.totalLessons} lessons completed · {c.category}
                </p>
                <button className="mt-3 flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-xs font-medium text-white hover:bg-navy/90 transition-colors">
                  <Download className="h-3.5 w-3.5" /> Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* In Progress */}
      {inProgress.length > 0 && (
        <div>
          <h3 className="font-serif text-lg text-navy mb-4">
            Courses In Progress
          </h3>
          <div className="space-y-3">
            {inProgress.map((c) => {
              const locked = c.premium && !isPremium;
              return (
                <div
                  key={c.id}
                  className="flex items-center gap-4 rounded-2xl bg-background border border-border p-4"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-2xl">
                    {c.thumbnail}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-navy truncate">{c.title}</p>
                    <div className="mt-1.5 h-1.5 rounded-full bg-cream overflow-hidden">
                      <div
                        className="h-full bg-gradient-gold"
                        style={{ width: `${c.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {c.progress}% complete · {c.lessonsCompleted}/{c.totalLessons} lessons
                    </p>
                  </div>
                  {locked ? (
                    <button
                      onClick={() => onViewChange("subscription")}
                      className="shrink-0 grid h-9 w-9 place-items-center rounded-full border border-gold/30 text-gold"
                    >
                      <Lock className="h-4 w-4" />
                    </button>
                  ) : (
                    <span className="shrink-0 rounded-full bg-cream px-3 py-1.5 text-xs font-medium text-navy">
                      {c.progress}%
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
