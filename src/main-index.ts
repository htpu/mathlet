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
  const u = UI[lang.peek()];
  document.title = u.docTitle;
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
  const oldSwitcher = bar.querySelector('.lang-switcher');
  if (oldSwitcher) oldSwitcher.remove();
  const sw = el('div', { class: 'lang-switcher' });
  for (const l of LANGS) {
    const b = el('button', { class: 'lang-btn' + (l === lang.peek() ? ' active' : '') }, LANG_LABELS[l]) as HTMLButtonElement;
    b.dataset.lang = l;
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
    const apply = () => b.classList.toggle('active', domains.peek().has(d as Domain));
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
    const apply = () => b.classList.toggle('active', levels.peek().has(lv));
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
    const apply = () => b.classList.toggle('active', surfaces.peek().has(sf));
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

function renderGrid() {
  const root = document.getElementById('grid')!;
  const items = all.filter(matches);
  const labels = DOMAIN_LABELS_I18N[lang.peek()];
  root.replaceChildren();
  if (items.length === 0) {
    root.appendChild(el('div', { class: 'empty' }, UI[lang.peek()].noMatch));
    return;
  }
  for (const e of items) {
    const tr = tFormula(e.slug, { title: e.title, blurb: e.blurb });
    const a = document.createElement('a');
    a.className = 'card';
    a.href = `/f/${e.slug}.html` + (lang.peek() !== 'zh' ? `?lang=${lang.peek()}` : '');

    const head = el('div', { class: 'head' });
    head.appendChild(el('div', { class: 'title' }, tr.title));
    head.appendChild(el('div', { class: 'stars' }, '⭐'.repeat(e.level)));
    a.appendChild(head);

    const thumb = el('img', {
      class: 'thumb',
      loading: 'lazy',
      decoding: 'async',
      src: `/thumbs/${e.slug}.webp`,
      alt: '',
      width: '320',
      height: '240',
    });
    (thumb as HTMLImageElement).onerror = () => { thumb.style.display = 'none'; };
    a.appendChild(thumb);

    const tex = el('div', { class: 'tex' });
    try { tex.innerHTML = katex.renderToString(e.tex, { throwOnError: false, output: 'html' }); }
    catch { const code = el('code'); code.textContent = e.tex; tex.appendChild(code); }
    a.appendChild(tex);

    a.appendChild(el('div', { class: 'blurb' }, tr.blurb));

    const foot = el('div', { class: 'foot' });
    foot.appendChild(el('span', { class: 'domain-tag' }, labels[e.domain]));
    foot.appendChild(el('span', { class: 'surf-tag' }, e.surface === 'three' ? UI[lang.peek()].surface3d : UI[lang.peek()].surface2d));
    a.appendChild(foot);

    root.appendChild(a);
  }
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
qInput.addEventListener('input', e => { query.value = (e.target as HTMLInputElement).value; syncURL(); });

document.addEventListener('keydown', e => {
  if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
    e.preventDefault(); qInput.focus();
  }
});
