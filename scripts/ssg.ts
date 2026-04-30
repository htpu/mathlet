import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, join, dirname } from 'node:path';
import { JSDOM } from 'jsdom';
import katex from 'katex';

const ROOT = resolve(import.meta.dirname, '..');
const DIST = join(ROOT, 'dist');

interface RegistryEntry {
  slug: string; title: string; domain: string; level: number;
  tex: string; blurb: string; surface: string; animated: boolean;
}

const DOMAIN_LABELS: Record<string, string> = {
  algebra: '代数 / 三角 / 复数', geometry: '几何 / 解析几何', calculus: '微积分 / 级数',
  linalg: '线性代数', ode: 'ODE / 动力系统', pde: 'PDE / 物理场',
  probability: '概率 / 统计', fractal: '分形 / 混沌', topology: '拓扑 / 流形',
  numbertheory: '数论 / 离散', signals: '信号 / 变换', optimization: '优化 / 数值',
  vectorfield: '向量场 / 微分几何', cellular: '元胞自动机 / 涌现',
};

const regSrc = readFileSync(join(ROOT, 'src/formulas/_registry.generated.ts'), 'utf8');
const REGISTRY: RegistryEntry[] = [];
const reBlock = /\{\s*slug:\s*'([^']+)',\s*title:\s*'((?:[^'\\]|\\.)*)',\s*domain:\s*'([^']+)'[^,]*,\s*level:\s*(\d+)[^,]*,\s*tex:\s*'((?:[^'\\]|\\.)*)',\s*blurb:\s*'((?:[^'\\]|\\.)*)',\s*surface:\s*'([^']+)'[^,]*,\s*animated:\s*(true|false)\s*\}/g;
let m: RegExpExecArray | null;
while ((m = reBlock.exec(regSrc)) !== null) {
  REGISTRY.push({
    slug: m[1],
    title: m[2].replace(/\\'/g, "'").replace(/\\\\/g, '\\'),
    domain: m[3],
    level: parseInt(m[4]),
    tex: m[5].replace(/\\'/g, "'").replace(/\\\\/g, '\\'),
    blurb: m[6].replace(/\\'/g, "'").replace(/\\\\/g, '\\'),
    surface: m[7],
    animated: m[8] === 'true',
  });
}
console.log(`ssg: parsed ${REGISTRY.length} entries`);

if (REGISTRY.length === 0) {
  console.error('ssg: empty registry — abort');
  process.exit(1);
}

function inject(html: string, headExtra: string, bodyHook?: string): string {
  let out = html;
  if (headExtra) out = out.replace('</head>', `${headExtra}</head>`);
  if (bodyHook) out = out.replace('</body>', `${bodyHook}</body>`);
  return out;
}

function renderKaTeX(tex: string, displayMode = false): string {
  try { return katex.renderToString(tex, { throwOnError: false, displayMode, output: 'html' }); }
  catch { return `<code>${tex}</code>`; }
}

function escape(s: string) { return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!)); }

// Index page: prerender card grid into the index.html in dist
const indexHtml = readFileSync(join(DIST, 'index.html'), 'utf8');
const dom = new JSDOM(indexHtml);
const doc = dom.window.document;
const grid = doc.querySelector('#grid')!;
for (const e of REGISTRY) {
  const a = doc.createElement('a');
  a.className = 'card';
  a.href = `/f/${e.slug}.html`;
  a.setAttribute('data-domain', e.domain);
  a.setAttribute('data-level', String(e.level));
  a.setAttribute('data-surface', e.surface);
  a.innerHTML = `
    <div class="head"><div class="title">${escape(e.title)}</div><div class="stars">${'⭐'.repeat(e.level)}</div></div>
    <div class="tex">${renderKaTeX(e.tex)}</div>
    <div class="blurb">${escape(e.blurb)}</div>
    <div class="foot"><span class="domain-tag">${escape(DOMAIN_LABELS[e.domain] ?? e.domain)}</span><span class="surf-tag">${e.surface === 'three' ? '3D' : '2D'}</span></div>`;
  grid.appendChild(a);
}
writeFileSync(join(DIST, 'index.html'), dom.serialize());
console.log('ssg: index.html prerendered');

// Detail pages: copy detail.html → f/<slug>.html with title/meta prefilled
const SITE = 'https://math.htpu.net';
const detailTpl = readFileSync(join(DIST, 'detail.html'), 'utf8');
mkdirSync(join(DIST, 'f'), { recursive: true });
for (const e of REGISTRY) {
  const ddom = new JSDOM(detailTpl);
  const dd = ddom.window.document;
  const titleEl = dd.querySelector('title')!;
  const fullTitle = `${e.title} · mathlet`;
  titleEl.textContent = fullTitle;
  const url = `${SITE}/f/${e.slug}.html`;
  const ogImage = `${SITE}/thumbs/${e.slug}.webp`;
  const metas: [string, string, string][] = [
    ['name', 'description', e.blurb],
    ['link', 'canonical', url],
    ['property', 'og:title', fullTitle],
    ['property', 'og:description', e.blurb],
    ['property', 'og:type', 'article'],
    ['property', 'og:url', url],
    ['property', 'og:image', ogImage],
    ['property', 'og:site_name', 'mathlet'],
    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:title', fullTitle],
    ['name', 'twitter:description', e.blurb],
    ['name', 'twitter:image', ogImage],
    ['name', 'keywords', `${e.title}, ${DOMAIN_LABELS[e.domain] ?? e.domain}, math, visualization, formula, ${e.surface}, mathlet`],
  ];
  for (const [k, v, c] of metas) {
    if (k === 'link') {
      const link = dd.createElement('link');
      link.setAttribute('rel', v);
      link.setAttribute('href', c);
      dd.head.appendChild(link);
    } else {
      const m = dd.createElement('meta');
      m.setAttribute(k, v);
      m.setAttribute('content', c);
      dd.head.appendChild(m);
    }
  }
  const ld = dd.createElement('script');
  ld.setAttribute('type', 'application/ld+json');
  ld.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: e.title,
    description: e.blurb,
    image: ogImage,
    url,
    isPartOf: { '@type': 'WebSite', name: 'mathlet', url: SITE },
    inLanguage: ['zh-CN', 'en', 'es'],
    keywords: [e.title, DOMAIN_LABELS[e.domain] ?? e.domain, 'math', 'visualization'],
  });
  dd.head.appendChild(ld);
  // Server-side noscript fallback with formula info
  const noscript = dd.createElement('noscript');
  noscript.innerHTML = `<div style="padding:40px;color:#cbccc6"><h1>${escape(e.title)}</h1><p>${escape(e.blurb)}</p><div style="padding:20px;background:#0d1017;border-left:3px solid #ffb454">${renderKaTeX(e.tex, true)}</div><p style="color:#707a8c">该页面需要 JavaScript 进行交互式可视化。</p></div>`;
  dd.body.appendChild(noscript);
  writeFileSync(join(DIST, 'f', `${e.slug}.html`), ddom.serialize());
}
console.log(`ssg: ${REGISTRY.length} detail pages prerendered`);

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const sitemapUrls = [
  `<url><loc>${SITE}/</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>`,
  ...REGISTRY.map(e => `<url><loc>${SITE}/f/${e.slug}.html</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`),
];
writeFileSync(join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.join('\n')}\n</urlset>\n`);
console.log(`ssg: sitemap.xml (${sitemapUrls.length} urls)`);

// 404 page
const notFound = `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><title>404 · mathlet</title><link rel="stylesheet" href="/assets/theme.css"></head><body style="background:#0a0e14;color:#cbccc6;font-family:ui-monospace,monospace;display:flex;align-items:center;justify-content:center;height:100vh;flex-direction:column;gap:20px"><div style="font-size:48px;color:#ffb454">404</div><div>// 公式未找到</div><a href="/" style="color:#39bae6">← 回索引</a></body></html>`;
writeFileSync(join(DIST, '404.html'), notFound);

// Cloudflare Pages: redirect /detail.html-style URLs and ensure SPA fallback
writeFileSync(join(DIST, '_redirects'),
`/detail /404 301
/domain/* /index.html 200
/level/* /index.html 200
/surface/* /index.html 200
`);
writeFileSync(join(DIST, '_headers'), `/assets/*
  Cache-Control: public, max-age=31536000, immutable
/f/*
  Cache-Control: public, max-age=300
/
  Cache-Control: public, max-age=300
`);
console.log('ssg: 404 + headers + redirects written');
