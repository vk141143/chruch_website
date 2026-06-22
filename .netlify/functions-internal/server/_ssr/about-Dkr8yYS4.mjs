import { t as hero_church_default } from "./hero-church-CRV1oezB.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-BIQJ-M2N.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Dkr8yYS4.js
var import_jsx_runtime = require_jsx_runtime();
var LEADERS = [
	{
		name: "Pastor David Whitfield",
		role: "Senior Pastor",
		img: "/assets/pastor-senior-C2K6VJI2.jpg",
		bio: "Shepherding WordnWorship since 2009, David is passionate about expository teaching and prayer."
	},
	{
		name: "Pastor Caleb Reyes",
		role: "Youth Pastor",
		img: "/assets/pastor-youth-DqWBWgIN.jpg",
		bio: "Caleb leads our students into a vibrant, Christ-centered faith for the next generation."
	},
	{
		name: "Hannah Brooks",
		role: "Worship Leader",
		img: "/assets/pastor-worship-BjVb1mM9.jpg",
		bio: "Hannah leads our musical worship with songs rooted in Scripture and the gospel."
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative pt-40 pb-24 bg-navy text-white overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 opacity-25",
					style: {
						backgroundImage: `url(${hero_church_default})`,
						backgroundSize: "cover",
						backgroundPosition: "center"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-navy/90 to-navy" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-4xl px-6 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Our Story",
						title: "A church family rooted in Jesus",
						subtitle: "For more than two decades we've gathered around the Word, broken bread together, and sought the face of God in our city.",
						center: true,
						light: true
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-2",
				children: [{
					eyebrow: "Mission",
					title: "Make disciples of Jesus",
					body: "We exist to make disciples who love God, love people, and live sent — proclaiming and demonstrating the gospel in every sphere of life."
				}, {
					eyebrow: "Vision",
					title: "A house of prayer & teaching",
					body: "We long to be a house of fervent prayer, sound teaching, joyful worship, and selfless service for the glory of Christ."
				}].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl border border-border p-10 bg-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold tracking-[0.3em] uppercase text-gold",
							children: b.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-serif text-3xl text-navy",
							children: b.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-muted-foreground leading-relaxed",
							children: b.body
						})
					]
				}, b.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 bg-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-[1fr_2fr] items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Our History",
					title: "From a living room to a city-wide fellowship"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6 text-muted-foreground leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "WordnWorship Fellowship began in 2001 with twelve people gathered in a living room, hungry for the Word and convinced that the gospel changes everything." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Over the years God multiplied that small gathering into a vibrant family of believers serving across our city — through worship gatherings, Bible academies, outreach to the poor, and mission partnerships around the world." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Today our heart is the same as it was at the beginning: to lift up Jesus, teach His Word faithfully, and love people well." })
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Leadership",
					title: "Meet our pastors & leaders",
					center: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-8 md:grid-cols-3",
					children: LEADERS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-2xl bg-muted aspect-[4/5]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: l.img,
									alt: l.name,
									loading: "lazy",
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-serif text-2xl text-navy",
								children: l.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.3em] uppercase text-gold mt-1",
								children: l.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted-foreground leading-relaxed",
								children: l.bio
							})
						]
					}, l.name))
				})]
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
