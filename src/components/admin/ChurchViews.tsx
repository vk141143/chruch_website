import { useState } from "react";
import { Plus, Trash2, Pin } from "lucide-react";
import { ADMIN_PRAYERS, ADMIN_POSTS, ADMIN_ANNOUNCEMENTS, type AdminPrayer, type AdminPost, type AdminAnnouncement } from "./adminData";
import { DataTable, Badge, Modal, ConfirmDialog, PageHeader, SearchBar, FormField, inputCls, selectCls, textareaCls, ActionBtn, toast } from "./AdminUI";

// ── Prayer Requests ─────────────────────────────────────────────────────────
export function PrayerAdminView() {
  const [prayers, setPrayers] = useState<AdminPrayer[]>(ADMIN_PRAYERS);
  const [search, setSearch] = useState("");
  const [filterPrivacy, setFilterPrivacy] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [confirm, setConfirm] = useState<{ open: boolean; id: string }>({ open: false, id: "" });

  const filtered = prayers.filter((p) => {
    const q = search.toLowerCase();
    return (p.title.toLowerCase().includes(q) || p.author.toLowerCase().includes(q)) &&
      (filterPrivacy === "All" || p.privacy === filterPrivacy) &&
      (filterStatus === "All" || p.status === filterStatus);
  });

  function updateStatus(id: string, status: AdminPrayer["status"]) {
    setPrayers((p) => p.map((x) => x.id === id ? { ...x, status } : x));
    toast(`Prayer request ${status.toLowerCase()}.`);
  }
  function markAnswered(id: string) {
    setPrayers((p) => p.map((x) => x.id === id ? { ...x, answered: true } : x));
    toast("Marked as answered! 🙏");
  }

  const cols = [
    { key: "title", label: "Prayer Request", render: (p: AdminPrayer) => (
      <div className="max-w-xs">
        <p className="font-medium text-navy text-sm">{p.title}</p>
        <p className="text-xs text-muted-foreground mt-0.5 truncate">{p.detail}</p>
        <p className="text-xs text-muted-foreground mt-0.5">By {p.author} · {p.createdAt}</p>
      </div>
    )},
    { key: "category", label: "Category", render: (p: AdminPrayer) => <span className="text-xs text-muted-foreground">{p.category}</span> },
    { key: "privacy", label: "Privacy", render: (p: AdminPrayer) => <Badge label={p.privacy} /> },
    { key: "prayerCount", label: "Prayers", render: (p: AdminPrayer) => <span className="font-medium text-navy">🙏 {p.prayerCount}</span> },
    { key: "answered", label: "Answered", render: (p: AdminPrayer) => p.answered ? <span className="text-emerald-600 font-semibold text-xs">✓ Yes</span> : <span className="text-muted-foreground text-xs">Pending</span> },
    { key: "status", label: "Status", render: (p: AdminPrayer) => <Badge label={p.status} /> },
  ];

  return (
    <div className="p-4 md:p-6 max-w-[1400px] mx-auto">
      <PageHeader title="Prayer Requests" desc={`${prayers.length} requests`} />
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="flex-1"><SearchBar value={search} onChange={setSearch} placeholder="Search requests..." /></div>
        <select value={filterPrivacy} onChange={(e) => setFilterPrivacy(e.target.value)} className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-navy focus:outline-none">
          {["All", "Public", "Private"].map((s) => <option key={s}>{s}</option>)}
        </select>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-navy focus:outline-none">
          {["All", "Pending", "Approved", "Hidden"].map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <DataTable cols={cols} rows={filtered}
        actions={(p) => (
          <div className="flex justify-end gap-1.5 flex-wrap">
            {p.status === "Pending" && <ActionBtn label="Approve" onClick={() => updateStatus(p.id, "Approved")} variant="success" />}
            {p.status === "Approved" && <ActionBtn label="Hide" onClick={() => updateStatus(p.id, "Hidden")} variant="default" />}
            {p.status === "Hidden" && <ActionBtn label="Restore" onClick={() => updateStatus(p.id, "Approved")} variant="ghost" />}
            {!p.answered && <ActionBtn label="Answered ✓" onClick={() => markAnswered(p.id)} variant="success" />}
            <button onClick={() => setConfirm({ open: true, id: p.id })} className="grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-red-600 hover:border-red-200 transition-colors"><Trash2 className="h-3.5 w-3.5" /></button>
          </div>
        )}
      />
      <ConfirmDialog open={confirm.open} onClose={() => setConfirm((p) => ({ ...p, open: false }))} onConfirm={() => { setPrayers((p) => p.filter((x) => x.id !== confirm.id)); toast("Request deleted.", "error"); }} title="Delete Prayer Request" message="This prayer request will be permanently removed." danger />
    </div>
  );
}

// ── Community Posts ─────────────────────────────────────────────────────────
export function CommunityAdminView() {
  const [posts, setPosts] = useState<AdminPost[]>(ADMIN_POSTS);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [confirm, setConfirm] = useState<{ open: boolean; id: string }>({ open: false, id: "" });

  const filtered = posts.filter((p) => {
    const q = search.toLowerCase();
    return (p.content.toLowerCase().includes(q) || p.author.toLowerCase().includes(q)) &&
      (filterStatus === "All" || p.status === filterStatus);
  });

  function updateStatus(id: string, status: AdminPost["status"]) {
    setPosts((p) => p.map((x) => x.id === id ? { ...x, status } : x));
    toast(`Post ${status.toLowerCase()}.`);
  }

  const cols = [
    { key: "author", label: "Author", render: (p: AdminPost) => (
      <div className="flex items-center gap-2">
        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-gold text-navy font-bold text-xs">{p.avatar}</div>
        <div><p className="font-medium text-navy text-sm">{p.author}</p><p className="text-xs text-muted-foreground">{p.createdAt}</p></div>
      </div>
    )},
    { key: "content", label: "Content", render: (p: AdminPost) => <p className="text-sm text-navy max-w-xs truncate">{p.content}</p> },
    { key: "type", label: "Type", render: (p: AdminPost) => <span className="text-xs text-muted-foreground capitalize">{p.type}</span> },
    { key: "likes", label: "Engagement", render: (p: AdminPost) => <span className="text-xs text-muted-foreground">❤️ {p.likes} · 💬 {p.comments}</span> },
    { key: "reported", label: "Reported", render: (p: AdminPost) => p.reported ? <span className="text-red-600 font-semibold text-xs">⚠ Flagged</span> : <span className="text-muted-foreground text-xs">Clean</span> },
    { key: "status", label: "Status", render: (p: AdminPost) => <Badge label={p.status} /> },
  ];

  return (
    <div className="p-4 md:p-6 max-w-[1400px] mx-auto">
      <PageHeader title="Community Posts" desc={`${posts.filter((p) => p.status === "Pending").length} pending approval`} />
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="flex-1"><SearchBar value={search} onChange={setSearch} placeholder="Search posts or authors..." /></div>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-navy focus:outline-none">
          {["All", "Pending", "Approved", "Hidden"].map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <DataTable cols={cols} rows={filtered}
        actions={(p) => (
          <div className="flex justify-end gap-1.5 flex-wrap">
            {p.status === "Pending" && <ActionBtn label="Approve" onClick={() => updateStatus(p.id, "Approved")} variant="success" />}
            {p.status === "Approved" && <ActionBtn label="Hide" onClick={() => updateStatus(p.id, "Hidden")} variant="default" />}
            {p.status === "Hidden" && <ActionBtn label="Restore" onClick={() => updateStatus(p.id, "Approved")} variant="ghost" />}
            {p.reported && <ActionBtn label="Dismiss Report" onClick={() => { setPosts((prev) => prev.map((x) => x.id === p.id ? { ...x, reported: false } : x)); toast("Report dismissed."); }} variant="ghost" />}
            <button onClick={() => setConfirm({ open: true, id: p.id })} className="grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-red-600 hover:border-red-200 transition-colors"><Trash2 className="h-3.5 w-3.5" /></button>
          </div>
        )}
      />
      <ConfirmDialog open={confirm.open} onClose={() => setConfirm((p) => ({ ...p, open: false }))} onConfirm={() => { setPosts((p) => p.filter((x) => x.id !== confirm.id)); toast("Post deleted.", "error"); }} title="Delete Post" message="This community post will be permanently removed." danger />
    </div>
  );
}

// ── Announcements ───────────────────────────────────────────────────────────
const BLANK_ANN: Omit<AdminAnnouncement, "id"> = { title: "", description: "", category: "Church News", pinned: false, status: "Draft", publishDate: "", image: "📢" };
const ANN_CATS = ["Church News", "Bible Academy", "Events", "Prayer", "Missions", "Giving"];

export function AnnouncementsView() {
  const [anns, setAnns] = useState<AdminAnnouncement[]>(ADMIN_ANNOUNCEMENTS);
  const [modal, setModal] = useState<{ open: boolean; mode: "add" | "edit"; item?: AdminAnnouncement }>({ open: false, mode: "add" });
  const [confirm, setConfirm] = useState<{ open: boolean; id: string }>({ open: false, id: "" });
  const [form, setForm] = useState<Omit<AdminAnnouncement, "id">>(BLANK_ANN);

  function openAdd() { setForm(BLANK_ANN); setModal({ open: true, mode: "add" }); }
  function openEdit(a: AdminAnnouncement) { setForm(a); setModal({ open: true, mode: "edit", item: a }); }
  function save() {
    if (!form.title.trim()) { toast("Title required.", "error"); return; }
    if (modal.mode === "add") { setAnns((p) => [...p, { ...form, id: `an${Date.now()}` }]); toast("Announcement created."); }
    else if (modal.item) { setAnns((p) => p.map((a) => a.id === modal.item!.id ? { ...modal.item!, ...form } : a)); toast("Announcement updated."); }
    setModal({ open: false, mode: "add" });
  }

  return (
    <div className="p-4 md:p-6 max-w-[1400px] mx-auto">
      <PageHeader title="Announcements" desc={`${anns.length} announcements`}
        action={<button onClick={openAdd} className="flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform"><Plus className="h-3.5 w-3.5" /> New Announcement</button>}
      />
      <div className="grid md:grid-cols-2 gap-4">
        {anns.map((a) => (
          <div key={a.id} className={`rounded-2xl bg-background border p-5 hover:shadow-md transition-shadow ${a.pinned ? "border-gold/40" : "border-border"}`}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{a.image}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-navy text-sm">{a.title}</p>
                    {a.pinned && <Pin className="h-3.5 w-3.5 text-gold" />}
                  </div>
                  <p className="text-xs text-muted-foreground">{a.category} · {a.publishDate}</p>
                </div>
              </div>
              <Badge label={a.status} />
            </div>
            <p className="text-xs text-muted-foreground line-clamp-2">{a.description}</p>
            <div className="flex gap-2 mt-4 pt-3 border-t border-border">
              <ActionBtn label="Edit" onClick={() => openEdit(a)} variant="ghost" />
              <ActionBtn label={a.pinned ? "Unpin" : "Pin"} onClick={() => { setAnns((p) => p.map((x) => x.id === a.id ? { ...x, pinned: !x.pinned } : x)); toast(a.pinned ? "Unpinned." : "Pinned to dashboard."); }} variant="default" />
              <ActionBtn label={a.status === "Published" ? "Unpublish" : "Publish"} onClick={() => { setAnns((p) => p.map((x) => x.id === a.id ? { ...x, status: x.status === "Published" ? "Draft" : "Published" } : x)); toast("Status updated."); }} variant="success" />
              <button onClick={() => setConfirm({ open: true, id: a.id })} className="grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-red-600 hover:border-red-200 transition-colors ml-auto"><Trash2 className="h-3.5 w-3.5" /></button>
            </div>
          </div>
        ))}
      </div>
      <Modal open={modal.open} onClose={() => setModal({ open: false, mode: "add" })} title={modal.mode === "add" ? "Create Announcement" : "Edit Announcement"} size="md">
        <div className="space-y-4">
          <FormField label="Title" required><input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} className={inputCls} placeholder="Announcement title" /></FormField>
          <FormField label="Description"><textarea value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} className={textareaCls} rows={3} placeholder="Announcement body..." /></FormField>
          <div className="grid sm:grid-cols-2 gap-4">
            <FormField label="Category"><select value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))} className={selectCls}>{ANN_CATS.map((c) => <option key={c}>{c}</option>)}</select></FormField>
            <FormField label="Status"><select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as AdminAnnouncement["status"] }))} className={selectCls}><option>Draft</option><option>Scheduled</option><option>Published</option></select></FormField>
            <FormField label="Publish Date"><input type="date" value={form.publishDate} onChange={(e) => setForm((f) => ({ ...f, publishDate: e.target.value }))} className={inputCls} /></FormField>
            <FormField label="Pin to Dashboard">
              <div className="flex items-center gap-3 mt-2">
                <button onClick={() => setForm((f) => ({ ...f, pinned: !f.pinned }))} className={`relative inline-flex h-5 w-9 rounded-full transition-colors ${form.pinned ? "bg-gradient-gold" : "bg-border"}`}>
                  <span className={`mt-0.5 ml-0.5 inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${form.pinned ? "translate-x-4" : "translate-x-0"}`} />
                </button>
                <span className="text-xs text-muted-foreground">{form.pinned ? "Pinned" : "Not pinned"}</span>
              </div>
            </FormField>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button onClick={() => setModal({ open: false, mode: "add" })} className="rounded-full border border-border px-5 py-2 text-sm font-medium text-navy hover:bg-cream">Cancel</button>
          <button onClick={save} className="rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-navy shadow-gold">{modal.mode === "add" ? "Create" : "Save Changes"}</button>
        </div>
      </Modal>
      <ConfirmDialog open={confirm.open} onClose={() => setConfirm((p) => ({ ...p, open: false }))} onConfirm={() => { setAnns((p) => p.filter((a) => a.id !== confirm.id)); toast("Announcement deleted.", "error"); }} title="Delete Announcement" message="This announcement will be permanently deleted." danger />
    </div>
  );
}
