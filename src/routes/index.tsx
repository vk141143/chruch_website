import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, BookOpen, Heart, Users, Calendar, ArrowRight, Quote, UserCircle, UserPlus } from "lucide-react";
import heroCross from "@/assets/hero-cross.jpg";
import heroBible from "@/assets/hero-bible.jpg";
import heroPurpose from "@/assets/hero-purpose.jpg";
import heroChurch from "@/assets/hero-church.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ecumenical Catholic Servants of the Good Shepherd — ECSGS" },
      { name: "description", content: "Ecumenical Catholic Servants of the Good Shepherd — an inclusive catholic community under the Episcopal Oversight of Most Reverend Arturo Querijero Ferreras." },
      { property: "og:title", content: "ECSGS — Ecumenical Catholic Servants of the Good Shepherd" },
      { property: "og:description", content: "An inclusive, ecumenical catholic community rooted in service, Scripture, and sacrament." },
      { property: "og:image", content: heroCross },
    ],
  }),
  component: Home,
});

const SLIDES = [
  {
    image: heroCross,
    eyebrow: "Welcome Home",
    title: "Servants of the Good Shepherd",
    verse: "I am the good shepherd. The good shepherd lays down his life for the sheep.",
    ref: "John 10:11",
    cta: { label: "Join Our Community", to: "/community" },
  },
  {
    image: heroBible,
    eyebrow: "St. Cyprian School of Theology",
    title: "Formation for Ministry",
    verse: "Your word is a lamp to my feet and a light to my path.",
    ref: "Psalm 119:105",
    cta: { label: "Explore Theology Courses", to: "/bible-academy" },
  },
  {
    image: heroPurpose,
    eyebrow: "Inclusive & Ecumenical",
    title: "A Church for All People",
    verse: "There is neither Jew nor Greek, slave nor free, male nor female — all are one in Christ.",
    ref: "Galatians 3:28",
    cta: { label: "Our Story", to: "/about" },
  },
  {
    image: heroChurch,
    eyebrow: "House of Ruth and Junia",
    title: "Rooted in Scripture & Service",
    verse: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness.",
    ref: "2 Timothy 3:16",
    cta: { label: "Diaconal Program", to: "/bible-academy" },
  },
] as const;

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);
  const next = () => setI((p) => (p + 1) % SLIDES.length);
  const prev = () => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden">
      {SLIDES.map((s, idx) => (
        <div
          key={s.title}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ${
            idx === i ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            className={`absolute inset-0 h-full w-full object-cover ${idx === i ? "animate-slow-zoom" : ""}`}
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl w-full px-6">
          <div key={i} className="max-w-3xl animate-fade-up">
            <div className="flex items-center gap-3">
              <span className="gold-divider" />
              <span className="text-xs font-semibold tracking-[0.35em] uppercase text-gold">
                {SLIDES[i].eyebrow}
              </span>
            </div>
            <h1 className="mt-5 font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-white">
              {SLIDES[i].title}
            </h1>
            <blockquote className="mt-7 max-w-xl text-lg md:text-xl text-white/85 font-serif italic">
              "{SLIDES[i].verse}"
              <footer className="mt-2 text-sm tracking-widest uppercase not-italic font-sans text-gold">
                — {SLIDES[i].ref}
              </footer>
            </blockquote>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to={SLIDES[i].cta.to}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-navy shadow-gold transition-transform hover:scale-[1.03]"
              >
                {SLIDES[i].cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/sermons"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Watch Latest Sermon
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center gap-2 rounded-full border border-gold/70 px-7 py-4 text-sm font-semibold text-gold hover:bg-gold/10 transition-colors"
              >
                <UserCircle className="h-4 w-4" /> Login / Register
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* controls */}
      <div className="absolute bottom-10 left-0 right-0 z-10 flex items-center justify-between px-6 md:px-12">
        <div className="flex gap-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1 transition-all rounded-full ${
                idx === i ? "w-12 bg-gold" : "w-6 bg-white/40"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
        <div className="hidden md:flex gap-2">
          <button onClick={prev} className="grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white hover:bg-white/10" aria-label="Previous">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={next} className="grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white hover:bg-white/10" aria-label="Next">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  { icon: BookOpen, title: "Theological Formation", text: "The St. Cyprian School of Theology provides educational formation for diaconal candidates and committed lay leaders in ECSGS and affiliated communities." },
  { icon: Heart, title: "Inclusive Catholicism", text: "An ecumenical and inclusive catholic community where all are welcomed — regardless of gender, background, or walk of life." },
  { icon: Users, title: "Community in Christ", text: "House of Ruth and Junia: a specialized ministry blending Belgian and American roots, serving together under episcopal oversight." },
  { icon: Calendar, title: "Service & Mission", text: "Living out the call to serve as good shepherds — in our local neighborhoods and through mission partnerships." },
];

function Pillars() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Why ECSGS"
            title="A people called to serve and learn"
            subtitle="Four convictions shape everything we do as an ecumenical catholic community."
            center
          />
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 120}>
              <article className="group rounded-2xl bg-background p-8 shadow-sm border border-border hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 h-full">
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-gold shadow-gold">
                  <Icon className="h-6 w-6 text-navy" />
                </span>
                <h3 className="mt-6 font-serif text-2xl text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function VerseOfTheDay() {
  return (
    <section className="relative bg-navy py-28 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBible})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/60" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <Quote className="mx-auto h-10 w-10 text-gold" />
          <p className="mt-8 font-serif text-3xl md:text-5xl leading-snug text-white">
            "There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus."
          </p>
          <p className="mt-8 text-sm tracking-[0.35em] uppercase text-gold">— Galatians 3:28 · Our Guiding Scripture</p>
        </Reveal>
      </div>
    </section>
  );
}

const SERVICES = [
  { day: "Weekly", time: "In-Person & Zoom", title: "Eucharistic Worship", desc: "Our weekly liturgical gathering around Word, Table, and community. All are welcome at the table regardless of gender, background, or walk of life." },
  { day: "Ongoing", time: "Zoom & In-Person", title: "St. Cyprian Theology Courses", desc: "Theology formation courses open to diaconal candidates and lay auditors — shared dinner precedes each class at House of Ruth and Junia." },
  { day: "Open", time: "By Arrangement", title: "House of Ruth and Junia", desc: "A specialized ministry community bridging Belgian and American catholic traditions, under the oversight of Bishop Arturo." },
];

function ServicesGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-end">
          <SectionHeading
            eyebrow="Our Community"
            title="How we gather"
            subtitle="In-person, by Zoom, around a shared table — there is a place for you in this community."
          />
          <Link to="/events" className="hidden lg:inline-flex justify-self-end items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors">
            See full calendar <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 150}>
              <article className="relative rounded-2xl border border-border bg-card p-8 hover:border-gold transition-colors h-full">
                <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">{s.day}</span>
                <h3 className="mt-3 font-serif text-2xl text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <p className="mt-6 font-serif text-lg text-navy">{s.time}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeanHighlight() {
  return (
    <section className="py-24 bg-cream">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="rounded-3xl bg-navy text-white p-10 md:p-14 shadow-elegant">
            <span className="text-xs font-semibold tracking-[0.35em] uppercase text-gold">A Word from the Dean…</span>
            <div className="mt-6 space-y-5 font-serif italic text-lg md:text-xl leading-relaxed text-white/90">
              <p>"We are excited to participate in this new educational formation adventure! For the past year and a half, we have launched and taught five courses. Our St. Cyprian students have attended as have other members in the Saint Matthew community."</p>
              <p>"About half of our participants come to the class 'live' — we share a dinner at House of Ruth and Junia prior to class — and the other half join us by Zoom. With a big screen, we are able to gather in a circle with both the attendees physically present and those coming in by Zoom. And we have some very interesting discussions that bring our studies to life!"</p>
              <p>"St. Cyprian students have assignments but others just enjoy the experience. Weekly course handouts are available to all, those who come and those online. All classes are videotaped in order to be available to subsequent students."</p>
            </div>
            <div className="mt-8 flex items-center gap-4 border-t border-white/15 pt-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-gold shadow-gold text-navy font-bold text-lg font-serif">M</span>
              <div>
                <p className="font-semibold not-italic">Rev. Mo. Martha</p>
                <p className="text-xs text-gold tracking-widest uppercase mt-0.5 not-italic">Dean · Saint Cyprian School of Theology · PhD Clinical Psychology</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="rounded-3xl bg-navy p-12 md:p-16 text-center shadow-elegant">
            <span className="gold-divider mx-auto block w-12" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-white">Take your next step</h2>
            <p className="mt-5 text-white/75 max-w-xl mx-auto">
              Whether you are exploring ordained ministry, seeking theological formation, or simply looking for an inclusive catholic community — we welcome you.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-navy shadow-gold hover:scale-[1.03] transition-transform">
                Get in Touch
              </Link>
              <Link to="/bible-academy" className="rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                Explore St. Cyprian School
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <VerseOfTheDay />
      <ServicesGrid />
      <DeanHighlight />
      <CTA />
    </>
  );
}
