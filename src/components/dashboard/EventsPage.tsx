import { useState } from "react";
import { Calendar, MapPin, Clock, Users, List, CheckCircle } from "lucide-react";
import { MOCK_EVENTS } from "@/lib/mockData";

const TYPE_COLORS: Record<string, string> = {
  Worship: "bg-blue-100 text-blue-700",
  Conference: "bg-purple-100 text-purple-700",
  "Bible Study": "bg-green-100 text-green-700",
  Youth: "bg-orange-100 text-orange-700",
  Prayer: "bg-yellow-100 text-yellow-700",
  Seminar: "bg-pink-100 text-pink-700",
};

export function EventsPage() {
  const [viewMode, setViewMode] = useState<"list" | "calendar">("list");
  const [registrations, setRegistrations] = useState<Set<string>>(
    new Set(MOCK_EVENTS.filter((e) => e.status === "registered").map((e) => e.id))
  );

  function toggleRegister(id: string) {
    setRegistrations((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <div className="p-4 md:p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-serif text-2xl text-navy">Church Events</h2>
          <p className="text-sm text-muted-foreground mt-0.5">{MOCK_EVENTS.length} upcoming events</p>
        </div>
        <div className="flex rounded-xl border border-border overflow-hidden">
          <button
            onClick={() => setViewMode("list")}
            className={`flex items-center gap-2 px-3 py-2 text-sm transition-colors ${viewMode === "list" ? "bg-navy text-white" : "bg-background text-muted-foreground hover:text-navy"}`}
          >
            <List className="h-4 w-4" /> List
          </button>
          <button
            onClick={() => setViewMode("calendar")}
            className={`flex items-center gap-2 px-3 py-2 text-sm transition-colors ${viewMode === "calendar" ? "bg-navy text-white" : "bg-background text-muted-foreground hover:text-navy"}`}
          >
            <Calendar className="h-4 w-4" /> Calendar
          </button>
        </div>
      </div>

      {viewMode === "list" ? (
        <div className="space-y-4">
          {MOCK_EVENTS.map((event) => {
            const isReg = registrations.has(event.id);
            return (
              <div key={event.id} className="rounded-2xl bg-background border border-border p-5 flex flex-col sm:flex-row gap-4">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-gold text-3xl shadow-gold mx-auto sm:mx-0">
                  {event.image}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-serif text-lg text-navy">{event.title}</h3>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${TYPE_COLORS[event.type] ?? "bg-muted text-muted-foreground"}`}>
                      {event.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{event.date} · {event.time}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{event.location}</span>
                    <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5" />{event.attendees} attending</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <button
                      onClick={() => toggleRegister(event.id)}
                      className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        isReg
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : "bg-navy text-white hover:bg-navy/90"
                      }`}
                    >
                      {isReg ? <><CheckCircle className="h-4 w-4" /> Registered</> : "Register Now"}
                    </button>
                    {isReg && (
                      <button className="rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:text-navy transition-colors">
                        Add to Calendar
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <CalendarView events={MOCK_EVENTS} registrations={registrations} onRegister={toggleRegister} />
      )}
    </div>
  );
}

function CalendarView({ events, registrations, onRegister }: { events: typeof MOCK_EVENTS; registrations: Set<string>; onRegister: (id: string) => void }) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-background border border-border p-4">
        <h3 className="font-serif text-lg text-navy text-center mb-4">{months[month]} {year}</h3>
        <div className="grid grid-cols-7 gap-1">
          {days.map((d) => (
            <div key={d} className="text-center text-xs font-semibold text-muted-foreground py-2">{d}</div>
          ))}
          {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const isToday = day === today.getDate();
            const hasEvent = events.some((e) => e.date.startsWith(`${months[month]} ${day},`));
            return (
              <div key={day} className={`relative h-9 flex items-center justify-center rounded-lg text-sm cursor-pointer transition-colors ${
                isToday ? "bg-gradient-gold text-navy font-bold shadow-gold" : "hover:bg-cream text-foreground"
              }`}>
                {day}
                {hasEvent && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-gold" />}
              </div>
            );
          })}
        </div>
      </div>
      <div className="space-y-3">
        {events.slice(0, 4).map((event) => (
          <div key={event.id} className="flex items-center gap-4 rounded-2xl bg-background border border-border p-4">
            <div className="text-2xl">{event.image}</div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-navy text-sm">{event.title}</p>
              <p className="text-xs text-muted-foreground">{event.date} · {event.time}</p>
            </div>
            <button
              onClick={() => onRegister(event.id)}
              className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                registrations.has(event.id) ? "bg-green-100 text-green-700" : "bg-navy text-white"
              }`}
            >
              {registrations.has(event.id) ? "Registered" : "Register"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
