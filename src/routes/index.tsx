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
      { title: "WordnWorship Fellowship — A Christ-Centered Church Community" },
      { name: "description", content: "Join WordnWorship Fellowship — Sunday worship, Bible teaching, prayer, and community rooted in Jesus Christ." },
      { property: "og:title", content: "WordnWorship Fellowship" },
      { property: "og:description", content: "Worship, the Word, and a life-giving community in Christ." },
      { property: "og:image", content: heroCross },
    ],
  }),
  component: Home,
});

const SLIDES = [
  {
    image: heroCross,
    eyebrow: "Welcome Home",
    title: "Jesus Christ Is Lord",
    verse: "I am the way, the truth, and the life.",
    ref: "John 14:6",
    cta: { label: "Join Our Community", to: "/community" },
  },
  {
    image: heroBible,
    eyebrow: "Rooted In The Word",
    title: "Grow In Faith",
    verse: "Your word is a lamp to my feet and a light to my path.",
    ref: "Psalm 119:105",
    cta: { label: "Explore Bible Studies", to: "/bible-academy" },
  },
  {
    image: heroPurpose,
    eyebrow: "Called With Purpose",
    title: "Discover God's Purpose",
    verse: "For I know the plans I have for you.",
    ref: "Jeremiah 29:11",
    cta: { label: "Start Your Journey", to: "/about" },
  },
  {
    image: heroChurch,
    eyebrow: "Teaching & Discipleship",
    title: "Learn The Word Of God",
    verse: "All Scripture is God-breathed.",
    ref: "2 Timothy 3:16",
    cta: { label: "View Courses", to: "/bible-academy" },
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
  { icon: BookOpen, title: "Sound Teaching", text: "Verse-by-verse study of the Scriptures, rooted in the gospel of Jesus Christ." },
  { icon: Heart, title: "Worshipful Presence", text: "Singing, prayer, and a posture of awe before our Father." },
  { icon: Users, title: "Authentic Community", text: "Small groups, mentoring, and friendships that love the way Christ loves." },
  { icon: Calendar, title: "Mission On Purpose", text: "Loving our city, serving the poor, and sharing the hope of the gospel." },
];

function Pillars() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Why WordnWorship"
            title="A people pursuing Jesus together"
            subtitle="Four convictions shape everything we do as a church family."
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
            "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life."
          </p>
          <p className="mt-8 text-sm tracking-[0.35em] uppercase text-gold">— John 3:16 · Verse Of The Day</p>
        </Reveal>
      </div>
    </section>
  );
}

const SERVICES = [
  { day: "Sunday", time: "9:00 AM & 11:00 AM", title: "Worship Gatherings", desc: "Worship, the Word, and the table — our weekly family gathering." },
  { day: "Wednesday", time: "7:00 PM", title: "Mid-Week Prayer", desc: "A house of prayer for all nations. All are welcome." },
  { day: "Friday", time: "6:30 PM", title: "Youth Fellowship", desc: "For students in grades 6–12. Worship, teaching, and games." },
];

function ServicesGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-end">
          <SectionHeading
            eyebrow="Plan Your Visit"
            title="When we gather"
            subtitle="There's a place for you at every gathering — come as you are."
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

function CTA() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="rounded-3xl bg-navy p-12 md:p-16 text-center shadow-elegant">
            <span className="gold-divider mx-auto block w-12" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-white">Take your next step</h2>
            <p className="mt-5 text-white/75 max-w-xl mx-auto">
              Whether you are exploring faith, returning to the church, or ready to commit your life to Jesus — we would love to walk with you.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-navy shadow-gold hover:scale-[1.03] transition-transform">
                I'm New Here
              </Link>
              <Link to="/community" className="rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                Join A Group
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
      <CTA />
    </>
  );
}
