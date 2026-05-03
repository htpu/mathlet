export type Lang = 'zh' | 'en' | 'es';
export const LANGS: Lang[] = ['zh', 'en', 'es'];
export const LANG_LABELS: Record<Lang, string> = { zh: '中', en: 'EN', es: 'ES' };
export const LANG_FULL: Record<Lang, string> = { zh: '中文', en: 'English', es: 'Español' };

import type { Domain } from '../formulas/types';

export const UI: Record<Lang, Record<string, string>> = {
  zh: {
    siteTagline: '740 个公式 · 点开任意一个开始把玩',
    searchPlaceholder: 'search formulas...',
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
    docTitle: 'MATHLET · 740 个公式可视化',
    docDescription: '740 个数学公式的交互式 2D/3D 可视化。极客向，按 L1-L5 分级，27 个领域全覆盖。',
    heroTitle: '把公式变成可玩的可视化',
    heroBody: '27 领域 · L1-L5 · 拖动滑块即时看图',
    aboutLink: 'About',
    feedbackLink: 'Feedback',
    aboutTitle: '关于 MATHLET',
    aboutBody: 'mathlet 是一个开源的交互式数学公式可视化集合。每个公式都用 TypeScript + Canvas/Three.js 写成，参数实时同步到 URL，可分享。代码与公式贡献欢迎 PR。',
  },
  en: {
    siteTagline: '740 formulas · pick one and start playing',
    searchPlaceholder: 'search formulas...',
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
    docTitle: 'MATHLET · 740 formula visualizations',
    docDescription: 'Interactive 2D/3D visualization of 740 mathematical formulas. Geek-oriented, L1-L5 difficulty, 27 domains.',
    heroTitle: 'Math formulas you can play with',
    heroBody: '27 domains · L1–L5 · drag a slider, watch it change',
    aboutLink: 'About',
    feedbackLink: 'Feedback',
    aboutTitle: 'About MATHLET',
    aboutBody: 'mathlet is an open-source collection of interactive math formula visualizations. Each formula is written in TypeScript with Canvas or Three.js, with parameters synced to the URL for sharing. PRs for new formulas and code welcome.',
  },
  es: {
    siteTagline: '740 fórmulas · elige una y empieza a jugar',
    searchPlaceholder: 'buscar fórmulas...',
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
    docTitle: 'MATHLET · 740 visualizaciones de fórmulas',
    docDescription: 'Visualización interactiva 2D/3D de 740 fórmulas matemáticas. Para entusiastas, dificultad L1-L5, 27 dominios.',
    heroTitle: 'Fórmulas con las que puedes jugar',
    heroBody: '27 dominios · L1–L5 · mueve un control, ve el cambio',
    aboutLink: 'Acerca',
    feedbackLink: 'Feedback',
    aboutTitle: 'Acerca de MATHLET',
    aboutBody: 'mathlet es una colección open-source de visualizaciones interactivas de fórmulas matemáticas. Cada fórmula está escrita en TypeScript con Canvas o Three.js, con parámetros sincronizados a la URL para compartir. Se agradecen PRs.',
  },
};

export const DOMAIN_LABELS_I18N: Record<Lang, Record<Domain, string>> = {
  zh: {
    algebra: '代数 / 三角 / 复数', geometry: '几何 / 解析几何', calculus: '微积分 / 级数',
    linalg: '线性代数', ode: 'ODE / 动力系统', pde: 'PDE / 物理场',
    probability: '概率 / 统计', fractal: '分形 / 混沌', topology: '拓扑 / 流形',
    numbertheory: '数论 / 离散', signals: '信号 / 变换', optimization: '优化 / 数值',
    vectorfield: '向量场 / 微分几何', cellular: '元胞自动机 / 涌现', biology: '生物 / 基因 / 分子', chemistry: '化学 / 反应 / 分子', quantum: '量子 / 波函数', graph: '图论 / 算法', crypto: '密码 / 编码', music: '音乐 / 声学', gr: '广义相对论 / 微分几何', astronomy: '天文 / 轨道 / 恒星', economics: '经济 / 金融 / 增长', statmech: '统计物理 / 系综', fluid: '流体力学 / 涡 / 阻力', chaos: '混沌 / 离散映射', gametheory: '博弈论 / 演化',
  },
  en: {
    algebra: 'Algebra / Trig / Complex', geometry: 'Geometry / Analytic',
    calculus: 'Calculus / Series', linalg: 'Linear Algebra',
    ode: 'ODE / Dynamics', pde: 'PDE / Fields',
    probability: 'Probability / Statistics', fractal: 'Fractals / Chaos',
    topology: 'Topology / Manifolds', numbertheory: 'Number Theory / Discrete',
    signals: 'Signals / Transforms', optimization: 'Optimization / Numerics',
    vectorfield: 'Vector Fields / Diff Geo', cellular: 'Cellular Automata / Emergence', biology: 'Biology / Genes / Molecules', chemistry: 'Chemistry / Reactions / Molecules', quantum: 'Quantum / Wavefunctions', graph: 'Graph Theory / Algorithms', crypto: 'Cryptography / Coding', music: 'Music / Acoustics', gr: 'General Relativity / Diff Geo', astronomy: 'Astronomy / Orbits / Stars', economics: 'Economics / Finance / Growth', statmech: 'Statistical Mechanics / Ensembles', fluid: 'Fluid Dynamics / Vortex / Drag', chaos: 'Chaos / Discrete Maps', gametheory: 'Game Theory / Evolution',
  },
  es: {
    algebra: 'Álgebra / Trig / Complejos', geometry: 'Geometría / Analítica',
    calculus: 'Cálculo / Series', linalg: 'Álgebra Lineal',
    ode: 'EDO / Dinámica', pde: 'EDP / Campos',
    probability: 'Probabilidad / Estadística', fractal: 'Fractales / Caos',
    topology: 'Topología / Variedades', numbertheory: 'Teoría de Números / Discreta',
    signals: 'Señales / Transformadas', optimization: 'Optimización / Numérico',
    vectorfield: 'Campos Vectoriales / Geo Dif', cellular: 'Autómatas Celulares / Emergencia', biology: 'Biología / Genes / Moléculas', chemistry: 'Química / Reacciones / Moléculas', quantum: 'Cuántica / Funciones de onda', graph: 'Teoría de Grafos / Algoritmos', crypto: 'Criptografía / Codificación', music: 'Música / Acústica', gr: 'Relatividad General / Geo Dif', astronomy: 'Astronomía / Órbitas / Estrellas', economics: 'Economía / Finanzas / Crecimiento', statmech: 'Mecánica Estadística / Ensambles', fluid: 'Dinámica de Fluidos / Vórtice / Arrastre', chaos: 'Caos / Mapas Discretos', gametheory: 'Teoría de Juegos / Evolución',
  },
};

const STORAGE_KEY = 'mathlet:lang';

export function detectLang(): Lang {
  // URL ?lang= wins so shared/deep links land in the correct language.
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
