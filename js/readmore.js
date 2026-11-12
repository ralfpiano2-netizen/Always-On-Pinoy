// Shorter labels: long museum text starts collapsed behind a "Read more" button.
// Runs independently of main.js and enhances new content as it is rendered.
const EXTRA = 'rm-hidden';
function toggler(btn, apply) {
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? 'Show less' : 'Read more';
    apply(open);
  });
}
function makeButton(label) {
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'btn btn--plain readmore-btn';
  b.setAttribute('aria-expanded', 'false'); b.textContent = label || 'Read more';
  return b;
}
function enhanceEra(copy) {
  if (copy.dataset.rm) return;
  copy.dataset.rm = '1';
  const kids = [...copy.children];
  const total = copy.textContent.trim().length;
  if (total < 420) return;
  const rest = kids.slice(1);
  const first = kids[0];
  if (!first) return;
  const clampFirst = first.textContent.length > 480 || !rest.length;
  if (clampFirst) first.classList.add('rm-clamp');
  rest.forEach(el => el.classList.add(EXTRA));
  const btn = makeButton();
  toggler(btn, open => {
    if (clampFirst) first.classList.toggle('rm-clamp', !open);
    rest.forEach(el => el.classList.toggle(EXTRA, !open));
  });
  copy.append(btn);
}
function enhanceFuture(card) {
  if (card.dataset.rm) return;
  card.dataset.rm = '1';
  const bridge = card.querySelector('.future-bridge');
  const scenario = bridge && bridge.nextElementSibling;
  const cap = card.querySelector('.future-capability');
  const values = card.querySelector('.future-values');
  if (!scenario || scenario.tagName !== 'P') return;
  const more = [cap, values].filter(Boolean);
  scenario.classList.add('rm-clamp');
  more.forEach(el => el.classList.add(EXTRA));
  const btn = makeButton();
  toggler(btn, open => { scenario.classList.toggle('rm-clamp', !open); more.forEach(el => el.classList.toggle(EXTRA, !open)); });
  scenario.after(btn);
}
function scan() {
  document.querySelectorAll('.era-copy').forEach(enhanceEra);
  document.querySelectorAll('.future-proposal').forEach(enhanceFuture);
}
let t = 0;
const queue = () => { clearTimeout(t); t = setTimeout(scan, 80); };
new MutationObserver(queue).observe(document.documentElement, { childList: true, subtree: true });
document.addEventListener('DOMContentLoaded', queue); queue();
