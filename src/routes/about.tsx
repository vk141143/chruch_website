import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import pastorSenior from "@/assets/pastor-senior.jpg";
import pastorYouth from "@/assets/pastor-youth.jpg";
import pastorWorship from "@/assets/pastor-worship.jpg";
import heroChurch from "@/assets/hero-church.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ecumenical Catholic Servants of the Good Shepherd" },
      { name: "description", content: "Our mission, vision, history, and leadership of ECSGS and the Saint Cyprian School of Theology." },
      { property: "og:title", content: "About ECSGS" },
      { property: "og:description", content: "Our mission, vision, history, and leadership." },
      { property: "og:image", content: heroChurch },
    ],
  }),
  component: AboutPage,
});

const LEADERS = [
  {
    name: "Most Rev. Arturo Querijero Ferreras",
    role: "Bishop — Episcopal Oversight",
    img: pastorSenior,
    bio: "Most Reverend Arturo Querijero Ferreras provides Episcopal Oversight for the Ecumenical Catholic Servants of the Good Shepherd (ECSGS) and all affiliated communities, including House of Ruth and Junia.",
  },
  {
    name: "Rev. Mo. Martha",
    role: "Dean, St. Cyprian School of Theology",
    img: pastorWorship,
    bio: "Rev. Mo. Martha has been a priest since 2006 and is the developer and author of all St. Cyprian courses. She holds a PhD in Clinical Psychology, with two post-doctoral training programs in forensic psychology and certification in neuropsychology. Hers was a later-life calling to the priesthood — she acquired her expertise through years of research, self-study, and educational opportunities. She continues her \"day job\" as a forensic neuropsychologist in the court systems of southern California.",
  },
  {
    name: "Rev. Mo. Jetty",
    role: "Founder, House of Ruth (Belgium)",
    img: pastorYouth,
    bio: "Rev. Mo. Jetty established the House of Ruth in Belgium in 2012, forming our Belgian sister community. In 2022, St. Junia's House joined with House of Ruth to become House of Ruth and Junia.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${heroChurch})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <SectionHeading
            eyebrow="Our Story"
            title="Ecumenical Catholic Servants of the Good Shepherd"
            subtitle="An inclusive, ecumenical catholic community under the Episcopal Oversight of Most Reverend Arturo Querijero Ferreras — rooted in Scripture, sacrament, and service."
            center
            light
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-2">
          {[
            {
              eyebrow: "Mission",
              title: "Servants of the Good Shepherd",
              body: "We are called to serve as good shepherds in our communities — providing theological formation for ordained ministry, welcoming all to the table, and living out the gospel through inclusive, ecumenical catholic practice.",
            },
            {
              eyebrow: "Vision",
              title: "Formation, Inclusion & Service",
              body: "We envision a church where all people — regardless of gender, background, or station — are formed in faith, equipped for ministry, and sent to serve. Through the St. Cyprian School of Theology, we invest in the next generation of deacons and lay leaders.",
            },
          ].map((b) => (
            <article key={b.title} className="rounded-2xl border border-border p-10 bg-card">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold">{b.eyebrow}</span>
              <h3 className="mt-4 font-serif text-3xl text-navy">{b.title}</h3>
              <p className="mt-5 text-muted-foreground leading-relaxed">{b.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* History */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-[1fr_2fr] items-start">
          <SectionHeading eyebrow="Our History" title="From a living room to an ecumenical fellowship" />
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>In 2006, Rev. Mo. Martha was ordained to the priesthood and established <strong>St. Junia's House in Anaheim</strong>, California — a small but committed community rooted in inclusive catholic practice.</p>
            <p>In 2012, our Belgian sister community, the <strong>House of Ruth</strong>, was established by Rev. Mo. Jetty, forming an international bond of shared mission and catholic life.</p>
            <p>In 2022, St. Junia's House and House of Ruth formally united to become <strong>House of Ruth and Junia</strong> — a specialized ministry now operating under the Episcopal Oversight of Bishop Arturo and ECSGS.</p>
            <p>If you are not familiar with these two biblical characters: <strong>Junia</strong> is the only named female apostle in the New Testament — see Romans 16:7. <strong>Ruth's</strong> story is found in the Hebrew Bible in the Book of Ruth — how she, an outsider, "immigrated" into a Hebrew family and became a foremother of Jesus — a powerful symbol of radical welcome and belonging.</p>
            <p>The <strong>St. Cyprian School of Theology</strong> was subsequently established to provide formal theological formation for diaconal candidates and committed lay leaders within ECSGS and affiliated sister communities.</p>
          </div>
        </div>
      </section>

      {/* What We Are */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Community Life" title="House of Ruth and Junia" center />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "In-Person & Zoom",
                text: "About half our participants gather in person at House of Ruth and Junia, while the other half join by Zoom. Using a large screen, we gather in a circle — present and online — for rich, life-giving discussion.",
              },
              {
                title: "Shared Table",
                text: "Before each theology class, we share a dinner together at House of Ruth and Junia. This communal meal grounds our learning in real relationship and the spirit of hospitality.",
              },
              {
                title: "Open to All",
                text: "Committed lay leaders and local parishioners may audit, attend, and participate in many of our course offerings without cost. Weekly handouts are available to all attendees, in-person and online.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-card p-8">
                <span className="gold-divider block mb-4" />
                <h3 className="font-serif text-2xl text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Leadership" title="Our bishops, priests & leaders" center />
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
