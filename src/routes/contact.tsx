import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Saint Cyprian School of Theology / ECSGS" },
      { name: "description", content: "Get in touch with the Ecumenical Catholic Servants of the Good Shepherd or the Saint Cyprian School of Theology. Inquire about enrollment, ministry, or community." },
      { property: "og:title", content: "Contact ECSGS" },
      { property: "og:description", content: "Reach out to House of Ruth and Junia or the Saint Cyprian School of Theology." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="pt-40 pb-16 bg-navy text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading eyebrow="Get In Touch" title="We'd love to hear from you" subtitle="Whether you're new, exploring faith, or have a prayer request — drop us a line." center light />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            {[
              { icon: MapPin, label: "Mailing Address", value: "Servants of the Good Shepherd\nSaint Cyprian School of Theology\n500 E Imperial Hwy.\nBrea, CA 92821 USA" },
              { icon: Mail, label: "Email", value: "mariahadmin@ecsgs-stcyprian.com" },
              { icon: Clock, label: "Classes", value: "Hybrid — In-Person & Zoom\nShared dinner precedes each session" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-gold shadow-gold">
                  <Icon className="h-5 w-5 text-navy" />
                </span>
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">{label}</p>
                  <p className="mt-1 font-serif text-lg text-navy whitespace-pre-line leading-snug">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-2xl border border-border bg-card p-8 md:p-10"
          >
            <h3 className="font-serif text-2xl text-navy">Send us a message</h3>
            <div className="mt-6 grid gap-4">
              <input required placeholder="Your name" className="rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold" />
              <input required type="email" placeholder="Email address" className="rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold" />
              <input placeholder="Subject (e.g. Enrollment Inquiry, Diaconal Program)" className="rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold" />
              <textarea required rows={5} placeholder="How can we help you? Inquire about enrollment, auditing a course, or joining our community." className="rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold resize-none" />
              <button className="mt-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform">
                {sent ? "Thank you — we'll be in touch" : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
