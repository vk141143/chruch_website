import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Baby, Users, HeartHandshake, Music, Globe2, BookOpen, HandHeart, Sparkles } from "lucide-react";

export const Route = createFileRoute("/ministries")({
  head: () => ({
    meta: [
      { title: "Parishes & Missions — ECSGS" },
      { name: "description", content: "Discover the parishes, missions, and ministries of the Ecumenical Catholic Servants of the Good Shepherd." },
      { property: "og:title", content: "Parishes & Missions — ECSGS" },
      { property: "og:description", content: "Parishes, missions, and ministries of ECSGS." },
    ],
  }),
  component: MinistriesPage,
});

const MINISTRIES = [
  { icon: Baby, name: "House of Ruth and Junia", text: "Our specialized ministry community bridging Belgian and American catholic traditions, established in 2022 from the merger of St. Junia’s House (Anaheim, 2006) and House of Ruth (Belgium, 2012)." },
  { icon: Users, name: "Diaconal Formation", text: "Formation pathway for candidates for ordination as permanent deacons in ECSGS or affiliated sister communities, through the St. Cyprian School of Theology." },
  { icon: Music, name: "Liturgical Worship", text: "Ecumenical, inclusive, and sacramental worship — all are welcome at the table regardless of gender, background, or walk of life." },
  { icon: HeartHandshake, name: "Small Communities", text: "Intimate faith communities and fellowship groups nurturing prayer, study, and life together in the spirit of the Good Shepherd." },
  { icon: BookOpen, name: "St. Cyprian School of Theology", text: "Theological education open to diaconal candidates and lay auditors. Five courses launched to date, offered hybrid in-person and by Zoom." },
  { icon: HandHeart, name: "Prayer & Intercessory Ministry", text: "A community committed to prayer, healing ministry, and intercession — rooted in the tradition of independent catholic spirituality." },
  { icon: Globe2, name: "Ecumenical Partnerships", text: "Relationships with sister communities and ecumenical partners nationally and internationally, sharing mission and catholic life across traditions." },
  { icon: Sparkles, name: "Inclusive Catholic Life", text: "Welcoming all — inspired by Junia, the female apostle (Romans 16:7), and Ruth, the immigrant foremother of Jesus, as models of radical belonging." },
];

function MinistriesPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-navy text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading eyebrow="Our Communities" title="Parishes, missions & ministries" subtitle="From the House of Ruth and Junia to our diaconal formation program — every ministry of ECSGS is rooted in service to the Good Shepherd." center light />
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {MINISTRIES.map(({ icon: Icon, name, text }) => (
            <article key={name} className="rounded-2xl border border-border bg-card p-8 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-gold shadow-gold">
                <Icon className="h-6 w-6 text-navy" />
              </span>
              <h3 className="mt-6 font-serif text-2xl text-navy">{name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
