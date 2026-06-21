import { Link } from "@tanstack/react-router";
import { Cross, Facebook, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold">
              <Cross className="h-5 w-5 text-navy" strokeWidth={2.5} />
            </span>
            <span className="font-serif text-xl">Kingdom Life Fellowship</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            A Christ-centered community pursuing the presence of God,
            the truth of His Word, and a life that loves people well.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80 hover:text-gold hover:border-gold transition-colors"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            {[
              ["/about", "About Us"],
              ["/ministries", "Ministries"],
              ["/bible-academy", "Bible Academy"],
              ["/sermons", "Sermons"],
              ["/events", "Events"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">Connect</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            {[
              ["/community", "Community"],
              ["/donations", "Give"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-sm font-semibold tracking-[0.2em] uppercase">Visit</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /> 142 Riverside Avenue, Greenfield</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /> (555) 218-0420</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" /> hello@kingdomlife.org</li>
          </ul>
          <p className="mt-5 text-xs text-white/60">Sunday Worship · 9:00 & 11:00 AM</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Kingdom Life Fellowship. All rights reserved.</p>
          <p className="font-serif italic text-gold/90">"For where two or three gather in my name, there am I with them." — Matthew 18:20</p>
        </div>
      </div>
    </footer>
  );
}
