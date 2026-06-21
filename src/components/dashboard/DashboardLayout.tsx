import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  LayoutDashboard, BookOpen, GraduationCap, Mic2, Sun, Calendar, HeartHandshake,
  Users, Bookmark, Award, Bell, UserCircle, Settings, CreditCard, LogOut,
  Menu, X, Cross, ChevronRight,
} from "lucide-react";
import { logout, type AuthUser } from "@/lib/auth";
import { cn } from "@/lib/utils";

export type DashView =
  | "home" | "my-learning" | "video-learning" | "bible-academy"
  | "sermons" | "devotion" | "events" | "prayer" | "community"
  | "saved" | "certificates" | "notifications" | "profile"
  | "settings" | "subscription";

const NAV_ITEMS: { id: DashView; label: string; icon: React.ElementType }[] = [
  { id: "home", label: "Dashboard", icon: LayoutDashboard },
  { id: "my-learning", label: "My Learning", icon: BookOpen },
  { id: "bible-academy", label: "Bible Academy", icon: GraduationCap },
  { id: "sermons", label: "Sermons", icon: Mic2 },
  { id: "devotion", label: "Daily Devotion", icon: Sun },
  { id: "events", label: "Events", icon: Calendar },
  { id: "prayer", label: "Prayer Requests", icon: HeartHandshake },
  { id: "community", label: "Community", icon: Users },
  { id: "saved", label: "Saved Content", icon: Bookmark },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "profile", label: "Profile", icon: UserCircle },
  { id: "settings", label: "Settings", icon: Settings },
  { id: "subscription", label: "Subscription", icon: CreditCard },
];

interface Props {
  user: AuthUser;
  view: DashView;
  onViewChange: (v: DashView) => void;
  children: React.ReactNode;
  unreadCount?: number;
}

export function DashboardLayout({ user, view, onViewChange, children, unreadCount = 0 }: Props) {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const initials = user.name.split(" ").map((n) => n[0]).join("").toUpperCase();

  function handleLogout() {
    logout();
    navigate({ to: "/" });
  }

  function navTo(id: DashView) {
    onViewChange(id);
    setMobileOpen(false);
  }

  const SidebarInner = () => (
    <div className="flex h-full flex-col">
      <div className={cn("flex items-center gap-3 px-4 py-5 border-b border-white/10", collapsed && "px-3 justify-center")}>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-gold shadow-gold">
          <Cross className="h-4 w-4 text-navy" strokeWidth={2.5} />
        </span>
        {!collapsed && (
          <div>
            <p className="font-serif text-white text-base leading-tight">Kingdom Life</p>
            <p className="text-[9px] tracking-[0.3em] text-gold uppercase">Fellowship</p>
          </div>
        )}
      </div>
      <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-0.5">
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => navTo(id)}
            className={cn(
              "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all",
              view === id
                ? "bg-gradient-gold text-navy font-semibold shadow-gold"
                : "text-white/75 hover:bg-white/10 hover:text-white",
              collapsed && "justify-center px-2"
            )}
            title={collapsed ? label : undefined}
          >
            <Icon className="h-4 w-4 shrink-0" />
            {!collapsed && (
              <>
                <span className="flex-1 text-left">{label}</span>
                {id === "notifications" && unreadCount > 0 && (
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-red-500 text-[10px] text-white font-bold">
                    {unreadCount}
                  </span>
                )}
              </>
            )}
          </button>
        ))}
      </nav>
      <div className={cn("border-t border-white/10 p-3 space-y-1", collapsed && "flex flex-col items-center")}>
        {!collapsed && (
          <div className="flex items-center gap-3 px-2 py-2">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-gold text-navy font-bold text-xs">
              {initials}
            </span>
            <div className="min-w-0">
              <p className="text-white text-sm font-medium truncate">{user.name}</p>
              <p className="text-white/40 text-xs truncate">{user.email}</p>
            </div>
          </div>
        )}
        <Link
          to="/"
          className={cn(
            "flex items-center gap-2 w-full rounded-xl px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors",
            collapsed && "justify-center"
          )}
          title={collapsed ? "Home" : undefined}
        >
          <Cross className="h-4 w-4 shrink-0" />
          {!collapsed && <span>Back to Site</span>}
        </Link>
        <button
          onClick={handleLogout}
          className={cn(
            "flex items-center gap-2 w-full rounded-xl px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors",
            collapsed && "justify-center"
          )}
          title={collapsed ? "Logout" : undefined}
        >
          <LogOut className="h-4 w-4 shrink-0" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-cream overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className={cn("hidden lg:flex flex-col bg-navy transition-all duration-300 shrink-0", collapsed ? "w-16" : "w-60")}>
        <SidebarInner />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="w-60 bg-navy flex flex-col h-full shadow-2xl">
            <SidebarInner />
          </div>
          <div className="flex-1 bg-black/50" onClick={() => setMobileOpen(false)} />
        </div>
      )}

      {/* Main */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-14 items-center justify-between border-b border-border bg-background px-4 shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCollapsed((v) => !v)}
              className="hidden lg:grid h-9 w-9 place-items-center rounded-lg border border-border text-navy hover:bg-cream transition-colors"
            >
              {collapsed ? <ChevronRight className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden grid h-9 w-9 place-items-center rounded-lg border border-border text-navy"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
            <h1 className="font-serif text-navy text-lg">
              {NAV_ITEMS.find((n) => n.id === view)?.label ?? "Dashboard"}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => navTo("notifications")}
              className="relative grid h-9 w-9 place-items-center rounded-lg border border-border text-navy hover:bg-cream transition-colors"
            >
              <Bell className="h-4 w-4" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 grid h-4 w-4 place-items-center rounded-full bg-red-500 text-[9px] text-white font-bold">
                  {unreadCount}
                </span>
              )}
            </button>
            <button
              onClick={() => navTo("profile")}
              className="grid h-8 w-8 place-items-center rounded-full bg-gradient-gold text-navy font-bold text-xs shadow-gold"
            >
              {initials}
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
