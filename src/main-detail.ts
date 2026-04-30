import katex from 'katex';
import { signal, effect } from './runtime/signal';
import type { Formula, ParamSpec, ParamValues, Surface } from './formulas/types';
import { REGISTRY } from './formulas/_registry.generated';
import { LOADERS } from './formulas/_loaders.generated';
import { UI, DOMAIN_LABELS_I18N, LANGS, LANG_LABELS, detectLang, setLang, type Lang } from './i18n/strings';
import { FORMULA_I18N } from './i18n/formulas';

const slug = location.pathname.replace(/^\/f\//, '').replace(/\.html$/, '').replace(/\/$/, '') || 'mandelbrot';
const meta = REGISTRY.find(r => r.slug === slug);
const lang = signal<Lang>(detectLang());
setLang(lang.peek());

const root = document.getElementById('root')!;

function el(tag: string, attrs: Record<string, string> = {}, text?: string): HTMLElement {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  if (text !== undefined) e.textContent = text;
  return e;
}

function slugToTitle(s: string): string {
  return s.split('-').map(w => w ? w[0].toUpperCase() + w.slice(1) : '').join(' ');
}
function tFormula(slug: string, fallback: { title: string; blurb: string }): { title: string; blurb: string } {
  const l = lang.peek();
  if (l === 'zh') return fallback;
  const i = FORMULA_I18N[slug]?.[l];
  if (i) return i;
  return { title: slugToTitle(slug), blurb: '' };
}

if (!meta) {
  const d = el('div', { class: 'empty' });
  d.textContent = `${UI[lang.peek()].notFound}: ${slug} `;
  d.appendChild(el('a', { href: '/' }, UI[lang.peek()].backToIndex));
  root.appendChild(d);
} else {
  void bootstrap();
}

async function bootstrap() {
  const loader = LOADERS[slug];
  if (!loader) { root.appendChild(el('div', { class: 'empty' }, `loader missing: ${slug}`)); return; }
  const mod = await loader();
  const formula: Formula = mod.default;
  const tr = tFormula(formula.meta.slug, { title: formula.meta.title, blurb: formula.meta.blurb });
  document.title = `${tr.title} · mathlet`;

  // Track recent visits (max 8, dedupe, most recent first)
  try {
    const key = 'mathlet:recents';
    const prev: string[] = JSON.parse(localStorage.getItem(key) ?? '[]');
    const next = [slug, ...prev.filter(s => s !== slug)].slice(0, 8);
    localStorage.setItem(key, JSON.stringify(next));
  } catch {}

  // Popularity ping (fire & forget; worker dedupes & rate-limits server-side)
  try {
    fetch('https://mathlet-popularity.htp2008.workers.dev/v', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ slug }),
      keepalive: true,
    }).catch(() => {});
  } catch {}

  const urlParams = new URLSearchParams(location.search);

  const paramSignals: Record<string, ReturnType<typeof signal<any>>> = {};
  for (const p of formula.params) {
    const urlVal = urlParams.get(p.key);
    let v: number | boolean | string = p.default;
    if (urlVal !== null) {
      if (p.kind === 'number') v = parseFloat(urlVal);
      else if (p.kind === 'int') v = parseInt(urlVal);
      else if (p.kind === 'bool') v = urlVal === '1';
      else v = urlVal;
    }
    paramSignals[p.key] = signal(v);
  }

  function getValues(): ParamValues {
    const o: ParamValues = {};
    for (const k of Object.keys(paramSignals)) o[k] = paramSignals[k].peek();
    return o;
  }

  function syncURL() {
    const u = new URLSearchParams();
    if (lang.peek() !== 'zh') u.set('lang', lang.peek());
    for (const p of formula.params) {
      const v = paramSignals[p.key].peek();
      if (v !== p.default) u.set(p.key, String(p.kind === 'bool' ? (v ? 1 : 0) : v));
    }
    const s = u.toString();
    history.replaceState(null, '', s ? `?${s}` : location.pathname);
  }

  root.replaceChildren();

  const bar = el('div', { class: 'detail-bar' });
  const same = REGISTRY.filter(r => r.domain === formula.meta.domain && r.level === formula.meta.level);
  const idx = same.findIndex(r => r.slug === slug);
  const prev = idx > 0 ? same[idx - 1] : null;
  const next = idx >= 0 && idx < same.length - 1 ? same[idx + 1] : null;
  const langSuffix = () => '';

  const homeLabel = lang.peek() === 'zh' ? '全部' : lang.peek() === 'es' ? 'Todo' : 'All';
  const home = el('a', { href: '/' + langSuffix() }, homeLabel);
  home.style.color = 'var(--accent-2)';
  bar.appendChild(home);
  bar.appendChild(el('span', { class: 'crumb-sep' }, '›'));
  const domainLink = el('a', { href: `/domain/${formula.meta.domain}` }, DOMAIN_LABELS_I18N[lang.peek()][formula.meta.domain]);
  domainLink.style.color = 'var(--accent-2)';
  bar.appendChild(domainLink);
  bar.appendChild(el('span', { class: 'crumb-sep' }, '›'));
  const lvlLink = el('a', { href: `/level/${formula.meta.level}` }, '⭐'.repeat(formula.meta.level) + ' L' + formula.meta.level);
  lvlLink.style.color = 'var(--accent)';
  bar.appendChild(lvlLink);
  bar.appendChild(el('span', { class: 'crumb-sep' }, '›'));
  bar.appendChild(el('span', { class: 'crumb-current' }, tr.title));
  bar.appendChild(el('div', { class: 'grow' }));

  const prevBtn = el('button', { class: 'nav-arrow' }, prev ? '←' : '·') as HTMLButtonElement;
  if (!prev) { prevBtn.disabled = true; prevBtn.style.opacity = '.4'; prevBtn.style.cursor = 'default'; }
  bar.appendChild(prevBtn);
  const nextBtn = el('button', { class: 'nav-arrow' }, next ? '→' : '·') as HTMLButtonElement;
  if (!next) { nextBtn.disabled = true; nextBtn.style.opacity = '.4'; nextBtn.style.cursor = 'default'; }
  bar.appendChild(nextBtn);
  const resetBtn = el('button', { class: 'nav-arrow' }, UI[lang.peek()].reset) as HTMLButtonElement;
  bar.appendChild(resetBtn);
  const snapBtn = el('button', { class: 'nav-arrow' }, UI[lang.peek()].snapshot) as HTMLButtonElement;
  bar.appendChild(snapBtn);
  const shareBtn = el('button', { class: 'nav-arrow', title: 'copy link with current params' }, '🔗') as HTMLButtonElement;
  bar.appendChild(shareBtn);
  shareBtn.addEventListener('click', async () => {
    syncURL();
    try {
      await navigator.clipboard.writeText(location.href);
      const orig = shareBtn.textContent;
      shareBtn.textContent = '✓';
      setTimeout(() => { shareBtn.textContent = orig; }, 1200);
    } catch {}
  });
  root.appendChild(bar);
  // Wire topbar (logo + search + menu) — search goes to /?q=
  const qInput = document.getElementById('q-detail') as HTMLInputElement | null;
  if (qInput) {
    qInput.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') {
        const v = qInput.value.trim();
        location.href = v ? `/?q=${encodeURIComponent(v)}` : '/';
      }
    });
  }
  const topbarEl = document.querySelector('.topbar');
  if (topbarEl && !topbarEl.querySelector('.menu-btn')) {
    const menuBtn = el('button', { class: 'menu-btn', 'aria-label': 'menu', title: 'menu' }, '☰') as HTMLButtonElement;
    menuBtn.onclick = (ev) => { ev.stopPropagation(); toggleDetailMenu(menuBtn); };
    topbarEl.appendChild(menuBtn);
  }

  function toggleDetailMenu(anchor: HTMLElement) {
    let menu = document.querySelector('.detail-menu') as HTMLElement | null;
    if (menu) { menu.remove(); return; }
    menu = el('div', { class: 'main-menu detail-menu', role: 'menu' });
    const r = anchor.getBoundingClientRect();
    menu.style.top = `${r.bottom + 6}px`;
    menu.style.right = `${Math.max(8, window.innerWidth - r.right)}px`;

    const close = () => { menu!.remove(); };
    const item = (label: string, fn: () => void) => {
      const b = el('button', { class: 'main-menu-item', role: 'menuitem' }, label) as HTMLButtonElement;
      b.onclick = (ev) => { ev.stopPropagation(); close(); fn(); };
      return b;
    };

    const rndLabel: Record<string, string> = { zh: '🎲 随机', en: '🎲 Random', es: '🎲 Aleatorio' };
    const recentLabel: Record<string, string> = { zh: '↺ 最近浏览', en: '↺ Recent', es: '↺ Recientes' };
    const aboutLabel = (UI[lang.peek()] as any).aboutLink || 'About';
    const feedbackLabel = (UI[lang.peek()] as any).feedbackLink || 'Feedback';

    menu.appendChild(item(rndLabel[lang.peek()] || rndLabel.en, () => {
      const e = REGISTRY[Math.floor(Math.random() * REGISTRY.length)];
      location.href = `/f/${e.slug}.html`;
    }));

    let recents: string[] = [];
    try { recents = JSON.parse(localStorage.getItem('mathlet:recents') ?? '[]'); } catch {}
    if (recents.length > 0) {
      menu.appendChild(el('div', { class: 'main-menu-h' }, recentLabel[lang.peek()] || recentLabel.en));
      for (const s of recents.slice(0, 6)) {
        const re = REGISTRY.find(r => r.slug === s);
        if (!re) continue;
        const trr = tFormula(re.slug, { title: re.title, blurb: re.blurb });
        const a = el('a', { class: 'main-menu-item', href: `/f/${re.slug}.html`, role: 'menuitem' }, trr.title);
        menu.appendChild(a);
      }
    }

    menu.appendChild(el('div', { class: 'main-menu-sep' }));
    menu.appendChild(item(aboutLabel, () => {
      const w = window.open('/', '_self');
      // about lives only on index; navigate home and signal
      try { sessionStorage.setItem('mathlet:openAbout', '1'); } catch {}
      if (!w) location.href = '/';
    }));
    const fb = el('a', { class: 'main-menu-item', href: 'mailto:htp2008@gmail.com?subject=mathlet%20feedback', role: 'menuitem' }, feedbackLabel);
    menu.appendChild(fb);

    menu.appendChild(el('div', { class: 'main-menu-sep' }));
    menu.appendChild(el('div', { class: 'main-menu-h' }, 'Language'));
    const langRow = el('div', { class: 'main-menu-langs' });
    for (const l of LANGS) {
      const b = el('button', { class: 'lang-btn' + (l === lang.peek() ? ' active' : ''), title: l, 'aria-pressed': String(l === lang.peek()) }, LANG_LABELS[l]) as HTMLButtonElement;
      b.onclick = (ev) => { ev.stopPropagation(); lang.value = l; setLang(l); location.reload(); };
      langRow.appendChild(b);
    }
    menu.appendChild(langRow);

    document.body.appendChild(menu);
    setTimeout(() => {
      const handler = (ev: MouseEvent) => { if (!menu!.contains(ev.target as Node) && ev.target !== anchor) { close(); document.removeEventListener('click', handler); } };
      document.addEventListener('click', handler);
    }, 0);
  }

  if (prev) prevBtn.addEventListener('click', () => { location.href = `/f/${prev.slug}.html` + langSuffix(); });
  if (next) nextBtn.addEventListener('click', () => { location.href = `/f/${next.slug}.html` + langSuffix(); });

  const body = el('div', { class: 'detail-body' });
  root.appendChild(body);

  const notesPane = el('div', { class: 'notes-pane' });
  notesPane.appendChild(el('h1', {}, tr.title));
  notesPane.appendChild(el('div', { class: 'meta-line' },
    `${DOMAIN_LABELS_I18N[lang.peek()][formula.meta.domain]} · L${formula.meta.level} · ${formula.meta.surface === 'three' ? UI[lang.peek()].surface3d : UI[lang.peek()].surface2d}`));
  const texBlock = el('div', { class: 'tex-block' });
  try { texBlock.innerHTML = katex.renderToString(formula.meta.tex, { throwOnError: false, displayMode: true, output: 'html' }); }
  catch { const c = el('code'); c.textContent = formula.meta.tex; texBlock.appendChild(c); }
  notesPane.appendChild(texBlock);
  const notesContent = el('div', { class: 'notes-content' });
  notesContent.appendChild(el('p', {}, tr.blurb));
  // Notes are zh-only metadata; only render when current lang is zh.
  if (formula.meta.notes && lang.peek() === 'zh') notesContent.appendChild(el('p', {}, formula.meta.notes));
  notesPane.appendChild(notesContent);
  body.appendChild(notesPane);

  const canvasPane = el('div', { class: 'canvas-pane' });
  const canvasWrap = el('div', { class: 'canvas-wrap' });
  const canvas = document.createElement('canvas');
  canvasWrap.appendChild(canvas);
  canvasPane.appendChild(canvasWrap);
  const paramsPane = el('div', { class: 'params-pane' });
  // Default home: under formula in notes pane (study mode)
  notesPane.appendChild(paramsPane);
  body.appendChild(canvasPane);

  function rebuildParams() {
    paramsPane.replaceChildren();
    for (const p of formula.params) paramsPane.appendChild(buildParamRow(p, paramSignals[p.key], syncURL));
  }
  rebuildParams();

  resetBtn.addEventListener('click', () => {
    for (const p of formula.params) paramSignals[p.key].value = p.default;
    syncURL(); rebuildParams();
  });

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let surface: Surface;
  function resize() {
    const r = canvasWrap.getBoundingClientRect();
    canvas.width = Math.max(1, Math.floor(r.width * dpr));
    canvas.height = Math.max(1, Math.floor(r.height * dpr));
    if (surface && surface.kind === 'canvas2d') { surface.width = r.width; surface.height = r.height; surface.dpr = dpr; }
    else if (surface && surface.kind === 'three') { surface.width = r.width; surface.height = r.height; }
  }
  // Default to canvas2d when surface is undefined/missing.
  if (formula.meta.surface === 'three') {
    surface = { kind: 'three', canvas, width: 0, height: 0 };
  } else {
    const ctx = canvas.getContext('2d')!;
    surface = { kind: 'canvas2d', ctx, canvas, width: 0, height: 0, dpr };
  }
  resize();
  formula.init?.(surface, getValues());

  let needsRender = false;
  function requestRender() {
    if (needsRender) return;
    needsRender = true;
    requestAnimationFrame(() => { needsRender = false; formula.render(surface, getValues(), 0); });
  }
  window.addEventListener('resize', () => { resize(); requestRender(); });

  if (formula.meta.animated) {
    let t0 = performance.now();
    const loop = (t: number) => { formula.render(surface, getValues(), (t - t0) / 1000); requestAnimationFrame(loop); };
    requestAnimationFrame(loop);
  } else {
    effect(() => { for (const k of Object.keys(paramSignals)) paramSignals[k].value; requestRender(); });
  }

  setTimeout(() => { resize(); requestRender(); }, 0);

  snapBtn.addEventListener('click', () => {
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url; a.download = `${slug}.png`; a.click();
  });

  // Global registry navigation (across all formulas, not just same domain+level)
  const allIdx = REGISTRY.findIndex(r => r.slug === slug);
  const globalPrev = allIdx > 0 ? REGISTRY[allIdx - 1] : null;
  const globalNext = allIdx >= 0 && allIdx < REGISTRY.length - 1 ? REGISTRY[allIdx + 1] : null;
  document.addEventListener('keydown', e => {
    if ((e.target as HTMLElement).tagName === 'INPUT') return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === 'r') { for (const p of formula.params) paramSignals[p.key].value = p.default; syncURL(); rebuildParams(); }
    else if (e.key === 'ArrowLeft' && prev) location.href = `/f/${prev.slug}.html`;
    else if (e.key === 'ArrowRight' && next) location.href = `/f/${next.slug}.html`;
    else if (e.key === 'k' && globalPrev) location.href = `/f/${globalPrev.slug}.html`;
    else if (e.key === 'j' && globalNext) location.href = `/f/${globalNext.slug}.html`;
    else if (e.key === 'g' && globalPrev) location.href = `/f/${REGISTRY[0].slug}.html`;
    else if (e.key === 'G' && globalNext) location.href = `/f/${REGISTRY[REGISTRY.length-1].slug}.html`;
    else if (e.key === '?') {
      e.preventDefault();
      const lines = ['mathlet detail · keyboard', '', '← → prev/next in same domain+level', 'j / k  next/prev across all formulas', 'g / G  first / last formula', 'r  reset params', '/  search (top)', 'esc  close'];
      const o = document.createElement('div');
      o.style.cssText = 'position:fixed;inset:0;z-index:1000;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;cursor:pointer';
      const b = document.createElement('div');
      b.style.cssText = 'background:#0d1017;border:1px solid #3a3f4b;border-radius:6px;padding:24px 32px;font-family:ui-monospace,monospace;font-size:13px;color:#cbccc6;white-space:pre-line;line-height:1.6;max-width:90vw';
      b.textContent = lines.join('\n');
      o.appendChild(b);
      o.onclick = () => o.remove();
      document.addEventListener('keydown', function close(ev) { if (ev.key === 'Escape') { o.remove(); document.removeEventListener('keydown', close); } });
      document.body.appendChild(o);
    }
    else if (e.key === 'Escape') document.querySelectorAll('[style*="z-index:1000"], .help-overlay').forEach(n => n.remove());
  });
}

function buildParamRow(p: ParamSpec, sig: ReturnType<typeof signal<any>>, sync: () => void): HTMLElement {
  const row = el('div', { class: 'param' });
  row.appendChild(el('span', { class: 'label' }, p.label));
  const val = el('span', { class: 'val' });
  row.appendChild(val);
  if (p.kind === 'number' || p.kind === 'int') {
    const r = document.createElement('input'); r.type = 'range';
    if (p.kind === 'number' && (p as any).logScale) {
      const min = Math.log10(Math.max(1e-9, p.min)); const max = Math.log10(p.max);
      r.min = String(min); r.max = String(max); r.step = String((max - min) / 200);
      r.value = String(Math.log10(Math.max(1e-9, sig.peek())));
      val.textContent = formatNum(sig.peek());
      r.oninput = () => { const v = Math.pow(10, parseFloat(r.value)); sig.value = v; val.textContent = formatNum(v); sync(); };
    } else {
      r.min = String(p.min); r.max = String(p.max); r.step = String(p.kind === 'int' ? 1 : (p as any).step);
      r.value = String(sig.peek());
      val.textContent = formatNum(sig.peek());
      r.oninput = () => { const v = p.kind === 'int' ? parseInt(r.value) : parseFloat(r.value); sig.value = v; val.textContent = formatNum(v); sync(); };
    }
    row.appendChild(r);
  } else if (p.kind === 'bool') {
    const c = document.createElement('input'); c.type = 'checkbox'; c.checked = !!sig.peek();
    val.textContent = c.checked ? 'on' : 'off';
    c.onchange = () => { sig.value = c.checked; val.textContent = c.checked ? 'on' : 'off'; sync(); };
    row.appendChild(c);
  } else if (p.kind === 'select') {
    const s = document.createElement('select');
    for (const o of p.options) {
      const op = document.createElement('option'); op.value = o.value; op.textContent = o.label;
      if (o.value === sig.peek()) op.selected = true;
      s.appendChild(op);
    }
    val.textContent = String(sig.peek());
    s.onchange = () => { sig.value = s.value; val.textContent = s.value; sync(); };
    row.appendChild(s);
  } else if (p.kind === 'color') {
    const c = document.createElement('input'); c.type = 'color'; c.value = String(sig.peek());
    val.textContent = String(sig.peek());
    c.oninput = () => { sig.value = c.value; val.textContent = c.value; sync(); };
    row.appendChild(c);
  } else if (p.kind === 'text') {
    const inp = document.createElement('input'); inp.type = 'text';
    inp.value = String(sig.peek());
    inp.placeholder = (p as any).placeholder ?? '';
    inp.style.gridColumn = '1 / -1';
    inp.style.background = 'var(--bg)';
    inp.style.border = '1px solid var(--border-strong)';
    inp.style.color = 'var(--accent-3)';
    inp.style.padding = '6px 8px';
    inp.style.fontFamily = 'var(--mono)';
    inp.style.fontSize = '12px';
    inp.style.borderRadius = '3px';
    val.textContent = '';
    inp.oninput = () => { sig.value = inp.value; sync(); };
    row.appendChild(inp);
  }
  return row;
}

function formatNum(v: number): string {
  if (Math.abs(v) >= 1000 || (Math.abs(v) < 0.01 && v !== 0)) return v.toExponential(2);
  return Number.isInteger(v) ? String(v) : v.toFixed(3);
}
