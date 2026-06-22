//#region node_modules/.nitro/vite/services/ssr/assets/auth-mIB9PyK8.js
var KEY = "klf_auth";
var DEMO_USERS = {
	"admin@kingdomlife.com": {
		name: "Admin User",
		email: "admin@kingdomlife.com",
		password: "admin123",
		role: "admin"
	},
	"user@kingdomlife.com": {
		name: "John Member",
		email: "user@kingdomlife.com",
		password: "user123",
		role: "user"
	}
};
function getUser() {
	try {
		const raw = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
		return raw ? JSON.parse(raw) : null;
	} catch {
		return null;
	}
}
function login(email, password) {
	const match = DEMO_USERS[email.toLowerCase()];
	if (match && match.password === password) {
		const user = {
			name: match.name,
			email: match.email,
			role: match.role
		};
		localStorage.setItem(KEY, JSON.stringify(user));
		return user;
	}
	return null;
}
function register(name, email, _password) {
	const user = {
		name,
		email,
		role: "user"
	};
	localStorage.setItem(KEY, JSON.stringify(user));
	return user;
}
function logout() {
	localStorage.removeItem(KEY);
}
//#endregion
export { register as i, login as n, logout as r, getUser as t };
