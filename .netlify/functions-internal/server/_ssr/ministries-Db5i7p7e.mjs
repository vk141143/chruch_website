import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-BIQJ-M2N.mjs";
import { Dt as Baby, J as HandHeart, K as HeartHandshake, Tt as BookOpen, a as Users, k as Music, m as Sparkles, rt as Earth } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ministries-Db5i7p7e.js
var import_jsx_runtime = require_jsx_runtime();
var MINISTRIES = [
	{
		icon: Baby,
		name: "Kingdom Kids",
		text: "A safe, fun and Bible-rich environment for children from birth through 5th grade every Sunday."
	},
	{
		icon: Users,
		name: "Youth Fellowship",
		text: "Grades 6–12 gather weekly for worship, teaching, mentoring and friendship."
	},
	{
		icon: Music,
		name: "Worship Ministry",
		text: "Singers, musicians, and tech volunteers leading our church into the presence of God."
	},
	{
		icon: HeartHandshake,
		name: "Small Groups",
		text: "Mid-week communities for prayer, Bible study, and life together."
	},
	{
		icon: BookOpen,
		name: "Bible Academy",
		text: "In-depth teaching for those who want to grow deep in the Word."
	},
	{
		icon: HandHeart,
		name: "Prayer Ministry",
		text: "Intercessors, healing prayer teams, and our weekly prayer gathering."
	},
	{
		icon: Earth,
		name: "Missions & Outreach",
		text: "Local outreach to our city and global partnerships sharing the gospel."
	},
	{
		icon: Sparkles,
		name: "Marriage & Family",
		text: "Workshops, mentoring, and resources for thriving Christ-centered homes."
	}
];
function MinistriesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pt-40 pb-20 bg-navy text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-4xl px-6 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Find Your Place",
				title: "Ministries for every season of life",
				subtitle: "From the youngest child to the oldest saint — there is a place where your gifts can serve and your soul can grow.",
				center: true,
				light: true
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
			children: MINISTRIES.map(({ icon: Icon, name, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-2xl border border-border bg-card p-8 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-14 w-14 place-items-center rounded-xl bg-gradient-gold shadow-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6 text-navy" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-6 font-serif text-2xl text-navy",
						children: name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: text
					})
				]
			}, name))
		})
	})] });
}
//#endregion
export { MinistriesPage as component };
