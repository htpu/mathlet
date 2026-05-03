export type Domain =
  | 'algebra' | 'geometry' | 'calculus' | 'linalg' | 'ode' | 'pde'
  | 'probability' | 'fractal' | 'topology' | 'numbertheory'
  | 'signals' | 'optimization' | 'vectorfield' | 'cellular'
  | 'biology' | 'chemistry'
  | 'quantum' | 'graph' | 'crypto' | 'music' | 'gr' | 'astronomy' | 'economics';

export const DOMAIN_LABELS: Record<Domain, string> = {
  algebra: '代数 / 三角 / 复数',
  geometry: '几何 / 解析几何',
  calculus: '微积分 / 级数',
  linalg: '线性代数',
  ode: 'ODE / 动力系统',
  pde: 'PDE / 物理场',
  probability: '概率 / 统计',
  fractal: '分形 / 混沌',
  topology: '拓扑 / 流形',
  numbertheory: '数论 / 离散',
  signals: '信号 / 变换',
  optimization: '优化 / 数值',
  vectorfield: '向量场 / 微分几何',
  cellular: '元胞自动机 / 涌现',
  biology: '生物 / 基因 / 分子',
  chemistry: '化学 / 反应 / 分子',
  quantum: '量子 / 波函数',
  graph: '图论 / 算法',
  crypto: '密码 / 编码',
  music: '音乐 / 声学',
  gr: '广义相对论 / 微分几何',
  astronomy: '天文 / 轨道 / 恒星',
  economics: '经济 / 金融 / 增长',
};

export type Level = 1 | 2 | 3 | 4 | 5;

export type ParamSpec =
  | { kind: 'number'; key: string; label: string; min: number; max: number; step: number; default: number; logScale?: boolean }
  | { kind: 'int'; key: string; label: string; min: number; max: number; default: number }
  | { kind: 'bool'; key: string; label: string; default: boolean }
  | { kind: 'select'; key: string; label: string; options: { value: string; label: string }[]; default: string }
  | { kind: 'color'; key: string; label: string; default: string }
  | { kind: 'text'; key: string; label: string; default: string; placeholder?: string };

export type SurfaceKind = 'canvas2d' | 'three';

export interface Canvas2DSurface {
  kind: 'canvas2d';
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
  dpr: number;
}

export interface ThreeSurface {
  kind: 'three';
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
}

export type Surface = Canvas2DSurface | ThreeSurface;

export interface FormulaMeta {
  slug: string;
  title: string;
  domain: Domain;
  level: Level;
  tex: string;
  blurb: string;
  notes?: string;
  surface: SurfaceKind;
  animated?: boolean;
  tags?: string[];
}

export type ParamValues = Record<string, number | boolean | string>;

export interface Formula {
  meta: FormulaMeta;
  params: ParamSpec[];
  init?(surface: Surface, p: ParamValues): void;
  render(surface: Surface, p: ParamValues, t: number): void;
  dispose?(): void;
}

export function n(key: string, label: string, def: number, min: number, max: number, step = (max - min) / 100, logScale = false): ParamSpec {
  return { kind: 'number', key, label, default: def, min, max, step, logScale };
}
export function i(key: string, label: string, def: number, min: number, max: number): ParamSpec {
  return { kind: 'int', key, label, default: def, min, max };
}
export function b(key: string, label: string, def: boolean): ParamSpec {
  return { kind: 'bool', key, label, default: def };
}
export function s(key: string, label: string, def: string, options: { value: string; label: string }[]): ParamSpec {
  return { kind: 'select', key, label, default: def, options };
}
export function c(key: string, label: string, def: string): ParamSpec {
  return { kind: 'color', key, label, default: def };
}
export function t(key: string, label: string, def: string, placeholder?: string): ParamSpec {
  return { kind: 'text', key, label, default: def, placeholder };
}
