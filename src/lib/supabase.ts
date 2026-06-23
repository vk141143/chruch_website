import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// ── Replace with your real Supabase project values ───────────────────────────
const SUPABASE_URL  = import.meta.env.VITE_SUPABASE_URL  as string | undefined;
const SUPABASE_ANON = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

const isConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON);

// Lazy singleton — only created when env vars are present
let _client: SupabaseClient | null = null;
function getClient(): SupabaseClient {
  if (!isConfigured) throw new Error("Supabase env vars not set. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.");
  if (!_client) _client = createClient(SUPABASE_URL!, SUPABASE_ANON!);
  return _client;
}

// Proxy so existing code can still import `supabase` directly
export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    return getClient()[prop as keyof SupabaseClient];
  },
});

// ── Auth helpers ──────────────────────────────────────────────────────────────

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data.user;
}

export async function signUp(email: string, password: string, name: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: name } },
  });
  if (error) throw error;
  // Insert profile row
  if (data.user) {
    await supabase.from("profiles").upsert({
      id: data.user.id,
      email,
      full_name: name,
      subscription: false,
      role: "user",
    });
  }
  return data.user;
}

export async function signOut() {
  await supabase.auth.signOut();
}

export async function getSession() {
  const { data } = await supabase.auth.getSession();
  return data.session;
}

// ── Subscription helpers ──────────────────────────────────────────────────────

/**
 * Reads subscription status from the `profiles` table.
 * Expected schema:
 *   profiles (id uuid PK, email text, full_name text, subscription boolean, role text)
 */
export async function getSubscriptionStatus(userId: string): Promise<boolean> {
  const { data, error } = await supabase
    .from("profiles")
    .select("subscription")
    .eq("id", userId)
    .single();

  if (error || !data) return false;
  return Boolean(data.subscription);
}

/**
 * Called from your Stripe webhook (server-side) after a successful payment.
 * Updates the user's subscription flag in Supabase.
 */
export async function activateSubscription(userId: string): Promise<void> {
  await supabase
    .from("profiles")
    .update({ subscription: true })
    .eq("id", userId);
}

/**
 * Called when a subscription is cancelled via Stripe webhook.
 */
export async function cancelSubscription(userId: string): Promise<void> {
  await supabase
    .from("profiles")
    .update({ subscription: false })
    .eq("id", userId);
}

// ── Stripe checkout ───────────────────────────────────────────────────────────

/**
 * Creates a Stripe Checkout session via a Supabase Edge Function.
 * Deploy an Edge Function at: supabase/functions/create-checkout/index.ts
 * It should call stripe.checkout.sessions.create() and return { url }.
 *
 * Replace VITE_STRIPE_MONTHLY_LINK / VITE_STRIPE_ANNUAL_LINK with real
 * Stripe Payment Link URLs if you prefer the simpler Payment Links approach.
 */
export async function createStripeCheckout(
  planId: "monthly" | "annual",
  userId: string,
  userEmail: string
): Promise<string> {
  const { data, error } = await supabase.functions.invoke("create-checkout", {
    body: { planId, userId, userEmail },
  });
  if (error) throw error;
  return data.url as string;
}
