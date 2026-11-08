// Which asset slots are filled. tools/assets.mjs writes assets/index.json; anything not listed
// is never requested, so an empty slot costs no request and shows its placeholder instead.
import { SLOTS } from './slots.js?v=debug-20261108-1';

let filled = new Set();

export async function loadIndex({ timeoutMs = 4000 } = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch('assets/index.json', { cache: 'no-cache', signal: controller.signal });
    const entries = res.ok ? await res.json() : [];
    filled = new Set(Array.isArray(entries) ? entries : []);
  } catch {
    filled = new Set();
  } finally {
    clearTimeout(timeout);
  }
}

export function asset(slot) {
  const spec = SLOTS[slot];
  if (!spec || !filled.has(slot)) return null;
  if (spec.kind === 'audio') return `assets/audio/${slot}.mp3`;
  return `assets/img/${slot}.${spec.hd ? 'webp' : 'png'}`;
}
