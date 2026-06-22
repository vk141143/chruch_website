import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as logout, t as getUser } from "./auth-mIB9PyK8.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as FileText, C as Receipt, E as Pin, Et as Bell, F as Menu, H as LayoutDashboard, I as Megaphone, K as HeartHandshake, M as MessageSquare, O as Pen, Ot as Award, R as Mail, St as Calendar, T as Plus, Tt as BookOpen, W as Info, X as Globe, a as Users, at as DollarSign, bt as ChartColumn, ct as CreditCard, d as Trash2, dt as CircleX, f as Tag, ft as CircleUser, g as ShieldCheck, gt as ChevronRight, h as Shield, i as Video, it as Download, j as MicVocal, l as TriangleAlert, mt as CircleCheckBig, o as UserX, ot as Crown, p as Sun, pt as CirclePlay, r as X, s as UserCheck, st as Cross, u as TrendingUp, ut as ClipboardList, v as Settings, x as Save, y as Send, z as LogOut } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-C8gz2gLn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV_GROUPS = [
	{
		label: "Overview",
		items: [{
			id: "dashboard",
			label: "Dashboard",
			icon: LayoutDashboard
		}]
	},
	{
		label: "Members",
		items: [{
			id: "members",
			label: "Members",
			icon: Users
		}]
	},
	{
		label: "Content",
		items: [
			{
				id: "academy",
				label: "Bible Academy",
				icon: BookOpen
			},
			{
				id: "categories",
				label: "Course Categories",
				icon: Tag
			},
			{
				id: "videos",
				label: "Videos & Lessons",
				icon: Video
			},
			{
				id: "sermons",
				label: "Sermons",
				icon: MicVocal
			},
			{
				id: "devotions",
				label: "Daily Devotions",
				icon: Sun
			}
		]
	},
	{
		label: "Church",
		items: [
			{
				id: "events",
				label: "Events",
				icon: Calendar
			},
			{
				id: "registrations",
				label: "Event Registrations",
				icon: ClipboardList
			},
			{
				id: "prayer",
				label: "Prayer Requests",
				icon: HeartHandshake
			},
			{
				id: "community",
				label: "Community Posts",
				icon: MessageSquare
			},
			{
				id: "announcements",
				label: "Announcements",
				icon: Megaphone
			}
		]
	},
	{
		label: "Finance",
		items: [
			{
				id: "donations",
				label: "Donations & Giving",
				icon: DollarSign
			},
			{
				id: "plans",
				label: "Subscription Plans",
				icon: CreditCard
			},
			{
				id: "transactions",
				label: "Payments & Transactions",
				icon: Receipt
			}
		]
	},
	{
		label: "System",
		items: [
			{
				id: "certificates",
				label: "Certificates",
				icon: Award
			},
			{
				id: "notifications",
				label: "Notifications",
				icon: Bell
			},
			{
				id: "reports",
				label: "Reports & Analytics",
				icon: ChartColumn
			},
			{
				id: "settings",
				label: "Website Settings",
				icon: Settings
			},
			{
				id: "profile",
				label: "Admin Profile",
				icon: CircleUser
			}
		]
	}
];
var ALL_NAV = NAV_GROUPS.flatMap((g) => g.items);
function AdminLayout({ view, onViewChange, children, pendingCount = 0 }) {
	const navigate = useNavigate();
	const [collapsed, setCollapsed] = (0, import_react.useState)(false);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	function handleLogout() {
		logout();
		navigate({ to: "/" });
	}
	function navTo(id) {
		onViewChange(id);
		setMobileOpen(false);
	}
	const SidebarContent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex items-center gap-3 px-4 py-5 border-b border-white/10 shrink-0", collapsed && "px-3 justify-center"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-gold shadow-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cross, {
						className: "h-4 w-4 text-navy",
						strokeWidth: 2.5
					})
				}), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-white text-sm leading-tight",
					children: "Admin Panel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[9px] tracking-[0.3em] text-gold uppercase",
					children: "WordnWorship"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex-1 overflow-y-auto py-3 px-2",
				children: NAV_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3",
					children: [!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-3 mb-1 text-[9px] tracking-[0.3em] uppercase text-white/30 font-semibold",
						children: group.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-0.5",
						children: group.items.map(({ id, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => navTo(id),
							title: collapsed ? label : void 0,
							className: cn("flex w-full items-center gap-3 rounded-xl px-3 py-2 text-xs font-medium transition-all", view === id ? "bg-gradient-gold text-navy shadow-gold font-semibold" : "text-white/70 hover:bg-white/10 hover:text-white", collapsed && "justify-center px-2"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 shrink-0" }), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 text-left",
								children: label
							}), (id === "community" || id === "prayer") && pendingCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-4 w-4 place-items-center rounded-full bg-red-500 text-[9px] text-white font-bold",
								children: pendingCount
							})] })]
						}, id))
					})]
				}, group.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("border-t border-white/10 p-2 space-y-0.5 shrink-0", collapsed && "flex flex-col items-center"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: cn("flex items-center gap-2 w-full rounded-xl px-3 py-2 text-xs text-white/60 hover:bg-white/10 hover:text-white transition-colors", collapsed && "justify-center"),
					title: collapsed ? "View Site" : void 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cross, { className: "h-4 w-4 shrink-0" }), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Site" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: handleLogout,
					className: cn("flex items-center gap-2 w-full rounded-xl px-3 py-2 text-xs text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors", collapsed && "justify-center"),
					title: collapsed ? "Logout" : void 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4 shrink-0" }), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Logout" })]
				})]
			})
		]
	});
	const currentLabel = ALL_NAV.find((n) => n.id === view)?.label ?? "Dashboard";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-screen bg-cream overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: cn("hidden lg:flex flex-col bg-navy transition-all duration-300 shrink-0", collapsed ? "w-14" : "w-56"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContent, {})
			}),
			mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:hidden fixed inset-0 z-50 flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-56 bg-navy flex flex-col h-full shadow-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarContent, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 bg-black/50",
					onClick: () => setMobileOpen(false)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex h-14 items-center justify-between border-b border-border bg-background px-4 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setCollapsed((v) => !v),
								className: "hidden lg:grid h-9 w-9 place-items-center rounded-lg border border-border text-navy hover:bg-cream transition-colors",
								children: collapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setMobileOpen((v) => !v),
								className: "lg:hidden grid h-9 w-9 place-items-center rounded-lg border border-border text-navy",
								children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-serif text-navy text-lg",
									children: currentLabel
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => navTo("notifications"),
							className: "relative grid h-9 w-9 place-items-center rounded-lg border border-border text-navy hover:bg-cream transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }), pendingCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-1 -right-1 grid h-4 w-4 place-items-center rounded-full bg-red-500 text-[9px] text-white font-bold",
								children: pendingCount
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => navTo("profile"),
							className: "grid h-8 w-8 place-items-center rounded-full bg-gradient-gold text-navy font-bold text-xs shadow-gold",
							children: "AU"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1 overflow-y-auto",
					children
				})]
			})
		]
	});
}
var BADGE_STYLES = {
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
	Private: "bg-slate-100 text-slate-500"
};
function Badge({ label, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap", BADGE_STYLES[label] ?? "bg-muted text-muted-foreground", className),
		children: label
	});
}
function DataTable({ cols, rows, actions, emptyMsg = "No records found.", pageSize = 8 }) {
	const [page, setPage] = (0, import_react.useState)(0);
	const total = Math.ceil(rows.length / pageSize);
	const visible = rows.slice(page * pageSize, page * pageSize + pageSize);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-background overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "bg-cream border-b border-border",
					children: [cols.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: cn("px-4 py-3 text-left text-xs font-semibold tracking-wide uppercase text-navy/70 whitespace-nowrap", c.className),
						children: c.label
					}, c.key)), actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-3 w-28 text-right text-xs font-semibold tracking-wide uppercase text-navy/70",
						children: "Actions"
					})]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					colSpan: cols.length + (actions ? 1 : 0),
					className: "px-4 py-12 text-center text-sm text-muted-foreground",
					children: emptyMsg
				}) }) : visible.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border last:border-0 hover:bg-cream/40 transition-colors",
					children: [cols.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-3 whitespace-nowrap",
						children: c.render ? c.render(row) : String(row[c.key] ?? "")
					}, c.key)), actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-3 text-right",
						children: actions(row)
					})]
				}, row.id)) })]
			})
		}), total > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-4 py-3 border-t border-border bg-cream/30",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: [
					"Showing ",
					page * pageSize + 1,
					"–",
					Math.min((page + 1) * pageSize, rows.length),
					" of ",
					rows.length
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1",
				children: Array.from({ length: total }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setPage(i),
					className: cn("grid h-7 w-7 place-items-center rounded-lg text-xs font-medium transition-colors", page === i ? "bg-navy text-white" : "bg-background border border-border text-navy hover:bg-cream"),
					children: i + 1
				}, i))
			})]
		})]
	});
}
function Modal({ open, onClose, title, children, size = "md" }) {
	(0, import_react.useEffect)(() => {
		if (open) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	if (!open) return null;
	const sizeClass = {
		sm: "max-w-sm",
		md: "max-w-lg",
		lg: "max-w-2xl",
		xl: "max-w-4xl"
	}[size];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("relative w-full rounded-2xl bg-background shadow-2xl flex flex-col max-h-[90vh]", sizeClass),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-6 py-4 border-b border-border shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-lg text-navy",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "grid h-8 w-8 place-items-center rounded-lg hover:bg-cream text-muted-foreground transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-y-auto p-6",
				children
			})]
		})]
	});
}
function ConfirmDialog({ open, onClose, onConfirm, title, message, danger = false }) {
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-sm rounded-2xl bg-background shadow-2xl p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3 mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("grid h-10 w-10 shrink-0 place-items-center rounded-full", danger ? "bg-red-100" : "bg-amber-100"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: cn("h-5 w-5", danger ? "text-red-600" : "text-amber-600") })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold text-navy",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: message
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 justify-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "rounded-full border border-border px-4 py-2 text-sm font-medium text-navy hover:bg-cream transition-colors",
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						onConfirm();
						onClose();
					},
					className: cn("rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors", danger ? "bg-red-600 hover:bg-red-700" : "bg-navy hover:bg-navy/90"),
					children: "Confirm"
				})]
			})]
		})]
	});
}
var addToastFn = null;
function toast(msg, type = "success") {
	addToastFn?.(msg, type);
}
function ToastContainer() {
	const [toasts, setToasts] = (0, import_react.useState)([]);
	addToastFn = (message, type = "success") => {
		const id = Math.random().toString(36).slice(2);
		setToasts((p) => [...p, {
			id,
			message,
			type
		}]);
		setTimeout(() => setToasts((p) => p.filter((t) => t.id !== id)), 3e3);
	};
	const ICONS = {
		success: CircleCheckBig,
		error: CircleX,
		info: Info
	};
	const COLORS = {
		success: "border-emerald-200 bg-emerald-50 text-emerald-800",
		error: "border-red-200 bg-red-50 text-red-800",
		info: "border-blue-200 bg-blue-50 text-blue-800"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-4 right-4 z-[100] space-y-2 pointer-events-none",
		children: toasts.map(({ id, message, type }) => {
			const Icon = ICONS[type];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium shadow-lg animate-fade-up pointer-events-auto", COLORS[type]),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 shrink-0" }),
					" ",
					message
				]
			}, id);
		})
	});
}
function StatCard({ icon: Icon, label, value, delta, color = "text-gold" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-background border border-border p-5 hover:shadow-md transition-shadow",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("grid h-10 w-10 place-items-center rounded-xl bg-cream", color),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
				}), delta && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1 text-xs font-semibold text-emerald-600",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3 w-3" }),
						" ",
						delta
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-serif text-2xl text-navy",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-xs uppercase tracking-wide text-muted-foreground",
				children: label
			})
		]
	});
}
function BarChart({ data, labels, title, subtitle, color = "from-navy to-gold" }) {
	const max = Math.max(...data);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-background border border-border p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif text-base text-navy",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground mt-0.5",
				children: subtitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex items-end gap-1.5 h-36",
				children: data.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 flex flex-col items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("w-full rounded-t-sm bg-gradient-to-t transition-all duration-700", color),
						style: { height: `${v / max * 100}%` }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[9px] text-muted-foreground",
						children: labels[i]
					})]
				}, i))
			})
		]
	});
}
function PageHeader({ title, desc, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-serif text-2xl text-navy",
			children: title
		}), desc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground mt-0.5",
			children: desc
		})] }), action]
	});
}
function SearchBar({ value, onChange, placeholder = "Search..." }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 24 24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "11",
				cy: "11",
				r: "8"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m21 21-4.35-4.35" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			value,
			onChange: (e) => onChange(e.target.value),
			placeholder,
			className: "w-full rounded-xl border border-border bg-background pl-9 pr-4 py-2.5 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30"
		})]
	});
}
function FormField({ label, children, required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "text-xs font-semibold text-navy mb-1.5 block",
		children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-red-500 ml-0.5",
			children: "*"
		})]
	}), children] });
}
var inputCls = "w-full rounded-xl border border-border bg-cream px-4 py-2.5 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30";
var selectCls = "w-full rounded-xl border border-border bg-cream px-4 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold/30 cursor-pointer";
var textareaCls = "w-full rounded-xl border border-border bg-cream px-4 py-2.5 text-sm text-navy placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-gold/30";
function ActionBtn({ label, onClick, variant = "default" }) {
	const cls = {
		default: "bg-navy text-white hover:bg-navy/90",
		danger: "bg-red-600 text-white hover:bg-red-700",
		success: "bg-emerald-600 text-white hover:bg-emerald-700",
		ghost: "border border-border text-navy hover:bg-cream"
	}[variant];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick,
		className: cn("rounded-full px-3 py-1.5 text-xs font-medium transition-colors", cls),
		children: label
	});
}
var ADMIN_MEMBERS = [
	{
		id: "m1",
		name: "Rachel Mensah",
		email: "rachel.m@email.com",
		phone: "+1 555-0101",
		role: "Premium Member",
		plan: "Premium",
		status: "Active",
		joined: "Mar 15, 2021",
		location: "Accra, Ghana",
		avatar: "RM"
	},
	{
		id: "m2",
		name: "Andrew Thompson",
		email: "a.thompson@email.com",
		phone: "+1 555-0102",
		role: "Moderator",
		plan: "Premium",
		status: "Active",
		joined: "Jul 8, 2019",
		location: "London, UK",
		avatar: "AT"
	},
	{
		id: "m3",
		name: "Priya Sharma",
		email: "priya.s@email.com",
		phone: "+1 555-0103",
		role: "Member",
		plan: "Free",
		status: "Active",
		joined: "Jan 22, 2023",
		location: "Mumbai, India",
		avatar: "PS"
	},
	{
		id: "m4",
		name: "Daniel Owusu",
		email: "daniel.o@email.com",
		phone: "+1 555-0104",
		role: "Pastor",
		plan: "Premium",
		status: "Active",
		joined: "Feb 10, 2020",
		location: "Lagos, Nigeria",
		avatar: "DO"
	},
	{
		id: "m5",
		name: "Michael O'Brien",
		email: "michael.o@email.com",
		phone: "+1 555-0105",
		role: "Member",
		plan: "Annual",
		status: "Active",
		joined: "Sep 3, 2018",
		location: "Dublin, Ireland",
		avatar: "MO"
	},
	{
		id: "m6",
		name: "Sarah Lin",
		email: "sarah.lin@email.com",
		phone: "+1 555-0106",
		role: "Member",
		plan: "Free",
		status: "Inactive",
		joined: "Feb 14, 2022",
		location: "Toronto, Canada",
		avatar: "SL"
	},
	{
		id: "m7",
		name: "James Adeyemi",
		email: "james.a@email.com",
		phone: "+1 555-0107",
		role: "Pastor",
		plan: "Premium",
		status: "Active",
		joined: "Nov 1, 2017",
		location: "Abuja, Nigeria",
		avatar: "JA"
	},
	{
		id: "m8",
		name: "Grace Amadi",
		email: "grace.a@email.com",
		phone: "+1 555-0108",
		role: "Member",
		plan: "Free",
		status: "Suspended",
		joined: "Apr 5, 2023",
		location: "Enugu, Nigeria",
		avatar: "GA"
	}
];
var ADMIN_COURSES = [
	{
		id: "c1",
		title: "Understanding the Gospel of John",
		category: "New Testament",
		instructor: "Pastor David Mensah",
		students: 248,
		lessons: 21,
		status: "Published",
		access: "Premium",
		thumbnail: "📖",
		description: "A deep verse-by-verse study of the Gospel of John.",
		created: "Jan 10, 2026",
		completionRate: 62
	},
	{
		id: "c2",
		title: "Foundations of Christian Faith",
		category: "Christian Living",
		instructor: "Pastor Sarah Okafor",
		students: 412,
		lessons: 14,
		status: "Published",
		access: "Free",
		thumbnail: "✝️",
		description: "Core essentials of the Christian faith for new believers.",
		created: "Mar 5, 2026",
		completionRate: 74
	},
	{
		id: "c3",
		title: "Prayer and Spiritual Growth",
		category: "Prayer",
		instructor: "Pastor James Adeyemi",
		students: 187,
		lessons: 12,
		status: "Published",
		access: "Free",
		thumbnail: "🙏",
		description: "Practical guide to building a powerful prayer life.",
		created: "Feb 20, 2026",
		completionRate: 89
	},
	{
		id: "c4",
		title: "Leadership in Ministry",
		category: "Ministry Training",
		instructor: "Pastor Ruth Eze",
		students: 96,
		lessons: 18,
		status: "Draft",
		access: "Premium",
		thumbnail: "👑",
		description: "Equipping leaders to serve effectively in ministry.",
		created: "May 1, 2026",
		completionRate: 0
	},
	{
		id: "c5",
		title: "Old Testament Survey",
		category: "Old Testament",
		instructor: "Pastor Daniel Yusuf",
		students: 133,
		lessons: 36,
		status: "Published",
		access: "Premium",
		thumbnail: "📜",
		description: "A comprehensive survey of the entire Old Testament.",
		created: "Dec 12, 2025",
		completionRate: 41
	},
	{
		id: "c6",
		title: "Christian Apologetics",
		category: "Christian Living",
		instructor: "Pastor Grace Amadi",
		students: 67,
		lessons: 18,
		status: "Published",
		access: "Free",
		thumbnail: "🛡️",
		description: "Learn to defend your faith with grace and wisdom.",
		created: "Apr 15, 2026",
		completionRate: 55
	}
];
var ADMIN_SERMONS = [
	{
		id: "s1",
		title: "The Kingdom Among Us",
		speaker: "Pastor David Mensah",
		bibleRef: "Matthew 6:33",
		category: "Kingdom of God",
		date: "Jun 16, 2026",
		duration: "52:14",
		views: 1240,
		status: "Published",
		thumbnail: "🎙️"
	},
	{
		id: "s2",
		title: "Carried By Grace",
		speaker: "Pastor David Mensah",
		bibleRef: "Ephesians 2:8",
		category: "Grace",
		date: "Jun 9, 2026",
		duration: "48:32",
		views: 1582,
		status: "Published",
		thumbnail: "🕊️"
	},
	{
		id: "s3",
		title: "Faith That Moves Mountains",
		speaker: "Pastor Caleb Nwosu",
		bibleRef: "Matthew 17:20",
		category: "Faith",
		date: "Jun 2, 2026",
		duration: "44:18",
		views: 998,
		status: "Published",
		thumbnail: "⛰️"
	},
	{
		id: "s4",
		title: "A House Of Prayer",
		speaker: "Pastor David Mensah",
		bibleRef: "Isaiah 56:7",
		category: "Prayer",
		date: "May 26, 2026",
		duration: "55:09",
		views: 1411,
		status: "Published",
		thumbnail: "🏛️"
	},
	{
		id: "s5",
		title: "The Prodigal Son Returns",
		speaker: "Pastor Sarah Okafor",
		bibleRef: "Luke 15:11",
		category: "Redemption",
		date: "May 19, 2026",
		duration: "41:25",
		views: 876,
		status: "Archived",
		thumbnail: "💛"
	}
];
var ADMIN_EVENTS = [
	{
		id: "e1",
		title: "Sunday Worship Service",
		date: "Jun 29, 2026",
		time: "9:00 AM",
		location: "Main Sanctuary",
		category: "Worship",
		capacity: 600,
		registered: 412,
		status: "Upcoming",
		image: "⛪"
	},
	{
		id: "e2",
		title: "Summer Faith Conference",
		date: "Aug 2, 2026",
		time: "10:00 AM",
		location: "WordnWorship Center",
		category: "Conference",
		capacity: 500,
		registered: 312,
		status: "Upcoming",
		image: "🌟"
	},
	{
		id: "e3",
		title: "Wednesday Bible Study",
		date: "Jul 2, 2026",
		time: "7:00 PM",
		location: "Fellowship Hall",
		category: "Bible Study",
		capacity: 150,
		registered: 98,
		status: "Upcoming",
		image: "📖"
	},
	{
		id: "e4",
		title: "Youth Fellowship Night",
		date: "Jun 27, 2026",
		time: "6:30 PM",
		location: "Youth Center",
		category: "Youth",
		capacity: 150,
		registered: 92,
		status: "Upcoming",
		image: "🎉"
	},
	{
		id: "e5",
		title: "Marriage and Family Seminar",
		date: "Jul 19, 2026",
		time: "2:00 PM",
		location: "Fellowship Hall",
		category: "Seminar",
		capacity: 120,
		registered: 84,
		status: "Upcoming",
		image: "💑"
	},
	{
		id: "e6",
		title: "Easter Sunday Service",
		date: "Apr 20, 2026",
		time: "9:00 AM",
		location: "Main Sanctuary",
		category: "Worship",
		capacity: 600,
		registered: 578,
		status: "Past",
		image: "✝️"
	}
];
var ADMIN_DONATIONS = [
	{
		id: "d1",
		donor: "Anonymous",
		email: "anon@email.com",
		fund: "General Fund",
		amount: 1200,
		date: "Jun 20, 2026",
		type: "One-time",
		status: "Successful",
		method: "Card"
	},
	{
		id: "d2",
		donor: "Rachel Mensah",
		email: "rachel.m@email.com",
		fund: "Missions",
		amount: 250,
		date: "Jun 19, 2026",
		type: "Recurring",
		status: "Successful",
		method: "Card"
	},
	{
		id: "d3",
		donor: "Anonymous",
		email: "anon2@email.com",
		fund: "Building Fund",
		amount: 5e3,
		date: "Jun 18, 2026",
		type: "One-time",
		status: "Successful",
		method: "Bank Transfer"
	},
	{
		id: "d4",
		donor: "Andrew Thompson",
		email: "a.thompson@email.com",
		fund: "Monthly Giving",
		amount: 150,
		date: "Jun 17, 2026",
		type: "Recurring",
		status: "Successful",
		method: "Card"
	},
	{
		id: "d5",
		donor: "Sarah Lin",
		email: "sarah.lin@email.com",
		fund: "Charity",
		amount: 75,
		date: "Jun 17, 2026",
		type: "One-time",
		status: "Failed",
		method: "Card"
	},
	{
		id: "d6",
		donor: "Michael O'Brien",
		email: "michael.o@email.com",
		fund: "Youth Ministry",
		amount: 500,
		date: "Jun 15, 2026",
		type: "One-time",
		status: "Successful",
		method: "Card"
	}
];
var ADMIN_PRAYERS = [
	{
		id: "p1",
		title: "Healing for my mother",
		detail: "My mother was recently diagnosed and I need prayers.",
		author: "Rachel Mensah",
		category: "Health",
		privacy: "Public",
		status: "Approved",
		answered: false,
		prayerCount: 24,
		createdAt: "3 days ago"
	},
	{
		id: "p2",
		title: "Career breakthrough",
		detail: "Believing God for a new opportunity.",
		author: "John Member",
		category: "Career",
		privacy: "Private",
		status: "Approved",
		answered: false,
		prayerCount: 8,
		createdAt: "1 week ago"
	},
	{
		id: "p3",
		title: "Thanksgiving for job offer",
		detail: "God answered my prayer!",
		author: "Rachel Mensah",
		category: "Thanksgiving",
		privacy: "Public",
		status: "Approved",
		answered: true,
		prayerCount: 42,
		createdAt: "2 weeks ago"
	},
	{
		id: "p4",
		title: "Family restoration",
		detail: "Praying for peace and reconciliation.",
		author: "Andrew Thompson",
		category: "Family",
		privacy: "Public",
		status: "Pending",
		answered: false,
		prayerCount: 0,
		createdAt: "5 days ago"
	},
	{
		id: "p5",
		title: "Offensive content test",
		detail: "This should be hidden.",
		author: "Unknown",
		category: "Other",
		privacy: "Public",
		status: "Hidden",
		answered: false,
		prayerCount: 0,
		createdAt: "1 day ago"
	}
];
var ADMIN_POSTS = [
	{
		id: "po1",
		author: "Rachel Mensah",
		avatar: "RM",
		content: "\"For I know the plans I have for you\" — God is faithful! 🙏",
		type: "testimony",
		likes: 48,
		comments: 12,
		status: "Approved",
		reported: false,
		createdAt: "2 hours ago"
	},
	{
		id: "po2",
		author: "Andrew Thompson",
		avatar: "AT",
		content: "Wednesday Bible study was amazing. Pastor David's teaching on John 15 really spoke to me.",
		type: "encouragement",
		likes: 32,
		comments: 8,
		status: "Pending",
		reported: false,
		createdAt: "5 hours ago"
	},
	{
		id: "po3",
		author: "Priya Sharma",
		avatar: "PS",
		content: "\"The Lord is my shepherd, I shall not want.\" — Psalm 23:1 🌅",
		type: "verse",
		likes: 61,
		comments: 15,
		status: "Approved",
		reported: false,
		createdAt: "1 day ago"
	},
	{
		id: "po4",
		author: "Unknown User",
		avatar: "UU",
		content: "Flagged content that needs review by moderators.",
		type: "encouragement",
		likes: 2,
		comments: 1,
		status: "Pending",
		reported: true,
		createdAt: "3 hours ago"
	}
];
var ADMIN_ANNOUNCEMENTS = [
	{
		id: "an1",
		title: "New Bible Academy Course: Christian Apologetics",
		description: "Our newest course is now live!",
		category: "Bible Academy",
		pinned: true,
		status: "Published",
		publishDate: "Jun 20, 2026",
		image: "🎓"
	},
	{
		id: "an2",
		title: "Sunday Service Time Update",
		description: "Starting July 6, our first service will begin at 8:30 AM.",
		category: "Church News",
		pinned: true,
		status: "Published",
		publishDate: "Jun 18, 2026",
		image: "⛪"
	},
	{
		id: "an3",
		title: "Community Outreach Registration",
		description: "Join us as we serve on July 5.",
		category: "Events",
		pinned: false,
		status: "Draft",
		publishDate: "Jun 25, 2026",
		image: "🤝"
	},
	{
		id: "an4",
		title: "Prayer Week This Monday",
		description: "Daily sessions at 6 AM and 7 PM.",
		category: "Prayer",
		pinned: false,
		status: "Scheduled",
		publishDate: "Jun 28, 2026",
		image: "🙏"
	}
];
var ADMIN_PLANS = [
	{
		id: "pl1",
		name: "Free",
		monthlyPrice: 0,
		yearlyPrice: 0,
		features: [
			"2 free courses",
			"Recent sermons",
			"Community feed",
			"Prayer requests"
		],
		activeSubscribers: 1842,
		status: "Active"
	},
	{
		id: "pl2",
		name: "Premium",
		monthlyPrice: 9.99,
		yearlyPrice: 79.99,
		features: [
			"All courses",
			"Full sermon archive",
			"Certificates",
			"Offline access",
			"Priority support"
		],
		activeSubscribers: 524,
		status: "Active"
	},
	{
		id: "pl3",
		name: "Annual",
		monthlyPrice: 6.67,
		yearlyPrice: 79.99,
		features: [
			"Everything in Premium",
			"Family sharing (4)",
			"1-on-1 call",
			"Annual devotional"
		],
		activeSubscribers: 118,
		status: "Active"
	}
];
var ADMIN_TRANSACTIONS = [
	{
		id: "tx1",
		member: "Rachel Mensah",
		email: "rachel.m@email.com",
		plan: "Premium",
		amount: 9.99,
		date: "Jun 20, 2026",
		status: "Successful",
		method: "Visa •••• 4242"
	},
	{
		id: "tx2",
		member: "Andrew Thompson",
		email: "a.thompson@email.com",
		plan: "Annual",
		amount: 79.99,
		date: "Jun 19, 2026",
		status: "Successful",
		method: "Mastercard •••• 5555"
	},
	{
		id: "tx3",
		member: "Priya Sharma",
		email: "priya.s@email.com",
		plan: "Premium",
		amount: 9.99,
		date: "Jun 18, 2026",
		status: "Failed",
		method: "Visa •••• 1234"
	},
	{
		id: "tx4",
		member: "Michael O'Brien",
		email: "michael.o@email.com",
		plan: "Premium",
		amount: 9.99,
		date: "Jun 17, 2026",
		status: "Successful",
		method: "PayPal"
	},
	{
		id: "tx5",
		member: "Sarah Lin",
		email: "sarah.lin@email.com",
		plan: "Annual",
		amount: 79.99,
		date: "Jun 10, 2026",
		status: "Refunded",
		method: "Visa •••• 9999"
	}
];
var ADMIN_CERTIFICATES = [
	{
		id: "cert1",
		member: "Rachel Mensah",
		course: "Foundations of Christian Faith",
		issuedDate: "Jun 15, 2026",
		status: "Issued"
	},
	{
		id: "cert2",
		member: "Andrew Thompson",
		course: "Prayer and Spiritual Growth",
		issuedDate: "Jun 10, 2026",
		status: "Issued"
	},
	{
		id: "cert3",
		member: "Michael O'Brien",
		course: "Leadership in Ministry",
		issuedDate: "Jun 5, 2026",
		status: "Issued"
	},
	{
		id: "cert4",
		member: "Priya Sharma",
		course: "Understanding the Gospel of John",
		issuedDate: "—",
		status: "Pending"
	}
];
var ADMIN_DEVOTIONS = [
	{
		id: "dv1",
		verse: "Be still, and know that I am God.",
		ref: "Psalm 46:10",
		message: "In the noise of life, God invites us into stillness...",
		reflection: "What areas do you need to release control?",
		prayer: "Lord, still my heart before You today.",
		date: "Jun 24, 2026",
		status: "Published"
	},
	{
		id: "dv2",
		verse: "Your word is a lamp to my feet.",
		ref: "Psalm 119:105",
		message: "God's Word illuminates our path in darkness...",
		reflection: "How has God's Word guided you recently?",
		prayer: "Father, let Your Word be my guide today.",
		date: "Jun 25, 2026",
		status: "Scheduled"
	},
	{
		id: "dv3",
		verse: "I can do all things through Christ.",
		ref: "Philippians 4:13",
		message: "Paul wrote this from prison, yet full of joy...",
		reflection: "What challenge are you facing that needs His strength?",
		prayer: "Lord, be my strength in weakness.",
		date: "Jun 26, 2026",
		status: "Draft"
	}
];
var MEMBER_GROWTH = [
	180,
	210,
	245,
	280,
	310,
	355,
	398,
	442,
	490,
	540,
	610,
	680
];
var REVENUE_DATA = [
	3200,
	4800,
	4100,
	6400,
	5800,
	7200,
	6800,
	8600,
	7900,
	9400,
	8800,
	10200
];
var DONATION_DATA = [
	8200,
	12400,
	10800,
	15600,
	14200,
	18800,
	16400,
	22e3,
	19600,
	24800,
	22400,
	28e3
];
var ENROLLMENT_DATA = [
	42,
	68,
	55,
	89,
	76,
	94,
	88,
	112,
	98,
	124,
	108,
	138
];
var MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];
function AdminDashboard({ onViewChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 space-y-6 max-w-[1400px] mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-navy text-white p-6 flex items-center justify-between relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 opacity-5 pointer-events-none",
						style: {
							backgroundImage: "radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
							backgroundSize: "30px 30px"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.3em] uppercase text-gold font-semibold",
								children: "Admin Panel"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-2xl mt-1",
								children: "WordnWorship Fellowship"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/60 text-sm mt-1",
								children: "Here's what's happening in your church today."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative hidden md:flex items-center gap-4 text-sm text-white/60",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Last updated: Just now" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3",
				children: [
					{
						icon: Users,
						label: "Total Members",
						value: "2,847",
						delta: "+12.4%",
						color: "text-blue-500"
					},
					{
						icon: Crown,
						label: "Active Subscribers",
						value: "642",
						delta: "+8.1%",
						color: "text-gold"
					},
					{
						icon: DollarSign,
						label: "Monthly Revenue",
						value: "$10,200",
						delta: "+15.6%",
						color: "text-emerald-500"
					},
					{
						icon: DollarSign,
						label: "Total Donations",
						value: "$412,840",
						delta: "+24.6%",
						color: "text-purple-500"
					},
					{
						icon: BookOpen,
						label: "Course Enrollments",
						value: "1,206",
						delta: "+15.2%",
						color: "text-orange-500"
					},
					{
						icon: CirclePlay,
						label: "Video Watch Time",
						value: "4,820h",
						delta: "+9.8%",
						color: "text-pink-500"
					},
					{
						icon: Calendar,
						label: "Upcoming Events",
						value: "5",
						delta: "+2",
						color: "text-cyan-500"
					},
					{
						icon: HeartHandshake,
						label: "Pending Prayers",
						value: "4",
						delta: "",
						color: "text-red-400"
					},
					{
						icon: MessageSquare,
						label: "Pending Posts",
						value: "2",
						delta: "",
						color: "text-amber-500"
					}
				].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: m.icon,
					label: m.label,
					value: m.value,
					delta: m.delta || void 0,
					color: m.color
				}, m.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-2 xl:grid-cols-4 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarChart, {
						data: MEMBER_GROWTH,
						labels: MONTHS,
						title: "Member Growth",
						subtitle: "New members per month",
						color: "from-blue-600 to-blue-400"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarChart, {
						data: REVENUE_DATA,
						labels: MONTHS,
						title: "Subscription Revenue",
						subtitle: "Monthly revenue ($)",
						color: "from-gold to-yellow-300"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarChart, {
						data: DONATION_DATA,
						labels: MONTHS,
						title: "Donations",
						subtitle: "Monthly giving ($)",
						color: "from-emerald-600 to-emerald-400"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BarChart, {
						data: ENROLLMENT_DATA,
						labels: MONTHS,
						title: "Course Enrollments",
						subtitle: "New enrollments/month",
						color: "from-purple-600 to-purple-400"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-3 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 rounded-2xl bg-background border border-border overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between px-5 py-4 border-b border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-lg text-navy",
							children: "Recent Registrations"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onViewChange("members"),
							className: "text-xs text-gold hover:underline",
							children: "View all"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-border",
						children: ADMIN_MEMBERS.slice(0, 5).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 px-5 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-gold text-navy font-bold text-xs shadow-gold",
									children: m.avatar
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium text-navy truncate",
										children: m.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground truncate",
										children: m.email
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold ${m.plan === "Premium" || m.plan === "Annual" ? "bg-gold/20 text-yellow-700" : "bg-slate-100 text-slate-600"}`,
										children: m.plan
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-0.5",
										children: m.joined
									})]
								})
							]
						}, m.id))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-background border border-border overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between px-5 py-4 border-b border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-base text-navy",
									children: "Recent Donations"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => onViewChange("donations"),
									className: "text-xs text-gold hover:underline",
									children: "View all"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "divide-y divide-border",
								children: ADMIN_DONATIONS.slice(0, 4).map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between px-5 py-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium text-navy",
										children: d.donor
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: d.fund
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm font-semibold text-emerald-600",
											children: ["$", d.amount.toLocaleString()]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: d.date.split(",")[0]
										})]
									})]
								}, d.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-navy text-white p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif text-base",
									children: "Recent Activity"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-2.5 text-xs",
								children: [
									"New member: Rachel Mensah joined",
									"Donation $1,200 — General Fund",
									"Prayer request submitted",
									"Event registered: Summer Conference",
									"Course published: Apologetics"
								].map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2.5 pb-2.5 border-b border-white/10 last:border-0 last:pb-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white/80",
										children: a
									})]
								}, i))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-background border border-border overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-5 py-3 border-b border-border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-base text-navy",
									children: "Upcoming Events"
								})
							}), ADMIN_EVENTS.filter((e) => e.status === "Upcoming").slice(0, 3).map((e) => {
								const pct = Math.round(e.registered / e.capacity * 100);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "px-5 py-3 border-b border-border last:border-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 mb-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-base",
												children: e.image
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-medium text-navy truncate",
												children: e.title
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-1.5 rounded-full bg-cream overflow-hidden",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-full bg-gradient-gold",
												style: { width: `${pct}%` }
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground mt-0.5",
											children: [
												e.registered,
												"/",
												e.capacity,
												" registered"
											]
										})
									]
								}, e.id);
							})]
						})
					]
				})]
			})
		]
	});
}
var ROLES = [
	"Member",
	"Premium Member",
	"Pastor",
	"Moderator",
	"Admin"
];
var PLANS = [
	"All",
	"Free",
	"Premium",
	"Annual"
];
var STATUSES = [
	"Active",
	"Inactive",
	"Suspended"
];
var BLANK = {
	name: "",
	email: "",
	phone: "",
	role: "Member",
	plan: "Free",
	status: "Active",
	joined: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	}),
	location: "",
	avatar: ""
};
function MembersView() {
	const [members, setMembers] = (0, import_react.useState)(ADMIN_MEMBERS);
	const [search, setSearch] = (0, import_react.useState)("");
	const [filterPlan, setFilterPlan] = (0, import_react.useState)("All");
	const [filterStatus, setFilterStatus] = (0, import_react.useState)("All");
	const [modal, setModal] = (0, import_react.useState)({
		open: false,
		mode: "add"
	});
	const [confirm, setConfirm] = (0, import_react.useState)({
		open: false,
		id: "",
		action: "delete"
	});
	const [form, setForm] = (0, import_react.useState)(BLANK);
	const filtered = members.filter((m) => {
		const q = search.toLowerCase();
		const matchSearch = m.name.toLowerCase().includes(q) || m.email.toLowerCase().includes(q);
		const matchPlan = filterPlan === "All" || m.plan === filterPlan;
		const matchStatus = filterStatus === "All" || m.status === filterStatus;
		return matchSearch && matchPlan && matchStatus;
	});
	function openAdd() {
		setForm(BLANK);
		setModal({
			open: true,
			mode: "add"
		});
	}
	function openEdit(m) {
		setForm(m);
		setModal({
			open: true,
			mode: "edit",
			member: m
		});
	}
	function openView(m) {
		setModal({
			open: true,
			mode: "view",
			member: m
		});
	}
	function saveForm() {
		if (!form.name.trim() || !form.email.trim()) {
			toast("Name and email are required.", "error");
			return;
		}
		if (modal.mode === "add") {
			const avatar = form.name.split(" ").map((n) => n[0]).join("").toUpperCase();
			setMembers((p) => [...p, {
				...form,
				avatar,
				id: `m${Date.now()}`
			}]);
			toast("Member added successfully.");
		} else if (modal.mode === "edit" && modal.member) {
			setMembers((p) => p.map((m) => m.id === modal.member.id ? {
				...modal.member,
				...form
			} : m));
			toast("Member updated.");
		}
		setModal({
			open: false,
			mode: "add"
		});
	}
	function handleConfirm() {
		if (confirm.action === "delete") {
			setMembers((p) => p.filter((m) => m.id !== confirm.id));
			toast("Member deleted.", "error");
		} else {
			const newStatus = confirm.action === "suspend" ? "Suspended" : "Active";
			setMembers((p) => p.map((m) => m.id === confirm.id ? {
				...m,
				status: newStatus
			} : m));
			toast(confirm.action === "suspend" ? "Member suspended." : "Member activated.");
		}
	}
	const cols = [
		{
			key: "name",
			label: "Member",
			render: (m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-gold text-navy font-bold text-xs shadow-gold",
					children: m.avatar
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => openView(m),
					className: "font-medium text-navy hover:text-gold transition-colors text-sm",
					children: m.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: m.email
				})] })]
			})
		},
		{
			key: "role",
			label: "Role",
			render: (m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: m.role })
		},
		{
			key: "plan",
			label: "Plan",
			render: (m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: m.plan })
		},
		{
			key: "joined",
			label: "Joined",
			render: (m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted-foreground",
				children: m.joined
			})
		},
		{
			key: "status",
			label: "Status",
			render: (m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: m.status })
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-[1400px] mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Members",
				desc: `${members.length} total members`,
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => toast("Export started — CSV ready."),
						className: "flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-medium text-navy hover:bg-cream transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), " Export"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: openAdd,
						className: "flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), " Add Member"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row gap-3 mb-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
							value: search,
							onChange: setSearch,
							placeholder: "Search members..."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: filterPlan,
						onChange: (e) => setFilterPlan(e.target.value),
						className: "rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-navy focus:outline-none",
						children: PLANS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: p }, p))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: filterStatus,
						onChange: (e) => setFilterStatus(e.target.value),
						className: "rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-navy focus:outline-none",
						children: ["All", ...STATUSES].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				cols,
				rows: filtered,
				actions: (m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-end gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
							label: "Edit",
							onClick: () => openEdit(m),
							variant: "ghost"
						}),
						m.status === "Suspended" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
							label: "Activate",
							onClick: () => setConfirm({
								open: true,
								id: m.id,
								action: "activate"
							}),
							variant: "success"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
							label: "Suspend",
							onClick: () => setConfirm({
								open: true,
								id: m.id,
								action: "suspend"
							}),
							variant: "default"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setConfirm({
								open: true,
								id: m.id,
								action: "delete"
							}),
							className: "grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-red-600 hover:border-red-200 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				open: modal.open && modal.mode !== "view",
				onClose: () => setModal({
					open: false,
					mode: "add"
				}),
				title: modal.mode === "add" ? "Add New Member" : "Edit Member",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Full Name",
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.name,
								onChange: (e) => setForm((f) => ({
									...f,
									name: e.target.value
								})),
								className: inputCls,
								placeholder: "Full name"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Email",
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.email,
								onChange: (e) => setForm((f) => ({
									...f,
									email: e.target.value
								})),
								className: inputCls,
								placeholder: "email@example.com",
								type: "email"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Phone",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.phone,
								onChange: (e) => setForm((f) => ({
									...f,
									phone: e.target.value
								})),
								className: inputCls,
								placeholder: "+1 555-0000"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Location",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.location,
								onChange: (e) => setForm((f) => ({
									...f,
									location: e.target.value
								})),
								className: inputCls,
								placeholder: "City, Country"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Role",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: form.role,
								onChange: (e) => setForm((f) => ({
									...f,
									role: e.target.value
								})),
								className: selectCls,
								children: ROLES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: r }, r))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Plan",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: form.plan,
								onChange: (e) => setForm((f) => ({
									...f,
									plan: e.target.value
								})),
								className: selectCls,
								children: [
									"Free",
									"Premium",
									"Annual"
								].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: p }, p))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Status",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: form.status,
								onChange: (e) => setForm((f) => ({
									...f,
									status: e.target.value
								})),
								className: selectCls,
								children: STATUSES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-2 mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setModal({
							open: false,
							mode: "add"
						}),
						className: "rounded-full border border-border px-5 py-2 text-sm font-medium text-navy hover:bg-cream",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: saveForm,
						className: "rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-navy shadow-gold",
						children: modal.mode === "add" ? "Add Member" : "Save Changes"
					})]
				})]
			}),
			modal.member && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				open: modal.open && modal.mode === "view",
				onClose: () => setModal({
					open: false,
					mode: "add"
				}),
				title: "Member Profile",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center gap-3 pb-5 mb-5 border-b border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-16 w-16 place-items-center rounded-full bg-gradient-gold text-navy font-bold text-xl shadow-gold",
							children: modal.member.avatar
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-xl text-navy",
									children: modal.member.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: modal.member.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2 justify-center mt-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: modal.member.role }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: modal.member.plan }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: modal.member.status })
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 gap-3 text-sm",
						children: [
							["Phone", modal.member.phone],
							["Location", modal.member.location],
							["Joined", modal.member.joined]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between py-2 border-b border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-navy",
								children: v
							})]
						}, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 justify-end mt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								setModal({
									open: false,
									mode: "add"
								});
								setTimeout(() => openEdit(modal.member), 100);
							},
							className: "flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-sm font-medium text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "h-3.5 w-3.5" }), " Edit"]
						}), modal.member.status === "Suspended" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								setModal({
									open: false,
									mode: "add"
								});
								setConfirm({
									open: true,
									id: modal.member.id,
									action: "activate"
								});
							},
							className: "flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "h-3.5 w-3.5" }), " Activate"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								setModal({
									open: false,
									mode: "add"
								});
								setConfirm({
									open: true,
									id: modal.member.id,
									action: "suspend"
								});
							},
							className: "flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-navy",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserX, { className: "h-3.5 w-3.5" }), " Suspend"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialog, {
				open: confirm.open,
				onClose: () => setConfirm((p) => ({
					...p,
					open: false
				})),
				onConfirm: handleConfirm,
				danger: confirm.action === "delete",
				title: confirm.action === "delete" ? "Delete Member" : confirm.action === "suspend" ? "Suspend Member" : "Activate Member",
				message: confirm.action === "delete" ? "This will permanently delete the member and all their data." : confirm.action === "suspend" ? "The member will lose access to all features." : "The member will regain full access."
			})
		]
	});
}
var BLANK_COURSE = {
	title: "",
	category: "New Testament",
	instructor: "",
	students: 0,
	lessons: 0,
	status: "Draft",
	access: "Free",
	thumbnail: "📖",
	description: "",
	created: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	}),
	completionRate: 0
};
var CATEGORIES_LIST = [
	"New Testament",
	"Old Testament",
	"Prayer",
	"Christian Living",
	"Ministry Training",
	"Prophecy",
	"Biblical Languages"
];
var EMOJIS = [
	"📖",
	"✝️",
	"🙏",
	"👑",
	"📜",
	"🛡️",
	"🔮",
	"🏛️",
	"🌿",
	"⭐"
];
function AcademyView() {
	const [courses, setCourses] = (0, import_react.useState)(ADMIN_COURSES);
	const [search, setSearch] = (0, import_react.useState)("");
	const [modal, setModal] = (0, import_react.useState)({
		open: false,
		mode: "add"
	});
	const [confirm, setConfirm] = (0, import_react.useState)({
		open: false,
		id: ""
	});
	const [form, setForm] = (0, import_react.useState)(BLANK_COURSE);
	const filtered = courses.filter((c) => c.title.toLowerCase().includes(search.toLowerCase()) || c.instructor.toLowerCase().includes(search.toLowerCase()));
	function openAdd() {
		setForm(BLANK_COURSE);
		setModal({
			open: true,
			mode: "add"
		});
	}
	function openEdit(c) {
		setForm(c);
		setModal({
			open: true,
			mode: "edit",
			course: c
		});
	}
	function save() {
		if (!form.title.trim() || !form.instructor.trim()) {
			toast("Title and instructor required.", "error");
			return;
		}
		if (modal.mode === "add") {
			setCourses((p) => [...p, {
				...form,
				id: `c${Date.now()}`
			}]);
			toast("Course created.");
		} else if (modal.course) {
			setCourses((p) => p.map((c) => c.id === modal.course.id ? {
				...modal.course,
				...form
			} : c));
			toast("Course updated.");
		}
		setModal({
			open: false,
			mode: "add"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-[1400px] mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Bible Academy",
				desc: `${courses.length} courses`,
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: openAdd,
					className: "flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), " New Course"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
					value: search,
					onChange: setSearch,
					placeholder: "Search courses..."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				cols: [
					{
						key: "title",
						label: "Course",
						render: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy text-xl",
								children: c.thumbnail
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-navy text-sm",
								children: c.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: c.instructor
							})] })]
						})
					},
					{
						key: "category",
						label: "Category",
						render: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: c.category
						})
					},
					{
						key: "students",
						label: "Students",
						render: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-navy",
							children: c.students
						})
					},
					{
						key: "completionRate",
						label: "Completion",
						render: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 min-w-[80px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1 h-1.5 rounded-full bg-cream overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-gradient-gold",
									style: { width: `${c.completionRate}%` }
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground",
								children: [c.completionRate, "%"]
							})]
						})
					},
					{
						key: "access",
						label: "Access",
						render: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: c.access })
					},
					{
						key: "status",
						label: "Status",
						render: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: c.status })
					}
				],
				rows: filtered,
				actions: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
							label: "Edit",
							onClick: () => openEdit(c),
							variant: "ghost"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
							label: c.status === "Published" ? "Unpublish" : "Publish",
							onClick: () => {
								setCourses((p) => p.map((x) => x.id === c.id ? {
									...x,
									status: x.status === "Published" ? "Draft" : "Published"
								} : x));
								toast("Status updated.");
							},
							variant: "default"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setConfirm({
								open: true,
								id: c.id
							}),
							className: "grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-red-600 hover:border-red-200 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				open: modal.open,
				onClose: () => setModal({
					open: false,
					mode: "add"
				}),
				title: modal.mode === "add" ? "Create Course" : "Edit Course",
				size: "lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: "Course Title",
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.title,
									onChange: (e) => setForm((f) => ({
										...f,
										title: e.target.value
									})),
									className: inputCls,
									placeholder: "Course title"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Instructor / Pastor",
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.instructor,
								onChange: (e) => setForm((f) => ({
									...f,
									instructor: e.target.value
								})),
								className: inputCls,
								placeholder: "Pastor name"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Category",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: form.category,
								onChange: (e) => setForm((f) => ({
									...f,
									category: e.target.value
								})),
								className: selectCls,
								children: CATEGORIES_LIST.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Access Level",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: form.access,
								onChange: (e) => setForm((f) => ({
									...f,
									access: e.target.value
								})),
								className: selectCls,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Free" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Premium" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Status",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: form.status,
								onChange: (e) => setForm((f) => ({
									...f,
									status: e.target.value
								})),
								className: selectCls,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Draft" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Published" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Thumbnail Emoji",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2 flex-wrap",
								children: EMOJIS.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setForm((f) => ({
										...f,
										thumbnail: e
									})),
									className: `h-9 w-9 rounded-xl text-lg flex items-center justify-center transition-colors ${form.thumbnail === e ? "bg-gradient-gold shadow-gold" : "bg-cream hover:bg-muted"}`,
									children: e
								}, e))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Number of Lessons",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								value: form.lessons,
								onChange: (e) => setForm((f) => ({
									...f,
									lessons: +e.target.value
								})),
								className: inputCls
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: "Description",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: form.description,
									onChange: (e) => setForm((f) => ({
										...f,
										description: e.target.value
									})),
									className: textareaCls,
									rows: 3,
									placeholder: "Course description..."
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: "Bible References",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputCls,
									placeholder: "e.g. John 1:1, Genesis 1:1"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: "Study Resources (PDF links)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputCls,
									placeholder: "Paste PDF URL or upload link..."
								})
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-2 mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setModal({
							open: false,
							mode: "add"
						}),
						className: "rounded-full border border-border px-5 py-2 text-sm font-medium text-navy hover:bg-cream",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: save,
						className: "rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-navy shadow-gold",
						children: modal.mode === "add" ? "Create Course" : "Save Changes"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialog, {
				open: confirm.open,
				onClose: () => setConfirm((p) => ({
					...p,
					open: false
				})),
				onConfirm: () => {
					setCourses((p) => p.filter((c) => c.id !== confirm.id));
					toast("Course deleted.", "error");
				},
				title: "Delete Course",
				message: "This will permanently delete the course and all its lessons.",
				danger: true
			})
		]
	});
}
var INIT_CATEGORIES = CATEGORIES_LIST.map((name, i) => ({
	id: `cat${i}`,
	name,
	courses: ADMIN_COURSES.filter((c) => c.category === name).length,
	color: [
		"bg-blue-100 text-blue-700",
		"bg-green-100 text-green-700",
		"bg-yellow-100 text-yellow-700",
		"bg-purple-100 text-purple-700",
		"bg-orange-100 text-orange-700",
		"bg-pink-100 text-pink-700",
		"bg-cyan-100 text-cyan-700"
	][i % 7]
}));
function CategoriesView() {
	const [cats, setCats] = (0, import_react.useState)(INIT_CATEGORIES);
	const [modal, setModal] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)({
		open: false,
		id: ""
	});
	function addCat() {
		if (!name.trim()) {
			toast("Category name required.", "error");
			return;
		}
		setCats((p) => [...p, {
			id: `cat${Date.now()}`,
			name,
			courses: 0,
			color: "bg-slate-100 text-slate-600"
		}]);
		setName("");
		setModal(false);
		toast("Category added.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-[1400px] mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Course Categories",
				desc: `${cats.length} categories`,
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setModal(true),
					className: "flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), " Add Category"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
				children: cats.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-background border border-border p-5 flex items-center justify-between hover:shadow-md transition-shadow",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 place-items-center rounded-xl bg-gradient-gold shadow-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "h-5 w-5 text-navy" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-navy text-sm",
							children: cat.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [cat.courses, " courses"]
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setConfirm({
							open: true,
							id: cat.id
						}),
						className: "grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:text-red-600 transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
					})]
				}, cat.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				open: modal,
				onClose: () => setModal(false),
				title: "Add Category",
				size: "sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					label: "Category Name",
					required: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: name,
						onChange: (e) => setName(e.target.value),
						className: inputCls,
						placeholder: "e.g. New Testament"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-2 mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setModal(false),
						className: "rounded-full border border-border px-4 py-2 text-sm text-navy hover:bg-cream",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: addCat,
						className: "rounded-full bg-gradient-gold px-4 py-2 text-sm font-semibold text-navy shadow-gold",
						children: "Add"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialog, {
				open: confirm.open,
				onClose: () => setConfirm((p) => ({
					...p,
					open: false
				})),
				onConfirm: () => {
					setCats((p) => p.filter((c) => c.id !== confirm.id));
					toast("Category deleted.", "error");
				},
				title: "Delete Category",
				message: "Courses in this category will become uncategorized.",
				danger: true
			})
		]
	});
}
var LESSONS = [
	{
		id: "l1",
		course: "Understanding the Gospel of John",
		title: "Introduction & Overview",
		duration: "8:32",
		order: 1,
		type: "Video",
		status: "Published",
		free: true
	},
	{
		id: "l2",
		course: "Understanding the Gospel of John",
		title: "Historical Context",
		duration: "12:14",
		order: 2,
		type: "Video",
		status: "Published",
		free: true
	},
	{
		id: "l3",
		course: "Understanding the Gospel of John",
		title: "The Word Became Flesh",
		duration: "15:40",
		order: 3,
		type: "Video",
		status: "Published",
		free: false
	},
	{
		id: "l4",
		course: "Foundations of Christian Faith",
		title: "What is the Gospel?",
		duration: "10:05",
		order: 1,
		type: "Video",
		status: "Published",
		free: true
	},
	{
		id: "l5",
		course: "Foundations of Christian Faith",
		title: "Grace and Salvation",
		duration: "11:28",
		order: 2,
		type: "Video",
		status: "Published",
		free: false
	},
	{
		id: "l6",
		course: "Prayer and Spiritual Growth",
		title: "Why We Pray",
		duration: "9:15",
		order: 1,
		type: "Video",
		status: "Draft",
		free: true
	}
];
function VideosView() {
	const [lessons, setLessons] = (0, import_react.useState)(LESSONS);
	const [search, setSearch] = (0, import_react.useState)("");
	const [modal, setModal] = (0, import_react.useState)({ open: false });
	const [confirm, setConfirm] = (0, import_react.useState)({
		open: false,
		id: ""
	});
	const [form, setForm] = (0, import_react.useState)({
		title: "",
		course: "",
		duration: "",
		order: 1,
		type: "Video",
		status: "Draft",
		free: false
	});
	const filtered = lessons.filter((l) => l.title.toLowerCase().includes(search.toLowerCase()) || l.course.toLowerCase().includes(search.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-[1400px] mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Videos & Lessons",
				desc: `${lessons.length} lessons`,
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => {
						setForm({
							title: "",
							course: "",
							duration: "",
							order: 1,
							type: "Video",
							status: "Draft",
							free: false
						});
						setModal({ open: true });
					},
					className: "flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), " Add Lesson"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
					value: search,
					onChange: setSearch,
					placeholder: "Search lessons or courses..."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				cols: [
					{
						key: "title",
						label: "Lesson",
						render: (l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-8 w-8 place-items-center rounded-lg bg-navy",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { className: "h-4 w-4 text-gold" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-navy text-sm",
								children: l.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: l.course
							})] })]
						})
					},
					{
						key: "order",
						label: "Order",
						render: (l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium text-navy",
							children: ["#", l.order]
						})
					},
					{
						key: "duration",
						label: "Duration",
						render: (l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: l.duration
						})
					},
					{
						key: "free",
						label: "Access",
						render: (l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: l.free ? "Free" : "Premium" })
					},
					{
						key: "status",
						label: "Status",
						render: (l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: l.status })
					}
				],
				rows: filtered,
				actions: (l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
						label: "Edit",
						onClick: () => {
							setForm({
								title: l.title,
								course: l.course,
								duration: l.duration,
								order: l.order,
								type: l.type,
								status: l.status,
								free: l.free
							});
							setModal({
								open: true,
								lesson: l
							});
						},
						variant: "ghost"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setConfirm({
							open: true,
							id: l.id
						}),
						className: "grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-red-600 hover:border-red-200 transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				open: modal.open,
				onClose: () => setModal({ open: false }),
				title: modal.lesson ? "Edit Lesson" : "Add Lesson",
				size: "md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: "Lesson Title",
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.title,
									onChange: (e) => setForm((f) => ({
										...f,
										title: e.target.value
									})),
									className: inputCls,
									placeholder: "Lesson title"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Course",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: form.course,
								onChange: (e) => setForm((f) => ({
									...f,
									course: e.target.value
								})),
								className: selectCls,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Select course..."
								}), ADMIN_COURSES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c.title }, c.id))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Lesson Order",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								value: form.order,
								onChange: (e) => setForm((f) => ({
									...f,
									order: +e.target.value
								})),
								className: inputCls,
								min: 1
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Duration",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.duration,
								onChange: (e) => setForm((f) => ({
									...f,
									duration: e.target.value
								})),
								className: inputCls,
								placeholder: "e.g. 12:30"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Access",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: form.free ? "Free" : "Premium",
								onChange: (e) => setForm((f) => ({
									...f,
									free: e.target.value === "Free"
								})),
								className: selectCls,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Free" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Premium" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: "Video Upload / URL",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputCls,
									placeholder: "Paste video URL or upload..."
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: "Bible References",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputCls,
									placeholder: "e.g. John 1:1, Romans 8:28"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Status",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: form.status,
								onChange: (e) => setForm((f) => ({
									...f,
									status: e.target.value
								})),
								className: selectCls,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Draft" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Published" })]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-2 mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setModal({ open: false }),
						className: "rounded-full border border-border px-5 py-2 text-sm font-medium text-navy hover:bg-cream",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							if (!form.title.trim()) {
								toast("Title required.", "error");
								return;
							}
							if (modal.lesson) {
								setLessons((p) => p.map((l) => l.id === modal.lesson.id ? {
									...l,
									...form
								} : l));
								toast("Lesson updated.");
							} else {
								setLessons((p) => [...p, {
									id: `l${Date.now()}`,
									...form
								}]);
								toast("Lesson added.");
							}
							setModal({ open: false });
						},
						className: "rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-navy shadow-gold",
						children: modal.lesson ? "Save Changes" : "Add Lesson"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialog, {
				open: confirm.open,
				onClose: () => setConfirm((p) => ({
					...p,
					open: false
				})),
				onConfirm: () => {
					setLessons((p) => p.filter((l) => l.id !== confirm.id));
					toast("Lesson deleted.", "error");
				},
				title: "Delete Lesson",
				message: "This lesson will be permanently removed.",
				danger: true
			})
		]
	});
}
var BLANK_SERMON = {
	title: "",
	speaker: "",
	bibleRef: "",
	category: "Grace",
	date: "",
	duration: "",
	views: 0,
	status: "Draft",
	thumbnail: "🎙️"
};
var SERMON_CATS = [
	"Kingdom of God",
	"Grace",
	"Faith",
	"Prayer",
	"Redemption",
	"Worship",
	"Prophecy",
	"Evangelism"
];
var SERMON_EMOJIS = [
	"🎙️",
	"🕊️",
	"⛰️",
	"🏛️",
	"💛",
	"✝️",
	"📖",
	"🙏"
];
function SermonsView() {
	const [sermons, setSermons] = (0, import_react.useState)(ADMIN_SERMONS);
	const [search, setSearch] = (0, import_react.useState)("");
	const [modal, setModal] = (0, import_react.useState)({
		open: false,
		mode: "add"
	});
	const [confirm, setConfirm] = (0, import_react.useState)({
		open: false,
		id: ""
	});
	const [form, setForm] = (0, import_react.useState)(BLANK_SERMON);
	const filtered = sermons.filter((s) => s.title.toLowerCase().includes(search.toLowerCase()) || s.speaker.toLowerCase().includes(search.toLowerCase()));
	function openAdd() {
		setForm(BLANK_SERMON);
		setModal({
			open: true,
			mode: "add"
		});
	}
	function openEdit(s) {
		setForm(s);
		setModal({
			open: true,
			mode: "edit",
			sermon: s
		});
	}
	function save() {
		if (!form.title.trim() || !form.speaker.trim()) {
			toast("Title and speaker required.", "error");
			return;
		}
		if (modal.mode === "add") {
			setSermons((p) => [...p, {
				...form,
				id: `s${Date.now()}`
			}]);
			toast("Sermon created.");
		} else if (modal.sermon) {
			setSermons((p) => p.map((s) => s.id === modal.sermon.id ? {
				...modal.sermon,
				...form
			} : s));
			toast("Sermon updated.");
		}
		setModal({
			open: false,
			mode: "add"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-[1400px] mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Sermons",
				desc: `${sermons.length} sermons`,
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: openAdd,
					className: "flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), " New Sermon"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
					value: search,
					onChange: setSearch,
					placeholder: "Search sermons..."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				cols: [
					{
						key: "title",
						label: "Sermon",
						render: (s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy text-xl",
								children: s.thumbnail
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-navy text-sm",
								children: s.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: s.speaker
							})] })]
						})
					},
					{
						key: "bibleRef",
						label: "Reference",
						render: (s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium text-gold",
							children: s.bibleRef
						})
					},
					{
						key: "date",
						label: "Date",
						render: (s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: s.date
						})
					},
					{
						key: "views",
						label: "Views",
						render: (s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-navy",
							children: s.views.toLocaleString()
						})
					},
					{
						key: "status",
						label: "Status",
						render: (s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: s.status })
					}
				],
				rows: filtered,
				actions: (s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
							label: "Edit",
							onClick: () => openEdit(s),
							variant: "ghost"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
							label: s.status === "Archived" ? "Restore" : "Archive",
							onClick: () => {
								setSermons((p) => p.map((x) => x.id === s.id ? {
									...x,
									status: x.status === "Archived" ? "Published" : "Archived"
								} : x));
								toast("Status updated.");
							},
							variant: "default"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setConfirm({
								open: true,
								id: s.id
							}),
							className: "grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-red-600 hover:border-red-200 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				open: modal.open,
				onClose: () => setModal({
					open: false,
					mode: "add"
				}),
				title: modal.mode === "add" ? "Add Sermon" : "Edit Sermon",
				size: "lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: "Sermon Title",
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.title,
									onChange: (e) => setForm((f) => ({
										...f,
										title: e.target.value
									})),
									className: inputCls,
									placeholder: "Sermon title"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Speaker",
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.speaker,
								onChange: (e) => setForm((f) => ({
									...f,
									speaker: e.target.value
								})),
								className: inputCls,
								placeholder: "Pastor name"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Bible Reference",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.bibleRef,
								onChange: (e) => setForm((f) => ({
									...f,
									bibleRef: e.target.value
								})),
								className: inputCls,
								placeholder: "e.g. John 3:16"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Category",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: form.category,
								onChange: (e) => setForm((f) => ({
									...f,
									category: e.target.value
								})),
								className: selectCls,
								children: SERMON_CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Date",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "date",
								value: form.date,
								onChange: (e) => setForm((f) => ({
									...f,
									date: e.target.value
								})),
								className: inputCls
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Duration",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.duration,
								onChange: (e) => setForm((f) => ({
									...f,
									duration: e.target.value
								})),
								className: inputCls,
								placeholder: "e.g. 52:14"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Status",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: form.status,
								onChange: (e) => setForm((f) => ({
									...f,
									status: e.target.value
								})),
								className: selectCls,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Draft" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Published" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Archived" })
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Thumbnail",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2 flex-wrap",
								children: SERMON_EMOJIS.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setForm((f) => ({
										...f,
										thumbnail: e
									})),
									className: `h-9 w-9 rounded-xl text-lg flex items-center justify-center ${form.thumbnail === e ? "bg-gradient-gold shadow-gold" : "bg-cream hover:bg-muted"}`,
									children: e
								}, e))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: "Video/Audio Upload URL",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputCls,
									placeholder: "Paste media URL..."
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: "Notes & Resources",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									className: textareaCls,
									rows: 2,
									placeholder: "Sermon notes, resource links..."
								})
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-2 mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setModal({
							open: false,
							mode: "add"
						}),
						className: "rounded-full border border-border px-5 py-2 text-sm font-medium text-navy hover:bg-cream",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: save,
						className: "rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-navy shadow-gold",
						children: modal.mode === "add" ? "Add Sermon" : "Save Changes"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialog, {
				open: confirm.open,
				onClose: () => setConfirm((p) => ({
					...p,
					open: false
				})),
				onConfirm: () => {
					setSermons((p) => p.filter((s) => s.id !== confirm.id));
					toast("Sermon deleted.", "error");
				},
				title: "Delete Sermon",
				message: "This sermon will be permanently deleted.",
				danger: true
			})
		]
	});
}
var BLANK_DEVOTION = {
	verse: "",
	ref: "",
	message: "",
	reflection: "",
	prayer: "",
	date: "",
	status: "Draft"
};
function DevotionsView() {
	const [devotions, setDevotions] = (0, import_react.useState)(ADMIN_DEVOTIONS);
	const [modal, setModal] = (0, import_react.useState)({
		open: false,
		mode: "add"
	});
	const [confirm, setConfirm] = (0, import_react.useState)({
		open: false,
		id: ""
	});
	const [form, setForm] = (0, import_react.useState)(BLANK_DEVOTION);
	function openAdd() {
		setForm(BLANK_DEVOTION);
		setModal({
			open: true,
			mode: "add"
		});
	}
	function openEdit(d) {
		setForm(d);
		setModal({
			open: true,
			mode: "edit",
			item: d
		});
	}
	function save() {
		if (!form.verse.trim() || !form.ref.trim()) {
			toast("Verse and reference required.", "error");
			return;
		}
		if (modal.mode === "add") {
			setDevotions((p) => [...p, {
				...form,
				id: `dv${Date.now()}`
			}]);
			toast("Devotion created.");
		} else if (modal.item) {
			setDevotions((p) => p.map((d) => d.id === modal.item.id ? {
				...modal.item,
				...form
			} : d));
			toast("Devotion updated.");
		}
		setModal({
			open: false,
			mode: "add"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-[1400px] mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Daily Devotions",
				desc: `${devotions.length} devotions`,
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: openAdd,
					className: "flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), " New Devotion"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 xl:grid-cols-3 gap-4",
				children: devotions.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-background border border-border p-5 flex flex-col gap-3 hover:shadow-md transition-shadow",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-xl bg-gradient-gold shadow-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-5 w-5 text-navy" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: d.status })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "font-serif text-base text-navy leading-relaxed",
							children: [
								"\"",
								d.verse,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-gold font-semibold text-sm",
							children: ["— ", d.ref]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground line-clamp-2",
							children: d.message
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between pt-2 border-t border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: d.date || "Not scheduled"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
									label: "Edit",
									onClick: () => openEdit(d),
									variant: "ghost"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setConfirm({
										open: true,
										id: d.id
									}),
									className: "grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-red-600 hover:border-red-200 transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
								})]
							})]
						})
					]
				}, d.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				open: modal.open,
				onClose: () => setModal({
					open: false,
					mode: "add"
				}),
				title: modal.mode === "add" ? "Create Devotion" : "Edit Devotion",
				size: "lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: "Bible Verse",
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.verse,
									onChange: (e) => setForm((f) => ({
										...f,
										verse: e.target.value
									})),
									className: inputCls,
									placeholder: "Verse text..."
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: "Reference",
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.ref,
									onChange: (e) => setForm((f) => ({
										...f,
										ref: e.target.value
									})),
									className: inputCls,
									placeholder: "e.g. Psalm 46:10"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Devotional Message",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: form.message,
								onChange: (e) => setForm((f) => ({
									...f,
									message: e.target.value
								})),
								className: textareaCls,
								rows: 3,
								placeholder: "Write the devotional message..."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Reflection Question",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.reflection,
								onChange: (e) => setForm((f) => ({
									...f,
									reflection: e.target.value
								})),
								className: inputCls,
								placeholder: "What reflection question to ask readers?"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Prayer of the Day",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: form.prayer,
								onChange: (e) => setForm((f) => ({
									...f,
									prayer: e.target.value
								})),
								className: textareaCls,
								rows: 2,
								placeholder: "Prayer text..."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: "Publish Date",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "date",
									value: form.date,
									onChange: (e) => setForm((f) => ({
										...f,
										date: e.target.value
									})),
									className: inputCls
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: "Status",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: form.status,
									onChange: (e) => setForm((f) => ({
										...f,
										status: e.target.value
									})),
									className: selectCls,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Draft" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Scheduled" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Published" })
									]
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-2 mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setModal({
							open: false,
							mode: "add"
						}),
						className: "rounded-full border border-border px-5 py-2 text-sm font-medium text-navy hover:bg-cream",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: save,
						className: "rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-navy shadow-gold",
						children: modal.mode === "add" ? "Create Devotion" : "Save Changes"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialog, {
				open: confirm.open,
				onClose: () => setConfirm((p) => ({
					...p,
					open: false
				})),
				onConfirm: () => {
					setDevotions((p) => p.filter((d) => d.id !== confirm.id));
					toast("Devotion deleted.", "error");
				},
				title: "Delete Devotion",
				message: "This devotion will be permanently deleted.",
				danger: true
			})
		]
	});
}
var EVENT_CATS = [
	"Worship",
	"Conference",
	"Bible Study",
	"Youth",
	"Prayer",
	"Seminar",
	"Outreach"
];
var EVENT_EMOJIS = [
	"⛪",
	"🌟",
	"📖",
	"🎉",
	"🙏",
	"💑",
	"✝️",
	"🤝"
];
var BLANK_EVENT = {
	title: "",
	date: "",
	time: "",
	location: "",
	category: "Worship",
	capacity: 100,
	registered: 0,
	status: "Upcoming",
	image: "⛪"
};
function EventsAdminView() {
	const [events, setEvents] = (0, import_react.useState)(ADMIN_EVENTS);
	const [search, setSearch] = (0, import_react.useState)("");
	const [filterStatus, setFilterStatus] = (0, import_react.useState)("All");
	const [modal, setModal] = (0, import_react.useState)({
		open: false,
		mode: "add"
	});
	const [confirm, setConfirm] = (0, import_react.useState)({
		open: false,
		id: ""
	});
	const [form, setForm] = (0, import_react.useState)(BLANK_EVENT);
	const filtered = events.filter((e) => {
		const q = search.toLowerCase();
		return (e.title.toLowerCase().includes(q) || e.location.toLowerCase().includes(q)) && (filterStatus === "All" || e.status === filterStatus);
	});
	function openAdd() {
		setForm(BLANK_EVENT);
		setModal({
			open: true,
			mode: "add"
		});
	}
	function openEdit(e) {
		setForm(e);
		setModal({
			open: true,
			mode: "edit",
			event: e
		});
	}
	function save() {
		if (!form.title.trim() || !form.date) {
			toast("Title and date required.", "error");
			return;
		}
		if (modal.mode === "add") {
			setEvents((p) => [...p, {
				...form,
				id: `e${Date.now()}`
			}]);
			toast("Event created.");
		} else if (modal.event) {
			setEvents((p) => p.map((e) => e.id === modal.event.id ? {
				...modal.event,
				...form
			} : e));
			toast("Event updated.");
		}
		setModal({
			open: false,
			mode: "add"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-[1400px] mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Events",
				desc: `${events.length} events`,
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => toast("Attendee list exported."),
						className: "flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-medium text-navy hover:bg-cream",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), " Export"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: openAdd,
						className: "flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), " New Event"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row gap-3 mb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
						value: search,
						onChange: setSearch,
						placeholder: "Search events..."
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					value: filterStatus,
					onChange: (e) => setFilterStatus(e.target.value),
					className: "rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-navy focus:outline-none",
					children: [
						"All",
						"Upcoming",
						"Ongoing",
						"Past",
						"Cancelled"
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				cols: [
					{
						key: "title",
						label: "Event",
						render: (e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-gold shadow-gold text-xl",
								children: e.image
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-navy text-sm",
								children: e.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: e.location
							})] })]
						})
					},
					{
						key: "date",
						label: "Date",
						render: (e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted-foreground",
							children: [
								e.date,
								" · ",
								e.time
							]
						})
					},
					{
						key: "registered",
						label: "Registrations",
						render: (e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 min-w-[100px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1 h-1.5 rounded-full bg-cream overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-gradient-gold",
									style: { width: `${Math.round(e.registered / e.capacity * 100)}%` }
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground shrink-0",
								children: [
									e.registered,
									"/",
									e.capacity
								]
							})]
						})
					},
					{
						key: "category",
						label: "Type",
						render: (e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: e.category
						})
					},
					{
						key: "status",
						label: "Status",
						render: (e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: e.status })
					}
				],
				rows: filtered,
				actions: (e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
							label: "Edit",
							onClick: () => openEdit(e),
							variant: "ghost"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								toast(`Reminder sent for "${e.title}".`);
							},
							className: "grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-blue-600 hover:border-blue-200 transition-colors",
							title: "Send Reminder",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-3.5 w-3.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setConfirm({
								open: true,
								id: e.id
							}),
							className: "grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-red-600 hover:border-red-200 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				open: modal.open,
				onClose: () => setModal({
					open: false,
					mode: "add"
				}),
				title: modal.mode === "add" ? "Create Event" : "Edit Event",
				size: "lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: "Event Title",
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.title,
									onChange: (e) => setForm((f) => ({
										...f,
										title: e.target.value
									})),
									className: inputCls,
									placeholder: "Event title"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Date",
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "date",
								value: form.date,
								onChange: (e) => setForm((f) => ({
									...f,
									date: e.target.value
								})),
								className: inputCls
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Time",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.time,
								onChange: (e) => setForm((f) => ({
									...f,
									time: e.target.value
								})),
								className: inputCls,
								placeholder: "e.g. 9:00 AM"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Location",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.location,
								onChange: (e) => setForm((f) => ({
									...f,
									location: e.target.value
								})),
								className: inputCls,
								placeholder: "Venue name"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Category",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: form.category,
								onChange: (e) => setForm((f) => ({
									...f,
									category: e.target.value
								})),
								className: selectCls,
								children: EVENT_CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Capacity",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								value: form.capacity,
								onChange: (e) => setForm((f) => ({
									...f,
									capacity: +e.target.value
								})),
								className: inputCls
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Status",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: form.status,
								onChange: (e) => setForm((f) => ({
									...f,
									status: e.target.value
								})),
								className: selectCls,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Upcoming" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Ongoing" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Past" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Cancelled" })
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Image Emoji",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2 flex-wrap",
								children: EVENT_EMOJIS.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setForm((f) => ({
										...f,
										image: e
									})),
									className: `h-9 w-9 rounded-xl text-lg flex items-center justify-center ${form.image === e ? "bg-gradient-gold shadow-gold" : "bg-cream hover:bg-muted"}`,
									children: e
								}, e))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: "Description",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									className: textareaCls,
									rows: 2,
									placeholder: "Event description..."
								})
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-2 mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setModal({
							open: false,
							mode: "add"
						}),
						className: "rounded-full border border-border px-5 py-2 text-sm font-medium text-navy hover:bg-cream",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: save,
						className: "rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-navy shadow-gold",
						children: modal.mode === "add" ? "Create Event" : "Save Changes"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialog, {
				open: confirm.open,
				onClose: () => setConfirm((p) => ({
					...p,
					open: false
				})),
				onConfirm: () => {
					setEvents((p) => p.filter((e) => e.id !== confirm.id));
					toast("Event deleted.", "error");
				},
				title: "Delete Event",
				message: "This event and all registrations will be deleted.",
				danger: true
			})
		]
	});
}
var REGISTRATIONS = ADMIN_MEMBERS.slice(0, 6).flatMap((m, i) => [{
	id: `reg${i}a`,
	member: m.name,
	email: m.email,
	event: ADMIN_EVENTS[i % ADMIN_EVENTS.length].title,
	date: `Jun ${18 + i}, 2026`,
	status: i % 4 === 2 ? "Pending" : "Confirmed",
	attended: i % 3 === 0
}]);
function RegistrationsView() {
	const [regs, setRegs] = (0, import_react.useState)(REGISTRATIONS);
	const [search, setSearch] = (0, import_react.useState)("");
	const filtered = regs.filter((r) => r.member.toLowerCase().includes(search.toLowerCase()) || r.event.toLowerCase().includes(search.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-[1400px] mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Event Registrations",
				desc: `${regs.length} registrations`,
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => toast("Attendee list exported — CSV ready."),
					className: "flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-medium text-navy hover:bg-cream",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), " Export"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
					value: search,
					onChange: setSearch,
					placeholder: "Search by member or event..."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				cols: [
					{
						key: "member",
						label: "Member",
						render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-navy text-sm",
							children: r.member
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: r.email
						})] })
					},
					{
						key: "event",
						label: "Event",
						render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-navy",
							children: r.event
						})
					},
					{
						key: "date",
						label: "Registered",
						render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: r.date
						})
					},
					{
						key: "status",
						label: "Status",
						render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: r.status })
					},
					{
						key: "attended",
						label: "Attended",
						render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `text-xs font-semibold ${r.attended ? "text-emerald-600" : "text-muted-foreground"}`,
							children: r.attended ? "✓ Yes" : "—"
						})
					}
				],
				rows: filtered,
				actions: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-1.5",
					children: [
						!r.attended && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
							label: "Mark Present",
							onClick: () => {
								setRegs((p) => p.map((x) => x.id === r.id ? {
									...x,
									attended: true,
									status: "Confirmed"
								} : x));
								toast("Attendance marked.");
							},
							variant: "success"
						}),
						r.status === "Pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
							label: "Approve",
							onClick: () => {
								setRegs((p) => p.map((x) => x.id === r.id ? {
									...x,
									status: "Confirmed"
								} : x));
								toast("Registration approved.");
							},
							variant: "default"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
							label: "Cancel",
							onClick: () => {
								setRegs((p) => p.filter((x) => x.id !== r.id));
								toast("Registration cancelled.", "error");
							},
							variant: "danger"
						})
					]
				})
			})
		]
	});
}
function PrayerAdminView() {
	const [prayers, setPrayers] = (0, import_react.useState)(ADMIN_PRAYERS);
	const [search, setSearch] = (0, import_react.useState)("");
	const [filterPrivacy, setFilterPrivacy] = (0, import_react.useState)("All");
	const [filterStatus, setFilterStatus] = (0, import_react.useState)("All");
	const [confirm, setConfirm] = (0, import_react.useState)({
		open: false,
		id: ""
	});
	const filtered = prayers.filter((p) => {
		const q = search.toLowerCase();
		return (p.title.toLowerCase().includes(q) || p.author.toLowerCase().includes(q)) && (filterPrivacy === "All" || p.privacy === filterPrivacy) && (filterStatus === "All" || p.status === filterStatus);
	});
	function updateStatus(id, status) {
		setPrayers((p) => p.map((x) => x.id === id ? {
			...x,
			status
		} : x));
		toast(`Prayer request ${status.toLowerCase()}.`);
	}
	function markAnswered(id) {
		setPrayers((p) => p.map((x) => x.id === id ? {
			...x,
			answered: true
		} : x));
		toast("Marked as answered! 🙏");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-[1400px] mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Prayer Requests",
				desc: `${prayers.length} requests`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row gap-3 mb-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
							value: search,
							onChange: setSearch,
							placeholder: "Search requests..."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: filterPrivacy,
						onChange: (e) => setFilterPrivacy(e.target.value),
						className: "rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-navy focus:outline-none",
						children: [
							"All",
							"Public",
							"Private"
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: filterStatus,
						onChange: (e) => setFilterStatus(e.target.value),
						className: "rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-navy focus:outline-none",
						children: [
							"All",
							"Pending",
							"Approved",
							"Hidden"
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				cols: [
					{
						key: "title",
						label: "Prayer Request",
						render: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-navy text-sm",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-0.5 truncate",
									children: p.detail
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: [
										"By ",
										p.author,
										" · ",
										p.createdAt
									]
								})
							]
						})
					},
					{
						key: "category",
						label: "Category",
						render: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: p.category
						})
					},
					{
						key: "privacy",
						label: "Privacy",
						render: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: p.privacy })
					},
					{
						key: "prayerCount",
						label: "Prayers",
						render: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium text-navy",
							children: ["🙏 ", p.prayerCount]
						})
					},
					{
						key: "answered",
						label: "Answered",
						render: (p) => p.answered ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-emerald-600 font-semibold text-xs",
							children: "✓ Yes"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground text-xs",
							children: "Pending"
						})
					},
					{
						key: "status",
						label: "Status",
						render: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: p.status })
					}
				],
				rows: filtered,
				actions: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-1.5 flex-wrap",
					children: [
						p.status === "Pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
							label: "Approve",
							onClick: () => updateStatus(p.id, "Approved"),
							variant: "success"
						}),
						p.status === "Approved" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
							label: "Hide",
							onClick: () => updateStatus(p.id, "Hidden"),
							variant: "default"
						}),
						p.status === "Hidden" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
							label: "Restore",
							onClick: () => updateStatus(p.id, "Approved"),
							variant: "ghost"
						}),
						!p.answered && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
							label: "Answered ✓",
							onClick: () => markAnswered(p.id),
							variant: "success"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setConfirm({
								open: true,
								id: p.id
							}),
							className: "grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-red-600 hover:border-red-200 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialog, {
				open: confirm.open,
				onClose: () => setConfirm((p) => ({
					...p,
					open: false
				})),
				onConfirm: () => {
					setPrayers((p) => p.filter((x) => x.id !== confirm.id));
					toast("Request deleted.", "error");
				},
				title: "Delete Prayer Request",
				message: "This prayer request will be permanently removed.",
				danger: true
			})
		]
	});
}
function CommunityAdminView() {
	const [posts, setPosts] = (0, import_react.useState)(ADMIN_POSTS);
	const [search, setSearch] = (0, import_react.useState)("");
	const [filterStatus, setFilterStatus] = (0, import_react.useState)("All");
	const [confirm, setConfirm] = (0, import_react.useState)({
		open: false,
		id: ""
	});
	const filtered = posts.filter((p) => {
		const q = search.toLowerCase();
		return (p.content.toLowerCase().includes(q) || p.author.toLowerCase().includes(q)) && (filterStatus === "All" || p.status === filterStatus);
	});
	function updateStatus(id, status) {
		setPosts((p) => p.map((x) => x.id === id ? {
			...x,
			status
		} : x));
		toast(`Post ${status.toLowerCase()}.`);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-[1400px] mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Community Posts",
				desc: `${posts.filter((p) => p.status === "Pending").length} pending approval`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row gap-3 mb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
						value: search,
						onChange: setSearch,
						placeholder: "Search posts or authors..."
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					value: filterStatus,
					onChange: (e) => setFilterStatus(e.target.value),
					className: "rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-navy focus:outline-none",
					children: [
						"All",
						"Pending",
						"Approved",
						"Hidden"
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				cols: [
					{
						key: "author",
						label: "Author",
						render: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-gold text-navy font-bold text-xs",
								children: p.avatar
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-navy text-sm",
								children: p.author
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: p.createdAt
							})] })]
						})
					},
					{
						key: "content",
						label: "Content",
						render: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-navy max-w-xs truncate",
							children: p.content
						})
					},
					{
						key: "type",
						label: "Type",
						render: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground capitalize",
							children: p.type
						})
					},
					{
						key: "likes",
						label: "Engagement",
						render: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted-foreground",
							children: [
								"❤️ ",
								p.likes,
								" · 💬 ",
								p.comments
							]
						})
					},
					{
						key: "reported",
						label: "Reported",
						render: (p) => p.reported ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-red-600 font-semibold text-xs",
							children: "⚠ Flagged"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground text-xs",
							children: "Clean"
						})
					},
					{
						key: "status",
						label: "Status",
						render: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: p.status })
					}
				],
				rows: filtered,
				actions: (p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-1.5 flex-wrap",
					children: [
						p.status === "Pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
							label: "Approve",
							onClick: () => updateStatus(p.id, "Approved"),
							variant: "success"
						}),
						p.status === "Approved" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
							label: "Hide",
							onClick: () => updateStatus(p.id, "Hidden"),
							variant: "default"
						}),
						p.status === "Hidden" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
							label: "Restore",
							onClick: () => updateStatus(p.id, "Approved"),
							variant: "ghost"
						}),
						p.reported && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
							label: "Dismiss Report",
							onClick: () => {
								setPosts((prev) => prev.map((x) => x.id === p.id ? {
									...x,
									reported: false
								} : x));
								toast("Report dismissed.");
							},
							variant: "ghost"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setConfirm({
								open: true,
								id: p.id
							}),
							className: "grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-red-600 hover:border-red-200 transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialog, {
				open: confirm.open,
				onClose: () => setConfirm((p) => ({
					...p,
					open: false
				})),
				onConfirm: () => {
					setPosts((p) => p.filter((x) => x.id !== confirm.id));
					toast("Post deleted.", "error");
				},
				title: "Delete Post",
				message: "This community post will be permanently removed.",
				danger: true
			})
		]
	});
}
var BLANK_ANN = {
	title: "",
	description: "",
	category: "Church News",
	pinned: false,
	status: "Draft",
	publishDate: "",
	image: "📢"
};
var ANN_CATS = [
	"Church News",
	"Bible Academy",
	"Events",
	"Prayer",
	"Missions",
	"Giving"
];
function AnnouncementsView() {
	const [anns, setAnns] = (0, import_react.useState)(ADMIN_ANNOUNCEMENTS);
	const [modal, setModal] = (0, import_react.useState)({
		open: false,
		mode: "add"
	});
	const [confirm, setConfirm] = (0, import_react.useState)({
		open: false,
		id: ""
	});
	const [form, setForm] = (0, import_react.useState)(BLANK_ANN);
	function openAdd() {
		setForm(BLANK_ANN);
		setModal({
			open: true,
			mode: "add"
		});
	}
	function openEdit(a) {
		setForm(a);
		setModal({
			open: true,
			mode: "edit",
			item: a
		});
	}
	function save() {
		if (!form.title.trim()) {
			toast("Title required.", "error");
			return;
		}
		if (modal.mode === "add") {
			setAnns((p) => [...p, {
				...form,
				id: `an${Date.now()}`
			}]);
			toast("Announcement created.");
		} else if (modal.item) {
			setAnns((p) => p.map((a) => a.id === modal.item.id ? {
				...modal.item,
				...form
			} : a));
			toast("Announcement updated.");
		}
		setModal({
			open: false,
			mode: "add"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-[1400px] mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Announcements",
				desc: `${anns.length} announcements`,
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: openAdd,
					className: "flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), " New Announcement"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 gap-4",
				children: anns.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `rounded-2xl bg-background border p-5 hover:shadow-md transition-shadow ${a.pinned ? "border-gold/40" : "border-border"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-2xl",
									children: a.image
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium text-navy text-sm",
										children: a.title
									}), a.pinned && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, { className: "h-3.5 w-3.5 text-gold" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										a.category,
										" · ",
										a.publishDate
									]
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: a.status })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground line-clamp-2",
							children: a.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 mt-4 pt-3 border-t border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
									label: "Edit",
									onClick: () => openEdit(a),
									variant: "ghost"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
									label: a.pinned ? "Unpin" : "Pin",
									onClick: () => {
										setAnns((p) => p.map((x) => x.id === a.id ? {
											...x,
											pinned: !x.pinned
										} : x));
										toast(a.pinned ? "Unpinned." : "Pinned to dashboard.");
									},
									variant: "default"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
									label: a.status === "Published" ? "Unpublish" : "Publish",
									onClick: () => {
										setAnns((p) => p.map((x) => x.id === a.id ? {
											...x,
											status: x.status === "Published" ? "Draft" : "Published"
										} : x));
										toast("Status updated.");
									},
									variant: "success"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setConfirm({
										open: true,
										id: a.id
									}),
									className: "grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-red-600 hover:border-red-200 transition-colors ml-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
								})
							]
						})
					]
				}, a.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				open: modal.open,
				onClose: () => setModal({
					open: false,
					mode: "add"
				}),
				title: modal.mode === "add" ? "Create Announcement" : "Edit Announcement",
				size: "md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Title",
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.title,
								onChange: (e) => setForm((f) => ({
									...f,
									title: e.target.value
								})),
								className: inputCls,
								placeholder: "Announcement title"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Description",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: form.description,
								onChange: (e) => setForm((f) => ({
									...f,
									description: e.target.value
								})),
								className: textareaCls,
								rows: 3,
								placeholder: "Announcement body..."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-2 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									label: "Category",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: form.category,
										onChange: (e) => setForm((f) => ({
											...f,
											category: e.target.value
										})),
										className: selectCls,
										children: ANN_CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									label: "Status",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: form.status,
										onChange: (e) => setForm((f) => ({
											...f,
											status: e.target.value
										})),
										className: selectCls,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Draft" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Scheduled" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Published" })
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									label: "Publish Date",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "date",
										value: form.publishDate,
										onChange: (e) => setForm((f) => ({
											...f,
											publishDate: e.target.value
										})),
										className: inputCls
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									label: "Pin to Dashboard",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 mt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setForm((f) => ({
												...f,
												pinned: !f.pinned
											})),
											className: `relative inline-flex h-5 w-9 rounded-full transition-colors ${form.pinned ? "bg-gradient-gold" : "bg-border"}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `mt-0.5 ml-0.5 inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${form.pinned ? "translate-x-4" : "translate-x-0"}` })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: form.pinned ? "Pinned" : "Not pinned"
										})]
									})
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-2 mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setModal({
							open: false,
							mode: "add"
						}),
						className: "rounded-full border border-border px-5 py-2 text-sm font-medium text-navy hover:bg-cream",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: save,
						className: "rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-navy shadow-gold",
						children: modal.mode === "add" ? "Create" : "Save Changes"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialog, {
				open: confirm.open,
				onClose: () => setConfirm((p) => ({
					...p,
					open: false
				})),
				onConfirm: () => {
					setAnns((p) => p.filter((a) => a.id !== confirm.id));
					toast("Announcement deleted.", "error");
				},
				title: "Delete Announcement",
				message: "This announcement will be permanently deleted.",
				danger: true
			})
		]
	});
}
var CAMPAIGNS = [
	{
		id: "camp1",
		name: "Building Fund 2026",
		goal: 5e4,
		raised: 32480,
		donors: 124
	},
	{
		id: "camp2",
		name: "Missions Africa",
		goal: 2e4,
		raised: 14250,
		donors: 89
	},
	{
		id: "camp3",
		name: "Youth Ministry",
		goal: 1e4,
		raised: 7820,
		donors: 56
	}
];
function DonationsView() {
	const [donations, setDonations] = (0, import_react.useState)(ADMIN_DONATIONS);
	const [search, setSearch] = (0, import_react.useState)("");
	const [filterStatus, setFilterStatus] = (0, import_react.useState)("All");
	const [filterType, setFilterType] = (0, import_react.useState)("All");
	const filtered = donations.filter((d) => {
		const q = search.toLowerCase();
		return (d.donor.toLowerCase().includes(q) || d.fund.toLowerCase().includes(q)) && (filterStatus === "All" || d.status === filterStatus) && (filterType === "All" || d.type === filterType);
	});
	const totalSuccessful = donations.filter((d) => d.status === "Successful").reduce((s, d) => s + d.amount, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-[1400px] mx-auto space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-3",
				children: [
					{
						label: "Today",
						value: "$2,840"
					},
					{
						label: "This Week",
						value: "$14,210"
					},
					{
						label: "This Month",
						value: "$48,210"
					},
					{
						label: "This Year",
						value: "$412,840"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-background border border-border p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wide text-muted-foreground",
						children: s.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-serif text-2xl text-navy",
						children: s.value
					})]
				}, s.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-background border border-border p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg text-navy",
						children: "Active Campaigns"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => toast("Campaign created!"),
						className: "flex items-center gap-1.5 rounded-full bg-gradient-gold px-3 py-1.5 text-xs font-semibold text-navy shadow-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" }), " New Campaign"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-3 gap-4",
					children: CAMPAIGNS.map((c) => {
						const pct = Math.round(c.raised / c.goal * 100);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-cream p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-navy text-sm",
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 h-2 rounded-full bg-border overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full bg-gradient-gold",
										style: { width: `${pct}%` }
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between mt-1.5 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										"$",
										c.raised.toLocaleString(),
										" raised"
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										pct,
										"% of $",
										c.goal.toLocaleString()
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: [c.donors, " donors"]
								})
							]
						}, c.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Donation History",
				desc: `${filtered.length} records · $${totalSuccessful.toLocaleString()} total`,
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => toast("Donation report exported."),
					className: "flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-medium text-navy hover:bg-cream",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), " Export"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row gap-3 mb-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
							value: search,
							onChange: setSearch,
							placeholder: "Search by donor or fund..."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: filterStatus,
						onChange: (e) => setFilterStatus(e.target.value),
						className: "rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-navy focus:outline-none",
						children: [
							"All",
							"Successful",
							"Pending",
							"Failed",
							"Refunded"
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: filterType,
						onChange: (e) => setFilterType(e.target.value),
						className: "rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-navy focus:outline-none",
						children: [
							"All",
							"One-time",
							"Recurring"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t }, t))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				cols: [
					{
						key: "donor",
						label: "Donor",
						render: (d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-navy text-sm",
							children: d.donor
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: d.email
						})] })
					},
					{
						key: "fund",
						label: "Fund",
						render: (d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-navy",
							children: d.fund
						})
					},
					{
						key: "amount",
						label: "Amount",
						render: (d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-semibold text-emerald-600",
							children: ["$", d.amount.toLocaleString()]
						})
					},
					{
						key: "type",
						label: "Type",
						render: (d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: d.type
						})
					},
					{
						key: "method",
						label: "Method",
						render: (d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: d.method
						})
					},
					{
						key: "date",
						label: "Date",
						render: (d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: d.date
						})
					},
					{
						key: "status",
						label: "Status",
						render: (d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: d.status })
					}
				],
				rows: filtered,
				actions: (d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-end gap-1.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
						label: "Receipt",
						onClick: () => toast(`Receipt sent to ${d.email}.`),
						variant: "ghost"
					})
				})
			})
		]
	});
}
function PlansView() {
	const [plans, setPlans] = (0, import_react.useState)(ADMIN_PLANS);
	const [modal, setModal] = (0, import_react.useState)({
		open: false,
		mode: "add"
	});
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		monthlyPrice: 0,
		yearlyPrice: 0,
		features: "",
		status: "Active"
	});
	function openAdd() {
		setForm({
			name: "",
			monthlyPrice: 0,
			yearlyPrice: 0,
			features: "",
			status: "Active"
		});
		setModal({
			open: true,
			mode: "add"
		});
	}
	function openEdit(p) {
		setForm({
			name: p.name,
			monthlyPrice: p.monthlyPrice,
			yearlyPrice: p.yearlyPrice,
			features: p.features.join("\n"),
			status: p.status
		});
		setModal({
			open: true,
			mode: "edit",
			plan: p
		});
	}
	function save() {
		if (!form.name.trim()) {
			toast("Plan name required.", "error");
			return;
		}
		const features = form.features.split("\n").map((f) => f.trim()).filter(Boolean);
		if (modal.mode === "add") {
			setPlans((p) => [...p, {
				id: `pl${Date.now()}`,
				...form,
				features,
				activeSubscribers: 0
			}]);
			toast("Plan created.");
		} else if (modal.plan) {
			setPlans((p) => p.map((x) => x.id === modal.plan.id ? {
				...x,
				...form,
				features
			} : x));
			toast("Plan updated.");
		}
		setModal({
			open: false,
			mode: "add"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-[1400px] mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Subscription Plans",
				desc: `${plans.reduce((s, p) => s + p.activeSubscribers, 0)} total active subscribers`,
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: openAdd,
					className: "flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" }), " New Plan"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-3 gap-5",
				children: plans.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `rounded-2xl border overflow-hidden ${plan.name === "Premium" ? "border-gold/40 ring-2 ring-gold/20" : "border-border"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `p-5 ${plan.name === "Premium" ? "bg-gradient-gold" : "bg-cream"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif text-xl text-navy",
									children: plan.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: plan.status })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-serif text-3xl text-navy mt-1",
								children: [
									"$",
									plan.monthlyPrice,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-normal text-navy/60",
										children: "/mo"
									})
								]
							}),
							plan.yearlyPrice > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-navy/60 mt-0.5",
								children: [
									"$",
									plan.yearlyPrice,
									"/year"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm font-semibold text-navy mt-2",
								children: [plan.activeSubscribers.toLocaleString(), " subscribers"]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 bg-background",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: plan.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-3.5 w-3.5 text-emerald-500 shrink-0" }), f]
							}, f))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 mt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
								label: "Edit",
								onClick: () => openEdit(plan),
								variant: "ghost"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
								label: plan.status === "Active" ? "Deactivate" : "Activate",
								onClick: () => {
									setPlans((p) => p.map((x) => x.id === plan.id ? {
										...x,
										status: x.status === "Active" ? "Inactive" : "Active"
									} : x));
									toast("Plan status updated.");
								},
								variant: "default"
							})]
						})]
					})]
				}, plan.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				open: modal.open,
				onClose: () => setModal({
					open: false,
					mode: "add"
				}),
				title: modal.mode === "add" ? "Create Plan" : "Edit Plan",
				size: "md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Plan Name",
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: form.name,
								onChange: (e) => setForm((f) => ({
									...f,
									name: e.target.value
								})),
								className: inputCls,
								placeholder: "e.g. Premium"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: "Monthly Price ($)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									value: form.monthlyPrice,
									onChange: (e) => setForm((f) => ({
										...f,
										monthlyPrice: +e.target.value
									})),
									className: inputCls,
									step: "0.01"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: "Yearly Price ($)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									value: form.yearlyPrice,
									onChange: (e) => setForm((f) => ({
										...f,
										yearlyPrice: +e.target.value
									})),
									className: inputCls,
									step: "0.01"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Features (one per line)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: form.features,
								onChange: (e) => setForm((f) => ({
									...f,
									features: e.target.value
								})),
								className: "w-full rounded-xl border border-border bg-cream px-4 py-2.5 text-sm text-navy resize-none focus:outline-none focus:ring-2 focus:ring-gold/30",
								rows: 5,
								placeholder: "All courses\nFull sermon archive\nCertificates"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Status",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: form.status,
								onChange: (e) => setForm((f) => ({
									...f,
									status: e.target.value
								})),
								className: selectCls,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Active" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Inactive" })]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-2 mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setModal({
							open: false,
							mode: "add"
						}),
						className: "rounded-full border border-border px-5 py-2 text-sm font-medium text-navy hover:bg-cream",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: save,
						className: "rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-navy shadow-gold",
						children: modal.mode === "add" ? "Create Plan" : "Save Changes"
					})]
				})]
			})
		]
	});
}
function TransactionsView() {
	const [transactions] = (0, import_react.useState)(ADMIN_TRANSACTIONS);
	const [search, setSearch] = (0, import_react.useState)("");
	const [filterStatus, setFilterStatus] = (0, import_react.useState)("All");
	const filtered = transactions.filter((t) => {
		const q = search.toLowerCase();
		return (t.member.toLowerCase().includes(q) || t.plan.toLowerCase().includes(q)) && (filterStatus === "All" || t.status === filterStatus);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-[1400px] mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Payments & Transactions",
				desc: "Razorpay integration ready",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => toast("Transaction report exported."),
					className: "flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-medium text-navy hover:bg-cream",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), " Export"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6",
				children: [
					{
						label: "Successful",
						value: transactions.filter((t) => t.status === "Successful").length,
						color: "text-emerald-600"
					},
					{
						label: "Pending",
						value: transactions.filter((t) => t.status === "Pending").length,
						color: "text-amber-600"
					},
					{
						label: "Failed",
						value: transactions.filter((t) => t.status === "Failed").length,
						color: "text-red-600"
					},
					{
						label: "Refunded",
						value: transactions.filter((t) => t.status === "Refunded").length,
						color: "text-purple-600"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-background border border-border p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground uppercase tracking-wide",
						children: s.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `mt-1 font-serif text-2xl ${s.color}`,
						children: s.value
					})]
				}, s.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row gap-3 mb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
						value: search,
						onChange: setSearch,
						placeholder: "Search transactions..."
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					value: filterStatus,
					onChange: (e) => setFilterStatus(e.target.value),
					className: "rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-navy focus:outline-none",
					children: [
						"All",
						"Successful",
						"Pending",
						"Failed",
						"Refunded"
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				cols: [
					{
						key: "member",
						label: "Member",
						render: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-navy text-sm",
							children: t.member
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: t.email
						})] })
					},
					{
						key: "plan",
						label: "Plan",
						render: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: t.plan })
					},
					{
						key: "amount",
						label: "Amount",
						render: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-semibold text-emerald-600",
							children: ["$", t.amount]
						})
					},
					{
						key: "method",
						label: "Method",
						render: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: t.method
						})
					},
					{
						key: "date",
						label: "Date",
						render: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: t.date
						})
					},
					{
						key: "status",
						label: "Status",
						render: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: t.status })
					}
				],
				rows: filtered,
				actions: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-end gap-1.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
						label: "Details",
						onClick: () => toast(`TX ID: ${t.id} · ${t.member} · $${t.amount}`),
						variant: "ghost"
					})
				})
			})
		]
	});
}
function CertificatesView() {
	const [certs, setCerts] = (0, import_react.useState)(ADMIN_CERTIFICATES);
	const [modal, setModal] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		member: "",
		course: ""
	});
	function issue() {
		if (!form.member || !form.course) {
			toast("Select member and course.", "error");
			return;
		}
		setCerts((p) => [...p, {
			id: `cert${Date.now()}`,
			member: form.member,
			course: form.course,
			issuedDate: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				year: "numeric"
			}),
			status: "Issued"
		}]);
		toast("Certificate issued successfully! 🎓");
		setModal(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-[1400px] mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Certificates",
				desc: `${certs.filter((c) => c.status === "Issued").length} issued`,
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => toast("Certificate templates opened."),
						className: "flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-medium text-navy hover:bg-cream",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3.5 w-3.5" }), " Templates"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setModal(true),
						className: "flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-2 text-xs font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-3.5 w-3.5" }), " Issue Certificate"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
				cols: [
					{
						key: "member",
						label: "Member",
						render: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-navy text-sm",
							children: c.member
						})
					},
					{
						key: "course",
						label: "Course",
						render: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-navy",
							children: c.course
						})
					},
					{
						key: "issuedDate",
						label: "Issued Date",
						render: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: c.issuedDate
						})
					},
					{
						key: "status",
						label: "Status",
						render: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: c.status })
					}
				],
				rows: certs,
				actions: (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => toast(`Certificate downloaded for ${c.member}.`),
							className: "grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-navy transition-colors",
							title: "Download",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => toast(`Certificate resent to ${c.member}.`),
							className: "grid h-7 w-7 place-items-center rounded-lg border border-border text-muted-foreground hover:text-blue-600 transition-colors",
							title: "Resend",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3.5 w-3.5" })
						}),
						c.status === "Pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
							label: "Approve",
							onClick: () => {
								setCerts((p) => p.map((x) => x.id === c.id ? {
									...x,
									status: "Issued"
								} : x));
								toast("Certificate issued!");
							},
							variant: "success"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				open: modal,
				onClose: () => setModal(false),
				title: "Issue Certificate",
				size: "sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Member",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: form.member,
							onChange: (e) => setForm((f) => ({
								...f,
								member: e.target.value
							})),
							className: selectCls,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select member..."
							}), ADMIN_MEMBERS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: m.name }, m.id))]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Course",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: form.course,
							onChange: (e) => setForm((f) => ({
								...f,
								course: e.target.value
							})),
							className: selectCls,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select course..."
							}), ADMIN_COURSES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c.title }, c.id))]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-2 mt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setModal(false),
						className: "rounded-full border border-border px-4 py-2 text-sm text-navy hover:bg-cream",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: issue,
						className: "rounded-full bg-gradient-gold px-4 py-2 text-sm font-semibold text-navy shadow-gold",
						children: "Issue"
					})]
				})]
			})
		]
	});
}
var NOTIF_TYPES = [
	"Course Update",
	"Event Reminder",
	"Prayer Response",
	"Payment",
	"Announcement",
	"General"
];
function NotificationsAdminView() {
	const [form, setForm] = (0, import_react.useState)({
		title: "",
		message: "",
		type: "General",
		audience: "all",
		scheduled: false,
		scheduleDate: ""
	});
	const [sent, setSent] = (0, import_react.useState)([]);
	function sendNotif() {
		if (!form.title.trim() || !form.message.trim()) {
			toast("Title and message required.", "error");
			return;
		}
		setSent((p) => [...p, form]);
		setForm({
			title: "",
			message: "",
			type: "General",
			audience: "all",
			scheduled: false,
			scheduleDate: ""
		});
		toast(form.scheduled ? "Notification scheduled! ⏰" : "Notification sent to all members! 🔔");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-[1400px] mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Notifications",
			desc: "Send in-app and email notifications"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-2 gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-background border border-border p-5 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg text-navy",
						children: "Compose Notification"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Notification Type",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: form.type,
							onChange: (e) => setForm((f) => ({
								...f,
								type: e.target.value
							})),
							className: selectCls,
							children: NOTIF_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t }, t))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Title",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: form.title,
							onChange: (e) => setForm((f) => ({
								...f,
								title: e.target.value
							})),
							className: inputCls,
							placeholder: "Notification title"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Message",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: form.message,
							onChange: (e) => setForm((f) => ({
								...f,
								message: e.target.value
							})),
							className: textareaCls,
							rows: 4,
							placeholder: "Write your notification message..."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Send To",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: form.audience,
							onChange: (e) => setForm((f) => ({
								...f,
								audience: e.target.value
							})),
							className: selectCls,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "all",
									children: "All Members"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "premium",
									children: "Premium Members Only"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "free",
									children: "Free Members Only"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "pastors",
									children: "Pastors & Moderators"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setForm((f) => ({
								...f,
								scheduled: !f.scheduled
							})),
							className: `relative inline-flex h-5 w-9 rounded-full transition-colors ${form.scheduled ? "bg-gradient-gold" : "bg-border"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `mt-0.5 ml-0.5 inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${form.scheduled ? "translate-x-4" : "translate-x-0"}` })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-navy",
							children: "Schedule for later"
						})]
					}),
					form.scheduled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Schedule Date & Time",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "datetime-local",
							value: form.scheduleDate,
							onChange: (e) => setForm((f) => ({
								...f,
								scheduleDate: e.target.value
							})),
							className: "w-full rounded-xl border border-border bg-cream px-4 py-2.5 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: sendNotif,
						className: "w-full flex items-center justify-center gap-2 rounded-full bg-gradient-gold py-3 text-sm font-semibold text-navy shadow-gold hover:scale-[1.01] transition-transform",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }), form.scheduled ? "Schedule Notification" : "Send Now"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-background border border-border p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-lg text-navy mb-4",
					children: "Recent Notifications"
				}), sent.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center py-12 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-10 w-10 text-muted-foreground/30 mb-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "No notifications sent yet."
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: sent.slice().reverse().map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-cream p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-navy text-sm",
									children: n.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: n.type })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-1 line-clamp-2",
								children: n.message
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground mt-1",
								children: ["To: ", n.audience === "all" ? "All Members" : n.audience]
							})
						]
					}, i))
				})]
			})]
		})]
	});
}
function ReportsView() {
	const REPORT_TABS = [
		"Revenue",
		"Donations",
		"Members",
		"Courses",
		"Events",
		"Subscriptions"
	];
	const [activeTab, setActiveTab] = (0, import_react.useState)("Revenue");
	const chart = {
		Revenue: {
			data: REVENUE_DATA,
			title: "Monthly Subscription Revenue",
			subtitle: "Last 12 months ($)",
			color: "from-gold to-yellow-300"
		},
		Donations: {
			data: DONATION_DATA,
			title: "Monthly Donations",
			subtitle: "Last 12 months ($)",
			color: "from-emerald-600 to-emerald-400"
		},
		Members: {
			data: MEMBER_GROWTH,
			title: "Member Growth",
			subtitle: "Cumulative members",
			color: "from-blue-600 to-blue-400"
		},
		Courses: {
			data: ENROLLMENT_DATA,
			title: "Course Enrollments",
			subtitle: "New enrollments/month",
			color: "from-purple-600 to-purple-400"
		},
		Events: {
			data: [
				412,
				92,
				98,
				312,
				84,
				65,
				156,
				312,
				578,
				420,
				380,
				450
			],
			title: "Event Registrations",
			subtitle: "Per event attendance",
			color: "from-orange-500 to-orange-300"
		},
		Subscriptions: {
			data: [
				420,
				445,
				460,
				480,
				495,
				510,
				524,
				535,
				540,
				548,
				560,
				580
			],
			title: "Active Subscriptions",
			subtitle: "Monthly active subscribers",
			color: "from-pink-600 to-pink-400"
		}
	}[activeTab];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-[1400px] mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Reports & Analytics",
				desc: "Export and analyse platform performance",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => toast("CSV exported successfully."),
						className: "flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-medium text-navy hover:bg-cream",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), " CSV"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => toast("PDF report generated."),
						className: "flex items-center gap-1.5 rounded-full bg-gradient-gold px-3 py-2 text-xs font-semibold text-navy shadow-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-3.5 w-3.5" }), " PDF"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1 rounded-xl bg-cream p-1 mb-6 overflow-x-auto",
				children: REPORT_TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setActiveTab(t),
					className: `rounded-lg px-4 py-2 text-xs font-medium whitespace-nowrap transition-all ${activeTab === t ? "bg-background text-navy shadow-sm" : "text-muted-foreground hover:text-navy"}`,
					children: t
				}, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6",
				children: [
					activeTab === "Revenue" && [
						{
							label: "Total Revenue",
							value: "$87,200"
						},
						{
							label: "Premium Subscribers",
							value: "524"
						},
						{
							label: "Annual Subscribers",
							value: "118"
						},
						{
							label: "MRR Growth",
							value: "+15.6%"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-background border border-border p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground uppercase tracking-wide",
							children: s.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-serif text-xl text-navy",
							children: s.value
						})]
					}, s.label)),
					activeTab === "Members" && [
						{
							label: "Total Members",
							value: "2,847"
						},
						{
							label: "New This Month",
							value: "+70"
						},
						{
							label: "Active Rate",
							value: "84%"
						},
						{
							label: "Retention",
							value: "91%"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-background border border-border p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground uppercase tracking-wide",
							children: s.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-serif text-xl text-navy",
							children: s.value
						})]
					}, s.label)),
					!["Revenue", "Members"].includes(activeTab) && [
						{
							label: "This Month",
							value: "—"
						},
						{
							label: "Last Month",
							value: "—"
						},
						{
							label: "Growth",
							value: "—"
						},
						{
							label: "Total",
							value: "—"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-background border border-border p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground uppercase tracking-wide",
							children: s.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-serif text-xl text-navy",
							children: s.value
						})]
					}, s.label))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-background border border-border p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-lg text-navy",
						children: chart.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mt-0.5",
						children: chart.subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex items-end gap-2 h-48",
						children: chart.data.map((v, i) => {
							const max = Math.max(...chart.data);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 flex flex-col items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `w-full rounded-t-sm bg-gradient-to-t ${chart.color} transition-all duration-700`,
									style: { height: `${v / max * 100}%` }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[9px] text-muted-foreground",
									children: MONTHS[i]
								})]
							}, i);
						})
					})
				]
			})
		]
	});
}
function SettingsView() {
	const [settings, setSettings] = (0, import_react.useState)({
		churchName: "WordnWorship Fellowship",
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
		seoTitle: "WordnWorship Fellowship — Christ-Centered Community",
		seoDesc: "A Christ-centered church family pursuing worship, the Word, and community.",
		privacyPolicy: "Your privacy is important to us. We collect only necessary information to provide our services...",
		termsConditions: "By using our platform you agree to our terms and conditions..."
	});
	const [saved, setSaved] = (0, import_react.useState)(false);
	function save() {
		setSaved(true);
		setTimeout(() => setSaved(false), 2500);
		toast("Settings saved successfully!");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-3xl mx-auto space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl text-navy",
					children: "Website Settings"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: save,
					className: `flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${saved ? "bg-emerald-100 text-emerald-700" : "bg-gradient-gold text-navy shadow-gold hover:scale-[1.02]"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4" }), saved ? "Saved ✓" : "Save Settings"]
				})]
			}),
			[
				{
					icon: Globe,
					label: "Church Info",
					fields: [
						{
							key: "churchName",
							label: "Church Name",
							type: "text"
						},
						{
							key: "tagline",
							label: "Tagline",
							type: "text"
						},
						{
							key: "email",
							label: "Email",
							type: "email"
						},
						{
							key: "phone",
							label: "Phone",
							type: "tel"
						},
						{
							key: "address",
							label: "Address",
							type: "text"
						},
						{
							key: "website",
							label: "Website URL",
							type: "url"
						}
					]
				},
				{
					icon: Globe,
					label: "Social Media",
					fields: [
						{
							key: "facebook",
							label: "Facebook",
							type: "text"
						},
						{
							key: "instagram",
							label: "Instagram",
							type: "text"
						},
						{
							key: "youtube",
							label: "YouTube",
							type: "text"
						},
						{
							key: "twitter",
							label: "Twitter / X",
							type: "text"
						}
					]
				},
				{
					icon: Mail,
					label: "Email Settings",
					fields: [{
						key: "smtpHost",
						label: "SMTP Host",
						type: "text"
					}, {
						key: "smtpPort",
						label: "SMTP Port",
						type: "text"
					}]
				},
				{
					icon: CreditCard,
					label: "Payment Settings",
					fields: [{
						key: "razorpayKey",
						label: "Razorpay Key",
						type: "text"
					}]
				},
				{
					icon: Shield,
					label: "SEO",
					fields: [{
						key: "seoTitle",
						label: "SEO Title",
						type: "text"
					}, {
						key: "seoDesc",
						label: "SEO Description",
						type: "text"
					}]
				}
			].map(({ icon: Icon, label, fields }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-background border border-border p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg text-navy",
						children: label
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: fields.map(({ key, label: fl, type }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: type === "text" && (key === "address" || key === "seoDesc") ? "sm:col-span-2" : "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: fl,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type,
								value: settings[key],
								onChange: (e) => setSettings((s) => ({
									...s,
									[key]: e.target.value
								})),
								className: inputCls
							})
						})
					}, key))
				})]
			}, label)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-background border border-border p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg text-navy",
						children: "Legal"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Privacy Policy",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: settings.privacyPolicy,
							onChange: (e) => setSettings((s) => ({
								...s,
								privacyPolicy: e.target.value
							})),
							className: textareaCls,
							rows: 4
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Terms & Conditions",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: settings.termsConditions,
							onChange: (e) => setSettings((s) => ({
								...s,
								termsConditions: e.target.value
							})),
							className: textareaCls,
							rows: 4
						})
					})]
				})]
			})
		]
	});
}
function AdminProfileView() {
	const [form, setForm] = (0, import_react.useState)({
		name: "Admin User",
		email: "admin@kingdomlife.com",
		phone: "+1 555-0001",
		role: "Admin",
		bio: "Church administrator and platform manager.",
		currentPassword: "",
		newPassword: "",
		confirmPassword: ""
	});
	const [saved, setSaved] = (0, import_react.useState)(false);
	function save() {
		setSaved(true);
		setTimeout(() => setSaved(false), 2500);
		toast("Profile updated successfully!");
	}
	function changePassword() {
		if (!form.currentPassword || !form.newPassword) {
			toast("Fill all password fields.", "error");
			return;
		}
		if (form.newPassword !== form.confirmPassword) {
			toast("Passwords do not match.", "error");
			return;
		}
		toast("Password changed successfully!");
		setForm((f) => ({
			...f,
			currentPassword: "",
			newPassword: "",
			confirmPassword: ""
		}));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-2xl mx-auto space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-navy text-white p-6 flex flex-col sm:flex-row items-center gap-5 relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 opacity-5 pointer-events-none",
						style: {
							backgroundImage: "radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
							backgroundSize: "30px 30px"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative grid h-20 w-20 place-items-center rounded-full bg-gradient-gold text-navy font-bold text-2xl shadow-gold shrink-0",
						children: "AU"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative text-center sm:text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-2xl",
								children: form.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/60 text-sm",
								children: form.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block mt-2 rounded-full border border-gold/40 px-3 py-1 text-xs text-gold",
								children: form.role
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-background border border-border p-5 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg text-navy",
						children: "Profile Information"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid sm:grid-cols-2 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: "Full Name",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.name,
									onChange: (e) => setForm((f) => ({
										...f,
										name: e.target.value
									})),
									className: inputCls
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: "Email",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									value: form.email,
									onChange: (e) => setForm((f) => ({
										...f,
										email: e.target.value
									})),
									className: inputCls
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: "Phone",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.phone,
									onChange: (e) => setForm((f) => ({
										...f,
										phone: e.target.value
									})),
									className: inputCls
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
								label: "Role",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.role,
									readOnly: true,
									className: inputCls + " opacity-60 cursor-not-allowed"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "sm:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
									label: "Bio",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										value: form.bio,
										onChange: (e) => setForm((f) => ({
											...f,
											bio: e.target.value
										})),
										className: textareaCls,
										rows: 3
									})
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: save,
						className: `flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${saved ? "bg-emerald-100 text-emerald-700" : "bg-gradient-gold text-navy shadow-gold hover:scale-[1.02]"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4" }), saved ? "Saved ✓" : "Save Profile"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-background border border-border p-5 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg text-navy",
						children: "Change Password"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						label: "Current Password",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							value: form.currentPassword,
							onChange: (e) => setForm((f) => ({
								...f,
								currentPassword: e.target.value
							})),
							className: inputCls,
							placeholder: "••••••••"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid sm:grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "New Password",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "password",
								value: form.newPassword,
								onChange: (e) => setForm((f) => ({
									...f,
									newPassword: e.target.value
								})),
								className: inputCls,
								placeholder: "••••••••"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							label: "Confirm Password",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "password",
								value: form.confirmPassword,
								onChange: (e) => setForm((f) => ({
									...f,
									confirmPassword: e.target.value
								})),
								className: inputCls,
								placeholder: "••••••••"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: changePassword,
						className: "rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy/90 transition-colors",
						children: "Update Password"
					})
				]
			})
		]
	});
}
function AdminPage() {
	const navigate = useNavigate();
	const [view, setView] = (0, import_react.useState)("dashboard");
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const user = getUser();
		if (!user || user.role !== "admin") navigate({ to: "/login" });
		else setLoading(false);
	}, []);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-screen items-center justify-center bg-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-10 animate-spin rounded-full border-4 border-gold border-t-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Loading admin panel..."
			})]
		})
	});
	function renderView() {
		switch (view) {
			case "dashboard": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminDashboard, { onViewChange: setView });
			case "members": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MembersView, {});
			case "academy": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AcademyView, {});
			case "categories": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoriesView, {});
			case "videos": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideosView, {});
			case "sermons": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SermonsView, {});
			case "devotions": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DevotionsView, {});
			case "events": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventsAdminView, {});
			case "registrations": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegistrationsView, {});
			case "prayer": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrayerAdminView, {});
			case "community": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommunityAdminView, {});
			case "announcements": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnnouncementsView, {});
			case "donations": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DonationsView, {});
			case "plans": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlansView, {});
			case "transactions": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionsView, {});
			case "certificates": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CertificatesView, {});
			case "notifications": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationsAdminView, {});
			case "reports": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportsView, {});
			case "settings": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsView, {});
			case "profile": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminProfileView, {});
			default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminDashboard, { onViewChange: setView });
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminLayout, {
		view,
		onViewChange: setView,
		pendingCount: 2,
		children: renderView()
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastContainer, {})] });
}
//#endregion
export { AdminPage as component };
