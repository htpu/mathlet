import type { Formula, FormulaMeta, ParamSpec, ParamValues } from '../formulas/types';
import { clear, drawAxes, plotParam, setupView, type View2D } from '../render/canvas2d';

export interface Param2DOpts {
  meta: Omit<FormulaMeta, 'surface'>;
  params: ParamSpec[];
  fn: (p: ParamValues) => (t: number) => [number, number];
  tRange: (p: ParamValues) => [number, number];
  view?: View2D;
  samples?: number;
  color?: string;
}

export function param2d(opts: Param2DOpts): Formula {
  const view: View2D = opts.view ?? { cx: 0, cy: 0, scale: 80 };
  return {
    meta: { ...opts.meta, surface: 'canvas2d' },
    params: opts.params,
    render(s, p) {
      if (s.kind !== 'canvas2d') return;
      clear(s);
      setupView(s, view);
      drawAxes(s, view);
      const [tMin, tMax] = opts.tRange(p);
      plotParam(s, view, opts.fn(p), tMin, tMax, opts.color ?? '#ffb454', opts.samples ?? 2000);
    },
  };
}
