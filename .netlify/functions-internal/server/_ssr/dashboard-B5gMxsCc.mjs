import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as logout, t as getUser } from "./auth-mIB9PyK8.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as FileText, A as Moon, At as ArrowLeft, B as Lock, Et as Bell, F as Menu, G as Heart, H as LayoutDashboard, K as HeartHandshake, L as MapPin, N as MessageCircle, Ot as Award, Q as Flag, St as Calendar, T as Plus, Tt as BookOpen, V as List, X as Globe, Y as GraduationCap, _ as Share2, a as Users, b as Search, ct as CreditCard, d as Trash2, ft as CircleUser, gt as ChevronRight, h as Shield, ht as ChevronUp, it as Download, j as MicVocal, kt as ArrowRight, lt as Clock, mt as CircleCheckBig, ot as Crown, p as Sun, pt as CirclePlay, r as X, st as Cross, t as Zap, u as TrendingUp, v as Settings, vt as ChevronDown, wt as Bookmark, x as Save, xt as Camera, yt as CheckCheck, z as LogOut } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-B5gMxsCc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MOCK_COURSES = [
	{
		id: "c1",
		title: "Understanding the Gospel of John",
		category: "New Testament",
		instructor: "Pastor David Mensah",
		progress: 68,
		lessonsCompleted: 14,
		totalLessons: 21,
		lastWatched: "2 days ago",
		thumbnail: "📖",
		status: "in-progress",
		currentLesson: "The Bread of Life",
		duration: "4h 30m left",
		premium: true
	},
	{
		id: "c2",
		title: "Foundations of Christian Faith",
		category: "Christian Living",
		instructor: "Pastor Sarah Okafor",
		progress: 35,
		lessonsCompleted: 5,
		totalLessons: 14,
		lastWatched: "5 days ago",
		thumbnail: "✝️",
		status: "in-progress",
		currentLesson: "Grace and Salvation",
		duration: "6h 15m left",
		premium: true
	},
	{
		id: "c3",
		title: "Prayer and Spiritual Growth",
		category: "Prayer",
		instructor: "Pastor James Adeyemi",
		progress: 90,
		lessonsCompleted: 11,
		totalLessons: 12,
		lastWatched: "1 day ago",
		thumbnail: "🙏",
		status: "in-progress",
		currentLesson: "Intercession",
		duration: "45m left",
		premium: false
	},
	{
		id: "c4",
		title: "Leadership in Ministry",
		category: "Ministry Training",
		instructor: "Pastor Ruth Eze",
		progress: 100,
		lessonsCompleted: 18,
		totalLessons: 18,
		lastWatched: "1 week ago",
		thumbnail: "👑",
		status: "completed",
		currentLesson: "Completed",
		duration: "0m left",
		premium: true
	},
	{
		id: "c5",
		title: "Old Testament Survey",
		category: "Old Testament",
		instructor: "Pastor Daniel Yusuf",
		progress: 0,
		lessonsCompleted: 0,
		totalLessons: 36,
		lastWatched: "Never",
		thumbnail: "📜",
		status: "saved",
		currentLesson: "Introduction",
		duration: "12h total",
		premium: true
	},
	{
		id: "c6",
		title: "Christian Apologetics",
		category: "Christian Living",
		instructor: "Pastor Grace Amadi",
		progress: 0,
		lessonsCompleted: 0,
		totalLessons: 18,
		lastWatched: "Never",
		thumbnail: "🛡️",
		status: "saved",
		currentLesson: "Introduction",
		duration: "8h total",
		premium: false
	}
];
var MOCK_SERMONS = [
	{
		id: "s1",
		title: "The Kingdom Among Us",
		speaker: "Pastor David Mensah",
		bibleRef: "Matthew 6:33",
		date: "Jun 16, 2026",
		duration: "52:14",
		topic: "Kingdom of God",
		thumbnail: "🎙️",
		saved: true
	},
	{
		id: "s2",
		title: "Carried By Grace",
		speaker: "Pastor David Mensah",
		bibleRef: "Ephesians 2:8",
		date: "Jun 9, 2026",
		duration: "48:32",
		topic: "Grace",
		thumbnail: "🕊️",
		saved: false
	},
	{
		id: "s3",
		title: "Faith That Moves Mountains",
		speaker: "Pastor Caleb Nwosu",
		bibleRef: "Matthew 17:20",
		date: "Jun 2, 2026",
		duration: "44:18",
		topic: "Faith",
		thumbnail: "⛰️",
		saved: true
	},
	{
		id: "s4",
		title: "A House Of Prayer",
		speaker: "Pastor David Mensah",
		bibleRef: "Isaiah 56:7",
		date: "May 26, 2026",
		duration: "55:09",
		topic: "Prayer",
		thumbnail: "🏛️",
		saved: false
	},
	{
		id: "s5",
		title: "The Prodigal Son Returns",
		speaker: "Pastor Sarah Okafor",
		bibleRef: "Luke 15:11",
		date: "May 19, 2026",
		duration: "41:25",
		topic: "Redemption",
		thumbnail: "💛",
		saved: false
	}
];
var MOCK_EVENTS = [
	{
		id: "e1",
		title: "Sunday Worship Service",
		date: "Jun 29, 2026",
		time: "9:00 AM & 11:00 AM",
		location: "Main Sanctuary",
		type: "Worship",
		attendees: 412,
		status: "upcoming",
		image: "⛪"
	},
	{
		id: "e2",
		title: "Summer Faith Conference",
		date: "Aug 2, 2026",
		time: "10:00 AM - 6:00 PM",
		location: "WordnWorship Center",
		type: "Conference",
		attendees: 312,
		status: "registered",
		image: "🌟"
	},
	{
		id: "e3",
		title: "Wednesday Bible Study",
		date: "Jul 2, 2026",
		time: "7:00 PM",
		location: "Fellowship Hall",
		type: "Bible Study",
		attendees: 98,
		status: "upcoming",
		image: "📖"
	},
	{
		id: "e4",
		title: "Youth Fellowship Night",
		date: "Jun 27, 2026",
		time: "6:30 PM",
		location: "Youth Center",
		type: "Youth",
		attendees: 92,
		status: "registered",
		image: "🎉"
	},
	{
		id: "e5",
		title: "Prayer and Worship Evening",
		date: "Jul 11, 2026",
		time: "7:30 PM",
		location: "Prayer Room",
		type: "Prayer",
		attendees: 65,
		status: "upcoming",
		image: "🙏"
	},
	{
		id: "e6",
		title: "Marriage and Family Seminar",
		date: "Jul 19, 2026",
		time: "2:00 PM",
		location: "Fellowship Hall",
		type: "Seminar",
		attendees: 84,
		status: "upcoming",
		image: "💑"
	}
];
var MOCK_PRAYER_REQUESTS = [
	{
		id: "p1",
		title: "Healing for my mother",
		detail: "My mother was recently diagnosed and I need prayers for her complete healing.",
		category: "Health",
		privacy: "public",
		prayerCount: 24,
		answered: false,
		createdAt: "3 days ago",
		author: "You"
	},
	{
		id: "p2",
		title: "Career breakthrough",
		detail: "Believing God for a new opportunity aligned with my purpose.",
		category: "Career",
		privacy: "private",
		prayerCount: 8,
		answered: false,
		createdAt: "1 week ago",
		author: "You"
	},
	{
		id: "p3",
		title: "Thanksgiving for job offer",
		detail: "God answered my prayer! I received a wonderful job offer.",
		category: "Thanksgiving",
		privacy: "public",
		prayerCount: 42,
		answered: true,
		createdAt: "2 weeks ago",
		author: "Rachel M."
	},
	{
		id: "p4",
		title: "Restoration of family unity",
		detail: "Praying for peace and reconciliation in my family.",
		category: "Family",
		privacy: "public",
		prayerCount: 31,
		answered: false,
		createdAt: "5 days ago",
		author: "Andrew T."
	}
];
var MOCK_NOTIFICATIONS = [
	{
		id: "n1",
		title: "New Course Released!",
		message: "Christian Apologetics is now available in Bible Academy.",
		type: "course",
		read: false,
		createdAt: "1 hour ago"
	},
	{
		id: "n2",
		title: "Event Registration Confirmed",
		message: "You are registered for Summer Faith Conference.",
		type: "event",
		read: false,
		createdAt: "3 hours ago"
	},
	{
		id: "n3",
		title: "New Sermon Uploaded",
		message: "Pastor David uploaded: The Kingdom Among Us.",
		type: "sermon",
		read: true,
		createdAt: "1 day ago"
	},
	{
		id: "n4",
		title: "24 People Praying For You",
		message: "Your prayer request received 24 prayers.",
		type: "prayer",
		read: true,
		createdAt: "2 days ago"
	},
	{
		id: "n5",
		title: "Subscription Renewal",
		message: "Your Premium plan renews in 7 days.",
		type: "subscription",
		read: false,
		createdAt: "3 days ago"
	},
	{
		id: "n6",
		title: "Certificate Earned! 🎉",
		message: "You earned a certificate for Leadership in Ministry.",
		type: "certificate",
		read: true,
		createdAt: "1 week ago"
	}
];
var MOCK_POSTS = [
	{
		id: "po1",
		author: "Rachel Mensah",
		avatar: "RM",
		content: "\"For I know the plans I have for you\" — God is faithful! Just got confirmed for a new role. Never stop trusting Him. 🙏✨",
		likes: 48,
		comments: 12,
		createdAt: "2 hours ago",
		type: "testimony"
	},
	{
		id: "po2",
		author: "Andrew Thompson",
		avatar: "AT",
		content: "Wednesday Bible study was amazing tonight. Pastor David's teaching on John 15 really spoke to me. Who else was blessed?",
		likes: 32,
		comments: 8,
		createdAt: "5 hours ago",
		type: "encouragement"
	},
	{
		id: "po3",
		author: "Priya Sharma",
		avatar: "PS",
		content: "\"The Lord is my shepherd, I shall not want.\" — Psalm 23:1. Starting every morning with this truth. Have a blessed day, WordnWorship family! 🌅",
		likes: 61,
		comments: 15,
		createdAt: "1 day ago",
		type: "verse"
	}
];
var MOCK_ANNOUNCEMENTS = [
	{
		id: "an1",
		title: "New Bible Academy Course: Christian Apologetics",
		description: "Our newest course is now live! Learn to defend your faith with grace and wisdom. Enroll today.",
		date: "Jun 20, 2026",
		category: "Bible Academy",
		pinned: true,
		image: "🎓"
	},
	{
		id: "an2",
		title: "Sunday Service Time Update",
		description: "Starting July 6, our first Sunday service will begin at 8:30 AM. Second service remains at 11:00 AM.",
		date: "Jun 18, 2026",
		category: "Church News",
		pinned: true,
		image: "⛪"
	},
	{
		id: "an3",
		title: "Community Outreach Registration Open",
		description: "Join us as we serve our community on July 5. Sign up through the Events page.",
		date: "Jun 15, 2026",
		category: "Events",
		pinned: false,
		image: "🤝"
	},
	{
		id: "an4",
		title: "Prayer Week Begins This Monday",
		description: "Join us for a week of corporate prayer and fasting. Daily sessions at 6 AM and 7 PM.",
		date: "Jun 12, 2026",
		category: "Prayer",
		pinned: false,
		image: "🙏"
	}
];
var BIBLE_VERSES = [
	{
		verse: "Your word is a lamp to my feet and a light to my path.",
		ref: "Psalm 119:105"
	},
	{
		verse: "I can do all things through Christ who strengthens me.",
		ref: "Philippians 4:13"
	},
	{
		verse: "Trust in the Lord with all your heart and lean not on your own understanding.",
		ref: "Proverbs 3:5"
	},
	{
		verse: "For God so loved the world that he gave his one and only Son.",
		ref: "John 3:16"
	},
	{
		verse: "The Lord is my shepherd; I shall not want.",
		ref: "Psalm 23:1"
	},
	{
		verse: "Come to me, all you who are weary and burdened, and I will give you rest.",
		ref: "Matthew 11:28"
	}
];
var DEVOTION = {
	verse: "Be still, and know that I am God.",
	ref: "Psalm 46:10",
	message: "In the noise and rush of modern life, God invites us into stillness. Not passive idleness, but an active trust — a ceasing from our striving to acknowledge His sovereignty. When we quiet our hearts, we create space to hear His voice, feel His presence, and be renewed in His peace that surpasses all understanding.",
	reflection: "What areas of your life do you need to release control and trust God more fully today?",
	prayer: "Lord, still my heart before You today. Help me to trust in Your sovereignty over every area of my life. Let Your peace guard my heart and mind in Christ Jesus. Amen."
};
var STREAK_DAYS = [
	{
		day: "Mon",
		done: true
	},
	{
		day: "Tue",
		done: true
	},
	{
		day: "Wed",
		done: true
	},
	{
		day: "Thu",
		done: true
	},
	{
		day: "Fri",
		done: false
	},
	{
		day: "Sat",
		done: false
	},
	{
		day: "Sun",
		done: false
	}
];
var NAV_ITEMS = [
	{
		id: "home",
		label: "Dashboard",
		icon: LayoutDashboard
	},
	{
		id: "my-learning",
		label: "My Learning",
		icon: BookOpen
	},
	{
		id: "bible-academy",
		label: "Bible Academy",
		icon: GraduationCap
	},
	{
		id: "sermons",
		label: "Sermons",
		icon: MicVocal
	},
	{
		id: "devotion",
		label: "Daily Devotion",
		icon: Sun
	},
	{
		id: "events",
		label: "Events",
		icon: Calendar
	},
	{
		id: "prayer",
		label: "Prayer Requests",
		icon: HeartHandshake
	},
	{
		id: "community",
		label: "Community",
		icon: Users
	},
	{
		id: "saved",
		label: "Saved Content",
		icon: Bookmark
	},
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
		id: "profile",
		label: "Profile",
		icon: CircleUser
	},
	{
		id: "settings",
		label: "Settings",
		icon: Settings
	},
	{
		id: "subscription",
		label: "Subscription",
		icon: CreditCard
	}
];
function DashboardLayout({ user, view, onViewChange, children, unreadCount = 0 }) {
	const navigate = useNavigate();
	const [collapsed, setCollapsed] = (0, import_react.useState)(false);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const initials = user.name.split(" ").map((n) => n[0]).join("").toUpperCase();
	function handleLogout() {
		logout();
		navigate({ to: "/" });
	}
	function navTo(id) {
		onViewChange(id);
		setMobileOpen(false);
	}
	const SidebarInner = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex items-center gap-3 px-4 py-5 border-b border-white/10", collapsed && "px-3 justify-center"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-gold shadow-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cross, {
						className: "h-4 w-4 text-navy",
						strokeWidth: 2.5
					})
				}), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-white text-base leading-tight",
					children: "WordnWorship"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[9px] tracking-[0.3em] text-gold uppercase",
					children: "Fellowship"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex-1 overflow-y-auto py-4 px-2 space-y-0.5",
				children: NAV_ITEMS.map(({ id, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => navTo(id),
					className: cn("flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all", view === id ? "bg-gradient-gold text-navy font-semibold shadow-gold" : "text-white/75 hover:bg-white/10 hover:text-white", collapsed && "justify-center px-2"),
					title: collapsed ? label : void 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 shrink-0" }), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex-1 text-left",
						children: label
					}), id === "notifications" && unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-4 w-4 place-items-center rounded-full bg-red-500 text-[10px] text-white font-bold",
						children: unreadCount
					})] })]
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("border-t border-white/10 p-3 space-y-1", collapsed && "flex flex-col items-center"),
				children: [
					!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 px-2 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-gold text-navy font-bold text-xs",
							children: initials
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white text-sm font-medium truncate",
								children: user.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/40 text-xs truncate",
								children: user.email
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: cn("flex items-center gap-2 w-full rounded-xl px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors", collapsed && "justify-center"),
						title: collapsed ? "Home" : void 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cross, { className: "h-4 w-4 shrink-0" }), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Back to Site" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleLogout,
						className: cn("flex items-center gap-2 w-full rounded-xl px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors", collapsed && "justify-center"),
						title: collapsed ? "Logout" : void 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4 shrink-0" }), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Logout" })]
					})
				]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-screen bg-cream overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: cn("hidden lg:flex flex-col bg-navy transition-all duration-300 shrink-0", collapsed ? "w-16" : "w-60"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarInner, {})
			}),
			mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:hidden fixed inset-0 z-50 flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-60 bg-navy flex flex-col h-full shadow-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarInner, {})
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-serif text-navy text-lg",
								children: NAV_ITEMS.find((n) => n.id === view)?.label ?? "Dashboard"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => navTo("notifications"),
							className: "relative grid h-9 w-9 place-items-center rounded-lg border border-border text-navy hover:bg-cream transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }), unreadCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-1 -right-1 grid h-4 w-4 place-items-center rounded-full bg-red-500 text-[9px] text-white font-bold",
								children: unreadCount
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => navTo("profile"),
							className: "grid h-8 w-8 place-items-center rounded-full bg-gradient-gold text-navy font-bold text-xs shadow-gold",
							children: initials
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
var DAILY_VERSE = BIBLE_VERSES[(/* @__PURE__ */ new Date()).getDay() % BIBLE_VERSES.length];
function DashboardHome({ user, isPremium, onViewChange, onCourseSelect }) {
	const [verseSaved, setVerseSaved] = (0, import_react.useState)(false);
	const inProgress = MOCK_COURSES.filter((c) => c.status === "in-progress");
	const unread = MOCK_NOTIFICATIONS.filter((n) => !n.read).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 space-y-6 max-w-7xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-navy text-white p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 opacity-5 pointer-events-none",
						style: {
							backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)",
							backgroundSize: "30px 30px"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.3em] uppercase text-gold font-semibold",
								children: "Welcome back"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-2xl md:text-3xl mt-1",
								children: user.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/60 text-sm mt-1",
								children: "Continue your faith journey today 🙏"
							})
						]
					}),
					!isPremium && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => onViewChange("subscription"),
						className: "relative flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "h-4 w-4" }), " Upgrade to Premium"]
					}),
					isPremium && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-sm text-gold shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "h-4 w-4" }), " Premium Member"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-3",
				children: [
					{
						icon: TrendingUp,
						label: "Learning Progress",
						value: "68%",
						sub: "Gospel of John",
						color: "text-blue-500"
					},
					{
						icon: CirclePlay,
						label: "Videos Watched",
						value: "47",
						sub: "This month",
						color: "text-purple-500"
					},
					{
						icon: Calendar,
						label: "Upcoming Events",
						value: "3",
						sub: "Next: Jun 27",
						color: "text-gold"
					},
					{
						icon: Users,
						label: "Prayer Requests",
						value: "2 Active",
						sub: "24 praying",
						color: "text-green-500"
					}
				].map(({ icon: Icon, label, value, sub, color }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-background border border-border p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-5 w-5 ${color} mb-3` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-xl text-navy",
							children: value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium text-navy mt-0.5",
							children: label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: sub
						})
					]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-3 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-gold/30 bg-background p-6 relative overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-32 h-32 bg-gradient-gold opacity-5 rounded-full -translate-y-8 translate-x-8" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-3",
									children: "Daily Bible Verse"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
									className: "font-serif text-xl text-navy leading-relaxed",
									children: [
										"\"",
										DAILY_VERSE.verse,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-gold font-semibold text-sm mt-3",
									children: ["— ", DAILY_VERSE.ref]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2 mt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setVerseSaved((v) => !v),
										className: `flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${verseSaved ? "border-gold bg-gold/10 text-gold" : "border-border text-muted-foreground hover:border-gold hover:text-gold"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "h-3.5 w-3.5" }), verseSaved ? "Saved" : "Save"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:border-navy hover:text-navy transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-3.5 w-3.5" }), " Share"]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-background border border-border p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-lg text-navy",
									children: "Continue Watching"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => onViewChange("my-learning"),
									className: "text-xs text-gold hover:underline flex items-center gap-1",
									children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3",
								children: inProgress.map((course) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 p-3 rounded-xl bg-cream hover:bg-muted transition-colors cursor-pointer group",
									onClick: () => onCourseSelect(course),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-2xl",
											children: course.thumbnail
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 min-w-0",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-medium text-navy truncate",
													children: course.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted-foreground mt-0.5",
													children: course.currentLesson
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-1.5 h-1.5 rounded-full bg-border overflow-hidden",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "h-full bg-gradient-gold transition-all",
														style: { width: `${course.progress}%` }
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-xs text-muted-foreground mt-1",
													children: [
														course.progress,
														"% · ",
														course.duration
													]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: "shrink-0 rounded-full bg-navy px-3 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity",
											children: "Resume"
										})
									]
								}, course.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-background border border-border p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-lg text-navy",
									children: "Upcoming Events"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => onViewChange("events"),
									className: "text-xs text-gold hover:underline flex items-center gap-1",
									children: ["All events ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3",
								children: MOCK_EVENTS.slice(0, 3).map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-4 p-3 rounded-xl bg-cream",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-gold text-xl shadow-gold",
											children: event.image
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium text-navy",
												children: event.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-wrap gap-x-3 mt-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-1 text-xs text-muted-foreground",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }),
														event.date,
														" · ",
														event.time
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-1 text-xs text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }), event.location]
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${event.status === "registered" ? "bg-green-100 text-green-700" : "bg-navy/10 text-navy"}`,
											children: event.status === "registered" ? "Registered" : "Register"
										})
									]
								}, event.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-background border border-border p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-lg text-navy",
									children: "Recent Sermons"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => onViewChange("sermons"),
									className: "text-xs text-gold hover:underline flex items-center gap-1",
									children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3",
								children: MOCK_SERMONS.slice(0, 3).map((sermon) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 p-3 rounded-xl bg-cream hover:bg-muted transition-colors cursor-pointer",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy text-lg",
											children: sermon.thumbnail
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium text-navy truncate",
												children: sermon.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-muted-foreground",
												children: [
													sermon.speaker,
													" · ",
													sermon.bibleRef
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right shrink-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: sermon.duration
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-gold mt-0.5",
												children: sermon.date
											})]
										})
									]
								}, sermon.id))
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-background border border-border p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-serif text-lg text-navy",
											children: "Notifications"
										})]
									}), unread > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "rounded-full bg-red-500 px-2 py-0.5 text-xs text-white font-bold",
										children: [unread, " new"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-3",
									children: MOCK_NOTIFICATIONS.slice(0, 4).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `flex gap-3 p-2.5 rounded-xl transition-colors ${!n.read ? "bg-gold/5 border border-gold/20" : ""}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `mt-1.5 h-2 w-2 rounded-full shrink-0 ${!n.read ? "bg-gold" : "bg-muted"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-semibold text-navy",
												children: n.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground mt-0.5 leading-relaxed",
												children: n.message
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground/60 mt-1",
												children: n.createdAt
											})
										] })]
									}, n.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => onViewChange("notifications"),
									className: "mt-3 w-full text-center text-xs text-gold hover:underline",
									children: "View all notifications"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-background border border-border p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-lg text-navy mb-4",
								children: "Announcements"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3",
								children: MOCK_ANNOUNCEMENTS.slice(0, 3).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xl shrink-0",
										children: a.image
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold text-navy leading-snug",
											children: a.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground mt-0.5 leading-relaxed line-clamp-2",
											children: a.description
										}),
										a.pinned && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-block mt-1 rounded-full bg-gold/10 px-2 py-0.5 text-[10px] text-gold font-semibold",
											children: "Pinned"
										})
									] })]
								}, a.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `rounded-2xl p-5 ${isPremium ? "bg-gradient-gold" : "bg-navy"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: `h-5 w-5 ${isPremium ? "text-navy" : "text-gold"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `font-serif text-lg ${isPremium ? "text-navy" : "text-white"}`,
									children: isPremium ? "Premium Active" : "Free Plan"
								})]
							}), isPremium ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-navy/70 text-xs",
									children: "Your plan renews in 7 days"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 h-1.5 rounded-full bg-navy/10 overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full bg-navy/30 w-[80%]" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 mt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-3.5 w-3.5 text-navy/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-navy/70",
										children: "All courses unlocked"
									})]
								})
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/60 text-xs mb-3",
								children: "Unlock all courses, sermons and features"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => onViewChange("subscription"),
								className: "w-full rounded-full bg-gradient-gold py-2 text-sm font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform",
								children: "Upgrade Now"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-background border border-border p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-lg text-navy",
									children: "My Progress"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4",
								children: inProgress.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-xs mb-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-navy truncate max-w-[65%]",
										children: c.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground",
										children: [
											c.lessonsCompleted,
											"/",
											c.totalLessons
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-1.5 rounded-full bg-cream overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full bg-gradient-gold",
										style: { width: `${c.progress}%` }
									})
								})] }, c.id))
							})]
						})
					]
				})]
			})
		]
	});
}
function MyLearning({ isPremium, onCourseSelect, onViewChange }) {
	const [tab, setTab] = (0, import_react.useState)("in-progress");
	const filtered = MOCK_COURSES.filter((c) => {
		if (tab === "in-progress") return c.status === "in-progress";
		if (tab === "completed") return c.status === "completed";
		if (tab === "saved") return c.status === "saved";
		return false;
	});
	const TABS = [
		{
			id: "in-progress",
			label: "In Progress",
			count: MOCK_COURSES.filter((c) => c.status === "in-progress").length
		},
		{
			id: "completed",
			label: "Completed",
			count: MOCK_COURSES.filter((c) => c.status === "completed").length
		},
		{
			id: "saved",
			label: "Saved Courses",
			count: MOCK_COURSES.filter((c) => c.status === "saved").length
		},
		{
			id: "certificates",
			label: "Certificates",
			count: 1
		}
	];
	if (tab === "certificates") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-5xl mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
			tabs: TABS,
			active: tab,
			onChange: (t) => setTab(t)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6",
			children: [MOCK_COURSES.filter((c) => c.status === "completed").map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-background border border-border p-6 flex items-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-16 w-16 place-items-center rounded-full bg-gradient-gold shadow-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-8 w-8 text-navy" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-lg text-navy",
							children: c.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								c.instructor,
								" · ",
								c.totalLessons,
								" lessons"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "rounded-full bg-gradient-gold px-4 py-2 text-sm font-semibold text-navy shadow-gold",
						children: "Download"
					})
				]
			}, c.id)), MOCK_COURSES.filter((c) => c.status === "completed").length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState$1, {
				icon: "🎓",
				title: "No certificates yet",
				desc: "Complete a course to earn your certificate."
			})]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-5xl mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
			tabs: TABS,
			active: tab,
			onChange: (t) => setTab(t)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
			children: [filtered.map((course) => {
				const locked = course.premium && !isPremium;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-background border border-border overflow-hidden flex flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-36 bg-navy flex items-center justify-center text-5xl",
						children: [course.thumbnail, locked && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-6 w-6 text-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white text-xs font-medium",
								children: "Premium"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 flex flex-col flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-gold font-semibold uppercase tracking-wide",
								children: course.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-serif text-base text-navy mt-1 leading-snug",
								children: course.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-1",
								children: course.instructor
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-xs text-muted-foreground mb-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										course.lessonsCompleted,
										"/",
										course.totalLessons,
										" lessons"
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [course.progress, "%"] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-1.5 rounded-full bg-cream overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full bg-gradient-gold",
										style: { width: `${course.progress}%` }
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 mt-auto pt-3",
								children: locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => onViewChange("subscription"),
									className: "flex items-center justify-center gap-2 w-full rounded-full bg-gradient-gold py-2 text-sm font-semibold text-navy shadow-gold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "h-4 w-4" }), " Upgrade to Unlock"]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => onCourseSelect(course),
									className: "flex items-center justify-center gap-2 w-full rounded-full bg-navy py-2 text-sm font-medium text-white hover:bg-navy/90 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, { className: "h-4 w-4" }), course.status === "completed" ? "Review" : tab === "saved" ? "Start" : "Continue"]
								})
							})
						]
					})]
				}, course.id);
			}), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "col-span-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState$1, {
					icon: "📚",
					title: "Nothing here yet",
					desc: "Courses you enroll in will appear here."
				})
			})]
		})]
	});
}
function Tabs({ tabs, active, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-1 rounded-xl bg-cream p-1 overflow-x-auto",
		children: tabs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => onChange(t.id),
			className: `flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap transition-all ${active === t.id ? "bg-background text-navy shadow-sm" : "text-muted-foreground hover:text-navy"}`,
			children: [t.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `rounded-full px-1.5 py-0.5 text-[10px] font-bold ${active === t.id ? "bg-gold/20 text-gold" : "bg-border text-muted-foreground"}`,
				children: t.count
			})]
		}, t.id))
	});
}
function EmptyState$1({ icon, title, desc }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-5xl mb-3",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif text-xl text-navy",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground mt-1",
				children: desc
			})
		]
	});
}
var LESSONS = [
	{
		id: "l1",
		title: "Introduction & Overview",
		duration: "8:32",
		completed: true,
		free: true
	},
	{
		id: "l2",
		title: "Historical Context of John",
		duration: "12:14",
		completed: true,
		free: true
	},
	{
		id: "l3",
		title: "The Word Became Flesh",
		duration: "15:40",
		completed: true,
		free: false
	},
	{
		id: "l4",
		title: "The First Disciples",
		duration: "11:05",
		completed: true,
		free: false
	},
	{
		id: "l5",
		title: "The Wedding at Cana",
		duration: "9:28",
		completed: true,
		free: false
	},
	{
		id: "l6",
		title: "The Bread of Life",
		duration: "18:22",
		completed: false,
		free: false
	},
	{
		id: "l7",
		title: "Walking on Water",
		duration: "13:55",
		completed: false,
		free: false
	},
	{
		id: "l8",
		title: "The Good Shepherd",
		duration: "16:10",
		completed: false,
		free: false
	}
];
function VideoLearning({ course, isPremium, onViewChange }) {
	const [activeLesson, setActiveLesson] = (0, import_react.useState)(LESSONS[5]);
	const [completed, setCompleted] = (0, import_react.useState)(new Set(LESSONS.filter((l) => l.completed).map((l) => l.id)));
	const [note, setNote] = (0, import_react.useState)("");
	const [savedNotes, setSavedNotes] = (0, import_react.useState)([]);
	const [tab, setTab] = (0, import_react.useState)("notes");
	const [lessonsOpen, setLessonsOpen] = (0, import_react.useState)(true);
	const isLocked = !isPremium && !activeLesson.free;
	const progress = Math.round(completed.size / LESSONS.length * 100);
	function markDone() {
		setCompleted((prev) => new Set([...prev, activeLesson.id]));
		const idx = LESSONS.findIndex((l) => l.id === activeLesson.id);
		if (idx < LESSONS.length - 1) setActiveLesson(LESSONS[idx + 1]);
	}
	function saveNote() {
		if (note.trim()) {
			setSavedNotes((prev) => [`[${activeLesson.title}]: ${note.trim()}`, ...prev]);
			setNote("");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col lg:flex-row h-full overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 overflow-y-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4 md:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => onViewChange("my-learning"),
						className: "flex items-center gap-2 text-sm text-muted-foreground hover:text-navy mb-4 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to My Learning"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-gold font-semibold uppercase tracking-wide",
						children: course.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl text-navy mt-1",
						children: course.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-0.5",
						children: course.instructor
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mt-4 rounded-2xl overflow-hidden bg-navy aspect-video flex items-center justify-center",
						children: isLocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-4 text-white text-center px-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-12 w-12 text-gold" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif text-xl",
									children: "Premium Content"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-white/60 text-sm mt-1",
									children: "Upgrade to access this lesson and all premium content"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => onViewChange("subscription"),
									className: "flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-navy shadow-gold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "h-4 w-4" }), " Upgrade to Premium"]
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-3 text-white",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, { className: "h-16 w-16 text-gold opacity-80" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-white/60",
									children: activeLesson.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-white/40",
									children: activeLesson.duration
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-xs text-muted-foreground mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Course Progress" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									completed.size,
									"/",
									LESSONS.length,
									" lessons · ",
									progress,
									"%"
								] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-2 rounded-full bg-cream overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-gradient-gold transition-all duration-500",
									style: { width: `${progress}%` }
								})
							})]
						}), !isLocked && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: markDone,
							disabled: completed.has(activeLesson.id),
							className: `shrink-0 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${completed.has(activeLesson.id) ? "bg-green-100 text-green-700 cursor-default" : "bg-navy text-white hover:bg-navy/90"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-4 w-4" }), completed.has(activeLesson.id) ? "Completed" : "Mark Complete"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1 rounded-xl bg-cream p-1",
							children: [
								"notes",
								"resources",
								"refs",
								"bookmarks"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setTab(t),
								className: `flex-1 rounded-lg py-2 text-xs font-medium capitalize transition-all ${tab === t ? "bg-background text-navy shadow-sm" : "text-muted-foreground hover:text-navy"}`,
								children: t === "refs" ? "Bible Refs" : t
							}, t))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4",
							children: [
								tab === "notes" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											value: note,
											onChange: (e) => setNote(e.target.value),
											placeholder: "Take notes while watching...",
											className: "w-full rounded-xl border border-border bg-background p-3 text-sm text-navy placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-gold/30",
											rows: 3
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: saveNote,
											className: "rounded-full bg-navy px-4 py-2 text-sm text-white hover:bg-navy/90 transition-colors",
											children: "Save Note"
										}),
										savedNotes.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl bg-cream p-3 text-sm text-navy flex gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4 text-gold shrink-0 mt-0.5" }),
												" ",
												n
											]
										}, i)),
										savedNotes.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted-foreground",
											children: "No notes yet for this course."
										})
									]
								}),
								tab === "resources" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-2",
									children: [
										"Lesson Slides (PDF)",
										"Study Guide",
										"Supplementary Reading"
									].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 rounded-xl bg-cream p-3 cursor-pointer hover:bg-muted transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-navy",
											children: r
										})]
									}, r))
								}),
								tab === "refs" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-2",
									children: [
										"John 6:35",
										"John 6:48",
										"Exodus 16:4",
										"Psalm 78:24"
									].map((ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 rounded-xl bg-cream p-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-medium text-navy",
											children: ref
										})]
									}, ref))
								}),
								tab === "bookmarks" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 rounded-xl bg-cream p-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-navy",
											children: "The Bread of Life — 4:22"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "Add bookmarks while watching by pressing B."
									})]
								})
							]
						})]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:w-80 lg:border-l border-border overflow-y-auto bg-background",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setLessonsOpen((v) => !v),
				className: "w-full flex items-center justify-between px-4 py-3 border-b border-border text-sm font-semibold text-navy sticky top-0 bg-background z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"Lessons (",
					LESSONS.length,
					")"
				] }), lessonsOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })]
			}), lessonsOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-border",
				children: LESSONS.map((lesson, i) => {
					const locked = !isPremium && !lesson.free;
					const isDone = completed.has(lesson.id);
					const isActive = lesson.id === activeLesson.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => !locked && setActiveLesson(lesson),
						className: `w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${isActive ? "bg-gold/10 border-l-2 border-l-gold" : "hover:bg-cream"} ${locked ? "cursor-not-allowed opacity-60" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold ${isDone ? "bg-green-500 text-white" : isActive ? "bg-gold text-navy" : "bg-cream text-muted-foreground"}`,
							children: isDone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-4 w-4" }) : locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3 w-3" }) : i + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `text-xs font-medium truncate ${isActive ? "text-navy" : "text-foreground"}`,
								children: lesson.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: lesson.duration
							})]
						})]
					}, lesson.id);
				})
			})]
		})]
	});
}
var ALL_COURSES = [
	...MOCK_COURSES,
	{
		id: "c7",
		title: "The Book of Revelation",
		category: "Prophecy",
		instructor: "Pastor Caleb Nwosu",
		progress: 0,
		lessonsCompleted: 0,
		totalLessons: 24,
		lastWatched: "Never",
		thumbnail: "🔮",
		status: "saved",
		currentLesson: "Introduction",
		duration: "10h total",
		premium: true
	},
	{
		id: "c8",
		title: "New Testament Greek Basics",
		category: "Biblical Languages",
		instructor: "Pastor Daniel Yusuf",
		progress: 0,
		lessonsCompleted: 0,
		totalLessons: 20,
		lastWatched: "Never",
		thumbnail: "🏛️",
		status: "saved",
		currentLesson: "Introduction",
		duration: "9h total",
		premium: true
	}
];
var CATEGORIES$1 = [
	"All",
	"New Testament",
	"Old Testament",
	"Prayer",
	"Christian Living",
	"Ministry Training",
	"Prophecy",
	"Biblical Languages"
];
function BibleAcademyPage({ isPremium, onCourseSelect, onViewChange }) {
	const [search, setSearch] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("All");
	const filtered = ALL_COURSES.filter((c) => {
		const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) || c.instructor.toLowerCase().includes(search.toLowerCase());
		const matchCat = category === "All" || c.category === category;
		return matchSearch && matchCat;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-6xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-navy text-white p-6 mb-6 relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 opacity-5 pointer-events-none",
						style: {
							backgroundImage: "radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
							backgroundSize: "30px 30px"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "relative text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-2",
						children: "Bible Academy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "relative font-serif text-2xl md:text-3xl",
						children: "Grow Deeper in God's Word"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "relative text-white/60 text-sm mt-2 max-w-lg",
						children: "Expert-taught courses by seasoned pastors and theologians. From foundational faith to deep biblical study."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex gap-4 mt-4 text-sm text-white/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"📚 ",
								ALL_COURSES.length,
								" Courses"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🎓 7 Instructors" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⏱️ 80+ Hours" })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col sm:flex-row gap-3 mb-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: search,
						onChange: (e) => setSearch(e.target.value),
						placeholder: "Search courses or instructors...",
						className: "w-full rounded-xl border border-border bg-background pl-9 pr-4 py-2.5 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 flex-wrap mb-6",
				children: CATEGORIES$1.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCategory(cat),
					className: `rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${category === cat ? "bg-navy text-white" : "bg-cream text-muted-foreground hover:text-navy"}`,
					children: cat
				}, cat))
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center py-20 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-5xl mb-3",
						children: "📚"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-xl text-navy",
						children: "No courses found"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: "Try a different search or category."
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
				children: filtered.map((course) => {
					const locked = course.premium && !isPremium;
					const isEnrolled = course.status === "in-progress" || course.status === "completed";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-background border border-border overflow-hidden flex flex-col hover:shadow-md transition-shadow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-32 bg-navy flex items-center justify-center text-5xl",
							children: [
								course.thumbnail,
								locked && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-5 w-5 text-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white text-[10px] font-medium",
										children: "Premium"
									})]
								}),
								isEnrolled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-2 right-2 rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-bold text-white",
									children: "Enrolled"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 flex flex-col flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] text-gold font-semibold uppercase tracking-wide",
									children: course.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-serif text-sm text-navy mt-0.5 leading-snug flex-1",
									children: course.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-1",
									children: course.instructor
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: [
										course.totalLessons,
										" lessons · ",
										course.duration
									]
								}),
								isEnrolled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-1 rounded-full bg-cream overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full bg-gradient-gold",
											style: { width: `${course.progress}%` }
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground mt-0.5",
										children: [course.progress, "% complete"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3",
									children: locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => onViewChange("subscription"),
										className: "flex items-center justify-center gap-1.5 w-full rounded-full bg-gradient-gold py-2 text-xs font-semibold text-navy shadow-gold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "h-3.5 w-3.5" }), " Upgrade to Unlock"]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => onCourseSelect(course),
										className: "flex items-center justify-center gap-1.5 w-full rounded-full bg-navy py-2 text-xs font-medium text-white hover:bg-navy/90 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, { className: "h-3.5 w-3.5" }), isEnrolled ? "Continue" : "Start Course"]
									})
								})
							]
						})]
					}, course.id);
				})
			})
		]
	});
}
var TOPICS = [
	"All",
	"Kingdom of God",
	"Grace",
	"Faith",
	"Prayer",
	"Redemption"
];
function SermonsPage() {
	const [saved, setSaved] = (0, import_react.useState)(new Set(MOCK_SERMONS.filter((s) => s.saved).map((s) => s.id)));
	const [search, setSearch] = (0, import_react.useState)("");
	const [topic, setTopic] = (0, import_react.useState)("All");
	const filtered = MOCK_SERMONS.filter((s) => {
		const matchSearch = s.title.toLowerCase().includes(search.toLowerCase()) || s.speaker.toLowerCase().includes(search.toLowerCase());
		const matchTopic = topic === "All" || s.topic === topic;
		return matchSearch && matchTopic;
	});
	function toggleSave(id) {
		setSaved((prev) => {
			const next = new Set(prev);
			next.has(id) ? next.delete(id) : next.add(id);
			return next;
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-5xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl text-navy",
					children: "Sermons"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground mt-0.5",
					children: [MOCK_SERMONS.length, " messages available"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row gap-3 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: search,
						onChange: (e) => setSearch(e.target.value),
						placeholder: "Search sermons or speakers...",
						className: "w-full rounded-xl border border-border bg-background pl-9 pr-4 py-2.5 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1.5 flex-wrap",
					children: TOPICS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setTopic(t),
						className: `rounded-full px-3 py-2 text-xs font-medium transition-colors ${topic === t ? "bg-navy text-white" : "bg-cream text-muted-foreground hover:text-navy"}`,
						children: t
					}, t))
				})]
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center py-20 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-5xl mb-3",
						children: "🎙️"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-xl text-navy",
						children: "No sermons found"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: "Try a different search or topic filter."
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: filtered.map((sermon) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-background border border-border p-4 flex items-center gap-4 hover:shadow-sm transition-shadow",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-navy text-2xl",
							children: sermon.thumbnail
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-medium text-navy text-sm leading-snug",
									children: sermon.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: sermon.speaker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 mt-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1 text-xs text-gold font-medium",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-3 w-3" }),
												" ",
												sermon.bibleRef
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: sermon.date
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: sermon.duration
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => toggleSave(sermon.id),
								className: `grid h-9 w-9 place-items-center rounded-full border transition-colors ${saved.has(sermon.id) ? "border-gold bg-gold/10 text-gold" : "border-border text-muted-foreground hover:border-gold hover:text-gold"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "flex items-center gap-1.5 rounded-full bg-navy px-3 py-2 text-xs font-medium text-white hover:bg-navy/90 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, { className: "h-3.5 w-3.5" }), " Play"]
							})]
						})
					]
				}, sermon.id))
			})
		]
	});
}
function DevotionPage() {
	const [completed, setCompleted] = (0, import_react.useState)(false);
	const [prayerDone, setPrayerDone] = (0, import_react.useState)(false);
	const todayVerse = BIBLE_VERSES[(/* @__PURE__ */ new Date()).getDay() % BIBLE_VERSES.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-3xl mx-auto space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-navy text-white p-6 relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 opacity-5 pointer-events-none",
						style: {
							backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)",
							backgroundSize: "30px 30px"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex items-center gap-3 mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-6 w-6 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.3em] uppercase text-gold font-semibold",
							children: "Daily Devotion"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "relative font-serif text-2xl",
						children: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
							weekday: "long",
							month: "long",
							day: "numeric"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "relative text-white/60 text-sm mt-1",
						children: "Start your day with God's Word"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-background border border-border p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-lg text-navy",
						children: "This Week's Streak 🔥"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600",
						children: "4 day streak"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-7 gap-2",
					children: STREAK_DAYS.map(({ day, done }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid h-9 w-9 place-items-center rounded-full text-sm font-medium ${done ? "bg-gradient-gold text-navy shadow-gold" : "bg-cream text-muted-foreground"}`,
							children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-4 w-4" }) : "○"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: day
						})]
					}, day))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-gold/30 bg-background p-6 relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-28 h-28 bg-gradient-gold opacity-5 rounded-full -translate-y-8 translate-x-8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.3em] uppercase text-gold font-semibold",
							children: "Today's Verse"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "font-serif text-xl text-navy leading-relaxed",
						children: [
							"\"",
							todayVerse.verse,
							"\""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-gold font-semibold text-sm mt-3",
						children: ["— ", todayVerse.ref]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-background border border-border p-6 space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-2",
						children: "Today's Message"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "font-serif text-xl text-navy leading-relaxed mb-2",
						children: [
							"\"",
							DEVOTION.verse,
							"\""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-gold font-semibold text-sm",
						children: ["— ", DEVOTION.ref]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground leading-relaxed",
					children: DEVOTION.message
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-cream border border-border p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-3",
						children: "Reflection Question"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-lg text-navy leading-relaxed",
						children: DEVOTION.reflection
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						placeholder: "Write your reflection here...",
						rows: 4,
						className: "mt-4 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-navy placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-gold/30"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-background border border-border p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.3em] uppercase text-gold font-semibold mb-3",
						children: "Today's Prayer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground leading-relaxed italic",
						children: DEVOTION.prayer
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setPrayerDone(true),
						className: `mt-4 flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${prayerDone ? "bg-green-100 text-green-700" : "bg-navy text-white hover:bg-navy/90"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4" }), prayerDone ? "Prayer Completed ✓" : "I've Prayed This"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setCompleted(true),
				disabled: completed,
				className: `w-full rounded-full py-3.5 text-sm font-semibold transition-all ${completed ? "bg-green-100 text-green-700 cursor-default" : "bg-gradient-gold text-navy shadow-gold hover:scale-[1.01]"}`,
				children: completed ? "✓ Devotion Completed — See you tomorrow!" : "Mark Devotion as Complete"
			})
		]
	});
}
var TYPE_COLORS = {
	Worship: "bg-blue-100 text-blue-700",
	Conference: "bg-purple-100 text-purple-700",
	"Bible Study": "bg-green-100 text-green-700",
	Youth: "bg-orange-100 text-orange-700",
	Prayer: "bg-yellow-100 text-yellow-700",
	Seminar: "bg-pink-100 text-pink-700"
};
function EventsPage() {
	const [viewMode, setViewMode] = (0, import_react.useState)("list");
	const [registrations, setRegistrations] = (0, import_react.useState)(new Set(MOCK_EVENTS.filter((e) => e.status === "registered").map((e) => e.id)));
	function toggleRegister(id) {
		setRegistrations((prev) => {
			const next = new Set(prev);
			next.has(id) ? next.delete(id) : next.add(id);
			return next;
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-5xl mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl text-navy",
				children: "Church Events"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground mt-0.5",
				children: [MOCK_EVENTS.length, " upcoming events"]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex rounded-xl border border-border overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setViewMode("list"),
					className: `flex items-center gap-2 px-3 py-2 text-sm transition-colors ${viewMode === "list" ? "bg-navy text-white" : "bg-background text-muted-foreground hover:text-navy"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "h-4 w-4" }), " List"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setViewMode("calendar"),
					className: `flex items-center gap-2 px-3 py-2 text-sm transition-colors ${viewMode === "calendar" ? "bg-navy text-white" : "bg-background text-muted-foreground hover:text-navy"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4" }), " Calendar"]
				})]
			})]
		}), viewMode === "list" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4",
			children: MOCK_EVENTS.map((event) => {
				const isReg = registrations.has(event.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-background border border-border p-5 flex flex-col sm:flex-row gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-gold text-3xl shadow-gold mx-auto sm:mx-0",
						children: event.image
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2 mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-lg text-navy",
									children: event.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `rounded-full px-2.5 py-0.5 text-xs font-medium ${TYPE_COLORS[event.type] ?? "bg-muted text-muted-foreground"}`,
									children: event.type
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" }),
											event.date,
											" · ",
											event.time
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }), event.location]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3.5 w-3.5" }),
											event.attendees,
											" attending"
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-2 mt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => toggleRegister(event.id),
									className: `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${isReg ? "bg-green-100 text-green-700 border border-green-200" : "bg-navy text-white hover:bg-navy/90"}`,
									children: isReg ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-4 w-4" }), " Registered"] }) : "Register Now"
								}), isReg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:text-navy transition-colors",
									children: "Add to Calendar"
								})]
							})
						]
					})]
				}, event.id);
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarView, {
			events: MOCK_EVENTS,
			registrations,
			onRegister: toggleRegister
		})]
	});
}
function CalendarView({ events, registrations, onRegister }) {
	const months = [
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
	const days = [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	];
	const today = /* @__PURE__ */ new Date();
	const year = today.getFullYear();
	const month = today.getMonth();
	const firstDay = new Date(year, month, 1).getDay();
	const daysInMonth = new Date(year, month + 1, 0).getDate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl bg-background border border-border p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "font-serif text-lg text-navy text-center mb-4",
				children: [
					months[month],
					" ",
					year
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-7 gap-1",
				children: [
					days.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center text-xs font-semibold text-muted-foreground py-2",
						children: d
					}, d)),
					Array.from({ length: firstDay }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}, `empty-${i}`)),
					Array.from({ length: daysInMonth }).map((_, i) => {
						const day = i + 1;
						const isToday = day === today.getDate();
						const hasEvent = events.some((e) => e.date.startsWith(`${months[month]} ${day},`));
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `relative h-9 flex items-center justify-center rounded-lg text-sm cursor-pointer transition-colors ${isToday ? "bg-gradient-gold text-navy font-bold shadow-gold" : "hover:bg-cream text-foreground"}`,
							children: [day, hasEvent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-gold" })]
						}, day);
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: events.slice(0, 4).map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4 rounded-2xl bg-background border border-border p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-2xl",
						children: event.image
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-navy text-sm",
							children: event.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								event.date,
								" · ",
								event.time
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onRegister(event.id),
						className: `shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${registrations.has(event.id) ? "bg-green-100 text-green-700" : "bg-navy text-white"}`,
						children: registrations.has(event.id) ? "Registered" : "Register"
					})
				]
			}, event.id))
		})]
	});
}
var CATEGORIES = [
	"Health",
	"Family",
	"Career",
	"Finance",
	"Spiritual Growth",
	"Relationships",
	"Thanksgiving",
	"Other"
];
function PrayerRequestsPage() {
	const [requests, setRequests] = (0, import_react.useState)(MOCK_PRAYER_REQUESTS);
	const [showForm, setShowForm] = (0, import_react.useState)(false);
	const [prayed, setPrayed] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [form, setForm] = (0, import_react.useState)({
		title: "",
		detail: "",
		category: "Health",
		privacy: "public"
	});
	function submitRequest() {
		if (!form.title.trim()) return;
		const newReq = {
			id: `p${Date.now()}`,
			title: form.title,
			detail: form.detail,
			category: form.category,
			privacy: form.privacy,
			prayerCount: 0,
			answered: false,
			createdAt: "Just now",
			author: "You"
		};
		setRequests((prev) => [newReq, ...prev]);
		setForm({
			title: "",
			detail: "",
			category: "Health",
			privacy: "public"
		});
		setShowForm(false);
	}
	function togglePray(id) {
		setPrayed((prev) => {
			const next = new Set(prev);
			if (next.has(id)) {
				next.delete(id);
				setRequests((reqs) => reqs.map((r) => r.id === id ? {
					...r,
					prayerCount: r.prayerCount - 1
				} : r));
			} else {
				next.add(id);
				setRequests((reqs) => reqs.map((r) => r.id === id ? {
					...r,
					prayerCount: r.prayerCount + 1
				} : r));
			}
			return next;
		});
	}
	const CAT_COLORS = {
		Health: "bg-red-100 text-red-700",
		Family: "bg-blue-100 text-blue-700",
		Career: "bg-purple-100 text-purple-700",
		Finance: "bg-green-100 text-green-700",
		"Spiritual Growth": "bg-yellow-100 text-yellow-700",
		Relationships: "bg-pink-100 text-pink-700",
		Thanksgiving: "bg-orange-100 text-orange-700",
		Other: "bg-muted text-muted-foreground"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-3xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl text-navy",
					children: "Prayer Requests"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-0.5",
					children: "Share your prayer needs with the community"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setShowForm((v) => !v),
					className: "flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2.5 text-sm font-semibold text-navy shadow-gold",
					children: [showForm ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), showForm ? "Cancel" : "New Request"]
				})]
			}),
			showForm && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-gold/30 bg-background p-5 mb-6 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg text-navy",
						children: "Submit Prayer Request"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: form.title,
						onChange: (e) => setForm((f) => ({
							...f,
							title: e.target.value
						})),
						placeholder: "Prayer request title *",
						className: "w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: form.detail,
						onChange: (e) => setForm((f) => ({
							...f,
							detail: e.target.value
						})),
						placeholder: "Describe your prayer request...",
						rows: 3,
						className: "w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-navy placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-gold/30"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid sm:grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-medium text-navy mb-1 block",
							children: "Category"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: form.category,
							onChange: (e) => setForm((f) => ({
								...f,
								category: e.target.value
							})),
							className: "w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold/30",
							children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-medium text-navy mb-1 block",
							children: "Visibility"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex rounded-xl border border-border overflow-hidden",
							children: ["public", "private"].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setForm((f) => ({
									...f,
									privacy: p
								})),
								className: `flex-1 flex items-center justify-center gap-2 py-3 text-sm capitalize transition-colors ${form.privacy === p ? "bg-navy text-white" : "bg-cream text-muted-foreground hover:text-navy"}`,
								children: [p === "public" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5" }), p]
							}, p))
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: submitRequest,
						className: "w-full rounded-full bg-navy py-3 text-sm font-semibold text-white hover:bg-navy/90 transition-colors",
						children: "Submit Prayer Request"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: requests.map((req) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `rounded-2xl bg-background border p-5 ${req.answered ? "border-green-200" : "border-border"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-start justify-between gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2 mb-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-serif text-base text-navy",
											children: req.title
										}),
										req.answered && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700 font-medium",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-3 w-3" }), " Answered"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `rounded-full px-2 py-0.5 text-xs font-medium ${CAT_COLORS[req.category] ?? "bg-muted text-muted-foreground"}`,
											children: req.category
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1 text-xs text-muted-foreground",
											children: [req.privacy === "public" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3 w-3" }), req.privacy]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground leading-relaxed",
									children: req.detail
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground mt-2",
									children: [
										"By ",
										req.author,
										" · ",
										req.createdAt
									]
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 pt-3 border-t border-border flex items-center gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => togglePray(req.id),
							className: `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${prayed.has(req.id) ? "bg-gold/10 text-gold border border-gold/30" : "bg-cream text-navy hover:bg-muted"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "h-4 w-4" }),
								prayed.has(req.id) ? "Praying" : "Pray",
								" · ",
								req.prayerCount
							]
						})
					})]
				}, req.id))
			})
		]
	});
}
var GROUPS = [
	{
		name: "Men's Bible Study",
		members: 34,
		emoji: "📖"
	},
	{
		name: "Women of Faith",
		members: 52,
		emoji: "🌸"
	},
	{
		name: "Youth Connect",
		members: 78,
		emoji: "⚡"
	},
	{
		name: "Grace & Truth",
		members: 29,
		emoji: "🕊️"
	},
	{
		name: "Prayer Warriors",
		members: 61,
		emoji: "🙏"
	}
];
var TYPE_BADGE = {
	testimony: "bg-orange-100 text-orange-700",
	encouragement: "bg-blue-100 text-blue-700",
	verse: "bg-green-100 text-green-700"
};
function CommunityPage() {
	const [posts, setPosts] = (0, import_react.useState)(MOCK_POSTS);
	const [liked, setLiked] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [newPost, setNewPost] = (0, import_react.useState)("");
	const [showForm, setShowForm] = (0, import_react.useState)(false);
	const [reported, setReported] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [tab, setTab] = (0, import_react.useState)("feed");
	function toggleLike(id) {
		setLiked((prev) => {
			const next = new Set(prev);
			if (next.has(id)) {
				next.delete(id);
				setPosts((ps) => ps.map((p) => p.id === id ? {
					...p,
					likes: p.likes - 1
				} : p));
			} else {
				next.add(id);
				setPosts((ps) => ps.map((p) => p.id === id ? {
					...p,
					likes: p.likes + 1
				} : p));
			}
			return next;
		});
	}
	function submitPost() {
		if (!newPost.trim()) return;
		setPosts((prev) => [{
			id: `po${Date.now()}`,
			author: "You",
			avatar: "ME",
			content: newPost.trim(),
			likes: 0,
			comments: 0,
			createdAt: "Just now",
			type: "encouragement"
		}, ...prev]);
		setNewPost("");
		setShowForm(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-3xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl text-navy",
					children: "Community"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-0.5",
					children: "Connect, share and encourage one another"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setShowForm((v) => !v),
					className: "flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2.5 text-sm font-semibold text-navy shadow-gold",
					children: [showForm ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), showForm ? "Cancel" : "Share"]
				})]
			}),
			showForm && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-gold/30 bg-background p-5 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: newPost,
					onChange: (e) => setNewPost(e.target.value),
					placeholder: "Share a testimony, verse or encouragement...",
					rows: 3,
					className: "w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-navy placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-gold/30"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-end mt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: submitPost,
						className: "rounded-full bg-navy px-5 py-2 text-sm font-medium text-white hover:bg-navy/90 transition-colors",
						children: "Post"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1 rounded-xl bg-cream p-1 mb-6",
				children: ["feed", "groups"].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(t),
					className: `flex-1 rounded-lg py-2 text-sm font-medium capitalize transition-all ${tab === t ? "bg-background text-navy shadow-sm" : "text-muted-foreground hover:text-navy"}`,
					children: t === "groups" ? "Groups & Ministries" : "Community Feed"
				}, t))
			}),
			tab === "feed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-background border border-border p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-9 w-9 place-items-center rounded-full bg-gradient-gold text-navy font-bold text-xs shadow-gold",
									children: post.avatar
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-navy",
									children: post.author
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: post.createdAt
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${TYPE_BADGE[post.type] ?? "bg-muted text-muted-foreground"}`,
									children: post.type
								}), !reported.has(post.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setReported((prev) => new Set([...prev, post.id])),
									className: "text-muted-foreground hover:text-red-500 transition-colors",
									title: "Report",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, { className: "h-3.5 w-3.5" })
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: "Reported"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-foreground leading-relaxed",
							children: post.content
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 mt-4 pt-3 border-t border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => toggleLike(post.id),
								className: `flex items-center gap-1.5 text-sm transition-colors ${liked.has(post.id) ? "text-red-500" : "text-muted-foreground hover:text-red-400"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-4 w-4 ${liked.has(post.id) ? "fill-current" : ""}` }), post.likes]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "flex items-center gap-1.5 text-sm text-muted-foreground hover:text-navy transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }),
									post.comments,
									" Comments"
								]
							})]
						})
					]
				}, post.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-background border border-border p-4 flex items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-gold text-2xl shadow-gold",
							children: group.emoji
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-navy",
								children: group.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-1 text-xs text-muted-foreground mt-0.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3 w-3" }),
									" ",
									group.members,
									" members"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "rounded-full border border-navy px-4 py-2 text-sm font-medium text-navy hover:bg-navy hover:text-white transition-colors",
							children: "Join"
						})
					]
				}, group.name))
			})
		]
	});
}
function SavedContentPage() {
	const [tab, setTab] = (0, import_react.useState)("sermons");
	const [savedSermons, setSavedSermons] = (0, import_react.useState)(MOCK_SERMONS.filter((s) => s.saved));
	const [savedVerses] = (0, import_react.useState)(BIBLE_VERSES.slice(0, 3));
	const savedCourses = MOCK_COURSES.filter((c) => c.status === "saved");
	const TABS = [
		{
			id: "sermons",
			label: "Sermons",
			count: savedSermons.length
		},
		{
			id: "courses",
			label: "Courses",
			count: savedCourses.length
		},
		{
			id: "verses",
			label: "Bible Verses",
			count: savedVerses.length
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-4xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl text-navy",
					children: "Saved Content"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-0.5",
					children: "Everything you've bookmarked for later"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1 rounded-xl bg-cream p-1 mb-6",
				children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setTab(t.id),
					className: `flex items-center gap-2 flex-1 justify-center rounded-lg py-2 text-sm font-medium transition-all ${tab === t.id ? "bg-background text-navy shadow-sm" : "text-muted-foreground hover:text-navy"}`,
					children: [t.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `rounded-full px-1.5 py-0.5 text-[10px] font-bold ${tab === t.id ? "bg-gold/20 text-gold" : "bg-border text-muted-foreground"}`,
						children: t.count
					})]
				}, t.id))
			}),
			tab === "sermons" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: savedSermons.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: "🎙️",
					title: "No saved sermons",
					desc: "Bookmark sermons to find them here."
				}) : savedSermons.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 rounded-2xl bg-background border border-border p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-2xl",
							children: s.thumbnail
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-navy truncate",
								children: s.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									s.speaker,
									" · ",
									s.bibleRef,
									" · ",
									s.date
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "flex items-center gap-1.5 rounded-full bg-navy px-3 py-1.5 text-xs text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, { className: "h-3.5 w-3.5" }), " Play"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSavedSermons((prev) => prev.filter((x) => x.id !== s.id)),
								className: "grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground hover:text-red-500 hover:border-red-200 transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
							})]
						})
					]
				}, s.id))
			}),
			tab === "courses" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 gap-4",
				children: savedCourses.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-span-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
						icon: "📚",
						title: "No saved courses",
						desc: "Save courses to start them later."
					})
				}) : savedCourses.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-background border border-border overflow-hidden flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-full w-14 shrink-0 place-items-center bg-navy text-2xl",
						children: c.thumbnail
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-gold font-semibold uppercase tracking-wide",
								children: c.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-navy text-sm mt-0.5 leading-snug",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: c.instructor
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground mt-1",
								children: [
									c.totalLessons,
									" lessons · ",
									c.duration
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "mt-2 flex items-center gap-1.5 text-xs font-medium text-navy hover:text-gold transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, { className: "h-3.5 w-3.5" }), " Start Course"]
							})
						]
					})]
				}, c.id))
			}),
			tab === "verses" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: savedVerses.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-gold/30 bg-background p-5 relative overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 w-20 h-20 bg-gradient-gold opacity-5 rounded-full -translate-y-4 translate-x-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3 relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-5 w-5 text-gold shrink-0 mt-0.5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "font-serif text-lg text-navy leading-relaxed",
								children: [
									"\"",
									v.verse,
									"\""
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-gold font-semibold text-sm mt-2",
								children: ["— ", v.ref]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "ml-auto grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "h-3.5 w-3.5 fill-current" })
							})
						]
					})]
				}, i))
			})
		]
	});
}
function EmptyState({ icon, title, desc }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-5xl mb-3",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif text-xl text-navy",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground mt-1",
				children: desc
			})
		]
	});
}
function CertificatesPage({ isPremium, onViewChange }) {
	const completed = MOCK_COURSES.filter((c) => c.status === "completed");
	const inProgress = MOCK_COURSES.filter((c) => c.status === "in-progress");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-4xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl text-navy",
					children: "Certificates"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-0.5",
					children: "Your earned certificates of completion"
				})]
			}),
			completed.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center py-16 text-center rounded-2xl bg-background border border-border mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-14 w-14 text-muted-foreground/30 mb-3" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-xl text-navy",
						children: "No certificates yet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: "Complete a course to earn your first certificate."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onViewChange("my-learning"),
						className: "mt-4 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-gold",
						children: "Browse Courses"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid sm:grid-cols-2 gap-4 mb-8",
				children: completed.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-gold/40 bg-background overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-gradient-gold p-6 text-center relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 opacity-10",
								style: { backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.3) 10px, rgba(255,255,255,.3) 11px)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-10 w-10 text-navy mx-auto mb-2" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] tracking-[0.3em] uppercase text-navy/70 font-semibold",
								children: "Certificate of Completion"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-lg text-navy mt-1 leading-snug",
								children: c.title
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: ["Instructor: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-navy",
									children: c.instructor
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: [
									c.totalLessons,
									" lessons completed · ",
									c.category
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "mt-3 flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-xs font-medium text-white hover:bg-navy/90 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" }), " Download PDF"]
							})
						]
					})]
				}, c.id))
			}),
			inProgress.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-serif text-lg text-navy mb-4",
				children: "Courses In Progress"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: inProgress.map((c) => {
					const locked = c.premium && !isPremium;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 rounded-2xl bg-background border border-border p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-2xl",
								children: c.thumbnail
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium text-navy truncate",
										children: c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1.5 h-1.5 rounded-full bg-cream overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full bg-gradient-gold",
											style: { width: `${c.progress}%` }
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground mt-1",
										children: [
											c.progress,
											"% complete · ",
											c.lessonsCompleted,
											"/",
											c.totalLessons,
											" lessons"
										]
									})
								]
							}),
							locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => onViewChange("subscription"),
								className: "shrink-0 grid h-9 w-9 place-items-center rounded-full border border-gold/30 text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4" })
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "shrink-0 rounded-full bg-cream px-3 py-1.5 text-xs font-medium text-navy",
								children: [c.progress, "%"]
							})
						]
					}, c.id);
				})
			})] })
		]
	});
}
var TYPE_ICON = {
	course: BookOpen,
	event: Calendar,
	sermon: MicVocal,
	prayer: HeartHandshake,
	certificate: Award,
	subscription: CreditCard
};
var TYPE_COLOR = {
	course: "bg-blue-100 text-blue-600",
	event: "bg-purple-100 text-purple-600",
	sermon: "bg-orange-100 text-orange-600",
	prayer: "bg-green-100 text-green-600",
	certificate: "bg-gold/20 text-gold",
	subscription: "bg-pink-100 text-pink-600"
};
function NotificationsPage() {
	const [notifications, setNotifications] = (0, import_react.useState)(MOCK_NOTIFICATIONS);
	function markRead(id) {
		setNotifications((prev) => prev.map((n) => n.id === id ? {
			...n,
			read: true
		} : n));
	}
	function markAllRead() {
		setNotifications((prev) => prev.map((n) => ({
			...n,
			read: true
		})));
	}
	const unread = notifications.filter((n) => !n.read).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-3xl mx-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-2xl text-navy",
					children: "Notifications"
				}), unread > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "rounded-full bg-red-500 px-2.5 py-1 text-xs font-bold text-white",
					children: [unread, " new"]
				})]
			}), unread > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: markAllRead,
				className: "flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground hover:text-navy transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, { className: "h-4 w-4" }), " Mark all read"]
			})]
		}), notifications.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center justify-center py-20 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-12 w-12 text-muted-foreground/40 mb-3" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-xl text-navy",
					children: "All caught up!"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: "No notifications right now."
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: notifications.map((n) => {
				const Icon = TYPE_ICON[n.type] ?? Bell;
				const colorClass = TYPE_COLOR[n.type] ?? "bg-muted text-muted-foreground";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					onClick: () => markRead(n.id),
					className: `flex items-start gap-4 rounded-2xl border p-4 cursor-pointer transition-all hover:shadow-sm ${!n.read ? "border-gold/30 bg-gold/5" : "border-border bg-background"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid h-10 w-10 shrink-0 place-items-center rounded-xl ${colorClass}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `text-sm font-semibold ${!n.read ? "text-navy" : "text-foreground"}`,
									children: n.title
								}), !n.read && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 shrink-0 rounded-full bg-gold" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-0.5 leading-relaxed",
								children: n.message
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground/60 mt-1",
								children: n.createdAt
							})
						]
					})]
				}, n.id);
			})
		})]
	});
}
function ProfilePage({ user }) {
	const [form, setForm] = (0, import_react.useState)({
		name: user.name,
		email: user.email,
		phone: "+1 (555) 000-0000",
		location: "Lagos, Nigeria",
		bio: "A faithful servant of God, passionate about Bible study and community.",
		birthday: "1990-03-15"
	});
	const [saved, setSaved] = (0, import_react.useState)(false);
	const initials = form.name.split(" ").map((n) => n[0]).join("").toUpperCase();
	function handleSave() {
		setSaved(true);
		setTimeout(() => setSaved(false), 2500);
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
							backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)",
							backgroundSize: "30px 30px"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-20 w-20 place-items-center rounded-full bg-gradient-gold text-navy font-bold text-2xl shadow-gold",
							children: initials
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "absolute -bottom-1 -right-1 grid h-7 w-7 place-items-center rounded-full bg-white text-navy shadow border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "h-3.5 w-3.5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative text-center sm:text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-2xl",
								children: form.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/60 text-sm mt-0.5",
								children: form.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block mt-2 rounded-full border border-gold/40 px-3 py-1 text-xs text-gold",
								children: "Member"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-background border border-border p-6 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg text-navy",
						children: "Personal Information"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid sm:grid-cols-2 gap-4",
						children: [[
							{
								label: "Full Name",
								key: "name",
								type: "text"
							},
							{
								label: "Email Address",
								key: "email",
								type: "email"
							},
							{
								label: "Phone Number",
								key: "phone",
								type: "tel"
							},
							{
								label: "Location",
								key: "location",
								type: "text"
							},
							{
								label: "Birthday",
								key: "birthday",
								type: "date"
							}
						].map(({ label, key, type }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-medium text-navy mb-1.5 block",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type,
							value: form[key],
							onChange: (e) => setForm((f) => ({
								...f,
								[key]: e.target.value
							})),
							className: "w-full rounded-xl border border-border bg-cream px-4 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-gold/30"
						})] }, key)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-medium text-navy mb-1.5 block",
								children: "Bio"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: form.bio,
								onChange: (e) => setForm((f) => ({
									...f,
									bio: e.target.value
								})),
								rows: 3,
								className: "w-full rounded-xl border border-border bg-cream px-4 py-2.5 text-sm text-navy resize-none focus:outline-none focus:ring-2 focus:ring-gold/30"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleSave,
						className: `flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${saved ? "bg-green-100 text-green-700" : "bg-gradient-gold text-navy shadow-gold hover:scale-[1.02]"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4" }), saved ? "Changes Saved ✓" : "Save Changes"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-background border border-border p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-lg text-navy mb-4",
					children: "Ministry Involvement"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: [
						{
							label: "Member Since",
							value: "January 2023"
						},
						{
							label: "Small Group",
							value: "Grace & Truth"
						},
						{
							label: "Ministry Team",
							value: "Worship & Media"
						},
						{
							label: "Baptism Date",
							value: "March 15, 2023"
						}
					].map(({ label, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between py-2 border-b border-border last:border-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium text-navy",
							children: value
						})]
					}, label))
				})]
			})
		]
	});
}
var NOTIF_TOGGLES = [
	{
		key: "email",
		label: "Email Notifications",
		desc: "Receive updates via email"
	},
	{
		key: "sermons",
		label: "New Sermons",
		desc: "Alert when a new sermon is uploaded"
	},
	{
		key: "events",
		label: "Event Reminders",
		desc: "Reminders 24h before events"
	},
	{
		key: "prayer",
		label: "Prayer Responses",
		desc: "When someone prays for your request"
	},
	{
		key: "courses",
		label: "Course Updates",
		desc: "New lessons and course releases"
	}
];
var PREF_TOGGLES = [
	{
		key: "darkMode",
		label: "Dark Mode",
		desc: "Switch to dark theme"
	},
	{
		key: "autoPlay",
		label: "Auto-play Next Lesson",
		desc: "Continue to next lesson automatically"
	},
	{
		key: "publicProfile",
		label: "Public Profile",
		desc: "Allow others to see your profile"
	}
];
function SettingsPage() {
	const [notif, setNotif] = (0, import_react.useState)({
		email: true,
		sermons: true,
		events: true,
		prayer: false,
		courses: true
	});
	const [pref, setPref] = (0, import_react.useState)({
		darkMode: false,
		autoPlay: true,
		publicProfile: true
	});
	const Toggle = ({ enabled, onToggle }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: onToggle,
		className: `relative inline-flex h-5 w-9 shrink-0 rounded-full transition-colors ${enabled ? "bg-gradient-gold" : "bg-border"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `mt-0.5 ml-0.5 inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${enabled ? "translate-x-4" : "translate-x-0"}` })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-2xl mx-auto space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl text-navy",
				children: "Settings"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-background border border-border p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-5 w-5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg text-navy",
						children: "Notifications"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: NOTIF_TOGGLES.map(({ key, label, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-navy",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: desc
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							enabled: notif[key],
							onToggle: () => setNotif((p) => ({
								...p,
								[key]: !p[key]
							}))
						})]
					}, key))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-background border border-border p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-5 w-5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg text-navy",
						children: "Preferences"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: PREF_TOGGLES.map(({ key, label, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-navy",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: desc
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							enabled: pref[key],
							onToggle: () => setPref((p) => ({
								...p,
								[key]: !p[key]
							}))
						})]
					}, key))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-background border border-border p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-5 w-5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg text-navy",
						children: "Privacy & Security"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: [{
						icon: Lock,
						label: "Change Password",
						desc: "Update your account password"
					}, {
						icon: Globe,
						label: "Privacy Settings",
						desc: "Manage who sees your activity"
					}].map(({ icon: Icon, label, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "w-full flex items-center gap-4 rounded-xl p-3 hover:bg-cream transition-colors text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-9 w-9 place-items-center rounded-xl bg-cream",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-gold" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-navy",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: desc
						})] })]
					}, label))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-red-200 bg-red-50/50 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg text-red-700 mb-3",
						children: "Danger Zone"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex items-center gap-2 rounded-full border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-100 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" }), " Delete My Account"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-red-400 mt-2",
						children: "This action is permanent and cannot be undone."
					})
				]
			})
		]
	});
}
var PLANS = [
	{
		id: "free",
		name: "Free",
		price: "$0",
		period: "forever",
		color: "bg-background border-border",
		headerColor: "bg-cream",
		textColor: "text-navy",
		features: [
			"Access to 2 free courses",
			"Watch recent sermons",
			"Join community feed",
			"Submit prayer requests",
			"View upcoming events"
		],
		missing: [
			"All Bible Academy courses",
			"Premium sermon archive",
			"Downloadable certificates",
			"Offline access"
		]
	},
	{
		id: "premium",
		name: "Premium",
		price: "$9.99",
		period: "per month",
		color: "bg-navy border-navy",
		headerColor: "bg-gradient-gold",
		textColor: "text-white",
		badge: "Most Popular",
		features: [
			"All Bible Academy courses",
			"Full sermon archive",
			"Downloadable certificates",
			"Priority prayer support",
			"Offline lesson access",
			"Early event registration",
			"Ad-free experience"
		],
		missing: []
	},
	{
		id: "annual",
		name: "Annual",
		price: "$79.99",
		period: "per year",
		color: "bg-background border-gold/40",
		headerColor: "bg-gradient-gold",
		textColor: "text-navy",
		badge: "Save 33%",
		features: [
			"Everything in Premium",
			"2 months free",
			"Family sharing (up to 4)",
			"1-on-1 discipleship call",
			"Exclusive annual devotional"
		],
		missing: []
	}
];
function SubscriptionPage({ isPremium, onViewChange: _onViewChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 md:p-6 max-w-5xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-1.5 text-xs text-gold font-semibold mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "h-3.5 w-3.5" }), " WordnWorship Premium"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl text-navy",
						children: "Choose Your Faith Journey Plan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-sm mt-2 max-w-md mx-auto",
						children: "Unlock full access to Bible courses, sermons, certificates and more."
					})
				]
			}),
			isPremium ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-gradient-gold p-5 mb-6 flex items-center justify-between flex-wrap gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "h-6 w-6 text-navy" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-lg text-navy",
						children: "Premium Active"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-navy/70 text-xs",
						children: "Your plan renews on July 22, 2026"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "rounded-full border border-navy/30 px-4 py-2 text-sm font-medium text-navy hover:bg-navy/10 transition-colors",
					children: "Manage Billing"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl bg-navy p-5 mb-6 flex items-center justify-between flex-wrap gap-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-6 w-6 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-lg text-white",
						children: "You're on the Free Plan"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-white/60 text-xs",
						children: "Upgrade to unlock all content"
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-3 gap-4",
				children: PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `rounded-2xl border overflow-hidden flex flex-col ${plan.color} ${plan.id === "premium" ? "ring-2 ring-gold shadow-gold" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `${plan.headerColor} p-5 relative`,
						children: [
							plan.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-3 right-3 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold text-navy backdrop-blur-sm",
								children: plan.badge
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `font-serif text-xl ${plan.id === "premium" ? "text-navy" : "text-navy"}`,
								children: plan.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-1 mt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `font-serif text-3xl font-bold ${plan.id === "premium" ? "text-navy" : "text-navy"}`,
									children: plan.price
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-navy/60 text-xs",
									children: ["/", plan.period]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 flex flex-col flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2 flex-1",
							children: [plan.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: `h-4 w-4 shrink-0 mt-0.5 ${plan.id === "premium" ? "text-gold" : "text-green-500"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: plan.id === "premium" ? "text-white/80" : "text-muted-foreground",
									children: f
								})]
							}, f)), plan.missing.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2 text-sm opacity-40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-4 w-4 shrink-0 mt-0.5 text-center",
									children: "✕"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: plan.id === "premium" ? "text-white/40" : "text-muted-foreground",
									children: f
								})]
							}, f))]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `mt-5 w-full rounded-full py-3 text-sm font-semibold transition-all ${plan.id === "free" ? "border border-border text-muted-foreground cursor-default" : plan.id === "premium" ? "bg-gradient-gold text-navy shadow-gold hover:scale-[1.02]" : "bg-gradient-gold text-navy shadow-gold hover:scale-[1.02]"}`,
							disabled: plan.id === "free" || isPremium,
							children: plan.id === "free" ? "Current Plan" : isPremium ? "Active" : `Get ${plan.name}`
						})]
					})]
				}, plan.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-2xl bg-cream border border-border p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-lg text-navy mb-4",
					children: "Frequently Asked Questions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: [
						{
							q: "Can I cancel anytime?",
							a: "Yes. Cancel at any time from your billing settings. Your access continues until the end of the billing period."
						},
						{
							q: "Is my payment secure?",
							a: "All payments are processed securely via Stripe with 256-bit encryption."
						},
						{
							q: "Do you offer student or ministry discounts?",
							a: "Yes! Contact us for special pricing for ministries, students and missionaries."
						}
					].map(({ q, a }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-border pb-3 last:border-0 last:pb-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-navy",
							children: q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-1 leading-relaxed",
							children: a
						})]
					}, q))
				})]
			})
		]
	});
}
function DashboardPage() {
	const navigate = useNavigate();
	const [user, setUser] = (0, import_react.useState)(null);
	const [view, setView] = (0, import_react.useState)("home");
	const [selectedCourse, setSelectedCourse] = (0, import_react.useState)(null);
	const [isPremium] = (0, import_react.useState)(false);
	const unreadCount = MOCK_NOTIFICATIONS.filter((n) => !n.read).length;
	(0, import_react.useEffect)(() => {
		const u = getUser();
		if (!u) {
			navigate({ to: "/login" });
			return;
		}
		if (u.role === "admin") {
			navigate({ to: "/admin" });
			return;
		}
		setUser(u);
	}, []);
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-screen items-center justify-center bg-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-10 animate-spin rounded-full border-4 border-gold border-t-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Loading your dashboard..."
			})]
		})
	});
	function handleViewChange(v) {
		setView(v);
		if (v !== "video-learning") setSelectedCourse(null);
	}
	function handleCourseSelect(course) {
		setSelectedCourse(course);
		setView("video-learning");
	}
	function renderPage() {
		switch (view) {
			case "home": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardHome, {
				user,
				isPremium,
				onViewChange: handleViewChange,
				onCourseSelect: handleCourseSelect
			});
			case "my-learning": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MyLearning, {
				isPremium,
				onCourseSelect: handleCourseSelect,
				onViewChange: handleViewChange
			});
			case "video-learning": return selectedCourse ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoLearning, {
				course: selectedCourse,
				isPremium,
				onViewChange: handleViewChange
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MyLearning, {
				isPremium,
				onCourseSelect: handleCourseSelect,
				onViewChange: handleViewChange
			});
			case "bible-academy": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BibleAcademyPage, {
				isPremium,
				onCourseSelect: handleCourseSelect,
				onViewChange: handleViewChange
			});
			case "sermons": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SermonsPage, {});
			case "devotion": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DevotionPage, {});
			case "events": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventsPage, {});
			case "prayer": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrayerRequestsPage, {});
			case "community": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommunityPage, {});
			case "saved": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SavedContentPage, {});
			case "certificates": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CertificatesPage, {
				isPremium,
				onViewChange: handleViewChange
			});
			case "notifications": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationsPage, {});
			case "profile": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfilePage, { user });
			case "settings": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsPage, {});
			case "subscription": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubscriptionPage, {
				isPremium,
				onViewChange: handleViewChange
			});
			default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardHome, {
				user,
				isPremium,
				onViewChange: handleViewChange,
				onCourseSelect: handleCourseSelect
			});
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardLayout, {
		user,
		view,
		onViewChange: handleViewChange,
		unreadCount,
		children: renderPage()
	});
}
//#endregion
export { DashboardPage as component };
