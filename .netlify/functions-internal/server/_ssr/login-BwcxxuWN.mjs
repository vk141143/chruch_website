import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as register, n as login, t as getUser } from "./auth-mIB9PyK8.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { nt as EyeOff, st as Cross, tt as Eye } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-BwcxxuWN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const navigate = useNavigate();
	const [mode, setMode] = (0, import_react.useState)("login");
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [showPw, setShowPw] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	if (typeof window !== "undefined" && getUser()) if (getUser()?.role === "admin") navigate({ to: "/admin" });
	else navigate({ to: "/dashboard" });
	function handleSubmit(e) {
		e.preventDefault();
		setError("");
		if (mode === "login") {
			const user = login(email, password);
			if (!user) {
				setError("Invalid email or password.");
				return;
			}
			navigate({ to: user.role === "admin" ? "/admin" : "/dashboard" });
		} else {
			if (!name.trim()) {
				setError("Please enter your name.");
				return;
			}
			register(name, email, password);
			navigate({ to: "/dashboard" });
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-cream flex items-center justify-center px-4 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center mb-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex items-center gap-2.5 justify-center group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-12 w-12 place-items-center rounded-full bg-gradient-gold shadow-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cross, {
								className: "h-6 w-6 text-navy",
								strokeWidth: 2.5
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-serif text-2xl text-navy leading-none",
							children: ["WordnWorship", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[10px] font-sans tracking-[0.3em] text-gold uppercase mt-1",
								children: "Fellowship"
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-background rounded-3xl border border-border shadow-elegant p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 rounded-xl bg-cream border border-gold/30 p-4 text-xs space-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-navy text-sm mb-2",
									children: "Demo Credentials"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-navy/70",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-navy",
										children: "Admin:"
									}), " admin@kingdomlife.com / admin123"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-navy/70",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-navy",
										children: "User:"
									}), " user@kingdomlife.com / user123"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex rounded-xl bg-cream p-1 mb-6",
							children: ["login", "register"].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									setMode(m);
									setError("");
								},
								className: `flex-1 rounded-lg py-2 text-sm font-semibold transition-all ${mode === m ? "bg-navy text-white shadow-sm" : "text-navy/60 hover:text-navy"}`,
								children: m === "login" ? "Login" : "Register"
							}, m))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSubmit,
							className: "space-y-4",
							children: [
								mode === "register" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-semibold text-navy mb-1.5 tracking-wide",
									children: "Full Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: name,
									onChange: (e) => setName(e.target.value),
									placeholder: "Your full name",
									required: true,
									className: "w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-semibold text-navy mb-1.5 tracking-wide",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									value: email,
									onChange: (e) => setEmail(e.target.value),
									placeholder: "you@example.com",
									required: true,
									className: "w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-semibold text-navy mb-1.5 tracking-wide",
									children: "Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: showPw ? "text" : "password",
										value: password,
										onChange: (e) => setPassword(e.target.value),
										placeholder: "••••••••",
										required: true,
										className: "w-full rounded-xl border border-border bg-cream px-4 py-3 pr-11 text-sm focus:outline-none focus:border-gold transition-colors"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setShowPw((v) => !v),
										className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-navy transition-colors",
										children: showPw ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
									})]
								})] }),
								error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-red-500 font-medium",
									children: error
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "w-full rounded-full bg-gradient-gold py-3.5 text-sm font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform mt-2",
									children: mode === "login" ? "Sign In" : "Create Account"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs text-muted-foreground mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-navy transition-colors",
						children: "← Back to Home"
					})
				})
			]
		})
	});
}
//#endregion
export { LoginPage as component };
