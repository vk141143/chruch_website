import { useState } from "react";
import { Plus, Edit2, Trash2, UserX, UserCheck, Download } from "lucide-react";
import { ADMIN_MEMBERS, type AdminMember, type MemberRole, type MemberStatus } from "./adminData";
import { DataTable, Badge, Modal, ConfirmDialog, PageHeader, SearchBar, FormField, inputCls, selectCls, ActionBtn, toast } from "./AdminUI";

const ROLES: MemberRole[] = ["Member", "Premium Member", "Pastor", "Moderator", "Admin"];
const PLANS = ["All", "Free", "Premium", "Annual"];
const STATUSES: MemberStatus[] = ["Active", "Inactive", "Suspended"];

const BLANK: Omit<AdminMember, "id"> = { name: "", email: "", phone: "", role: "Member", plan: "Free", status: "Active", joined: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }), location: "", avatar: "" };

export function MembersView() {
  const [members, setMembers] = useState<AdminMember[]>(ADMIN_MEMBERS);
  const [search, setSearch] = useState("");
  const [filterPlan, setFilterPlan] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [modal, setModal] = useState<{ open: boolean; mode: "add" | "edit" | "view"; member?: AdminMember }>({ open: false, mode: "add" });
  const [confirm, setConfirm] = useState<{ open: boolean; id: string; action: "delete" | "suspend" | "activate" }>({ open: false, id: "", action: "delete" });
  const [form, setForm] = useState<Omit<AdminMember, "id">>(BLANK);

  const filtered = members.filter((m) => {
    const q = search.toLowerCase();
    const matchSearch = m.name.toLowerCase().includes(q) || m.email.toLowerCase().includes(q);
    const matchPlan = filterPlan === "All" || m.plan === filterPlan;
    const matchStatus = filterStatus === "All" || m.status === filterStatus;
    return matchSearch && matchPlan && matchStatus;
  });

  function openAdd() { setForm(BLANK); setModal({ open: true, mode: "add" }); }
  function openEdit(m: AdminMember) { setForm(m); setModal({ open: true, mode: "edit", member: m }); }
  function openView(m: AdminMember) { setModal({ open: true, mode: "view", member: m }); }

  function saveForm() {
    if (!form.name.trim() || !form.email.trim()) { toast("Name and email are required.", "error"); return; }
    if (modal.mode === "add") {
      const avatar = form.name.split(" ").map((n) => n[0]).join("").toUpperCase();
      setMembers((p) => [...p, { ...form, avatar, id: `m${Date.now()}` }]);
      toast("Member added successfully.");
    } else if (modal.mode === "edit" && modal.member) {
      setMembers((p) => p.map((m) => m.id === modal.member!.id ? { ...modal.member!, ...form } : m));
      toast("Member updated.");
    }
    setModal({ open: false, mode: "add" });
  }

  function handleConfirm() {
    if (confirm.action === "delete") {
      setMembers((p) => p.filter((m) => m.id !== confirm.id));
      toast("Member deleted.", "error");
    } else {
      const newStatus: MemberStatus = confirm.action === "suspend" ? "Suspended" : "Active";
      setMembers((p) => p.map((m) => m.id === confirm.id ? { ...m, status: newStatus } : m));
      toast(confirm.action === "suspend" ? "Member suspended." : "Member activated.");
    }
  }

  const cols = [
    {
      key: "name", label: "Member",
      render: (m: AdminMember) => (
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-gold text-navy font-bold text-xs shadow-gold">{m.avatar}</div>
          <div>
            <button onClick={() => openView(m)} className="font-medium text-navy hover:text-gold transition-colors text-sm">{m.name}</button>
            <p className="text-xs text-muted-foreground">{m.email}</p>
          </div>
        </div>
      ),
    },
    { key: "role", label: "Role", render: (m: AdminMember) => <Badge label={m.role} /> },
    { key: "plan", label: "Plan", render: (m: AdminMember) => <Badge label={m.plan} /> },
    { key: "joined", label: "Joined", render: (m: AdminMember) => <span className="text-xs text-muted-foreground">{m.joined}</span> },
    { key: "status", label: "Status", render: (m: AdminMember) => <Badge label={m.status} /> },
  ];

  return (
    <div className="p-4 md:p-6 max-w-[1400px] mx-auto">
      <PageHeader
        title="Members"
        desc={`${members.length} total members`}
        action={
          <div className="flex gap-2">
            <button onClick={() => toast("Export started — CSV ready.")} className="flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-medium text-navy hover:bg-cream transition-colors">
              <Download className="h-3.5 w-3.5" /> Export
            </button>
            <button onClick={openAdd} className="flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform">
              <Plus className="h-3.5 w-3.5" /> Add Member
            </button>
          </div>
        }
      />

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="flex-1"><SearchBar value={search} onChange={setSearch} placeholder="Search members..." /></div>
        <select value={filterPlan} onChange={(e) => setFilterPlan(e.target.value)} className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-navy focus:outline-none">
          {PLANS.map((p) => <option key={p}>{p}</option>)}
        </select>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-navy focus:outline-none">
          {["All", ...STATUSES].map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>

      <DataTable
        cols={cols}
        rows={filtered}
        actions={(m) => (
          <div className="flex items-center justify-end gap-1.5">
            <ActionBtn label="Edit" onClick={() => openEdit(m)} variant="ghost" />
            {m.status === "Suspended"
              ? <ActionBtn label="Activate" onClick={() => setConfirm({ open: true, id: m.id, action: "activate" })} variant="success" />
              : <ActionBtn label="Suspend" onClick={() => setConfirm({ open: true, id: m.id, action: "suspend" })} variant="default" />
            }
            <button onClick={() => setConfirm({ open: true, id: m.id, action: "delete" })} className="grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-red-600 hover:border-red-200 transition-colors">
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      />

      {/* Add/Edit Modal */}
      <Modal open={modal.open && modal.mode !== "view"} onClose={() => setModal({ open: false, mode: "add" })} title={modal.mode === "add" ? "Add New Member" : "Edit Member"}>
        <div className="grid sm:grid-cols-2 gap-4">
          <FormField label="Full Name" required><input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className={inputCls} placeholder="Full name" /></FormField>
          <FormField label="Email" required><input value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} className={inputCls} placeholder="email@example.com" type="email" /></FormField>
          <FormField label="Phone"><input value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} className={inputCls} placeholder="+1 555-0000" /></FormField>
          <FormField label="Location"><input value={form.location} onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))} className={inputCls} placeholder="City, Country" /></FormField>
          <FormField label="Role">
            <select value={form.role} onChange={(e) => setForm((f) => ({ ...f, role: e.target.value as MemberRole }))} className={selectCls}>
              {ROLES.map((r) => <option key={r}>{r}</option>)}
            </select>
          </FormField>
          <FormField label="Plan">
            <select value={form.plan} onChange={(e) => setForm((f) => ({ ...f, plan: e.target.value as AdminMember["plan"] }))} className={selectCls}>
              {["Free", "Premium", "Annual"].map((p) => <option key={p}>{p}</option>)}
            </select>
          </FormField>
          <FormField label="Status">
            <select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as MemberStatus }))} className={selectCls}>
              {STATUSES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </FormField>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button onClick={() => setModal({ open: false, mode: "add" })} className="rounded-full border border-border px-5 py-2 text-sm font-medium text-navy hover:bg-cream">Cancel</button>
          <button onClick={saveForm} className="rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-navy shadow-gold">
            {modal.mode === "add" ? "Add Member" : "Save Changes"}
          </button>
        </div>
      </Modal>

      {/* View Profile Modal */}
      {modal.member && (
        <Modal open={modal.open && modal.mode === "view"} onClose={() => setModal({ open: false, mode: "add" })} title="Member Profile">
          <div className="flex flex-col items-center gap-3 pb-5 mb-5 border-b border-border">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-gold text-navy font-bold text-xl shadow-gold">{modal.member.avatar}</div>
            <div className="text-center">
              <h3 className="font-serif text-xl text-navy">{modal.member.name}</h3>
              <p className="text-sm text-muted-foreground">{modal.member.email}</p>
              <div className="flex gap-2 justify-center mt-2">
                <Badge label={modal.member.role} /><Badge label={modal.member.plan} /><Badge label={modal.member.status} />
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            {[["Phone", modal.member.phone], ["Location", modal.member.location], ["Joined", modal.member.joined]].map(([k, v]) => (
              <div key={k} className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">{k}</span><span className="font-medium text-navy">{v}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-2 justify-end mt-5">
            <button onClick={() => { setModal({ open: false, mode: "add" }); setTimeout(() => openEdit(modal.member!), 100); }} className="flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-sm font-medium text-white">
              <Edit2 className="h-3.5 w-3.5" /> Edit
            </button>
            {modal.member.status === "Suspended"
              ? <button onClick={() => { setModal({ open: false, mode: "add" }); setConfirm({ open: true, id: modal.member!.id, action: "activate" }); }} className="flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white"><UserCheck className="h-3.5 w-3.5" /> Activate</button>
              : <button onClick={() => { setModal({ open: false, mode: "add" }); setConfirm({ open: true, id: modal.member!.id, action: "suspend" }); }} className="flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-navy"><UserX className="h-3.5 w-3.5" /> Suspend</button>
            }
          </div>
        </Modal>
      )}

      <ConfirmDialog
        open={confirm.open}
        onClose={() => setConfirm((p) => ({ ...p, open: false }))}
        onConfirm={handleConfirm}
        danger={confirm.action === "delete"}
        title={confirm.action === "delete" ? "Delete Member" : confirm.action === "suspend" ? "Suspend Member" : "Activate Member"}
        message={confirm.action === "delete" ? "This will permanently delete the member and all their data." : confirm.action === "suspend" ? "The member will lose access to all features." : "The member will regain full access."}
      />
    </div>
  );
}
