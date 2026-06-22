import { o as __toESM } from "../_runtime.mjs";
import { t as hero_church_default } from "./hero-church-CRV1oezB.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-BIQJ-M2N.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { G as Heart, St as Calendar, Tt as BookOpen, _t as ChevronLeft, a as Users, ft as CircleUser, gt as ChevronRight, kt as ArrowRight, w as Quote } from "../_libs/lucide-react.mjs";
import { t as hero_cross_default } from "./hero-cross-BhntgZBB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D4_8EiKU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_bible_default = "/assets/hero-bible-DvIb0Acc.jpg";
var hero_purpose_default = "/assets/hero-purpose-DjaIuX6K.jpg";
var HIDDEN = {
	up: "opacity-0 translate-y-10 blur-[2px]",
	down: "opacity-0 -translate-y-8",
	left: "opacity-0 -translate-x-10",
	right: "opacity-0 translate-x-10",
	scale: "opacity-0 scale-90",
	fade: "opacity-0"
};
var SHOWN = "opacity-100 translate-y-0 translate-x-0 scale-100 blur-0";
function Reveal({ children, delay = 0, className = "", as: Tag = "div", direction = "up", once = true }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setVisible(true);
				if (once) io.disconnect();
			} else if (!once) setVisible(false);
		}, {
			threshold: .1,
			rootMargin: "0px 0px -48px 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, [once]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		style: { transitionDelay: visible ? `${delay}ms` : "0ms" },
		className: `transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${visible ? SHOWN : HIDDEN[direction]} ${className}`,
		children
	});
}
var SLIDES = [
	{
		image: hero_cross_default,
		eyebrow: "Welcome Home",
		title: "Jesus Christ Is Lord",
		verse: "I am the way, the truth, and the life.",
		ref: "John 14:6",
		cta: {
			label: "Join Our Community",
			to: "/community"
		}
	},
	{
		image: hero_bible_default,
		eyebrow: "Rooted In The Word",
		title: "Grow In Faith",
		verse: "Your word is a lamp to my feet and a light to my path.",
		ref: "Psalm 119:105",
		cta: {
			label: "Explore Bible Studies",
			to: "/bible-academy"
		}
	},
	{
		image: hero_purpose_default,
		eyebrow: "Called With Purpose",
		title: "Discover God's Purpose",
		verse: "For I know the plans I have for you.",
		ref: "Jeremiah 29:11",
		cta: {
			label: "Start Your Journey",
			to: "/about"
		}
	},
	{
		image: hero_church_default,
		eyebrow: "Teaching & Discipleship",
		title: "Learn The Word Of God",
		verse: "All Scripture is God-breathed.",
		ref: "2 Timothy 3:16",
		cta: {
			label: "View Courses",
			to: "/bible-academy"
		}
	}
];
function Hero() {
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 6500);
		return () => clearInterval(t);
	}, []);
	const next = () => setI((p) => (p + 1) % SLIDES.length);
	const prev = () => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-screen min-h-[640px] overflow-hidden",
		children: [
			SLIDES.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `absolute inset-0 transition-opacity duration-[1200ms] ${idx === i ? "opacity-100" : "opacity-0 pointer-events-none"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: s.image,
					alt: s.title,
					className: `absolute inset-0 h-full w-full object-cover ${idx === i ? "animate-slow-zoom" : ""}`,
					width: 1920,
					height: 1080
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-hero" })]
			}, s.title)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 h-full flex items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl w-full px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl animate-fade-up",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-divider" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold tracking-[0.35em] uppercase text-gold",
									children: SLIDES[i].eyebrow
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-5 font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-white",
								children: SLIDES[i].title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "mt-7 max-w-xl text-lg md:text-xl text-white/85 font-serif italic",
								children: [
									"\"",
									SLIDES[i].verse,
									"\"",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
										className: "mt-2 text-sm tracking-widest uppercase not-italic font-sans text-gold",
										children: ["— ", SLIDES[i].ref]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-9 flex flex-wrap gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: SLIDES[i].cta.to,
										className: "inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-navy shadow-gold transition-transform hover:scale-[1.03]",
										children: [SLIDES[i].cta.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/sermons",
										className: "inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors",
										children: "Watch Latest Sermon"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/login",
										className: "inline-flex items-center gap-2 rounded-full border border-gold/70 px-7 py-4 text-sm font-semibold text-gold hover:bg-gold/10 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleUser, { className: "h-4 w-4" }), " Login / Register"]
									})
								]
							})
						]
					}, i)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-10 left-0 right-0 z-10 flex items-center justify-between px-6 md:px-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2",
					children: SLIDES.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setI(idx),
						className: `h-1 transition-all rounded-full ${idx === i ? "w-12 bg-gold" : "w-6 bg-white/40"}`,
						"aria-label": `Slide ${idx + 1}`
					}, idx))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden md:flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: prev,
						className: "grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white hover:bg-white/10",
						"aria-label": "Previous",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: next,
						className: "grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white hover:bg-white/10",
						"aria-label": "Next",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
					})]
				})]
			})
		]
	});
}
var PILLARS = [
	{
		icon: BookOpen,
		title: "Sound Teaching",
		text: "Verse-by-verse study of the Scriptures, rooted in the gospel of Jesus Christ."
	},
	{
		icon: Heart,
		title: "Worshipful Presence",
		text: "Singing, prayer, and a posture of awe before our Father."
	},
	{
		icon: Users,
		title: "Authentic Community",
		text: "Small groups, mentoring, and friendships that love the way Christ loves."
	},
	{
		icon: Calendar,
		title: "Mission On Purpose",
		text: "Loving our city, serving the poor, and sharing the hope of the gospel."
	}
];
function Pillars() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-cream py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Why WordnWorship",
				title: "A people pursuing Jesus together",
				subtitle: "Four convictions shape everything we do as a church family.",
				center: true
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
				children: PILLARS.map(({ icon: Icon, title, text }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group rounded-2xl bg-background p-8 shadow-sm border border-border hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 h-full",
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
							})
						]
					})
				}, title))
			})]
		})
	});
}
function VerseOfTheDay() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative bg-navy py-28 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-20",
				style: {
					backgroundImage: `url(${hero_bible_default})`,
					backgroundSize: "cover",
					backgroundPosition: "center"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-4xl px-6 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "mx-auto h-10 w-10 text-gold" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 font-serif text-3xl md:text-5xl leading-snug text-white",
						children: "\"For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.\""
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-sm tracking-[0.35em] uppercase text-gold",
						children: "— John 3:16 · Verse Of The Day"
					})
				] })
			})
		]
	});
}
var SERVICES = [
	{
		day: "Sunday",
		time: "9:00 AM & 11:00 AM",
		title: "Worship Gatherings",
		desc: "Worship, the Word, and the table — our weekly family gathering."
	},
	{
		day: "Wednesday",
		time: "7:00 PM",
		title: "Mid-Week Prayer",
		desc: "A house of prayer for all nations. All are welcome."
	},
	{
		day: "Friday",
		time: "6:30 PM",
		title: "Youth Fellowship",
		desc: "For students in grades 6–12. Worship, teaching, and games."
	}
];
function ServicesGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2 items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Plan Your Visit",
					title: "When we gather",
					subtitle: "There's a place for you at every gathering — come as you are."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/events",
					className: "hidden lg:inline-flex justify-self-end items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors",
					children: ["See full calendar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-3",
				children: SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "relative rounded-2xl border border-border bg-card p-8 hover:border-gold transition-colors h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs tracking-[0.3em] uppercase text-gold font-semibold",
								children: s.day
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-serif text-2xl text-navy",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: s.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 font-serif text-lg text-navy",
								children: s.time
							})
						]
					})
				}, s.title))
			})]
		})
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-cream py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-5xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-navy p-12 md:p-16 text-center shadow-elegant",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-divider mx-auto block w-12" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 font-serif text-4xl md:text-5xl text-white",
						children: "Take your next step"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-white/75 max-w-xl mx-auto",
						children: "Whether you are exploring faith, returning to the church, or ready to commit your life to Jesus — we would love to walk with you."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-navy shadow-gold hover:scale-[1.03] transition-transform",
							children: "I'm New Here"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/community",
							className: "rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors",
							children: "Join A Group"
						})]
					})
				]
			}) })
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pillars, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerseOfTheDay, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesGrid, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
	] });
}
//#endregion
export { Home as component };
