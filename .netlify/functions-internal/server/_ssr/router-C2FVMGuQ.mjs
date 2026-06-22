import { o as __toESM } from "../_runtime.mjs";
import { t as hero_church_default } from "./hero-church-CRV1oezB.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { r as logout, t as getUser } from "./auth-mIB9PyK8.mjs";
import { _ as useNavigate, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Moon, D as Phone, F as Menu, H as LayoutDashboard, L as MapPin, R as Mail, U as Instagram, c as Twitter, et as Facebook, ft as CircleUser, g as ShieldCheck, n as Youtube, p as Sun, r as X, st as Cross, vt as ChevronDown, z as LogOut } from "../_libs/lucide-react.mjs";
import { t as hero_cross_default } from "./hero-cross-BhntgZBB.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C2FVMGuQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CqZQD1jz.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function useTheme() {
	const [dark, setDark] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return false;
		return localStorage.getItem("klf-theme") === "dark" || !localStorage.getItem("klf-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches;
	});
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", dark);
		localStorage.setItem("klf-theme", dark ? "dark" : "light");
	}, [dark]);
	return {
		dark,
		toggle: () => setDark((v) => !v)
	};
}
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/bible-academy",
		label: "Bible Academy"
	},
	{
		to: "/sermons",
		label: "Sermons"
	},
	{
		to: "/events",
		label: "Events"
	},
	{
		to: "/community",
		label: "Community"
	},
	{
		to: "/donations",
		label: "Donations"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header() {
	const navigate = useNavigate();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [user, setUser] = (0, import_react.useState)(null);
	const [dropOpen, setDropOpen] = (0, import_react.useState)(false);
	const { dark, toggle } = useTheme();
	(0, import_react.useEffect)(() => {
		setUser(getUser());
	}, []);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const onResize = () => {
			if (window.innerWidth >= 1280) setOpen(false);
		};
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);
	function handleLogout() {
		logout();
		setUser(null);
		setDropOpen(false);
		navigate({ to: "/" });
	}
	const navLinkClass = (base) => `text-sm font-medium tracking-wide transition-colors hover:text-gold ${base ? "text-navy dark:text-white/90" : "text-white/90"}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-400 ${scrolled ? "bg-background/96 backdrop-blur-md border-b border-border shadow-card" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5 group flex-shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 place-items-center rounded-full bg-gradient-gold shadow-gold group-hover:scale-105 transition-transform duration-300",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cross, {
							className: "h-5 w-5 text-navy",
							strokeWidth: 2.5
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: `font-serif text-xl leading-none ${scrolled ? "text-navy dark:text-white" : "text-white"}`,
						children: ["WordnWorship", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[10px] font-sans tracking-[0.3em] text-gold uppercase mt-0.5",
							children: "Fellowship"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden xl:flex items-center gap-6",
					"aria-label": "Main navigation",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: navLinkClass(scrolled),
						activeProps: { className: "text-gold" },
						activeOptions: { exact: item.to === "/" },
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden xl:flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: toggle,
						"aria-label": dark ? "Switch to light mode" : "Switch to dark mode",
						className: `grid h-9 w-9 place-items-center rounded-full border transition-colors ${scrolled ? "border-border text-navy dark:text-white/90 hover:bg-muted" : "border-white/30 text-white hover:bg-white/10"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							initial: false,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								initial: {
									opacity: 0,
									rotate: -45,
									scale: .6
								},
								animate: {
									opacity: 1,
									rotate: 0,
									scale: 1
								},
								exit: {
									opacity: 0,
									rotate: 45,
									scale: .6
								},
								transition: { duration: .25 },
								children: dark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
							}, dark ? "sun" : "moon")
						})
					}), user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setDropOpen((v) => !v),
							className: `flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition-colors ${scrolled ? "border-border text-navy dark:text-white hover:bg-muted" : "border-white/40 text-white hover:bg-white/10"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-7 w-7 place-items-center rounded-full bg-gradient-gold text-navy font-bold text-xs",
									children: user.name.split(" ").map((n) => n[0]).join("")
								}),
								user.name.split(" ")[0],
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-3.5 w-3.5 transition-transform ${dropOpen ? "rotate-180" : ""}` })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: dropOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 8,
								scale: .96
							},
							animate: {
								opacity: 1,
								y: 0,
								scale: 1
							},
							exit: {
								opacity: 0,
								y: 8,
								scale: .96
							},
							transition: {
								duration: .2,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							className: "absolute right-0 top-full mt-2 w-48 rounded-2xl bg-background border border-border shadow-elegant overflow-hidden z-50",
							children: [user.role === "admin" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/admin",
								onClick: () => setDropOpen(false),
								className: "flex items-center gap-2 px-4 py-3 text-sm text-navy dark:text-white hover:bg-muted transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-gold" }), " Admin Panel"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/dashboard",
								onClick: () => setDropOpen(false),
								className: "flex items-center gap-2 px-4 py-3 text-sm text-navy dark:text-white hover:bg-muted transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, { className: "h-4 w-4 text-gold" }), " My Dashboard"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleLogout,
								className: "flex w-full items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors border-t border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), " Logout"]
							})]
						}) })]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/login",
						className: `inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${scrolled ? "border-border text-navy dark:text-white hover:bg-muted" : "border-white/40 text-white hover:bg-white/10"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleUser, { className: "h-4 w-4" }), " Login"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/community",
						className: "inline-flex items-center gap-1.5 rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-navy shadow-gold hover:scale-[1.04] active:scale-[0.98] transition-transform",
						children: "Join Now"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "xl:hidden flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: toggle,
						"aria-label": dark ? "Switch to light mode" : "Switch to dark mode",
						className: `grid h-9 w-9 place-items-center rounded-full border transition-colors ${scrolled ? "border-border text-navy dark:text-white" : "border-white/30 text-white"}`,
						children: dark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen((v) => !v),
						className: `grid h-10 w-10 place-items-center rounded-md transition-colors ${scrolled ? "text-navy dark:text-white hover:bg-muted" : "text-white hover:bg-white/10"}`,
						"aria-label": "Toggle menu",
						"aria-expanded": open,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							initial: false,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								initial: {
									opacity: 0,
									rotate: -45
								},
								animate: {
									opacity: 1,
									rotate: 0
								},
								exit: {
									opacity: 0,
									rotate: 45
								},
								transition: { duration: .2 },
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
							}, open ? "close" : "open")
						})
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				height: 0
			},
			animate: {
				opacity: 1,
				height: "auto"
			},
			exit: {
				opacity: 0,
				height: 0
			},
			transition: {
				duration: .35,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			className: "xl:hidden overflow-hidden border-t border-border bg-background/98 backdrop-blur-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col px-6 py-5 gap-1",
				"aria-label": "Mobile navigation",
				children: [NAV.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						x: -16
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: {
						duration: .3,
						delay: i * .04
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						onClick: () => setOpen(false),
						className: "block py-3 text-navy dark:text-white font-medium border-b border-border/50 last:border-0 hover:text-gold transition-colors",
						activeProps: { className: "text-gold" },
						activeOptions: { exact: item.to === "/" },
						children: item.label
					})
				}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-col gap-2.5",
					children: user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: user.role === "admin" ? "/admin" : "/dashboard",
						onClick: () => setOpen(false),
						className: "inline-flex items-center justify-center rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-navy",
						children: user.role === "admin" ? "Admin Panel" : "My Dashboard"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setOpen(false);
							handleLogout();
						},
						className: "inline-flex items-center justify-center rounded-full border border-red-200 px-5 py-3 text-sm font-semibold text-red-600",
						children: "Logout"
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/community",
						onClick: () => setOpen(false),
						className: "inline-flex items-center justify-center rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-navy shadow-gold",
						children: "Join Now"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/login",
						onClick: () => setOpen(false),
						className: "inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-navy dark:text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleUser, { className: "h-4 w-4" }), " Login"]
					})] })
				})]
			})
		}) })]
	});
}
var SOCIAL = [
	{
		Icon: Facebook,
		href: "#",
		label: "Facebook"
	},
	{
		Icon: Instagram,
		href: "#",
		label: "Instagram"
	},
	{
		Icon: Youtube,
		href: "#",
		label: "YouTube"
	},
	{
		Icon: Twitter,
		href: "#",
		label: "Twitter / X"
	}
];
var EXPLORE = [
	["/about", "About Us"],
	["/ministries", "Ministries"],
	["/bible-academy", "Bible Academy"],
	["/sermons", "Sermons"],
	["/events", "Events"]
];
var CONNECT = [
	["/community", "Community"],
	["/donations", "Give / Donate"],
	["/contact", "Contact Us"],
	["/login", "Member Login"]
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-navy text-navy-foreground",
		"aria-label": "Site footer",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 pt-16 pb-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2.5 group w-fit",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 place-items-center rounded-full bg-gradient-gold group-hover:scale-105 transition-transform",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cross, {
								className: "h-5 w-5 text-navy",
								strokeWidth: 2.5
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-serif text-xl",
							children: ["WordnWorship", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[10px] font-sans tracking-[0.3em] text-gold uppercase mt-0.5",
								children: "Fellowship"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm leading-relaxed text-white/65 max-w-[240px]",
						children: "A Christ-centered community pursuing the presence of God, the truth of His Word, and a life that loves people well."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex gap-2.5",
						children: SOCIAL.map(({ Icon, href, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href,
							"aria-label": label,
							className: "grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 hover:text-gold hover:border-gold transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}, label))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-gold text-xs font-bold tracking-[0.2em] uppercase",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-3",
					children: EXPLORE.map(([to, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to,
						className: "text-sm text-white/70 hover:text-gold transition-colors",
						children: label
					}) }, to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-gold text-xs font-bold tracking-[0.2em] uppercase",
					children: "Connect"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-3",
					children: CONNECT.map(([to, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to,
						className: "text-sm text-white/70 hover:text-gold transition-colors",
						children: label
					}) }, to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-gold text-xs font-bold tracking-[0.2em] uppercase",
						children: "Visit Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-3.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-sm text-white/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 mt-0.5 text-gold shrink-0" }), "142 Riverside Avenue, Greenfield"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-sm text-white/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 mt-0.5 text-gold shrink-0" }), "(555) 218-0420"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-sm text-white/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 mt-0.5 text-gold shrink-0" }), "hello@kingdomlife.org"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 rounded-xl border border-white/10 bg-white/5 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-gold tracking-widest uppercase",
								children: "Service Times"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm text-white/70",
								children: "Sunday · 9:00 AM & 11:00 AM"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-sm text-white/70",
								children: "Wednesday · 7:00 PM"
							})
						]
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" WordnWorship Fellowship. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif italic text-gold/80 text-center",
					children: "“For where two or three gather in my name, there am I with them.” — Matthew 18:20"
				})]
			})
		})]
	});
}
function PageLoader({ children }) {
	const [loaded, setLoaded] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setLoaded(true), 50);
		return () => clearTimeout(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": loaded,
		className: `fixed inset-0 z-[100] grid place-items-center bg-navy transition-opacity duration-[1200ms] ease-out ${loaded ? "opacity-0 pointer-events-none" : "opacity-100"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "relative grid h-16 w-16 place-items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full border-2 border-gold/30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full border-2 border-gold border-t-transparent animate-spin" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif text-2xl text-gold",
						children: "✝"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.35em] uppercase text-gold/80",
				children: "WordnWorship"
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `transition-opacity duration-[1400ms] ease-out ${loaded ? "opacity-100" : "opacity-0"}`,
		children
	})] });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$13 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "WordnWorship Fellowship — A Christ-Centered Community" },
			{
				name: "description",
				content: "WordnWorship Fellowship is a Christ-centered church family pursuing worship, the Word of God, and life-giving community."
			},
			{
				name: "author",
				content: "WordnWorship Fellowship"
			},
			{
				property: "og:title",
				content: "WordnWorship Fellowship"
			},
			{
				property: "og:description",
				content: "A Christ-centered church family pursuing worship, the Word, and life-giving community."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
			rel: "shortcut icon",
			href: "data:image/png;base64,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",
			type: "image/x-icon"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$13.useRouteContext();
	const routerState = useRouterState();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: routerState.location.pathname.startsWith("/dashboard") || routerState.location.pathname.startsWith("/admin") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageLoader, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "min-h-screen",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		] })
	});
}
var BASE_URL = "";
var Route$12 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/about",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/ministries",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/bible-academy",
				changefreq: "weekly",
				priority: "0.8"
			},
			{
				path: "/sermons",
				changefreq: "weekly",
				priority: "0.9"
			},
			{
				path: "/events",
				changefreq: "weekly",
				priority: "0.8"
			},
			{
				path: "/community",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/donations",
				changefreq: "monthly",
				priority: "0.6"
			},
			{
				path: "/contact",
				changefreq: "monthly",
				priority: "0.6"
			}
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$11 = () => import("./sermons-BmxZTOPk.mjs");
var Route$11 = createFileRoute("/sermons")({
	head: () => ({ meta: [
		{ title: "Sermons — WordnWorship Fellowship" },
		{
			name: "description",
			content: "Watch and listen to recent sermons from WordnWorship Fellowship. Filter by topic, speaker, and Scripture."
		},
		{
			property: "og:title",
			content: "Sermons"
		},
		{
			property: "og:description",
			content: "Watch and listen to recent sermons from WordnWorship Fellowship."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./ministries-Db5i7p7e.mjs");
var Route$10 = createFileRoute("/ministries")({
	head: () => ({ meta: [
		{ title: "Ministries — WordnWorship Fellowship" },
		{
			name: "description",
			content: "Discover ministries at WordnWorship Fellowship — kids, youth, worship, outreach, prayer and more."
		},
		{
			property: "og:title",
			content: "Ministries at WordnWorship"
		},
		{
			property: "og:description",
			content: "Find your place — kids, youth, worship, prayer, outreach and missions."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./login-BwcxxuWN.mjs");
var Route$9 = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "Login — WordnWorship Fellowship" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./events-4FELEHsr.mjs");
var Route$8 = createFileRoute("/events")({
	head: () => ({ meta: [
		{ title: "Events — WordnWorship Fellowship" },
		{
			name: "description",
			content: "Upcoming events at WordnWorship Fellowship: worship gatherings, prayer nights, youth fellowship, conferences, and outreach."
		},
		{
			property: "og:title",
			content: "Events at WordnWorship"
		},
		{
			property: "og:description",
			content: "Worship, prayer, youth, conferences, and outreach events."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./donations-B5zGbGaS.mjs");
var Route$7 = createFileRoute("/donations")({
	head: () => ({ meta: [
		{ title: "Give — WordnWorship Fellowship" },
		{
			name: "description",
			content: "Partner with the mission of WordnWorship Fellowship through one-time giving, monthly support, missions, building fund, and charity projects."
		},
		{
			property: "og:title",
			content: "Give to WordnWorship"
		},
		{
			property: "og:description",
			content: "Support worship, teaching, missions, and outreach."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./dashboard-B5gMxsCc.mjs");
var Route$6 = createFileRoute("/dashboard")({
	head: () => ({ meta: [{ title: "My Dashboard — WordnWorship Fellowship" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./contact-Byz_tQxA.mjs");
var Route$5 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — WordnWorship Fellowship" },
		{
			name: "description",
			content: "Get in touch with WordnWorship Fellowship. Visit us Sunday, send a prayer request, or contact our team."
		},
		{
			property: "og:title",
			content: "Contact WordnWorship"
		},
		{
			property: "og:description",
			content: "Visit, call, or send us a message."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./community-OOCCVaSn.mjs");
var Route$4 = createFileRoute("/community")({
	head: () => ({ meta: [
		{ title: "Community — WordnWorship Fellowship" },
		{
			name: "description",
			content: "Share testimonies, prayer requests, join discussion groups and serve through volunteer opportunities."
		},
		{
			property: "og:title",
			content: "Community at WordnWorship"
		},
		{
			property: "og:description",
			content: "Testimonies, prayer, groups, and volunteer opportunities."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./bible-academy-C8Fkm9fL.mjs");
var Route$3 = createFileRoute("/bible-academy")({
	head: () => ({ meta: [
		{ title: "Bible Academy — WordnWorship Fellowship" },
		{
			name: "description",
			content: "Free devotions and articles plus premium video courses on the Bible, theology, leadership and discipleship."
		},
		{
			property: "og:title",
			content: "WordnWorship Bible Academy"
		},
		{
			property: "og:description",
			content: "Learn the Word of God through devotions, courses, and video teachings."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./admin-C8gz2gLn.mjs");
var Route$2 = createFileRoute("/admin")({
	head: () => ({ meta: [
		{ title: "Admin Dashboard — WordnWorship Fellowship" },
		{
			name: "description",
			content: "Church administration panel."
		},
		{
			name: "robots",
			content: "noindex, nofollow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-Dkr8yYS4.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — WordnWorship Fellowship" },
		{
			name: "description",
			content: "Our mission, vision, history, and leadership team at WordnWorship Fellowship."
		},
		{
			property: "og:title",
			content: "About WordnWorship Fellowship"
		},
		{
			property: "og:description",
			content: "Our mission, vision, history, and leadership."
		},
		{
			property: "og:image",
			content: hero_church_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-D4_8EiKU.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "WordnWorship Fellowship — A Christ-Centered Church Community" },
		{
			name: "description",
			content: "Join WordnWorship Fellowship — Sunday worship, Bible teaching, prayer, and community rooted in Jesus Christ."
		},
		{
			property: "og:title",
			content: "WordnWorship Fellowship"
		},
		{
			property: "og:description",
			content: "Worship, the Word, and a life-giving community in Christ."
		},
		{
			property: "og:image",
			content: hero_cross_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SitemapDotxmlRoute = Route$12.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$13
});
var SermonsRoute = Route$11.update({
	id: "/sermons",
	path: "/sermons",
	getParentRoute: () => Route$13
});
var MinistriesRoute = Route$10.update({
	id: "/ministries",
	path: "/ministries",
	getParentRoute: () => Route$13
});
var LoginRoute = Route$9.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$13
});
var EventsRoute = Route$8.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => Route$13
});
var DonationsRoute = Route$7.update({
	id: "/donations",
	path: "/donations",
	getParentRoute: () => Route$13
});
var DashboardRoute = Route$6.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$13
});
var ContactRoute = Route$5.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$13
});
var CommunityRoute = Route$4.update({
	id: "/community",
	path: "/community",
	getParentRoute: () => Route$13
});
var BibleAcademyRoute = Route$3.update({
	id: "/bible-academy",
	path: "/bible-academy",
	getParentRoute: () => Route$13
});
var AdminRoute = Route$2.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$13
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$13
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$13
	}),
	AboutRoute,
	AdminRoute,
	BibleAcademyRoute,
	CommunityRoute,
	ContactRoute,
	DashboardRoute,
	DonationsRoute,
	EventsRoute,
	LoginRoute,
	MinistriesRoute,
	SermonsRoute,
	SitemapDotxmlRoute
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
