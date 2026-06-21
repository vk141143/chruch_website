export type AuthUser = { name: string; email: string; role: "admin" | "user" };

const KEY = "klf_auth";

const DEMO_USERS: Record<string, AuthUser & { password: string }> = {
  "admin@kingdomlife.com": { name: "Admin User", email: "admin@kingdomlife.com", password: "admin123", role: "admin" },
  "user@kingdomlife.com": { name: "John Member", email: "user@kingdomlife.com", password: "user123", role: "user" },
};

export function getUser(): AuthUser | null {
  try {
    const raw = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function login(email: string, password: string): AuthUser | null {
  const match = DEMO_USERS[email.toLowerCase()];
  if (match && match.password === password) {
    const user: AuthUser = { name: match.name, email: match.email, role: match.role };
    localStorage.setItem(KEY, JSON.stringify(user));
    return user;
  }
  return null;
}

export function register(name: string, email: string, _password: string): AuthUser {
  const user: AuthUser = { name, email, role: "user" };
  localStorage.setItem(KEY, JSON.stringify(user));
  return user;
}

export function logout() {
  localStorage.removeItem(KEY);
}
