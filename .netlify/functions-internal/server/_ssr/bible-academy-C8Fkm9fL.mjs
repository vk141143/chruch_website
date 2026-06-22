import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-BIQJ-M2N.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as FileText, B as Lock, Ot as Award, Tt as BookOpen, Y as GraduationCap, i as Video, pt as CirclePlay } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bible-academy-C8Fkm9fL.js
var import_jsx_runtime = require_jsx_runtime();
var FREE = [
	{
		icon: BookOpen,
		title: "Daily Devotions",
		text: "A short Scripture and reflection to start each day."
	},
	{
		icon: FileText,
		title: "Blog Articles",
		text: "Pastoral writing on faith, doubt, and discipleship."
	},
	{
		icon: CirclePlay,
		title: "Worship Resources",
		text: "Chord charts and worship sets from our team."
	}
];
var COURSES = [
	{
		category: "Old Testament",
		items: [
			"Genesis",
			"Exodus",
			"Psalms",
			"Proverbs",
			"Isaiah"
		]
	},
	{
		category: "New Testament",
		items: [
			"Matthew",
			"Mark",
			"Luke",
			"John",
			"Acts",
			"Romans",
			"Revelation"
		]
	},
	{
		category: "Christian Living",
		items: [
			"Prayer",
			"Faith",
			"Evangelism",
			"Discipleship",
			"Leadership"
		]
	},
	{
		category: "Ministry Training",
		items: [
			"Preaching",
			"Worship Ministry",
			"Church Leadership",
			"Missions"
		]
	}
];
function AcademyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pt-40 pb-20 bg-navy text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-4xl px-6 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Bible Academy",
					title: "Grow deep in the Word of God",
					subtitle: "Free devotions and articles for everyone. Premium video courses, training, and certificates for subscribers.",
					center: true,
					light: true
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Free For Everyone",
					title: "Begin here"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: FREE.map(({ icon: Icon, title, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl border border-border p-8 bg-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-8 w-8 text-gold" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-serif text-2xl text-navy",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: text
							})
						]
					}, title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 bg-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold tracking-[0.3em] uppercase text-gold",
							children: "Premium Subscription"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-serif text-4xl md:text-5xl text-navy text-center",
						children: "A full library of Bible courses"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted-foreground text-center max-w-2xl mx-auto",
						children: "Video teachings, lesson notes, downloadable resources, progress tracking, and completion certificates."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid gap-6 md:grid-cols-2",
						children: COURSES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-2xl bg-background border border-border p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-2xl text-navy",
								children: c.category
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 flex flex-wrap gap-2",
								children: c.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "rounded-full bg-cream px-4 py-1.5 text-xs font-medium text-navy border border-border",
									children: i
								}, i))
							})]
						}, c.category))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid gap-4 md:grid-cols-3 lg:grid-cols-6",
						children: [
							{
								icon: Video,
								label: "Video Library"
							},
							{
								icon: CirclePlay,
								label: "Watch Progress"
							},
							{
								icon: FileText,
								label: "Notes & Resources"
							},
							{
								icon: BookOpen,
								label: "Bookmarks"
							},
							{
								icon: GraduationCap,
								label: "Downloadable PDFs"
							},
							{
								icon: Award,
								label: "Certificates"
							}
						].map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-xl bg-background border border-border px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium text-navy",
								children: label
							})]
						}, label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "inline-flex rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-navy shadow-gold hover:scale-[1.03] transition-transform",
							children: "Join The Waitlist"
						})
					})
				]
			})
		})
	] });
}
//#endregion
export { AcademyPage as component };
