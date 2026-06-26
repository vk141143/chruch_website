import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, LogOut, LayoutDashboard, ShieldCheck, UserCircle, Sun, Moon, ChevronDown } from "lucide-react";
import { getUser, logout, type AuthUser } from "@/lib/auth";
import { motion, AnimatePresence } from "framer-motion";

function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      localStorage.getItem("klf-theme") === "dark" ||
      (!localStorage.getItem("klf-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("klf-theme", dark ? "dark" : "light");
  }, [dark]);
  return { dark, toggle: () => setDark((v) => !v) };
}

const NAV = [
  { to: "/about", label: "About Us" },
  { to: "/ministries", label: "Parishes & Missions" },
  { to: "/community", label: "Ministries" },
  { to: "/events", label: "Events" },
  { to: "/bible-academy", label: "St. Cyprian School" },
  { to: "/sermons", label: "Media" },
  { to: "/donations", label: "Donate / Support" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [dropOpen, setDropOpen] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => { setUser(getUser()); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1280) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function handleLogout() {
    logout(); setUser(null); setDropOpen(false); navigate({ to: "/" });
  }

  const navLinkClass = (base: boolean) =>
    `text-sm font-medium tracking-wide transition-colors hover:text-gold ${base ? "text-navy dark:text-white/90" : "text-white/90"}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-background/96 backdrop-blur-md border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className={`grid h-10 w-10 place-items-center rounded-full border-2 border-dashed text-[8px] font-semibold text-center leading-tight transition-transform group-hover:scale-105 duration-300 px-1 ${scrolled ? "border-navy text-navy dark:border-white dark:text-white" : "border-white/60 text-white/60"}`}>
            ECSGS
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6" aria-label="Main navigation">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={navLinkClass(scrolled)}
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: false }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden xl:flex items-center gap-2.5">
          <button
            onClick={toggle}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className={`grid h-9 w-9 place-items-center rounded-full border transition-colors ${
              scrolled
                ? "border-border text-navy dark:text-white/90 hover:bg-muted"
                : "border-white/30 text-white hover:bg-white/10"
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={dark ? "sun" : "moon"}
                initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.6 }}
                transition={{ duration: 0.25 }}
              >
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </motion.span>
            </AnimatePresence>
          </button>

          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropOpen((v) => !v)}
                className={`flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition-colors ${
                  scrolled ? "border-border text-navy dark:text-white hover:bg-muted" : "border-white/40 text-white hover:bg-white/10"
                }`}
              >
                <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-gold text-navy font-bold text-xs">
                  {user.name.split(" ").map((n) => n[0]).join("")}
                </span>
                {user.name.split(" ")[0]}
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${dropOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {dropOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute right-0 top-full mt-2 w-48 rounded-2xl bg-background border border-border shadow-elegant overflow-hidden z-50"
                  >
                    {user.role === "admin" ? (
                      <Link to="/admin" onClick={() => setDropOpen(false)} className="flex items-center gap-2 px-4 py-3 text-sm text-navy dark:text-white hover:bg-muted transition-colors">
                        <ShieldCheck className="h-4 w-4 text-gold" /> Admin Panel
                      </Link>
                    ) : (
                      <Link to="/dashboard" onClick={() => setDropOpen(false)} className="flex items-center gap-2 px-4 py-3 text-sm text-navy dark:text-white hover:bg-muted transition-colors">
                        <LayoutDashboard className="h-4 w-4 text-gold" /> My Dashboard
                      </Link>
                    )}
                    <button onClick={handleLogout} className="flex w-full items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors border-t border-border">
                      <LogOut className="h-4 w-4" /> Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  scrolled ? "border-border text-navy dark:text-white hover:bg-muted" : "border-white/40 text-white hover:bg-white/10"
                }`}
              >
                <UserCircle className="h-4 w-4" /> Login
              </Link>
              <Link
                to="/community"
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-navy shadow-gold hover:scale-[1.04] active:scale-[0.98] transition-transform"
              >
                Join Now
              </Link>
            </>
          )}
        </div>

        {/* Mobile controls */}
        <div className="xl:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className={`grid h-9 w-9 place-items-center rounded-full border transition-colors ${
              scrolled ? "border-border text-navy dark:text-white" : "border-white/30 text-white"
            }`}
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`grid h-10 w-10 place-items-center rounded-md transition-colors ${
              scrolled ? "text-navy dark:text-white hover:bg-muted" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.2 }}
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="xl:hidden overflow-hidden border-t border-border bg-background/98 backdrop-blur-md"
          >
            <nav className="flex flex-col px-6 py-5 gap-1" aria-label="Mobile navigation">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                >
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-navy dark:text-white font-medium border-b border-border/50 last:border-0 hover:text-gold transition-colors"
                    activeProps={{ className: "text-gold" }}
                    activeOptions={{ exact: false }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-4 flex flex-col gap-2.5">
                {user ? (
                  <>
                    <Link
                      to={user.role === "admin" ? "/admin" : "/dashboard"}
                      onClick={() => setOpen(false)}
                      className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-navy"
                    >
                      {user.role === "admin" ? "Admin Panel" : "My Dashboard"}
                    </Link>
                    <button
                      onClick={() => { setOpen(false); handleLogout(); }}
                      className="inline-flex items-center justify-center rounded-full border border-red-200 px-5 py-3 text-sm font-semibold text-red-600"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/community"
                      onClick={() => setOpen(false)}
                      className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-navy shadow-gold"
                    >
                      Join Now
                    </Link>
                    <Link
                      to="/login"
                      onClick={() => setOpen(false)}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-navy dark:text-white"
                    >
                      <UserCircle className="h-4 w-4" /> Login
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
