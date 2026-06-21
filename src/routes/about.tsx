import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import pastorSenior from "@/assets/pastor-senior.jpg";
import pastorYouth from "@/assets/pastor-youth.jpg";
import pastorWorship from "@/assets/pastor-worship.jpg";
import heroChurch from "@/assets/hero-church.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — WordnWorship Fellowship" },
      { name: "description", content: "Our mission, vision, history, and leadership team at WordnWorship Fellowship." },
      { property: "og:title", content: "About WordnWorship Fellowship" },
      { property: "og:description", content: "Our mission, vision, history, and leadership." },
      { property: "og:image", content: heroChurch },
    ],
  }),
  component: AboutPage,
});

const LEADERS = [
  { name: "Pastor David Whitfield", role: "Senior Pastor", img: pastorSenior, bio: "Shepherding WordnWorship since 2009, David is passionate about expository teaching and prayer." },
  { name: "Pastor Caleb Reyes", role: "Youth Pastor", img: pastorYouth, bio: "Caleb leads our students into a vibrant, Christ-centered faith for the next generation." },
  { name: "Hannah Brooks", role: "Worship Leader", img: pastorWorship, bio: "Hannah leads our musical worship with songs rooted in Scripture and the gospel." },
];

function AboutPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${heroChurch})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <SectionHeading eyebrow="Our Story" title="A church family rooted in Jesus" subtitle="For more than two decades we've gathered around the Word, broken bread together, and sought the face of God in our city." center light />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-2">
          {[
            { eyebrow: "Mission", title: "Make disciples of Jesus", body: "We exist to make disciples who love God, love people, and live sent — proclaiming and demonstrating the gospel in every sphere of life." },
            { eyebrow: "Vision", title: "A house of prayer & teaching", body: "We long to be a house of fervent prayer, sound teaching, joyful worship, and selfless service for the glory of Christ." },
          ].map((b) => (
            <article key={b.title} className="rounded-2xl border border-border p-10 bg-card">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold">{b.eyebrow}</span>
              <h3 className="mt-4 font-serif text-3xl text-navy">{b.title}</h3>
              <p className="mt-5 text-muted-foreground leading-relaxed">{b.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-[1fr_2fr] items-start">
          <SectionHeading eyebrow="Our History" title="From a living room to a city-wide fellowship" />
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>WordnWorship Fellowship began in 2001 with twelve people gathered in a living room, hungry for the Word and convinced that the gospel changes everything.</p>
            <p>Over the years God multiplied that small gathering into a vibrant family of believers serving across our city — through worship gatherings, Bible academies, outreach to the poor, and mission partnerships around the world.</p>
            <p>Today our heart is the same as it was at the beginning: to lift up Jesus, teach His Word faithfully, and love people well.</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Leadership" title="Meet our pastors & leaders" center />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {LEADERS.map((l) => (
              <article key={l.name} className="group">
                <div className="overflow-hidden rounded-2xl bg-muted aspect-[4/5]">
                  <img src={l.img} alt={l.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-navy">{l.name}</h3>
                <p className="text-xs tracking-[0.3em] uppercase text-gold mt-1">{l.role}</p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{l.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
