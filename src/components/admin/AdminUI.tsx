import { useState, useEffect, type ReactNode } from "react";
import { X, AlertTriangle, CheckCircle, Info, XCircle, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

// ── Badge ──────────────────────────────────────────────────────────────────
const BADGE_STYLES: Record<string, string> = {
  Active: "bg-emerald-100 text-emerald-700",
  Inactive: "bg-slate-100 text-slate-500",
  Suspended: "bg-red-100 text-red-700",
  Published: "bg-emerald-100 text-emerald-700",
  Draft: "bg-amber-100 text-amber-700",
  Scheduled: "bg-blue-100 text-blue-700",
  Archived: "bg-slate-100 text-slate-500",
  Upcoming: "bg-blue-100 text-blue-700",
  Ongoing: "bg-emerald-100 text-emerald-700",
  Past: "bg-slate-100 text-slate-500",
  Cancelled: "bg-red-100 text-red-700",
  Successful: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
  Failed: "bg-red-100 text-red-700",
  Refunded: "bg-purple-100 text-purple-700",
  Approved: "bg-emerald-100 text-emerald-700",
  Hidden: "bg-red-100 text-red-700",
  Free: "bg-slate-100 text-slate-600",
  Premium: "bg-gold/20 text-yellow-700",
  Annual: "bg-purple-100 text-purple-700",
  Issued: "bg-emerald-100 text-emerald-700",
  Revoked: "bg-red-100 text-red-700",
  Member: "bg-slate-100 text-slate-600",
  "Premium Member": "bg-gold/20 text-yellow-700",
  Pastor: "bg-blue-100 text-blue-700",
  Moderator: "bg-purple-100 text-purple-700",
  Admin: "bg-navy/10 text-navy",
  Public: "bg-green-100 text-green-700",
  Private: "bg-slate-100 text-slate-500",
};

export function Badge({ label, className }: { label: string; className?: string }) {
  return (
    <span className={cn("inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap", BADGE_STYLES[label] ?? "bg-muted text-muted-foreground", className)}>
      {label}
    </span>
  );
}

// ── DataTable ──────────────────────────────────────────────────────────────
interface ColDef<T> { key: string; label: string; render?: (row: T) => ReactNode; className?: string; }

interface DataTableProps<T extends { id: string }> {
  cols: ColDef<T>[];
  rows: T[];
  actions?: (row: T) => ReactNode;
  emptyMsg?: string;
  pageSize?: number;
}

export function DataTable<T extends { id: string }>({ cols, rows, actions, emptyMsg = "No records found.", pageSize = 8 }: DataTableProps<T>) {
  const [page, setPage] = useState(0);
  const total = Math.ceil(rows.length / pageSize);
  const visible = rows.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <div className="rounded-2xl border border-border bg-background overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-cream border-b border-border">
              {cols.map((c) => (
                <th key={c.key} className={cn("px-4 py-3 text-left text-xs font-semibold tracking-wide uppercase text-navy/70 whitespace-nowrap", c.className)}>
                  {c.label}
                </th>
              ))}
              {actions && <th className="px-4 py-3 w-28 text-right text-xs font-semibold tracking-wide uppercase text-navy/70">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {visible.length === 0 ? (
              <tr><td colSpan={cols.length + (actions ? 1 : 0)} className="px-4 py-12 text-center text-sm text-muted-foreground">{emptyMsg}</td></tr>
            ) : (
              visible.map((row) => (
                <tr key={row.id} className="border-b border-border last:border-0 hover:bg-cream/40 transition-colors">
                  {cols.map((c) => (
                    <td key={c.key} className="px-4 py-3 whitespace-nowrap">
                      {c.render ? c.render(row) : String((row as Record<string, unknown>)[c.key] ?? "")}
                    </td>
                  ))}
                  {actions && <td className="px-4 py-3 text-right">{actions(row)}</td>}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {total > 1 && (
        <div className="flex items-center justify-between px-4 py-3 border-t border-border bg-cream/30">
          <p className="text-xs text-muted-foreground">Showing {page * pageSize + 1}–{Math.min((page + 1) * pageSize, rows.length)} of {rows.length}</p>
          <div className="flex gap-1">
            {Array.from({ length: total }).map((_, i) => (
              <button key={i} onClick={() => setPage(i)} className={cn("grid h-7 w-7 place-items-center rounded-lg text-xs font-medium transition-colors", page === i ? "bg-navy text-white" : "bg-background border border-border text-navy hover:bg-cream")}>
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Modal ──────────────────────────────────────────────────────────────────
export function Modal({ open, onClose, title, children, size = "md" }: { open: boolean; onClose: () => void; title: string; children: ReactNode; size?: "sm" | "md" | "lg" | "xl" }) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;
  const sizeClass = { sm: "max-w-sm", md: "max-w-lg", lg: "max-w-2xl", xl: "max-w-4xl" }[size];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className={cn("relative w-full rounded-2xl bg-background shadow-2xl flex flex-col max-h-[90vh]", sizeClass)}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
          <h2 className="font-serif text-lg text-navy">{title}</h2>
          <button onClick={onClose} className="grid h-8 w-8 place-items-center rounded-lg hover:bg-cream text-muted-foreground transition-colors"><X className="h-4 w-4" /></button>
        </div>
        <div className="overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  );
}

// ── ConfirmDialog ──────────────────────────────────────────────────────────
export function ConfirmDialog({ open, onClose, onConfirm, title, message, danger = false }: { open: boolean; onClose: () => void; onConfirm: () => void; title: string; message: string; danger?: boolean }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-sm rounded-2xl bg-background shadow-2xl p-6">
        <div className="flex gap-3 mb-4">
          <div className={cn("grid h-10 w-10 shrink-0 place-items-center rounded-full", danger ? "bg-red-100" : "bg-amber-100")}>
            <AlertTriangle className={cn("h-5 w-5", danger ? "text-red-600" : "text-amber-600")} />
          </div>
          <div>
            <h3 className="font-semibold text-navy">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{message}</p>
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <button onClick={onClose} className="rounded-full border border-border px-4 py-2 text-sm font-medium text-navy hover:bg-cream transition-colors">Cancel</button>
          <button onClick={() => { onConfirm(); onClose(); }} className={cn("rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors", danger ? "bg-red-600 hover:bg-red-700" : "bg-navy hover:bg-navy/90")}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

// ── Toast ──────────────────────────────────────────────────────────────────
type ToastType = "success" | "error" | "info";
interface ToastMsg { id: string; message: string; type: ToastType; }

let addToastFn: ((msg: string, type?: ToastType) => void) | null = null;
export function toast(msg: string, type: ToastType = "success") { addToastFn?.(msg, type); }

export function ToastContainer() {
  const [toasts, setToasts] = useState<ToastMsg[]>([]);
  addToastFn = (message, type = "success") => {
    const id = Math.random().toString(36).slice(2);
    setToasts((p) => [...p, { id, message, type }]);
    setTimeout(() => setToasts((p) => p.filter((t) => t.id !== id)), 3000);
  };
  const ICONS = { success: CheckCircle, error: XCircle, info: Info };
  const COLORS = { success: "border-emerald-200 bg-emerald-50 text-emerald-800", error: "border-red-200 bg-red-50 text-red-800", info: "border-blue-200 bg-blue-50 text-blue-800" };
  return (
    <div className="fixed bottom-4 right-4 z-[100] space-y-2 pointer-events-none">
      {toasts.map(({ id, message, type }) => {
        const Icon = ICONS[type];
        return (
          <div key={id} className={cn("flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium shadow-lg animate-fade-up pointer-events-auto", COLORS[type])}>
            <Icon className="h-4 w-4 shrink-0" /> {message}
          </div>
        );
      })}
    </div>
  );
}

// ── StatCard ───────────────────────────────────────────────────────────────
export function StatCard({ icon: Icon, label, value, delta, color = "text-gold" }: { icon: React.ElementType; label: string; value: string; delta?: string; color?: string; }) {
  return (
    <div className="rounded-2xl bg-background border border-border p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <span className={cn("grid h-10 w-10 place-items-center rounded-xl bg-cream", color)}>
          <Icon className="h-5 w-5" />
        </span>
        {delta && (
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
            <TrendingUp className="h-3 w-3" /> {delta}
          </span>
        )}
      </div>
      <p className="mt-4 font-serif text-2xl text-navy">{value}</p>
      <p className="mt-0.5 text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
    </div>
  );
}

// ── BarChart ───────────────────────────────────────────────────────────────
export function BarChart({ data, labels, title, subtitle, color = "from-navy to-gold" }: { data: number[]; labels: string[]; title: string; subtitle?: string; color?: string; }) {
  const max = Math.max(...data);
  return (
    <div className="rounded-2xl bg-background border border-border p-5">
      <p className="font-serif text-base text-navy">{title}</p>
      {subtitle && <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>}
      <div className="mt-4 flex items-end gap-1.5 h-36">
        {data.map((v, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div className={cn("w-full rounded-t-sm bg-gradient-to-t transition-all duration-700", color)} style={{ height: `${(v / max) * 100}%` }} />
            <span className="text-[9px] text-muted-foreground">{labels[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── PageHeader ─────────────────────────────────────────────────────────────
export function PageHeader({ title, desc, action }: { title: string; desc?: string; action?: ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
      <div>
        <h2 className="font-serif text-2xl text-navy">{title}</h2>
        {desc && <p className="text-sm text-muted-foreground mt-0.5">{desc}</p>}
      </div>
      {action}
    </div>
  );
}

// ── SearchBar ──────────────────────────────────────────────────────────────
export function SearchBar({ value, onChange, placeholder = "Search..." }: { value: string; onChange: (v: string) => void; placeholder?: string; }) {
  return (
    <div className="relative">
      <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full rounded-xl border border-border bg-background pl-9 pr-4 py-2.5 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30" />
    </div>
  );
}

// ── FormField ──────────────────────────────────────────────────────────────
export function FormField({ label, children, required }: { label: string; children: ReactNode; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold text-navy mb-1.5 block">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>
      {children}
    </div>
  );
}

export const inputCls = "w-full rounded-xl border border-border bg-cream px-4 py-2.5 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30";
export const selectCls = "w-full rounded-xl border border-border bg-cream px-4 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold/30 cursor-pointer";
export const textareaCls = "w-full rounded-xl border border-border bg-cream px-4 py-2.5 text-sm text-navy placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-gold/30";

// ── ActionMenu ─────────────────────────────────────────────────────────────
export function ActionBtn({ label, onClick, variant = "default" }: { label: string; onClick: () => void; variant?: "default" | "danger" | "success" | "ghost" }) {
  const cls = {
    default: "bg-navy text-white hover:bg-navy/90",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-emerald-600 text-white hover:bg-emerald-700",
    ghost: "border border-border text-navy hover:bg-cream",
  }[variant];
  return (
    <button onClick={onClick} className={cn("rounded-full px-3 py-1.5 text-xs font-medium transition-colors", cls)}>
      {label}
    </button>
  );
}
