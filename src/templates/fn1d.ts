import type { Formula, FormulaMeta, ParamSpec, ParamValues } from '../formulas/types';
import { clear, drawAxes, plotFn, setupView, type View2D } from '../render/canvas2d';

export interface Fn1DOpts {
  meta: Omit<FormulaMeta, 'surface'>;
  params: ParamSpec[];
  fn: (p: ParamValues) => (x: number) => number;
  view?: View2D;
  fns?: { color: string; fn: (p: ParamValues) => (x: number) => number }[];
}

export function fn1d(opts: Fn1DOpts): Formula {
  const view: View2D = opts.view ?? { cx: 0, cy: 0, scale: 50 };
  return {
    meta: { ...opts.meta, surface: 'canvas2d' },
    params: opts.params,
    render(s, p) {
      if (s.kind !== 'canvas2d') return;
      clear(s);
      setupView(s, view);
      drawAxes(s, view);
      if (opts.fns) {
        for (const f of opts.fns) plotFn(s, view, f.fn(p), f.color);
      } else {
        plotFn(s, view, opts.fn(p), '#ffb454');
      }
    },
  };
}
