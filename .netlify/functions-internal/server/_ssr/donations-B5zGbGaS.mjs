import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-BIQJ-M2N.mjs";
import { Ct as Building2, K as HeartHandshake, S as Repeat, Z as Gift, rt as Earth } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/donations-B5zGbGaS.js
var import_jsx_runtime = require_jsx_runtime();
var FUNDS = [
	{
		icon: Gift,
		title: "One-Time Giving",
		text: "A single gift toward the general ministry of the church."
	},
	{
		icon: Repeat,
		title: "Monthly Partnership",
		text: "Stand with us each month to sustain worship, teaching, and outreach."
	},
	{
		icon: Earth,
		title: "Mission Support",
		text: "Fuel our global mission partners spreading the gospel to unreached peoples."
	},
	{
		icon: Building2,
		title: "Building Fund",
		text: "Expanding our facilities so more can be welcomed home."
	},
	{
		icon: HeartHandshake,
		title: "Charity Projects",
		text: "Caring for the poor, the widow, and the orphan in our city and beyond."
	}
];
function GivePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pt-40 pb-16 bg-navy text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl px-6 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Generosity",
				title: "Give cheerfully, give faithfully",
				subtitle: "Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver. — 2 Corinthians 9:7",
				center: true,
				light: true
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
			children: FUNDS.map(({ icon: Icon, title, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-2xl border border-border bg-card p-8 hover:shadow-elegant hover:-translate-y-1 transition-all",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-14 w-14 place-items-center rounded-xl bg-gradient-gold shadow-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6 text-navy" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-6 font-serif text-2xl text-navy",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: text
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "mt-7 inline-flex rounded-full bg-navy text-white px-5 py-2.5 text-sm font-semibold hover:bg-gold hover:text-navy transition-colors",
						children: "Give Now"
					})
				]
			}, title))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-12 text-center text-sm text-muted-foreground max-w-xl mx-auto px-6",
			children: "Secure online giving will be available soon. In the meantime, reach out via the contact page for in-person and bank giving options."
		})]
	})] });
}
//#endregion
export { GivePage as component };
