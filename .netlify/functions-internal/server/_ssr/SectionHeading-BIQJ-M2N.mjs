import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeading-BIQJ-M2N.js
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ eyebrow, title, subtitle, center, light }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${center ? "text-center mx-auto" : ""} max-w-2xl`,
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex items-center gap-3 ${center ? "justify-center" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-divider" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `text-xs font-semibold tracking-[0.3em] uppercase ${light ? "text-gold" : "text-gold"}`,
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gold-divider" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: `mt-4 font-serif text-4xl md:text-5xl leading-tight ${light ? "text-white" : "text-navy"}`,
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-5 text-base leading-relaxed ${light ? "text-white/75" : "text-muted-foreground"}`,
				children: subtitle
			})
		]
	});
}
//#endregion
export { SectionHeading as t };
