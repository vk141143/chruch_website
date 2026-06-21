import { Users, DollarSign, Calendar, BookOpen, PlayCircle, GraduationCap, HeartHandshake, MessageSquare, TrendingUp, Crown } from "lucide-react";
import { StatCard, BarChart } from "./AdminUI";
import { MEMBER_GROWTH, REVENUE_DATA, DONATION_DATA, ENROLLMENT_DATA, MONTHS, ADMIN_MEMBERS, ADMIN_DONATIONS, ADMIN_EVENTS } from "./adminData";
import type { AdminView } from "./AdminLayout";

interface Props { onViewChange: (v: AdminView) => void; }

export function AdminDashboard({ onViewChange }: Props) {
  const METRICS = [
    { icon: Users, label: "Total Members", value: "2,847", delta: "+12.4%", color: "text-blue-500" },
    { icon: Crown, label: "Active Subscribers", value: "642", delta: "+8.1%", color: "text-gold" },
    { icon: DollarSign, label: "Monthly Revenue", value: "$10,200", delta: "+15.6%", color: "text-emerald-500" },
    { icon: DollarSign, label: "Total Donations", value: "$412,840", delta: "+24.6%", color: "text-purple-500" },
    { icon: BookOpen, label: "Course Enrollments", value: "1,206", delta: "+15.2%", color: "text-orange-500" },
    { icon: PlayCircle, label: "Video Watch Time", value: "4,820h", delta: "+9.8%", color: "text-pink-500" },
    { icon: Calendar, label: "Upcoming Events", value: "5", delta: "+2", color: "text-cyan-500" },
    { icon: HeartHandshake, label: "Pending Prayers", value: "4", delta: "", color: "text-red-400" },
    { icon: MessageSquare, label: "Pending Posts", value: "2", delta: "", color: "text-amber-500" },
  ];

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-[1400px] mx-auto">
      {/* Welcome */}
      <div className="rounded-2xl bg-navy text-white p-6 flex items-center justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 50%, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="relative">
          <p className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">Admin Panel</p>
          <h2 className="font-serif text-2xl mt-1">Kingdom Life Fellowship</h2>
          <p className="text-white/60 text-sm mt-1">Here's what's happening in your church today.</p>
        </div>
        <div className="relative hidden md:flex items-center gap-4 text-sm text-white/60">
          <span>Last updated: Just now</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {METRICS.map((m) => (
          <StatCard key={m.label} icon={m.icon} label={m.label} value={m.value} delta={m.delta || undefined} color={m.color} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <BarChart data={MEMBER_GROWTH} labels={MONTHS} title="Member Growth" subtitle="New members per month" color="from-blue-600 to-blue-400" />
        <BarChart data={REVENUE_DATA} labels={MONTHS} title="Subscription Revenue" subtitle="Monthly revenue ($)" color="from-gold to-yellow-300" />
        <BarChart data={DONATION_DATA} labels={MONTHS} title="Donations" subtitle="Monthly giving ($)" color="from-emerald-600 to-emerald-400" />
        <BarChart data={ENROLLMENT_DATA} labels={MONTHS} title="Course Enrollments" subtitle="New enrollments/month" color="from-purple-600 to-purple-400" />
      </div>

      {/* Tables Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Registrations */}
        <div className="lg:col-span-2 rounded-2xl bg-background border border-border overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-border">
            <h3 className="font-serif text-lg text-navy">Recent Registrations</h3>
            <button onClick={() => onViewChange("members")} className="text-xs text-gold hover:underline">View all</button>
          </div>
          <div className="divide-y divide-border">
            {ADMIN_MEMBERS.slice(0, 5).map((m) => (
              <div key={m.id} className="flex items-center gap-3 px-5 py-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-gold text-navy font-bold text-xs shadow-gold">{m.avatar}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-navy truncate">{m.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{m.email}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold ${m.plan === "Premium" || m.plan === "Annual" ? "bg-gold/20 text-yellow-700" : "bg-slate-100 text-slate-600"}`}>{m.plan}</span>
                  <p className="text-xs text-muted-foreground mt-0.5">{m.joined}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Donations + Activity */}
        <div className="space-y-4">
          <div className="rounded-2xl bg-background border border-border overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <h3 className="font-serif text-base text-navy">Recent Donations</h3>
              <button onClick={() => onViewChange("donations")} className="text-xs text-gold hover:underline">View all</button>
            </div>
            <div className="divide-y divide-border">
              {ADMIN_DONATIONS.slice(0, 4).map((d) => (
                <div key={d.id} className="flex items-center justify-between px-5 py-2.5">
                  <div>
                    <p className="text-xs font-medium text-navy">{d.donor}</p>
                    <p className="text-xs text-muted-foreground">{d.fund}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-emerald-600">${d.amount.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">{d.date.split(",")[0]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-navy text-white p-5">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="h-4 w-4 text-gold" />
              <p className="font-serif text-base">Recent Activity</p>
            </div>
            <ul className="space-y-2.5 text-xs">
              {[
                "New member: Rachel Mensah joined",
                "Donation $1,200 — General Fund",
                "Prayer request submitted",
                "Event registered: Summer Conference",
                "Course published: Apologetics",
              ].map((a, i) => (
                <li key={i} className="flex gap-2.5 pb-2.5 border-b border-white/10 last:border-0 last:pb-0">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  <span className="text-white/80">{a}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Upcoming Events */}
          <div className="rounded-2xl bg-background border border-border overflow-hidden">
            <div className="px-5 py-3 border-b border-border">
              <h3 className="font-serif text-base text-navy">Upcoming Events</h3>
            </div>
            {ADMIN_EVENTS.filter((e) => e.status === "Upcoming").slice(0, 3).map((e) => {
              const pct = Math.round((e.registered / e.capacity) * 100);
              return (
                <div key={e.id} className="px-5 py-3 border-b border-border last:border-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base">{e.image}</span>
                    <p className="text-xs font-medium text-navy truncate">{e.title}</p>
                  </div>
                  <div className="h-1.5 rounded-full bg-cream overflow-hidden">
                    <div className="h-full bg-gradient-gold" style={{ width: `${pct}%` }} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{e.registered}/{e.capacity} registered</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
