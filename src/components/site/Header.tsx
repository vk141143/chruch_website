import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Cross, LogOut, LayoutDashboard, ShieldCheck, UserCircle, Sun, Moon } from "lucide-react";
import { getUser, logout, type AuthUser } from "@/lib/auth";

function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("klf-theme") === "dark" ||
      (!localStorage.getItem("klf-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("klf-theme", dark ? "dark" : "light");
  }, [dark]);
  return { dark, toggle: () => setDark((v) => !v) };
}

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/ministries", label: "Ministries" },
  { to: "/bible-academy", label: "Bible Academy" },
  { to: "/sermons", label: "Sermons" },
  { to: "/events", label: "Events" },
  { to: "/community", label: "Community" },
  { to: "/donations", label: "Donations" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [dropOpen, setDropOpen] = useState(false);

  const { dark, toggle } = useTheme();

  useEffect(() => {
    setUser(getUser());
  }, []);

  function handleLogout() {
    logout();
    setUser(null);
    setDropOpen(false);
    navigate({ to: "/" });
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span
            className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-gold shadow-gold transition-transform group-hover:scale-105`}
          >
            <Cross className="h-5 w-5 text-navy" strokeWidth={2.5} />
          </span>
          <span
            className={`font-serif text-xl leading-none ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            Kingdom Life
            <span className="block text-[10px] font-sans tracking-[0.3em] text-gold uppercase mt-1">
              Fellowship
            </span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-7">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                scrolled ? "text-navy" : "text-white/90"
              }`}
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className={`grid h-9 w-9 place-items-center rounded-full border transition-colors ${
              scrolled ? "border-border text-navy hover:bg-cream dark:text-white dark:border-border dark:hover:bg-surface" : "border-white/30 text-white hover:bg-white/10"
            }`}
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-gold transition-transform hover:scale-[1.03]"
          >
            Visit Us Sunday
          </Link>
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropOpen((v) => !v)}
                className={`flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition-colors ${
                  scrolled ? "border-border text-navy hover:bg-cream" : "border-white/40 text-white hover:bg-white/10"
                }`}
              >
                <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-gold text-navy font-bold text-xs">
                  {user.name.split(" ").map((n) => n[0]).join("")}
                </span>
                {user.name.split(" ")[0]}
              </button>
              {dropOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 rounded-2xl bg-background border border-border shadow-elegant overflow-hidden z-50">
                  {user.role === "admin" ? (
                    <Link to="/admin" onClick={() => setDropOpen(false)} className="flex items-center gap-2 px-4 py-3 text-sm text-navy hover:bg-cream transition-colors">
                      <ShieldCheck className="h-4 w-4 text-gold" /> Admin Panel
                    </Link>
                  ) : (
                    <Link to="/dashboard" onClick={() => setDropOpen(false)} className="flex items-center gap-2 px-4 py-3 text-sm text-navy hover:bg-cream transition-colors">
                      <LayoutDashboard className="h-4 w-4 text-gold" /> My Dashboard
                    </Link>
                  )}
                  <button onClick={handleLogout} className="flex w-full items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors border-t border-border">
                    <LogOut className="h-4 w-4" /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className={`inline-flex items-center gap-1.5 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                scrolled ? "border-navy text-navy hover:bg-cream" : "border-white/40 text-white hover:bg-white/10"
              }`}
            >
              <UserCircle className="h-4 w-4" /> Login
            </Link>
          )}
        </div>

        <div className="xl:hidden flex items-center gap-2">
          <button onClick={toggle} aria-label="Toggle theme" className={`grid h-9 w-9 place-items-center rounded-full border transition-colors ${
            scrolled ? "border-border text-navy" : "border-white/30 text-white"
          }`}>
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        <button
          onClick={() => setOpen((v) => !v)}
          className={`grid h-10 w-10 place-items-center rounded-md ${
            scrolled ? "text-navy" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-6 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-navy font-medium border-b border-border/60 last:border-0"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-navy"
            >
              Visit Us Sunday
            </Link>
            {user ? (
              <>
                <Link
                  to={user.role === "admin" ? "/admin" : "/dashboard"}
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-semibold text-navy"
                >
                  {user.role === "admin" ? "Admin Panel" : "My Dashboard"}
                </Link>
                <button
                  onClick={() => { setOpen(false); handleLogout(); }}
                  className="mt-2 inline-flex items-center justify-center rounded-full border border-red-200 px-5 py-3 text-sm font-semibold text-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-semibold text-navy"
              >
                Login / Register
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
