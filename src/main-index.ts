import katex from 'katex';
import { signal, effect } from './runtime/signal';
import type { Domain, Level } from './formulas/types';
import { REGISTRY, type RegistryEntry } from './formulas/_registry.generated';
import { UI, DOMAIN_LABELS_I18N, LANGS, LANG_LABELS, LANG_FULL, detectLang, setLang, type Lang } from './i18n/strings';
import { FORMULA_I18N } from './i18n/formulas';

const all = REGISTRY;
const lang = signal<Lang>(detectLang());
setLang(lang.peek());

const params = new URLSearchParams(location.search);
function parsePath(): { dom?: Domain; lv?: Level; sf?: string } {
  const m = location.pathname.match(/^\/(domain|level|surface)\/([^/]+)\/?$/);
  if (!m) return {};
  const [, kind, val] = m;
  if (kind === 'domain') return { dom: val as Domain };
  if (kind === 'level') { const n = parseInt(val); return n >= 1 && n <= 5 ? { lv: n as Level } : {}; }
  if (kind === 'surface') return { sf: val };
  return {};
}
const initial = parsePath();
const query = signal<string>(params.get('q') ?? '');
const domains = signal<Set<Domain>>(new Set(
  initial.dom ? [initial.dom]
  : ((params.get('domain')?.split(',').filter(Boolean) ?? []) as Domain[])
));
const levels = signal<Set<Level>>(new Set(
  initial.lv ? [initial.lv]
  : ((params.get('level')?.split(',').filter(Boolean).map(Number).filter(n => n >= 1 && n <= 5) as Level[]) ?? [])
));
const surfaces = signal<Set<string>>(new Set(
  initial.sf ? [initial.sf]
  : (params.get('surface')?.split(',').filter(Boolean) ?? [])
));

function syncURL() {
  const q = query.peek();
  const ds = [...domains.peek()];
  const ls = [...levels.peek()];
  const ss = [...surfaces.peek()];
  // Single-filter clean paths
  if (!q && ds.length === 0 && ls.length === 0 && ss.length === 0) {
    history.replaceState(null, '', '/');
    return;
  }
  if (!q && ds.length === 1 && ls.length === 0 && ss.length === 0) {
    history.replaceState(null, '', `/domain/${ds[0]}`);
    return;
  }
  if (!q && ds.length === 0 && ls.length === 1 && ss.length === 0) {
    history.replaceState(null, '', `/level/${ls[0]}`);
    return;
  }
  if (!q && ds.length === 0 && ls.length === 0 && ss.length === 1) {
    history.replaceState(null, '', `/surface/${ss[0]}`);
    return;
  }
  // Fallback: query string on root
  const u = new URLSearchParams();
  if (q) u.set('q', q);
  if (ds.length) u.set('domain', ds.join(','));
  if (ls.length) u.set('level', ls.join(','));
  if (ss.length) u.set('surface', ss.join(','));
  history.replaceState(null, '', `/?${u.toString()}`);
}

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

function applyStaticText() {
  const l = lang.peek();
  const u = UI[l];
  document.title = u.docTitle;
  document.documentElement.lang = l === 'zh' ? 'zh-CN' : l;
  const desc = document.querySelector('meta[name=description]');
  if (desc) desc.setAttribute('content', u.docDescription);
  const qInput = document.getElementById('q') as HTMLInputElement | null;
  if (qInput) qInput.placeholder = u.searchPlaceholder;
  const tagline = document.querySelector('.tagline');
  if (tagline) tagline.textContent = u.siteTagline;
}

function renderTopbar() {
  const bar = document.querySelector('.topbar');
  if (!bar) return;
  bar.querySelector('.lang-switcher')?.remove();
  bar.querySelector('.random-btn')?.remove();
  bar.querySelector('.recent-btn')?.remove();
  bar.querySelector('.menu-btn')?.remove();
  bar.querySelectorAll('.topbar-link').forEach(n => n.remove());

  const menuBtn = el('button', { class: 'menu-btn', 'aria-label': 'menu', title: 'menu' }, '☰') as HTMLButtonElement;
  menuBtn.onclick = (ev) => { ev.stopPropagation(); toggleMainMenu(menuBtn); };
  bar.appendChild(menuBtn);
}

let mainMenuEl: HTMLElement | null = null;
function toggleMainMenu(anchor: HTMLElement) {
  if (mainMenuEl) { mainMenuEl.remove(); mainMenuEl = null; return; }
  const u = UI[lang.peek()];
  const rndLabel: Record<Lang, string> = { zh: '🎲 随机', en: '🎲 Random', es: '🎲 Aleatorio' };
  mainMenuEl = el('div', { class: 'main-menu', role: 'menu' });
  const r = anchor.getBoundingClientRect();
  mainMenuEl.style.top = `${r.bottom + 6}px`;
  mainMenuEl.style.right = `${Math.max(8, window.innerWidth - r.right)}px`;

  const close = () => { mainMenuEl?.remove(); mainMenuEl = null; };
  const item = (label: string, fn: () => void) => {
    const b = el('button', { class: 'main-menu-item', role: 'menuitem' }, label) as HTMLButtonElement;
    b.onclick = (ev) => { ev.stopPropagation(); close(); fn(); };
    return b;
  };

  mainMenuEl.appendChild(item(rndLabel[lang.peek()], () => {
    const e = all[Math.floor(Math.random() * all.length)];
    location.href = `/f/${e.slug}.html`;
  }));

  const recents = getRecents();
  if (recents.length > 0) {
    const recHeader = el('div', { class: 'main-menu-h' }, RECENT_LABEL[lang.peek()]);
    mainMenuEl.appendChild(recHeader);
    const recEntries = recents.map(s => all.find(r => r.slug === s)).filter(Boolean) as RegistryEntry[];
    for (const e of recEntries.slice(0, 6)) {
      const tr = tFormula(e.slug, { title: e.title, blurb: e.blurb });
      const a = el('a', { class: 'main-menu-item', href: `/f/${e.slug}.html`, role: 'menuitem' }, tr.title);
      mainMenuEl.appendChild(a);
    }
  }

  mainMenuEl.appendChild(el('div', { class: 'main-menu-sep' }));
  mainMenuEl.appendChild(item(u.aboutLink, () => toggleAbout()));
  const fb = el('a', { class: 'main-menu-item', href: 'mailto:htp2008@gmail.com?subject=mathlet%20feedback', role: 'menuitem' }, u.feedbackLink);
  mainMenuEl.appendChild(fb);

  mainMenuEl.appendChild(el('div', { class: 'main-menu-sep' }));
  const langRow = el('div', { class: 'main-menu-langs' });
  for (const l of LANGS) {
    const b = el('button', { class: 'lang-btn' + (l === lang.peek() ? ' active' : ''), title: LANG_FULL[l], 'aria-label': `Language: ${LANG_FULL[l]}`, 'aria-pressed': String(l === lang.peek()) }, LANG_LABELS[l]) as HTMLButtonElement;
    b.onclick = (ev) => {
      ev.stopPropagation();
      lang.value = l; setLang(l); applyStaticText(); renderFilters(); renderGrid(); renderTopbar(); syncURL();
      close();
    };
    langRow.appendChild(b);
  }
  mainMenuEl.appendChild(langRow);

  document.body.appendChild(mainMenuEl);
  setTimeout(() => {
    const handler = (ev: MouseEvent) => {
      if (!mainMenuEl?.contains(ev.target as Node) && ev.target !== anchor) {
        close(); document.removeEventListener('click', handler);
      }
    };
    document.addEventListener('click', handler);
  }, 0);
}

const DOMAIN_TOGGLE_LABEL: Record<Lang, string> = { zh: '领域', en: 'Domain', es: 'Dominio' };

function renderFilters() {
  const root = document.getElementById('filters')!;
  root.replaceChildren();
  const labels = DOMAIN_LABELS_I18N[lang.peek()];

  const lWrap = document.createElement('div'); lWrap.style.cssText = 'display:flex;gap:6px';
  for (const lv of [1, 2, 3, 4, 5] as Level[]) {
    const b = el('button', { class: 'chip level' }, '⭐'.repeat(lv) + ' L' + lv) as HTMLButtonElement;
    const apply = () => { const on = levels.peek().has(lv); b.classList.toggle('active', on); b.setAttribute('aria-pressed', String(on)); };
    apply();
    b.onclick = () => {
      const s = new Set(levels.peek());
      if (s.has(lv)) s.delete(lv); else s.add(lv);
      levels.value = s; apply(); syncURL();
    };
    lWrap.appendChild(b);
  }
  root.appendChild(lWrap);

  const gap = document.createElement('div'); gap.style.width = '8px'; root.appendChild(gap);

  const sWrap = document.createElement('div'); sWrap.style.cssText = 'display:flex;gap:6px';
  for (const sf of ['canvas2d', 'three']) {
    const b = el('button', { class: 'chip surface' }, sf === 'three' ? UI[lang.peek()].surface3d : UI[lang.peek()].surface2d) as HTMLButtonElement;
    const apply = () => { const on = surfaces.peek().has(sf); b.classList.toggle('active', on); b.setAttribute('aria-pressed', String(on)); };
    apply();
    b.onclick = () => {
      const s = new Set(surfaces.peek());
      if (s.has(sf)) s.delete(sf); else s.add(sf);
      surfaces.value = s; apply(); syncURL();
    };
    sWrap.appendChild(b);
  }
  root.appendChild(sWrap);

  // Domain dropdown trigger (collapsed by default)
  const gap2 = document.createElement('div'); gap2.style.width = '8px'; root.appendChild(gap2);
  const domBtn = el('button', { class: 'chip chip-domain' }) as HTMLButtonElement;
  const setDomBtnLabel = () => {
    const n = domains.peek().size;
    domBtn.textContent = n === 0 ? `${DOMAIN_TOGGLE_LABEL[lang.peek()]} ▾` : `${DOMAIN_TOGGLE_LABEL[lang.peek()]} (${n}) ▾`;
    domBtn.classList.toggle('active', n > 0);
    domBtn.setAttribute('aria-pressed', String(n > 0));
  };
  setDomBtnLabel();
  domBtn.onclick = (ev) => { ev.stopPropagation(); toggleDomainPopover(domBtn, labels, setDomBtnLabel); };
  root.appendChild(domBtn);
}

let domPopoverEl: HTMLElement | null = null;
function toggleDomainPopover(anchor: HTMLElement, labels: Record<string, string>, onChange: () => void) {
  if (domPopoverEl) { domPopoverEl.remove(); domPopoverEl = null; return; }
  domPopoverEl = el('div', { class: 'domain-popover' });
  const r = anchor.getBoundingClientRect();
  domPopoverEl.style.top = `${r.bottom + 6}px`;
  domPopoverEl.style.left = `${Math.max(8, r.left)}px`;
  for (const [d, label] of Object.entries(labels)) {
    const b = el('button', { class: 'chip' }, label) as HTMLButtonElement;
    const apply = () => { const on = domains.peek().has(d as Domain); b.classList.toggle('active', on); b.setAttribute('aria-pressed', String(on)); };
    apply();
    b.onclick = (ev) => {
      ev.stopPropagation();
      const s = new Set(domains.peek());
      if (s.has(d as Domain)) s.delete(d as Domain); else s.add(d as Domain);
      domains.value = s; apply(); onChange(); syncURL();
    };
    domPopoverEl.appendChild(b);
  }
  document.body.appendChild(domPopoverEl);
  setTimeout(() => {
    const close = (ev: MouseEvent) => {
      if (!domPopoverEl?.contains(ev.target as Node) && ev.target !== anchor) {
        domPopoverEl?.remove(); domPopoverEl = null;
        document.removeEventListener('click', close);
      }
    };
    document.addEventListener('click', close);
  }, 0);
}

function matches(e: RegistryEntry): boolean {
  const q = query.peek().trim().toLowerCase();
  if (q) {
    const tr = tFormula(e.slug, { title: e.title, blurb: e.blurb });
    const hay = (e.title + ' ' + tr.title + ' ' + e.slug + ' ' + e.blurb + ' ' + tr.blurb + ' ' + e.tex).toLowerCase();
    if (!hay.includes(q)) return false;
  }
  if (domains.peek().size && !domains.peek().has(e.domain)) return false;
  if (levels.peek().size && !levels.peek().has(e.level)) return false;
  if (surfaces.peek().size && !surfaces.peek().has(e.surface)) return false;
  return true;
}

const FEATURED_SLUGS = [
  'mandelbrot', 'lorenz', 'brian-brain', 'double-pendulum',
  'brownian-2d', 'newton-fractal', 'conway-glider', 'ifs-barnsley',
  'anneal', 'replicator',
];

const FEATURED_LABEL: Record<Lang, string> = {
  zh: '★ 精选',
  en: '★ Featured',
  es: '★ Destacados',
};

const RECENT_LABEL: Record<Lang, string> = {
  zh: '↺ 最近浏览',
  en: '↺ Recent',
  es: '↺ Recientes',
};

const POPULAR_LABEL: Record<Lang, string> = {
  zh: '🔥 热门',
  en: '🔥 Popular',
  es: '🔥 Popular',
};

let popularSlugs: string[] = [];
fetch('/popular.json').then(r => r.ok ? r.json() : []).then((d: { slug: string }[]) => {
  if (Array.isArray(d) && d.length > 0) {
    popularSlugs = d.map(x => x.slug).slice(0, 8);
    if (isUnfiltered()) renderGrid();
  }
}).catch(() => {});

function getRecents(): string[] {
  try { return JSON.parse(localStorage.getItem('mathlet:recents') ?? '[]'); }
  catch { return []; }
}

function makeCard(e: RegistryEntry, featured = false): HTMLAnchorElement {
  const labels = DOMAIN_LABELS_I18N[lang.peek()];
  const tr = tFormula(e.slug, { title: e.title, blurb: e.blurb });
  const a = document.createElement('a');
  a.className = 'card' + (featured ? ' card-featured' : '');
  a.href = `/f/${e.slug}.html`;
  a.setAttribute('aria-label', `${tr.title} — ${labels[e.domain]} — L${e.level} — ${tr.blurb}`);
  a.title = tr.blurb;

  const head = el('div', { class: 'head' });
  head.appendChild(el('div', { class: 'title' }, tr.title));
  head.appendChild(el('div', { class: 'stars' }, '⭐'.repeat(e.level)));
  a.appendChild(head);

  const tex = el('div', { class: 'tex' });
  try { tex.innerHTML = katex.renderToString(e.tex, { throwOnError: false, output: 'html' }); }
  catch { const code = el('code'); code.textContent = e.tex; tex.appendChild(code); }
  a.appendChild(tex);

  const thumb = el('img', {
    class: 'thumb',
    loading: 'lazy',
    decoding: 'async',
    src: `/thumbs/${e.slug}.webp`,
    alt: '',
    width: '320',
    height: '200',
  });
  (thumb as HTMLImageElement).onerror = () => { thumb.style.display = 'none'; };
  a.appendChild(thumb);

  // Blurb overlays thumb on hover only
  const overlay = el('div', { class: 'card-blurb-overlay' }, tr.blurb);
  a.appendChild(overlay);

  const foot = el('div', { class: 'foot' });
  foot.appendChild(el('span', { class: 'domain-tag' }, labels[e.domain]));
  a.appendChild(foot);

  return a;
}

function isUnfiltered(): boolean {
  return !query.peek() && domains.peek().size === 0 && levels.peek().size === 0 && surfaces.peek().size === 0;
}

function renderGrid() {
  const root = document.getElementById('grid')!;
  const labels = DOMAIN_LABELS_I18N[lang.peek()];
  root.replaceChildren();

  if (isUnfiltered()) {
    const u = UI[lang.peek()];
    const hero = el('section', { class: 'hero' });
    hero.appendChild(el('h1', { class: 'hero-title' }, u.heroTitle));
    hero.appendChild(el('p', { class: 'hero-body' }, u.heroBody));
    root.appendChild(hero);

    // Discover: Popular when data exists, else Featured (one section, not three)
    const discoverSlugs = popularSlugs.length > 0 ? popularSlugs : FEATURED_SLUGS;
    const discoverLabel = popularSlugs.length > 0 ? POPULAR_LABEL[lang.peek()] : FEATURED_LABEL[lang.peek()];
    const discoverEntries = discoverSlugs.map(s => all.find(r => r.slug === s)).filter(Boolean) as RegistryEntry[];
    if (discoverEntries.length > 0) {
      root.appendChild(el('h2', { class: 'section-h section-h-hero' }, discoverLabel));
      const row = el('div', { class: 'featured-row' });
      for (const e of discoverEntries) row.appendChild(makeCard(e, true));
      root.appendChild(row);
    }

    // Group by domain
    const byDomain = new Map<string, RegistryEntry[]>();
    for (const e of all) {
      if (!byDomain.has(e.domain)) byDomain.set(e.domain, []);
      byDomain.get(e.domain)!.push(e);
    }
    const PER_SECTION = 6;
    const moreLabel: Record<Lang, (n: number) => string> = {
      zh: n => `更多 ${n} 个 →`,
      en: n => `more ${n} →`,
      es: n => `${n} más →`,
    };
    const goDomain = (dom: string) => {
      domains.value = new Set([dom as Domain]);
      renderFilters(); renderBreadcrumbs(); syncURL();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    let collapsed: Set<string>;
    try { collapsed = new Set(JSON.parse(localStorage.getItem('mathlet:collapsed') ?? '[]')); }
    catch { collapsed = new Set(); }
    const persist = () => localStorage.setItem('mathlet:collapsed', JSON.stringify([...collapsed]));

    for (const [dom, list] of byDomain) {
      const h = el('h2', { class: 'section-h' }) as HTMLHeadingElement;
      const caret = el('button', { class: 'section-caret', 'aria-label': 'toggle' }, collapsed.has(dom) ? '▸' : '▾') as HTMLButtonElement;
      h.appendChild(caret);
      const label = el('span', { class: 'section-label', role: 'button', tabindex: '0' }) as HTMLElement;
      label.appendChild(el('span', {}, labels[dom as keyof typeof labels]));
      label.appendChild(el('span', { class: 'section-count' }, ` (${list.length})`));
      label.onclick = () => goDomain(dom);
      label.onkeydown = (ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); goDomain(dom); } };
      h.appendChild(label);
      root.appendChild(h);

      const row = el('div', { class: 'grid-row' + (collapsed.has(dom) ? ' collapsed' : '') });
      const visible = list.slice(0, PER_SECTION);
      for (const e of visible) row.appendChild(makeCard(e));
      if (list.length > PER_SECTION) {
        const more = el('a', { class: 'card card-more', href: `/domain/${dom}` }) as HTMLAnchorElement;
        more.textContent = moreLabel[lang.peek()](list.length - PER_SECTION);
        more.onclick = (ev) => { ev.preventDefault(); goDomain(dom); };
        row.appendChild(more);
      }
      root.appendChild(row);

      caret.onclick = () => {
        if (collapsed.has(dom)) { collapsed.delete(dom); row.classList.remove('collapsed'); caret.textContent = '▾'; }
        else { collapsed.add(dom); row.classList.add('collapsed'); caret.textContent = '▸'; }
        persist();
      };
    }
    return;
  }

  const items = all.filter(matches);
  if (items.length === 0) {
    root.appendChild(el('div', { class: 'empty' }, UI[lang.peek()].noMatch));
    return;
  }
  const flat = el('div', { class: 'grid-row' });
  for (const e of items) flat.appendChild(makeCard(e));
  root.appendChild(flat);
}

function renderBreadcrumbs() {
  const root = document.getElementById('breadcrumbs');
  if (!root) return;
  root.replaceChildren();
  const u = UI[lang.peek()];
  const labels = DOMAIN_LABELS_I18N[lang.peek()];
  const total = all.length;

  const home = el('button', { class: 'crumb-link' }, lang.peek() === 'zh' ? '全部' : lang.peek() === 'es' ? 'Todo' : 'All');
  (home as HTMLButtonElement).onclick = () => {
    domains.value = new Set(); levels.value = new Set(); surfaces.value = new Set(); query.value = '';
    const q = document.getElementById('q') as HTMLInputElement; q.value = '';
    renderFilters(); renderBreadcrumbs(); syncURL();
  };
  root.appendChild(home);

  if (domains.peek().size === 0 && levels.peek().size === 0 && surfaces.peek().size === 0 && !query.peek()) {
    root.appendChild(el('span', { class: 'crumb-count' }, `(${total})`));
    return;
  }

  for (const d of domains.peek()) {
    root.appendChild(el('span', { class: 'crumb-sep' }, '›'));
    const b = el('button', { class: 'crumb-link' }, labels[d]) as HTMLButtonElement;
    b.onclick = () => { const s = new Set(domains.peek()); s.delete(d); domains.value = s; renderFilters(); renderBreadcrumbs(); syncURL(); };
    root.appendChild(b);
  }
  for (const lv of levels.peek()) {
    root.appendChild(el('span', { class: 'crumb-sep' }, '›'));
    const b = el('button', { class: 'crumb-link' }, '⭐'.repeat(lv) + ' L' + lv) as HTMLButtonElement;
    b.onclick = () => { const s = new Set(levels.peek()); s.delete(lv); levels.value = s; renderFilters(); renderBreadcrumbs(); syncURL(); };
    root.appendChild(b);
  }
  for (const sf of surfaces.peek()) {
    root.appendChild(el('span', { class: 'crumb-sep' }, '›'));
    const b = el('button', { class: 'crumb-link' }, sf === 'three' ? u.surface3d : u.surface2d) as HTMLButtonElement;
    b.onclick = () => { const s = new Set(surfaces.peek()); s.delete(sf); surfaces.value = s; renderFilters(); renderBreadcrumbs(); syncURL(); };
    root.appendChild(b);
  }
  if (query.peek()) {
    root.appendChild(el('span', { class: 'crumb-sep' }, '›'));
    const b = el('button', { class: 'crumb-link' }, `"${query.peek()}"`) as HTMLButtonElement;
    b.onclick = () => { query.value = ''; const q = document.getElementById('q') as HTMLInputElement; q.value = ''; renderBreadcrumbs(); syncURL(); };
    root.appendChild(b);
  }
  const filtered = all.filter(matches).length;
  root.appendChild(el('span', { class: 'crumb-count' }, `(${filtered}/${total})`));
}

renderTopbar();
applyStaticText();
renderFilters();
renderBreadcrumbs();
effect(() => { query.value; domains.value; levels.value; surfaces.value; renderGrid(); renderBreadcrumbs(); });

const qInput = document.getElementById('q') as HTMLInputElement;
qInput.value = query.peek();
let qDeb: number | undefined;
qInput.addEventListener('input', e => {
  const v = (e.target as HTMLInputElement).value;
  clearTimeout(qDeb);
  qDeb = window.setTimeout(() => { query.value = v; syncURL(); }, 120);
});

const HELP_TEXT: Record<Lang, string> = {
  zh: '/ 搜索 · ? 帮助 · 🎲 随机 · esc 关闭',
  en: '/ search · ? help · 🎲 random · esc to close',
  es: '/ buscar · ? ayuda · 🎲 aleatorio · esc para cerrar',
};
let recentMenuEl: HTMLElement | null = null;
function toggleRecentMenu(anchor: HTMLElement) {
  if (recentMenuEl) { recentMenuEl.remove(); recentMenuEl = null; return; }
  const recents = getRecents();
  const entries = recents.map(s => all.find(r => r.slug === s)).filter(Boolean) as RegistryEntry[];
  if (entries.length === 0) return;
  recentMenuEl = el('div', { class: 'recent-menu' });
  const r = anchor.getBoundingClientRect();
  recentMenuEl.style.top = `${r.bottom + 6}px`;
  recentMenuEl.style.left = `${Math.max(8, r.left)}px`;
  recentMenuEl.appendChild(el('div', { class: 'recent-menu-h' }, RECENT_LABEL[lang.peek()]));
  for (const e of entries) {
    const tr = tFormula(e.slug, { title: e.title, blurb: e.blurb });
    const a = el('a', { class: 'recent-menu-item', href: `/f/${e.slug}.html` }, tr.title);
    recentMenuEl.appendChild(a);
  }
  document.body.appendChild(recentMenuEl);
  setTimeout(() => {
    const close = (ev: MouseEvent) => {
      if (!recentMenuEl?.contains(ev.target as Node)) { recentMenuEl?.remove(); recentMenuEl = null; document.removeEventListener('click', close); }
    };
    document.addEventListener('click', close);
  }, 0);
}

let aboutEl: HTMLElement | null = null;
function toggleAbout() {
  if (aboutEl) { aboutEl.remove(); aboutEl = null; return; }
  const u = UI[lang.peek()];
  aboutEl = el('div', { class: 'help-overlay', role: 'dialog' });
  const box = el('div', { class: 'help-box about-box' });
  box.appendChild(el('div', { class: 'help-title' }, u.aboutTitle));
  box.appendChild(el('p', { class: 'about-body' }, u.aboutBody));
  const links = el('div', { class: 'about-links' });
  const repo = el('a', { href: 'https://github.com/htpu/mathlet', target: '_blank', rel: 'noopener' }, 'GitHub →');
  const fb = el('a', { href: 'mailto:htp2008@gmail.com?subject=mathlet%20feedback' }, 'Feedback ✉');
  links.appendChild(repo);
  links.appendChild(fb);
  box.appendChild(links);
  aboutEl.appendChild(box);
  aboutEl.onclick = (ev) => { if (ev.target === aboutEl) toggleAbout(); };
  document.body.appendChild(aboutEl);
}

let helpEl: HTMLElement | null = null;
function toggleHelp() {
  if (helpEl) { helpEl.remove(); helpEl = null; return; }
  helpEl = el('div', { class: 'help-overlay', role: 'dialog' });
  const box = el('div', { class: 'help-box' });
  box.appendChild(el('div', { class: 'help-title' }, 'mathlet'));
  box.appendChild(el('div', {}, HELP_TEXT[lang.peek()]));
  helpEl.appendChild(box);
  helpEl.onclick = () => toggleHelp();
  document.body.appendChild(helpEl);
}

document.addEventListener('keydown', e => {
  const inInput = document.activeElement?.tagName === 'INPUT';
  if (e.key === '/' && !inInput) { e.preventDefault(); qInput.focus(); }
  else if (e.key === '?' && !inInput) { e.preventDefault(); toggleHelp(); }
  else if (e.key === 'Escape' && helpEl) { toggleHelp(); }
});
