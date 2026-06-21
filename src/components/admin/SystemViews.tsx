import { useState } from "react";
import { Award, Download, Send, BarChart3, Save, Globe, Mail, CreditCard, Shield, Bell, FileText } from "lucide-react";
import { ADMIN_CERTIFICATES, ADMIN_MEMBERS, ADMIN_COURSES, MEMBER_GROWTH, REVENUE_DATA, DONATION_DATA, ENROLLMENT_DATA, MONTHS } from "./adminData";
import { DataTable, Badge, Modal, PageHeader, FormField, inputCls, selectCls, textareaCls, ActionBtn, BarChart, toast } from "./AdminUI";

// ── Certificates ────────────────────────────────────────────────────────────
export function CertificatesView() {
  const [certs, setCerts] = useState(ADMIN_CERTIFICATES);
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({ member: "", course: "" });

  function issue() {
    if (!form.member || !form.course) { toast("Select member and course.", "error"); return; }
    setCerts((p) => [...p, { id: `cert${Date.now()}`, member: form.member, course: form.course, issuedDate: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }), status: "Issued" as const }]);
    toast("Certificate issued successfully! 🎓");
    setModal(false);
  }

  const cols = [
    { key: "member", label: "Member", render: (c: typeof ADMIN_CERTIFICATES[0]) => <p className="font-medium text-navy text-sm">{c.member}</p> },
    { key: "course", label: "Course", render: (c: typeof ADMIN_CERTIFICATES[0]) => <p className="text-sm text-navy">{c.course}</p> },
    { key: "issuedDate", label: "Issued Date", render: (c: typeof ADMIN_CERTIFICATES[0]) => <span className="text-xs text-muted-foreground">{c.issuedDate}</span> },
    { key: "status", label: "Status", render: (c: typeof ADMIN_CERTIFICATES[0]) => <Badge label={c.status} /> },
  ];

  return (
    <div className="p-4 md:p-6 max-w-[1400px] mx-auto">
      <PageHeader title="Certificates" desc={`${certs.filter((c) => c.status === "Issued").length} issued`}
        action={
          <div className="flex gap-2">
            <button onClick={() => toast("Certificate templates opened.")} className="flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-medium text-navy hover:bg-cream"><FileText className="h-3.5 w-3.5" /> Templates</button>
            <button onClick={() => setModal(true)} className="flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform"><Award className="h-3.5 w-3.5" /> Issue Certificate</button>
          </div>
        }
      />
      <DataTable cols={cols} rows={certs}
        actions={(c) => (
          <div className="flex justify-end gap-1.5">
            <button onClick={() => toast(`Certificate downloaded for ${c.member}.`)} className="grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-navy transition-colors" title="Download"><Download className="h-3.5 w-3.5" /></button>
            <button onClick={() => toast(`Certificate resent to ${c.member}.`)} className="grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-blue-600 transition-colors" title="Resend"><Send className="h-3.5 w-3.5" /></button>
            {c.status === "Pending" && <ActionBtn label="Approve" onClick={() => { setCerts((p) => p.map((x) => x.id === c.id ? { ...x, status: "Issued" as const } : x)); toast("Certificate issued!"); }} variant="success" />}
          </div>
        )}
      />
      <Modal open={modal} onClose={() => setModal(false)} title="Issue Certificate" size="sm">
        <div className="space-y-4">
          <FormField label="Member" required>
            <select value={form.member} onChange={(e) => setForm((f) => ({ ...f, member: e.target.value }))} className={selectCls}>
              <option value="">Select member...</option>
              {ADMIN_MEMBERS.map((m) => <option key={m.id}>{m.name}</option>)}
            </select>
          </FormField>
          <FormField label="Course" required>
            <select value={form.course} onChange={(e) => setForm((f) => ({ ...f, course: e.target.value }))} className={selectCls}>
              <option value="">Select course...</option>
              {ADMIN_COURSES.map((c) => <option key={c.id}>{c.title}</option>)}
            </select>
          </FormField>
        </div>
        <div className="flex justify-end gap-2 mt-5">
          <button onClick={() => setModal(false)} className="rounded-full border border-border px-4 py-2 text-sm text-navy hover:bg-cream">Cancel</button>
          <button onClick={issue} className="rounded-full bg-gradient-gold px-4 py-2 text-sm font-semibold text-navy shadow-gold">Issue</button>
        </div>
      </Modal>
    </div>
  );
}

// ── Notifications ───────────────────────────────────────────────────────────
const NOTIF_TYPES = ["Course Update", "Event Reminder", "Prayer Response", "Payment", "Announcement", "General"];

export function NotificationsAdminView() {
  const [form, setForm] = useState({ title: "", message: "", type: "General", audience: "all", scheduled: false, scheduleDate: "" });
  const [sent, setSent] = useState<typeof form[]>([]);

  function sendNotif() {
    if (!form.title.trim() || !form.message.trim()) { toast("Title and message required.", "error"); return; }
    setSent((p) => [...p, form]);
    setForm({ title: "", message: "", type: "General", audience: "all", scheduled: false, scheduleDate: "" });
    toast(form.scheduled ? "Notification scheduled! ⏰" : "Notification sent to all members! 🔔");
  }

  return (
    <div className="p-4 md:p-6 max-w-[1400px] mx-auto">
      <PageHeader title="Notifications" desc="Send in-app and email notifications" />
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Compose */}
        <div className="rounded-2xl bg-background border border-border p-5 space-y-4">
          <h3 className="font-serif text-lg text-navy">Compose Notification</h3>
          <FormField label="Notification Type">
            <select value={form.type} onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))} className={selectCls}>
              {NOTIF_TYPES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </FormField>
          <FormField label="Title" required>
            <input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} className={inputCls} placeholder="Notification title" />
          </FormField>
          <FormField label="Message" required>
            <textarea value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} className={textareaCls} rows={4} placeholder="Write your notification message..." />
          </FormField>
          <FormField label="Send To">
            <select value={form.audience} onChange={(e) => setForm((f) => ({ ...f, audience: e.target.value }))} className={selectCls}>
              <option value="all">All Members</option>
              <option value="premium">Premium Members Only</option>
              <option value="free">Free Members Only</option>
              <option value="pastors">Pastors & Moderators</option>
            </select>
          </FormField>
          <div className="flex items-center gap-3">
            <button onClick={() => setForm((f) => ({ ...f, scheduled: !f.scheduled }))}
              className={`relative inline-flex h-5 w-9 rounded-full transition-colors ${form.scheduled ? "bg-gradient-gold" : "bg-border"}`}>
              <span className={`mt-0.5 ml-0.5 inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${form.scheduled ? "translate-x-4" : "translate-x-0"}`} />
            </button>
            <span className="text-sm text-navy">Schedule for later</span>
          </div>
          {form.scheduled && (
            <FormField label="Schedule Date & Time">
              <input type="datetime-local" value={form.scheduleDate} onChange={(e) => setForm((f) => ({ ...f, scheduleDate: e.target.value }))} className={inputCls} />
            </FormField>
          )}
          <button onClick={sendNotif} className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-gold py-3 text-sm font-semibold text-navy shadow-gold hover:scale-[1.01] transition-transform">
            <Bell className="h-4 w-4" />
            {form.scheduled ? "Schedule Notification" : "Send Now"}
          </button>
        </div>

        {/* Sent History */}
        <div className="rounded-2xl bg-background border border-border p-5">
          <h3 className="font-serif text-lg text-navy mb-4">Recent Notifications</h3>
          {sent.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Bell className="h-10 w-10 text-muted-foreground/30 mb-2" />
              <p className="text-sm text-muted-foreground">No notifications sent yet.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {sent.slice().reverse().map((n, i) => (
                <div key={i} className="rounded-xl bg-cream p-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-navy text-sm">{n.title}</p>
                    <Badge label={n.type} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{n.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">To: {n.audience === "all" ? "All Members" : n.audience}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Reports & Analytics ─────────────────────────────────────────────────────
export function ReportsView() {
  const REPORT_TABS = ["Revenue", "Donations", "Members", "Courses", "Events", "Subscriptions"];
  const [activeTab, setActiveTab] = useState("Revenue");

  const chartMap: Record<string, { data: number[]; title: string; subtitle: string; color: string }> = {
    Revenue: { data: REVENUE_DATA, title: "Monthly Subscription Revenue", subtitle: "Last 12 months ($)", color: "from-gold to-yellow-300" },
    Donations: { data: DONATION_DATA, title: "Monthly Donations", subtitle: "Last 12 months ($)", color: "from-emerald-600 to-emerald-400" },
    Members: { data: MEMBER_GROWTH, title: "Member Growth", subtitle: "Cumulative members", color: "from-blue-600 to-blue-400" },
    Courses: { data: ENROLLMENT_DATA, title: "Course Enrollments", subtitle: "New enrollments/month", color: "from-purple-600 to-purple-400" },
    Events: { data: [412, 92, 98, 312, 84, 65, 156, 312, 578, 420, 380, 450], title: "Event Registrations", subtitle: "Per event attendance", color: "from-orange-500 to-orange-300" },
    Subscriptions: { data: [420, 445, 460, 480, 495, 510, 524, 535, 540, 548, 560, 580], title: "Active Subscriptions", subtitle: "Monthly active subscribers", color: "from-pink-600 to-pink-400" },
  };

  const chart = chartMap[activeTab];

  return (
    <div className="p-4 md:p-6 max-w-[1400px] mx-auto">
      <PageHeader title="Reports & Analytics" desc="Export and analyse platform performance"
        action={
          <div className="flex gap-2">
            <button onClick={() => toast("CSV exported successfully.")} className="flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-medium text-navy hover:bg-cream"><Download className="h-3.5 w-3.5" /> CSV</button>
            <button onClick={() => toast("PDF report generated.")} className="flex items-center gap-1.5 rounded-full bg-gradient-gold px-3 py-2 text-xs font-semibold text-navy shadow-gold"><BarChart3 className="h-3.5 w-3.5" /> PDF</button>
          </div>
        }
      />

      {/* Tabs */}
      <div className="flex gap-1 rounded-xl bg-cream p-1 mb-6 overflow-x-auto">
        {REPORT_TABS.map((t) => (
          <button key={t} onClick={() => setActiveTab(t)}
            className={`rounded-lg px-4 py-2 text-xs font-medium whitespace-nowrap transition-all ${activeTab === t ? "bg-background text-navy shadow-sm" : "text-muted-foreground hover:text-navy"}`}>
            {t}
          </button>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {activeTab === "Revenue" && [
          { label: "Total Revenue", value: "$87,200" },
          { label: "Premium Subscribers", value: "524" },
          { label: "Annual Subscribers", value: "118" },
          { label: "MRR Growth", value: "+15.6%" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl bg-background border border-border p-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">{s.label}</p>
            <p className="mt-1 font-serif text-xl text-navy">{s.value}</p>
          </div>
        ))}
        {activeTab === "Members" && [
          { label: "Total Members", value: "2,847" },
          { label: "New This Month", value: "+70" },
          { label: "Active Rate", value: "84%" },
          { label: "Retention", value: "91%" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl bg-background border border-border p-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">{s.label}</p>
            <p className="mt-1 font-serif text-xl text-navy">{s.value}</p>
          </div>
        ))}
        {!["Revenue", "Members"].includes(activeTab) && [
          { label: "This Month", value: "—" },
          { label: "Last Month", value: "—" },
          { label: "Growth", value: "—" },
          { label: "Total", value: "—" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl bg-background border border-border p-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">{s.label}</p>
            <p className="mt-1 font-serif text-xl text-navy">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="rounded-2xl bg-background border border-border p-5">
        <p className="font-serif text-lg text-navy">{chart.title}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{chart.subtitle}</p>
        <div className="mt-6 flex items-end gap-2 h-48">
          {chart.data.map((v, i) => {
            const max = Math.max(...chart.data);
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className={`w-full rounded-t-sm bg-gradient-to-t ${chart.color} transition-all duration-700`} style={{ height: `${(v / max) * 100}%` }} />
                <span className="text-[9px] text-muted-foreground">{MONTHS[i]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── Website Settings ────────────────────────────────────────────────────────
export function SettingsView() {
  const [settings, setSettings] = useState({
    churchName: "Kingdom Life Fellowship",
    tagline: "A Christ-Centered Community",
    email: "info@kingdomlife.com",
    phone: "+1 (555) 234-5678",
    address: "123 Faith Avenue, Grace City, GC 10001",
    website: "https://kingdomlifefellowship.com",
    facebook: "kingdomlifefellowship",
    instagram: "@kingdomlife",
    youtube: "KingdomLifeFellowship",
    twitter: "@KingdomLifeFC",
    smtpHost: "smtp.sendgrid.net",
    smtpPort: "587",
    razorpayKey: "rzp_test_••••••••••••",
    seoTitle: "Kingdom Life Fellowship — Christ-Centered Community",
    seoDesc: "A Christ-centered church family pursuing worship, the Word, and community.",
    privacyPolicy: "Your privacy is important to us. We collect only necessary information to provide our services...",
    termsConditions: "By using our platform you agree to our terms and conditions...",
  });
  const [saved, setSaved] = useState(false);

  function save() { setSaved(true); setTimeout(() => setSaved(false), 2500); toast("Settings saved successfully!"); }

  const SECTIONS = [
    { icon: Globe, label: "Church Info", fields: [
      { key: "churchName", label: "Church Name", type: "text" },
      { key: "tagline", label: "Tagline", type: "text" },
      { key: "email", label: "Email", type: "email" },
      { key: "phone", label: "Phone", type: "tel" },
      { key: "address", label: "Address", type: "text" },
      { key: "website", label: "Website URL", type: "url" },
    ]},
    { icon: Globe, label: "Social Media", fields: [
      { key: "facebook", label: "Facebook", type: "text" },
      { key: "instagram", label: "Instagram", type: "text" },
      { key: "youtube", label: "YouTube", type: "text" },
      { key: "twitter", label: "Twitter / X", type: "text" },
    ]},
    { icon: Mail, label: "Email Settings", fields: [
      { key: "smtpHost", label: "SMTP Host", type: "text" },
      { key: "smtpPort", label: "SMTP Port", type: "text" },
    ]},
    { icon: CreditCard, label: "Payment Settings", fields: [
      { key: "razorpayKey", label: "Razorpay Key", type: "text" },
    ]},
    { icon: Shield, label: "SEO", fields: [
      { key: "seoTitle", label: "SEO Title", type: "text" },
      { key: "seoDesc", label: "SEO Description", type: "text" },
    ]},
  ];

  return (
    <div className="p-4 md:p-6 max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl text-navy">Website Settings</h2>
        <button onClick={save} className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${saved ? "bg-emerald-100 text-emerald-700" : "bg-gradient-gold text-navy shadow-gold hover:scale-[1.02]"}`}>
          <Save className="h-4 w-4" />{saved ? "Saved ✓" : "Save Settings"}
        </button>
      </div>

      {SECTIONS.map(({ icon: Icon, label, fields }) => (
        <div key={label} className="rounded-2xl bg-background border border-border p-5">
          <div className="flex items-center gap-2 mb-4">
            <Icon className="h-5 w-5 text-gold" />
            <h3 className="font-serif text-lg text-navy">{label}</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {fields.map(({ key, label: fl, type }) => (
              <div key={key} className={type === "text" && (key === "address" || key === "seoDesc") ? "sm:col-span-2" : ""}>
                <FormField label={fl}>
                  <input type={type} value={settings[key as keyof typeof settings]} onChange={(e) => setSettings((s) => ({ ...s, [key]: e.target.value }))} className={inputCls} />
                </FormField>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="rounded-2xl bg-background border border-border p-5">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="h-5 w-5 text-gold" />
          <h3 className="font-serif text-lg text-navy">Legal</h3>
        </div>
        <div className="space-y-4">
          <FormField label="Privacy Policy">
            <textarea value={settings.privacyPolicy} onChange={(e) => setSettings((s) => ({ ...s, privacyPolicy: e.target.value }))} className={textareaCls} rows={4} />
          </FormField>
          <FormField label="Terms & Conditions">
            <textarea value={settings.termsConditions} onChange={(e) => setSettings((s) => ({ ...s, termsConditions: e.target.value }))} className={textareaCls} rows={4} />
          </FormField>
        </div>
      </div>
    </div>
  );
}

// ── Admin Profile ───────────────────────────────────────────────────────────
export function AdminProfileView() {
  const [form, setForm] = useState({ name: "Admin User", email: "admin@kingdomlife.com", phone: "+1 555-0001", role: "Admin", bio: "Church administrator and platform manager.", currentPassword: "", newPassword: "", confirmPassword: "" });
  const [saved, setSaved] = useState(false);

  function save() { setSaved(true); setTimeout(() => setSaved(false), 2500); toast("Profile updated successfully!"); }
  function changePassword() {
    if (!form.currentPassword || !form.newPassword) { toast("Fill all password fields.", "error"); return; }
    if (form.newPassword !== form.confirmPassword) { toast("Passwords do not match.", "error"); return; }
    toast("Password changed successfully!");
    setForm((f) => ({ ...f, currentPassword: "", newPassword: "", confirmPassword: "" }));
  }

  return (
    <div className="p-4 md:p-6 max-w-2xl mx-auto space-y-6">
      <div className="rounded-2xl bg-navy text-white p-6 flex flex-col sm:flex-row items-center gap-5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 50%, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="relative grid h-20 w-20 place-items-center rounded-full bg-gradient-gold text-navy font-bold text-2xl shadow-gold shrink-0">AU</div>
        <div className="relative text-center sm:text-left">
          <h2 className="font-serif text-2xl">{form.name}</h2>
          <p className="text-white/60 text-sm">{form.email}</p>
          <span className="inline-block mt-2 rounded-full border border-gold/40 px-3 py-1 text-xs text-gold">{form.role}</span>
        </div>
      </div>

      <div className="rounded-2xl bg-background border border-border p-5 space-y-4">
        <h3 className="font-serif text-lg text-navy">Profile Information</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <FormField label="Full Name"><input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className={inputCls} /></FormField>
          <FormField label="Email"><input type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} className={inputCls} /></FormField>
          <FormField label="Phone"><input value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} className={inputCls} /></FormField>
          <FormField label="Role"><input value={form.role} readOnly className={inputCls + " opacity-60 cursor-not-allowed"} /></FormField>
          <div className="sm:col-span-2">
            <FormField label="Bio">
              <textarea value={form.bio} onChange={(e) => setForm((f) => ({ ...f, bio: e.target.value }))} className={textareaCls} rows={3} />
            </FormField>
          </div>
        </div>
        <button onClick={save} className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${saved ? "bg-emerald-100 text-emerald-700" : "bg-gradient-gold text-navy shadow-gold hover:scale-[1.02]"}`}>
          <Save className="h-4 w-4" />{saved ? "Saved ✓" : "Save Profile"}
        </button>
      </div>

      <div className="rounded-2xl bg-background border border-border p-5 space-y-4">
        <h3 className="font-serif text-lg text-navy">Change Password</h3>
        <FormField label="Current Password"><input type="password" value={form.currentPassword} onChange={(e) => setForm((f) => ({ ...f, currentPassword: e.target.value }))} className={inputCls} placeholder="••••••••" /></FormField>
        <div className="grid sm:grid-cols-2 gap-4">
          <FormField label="New Password"><input type="password" value={form.newPassword} onChange={(e) => setForm((f) => ({ ...f, newPassword: e.target.value }))} className={inputCls} placeholder="••••••••" /></FormField>
          <FormField label="Confirm Password"><input type="password" value={form.confirmPassword} onChange={(e) => setForm((f) => ({ ...f, confirmPassword: e.target.value }))} className={inputCls} placeholder="••••••••" /></FormField>
        </div>
        <button onClick={changePassword} className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy/90 transition-colors">Update Password</button>
      </div>
    </div>
  );
}
