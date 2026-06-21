import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Kingdom Life Fellowship" },
      { name: "description", content: "Upcoming events at Kingdom Life Fellowship: worship gatherings, prayer nights, youth fellowship, conferences, and outreach." },
      { property: "og:title", content: "Events at Kingdom Life" },
      { property: "og:description", content: "Worship, prayer, youth, conferences, and outreach events." },
    ],
  }),
  component: EventsPage,
});

const EVENTS = [
  { date: "Jun 22", title: "Sunday Worship", time: "9:00 & 11:00 AM", where: "Main Auditorium", tag: "Weekly" },
  { date: "Jun 24", title: "Mid-Week Prayer", time: "7:00 PM", where: "Prayer Chapel", tag: "Weekly" },
  { date: "Jun 27", title: "Youth Fellowship Night", time: "6:30 PM", where: "Youth Hall", tag: "Youth" },
  { date: "Jul 05", title: "Community Outreach", time: "10:00 AM", where: "Riverside Park", tag: "Outreach" },
  { date: "Jul 12", title: "Marriage & Family Workshop", time: "4:00 PM", where: "Fellowship Hall", tag: "Workshop" },
  { date: "Aug 02", title: "Summer Faith Conference", time: "All Day", where: "Main Auditorium", tag: "Conference" },
];

function EventsPage() {
  return (
    <>
      <section className="pt-40 pb-16 bg-navy text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading eyebrow="Events" title="What's happening at Kingdom Life" subtitle="Weekly gatherings, prayer nights, youth programs, conferences and outreach. Register and join us." center light />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 space-y-5">
          {EVENTS.map((e) => (
            <article key={e.title} className="group rounded-2xl border border-border bg-card p-6 md:p-8 grid md:grid-cols-[140px_1fr_auto] gap-6 items-center hover:border-gold transition-colors">
              <div className="rounded-xl bg-cream p-5 text-center">
                <p className="font-serif text-3xl text-navy leading-none">{e.date.split(" ")[1]}</p>
                <p className="mt-1 text-xs tracking-widest uppercase text-gold">{e.date.split(" ")[0]}</p>
              </div>
              <div>
                <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-gold">{e.tag}</span>
                <h3 className="mt-1.5 font-serif text-2xl text-navy">{e.title}</h3>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4 text-gold" /> {e.time}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-gold" /> {e.where}</span>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full bg-navy text-white px-5 py-3 text-sm font-semibold hover:bg-gold hover:text-navy transition-colors">
                Register <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
