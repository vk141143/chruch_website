import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-BIQJ-M2N.mjs";
import { J as HandHeart, P as MessageCircleHeart, a as Users, m as Sparkles } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/community-OOCCVaSn.js
var import_jsx_runtime = require_jsx_runtime();
var FEATURES = [
	{
		icon: Sparkles,
		title: "Share Your Testimony",
		text: "Tell the story of what Jesus has done in your life and encourage the family of God."
	},
	{
		icon: MessageCircleHeart,
		title: "Prayer Requests",
		text: "Submit a prayer request and let our intercessors stand with you."
	},
	{
		icon: Users,
		title: "Discussion Groups",
		text: "Connect with other believers around Scripture, parenting, marriage, and more."
	},
	{
		icon: HandHeart,
		title: "Volunteer Opportunities",
		text: "Find a place to serve — kids, worship, hospitality, tech, outreach."
	}
];
var TESTIMONIES = [
	{
		name: "Rachel M.",
		text: "WordnWorship walked with us through the hardest year of our lives. We finally found a church family that truly loves like Jesus."
	},
	{
		name: "Andrew T.",
		text: "I came in skeptical and curious. A year later I was baptized. The teaching is honest, deep, and full of grace."
	},
	{
		name: "Priya & Daniel S.",
		text: "Our small group has become our extended family. We pray together, eat together, and grow in Christ together."
	}
];
function CommunityPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pt-40 pb-16 bg-navy text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-4xl px-6 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Community",
					title: "We are better together",
					subtitle: "The Christian life was never meant to be lived alone. Find your people, pray together, and serve as the family of God.",
					center: true,
					light: true
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
				children: FEATURES.map(({ icon: Icon, title, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-border bg-card p-8 hover:shadow-elegant transition-shadow",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-8 w-8 text-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-serif text-xl text-navy",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground leading-relaxed",
							children: text
						})
					]
				}, title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 bg-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Testimonies",
					title: "Stories from our family",
					center: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-3",
					children: TESTIMONIES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl bg-background border border-border p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-serif italic text-lg text-navy leading-relaxed",
							children: [
								"\"",
								t.text,
								"\""
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-xs tracking-[0.3em] uppercase text-gold",
							children: ["— ", t.name]
						})]
					}, t.name))
				})]
			})
		})
	] });
}
//#endregion
export { CommunityPage as component };
