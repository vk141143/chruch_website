import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  LayoutDashboard, Users, BookOpen, Tag, Video, Mic2, Sun, Calendar, PlayCircle,
  ClipboardList, HeartHandshake, MessageSquare, Megaphone, DollarSign,
  CreditCard, Receipt, Award, Bell, BarChart3, Settings, UserCircle,
  LogOut, Menu, X, Cross, ChevronRight, ShieldCheck,
} from "lucide-react";
import { logout } from "@/lib/auth";
import { cn } from "@/lib/utils";

export type AdminView =
  | "dashboard" | "members" | "academy" | "categories" | "videos" | "video-library"
  | "sermons" | "devotions" | "events" | "registrations" | "prayer"
  | "community" | "announcements" | "donations" | "plans" | "transactions"
  | "certificates" | "notifications" | "reports" | "settings" | "profile";

const NAV_GROUPS = [
  {
    label: "Overview",
    items: [
      { id: "dashboard" as AdminView, label: "Dashboard", icon: LayoutDashboard },
    ],
  },
  {
    label: "Members",
    items: [
      { id: "members" as AdminView, label: "Members", icon: Users },
    ],
  },
  {
    label: "Content",
    items: [
      { id: "academy" as AdminView, label: "Bible Academy", icon: BookOpen },
      { id: "categories" as AdminView, label: "Course Categories", icon: Tag },
      { id: "videos" as AdminView, label: "Videos & Lessons", icon: Video },
      { id: "video-library" as AdminView, label: "Video Library", icon: PlayCircle },
      { id: "sermons" as AdminView, label: "Sermons", icon: Mic2 },
      { id: "devotions" as AdminView, label: "Daily Devotions", icon: Sun },
    ],
  },
  {
    label: "Church",
    items: [
      { id: "events" as AdminView, label: "Events", icon: Calendar },
      { id: "registrations" as AdminView, label: "Event Registrations", icon: ClipboardList },
      { id: "prayer" as AdminView, label: "Prayer Requests", icon: HeartHandshake },
      { id: "community" as AdminView, label: "Community Posts", icon: MessageSquare },
      { id: "announcements" as AdminView, label: "Announcements", icon: Megaphone },
    ],
  },
  {
    label: "Finance",
    items: [
      { id: "donations" as AdminView, label: "Donations & Giving", icon: DollarSign },
      { id: "plans" as AdminView, label: "Subscription Plans", icon: CreditCard },
      { id: "transactions" as AdminView, label: "Payments & Transactions", icon: Receipt },
    ],
  },
  {
    label: "System",
    items: [
      { id: "certificates" as AdminView, label: "Certificates", icon: Award },
      { id: "notifications" as AdminView, label: "Notifications", icon: Bell },
      { id: "reports" as AdminView, label: "Reports & Analytics", icon: BarChart3 },
      { id: "settings" as AdminView, label: "Website Settings", icon: Settings },
      { id: "profile" as AdminView, label: "Admin Profile", icon: UserCircle },
    ],
  },
];

const ALL_NAV = NAV_GROUPS.flatMap((g) => g.items);

interface Props {
  view: AdminView;
  onViewChange: (v: AdminView) => void;
  children: React.ReactNode;
  pendingCount?: number;
}

export function AdminLayout({ view, onViewChange, children, pendingCount = 0 }: Props) {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleLogout() { logout(); navigate({ to: "/" }); }
  function navTo(id: AdminView) { onViewChange(id); setMobileOpen(false); }

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className={cn("flex items-center gap-3 px-4 py-5 border-b border-white/10 shrink-0", collapsed && "px-3 justify-center")}>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-gold shadow-gold">
          <Cross className="h-4 w-4 text-navy" strokeWidth={2.5} />
        </span>
        {!collapsed && (
          <div>
            <p className="font-serif text-white text-sm leading-tight">Admin Panel</p>
            <p className="text-[9px] tracking-[0.3em] text-gold uppercase">WordnWorship</p>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 px-2">
        {NAV_GROUPS.map((group) => (
          <div key={group.label} className="mb-3">
            {!collapsed && (
              <p className="px-3 mb-1 text-[9px] tracking-[0.3em] uppercase text-white/30 font-semibold">{group.label}</p>
            )}
            <div className="space-y-0.5">
              {group.items.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => navTo(id)}
                  title={collapsed ? label : undefined}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-xs font-medium transition-all",
                    view === id ? "bg-gradient-gold text-navy shadow-gold font-semibold" : "text-white/70 hover:bg-white/10 hover:text-white",
                    collapsed && "justify-center px-2"
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {!collapsed && (
                    <>
                      <span className="flex-1 text-left">{label}</span>
                      {(id === "community" || id === "prayer") && pendingCount > 0 && (
                        <span className="grid h-4 w-4 place-items-center rounded-full bg-red-500 text-[9px] text-white font-bold">{pendingCount}</span>
                      )}
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className={cn("border-t border-white/10 p-2 space-y-0.5 shrink-0", collapsed && "flex flex-col items-center")}>
        <Link to="/" className={cn("flex items-center gap-2 w-full rounded-xl px-3 py-2 text-xs text-white/60 hover:bg-white/10 hover:text-white transition-colors", collapsed && "justify-center")} title={collapsed ? "View Site" : undefined}>
          <Cross className="h-4 w-4 shrink-0" />
          {!collapsed && <span>View Site</span>}
        </Link>
        <button onClick={handleLogout} className={cn("flex items-center gap-2 w-full rounded-xl px-3 py-2 text-xs text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors", collapsed && "justify-center")} title={collapsed ? "Logout" : undefined}>
          <LogOut className="h-4 w-4 shrink-0" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );

  const currentLabel = ALL_NAV.find((n) => n.id === view)?.label ?? "Dashboard";

  return (
    <div className="flex h-screen bg-cream overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className={cn("hidden lg:flex flex-col bg-navy transition-all duration-300 shrink-0", collapsed ? "w-14" : "w-56")}>
        <SidebarContent />
      </aside>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="w-56 bg-navy flex flex-col h-full shadow-2xl"><SidebarContent /></div>
          <div className="flex-1 bg-black/50" onClick={() => setMobileOpen(false)} />
        </div>
      )}

      {/* Main */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Topbar */}
        <header className="flex h-14 items-center justify-between border-b border-border bg-background px-4 shrink-0">
          <div className="flex items-center gap-3">
            <button onClick={() => setCollapsed((v) => !v)} className="hidden lg:grid h-9 w-9 place-items-center rounded-lg border border-border text-navy hover:bg-cream transition-colors">
              {collapsed ? <ChevronRight className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
            <button onClick={() => setMobileOpen((v) => !v)} className="lg:hidden grid h-9 w-9 place-items-center rounded-lg border border-border text-navy">
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold" />
              <h1 className="font-serif text-navy text-lg">{currentLabel}</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => navTo("notifications")} className="relative grid h-9 w-9 place-items-center rounded-lg border border-border text-navy hover:bg-cream transition-colors">
              <Bell className="h-4 w-4" />
              {pendingCount > 0 && <span className="absolute -top-1 -right-1 grid h-4 w-4 place-items-center rounded-full bg-red-500 text-[9px] text-white font-bold">{pendingCount}</span>}
            </button>
            <button onClick={() => navTo("profile")} className="grid h-8 w-8 place-items-center rounded-full bg-gradient-gold text-navy font-bold text-xs shadow-gold">AU</button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
