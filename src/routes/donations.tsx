import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Gift, Repeat, Globe2, Building2, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/donations")({
  head: () => ({
    meta: [
      { title: "Give — Kingdom Life Fellowship" },
      { name: "description", content: "Partner with the mission of Kingdom Life Fellowship through one-time giving, monthly support, missions, building fund, and charity projects." },
      { property: "og:title", content: "Give to Kingdom Life" },
      { property: "og:description", content: "Support worship, teaching, missions, and outreach." },
    ],
  }),
  component: GivePage,
});

const FUNDS = [
  { icon: Gift, title: "One-Time Giving", text: "A single gift toward the general ministry of the church." },
  { icon: Repeat, title: "Monthly Partnership", text: "Stand with us each month to sustain worship, teaching, and outreach." },
  { icon: Globe2, title: "Mission Support", text: "Fuel our global mission partners spreading the gospel to unreached peoples." },
  { icon: Building2, title: "Building Fund", text: "Expanding our facilities so more can be welcomed home." },
  { icon: HeartHandshake, title: "Charity Projects", text: "Caring for the poor, the widow, and the orphan in our city and beyond." },
];

function GivePage() {
  return (
    <>
      <section className="pt-40 pb-16 bg-navy text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading eyebrow="Generosity" title="Give cheerfully, give faithfully" subtitle="Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver. — 2 Corinthians 9:7" center light />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FUNDS.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-2xl border border-border bg-card p-8 hover:shadow-elegant hover:-translate-y-1 transition-all">
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-gold shadow-gold">
                <Icon className="h-6 w-6 text-navy" />
              </span>
              <h3 className="mt-6 font-serif text-2xl text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              <button className="mt-7 inline-flex rounded-full bg-navy text-white px-5 py-2.5 text-sm font-semibold hover:bg-gold hover:text-navy transition-colors">
                Give Now
              </button>
            </article>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-muted-foreground max-w-xl mx-auto px-6">
          Secure online giving will be available soon. In the meantime, reach out via the contact page for in-person and bank giving options.
        </p>
      </section>
    </>
  );
}
