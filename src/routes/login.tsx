import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Cross, Eye, EyeOff } from "lucide-react";
import { login, register, getUser } from "@/lib/auth";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — WordnWorship Fellowship" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");

  // Redirect if already logged in
  if (typeof window !== "undefined" && getUser()) {
    const user = getUser();
    if (user?.role === "admin") navigate({ to: "/admin" });
    else navigate({ to: "/dashboard" });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (mode === "login") {
      const user = login(email, password);
      if (!user) { setError("Invalid email or password."); return; }
      navigate({ to: user.role === "admin" ? "/admin" : "/dashboard" });
    } else {
      if (!name.trim()) { setError("Please enter your name."); return; }
      const user = register(name, email, password);
      navigate({ to: "/dashboard" });
    }
  }

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2.5 justify-center group">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold shadow-gold">
              <Cross className="h-6 w-6 text-navy" strokeWidth={2.5} />
            </span>
            <span className="font-serif text-2xl text-navy leading-none">
              WordnWorship
              <span className="block text-[10px] font-sans tracking-[0.3em] text-gold uppercase mt-1">Fellowship</span>
            </span>
          </Link>
        </div>

        <div className="bg-background rounded-3xl border border-border shadow-elegant p-8">
          {/* Demo Credentials Banner */}
          <div className="mb-6 rounded-xl bg-cream border border-gold/30 p-4 text-xs space-y-1">
            <p className="font-semibold text-navy text-sm mb-2">Demo Credentials</p>
            <p className="text-navy/70"><span className="font-medium text-navy">Admin:</span> admin@kingdomlife.com / admin123</p>
            <p className="text-navy/70"><span className="font-medium text-navy">User:</span> user@kingdomlife.com / user123</p>
          </div>

          {/* Tabs */}
          <div className="flex rounded-xl bg-cream p-1 mb-6">
            {(["login", "register"] as const).map((m) => (
              <button
                key={m}
                onClick={() => { setMode(m); setError(""); }}
                className={`flex-1 rounded-lg py-2 text-sm font-semibold transition-all ${
                  mode === m ? "bg-navy text-white shadow-sm" : "text-navy/60 hover:text-navy"
                }`}
              >
                {m === "login" ? "Login" : "Register"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "register" && (
              <div>
                <label className="block text-xs font-semibold text-navy mb-1.5 tracking-wide">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  required
                  className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-navy mb-1.5 tracking-wide">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-navy mb-1.5 tracking-wide">Password</label>
              <div className="relative">
                <input
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full rounded-xl border border-border bg-cream px-4 py-3 pr-11 text-sm focus:outline-none focus:border-gold transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-navy transition-colors"
                >
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {error && <p className="text-xs text-red-500 font-medium">{error}</p>}

            <button
              type="submit"
              className="w-full rounded-full bg-gradient-gold py-3.5 text-sm font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform mt-2"
            >
              {mode === "login" ? "Sign In" : "Create Account"}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          <Link to="/" className="hover:text-navy transition-colors">← Back to Home</Link>
        </p>
      </div>
    </div>
  );
}
