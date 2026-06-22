import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as SectionHeading } from "./SectionHeading-BIQJ-M2N.mjs";
import { D as Phone, L as MapPin, R as Mail, lt as Clock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Byz_tQxA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pt-40 pb-16 bg-navy text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl px-6 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Get In Touch",
				title: "We'd love to hear from you",
				subtitle: "Whether you're new, exploring faith, or have a prayer request — drop us a line.",
				center: true,
				light: true
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-[1fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-6",
				children: [
					{
						icon: MapPin,
						label: "Visit",
						value: "142 Riverside Avenue\nGreenfield, 04101"
					},
					{
						icon: Phone,
						label: "Call",
						value: "(555) 218-0420"
					},
					{
						icon: Mail,
						label: "Email",
						value: "hello@kingdomlife.org"
					},
					{
						icon: Clock,
						label: "Sunday Worship",
						value: "9:00 AM & 11:00 AM"
					}
				].map(({ icon: Icon, label, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-gold shadow-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-navy" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.3em] uppercase text-gold font-semibold",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-serif text-lg text-navy whitespace-pre-line leading-snug",
						children: value
					})] })]
				}, label))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					setSent(true);
				},
				className: "rounded-2xl border border-border bg-card p-8 md:p-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-2xl text-navy",
					children: "Send us a message"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							placeholder: "Your name",
							className: "rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "email",
							placeholder: "Email address",
							className: "rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							placeholder: "Subject",
							className: "rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							rows: 5,
							placeholder: "How can we pray for you or serve you?",
							className: "rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-gold resize-none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "mt-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform",
							children: sent ? "Thank you — we'll be in touch" : "Send Message"
						})
					]
				})]
			})]
		})
	})] });
}
//#endregion
export { ContactPage as component };
