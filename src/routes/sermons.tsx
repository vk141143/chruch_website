import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PlayCircle, Headphones, FileText, Search } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/sermons")({
  head: () => ({
    meta: [
      { title: "Sermons — Kingdom Life Fellowship" },
      { name: "description", content: "Watch and listen to recent sermons from Kingdom Life Fellowship. Filter by topic, speaker, and Scripture." },
      { property: "og:title", content: "Sermons" },
      { property: "og:description", content: "Watch and listen to recent sermons from Kingdom Life Fellowship." },
    ],
  }),
  component: SermonsPage,
});

const SERMONS = [
  { title: "The Kingdom Among Us", speaker: "Pastor David Whitfield", date: "Jun 16, 2026", scripture: "Luke 17:20–21", topic: "Kingdom of God" },
  { title: "Carried By Grace", speaker: "Pastor David Whitfield", date: "Jun 9, 2026", scripture: "Ephesians 2:1–10", topic: "Grace" },
  { title: "Faith That Moves", speaker: "Pastor Caleb Reyes", date: "Jun 2, 2026", scripture: "Hebrews 11:1–6", topic: "Faith" },
  { title: "A House Of Prayer", speaker: "Pastor David Whitfield", date: "May 26, 2026", scripture: "Isaiah 56:6–8", topic: "Prayer" },
  { title: "The Good Shepherd", speaker: "Pastor David Whitfield", date: "May 19, 2026", scripture: "John 10:1–18", topic: "Jesus" },
  { title: "Living Sent", speaker: "Pastor Caleb Reyes", date: "May 12, 2026", scripture: "Matthew 28:16–20", topic: "Mission" },
];

function SermonsPage() {
  const [q, setQ] = useState("");
  const filtered = SERMONS.filter((s) =>
    [s.title, s.speaker, s.scripture, s.topic].join(" ").toLowerCase().includes(q.toLowerCase())
  );
  return (
    <>
      <section className="pt-40 pb-16 bg-navy text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <SectionHeading eyebrow="Sermons" title="Recent teaching from the Word" subtitle="Watch, listen, and study with us. Filter by speaker, topic, or Scripture." center light />
          <div className="mt-10 relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by title, speaker, or Scripture..."
              className="w-full rounded-full bg-white/10 border border-white/20 pl-11 pr-5 py-3.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-gold"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <article key={s.title} className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-elegant transition-all">
              <div className="relative aspect-video bg-navy">
                <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/80 to-gold/30" />
                <div className="absolute inset-0 grid place-items-center">
                  <PlayCircle className="h-14 w-14 text-white/90 group-hover:scale-110 transition-transform" strokeWidth={1.2} />
                </div>
                <span className="absolute bottom-3 left-3 rounded-full bg-black/50 backdrop-blur text-white text-[10px] tracking-widest uppercase px-3 py-1">{s.topic}</span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-navy leading-snug">{s.title}</h3>
                <p className="mt-2 text-xs tracking-widest uppercase text-gold">{s.speaker}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.date} · {s.scripture}</p>
                <div className="mt-5 flex gap-3 text-xs font-semibold">
                  <button className="inline-flex items-center gap-1.5 text-navy hover:text-gold"><PlayCircle className="h-4 w-4" /> Watch</button>
                  <button className="inline-flex items-center gap-1.5 text-navy hover:text-gold"><Headphones className="h-4 w-4" /> Listen</button>
                  <button className="inline-flex items-center gap-1.5 text-navy hover:text-gold"><FileText className="h-4 w-4" /> Notes</button>
                </div>
              </div>
            </article>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground py-12">No sermons match your search.</p>
          )}
        </div>
      </section>
    </>
  );
}
