import { Link } from "@tanstack/react-router";
import { Cross, Facebook, Instagram, Youtube, Mail, MapPin, Phone, Twitter } from "lucide-react";

const SOCIAL = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Youtube, href: "#", label: "YouTube" },
  { Icon: Twitter, href: "#", label: "Twitter / X" },
];

const EXPLORE = [
  ["/about", "About Us"],
  ["/ministries", "Ministries"],
  ["/bible-academy", "Bible Academy"],
  ["/sermons", "Sermons"],
  ["/events", "Events"],
] as const;

const CONNECT = [
  ["/community", "Community"],
  ["/donations", "Give / Donate"],
  ["/contact", "Contact Us"],
  ["/login", "Member Login"],
] as const;

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground" aria-label="Site footer">
      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2.5 group w-fit">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold group-hover:scale-105 transition-transform">
              <Cross className="h-5 w-5 text-navy" strokeWidth={2.5} />
            </span>
            <span className="font-serif text-xl">
              WordnWorship
              <span className="block text-[10px] font-sans tracking-[0.3em] text-gold uppercase mt-0.5">Fellowship</span>
            </span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-white/65 max-w-[240px]">
            A Christ-centered community pursuing the presence of God, the truth of His Word, and a life that loves people well.
          </p>
          <div className="mt-6 flex gap-2.5">
            {SOCIAL.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 hover:text-gold hover:border-gold transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-gold text-xs font-bold tracking-[0.2em] uppercase">Explore</h4>
          <ul className="mt-5 space-y-3">
            {EXPLORE.map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-sm text-white/70 hover:text-gold transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-gold text-xs font-bold tracking-[0.2em] uppercase">Connect</h4>
          <ul className="mt-5 space-y-3">
            {CONNECT.map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-sm text-white/70 hover:text-gold transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Visit */}
        <div>
          <h4 className="text-gold text-xs font-bold tracking-[0.2em] uppercase">Visit Us</h4>
          <ul className="mt-5 space-y-3.5">
            <li className="flex gap-3 text-sm text-white/70">
              <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
              142 Riverside Avenue, Greenfield
            </li>
            <li className="flex gap-3 text-sm text-white/70">
              <Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" />
              (555) 218-0420
            </li>
            <li className="flex gap-3 text-sm text-white/70">
              <Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" />
              hello@kingdomlife.org
            </li>
          </ul>
          <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-semibold text-gold tracking-widest uppercase">Service Times</p>
            <p className="mt-1.5 text-sm text-white/70">Sunday · 9:00 AM & 11:00 AM</p>
            <p className="mt-0.5 text-sm text-white/70">Wednesday · 7:00 PM</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} WordnWorship Fellowship. All rights reserved.</p>
          <p className="font-serif italic text-gold/80 text-center">
            &ldquo;For where two or three gather in my name, there am I with them.&rdquo; — Matthew 18:20
          </p>
        </div>
      </div>
    </footer>
  );
}
