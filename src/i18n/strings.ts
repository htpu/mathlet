export type Lang = 'zh' | 'en' | 'es';
export const LANGS: Lang[] = ['zh', 'en', 'es'];
export const LANG_LABELS: Record<Lang, string> = { zh: '中文', en: 'English', es: 'Español' };

import type { Domain } from '../formulas/types';

export const UI: Record<Lang, Record<string, string>> = {
  zh: {
    siteTagline: '400 个公式可视化',
    searchPlaceholder: '/ 搜索公式...',
    noMatch: '// 没有匹配的公式',
    notFound: '// 公式未找到',
    backToIndex: '← 索引',
    studyMode: '📖 学习',
    playMode: '🎮 把玩',
    reset: 'reset',
    snapshot: '📸',
    needsJS: '该页面需要 JavaScript 进行交互式可视化。',
    surface2d: '2D',
    surface3d: '3D',
    docTitle: 'mathlet · 400 个公式可视化',
    docDescription: '400 个数学公式的交互式 2D/3D 可视化。极客向，按 L1-L5 分级，14 个领域全覆盖。',
  },
  en: {
    siteTagline: '400 formula visualizations',
    searchPlaceholder: '/ search formulas...',
    noMatch: '// no matching formulas',
    notFound: '// formula not found',
    backToIndex: '← index',
    studyMode: '📖 Study',
    playMode: '🎮 Play',
    reset: 'reset',
    snapshot: '📸',
    needsJS: 'This page requires JavaScript for interactive visualization.',
    surface2d: '2D',
    surface3d: '3D',
    docTitle: 'mathlet · 400 formula visualizations',
    docDescription: 'Interactive 2D/3D visualization of 400 mathematical formulas. Geek-oriented, L1-L5 difficulty, 14 domains.',
  },
  es: {
    siteTagline: '400 visualizaciones de fórmulas',
    searchPlaceholder: '/ buscar fórmulas...',
    noMatch: '// sin fórmulas coincidentes',
    notFound: '// fórmula no encontrada',
    backToIndex: '← índice',
    studyMode: '📖 Estudio',
    playMode: '🎮 Jugar',
    reset: 'reset',
    snapshot: '📸',
    needsJS: 'Esta página requiere JavaScript para la visualización interactiva.',
    surface2d: '2D',
    surface3d: '3D',
    docTitle: 'mathlet · 400 visualizaciones de fórmulas',
    docDescription: 'Visualización interactiva 2D/3D de 400 fórmulas matemáticas. Para entusiastas, dificultad L1-L5, 14 dominios.',
  },
};

export const DOMAIN_LABELS_I18N: Record<Lang, Record<Domain, string>> = {
  zh: {
    algebra: '代数 / 三角 / 复数', geometry: '几何 / 解析几何', calculus: '微积分 / 级数',
    linalg: '线性代数', ode: 'ODE / 动力系统', pde: 'PDE / 物理场',
    probability: '概率 / 统计', fractal: '分形 / 混沌', topology: '拓扑 / 流形',
    numbertheory: '数论 / 离散', signals: '信号 / 变换', optimization: '优化 / 数值',
    vectorfield: '向量场 / 微分几何', cellular: '元胞自动机 / 涌现',
  },
  en: {
    algebra: 'Algebra / Trig / Complex', geometry: 'Geometry / Analytic',
    calculus: 'Calculus / Series', linalg: 'Linear Algebra',
    ode: 'ODE / Dynamics', pde: 'PDE / Fields',
    probability: 'Probability / Statistics', fractal: 'Fractals / Chaos',
    topology: 'Topology / Manifolds', numbertheory: 'Number Theory / Discrete',
    signals: 'Signals / Transforms', optimization: 'Optimization / Numerics',
    vectorfield: 'Vector Fields / Diff Geo', cellular: 'Cellular Automata / Emergence',
  },
  es: {
    algebra: 'Álgebra / Trig / Complejos', geometry: 'Geometría / Analítica',
    calculus: 'Cálculo / Series', linalg: 'Álgebra Lineal',
    ode: 'EDO / Dinámica', pde: 'EDP / Campos',
    probability: 'Probabilidad / Estadística', fractal: 'Fractales / Caos',
    topology: 'Topología / Variedades', numbertheory: 'Teoría de Números / Discreta',
    signals: 'Señales / Transformadas', optimization: 'Optimización / Numérico',
    vectorfield: 'Campos Vectoriales / Geo Dif', cellular: 'Autómatas Celulares / Emergencia',
  },
};

const STORAGE_KEY = 'mathlet:lang';

export function detectLang(): Lang {
  if (typeof location !== 'undefined') {
    const url = new URL(location.href);
    const u = url.searchParams.get('lang');
    if (u === 'en' || u === 'es' || u === 'zh') return u;
  }
  if (typeof localStorage !== 'undefined') {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'en' || v === 'es' || v === 'zh') return v;
  }
  if (typeof navigator !== 'undefined') {
    const n = (navigator.language || '').toLowerCase();
    if (n.startsWith('es')) return 'es';
    if (n.startsWith('zh')) return 'zh';
    return 'en';
  }
  return 'en';
}

export function setLang(l: Lang) {
  if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, l);
  if (typeof document !== 'undefined') document.documentElement.lang = l === 'zh' ? 'zh-CN' : l;
}
