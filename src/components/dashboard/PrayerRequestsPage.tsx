import { useState } from "react";
import { HeartHandshake, Lock, Globe, Plus, X, CheckCircle } from "lucide-react";
import { MOCK_PRAYER_REQUESTS } from "@/lib/mockData";

const CATEGORIES = ["Health", "Family", "Career", "Finance", "Spiritual Growth", "Relationships", "Thanksgiving", "Other"];

interface PrayerReq {
  id: string; title: string; detail: string; category: string;
  privacy: "public" | "private"; prayerCount: number; answered: boolean;
  createdAt: string; author: string;
}

export function PrayerRequestsPage() {
  const [requests, setRequests] = useState<PrayerReq[]>(MOCK_PRAYER_REQUESTS);
  const [showForm, setShowForm] = useState(false);
  const [prayed, setPrayed] = useState<Set<string>>(new Set());
  const [form, setForm] = useState({ title: "", detail: "", category: "Health", privacy: "public" as "public" | "private" });

  function submitRequest() {
    if (!form.title.trim()) return;
    const newReq: PrayerReq = {
      id: `p${Date.now()}`,
      title: form.title,
      detail: form.detail,
      category: form.category,
      privacy: form.privacy,
      prayerCount: 0,
      answered: false,
      createdAt: "Just now",
      author: "You",
    };
    setRequests((prev) => [newReq, ...prev]);
    setForm({ title: "", detail: "", category: "Health", privacy: "public" });
    setShowForm(false);
  }

  function togglePray(id: string) {
    setPrayed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        setRequests((reqs) => reqs.map((r) => r.id === id ? { ...r, prayerCount: r.prayerCount - 1 } : r));
      } else {
        next.add(id);
        setRequests((reqs) => reqs.map((r) => r.id === id ? { ...r, prayerCount: r.prayerCount + 1 } : r));
      }
      return next;
    });
  }

  const CAT_COLORS: Record<string, string> = {
    Health: "bg-red-100 text-red-700", Family: "bg-blue-100 text-blue-700",
    Career: "bg-purple-100 text-purple-700", Finance: "bg-green-100 text-green-700",
    "Spiritual Growth": "bg-yellow-100 text-yellow-700", Relationships: "bg-pink-100 text-pink-700",
    Thanksgiving: "bg-orange-100 text-orange-700", Other: "bg-muted text-muted-foreground",
  };

  return (
    <div className="p-4 md:p-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-serif text-2xl text-navy">Prayer Requests</h2>
          <p className="text-sm text-muted-foreground mt-0.5">Share your prayer needs with the community</p>
        </div>
        <button
          onClick={() => setShowForm((v) => !v)}
          className="flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2.5 text-sm font-semibold text-navy shadow-gold"
        >
          {showForm ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          {showForm ? "Cancel" : "New Request"}
        </button>
      </div>

      {showForm && (
        <div className="rounded-2xl border border-gold/30 bg-background p-5 mb-6 space-y-4">
          <h3 className="font-serif text-lg text-navy">Submit Prayer Request</h3>
          <input
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            placeholder="Prayer request title *"
            className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
          <textarea
            value={form.detail}
            onChange={(e) => setForm((f) => ({ ...f, detail: e.target.value }))}
            placeholder="Describe your prayer request..."
            rows={3}
            className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-navy placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-navy mb-1 block">Category</label>
              <select
                value={form.category}
                onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold/30"
              >
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-navy mb-1 block">Visibility</label>
              <div className="flex rounded-xl border border-border overflow-hidden">
                {(["public", "private"] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => setForm((f) => ({ ...f, privacy: p }))}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm capitalize transition-colors ${
                      form.privacy === p ? "bg-navy text-white" : "bg-cream text-muted-foreground hover:text-navy"
                    }`}
                  >
                    {p === "public" ? <Globe className="h-3.5 w-3.5" /> : <Lock className="h-3.5 w-3.5" />}
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={submitRequest}
            className="w-full rounded-full bg-navy py-3 text-sm font-semibold text-white hover:bg-navy/90 transition-colors"
          >
            Submit Prayer Request
          </button>
        </div>
      )}

      <div className="space-y-4">
        {requests.map((req) => (
          <div key={req.id} className={`rounded-2xl bg-background border p-5 ${req.answered ? "border-green-200" : "border-border"}`}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-serif text-base text-navy">{req.title}</h3>
                  {req.answered && (
                    <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700 font-medium">
                      <CheckCircle className="h-3 w-3" /> Answered
                    </span>
                  )}
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${CAT_COLORS[req.category] ?? "bg-muted text-muted-foreground"}`}>
                    {req.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    {req.privacy === "public" ? <Globe className="h-3 w-3" /> : <Lock className="h-3 w-3" />}
                    {req.privacy}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{req.detail}</p>
                <p className="text-xs text-muted-foreground mt-2">By {req.author} · {req.createdAt}</p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-border flex items-center gap-3">
              <button
                onClick={() => togglePray(req.id)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  prayed.has(req.id) ? "bg-gold/10 text-gold border border-gold/30" : "bg-cream text-navy hover:bg-muted"
                }`}
              >
                <HeartHandshake className="h-4 w-4" />
                {prayed.has(req.id) ? "Praying" : "Pray"} · {req.prayerCount}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
