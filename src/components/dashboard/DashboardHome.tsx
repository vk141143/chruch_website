import { useState } from "react";
import {
  BookOpen, Calendar, PlayCircle, Bell, Share2, Bookmark, ArrowRight,
  MapPin, Clock, Users, TrendingUp, CheckCircle, Crown, Video,
} from "lucide-react";
import {
  MOCK_COURSES, MOCK_SERMONS, MOCK_EVENTS, MOCK_NOTIFICATIONS,
  MOCK_ANNOUNCEMENTS, BIBLE_VERSES, type Course,
} from "@/lib/mockData";
import type { AuthUser } from "@/lib/auth";
import type { DashView } from "./DashboardLayout";

const DAILY_VERSE = BIBLE_VERSES[new Date().getDay() % BIBLE_VERSES.length];

interface Props {
  user: AuthUser;
  isPremium: boolean;
  onViewChange: (v: DashView) => void;
  onCourseSelect: (c: Course) => void;
}

export function DashboardHome({ user, isPremium, onViewChange, onCourseSelect }: Props) {
  const [verseSaved, setVerseSaved] = useState(false);
  const inProgress = MOCK_COURSES.filter((c) => c.status === "in-progress");
  const unread = MOCK_NOTIFICATIONS.filter((n) => !n.read).length;

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
      {/* Welcome */}
      <div className="rounded-2xl bg-navy text-white p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="relative">
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">Welcome back</p>
          <h2 className="font-serif text-2xl md:text-3xl mt-1">{user.name}</h2>
          <p className="text-white/60 text-sm mt-1">Continue your faith journey today 🙏</p>
        </div>
        {!isPremium && (
          <button
            onClick={() => onViewChange("subscription")}
            className="relative flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform shrink-0"
          >
            <Crown className="h-4 w-4" /> Upgrade to Premium
          </button>
        )}
        {isPremium && (
          <div className="relative flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-sm text-gold shrink-0">
            <Crown className="h-4 w-4" /> Premium Member
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { icon: TrendingUp, label: "Learning Progress", value: "68%", sub: "Gospel of John", color: "text-blue-500", view: "my-learning" },
          { icon: PlayCircle, label: "Video Library", value: "12", sub: "videos available", color: "text-purple-500", view: "video-library" },
          { icon: Calendar, label: "Upcoming Events", value: "3", sub: "Next: Jun 27", color: "text-gold", view: "events" },
          { icon: Users, label: "Prayer Requests", value: "2 Active", sub: "24 praying", color: "text-green-500", view: "prayer" },
        ].map(({ icon: Icon, label, value, sub, color, view }) => (
          <div key={label} className="rounded-2xl bg-background border border-border p-4 cursor-pointer hover:border-gold transition-colors" onClick={() => onViewChange(view as DashView)}>
            <Icon className={`h-5 w-5 ${color} mb-3`} />
            <p className="font-serif text-xl text-navy">{value}</p>
            <p className="text-xs font-medium text-navy mt-0.5">{label}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Daily Bible Verse */}
          <div className="rounded-2xl border border-gold/30 bg-background p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-gold opacity-5 rounded-full -translate-y-8 translate-x-8" />
            <p className="text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-3">Daily Bible Verse</p>
            <blockquote className="font-serif text-xl text-navy leading-relaxed">
              "{DAILY_VERSE.verse}"
            </blockquote>
            <p className="text-gold font-semibold text-sm mt-3">— {DAILY_VERSE.ref}</p>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setVerseSaved((v) => !v)}
                className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${verseSaved ? "border-gold bg-gold/10 text-gold" : "border-border text-muted-foreground hover:border-gold hover:text-gold"}`}
              >
                <Bookmark className="h-3.5 w-3.5" />
                {verseSaved ? "Saved" : "Save"}
              </button>
              <button className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:border-navy hover:text-navy transition-colors">
                <Share2 className="h-3.5 w-3.5" /> Share
              </button>
            </div>
          </div>

          {/* Continue Watching */}
          <div className="rounded-2xl bg-background border border-border p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-lg text-navy">Continue Watching</h3>
              <button onClick={() => onViewChange("my-learning")} className="text-xs text-gold hover:underline flex items-center gap-1">
                View all <ArrowRight className="h-3 w-3" />
              </button>
            </div>
            <div className="space-y-3">
              {inProgress.map((course) => (
                <div key={course.id} className="flex items-center gap-4 p-3 rounded-xl bg-cream hover:bg-muted transition-colors cursor-pointer group"
                  onClick={() => onCourseSelect(course)}>
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-2xl">
                    {course.thumbnail}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-navy truncate">{course.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{course.currentLesson}</p>
                    <div className="mt-1.5 h-1.5 rounded-full bg-border overflow-hidden">
                      <div className="h-full bg-gradient-gold transition-all" style={{ width: `${course.progress}%` }} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{course.progress}% · {course.duration}</p>
                  </div>
                  <button className="shrink-0 rounded-full bg-navy px-3 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    Resume
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="rounded-2xl bg-background border border-border p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-lg text-navy">Upcoming Events</h3>
              <button onClick={() => onViewChange("events")} className="text-xs text-gold hover:underline flex items-center gap-1">
                All events <ArrowRight className="h-3 w-3" />
              </button>
            </div>
            <div className="space-y-3">
              {MOCK_EVENTS.slice(0, 3).map((event) => (
                <div key={event.id} className="flex items-start gap-4 p-3 rounded-xl bg-cream">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-gold text-xl shadow-gold">
                    {event.image}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-navy">{event.title}</p>
                    <div className="flex flex-wrap gap-x-3 mt-1">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="h-3 w-3" />{event.date} · {event.time}</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3 w-3" />{event.location}</span>
                    </div>
                  </div>
                  <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${event.status === "registered" ? "bg-green-100 text-green-700" : "bg-navy/10 text-navy"}`}>
                    {event.status === "registered" ? "Registered" : "Register"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Sermons */}
          <div className="rounded-2xl bg-background border border-border p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-lg text-navy">Recent Sermons</h3>
              <button onClick={() => onViewChange("sermons")} className="text-xs text-gold hover:underline flex items-center gap-1">
                View all <ArrowRight className="h-3 w-3" />
              </button>
            </div>
            <div className="space-y-3">
              {MOCK_SERMONS.slice(0, 3).map((sermon) => (
                <div key={sermon.id} className="flex items-center gap-3 p-3 rounded-xl bg-cream hover:bg-muted transition-colors cursor-pointer">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy text-lg">{sermon.thumbnail}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-navy truncate">{sermon.title}</p>
                    <p className="text-xs text-muted-foreground">{sermon.speaker} · {sermon.bibleRef}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs text-muted-foreground">{sermon.duration}</p>
                    <p className="text-xs text-gold mt-0.5">{sermon.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Notifications */}
          <div className="rounded-2xl bg-background border border-border p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4 text-gold" />
                <h3 className="font-serif text-lg text-navy">Notifications</h3>
              </div>
              {unread > 0 && (
                <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs text-white font-bold">{unread} new</span>
              )}
            </div>
            <div className="space-y-3">
              {MOCK_NOTIFICATIONS.slice(0, 4).map((n) => (
                <div key={n.id} className={`flex gap-3 p-2.5 rounded-xl transition-colors ${!n.read ? "bg-gold/5 border border-gold/20" : ""}`}>
                  <span className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${!n.read ? "bg-gold" : "bg-muted"}`} />
                  <div>
                    <p className="text-xs font-semibold text-navy">{n.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{n.message}</p>
                    <p className="text-xs text-muted-foreground/60 mt-1">{n.createdAt}</p>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => onViewChange("notifications")} className="mt-3 w-full text-center text-xs text-gold hover:underline">
              View all notifications
            </button>
          </div>

          {/* Announcements */}
          <div className="rounded-2xl bg-background border border-border p-5">
            <h3 className="font-serif text-lg text-navy mb-4">Announcements</h3>
            <div className="space-y-3">
              {MOCK_ANNOUNCEMENTS.slice(0, 3).map((a) => (
                <div key={a.id} className="flex gap-3">
                  <span className="text-xl shrink-0">{a.image}</span>
                  <div>
                    <p className="text-xs font-semibold text-navy leading-snug">{a.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed line-clamp-2">{a.description}</p>
                    {a.pinned && (
                      <span className="inline-block mt-1 rounded-full bg-gold/10 px-2 py-0.5 text-[10px] text-gold font-semibold">Pinned</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subscription */}
          <div className={`rounded-2xl p-5 ${isPremium ? "bg-gradient-gold" : "bg-navy"}`}>
            <div className="flex items-center gap-2 mb-2">
              <Crown className={`h-5 w-5 ${isPremium ? "text-navy" : "text-gold"}`} />
              <p className={`font-serif text-lg ${isPremium ? "text-navy" : "text-white"}`}>
                {isPremium ? "Premium Active" : "Free Plan"}
              </p>
            </div>
            {isPremium ? (
              <>
                <p className="text-navy/70 text-xs">Your plan renews in 7 days</p>
                <div className="mt-3 h-1.5 rounded-full bg-navy/10 overflow-hidden">
                  <div className="h-full bg-navy/30 w-[80%]" />
                </div>
                <div className="flex items-center gap-1.5 mt-2">
                  <CheckCircle className="h-3.5 w-3.5 text-navy/70" />
                  <p className="text-xs text-navy/70">All courses unlocked</p>
                </div>
              </>
            ) : (
              <>
                <p className="text-white/60 text-xs mb-3">Unlock all courses, sermons and features</p>
                <button onClick={() => onViewChange("subscription")} className="w-full rounded-full bg-gradient-gold py-2 text-sm font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform">
                  Upgrade Now
                </button>
              </>
            )}
          </div>

          {/* Learning Progress */}
          <div className="rounded-2xl bg-background border border-border p-5">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-4 w-4 text-gold" />
              <h3 className="font-serif text-lg text-navy">My Progress</h3>
            </div>
            <div className="space-y-4">
              {inProgress.map((c) => (
                <div key={c.id}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-medium text-navy truncate max-w-[65%]">{c.title}</span>
                    <span className="text-muted-foreground">{c.lessonsCompleted}/{c.totalLessons}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-cream overflow-hidden">
                    <div className="h-full bg-gradient-gold" style={{ width: `${c.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
