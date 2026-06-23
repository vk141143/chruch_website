import { useEffect, useState } from "react";
import { X, Crown, CheckCircle, CreditCard, Shield, Zap, Clock } from "lucide-react";
import type { DashView } from "./DashboardLayout";

const PLANS = [
  {
    id: "monthly",
    name: "Premium Monthly",
    price: "$9.99",
    period: "/ month",
    badge: "Most Popular",
    highlight: true,
    features: [
      "All Bible Academy video courses",
      "Full sermon & devotion archive",
      "Downloadable study certificates",
      "Priority prayer support",
      "Offline lesson access",
      "Ad-free experience",
    ],
  },
  {
    id: "annual",
    name: "Premium Annual",
    price: "$79.99",
    period: "/ year",
    badge: "Save 33%",
    highlight: false,
    features: [
      "Everything in Premium Monthly",
      "2 months free vs monthly plan",
      "Family sharing — up to 4 members",
      "1-on-1 discipleship call",
      "Exclusive annual devotional PDF",
    ],
  },
];

interface Props {
  open: boolean;
  onClose: () => void;
  onViewChange: (v: DashView) => void;
}

export function SubscriptionModal({ open, onClose, onViewChange }: Props) {
  // ── hooks must be called unconditionally ──────────────────────────────────
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // reset selection when modal closes
  useEffect(() => { if (!open) setSelected(null); }, [open]);

  if (!open) return null;
  // ─────────────────────────────────────────────────────────────────────────

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6">
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-10 w-full max-w-2xl flex flex-col rounded-2xl bg-background shadow-2xl overflow-hidden max-h-[95vh]">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-gold shadow-gold">
              <Crown className="h-4 w-4 text-navy" />
            </span>
            <div>
              <h2 className="font-serif text-lg text-navy leading-tight">Unlock Premium Content</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Subscribe to access all videos & courses</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="grid h-8 w-8 place-items-center rounded-xl border border-border text-muted-foreground hover:bg-muted transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-y-auto p-6">
          {/* Lock notice */}
          <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 mb-6">
            <Zap className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              This is <span className="font-semibold">Premium Content</span>. Subscribe to unlock every video, course, and certificate on the platform.
            </p>
          </div>

          {/* Plan cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl border overflow-hidden transition-all ${
                  plan.highlight
                    ? "bg-navy border-gold ring-2 ring-gold/30"
                    : "bg-card border-border"
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-0 right-0">
                    <span className={`inline-block rounded-bl-xl px-3 py-1 text-[10px] font-bold ${
                      plan.highlight ? "bg-gradient-gold text-navy" : "bg-muted text-muted-foreground"
                    }`}>
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-5 pb-4">
                  <p className={`font-serif text-lg ${plan.highlight ? "text-white" : "text-navy"}`}>
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className={`font-serif text-3xl font-bold ${plan.highlight ? "text-gold" : "text-navy"}`}>
                      {plan.price}
                    </span>
                    <span className={`text-xs ${plan.highlight ? "text-white/50" : "text-muted-foreground"}`}>
                      {plan.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs">
                        <CheckCircle className={`h-3.5 w-3.5 shrink-0 mt-0.5 ${plan.highlight ? "text-gold" : "text-emerald-500"}`} />
                        <span className={plan.highlight ? "text-white/80" : "text-muted-foreground"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-5 pb-5 mt-auto">
                  {selected === plan.id ? (
                    <div className={`rounded-xl p-3 text-center text-xs ${
                      plan.highlight ? "bg-white/10 text-white" : "bg-cream text-navy"
                    }`}>
                      <Clock className="h-4 w-4 mx-auto mb-1 text-gold" />
                      <p className="font-semibold">Payment coming soon!</p>
                      <p className="opacity-70 mt-0.5">We'll notify you when it's ready.</p>
                    </div>
                  ) : (
                    <button
                      onClick={() => setSelected(plan.id)}
                      className={`w-full flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] ${
                        plan.highlight
                          ? "bg-gradient-gold text-navy shadow-gold"
                          : "bg-navy text-white hover:bg-navy/90"
                      }`}
                    >
                      <CreditCard className="h-4 w-4" />
                      Subscribe — {plan.price}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Trust row */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Shield className="h-3.5 w-3.5 text-gold" /> Secure via Stripe</span>
            <span className="flex items-center gap-1"><CheckCircle className="h-3.5 w-3.5 text-gold" /> Cancel anytime</span>
            <span className="flex items-center gap-1"><Crown className="h-3.5 w-3.5 text-gold" /> Instant access</span>
          </div>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Want to compare all plans?{" "}
            <button
              onClick={() => { onViewChange("subscription"); onClose(); }}
              className="text-gold font-medium hover:underline"
            >
              View full pricing
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
