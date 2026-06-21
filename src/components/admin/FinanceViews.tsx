import { useState } from "react";
import { Plus, Download, Trash2, CheckCircle } from "lucide-react";
import { ADMIN_DONATIONS, ADMIN_PLANS, ADMIN_TRANSACTIONS, type AdminDonation, type AdminPlan, type AdminTransaction } from "./adminData";
import { DataTable, Badge, Modal, ConfirmDialog, PageHeader, SearchBar, FormField, inputCls, selectCls, ActionBtn, toast } from "./AdminUI";

// ── Donations & Giving ──────────────────────────────────────────────────────
const CAMPAIGNS = [
  { id: "camp1", name: "Building Fund 2026", goal: 50000, raised: 32480, donors: 124 },
  { id: "camp2", name: "Missions Africa", goal: 20000, raised: 14250, donors: 89 },
  { id: "camp3", name: "Youth Ministry", goal: 10000, raised: 7820, donors: 56 },
];

export function DonationsView() {
  const [donations, setDonations] = useState<AdminDonation[]>(ADMIN_DONATIONS);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterType, setFilterType] = useState("All");

  const filtered = donations.filter((d) => {
    const q = search.toLowerCase();
    return (d.donor.toLowerCase().includes(q) || d.fund.toLowerCase().includes(q)) &&
      (filterStatus === "All" || d.status === filterStatus) &&
      (filterType === "All" || d.type === filterType);
  });

  const totalSuccessful = donations.filter((d) => d.status === "Successful").reduce((s, d) => s + d.amount, 0);

  const cols = [
    { key: "donor", label: "Donor", render: (d: AdminDonation) => <div><p className="font-medium text-navy text-sm">{d.donor}</p><p className="text-xs text-muted-foreground">{d.email}</p></div> },
    { key: "fund", label: "Fund", render: (d: AdminDonation) => <span className="text-sm text-navy">{d.fund}</span> },
    { key: "amount", label: "Amount", render: (d: AdminDonation) => <span className="font-semibold text-emerald-600">${d.amount.toLocaleString()}</span> },
    { key: "type", label: "Type", render: (d: AdminDonation) => <span className="text-xs text-muted-foreground">{d.type}</span> },
    { key: "method", label: "Method", render: (d: AdminDonation) => <span className="text-xs text-muted-foreground">{d.method}</span> },
    { key: "date", label: "Date", render: (d: AdminDonation) => <span className="text-xs text-muted-foreground">{d.date}</span> },
    { key: "status", label: "Status", render: (d: AdminDonation) => <Badge label={d.status} /> },
  ];

  return (
    <div className="p-4 md:p-6 max-w-[1400px] mx-auto space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: "Today", value: "$2,840" },
          { label: "This Week", value: "$14,210" },
          { label: "This Month", value: "$48,210" },
          { label: "This Year", value: "$412,840" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl bg-background border border-border p-4">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">{s.label}</p>
            <p className="mt-2 font-serif text-2xl text-navy">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Campaigns */}
      <div className="rounded-2xl bg-background border border-border p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-serif text-lg text-navy">Active Campaigns</h3>
          <button onClick={() => toast("Campaign created!")} className="flex items-center gap-1.5 rounded-full bg-gradient-gold px-3 py-1.5 text-xs font-semibold text-navy shadow-gold"><Plus className="h-3 w-3" /> New Campaign</button>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {CAMPAIGNS.map((c) => {
            const pct = Math.round((c.raised / c.goal) * 100);
            return (
              <div key={c.id} className="rounded-xl bg-cream p-4">
                <p className="font-medium text-navy text-sm">{c.name}</p>
                <div className="mt-3 h-2 rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-gradient-gold" style={{ width: `${pct}%` }} />
                </div>
                <div className="flex justify-between mt-1.5 text-xs text-muted-foreground">
                  <span>${c.raised.toLocaleString()} raised</span>
                  <span>{pct}% of ${c.goal.toLocaleString()}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{c.donors} donors</p>
              </div>
            );
          })}
        </div>
      </div>

      <PageHeader title="Donation History" desc={`${filtered.length} records · $${totalSuccessful.toLocaleString()} total`}
        action={<button onClick={() => toast("Donation report exported.")} className="flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-medium text-navy hover:bg-cream"><Download className="h-3.5 w-3.5" /> Export</button>}
      />
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="flex-1"><SearchBar value={search} onChange={setSearch} placeholder="Search by donor or fund..." /></div>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-navy focus:outline-none">
          {["All", "Successful", "Pending", "Failed", "Refunded"].map((s) => <option key={s}>{s}</option>)}
        </select>
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-navy focus:outline-none">
          {["All", "One-time", "Recurring"].map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <DataTable cols={cols} rows={filtered}
        actions={(d) => (
          <div className="flex justify-end gap-1.5">
            <ActionBtn label="Receipt" onClick={() => toast(`Receipt sent to ${d.email}.`)} variant="ghost" />
          </div>
        )}
      />
    </div>
  );
}

// ── Subscription Plans ──────────────────────────────────────────────────────
export function PlansView() {
  const [plans, setPlans] = useState<AdminPlan[]>(ADMIN_PLANS);
  const [modal, setModal] = useState<{ open: boolean; mode: "add" | "edit"; plan?: AdminPlan }>({ open: false, mode: "add" });
  const [form, setForm] = useState({ name: "", monthlyPrice: 0, yearlyPrice: 0, features: "", status: "Active" as "Active" | "Inactive" });

  function openAdd() { setForm({ name: "", monthlyPrice: 0, yearlyPrice: 0, features: "", status: "Active" }); setModal({ open: true, mode: "add" }); }
  function openEdit(p: AdminPlan) { setForm({ name: p.name, monthlyPrice: p.monthlyPrice, yearlyPrice: p.yearlyPrice, features: p.features.join("\n"), status: p.status }); setModal({ open: true, mode: "edit", plan: p }); }
  function save() {
    if (!form.name.trim()) { toast("Plan name required.", "error"); return; }
    const features = form.features.split("\n").map((f) => f.trim()).filter(Boolean);
    if (modal.mode === "add") { setPlans((p) => [...p, { id: `pl${Date.now()}`, ...form, features, activeSubscribers: 0 }]); toast("Plan created."); }
    else if (modal.plan) { setPlans((p) => p.map((x) => x.id === modal.plan!.id ? { ...x, ...form, features } : x)); toast("Plan updated."); }
    setModal({ open: false, mode: "add" });
  }

  return (
    <div className="p-4 md:p-6 max-w-[1400px] mx-auto">
      <PageHeader title="Subscription Plans" desc={`${plans.reduce((s, p) => s + p.activeSubscribers, 0)} total active subscribers`}
        action={<button onClick={openAdd} className="flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform"><Plus className="h-3.5 w-3.5" /> New Plan</button>}
      />
      <div className="grid md:grid-cols-3 gap-5">
        {plans.map((plan) => (
          <div key={plan.id} className={`rounded-2xl border overflow-hidden ${plan.name === "Premium" ? "border-gold/40 ring-2 ring-gold/20" : "border-border"}`}>
            <div className={`p-5 ${plan.name === "Premium" ? "bg-gradient-gold" : "bg-cream"}`}>
              <div className="flex items-center justify-between">
                <p className="font-serif text-xl text-navy">{plan.name}</p>
                <Badge label={plan.status} />
              </div>
              <p className="font-serif text-3xl text-navy mt-1">${plan.monthlyPrice}<span className="text-sm font-normal text-navy/60">/mo</span></p>
              {plan.yearlyPrice > 0 && <p className="text-xs text-navy/60 mt-0.5">${plan.yearlyPrice}/year</p>}
              <p className="text-sm font-semibold text-navy mt-2">{plan.activeSubscribers.toLocaleString()} subscribers</p>
            </div>
            <div className="p-5 bg-background">
              <ul className="space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0" />{f}</li>
                ))}
              </ul>
              <div className="flex gap-2 mt-4">
                <ActionBtn label="Edit" onClick={() => openEdit(plan)} variant="ghost" />
                <ActionBtn label={plan.status === "Active" ? "Deactivate" : "Activate"} onClick={() => { setPlans((p) => p.map((x) => x.id === plan.id ? { ...x, status: x.status === "Active" ? "Inactive" : "Active" } : x)); toast("Plan status updated."); }} variant="default" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal open={modal.open} onClose={() => setModal({ open: false, mode: "add" })} title={modal.mode === "add" ? "Create Plan" : "Edit Plan"} size="md">
        <div className="space-y-4">
          <FormField label="Plan Name" required><input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className={inputCls} placeholder="e.g. Premium" /></FormField>
          <div className="grid sm:grid-cols-2 gap-4">
            <FormField label="Monthly Price ($)"><input type="number" value={form.monthlyPrice} onChange={(e) => setForm((f) => ({ ...f, monthlyPrice: +e.target.value }))} className={inputCls} step="0.01" /></FormField>
            <FormField label="Yearly Price ($)"><input type="number" value={form.yearlyPrice} onChange={(e) => setForm((f) => ({ ...f, yearlyPrice: +e.target.value }))} className={inputCls} step="0.01" /></FormField>
          </div>
          <FormField label="Features (one per line)">
            <textarea value={form.features} onChange={(e) => setForm((f) => ({ ...f, features: e.target.value }))} className="w-full rounded-xl border border-border bg-cream px-4 py-2.5 text-sm text-navy resize-none focus:outline-none focus:ring-2 focus:ring-gold/30" rows={5} placeholder="All courses&#10;Full sermon archive&#10;Certificates" />
          </FormField>
          <FormField label="Status"><select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as "Active" | "Inactive" }))} className={selectCls}><option>Active</option><option>Inactive</option></select></FormField>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button onClick={() => setModal({ open: false, mode: "add" })} className="rounded-full border border-border px-5 py-2 text-sm font-medium text-navy hover:bg-cream">Cancel</button>
          <button onClick={save} className="rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-navy shadow-gold">{modal.mode === "add" ? "Create Plan" : "Save Changes"}</button>
        </div>
      </Modal>
    </div>
  );
}

// ── Payments & Transactions ─────────────────────────────────────────────────
export function TransactionsView() {
  const [transactions] = useState<AdminTransaction[]>(ADMIN_TRANSACTIONS);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const filtered = transactions.filter((t) => {
    const q = search.toLowerCase();
    return (t.member.toLowerCase().includes(q) || t.plan.toLowerCase().includes(q)) &&
      (filterStatus === "All" || t.status === filterStatus);
  });

  const cols = [
    { key: "member", label: "Member", render: (t: AdminTransaction) => <div><p className="font-medium text-navy text-sm">{t.member}</p><p className="text-xs text-muted-foreground">{t.email}</p></div> },
    { key: "plan", label: "Plan", render: (t: AdminTransaction) => <Badge label={t.plan} /> },
    { key: "amount", label: "Amount", render: (t: AdminTransaction) => <span className="font-semibold text-emerald-600">${t.amount}</span> },
    { key: "method", label: "Method", render: (t: AdminTransaction) => <span className="text-xs text-muted-foreground">{t.method}</span> },
    { key: "date", label: "Date", render: (t: AdminTransaction) => <span className="text-xs text-muted-foreground">{t.date}</span> },
    { key: "status", label: "Status", render: (t: AdminTransaction) => <Badge label={t.status} /> },
  ];

  return (
    <div className="p-4 md:p-6 max-w-[1400px] mx-auto">
      <PageHeader title="Payments & Transactions" desc="Razorpay integration ready"
        action={<button onClick={() => toast("Transaction report exported.")} className="flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-medium text-navy hover:bg-cream"><Download className="h-3.5 w-3.5" /> Export</button>}
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {[
          { label: "Successful", value: transactions.filter((t) => t.status === "Successful").length, color: "text-emerald-600" },
          { label: "Pending", value: transactions.filter((t) => t.status === "Pending").length, color: "text-amber-600" },
          { label: "Failed", value: transactions.filter((t) => t.status === "Failed").length, color: "text-red-600" },
          { label: "Refunded", value: transactions.filter((t) => t.status === "Refunded").length, color: "text-purple-600" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl bg-background border border-border p-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">{s.label}</p>
            <p className={`mt-1 font-serif text-2xl ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="flex-1"><SearchBar value={search} onChange={setSearch} placeholder="Search transactions..." /></div>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-navy focus:outline-none">
          {["All", "Successful", "Pending", "Failed", "Refunded"].map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <DataTable cols={cols} rows={filtered}
        actions={(t) => (
          <div className="flex justify-end gap-1.5">
            <ActionBtn label="Details" onClick={() => toast(`TX ID: ${t.id} · ${t.member} · $${t.amount}`)} variant="ghost" />
          </div>
        )}
      />
    </div>
  );
}
