// Scroll state without scroll listeners. A one-line band at the middle of the viewport decides
// the active step and section; a rAF loop runs only while a [data-progress] block is in view and
// writes its progress to --p (0 at its top edge, 1 when its bottom reaches the viewport bottom).
// ponytail: main-thread scroll work; move hot scenes to animation-timeline: view() if low-end Android stutters.

// Percentage root margins resolve against width, even on the vertical edges.
// Use a real two-pixel band centered on the viewport's height instead.
export function middleRootMargin(height) {
  const h = Math.max(1, Math.round(height));
  const top = Math.max(0, Math.floor(h / 2) - 1);
  const bottom = Math.max(0, h - top - 2);
  return `-${top}px 0px -${bottom}px 0px`;
}

export function watchMiddle(selector, onEnter) {
  const targets = [...document.querySelectorAll(selector)];
  let io, last = null, resizeFrame = 0;
  const select = () => {
    const middle = innerHeight / 2;
    const current = targets.find(el => {
      const box = el.getBoundingClientRect();
      return box.width > 0 && box.height > 0 && box.top <= middle && box.bottom > middle;
    });
    // Observer entries can be queued before a jump. Read the current geometry,
    // rather than letting an old entry or callback order choose another stop.
    if (current && current !== last) { last = current; onEnter(current); }
  };
  const refresh = () => {
    resizeFrame = 0;
    io?.disconnect();
    io = new IntersectionObserver(select, { rootMargin: middleRootMargin(innerHeight) });
    targets.forEach(el => io.observe(el));
    select();
  };
  const resize = () => { if (!resizeFrame) resizeFrame = requestAnimationFrame(refresh); };
  addEventListener('resize', resize, { passive: true });
  refresh();
  return { disconnect() { io.disconnect(); cancelAnimationFrame(resizeFrame); removeEventListener('resize', resize); } };
}

export const watchSteps = onEnter => watchMiddle('.step', onEnter);
export const watchSections = onEnter => watchMiddle('main > section', onEnter);

const listeners = new Map();
const live = new Set();
const last = new WeakMap();
let raf = 0;

export function onProgress(el, fn) {
  if (!listeners.has(el)) listeners.set(el, []);
  listeners.get(el).push(fn);
  if (last.has(el)) fn(last.get(el));
}

function frame() {
  raf = 0;
  const vh = window.innerHeight;
  for (const el of live) {
    const box = el.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, -box.top / Math.max(1, box.height - vh)));
    if (last.get(el) === p) continue;
    last.set(el, p);
    el.style.setProperty('--p', p.toFixed(4));
    for (const fn of listeners.get(el) ?? []) fn(p);
  }
  if (live.size) raf = requestAnimationFrame(frame);
}

export function watchProgress() {
  const io = new IntersectionObserver(entries => {
    for (const e of entries) e.isIntersecting ? live.add(e.target) : live.delete(e.target);
    if (live.size && !raf) raf = requestAnimationFrame(frame);
  }, { rootMargin: '25% 0px' });
  document.querySelectorAll('[data-progress]').forEach(el => io.observe(el));
}
