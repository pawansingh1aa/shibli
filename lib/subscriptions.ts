/**
 * In-memory subscription store.
 *
 * For production, replace this with a database (e.g. Vercel KV, Supabase,
 * PlanetScale) so subscriptions persist across server restarts / deployments.
 */

import type { PushSubscription } from "web-push";

// Module-level set — survives hot-reloads in dev but resets on full restart.
const subscriptions = new Set<string>();

export function saveSubscription(sub: PushSubscription): void {
  subscriptions.add(JSON.stringify(sub));
}

export function removeSubscription(endpoint: string): void {
  for (const raw of subscriptions) {
    const parsed = JSON.parse(raw) as PushSubscription;
    if (parsed.endpoint === endpoint) {
      subscriptions.delete(raw);
      break;
    }
  }
}

export function getAllSubscriptions(): PushSubscription[] {
  return Array.from(subscriptions).map((raw) => JSON.parse(raw) as PushSubscription);
}
