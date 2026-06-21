import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BookOpen, Video, GraduationCap, Award, PlayCircle, FileText, Lock } from "lucide-react";

export const Route = createFileRoute("/bible-academy")({
  head: () => ({
    meta: [
      { title: "Bible Academy — WordnWorship Fellowship" },
      { name: "description", content: "Free devotions and articles plus premium video courses on the Bible, theology, leadership and discipleship." },
      { property: "og:title", content: "WordnWorship Bible Academy" },
      { property: "og:description", content: "Learn the Word of God through devotions, courses, and video teachings." },
    ],
  }),
  component: AcademyPage,
});

const FREE = [
  { icon: BookOpen, title: "Daily Devotions", text: "A short Scripture and reflection to start each day." },
  { icon: FileText, title: "Blog Articles", text: "Pastoral writing on faith, doubt, and discipleship." },
  { icon: PlayCircle, title: "Worship Resources", text: "Chord charts and worship sets from our team." },
];

const COURSES = [
  { category: "Old Testament", items: ["Genesis", "Exodus", "Psalms", "Proverbs", "Isaiah"] },
  { category: "New Testament", items: ["Matthew", "Mark", "Luke", "John", "Acts", "Romans", "Revelation"] },
  { category: "Christian Living", items: ["Prayer", "Faith", "Evangelism", "Discipleship", "Leadership"] },
  { category: "Ministry Training", items: ["Preaching", "Worship Ministry", "Church Leadership", "Missions"] },
];

function AcademyPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-navy text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading eyebrow="Bible Academy" title="Grow deep in the Word of God" subtitle="Free devotions and articles for everyone. Premium video courses, training, and certificates for subscribers." center light />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Free For Everyone" title="Begin here" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {FREE.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-border p-8 bg-card">
                <Icon className="h-8 w-8 text-gold" />
                <h3 className="mt-5 font-serif text-2xl text-navy">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3 justify-center">
            <Lock className="h-4 w-4 text-gold" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold">Premium Subscription</span>
          </div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-navy text-center">A full library of Bible courses</h2>
          <p className="mt-5 text-muted-foreground text-center max-w-2xl mx-auto">Video teachings, lesson notes, downloadable resources, progress tracking, and completion certificates.</p>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {COURSES.map((c) => (
              <article key={c.category} className="rounded-2xl bg-background border border-border p-8">
                <h3 className="font-serif text-2xl text-navy">{c.category}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {c.items.map((i) => (
                    <li key={i} className="rounded-full bg-cream px-4 py-1.5 text-xs font-medium text-navy border border-border">{i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              { icon: Video, label: "Video Library" },
              { icon: PlayCircle, label: "Watch Progress" },
              { icon: FileText, label: "Notes & Resources" },
              { icon: BookOpen, label: "Bookmarks" },
              { icon: GraduationCap, label: "Downloadable PDFs" },
              { icon: Award, label: "Certificates" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-xl bg-background border border-border px-4 py-3">
                <Icon className="h-5 w-5 text-gold" />
                <span className="text-sm font-medium text-navy">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/contact" className="inline-flex rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-navy shadow-gold hover:scale-[1.03] transition-transform">
              Join The Waitlist
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
