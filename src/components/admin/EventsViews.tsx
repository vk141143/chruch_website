import { useState } from "react";
import { Plus, Trash2, Download, Bell } from "lucide-react";
import { ADMIN_EVENTS, ADMIN_MEMBERS, type AdminEvent } from "./adminData";
import { DataTable, Badge, Modal, ConfirmDialog, PageHeader, SearchBar, FormField, inputCls, selectCls, textareaCls, ActionBtn, toast } from "./AdminUI";

const EVENT_CATS = ["Worship", "Conference", "Bible Study", "Youth", "Prayer", "Seminar", "Outreach"];
const EVENT_EMOJIS = ["⛪", "🌟", "📖", "🎉", "🙏", "💑", "✝️", "🤝"];
const BLANK_EVENT: Omit<AdminEvent, "id"> = { title: "", date: "", time: "", location: "", category: "Worship", capacity: 100, registered: 0, status: "Upcoming", image: "⛪" };

// ── Events Management ───────────────────────────────────────────────────────
export function EventsAdminView() {
  const [events, setEvents] = useState<AdminEvent[]>(ADMIN_EVENTS);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [modal, setModal] = useState<{ open: boolean; mode: "add" | "edit"; event?: AdminEvent }>({ open: false, mode: "add" });
  const [confirm, setConfirm] = useState<{ open: boolean; id: string }>({ open: false, id: "" });
  const [form, setForm] = useState<Omit<AdminEvent, "id">>(BLANK_EVENT);

  const filtered = events.filter((e) => {
    const q = search.toLowerCase();
    return (e.title.toLowerCase().includes(q) || e.location.toLowerCase().includes(q)) &&
      (filterStatus === "All" || e.status === filterStatus);
  });

  function openAdd() { setForm(BLANK_EVENT); setModal({ open: true, mode: "add" }); }
  function openEdit(e: AdminEvent) { setForm(e); setModal({ open: true, mode: "edit", event: e }); }
  function save() {
    if (!form.title.trim() || !form.date) { toast("Title and date required.", "error"); return; }
    if (modal.mode === "add") { setEvents((p) => [...p, { ...form, id: `e${Date.now()}` }]); toast("Event created."); }
    else if (modal.event) { setEvents((p) => p.map((e) => e.id === modal.event!.id ? { ...modal.event!, ...form } : e)); toast("Event updated."); }
    setModal({ open: false, mode: "add" });
  }

  const cols = [
    { key: "title", label: "Event", render: (e: AdminEvent) => (
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-gold shadow-gold text-xl">{e.image}</div>
        <div><p className="font-medium text-navy text-sm">{e.title}</p><p className="text-xs text-muted-foreground">{e.location}</p></div>
      </div>
    )},
    { key: "date", label: "Date", render: (e: AdminEvent) => <span className="text-xs text-muted-foreground">{e.date} · {e.time}</span> },
    { key: "registered", label: "Registrations", render: (e: AdminEvent) => (
      <div className="flex items-center gap-2 min-w-[100px]">
        <div className="flex-1 h-1.5 rounded-full bg-cream overflow-hidden">
          <div className="h-full bg-gradient-gold" style={{ width: `${Math.round((e.registered / e.capacity) * 100)}%` }} />
        </div>
        <span className="text-xs text-muted-foreground shrink-0">{e.registered}/{e.capacity}</span>
      </div>
    )},
    { key: "category", label: "Type", render: (e: AdminEvent) => <span className="text-xs text-muted-foreground">{e.category}</span> },
    { key: "status", label: "Status", render: (e: AdminEvent) => <Badge label={e.status} /> },
  ];

  return (
    <div className="p-4 md:p-6 max-w-[1400px] mx-auto">
      <PageHeader title="Events" desc={`${events.length} events`}
        action={
          <div className="flex gap-2">
            <button onClick={() => toast("Attendee list exported.")} className="flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-medium text-navy hover:bg-cream"><Download className="h-3.5 w-3.5" /> Export</button>
            <button onClick={openAdd} className="flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform"><Plus className="h-3.5 w-3.5" /> New Event</button>
          </div>
        }
      />
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="flex-1"><SearchBar value={search} onChange={setSearch} placeholder="Search events..." /></div>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-navy focus:outline-none">
          {["All", "Upcoming", "Ongoing", "Past", "Cancelled"].map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <DataTable cols={cols} rows={filtered}
        actions={(e) => (
          <div className="flex justify-end gap-1.5">
            <ActionBtn label="Edit" onClick={() => openEdit(e)} variant="ghost" />
            <button onClick={() => { toast(`Reminder sent for "${e.title}".`); }} className="grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-blue-600 hover:border-blue-200 transition-colors" title="Send Reminder"><Bell className="h-3.5 w-3.5" /></button>
            <button onClick={() => setConfirm({ open: true, id: e.id })} className="grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-red-600 hover:border-red-200 transition-colors"><Trash2 className="h-3.5 w-3.5" /></button>
          </div>
        )}
      />
      <Modal open={modal.open} onClose={() => setModal({ open: false, mode: "add" })} title={modal.mode === "add" ? "Create Event" : "Edit Event"} size="lg">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2"><FormField label="Event Title" required><input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} className={inputCls} placeholder="Event title" /></FormField></div>
          <FormField label="Date" required><input type="date" value={form.date} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} className={inputCls} /></FormField>
          <FormField label="Time"><input value={form.time} onChange={(e) => setForm((f) => ({ ...f, time: e.target.value }))} className={inputCls} placeholder="e.g. 9:00 AM" /></FormField>
          <FormField label="Location"><input value={form.location} onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))} className={inputCls} placeholder="Venue name" /></FormField>
          <FormField label="Category"><select value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))} className={selectCls}>{EVENT_CATS.map((c) => <option key={c}>{c}</option>)}</select></FormField>
          <FormField label="Capacity"><input type="number" value={form.capacity} onChange={(e) => setForm((f) => ({ ...f, capacity: +e.target.value }))} className={inputCls} /></FormField>
          <FormField label="Status"><select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as AdminEvent["status"] }))} className={selectCls}><option>Upcoming</option><option>Ongoing</option><option>Past</option><option>Cancelled</option></select></FormField>
          <FormField label="Image Emoji"><div className="flex gap-2 flex-wrap">{EVENT_EMOJIS.map((e) => <button key={e} onClick={() => setForm((f) => ({ ...f, image: e }))} className={`h-9 w-9 rounded-xl text-lg flex items-center justify-center ${form.image === e ? "bg-gradient-gold shadow-gold" : "bg-cream hover:bg-muted"}`}>{e}</button>)}</div></FormField>
          <div className="sm:col-span-2"><FormField label="Description"><textarea className={textareaCls} rows={2} placeholder="Event description..." /></FormField></div>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button onClick={() => setModal({ open: false, mode: "add" })} className="rounded-full border border-border px-5 py-2 text-sm font-medium text-navy hover:bg-cream">Cancel</button>
          <button onClick={save} className="rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-navy shadow-gold">{modal.mode === "add" ? "Create Event" : "Save Changes"}</button>
        </div>
      </Modal>
      <ConfirmDialog open={confirm.open} onClose={() => setConfirm((p) => ({ ...p, open: false }))} onConfirm={() => { setEvents((p) => p.filter((e) => e.id !== confirm.id)); toast("Event deleted.", "error"); }} title="Delete Event" message="This event and all registrations will be deleted." danger />
    </div>
  );
}

// ── Event Registrations ─────────────────────────────────────────────────────
const REGISTRATIONS = ADMIN_MEMBERS.slice(0, 6).flatMap((m, i) => ([
  { id: `reg${i}a`, member: m.name, email: m.email, event: ADMIN_EVENTS[i % ADMIN_EVENTS.length].title, date: `Jun ${18 + i}, 2026`, status: i % 4 === 2 ? "Pending" : "Confirmed", attended: i % 3 === 0 },
]));

export function RegistrationsView() {
  const [regs, setRegs] = useState(REGISTRATIONS);
  const [search, setSearch] = useState("");

  const filtered = regs.filter((r) =>
    r.member.toLowerCase().includes(search.toLowerCase()) ||
    r.event.toLowerCase().includes(search.toLowerCase())
  );

  const cols = [
    { key: "member", label: "Member", render: (r: typeof REGISTRATIONS[0]) => (
      <div><p className="font-medium text-navy text-sm">{r.member}</p><p className="text-xs text-muted-foreground">{r.email}</p></div>
    )},
    { key: "event", label: "Event", render: (r: typeof REGISTRATIONS[0]) => <span className="text-sm text-navy">{r.event}</span> },
    { key: "date", label: "Registered", render: (r: typeof REGISTRATIONS[0]) => <span className="text-xs text-muted-foreground">{r.date}</span> },
    { key: "status", label: "Status", render: (r: typeof REGISTRATIONS[0]) => <Badge label={r.status} /> },
    { key: "attended", label: "Attended", render: (r: typeof REGISTRATIONS[0]) => (
      <span className={`text-xs font-semibold ${r.attended ? "text-emerald-600" : "text-muted-foreground"}`}>{r.attended ? "✓ Yes" : "—"}</span>
    )},
  ];

  return (
    <div className="p-4 md:p-6 max-w-[1400px] mx-auto">
      <PageHeader title="Event Registrations" desc={`${regs.length} registrations`}
        action={<button onClick={() => toast("Attendee list exported — CSV ready.")} className="flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-medium text-navy hover:bg-cream"><Download className="h-3.5 w-3.5" /> Export</button>}
      />
      <div className="mb-5"><SearchBar value={search} onChange={setSearch} placeholder="Search by member or event..." /></div>
      <DataTable cols={cols} rows={filtered}
        actions={(r) => (
          <div className="flex justify-end gap-1.5">
            {!r.attended && <ActionBtn label="Mark Present" onClick={() => { setRegs((p) => p.map((x) => x.id === r.id ? { ...x, attended: true, status: "Confirmed" } : x)); toast("Attendance marked."); }} variant="success" />}
            {r.status === "Pending" && <ActionBtn label="Approve" onClick={() => { setRegs((p) => p.map((x) => x.id === r.id ? { ...x, status: "Confirmed" } : x)); toast("Registration approved."); }} variant="default" />}
            <ActionBtn label="Cancel" onClick={() => { setRegs((p) => p.filter((x) => x.id !== r.id)); toast("Registration cancelled.", "error"); }} variant="danger" />
          </div>
        )}
      />
    </div>
  );
}
