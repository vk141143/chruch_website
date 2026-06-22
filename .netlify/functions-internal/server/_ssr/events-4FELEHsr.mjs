import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-BIQJ-M2N.mjs";
import { L as MapPin, kt as ArrowRight, lt as Clock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-4FELEHsr.js
var import_jsx_runtime = require_jsx_runtime();
var EVENTS = [
	{
		date: "Jun 22",
		title: "Sunday Worship",
		time: "9:00 & 11:00 AM",
		where: "Main Auditorium",
		tag: "Weekly"
	},
	{
		date: "Jun 24",
		title: "Mid-Week Prayer",
		time: "7:00 PM",
		where: "Prayer Chapel",
		tag: "Weekly"
	},
	{
		date: "Jun 27",
		title: "Youth Fellowship Night",
		time: "6:30 PM",
		where: "Youth Hall",
		tag: "Youth"
	},
	{
		date: "Jul 05",
		title: "Community Outreach",
		time: "10:00 AM",
		where: "Riverside Park",
		tag: "Outreach"
	},
	{
		date: "Jul 12",
		title: "Marriage & Family Workshop",
		time: "4:00 PM",
		where: "Fellowship Hall",
		tag: "Workshop"
	},
	{
		date: "Aug 02",
		title: "Summer Faith Conference",
		time: "All Day",
		where: "Main Auditorium",
		tag: "Conference"
	}
];
function EventsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pt-40 pb-16 bg-navy text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-4xl px-6 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Events",
				title: "What's happening at WordnWorship",
				subtitle: "Weekly gatherings, prayer nights, youth programs, conferences and outreach. Register and join us.",
				center: true,
				light: true
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-5xl px-6 space-y-5",
			children: EVENTS.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "group rounded-2xl border border-border bg-card p-6 md:p-8 grid md:grid-cols-[140px_1fr_auto] gap-6 items-center hover:border-gold transition-colors",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-cream p-5 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-3xl text-navy leading-none",
							children: e.date.split(" ")[1]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs tracking-widest uppercase text-gold",
							children: e.date.split(" ")[0]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-semibold tracking-[0.3em] uppercase text-gold",
							children: e.tag
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1.5 font-serif text-2xl text-navy",
							children: e.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-gold" }),
									" ",
									e.time
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-gold" }),
									" ",
									e.where
								]
							})]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "inline-flex items-center gap-2 rounded-full bg-navy text-white px-5 py-3 text-sm font-semibold hover:bg-gold hover:text-navy transition-colors",
						children: ["Register ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			}, e.title))
		})
	})] });
}
//#endregion
export { EventsPage as component };
