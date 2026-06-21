import { useState } from "react";
import { Bell, BookOpen, Calendar, Mic2, HeartHandshake, Award, CreditCard, CheckCheck } from "lucide-react";
import { MOCK_NOTIFICATIONS } from "@/lib/mockData";

const TYPE_ICON: Record<string, React.ElementType> = {
  course: BookOpen,
  event: Calendar,
  sermon: Mic2,
  prayer: HeartHandshake,
  certificate: Award,
  subscription: CreditCard,
};

const TYPE_COLOR: Record<string, string> = {
  course: "bg-blue-100 text-blue-600",
  event: "bg-purple-100 text-purple-600",
  sermon: "bg-orange-100 text-orange-600",
  prayer: "bg-green-100 text-green-600",
  certificate: "bg-gold/20 text-gold",
  subscription: "bg-pink-100 text-pink-600",
};

export function NotificationsPage() {
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);

  function markRead(id: string) {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  }

  function markAllRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }

  const unread = notifications.filter((n) => !n.read).length;

  return (
    <div className="p-4 md:p-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h2 className="font-serif text-2xl text-navy">Notifications</h2>
          {unread > 0 && (
            <span className="rounded-full bg-red-500 px-2.5 py-1 text-xs font-bold text-white">
              {unread} new
            </span>
          )}
        </div>
        {unread > 0 && (
          <button
            onClick={markAllRead}
            className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground hover:text-navy transition-colors"
          >
            <CheckCheck className="h-4 w-4" /> Mark all read
          </button>
        )}
      </div>

      {notifications.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Bell className="h-12 w-12 text-muted-foreground/40 mb-3" />
          <p className="font-serif text-xl text-navy">All caught up!</p>
          <p className="text-sm text-muted-foreground mt-1">
            No notifications right now.
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {notifications.map((n) => {
            const Icon = TYPE_ICON[n.type] ?? Bell;
            const colorClass = TYPE_COLOR[n.type] ?? "bg-muted text-muted-foreground";
            return (
              <div
                key={n.id}
                onClick={() => markRead(n.id)}
                className={`flex items-start gap-4 rounded-2xl border p-4 cursor-pointer transition-all hover:shadow-sm ${
                  !n.read
                    ? "border-gold/30 bg-gold/5"
                    : "border-border bg-background"
                }`}
              >
                <div
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${colorClass}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className={`text-sm font-semibold ${!n.read ? "text-navy" : "text-foreground"}`}>
                      {n.title}
                    </p>
                    {!n.read && (
                      <span className="h-2 w-2 shrink-0 rounded-full bg-gold" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    {n.message}
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-1">
                    {n.createdAt}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
