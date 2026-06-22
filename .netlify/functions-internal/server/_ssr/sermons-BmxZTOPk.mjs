import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-BIQJ-M2N.mjs";
import { $ as FileText, b as Search, pt as CirclePlay, q as Headphones } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sermons-BmxZTOPk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SERMONS = [
	{
		title: "The Kingdom Among Us",
		speaker: "Pastor David Whitfield",
		date: "Jun 16, 2026",
		scripture: "Luke 17:20–21",
		topic: "Kingdom of God"
	},
	{
		title: "Carried By Grace",
		speaker: "Pastor David Whitfield",
		date: "Jun 9, 2026",
		scripture: "Ephesians 2:1–10",
		topic: "Grace"
	},
	{
		title: "Faith That Moves",
		speaker: "Pastor Caleb Reyes",
		date: "Jun 2, 2026",
		scripture: "Hebrews 11:1–6",
		topic: "Faith"
	},
	{
		title: "A House Of Prayer",
		speaker: "Pastor David Whitfield",
		date: "May 26, 2026",
		scripture: "Isaiah 56:6–8",
		topic: "Prayer"
	},
	{
		title: "The Good Shepherd",
		speaker: "Pastor David Whitfield",
		date: "May 19, 2026",
		scripture: "John 10:1–18",
		topic: "Jesus"
	},
	{
		title: "Living Sent",
		speaker: "Pastor Caleb Reyes",
		date: "May 12, 2026",
		scripture: "Matthew 28:16–20",
		topic: "Mission"
	}
];
function SermonsPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const filtered = SERMONS.filter((s) => [
		s.title,
		s.speaker,
		s.scripture,
		s.topic
	].join(" ").toLowerCase().includes(q.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pt-40 pb-16 bg-navy text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-6 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Sermons",
				title: "Recent teaching from the Word",
				subtitle: "Watch, listen, and study with us. Filter by speaker, topic, or Scripture.",
				center: true,
				light: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 relative max-w-xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search by title, speaker, or Scripture...",
					className: "w-full rounded-full bg-white/10 border border-white/20 pl-11 pr-5 py-3.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-gold"
				})]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
			children: [filtered.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-elegant transition-all",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-video bg-navy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-navy via-navy/80 to-gold/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, {
								className: "h-14 w-14 text-white/90 group-hover:scale-110 transition-transform",
								strokeWidth: 1.2
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute bottom-3 left-3 rounded-full bg-black/50 backdrop-blur text-white text-[10px] tracking-widest uppercase px-3 py-1",
							children: s.topic
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-xl text-navy leading-snug",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs tracking-widest uppercase text-gold",
							children: s.speaker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: [
								s.date,
								" · ",
								s.scripture
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex gap-3 text-xs font-semibold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "inline-flex items-center gap-1.5 text-navy hover:text-gold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, { className: "h-4 w-4" }), " Watch"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "inline-flex items-center gap-1.5 text-navy hover:text-gold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headphones, { className: "h-4 w-4" }), " Listen"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "inline-flex items-center gap-1.5 text-navy hover:text-gold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4" }), " Notes"]
								})
							]
						})
					]
				})]
			}, s.title)), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "col-span-full text-center text-muted-foreground py-12",
				children: "No sermons match your search."
			})]
		})
	})] });
}
//#endregion
export { SermonsPage as component };
