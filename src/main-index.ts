import katex from 'katex';
import { signal, effect } from './runtime/signal';
import type { Domain, Level } from './formulas/types';
import { REGISTRY, type RegistryEntry } from './formulas/_registry.generated';
import { UI, DOMAIN_LABELS_I18N, LANGS, LANG_LABELS, detectLang, setLang, type Lang } from './i18n/strings';
import { FORMULA_I18N } from './i18n/formulas';

const all = REGISTRY;
const lang = signal<Lang>(detectLang());
setLang(lang.peek());

const params = new URLSearchParams(location.search);
const query = signal<string>(params.get('q') ?? '');
const domains = signal<Set<Domain>>(new Set((params.get('domain')?.split(',').filter(Boolean) ?? []) as Domain[]));
const levels = signal<Set<Level>>(new Set((params.get('level')?.split(',').filter(Boolean).map(Number).filter(n => n >= 1 && n <= 5) as Level[]) ?? []));
const surfaces = signal<Set<string>>(new Set(params.get('surface')?.split(',').filter(Boolean) ?? []));

function syncURL() {
  const u = new URLSearchParams();
  if (query.peek()) u.set('q', query.peek());
  if (domains.peek().size) u.set('domain', [...domains.peek()].join(','));
  if (levels.peek().size) u.set('level', [...levels.peek()].join(','));
  if (surfaces.peek().size) u.set('surface', [...surfaces.peek()].join(','));
  if (lang.peek() !== 'zh') u.set('lang', lang.peek());
  const s = u.toString();
  history.replaceState(null, '', s ? `?${s}` : location.pathname);
}

function el(tag: string, attrs: Record<string, string> = {}, text?: string): HTMLElement {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  if (text !== undefined) e.textContent = text;
  return e;
}

function tFormula(slug: string, fallback: { title: string; blurb: string }): { title: string; blurb: string } {
  const l = lang.peek();
  if (l === 'zh') return fallback;
  return FORMULA_I18N[slug]?.[l] ?? fallback;
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
  bar.querySelector('.topbar-link')?.remove();
  bar.querySelectorAll('.topbar-link').forEach(n => n.remove());
  const u = UI[lang.peek()];

  const about = el('button', { class: 'topbar-link' }, u.aboutLink) as HTMLButtonElement;
  about.onclick = () => toggleAbout();
  bar.appendChild(about);

  const fb = el('a', { class: 'topbar-link', href: 'mailto:htp2008@gmail.com?subject=mathlet%20feedback' }, u.feedbackLink);
  bar.appendChild(fb);

  const rndLabel: Record<Lang, string> = { zh: '🎲 随机', en: '🎲 Random', es: '🎲 Aleatorio' };
  const rnd = el('button', { class: 'random-btn', title: rndLabel[lang.peek()] }, rndLabel[lang.peek()]) as HTMLButtonElement;
  rnd.onclick = () => {
    const e = all[Math.floor(Math.random() * all.length)];
    location.href = `/f/${e.slug}.html` + (lang.peek() !== 'zh' ? `?lang=${lang.peek()}` : '');
  };
  bar.appendChild(rnd);
  const sw = el('div', { class: 'lang-switcher' });
  for (const l of LANGS) {
    const b = el('button', { class: 'lang-btn' + (l === lang.peek() ? ' active' : '') }, LANG_LABELS[l]) as HTMLButtonElement;
    b.dataset.lang = l;
    b.setAttribute('aria-label', `Language: ${LANG_LABELS[l]}`);
    b.setAttribute('aria-pressed', String(l === lang.peek()));
    b.onclick = () => { lang.value = l; setLang(l); applyStaticText(); renderFilters(); renderGrid(); renderTopbar(); syncURL(); };
    sw.appendChild(b);
  }
  bar.appendChild(sw);
}

function renderFilters() {
  const root = document.getElementById('filters')!;
  root.replaceChildren();
  const labels = DOMAIN_LABELS_I18N[lang.peek()];

  const dWrap = document.createElement('div');
  dWrap.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px';
  for (const [d, label] of Object.entries(labels)) {
    const b = el('button', { class: 'chip' }, label) as HTMLButtonElement;
    const apply = () => { const on = domains.peek().has(d as Domain); b.classList.toggle('active', on); b.setAttribute('aria-pressed', String(on)); };
    apply();
    b.onclick = () => {
      const s = new Set(domains.peek());
      if (s.has(d as Domain)) s.delete(d as Domain); else s.add(d as Domain);
      domains.value = s; apply(); syncURL();
    };
    dWrap.appendChild(b);
  }
  root.appendChild(dWrap);

  const sep = document.createElement('div'); sep.style.flexBasis = '100%'; sep.style.height = '4px';
  root.appendChild(sep);

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
  'mandelbrot', 'lorenz', 'julia', 'double-pendulum',
  'karman-vortex', 'newton-fractal', 'conway-glider', 'ifs-barnsley',
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

function getRecents(): string[] {
  try { return JSON.parse(localStorage.getItem('mathlet:recents') ?? '[]'); }
  catch { return []; }
}

function makeCard(e: RegistryEntry, featured = false): HTMLAnchorElement {
  const labels = DOMAIN_LABELS_I18N[lang.peek()];
  const tr = tFormula(e.slug, { title: e.title, blurb: e.blurb });
  const a = document.createElement('a');
  a.className = 'card' + (featured ? ' card-featured' : '');
  a.href = `/f/${e.slug}.html` + (lang.peek() !== 'zh' ? `?lang=${lang.peek()}` : '');
  a.setAttribute('aria-label', `${tr.title} — ${labels[e.domain]} — L${e.level}`);

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

  a.appendChild(el('div', { class: 'blurb' }, tr.blurb));

  const foot = el('div', { class: 'foot' });
  foot.appendChild(el('span', { class: 'domain-tag' }, labels[e.domain]));
  foot.appendChild(el('span', { class: 'surf-tag' }, e.surface === 'three' ? UI[lang.peek()].surface3d : UI[lang.peek()].surface2d));
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

    // Recents (if any)
    const recents = getRecents();
    const recEntries = recents.map(s => all.find(r => r.slug === s)).filter(Boolean) as RegistryEntry[];
    if (recEntries.length > 0) {
      root.appendChild(el('h2', { class: 'section-h' }, RECENT_LABEL[lang.peek()]));
      const recRow = el('div', { class: 'grid-row' });
      for (const e of recEntries) recRow.appendChild(makeCard(e));
      root.appendChild(recRow);
    }

    // Featured strip
    const featuredHeader = el('h2', { class: 'section-h' }, FEATURED_LABEL[lang.peek()]);
    root.appendChild(featuredHeader);
    const featRow = el('div', { class: 'featured-row' });
    for (const slug of FEATURED_SLUGS) {
      const e = all.find(r => r.slug === slug);
      if (e) featRow.appendChild(makeCard(e, true));
    }
    root.appendChild(featRow);

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
    for (const [dom, list] of byDomain) {
      const h = el('h2', { class: 'section-h section-h-link' }) as HTMLHeadingElement;
      h.setAttribute('role', 'button');
      h.setAttribute('tabindex', '0');
      h.appendChild(el('span', {}, labels[dom as keyof typeof labels]));
      h.appendChild(el('span', { class: 'section-count' }, ` (${list.length})`));
      h.onclick = () => goDomain(dom);
      h.onkeydown = (ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); goDomain(dom); } };
      root.appendChild(h);
      const row = el('div', { class: 'grid-row' });
      const visible = list.slice(0, PER_SECTION);
      for (const e of visible) row.appendChild(makeCard(e));
      if (list.length > PER_SECTION) {
        const more = el('a', { class: 'card card-more', href: `/?domain=${dom}` + (lang.peek() !== 'zh' ? `&lang=${lang.peek()}` : '') }) as HTMLAnchorElement;
        more.textContent = moreLabel[lang.peek()](list.length - PER_SECTION);
        more.onclick = (ev) => { ev.preventDefault(); goDomain(dom); };
        row.appendChild(more);
      }
      root.appendChild(row);
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
