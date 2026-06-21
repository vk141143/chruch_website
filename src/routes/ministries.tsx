import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Baby, Users, HeartHandshake, Music, Globe2, BookOpen, HandHeart, Sparkles } from "lucide-react";

export const Route = createFileRoute("/ministries")({
  head: () => ({
    meta: [
      { title: "Ministries — Kingdom Life Fellowship" },
      { name: "description", content: "Discover ministries at Kingdom Life Fellowship — kids, youth, worship, outreach, prayer and more." },
      { property: "og:title", content: "Ministries at Kingdom Life" },
      { property: "og:description", content: "Find your place — kids, youth, worship, prayer, outreach and missions." },
    ],
  }),
  component: MinistriesPage,
});

const MINISTRIES = [
  { icon: Baby, name: "Kingdom Kids", text: "A safe, fun and Bible-rich environment for children from birth through 5th grade every Sunday." },
  { icon: Users, name: "Youth Fellowship", text: "Grades 6–12 gather weekly for worship, teaching, mentoring and friendship." },
  { icon: Music, name: "Worship Ministry", text: "Singers, musicians, and tech volunteers leading our church into the presence of God." },
  { icon: HeartHandshake, name: "Small Groups", text: "Mid-week communities for prayer, Bible study, and life together." },
  { icon: BookOpen, name: "Bible Academy", text: "In-depth teaching for those who want to grow deep in the Word." },
  { icon: HandHeart, name: "Prayer Ministry", text: "Intercessors, healing prayer teams, and our weekly prayer gathering." },
  { icon: Globe2, name: "Missions & Outreach", text: "Local outreach to our city and global partnerships sharing the gospel." },
  { icon: Sparkles, name: "Marriage & Family", text: "Workshops, mentoring, and resources for thriving Christ-centered homes." },
];

function MinistriesPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-navy text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading eyebrow="Find Your Place" title="Ministries for every season of life" subtitle="From the youngest child to the oldest saint — there is a place where your gifts can serve and your soul can grow." center light />
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
