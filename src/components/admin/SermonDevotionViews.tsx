import { useState } from "react";
import { Plus, Trash2, Sun } from "lucide-react";
import { ADMIN_SERMONS, ADMIN_DEVOTIONS, type AdminSermon, type AdminDevotionItem } from "./adminData";
import { DataTable, Badge, Modal, ConfirmDialog, PageHeader, SearchBar, FormField, inputCls, selectCls, textareaCls, ActionBtn, toast } from "./AdminUI";

// ── Sermons ────────────────────────────────────────────────────────────────
const BLANK_SERMON: Omit<AdminSermon, "id"> = { title: "", speaker: "", bibleRef: "", category: "Grace", date: "", duration: "", views: 0, status: "Draft", thumbnail: "🎙️" };
const SERMON_CATS = ["Kingdom of God", "Grace", "Faith", "Prayer", "Redemption", "Worship", "Prophecy", "Evangelism"];
const SERMON_EMOJIS = ["🎙️", "🕊️", "⛰️", "🏛️", "💛", "✝️", "📖", "🙏"];

export function SermonsView() {
  const [sermons, setSermons] = useState<AdminSermon[]>(ADMIN_SERMONS);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState<{ open: boolean; mode: "add" | "edit"; sermon?: AdminSermon }>({ open: false, mode: "add" });
  const [confirm, setConfirm] = useState<{ open: boolean; id: string }>({ open: false, id: "" });
  const [form, setForm] = useState<Omit<AdminSermon, "id">>(BLANK_SERMON);

  const filtered = sermons.filter((s) =>
    s.title.toLowerCase().includes(search.toLowerCase()) ||
    s.speaker.toLowerCase().includes(search.toLowerCase())
  );

  function openAdd() { setForm(BLANK_SERMON); setModal({ open: true, mode: "add" }); }
  function openEdit(s: AdminSermon) { setForm(s); setModal({ open: true, mode: "edit", sermon: s }); }
  function save() {
    if (!form.title.trim() || !form.speaker.trim()) { toast("Title and speaker required.", "error"); return; }
    if (modal.mode === "add") { setSermons((p) => [...p, { ...form, id: `s${Date.now()}` }]); toast("Sermon created."); }
    else if (modal.sermon) { setSermons((p) => p.map((s) => s.id === modal.sermon!.id ? { ...modal.sermon!, ...form } : s)); toast("Sermon updated."); }
    setModal({ open: false, mode: "add" });
  }

  const cols = [
    { key: "title", label: "Sermon", render: (s: AdminSermon) => (
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy text-xl">{s.thumbnail}</div>
        <div><p className="font-medium text-navy text-sm">{s.title}</p><p className="text-xs text-muted-foreground">{s.speaker}</p></div>
      </div>
    )},
    { key: "bibleRef", label: "Reference", render: (s: AdminSermon) => <span className="text-xs font-medium text-gold">{s.bibleRef}</span> },
    { key: "date", label: "Date", render: (s: AdminSermon) => <span className="text-xs text-muted-foreground">{s.date}</span> },
    { key: "views", label: "Views", render: (s: AdminSermon) => <span className="font-medium text-navy">{s.views.toLocaleString()}</span> },
    { key: "status", label: "Status", render: (s: AdminSermon) => <Badge label={s.status} /> },
  ];

  return (
    <div className="p-4 md:p-6 max-w-[1400px] mx-auto">
      <PageHeader title="Sermons" desc={`${sermons.length} sermons`}
        action={<button onClick={openAdd} className="flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform"><Plus className="h-3.5 w-3.5" /> New Sermon</button>}
      />
      <div className="mb-5"><SearchBar value={search} onChange={setSearch} placeholder="Search sermons..." /></div>
      <DataTable cols={cols} rows={filtered}
        actions={(s) => (
          <div className="flex justify-end gap-1.5">
            <ActionBtn label="Edit" onClick={() => openEdit(s)} variant="ghost" />
            <ActionBtn label={s.status === "Archived" ? "Restore" : "Archive"}
              onClick={() => { setSermons((p) => p.map((x) => x.id === s.id ? { ...x, status: x.status === "Archived" ? "Published" : "Archived" } : x)); toast("Status updated."); }}
              variant="default" />
            <button onClick={() => setConfirm({ open: true, id: s.id })} className="grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-red-600 hover:border-red-200 transition-colors">
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      />
      <Modal open={modal.open} onClose={() => setModal({ open: false, mode: "add" })} title={modal.mode === "add" ? "Add Sermon" : "Edit Sermon"} size="lg">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2"><FormField label="Sermon Title" required><input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} className={inputCls} placeholder="Sermon title" /></FormField></div>
          <FormField label="Speaker" required><input value={form.speaker} onChange={(e) => setForm((f) => ({ ...f, speaker: e.target.value }))} className={inputCls} placeholder="Pastor name" /></FormField>
          <FormField label="Bible Reference"><input value={form.bibleRef} onChange={(e) => setForm((f) => ({ ...f, bibleRef: e.target.value }))} className={inputCls} placeholder="e.g. John 3:16" /></FormField>
          <FormField label="Category"><select value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))} className={selectCls}>{SERMON_CATS.map((c) => <option key={c}>{c}</option>)}</select></FormField>
          <FormField label="Date"><input type="date" value={form.date} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} className={inputCls} /></FormField>
          <FormField label="Duration"><input value={form.duration} onChange={(e) => setForm((f) => ({ ...f, duration: e.target.value }))} className={inputCls} placeholder="e.g. 52:14" /></FormField>
          <FormField label="Status"><select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as AdminSermon["status"] }))} className={selectCls}><option>Draft</option><option>Published</option><option>Archived</option></select></FormField>
          <FormField label="Thumbnail"><div className="flex gap-2 flex-wrap">{SERMON_EMOJIS.map((e) => <button key={e} onClick={() => setForm((f) => ({ ...f, thumbnail: e }))} className={`h-9 w-9 rounded-xl text-lg flex items-center justify-center ${form.thumbnail === e ? "bg-gradient-gold shadow-gold" : "bg-cream hover:bg-muted"}`}>{e}</button>)}</div></FormField>
          <div className="sm:col-span-2"><FormField label="Video/Audio Upload URL"><input className={inputCls} placeholder="Paste media URL..." /></FormField></div>
          <div className="sm:col-span-2"><FormField label="Notes & Resources"><textarea className={textareaCls} rows={2} placeholder="Sermon notes, resource links..." /></FormField></div>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button onClick={() => setModal({ open: false, mode: "add" })} className="rounded-full border border-border px-5 py-2 text-sm font-medium text-navy hover:bg-cream">Cancel</button>
          <button onClick={save} className="rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-navy shadow-gold">{modal.mode === "add" ? "Add Sermon" : "Save Changes"}</button>
        </div>
      </Modal>
      <ConfirmDialog open={confirm.open} onClose={() => setConfirm((p) => ({ ...p, open: false }))} onConfirm={() => { setSermons((p) => p.filter((s) => s.id !== confirm.id)); toast("Sermon deleted.", "error"); }} title="Delete Sermon" message="This sermon will be permanently deleted." danger />
    </div>
  );
}

// ── Daily Devotions ────────────────────────────────────────────────────────
const BLANK_DEVOTION: Omit<AdminDevotionItem, "id"> = { verse: "", ref: "", message: "", reflection: "", prayer: "", date: "", status: "Draft" };

export function DevotionsView() {
  const [devotions, setDevotions] = useState<AdminDevotionItem[]>(ADMIN_DEVOTIONS);
  const [modal, setModal] = useState<{ open: boolean; mode: "add" | "edit"; item?: AdminDevotionItem }>({ open: false, mode: "add" });
  const [confirm, setConfirm] = useState<{ open: boolean; id: string }>({ open: false, id: "" });
  const [form, setForm] = useState<Omit<AdminDevotionItem, "id">>(BLANK_DEVOTION);

  function openAdd() { setForm(BLANK_DEVOTION); setModal({ open: true, mode: "add" }); }
  function openEdit(d: AdminDevotionItem) { setForm(d); setModal({ open: true, mode: "edit", item: d }); }
  function save() {
    if (!form.verse.trim() || !form.ref.trim()) { toast("Verse and reference required.", "error"); return; }
    if (modal.mode === "add") { setDevotions((p) => [...p, { ...form, id: `dv${Date.now()}` }]); toast("Devotion created."); }
    else if (modal.item) { setDevotions((p) => p.map((d) => d.id === modal.item!.id ? { ...modal.item!, ...form } : d)); toast("Devotion updated."); }
    setModal({ open: false, mode: "add" });
  }

  return (
    <div className="p-4 md:p-6 max-w-[1400px] mx-auto">
      <PageHeader title="Daily Devotions" desc={`${devotions.length} devotions`}
        action={<button onClick={openAdd} className="flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform"><Plus className="h-3.5 w-3.5" /> New Devotion</button>}
      />
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {devotions.map((d) => (
          <div key={d.id} className="rounded-2xl bg-background border border-border p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-gold shadow-gold"><Sun className="h-5 w-5 text-navy" /></div>
              <Badge label={d.status} />
            </div>
            <blockquote className="font-serif text-base text-navy leading-relaxed">"{d.verse}"</blockquote>
            <p className="text-gold font-semibold text-sm">— {d.ref}</p>
            <p className="text-xs text-muted-foreground line-clamp-2">{d.message}</p>
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <span className="text-xs text-muted-foreground">{d.date || "Not scheduled"}</span>
              <div className="flex gap-1.5">
                <ActionBtn label="Edit" onClick={() => openEdit(d)} variant="ghost" />
                <button onClick={() => setConfirm({ open: true, id: d.id })} className="grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-red-600 hover:border-red-200 transition-colors"><Trash2 className="h-3.5 w-3.5" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal open={modal.open} onClose={() => setModal({ open: false, mode: "add" })} title={modal.mode === "add" ? "Create Devotion" : "Edit Devotion"} size="lg">
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <FormField label="Bible Verse" required><input value={form.verse} onChange={(e) => setForm((f) => ({ ...f, verse: e.target.value }))} className={inputCls} placeholder="Verse text..." /></FormField>
            <FormField label="Reference" required><input value={form.ref} onChange={(e) => setForm((f) => ({ ...f, ref: e.target.value }))} className={inputCls} placeholder="e.g. Psalm 46:10" /></FormField>
          </div>
          <FormField label="Devotional Message"><textarea value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} className={textareaCls} rows={3} placeholder="Write the devotional message..." /></FormField>
          <FormField label="Reflection Question"><input value={form.reflection} onChange={(e) => setForm((f) => ({ ...f, reflection: e.target.value }))} className={inputCls} placeholder="What reflection question to ask readers?" /></FormField>
          <FormField label="Prayer of the Day"><textarea value={form.prayer} onChange={(e) => setForm((f) => ({ ...f, prayer: e.target.value }))} className={textareaCls} rows={2} placeholder="Prayer text..." /></FormField>
          <div className="grid sm:grid-cols-2 gap-4">
            <FormField label="Publish Date"><input type="date" value={form.date} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} className={inputCls} /></FormField>
            <FormField label="Status"><select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as AdminDevotionItem["status"] }))} className={selectCls}><option>Draft</option><option>Scheduled</option><option>Published</option></select></FormField>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button onClick={() => setModal({ open: false, mode: "add" })} className="rounded-full border border-border px-5 py-2 text-sm font-medium text-navy hover:bg-cream">Cancel</button>
          <button onClick={save} className="rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-navy shadow-gold">{modal.mode === "add" ? "Create Devotion" : "Save Changes"}</button>
        </div>
      </Modal>
      <ConfirmDialog open={confirm.open} onClose={() => setConfirm((p) => ({ ...p, open: false }))} onConfirm={() => { setDevotions((p) => p.filter((d) => d.id !== confirm.id)); toast("Devotion deleted.", "error"); }} title="Delete Devotion" message="This devotion will be permanently deleted." danger />
    </div>
  );
}
