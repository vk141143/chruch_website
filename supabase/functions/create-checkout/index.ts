// supabase/functions/create-checkout/index.ts
// Deploy with: supabase functions deploy create-checkout
//
// Required Supabase secrets (set via `supabase secrets set`):
//   STRIPE_SECRET_KEY=sk_live_...
//   SITE_URL=https://your-domain.com
//
// Stripe webhook endpoint to add in Stripe Dashboard:
//   https://<project>.supabase.co/functions/v1/stripe-webhook
//   Events: checkout.session.completed, customer.subscription.deleted

import Stripe from "https://esm.sh/stripe@14?target=deno";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2?target=deno";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, {
  apiVersion: "2024-04-10",
});

const PRICE_IDS: Record<string, string> = {
  // Replace with real Stripe Price IDs from your dashboard
  monthly: Deno.env.get("STRIPE_PRICE_MONTHLY") ?? "price_monthly_placeholder",
  annual:  Deno.env.get("STRIPE_PRICE_ANNUAL")  ?? "price_annual_placeholder",
};

const SITE_URL = Deno.env.get("SITE_URL") ?? "http://localhost:3000";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
      },
    });
  }

  try {
    const { planId, userId, userEmail } = await req.json();

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer_email: userEmail,
      line_items: [{ price: PRICE_IDS[planId], quantity: 1 }],
      success_url: `${SITE_URL}/dashboard?subscription=success`,
      cancel_url:  `${SITE_URL}/dashboard?subscription=cancel`,
      metadata: { userId, planId },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 400,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  }
});
