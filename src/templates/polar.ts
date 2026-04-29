import type { Formula, FormulaMeta, ParamSpec, ParamValues } from '../formulas/types';
import { clear, drawAxes, plotParam, setupView, type View2D } from '../render/canvas2d';

export interface PolarOpts {
  meta: Omit<FormulaMeta, 'surface'>;
  params: ParamSpec[];
  r: (p: ParamValues) => (theta: number) => number;
  thetaRange?: (p: ParamValues) => [number, number];
  view?: View2D;
  color?: string;
  samples?: number;
}

export function polar(opts: PolarOpts): Formula {
  const view: View2D = opts.view ?? { cx: 0, cy: 0, scale: 60 };
  return {
    meta: { ...opts.meta, surface: 'canvas2d' },
    params: opts.params,
    render(s, p) {
      if (s.kind !== 'canvas2d') return;
      clear(s);
      setupView(s, view);
      drawAxes(s, view);
      const [tMin, tMax] = opts.thetaRange ? opts.thetaRange(p) : [0, Math.PI * 2];
      const rfn = opts.r(p);
      plotParam(s, view, t => { const r = rfn(t); return [r * Math.cos(t), r * Math.sin(t)]; }, tMin, tMax, opts.color ?? '#f07178', opts.samples ?? 3000);
    },
  };
}
