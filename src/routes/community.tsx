import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { MessageCircleHeart, HandHeart, Users, Sparkles } from "lucide-react";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — WordnWorship Fellowship" },
      { name: "description", content: "Share testimonies, prayer requests, join discussion groups and serve through volunteer opportunities." },
      { property: "og:title", content: "Community at WordnWorship" },
      { property: "og:description", content: "Testimonies, prayer, groups, and volunteer opportunities." },
    ],
  }),
  component: CommunityPage,
});

const FEATURES = [
  { icon: Sparkles, title: "Share Your Testimony", text: "Tell the story of what Jesus has done in your life and encourage the family of God." },
  { icon: MessageCircleHeart, title: "Prayer Requests", text: "Submit a prayer request and let our intercessors stand with you." },
  { icon: Users, title: "Discussion Groups", text: "Connect with other believers around Scripture, parenting, marriage, and more." },
  { icon: HandHeart, title: "Volunteer Opportunities", text: "Find a place to serve — kids, worship, hospitality, tech, outreach." },
];

const TESTIMONIES = [
  { name: "Rachel M.", text: "WordnWorship walked with us through the hardest year of our lives. We finally found a church family that truly loves like Jesus." },
  { name: "Andrew T.", text: "I came in skeptical and curious. A year later I was baptized. The teaching is honest, deep, and full of grace." },
  { name: "Priya & Daniel S.", text: "Our small group has become our extended family. We pray together, eat together, and grow in Christ together." },
];

function CommunityPage() {
  return (
    <>
      <section className="pt-40 pb-16 bg-navy text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading eyebrow="Community" title="We are better together" subtitle="The Christian life was never meant to be lived alone. Find your people, pray together, and serve as the family of God." center light />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-2xl border border-border bg-card p-8 hover:shadow-elegant transition-shadow">
              <Icon className="h-8 w-8 text-gold" />
              <h3 className="mt-5 font-serif text-xl text-navy">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Testimonies" title="Stories from our family" center />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIES.map((t) => (
              <article key={t.name} className="rounded-2xl bg-background border border-border p-8">
                <p className="font-serif italic text-lg text-navy leading-relaxed">"{t.text}"</p>
                <p className="mt-6 text-xs tracking-[0.3em] uppercase text-gold">— {t.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
