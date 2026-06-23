import { useState } from "react";
import { Crown, CheckCircle, Zap, Clock } from "lucide-react";
import type { DashView } from "./DashboardLayout";

const PLANS = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "forever",
    color: "bg-background border-border",
    headerColor: "bg-cream",
    textColor: "text-navy",
    features: [
      "Access to 2 free courses",
      "Watch recent sermons",
      "Join community feed",
      "Submit prayer requests",
      "View upcoming events",
    ],
    missing: [
      "All Bible Academy courses",
      "Premium sermon archive",
      "Downloadable certificates",
      "Offline access",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$9.99",
    period: "per month",
    color: "bg-navy border-navy",
    headerColor: "bg-gradient-gold",
    textColor: "text-white",
    badge: "Most Popular",
    features: [
      "All Bible Academy courses",
      "Full sermon archive",
      "Downloadable certificates",
      "Priority prayer support",
      "Offline lesson access",
      "Early event registration",
      "Ad-free experience",
    ],
    missing: [],
  },
  {
    id: "annual",
    name: "Annual",
    price: "$79.99",
    period: "per year",
    color: "bg-background border-gold/40",
    headerColor: "bg-gradient-gold",
    textColor: "text-navy",
    badge: "Save 33%",
    features: [
      "Everything in Premium",
      "2 months free",
      "Family sharing (up to 4)",
      "1-on-1 discipleship call",
      "Exclusive annual devotional",
    ],
    missing: [],
  },
];

interface Props {
  isPremium: boolean;
  onViewChange: (v: DashView) => void;
}

export function SubscriptionPage({ isPremium, onViewChange: _onViewChange }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div className="p-4 md:p-6 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-1.5 text-xs text-gold font-semibold mb-3">
          <Crown className="h-3.5 w-3.5" /> WordnWorship Premium
        </div>
        <h2 className="font-serif text-3xl text-navy">
          Choose Your Faith Journey Plan
        </h2>
        <p className="text-muted-foreground text-sm mt-2 max-w-md mx-auto">
          Unlock full access to Bible courses, sermons, certificates and more.
        </p>
      </div>

      {/* Current Status */}
      {isPremium ? (
        <div className="rounded-2xl bg-gradient-gold p-5 mb-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <Crown className="h-6 w-6 text-navy" />
            <div>
              <p className="font-serif text-lg text-navy">Premium Active</p>
              <p className="text-navy/70 text-xs">Your plan renews on July 22, 2026</p>
            </div>
          </div>
          <button className="rounded-full border border-navy/30 px-4 py-2 text-sm font-medium text-navy hover:bg-navy/10 transition-colors">
            Manage Billing
          </button>
        </div>
      ) : (
        <div className="rounded-2xl bg-navy p-5 mb-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-gold" />
            <div>
              <p className="font-serif text-lg text-white">You're on the Free Plan</p>
              <p className="text-white/60 text-xs">Upgrade to unlock all content</p>
            </div>
          </div>
        </div>
      )}

      {/* Plan Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-2xl border overflow-hidden flex flex-col ${plan.color} ${
              plan.id === "premium" ? "ring-2 ring-gold shadow-gold" : ""
            }`}
          >
            <div className={`${plan.headerColor} p-5 relative`}>
              {plan.badge && (
                <span className="absolute top-3 right-3 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold text-navy backdrop-blur-sm">
                  {plan.badge}
                </span>
              )}
              <p
                className={`font-serif text-xl ${
                  plan.id === "premium" ? "text-navy" : "text-navy"
                }`}
              >
                {plan.name}
              </p>
              <div className="flex items-baseline gap-1 mt-1">
                <span
                  className={`font-serif text-3xl font-bold ${
                    plan.id === "premium" ? "text-navy" : "text-navy"
                  }`}
                >
                  {plan.price}
                </span>
                <span className="text-navy/60 text-xs">/{plan.period}</span>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <ul className="space-y-2 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle
                      className={`h-4 w-4 shrink-0 mt-0.5 ${
                        plan.id === "premium" ? "text-gold" : "text-green-500"
                      }`}
                    />
                    <span className={plan.id === "premium" ? "text-white/80" : "text-muted-foreground"}>
                      {f}
                    </span>
                  </li>
                ))}
                {plan.missing.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm opacity-40">
                    <span className="h-4 w-4 shrink-0 mt-0.5 text-center">✕</span>
                    <span className={plan.id === "premium" ? "text-white/40" : "text-muted-foreground"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => !isPremium && plan.id !== "free" && setSelected(plan.id)}
                className={`mt-5 w-full rounded-full py-3 text-sm font-semibold transition-all ${
                  plan.id === "free"
                    ? "border border-border text-muted-foreground cursor-default"
                    : plan.id === "premium"
                    ? "bg-gradient-gold text-navy shadow-gold hover:scale-[1.02]"
                    : "bg-gradient-gold text-navy shadow-gold hover:scale-[1.02]"
                }`}
                disabled={plan.id === "free" || isPremium}
              >
                {plan.id === "free"
                  ? "Current Plan"
                  : isPremium
                  ? "Active"
                  : `Get ${plan.name}`}
              </button>
              {selected === plan.id && (
                <div className="mt-3 rounded-xl bg-cream border border-gold/30 p-3 text-center">
                  <Clock className="h-4 w-4 mx-auto mb-1 text-gold" />
                  <p className="text-xs font-semibold text-navy">Payment coming soon!</p>
                  <p className="text-xs text-muted-foreground mt-0.5">We'll notify you when payments are live.</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="mt-8 rounded-2xl bg-cream border border-border p-5">
        <h3 className="font-serif text-lg text-navy mb-4">Frequently Asked Questions</h3>
        <div className="space-y-3">
          {[
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel at any time from your billing settings. Your access continues until the end of the billing period.",
            },
            {
              q: "Is my payment secure?",
              a: "All payments are processed securely via Stripe with 256-bit encryption.",
            },
            {
              q: "Do you offer student or ministry discounts?",
              a: "Yes! Contact us for special pricing for ministries, students and missionaries.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="border-b border-border pb-3 last:border-0 last:pb-0">
              <p className="text-sm font-semibold text-navy">{q}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
