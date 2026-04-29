import type { Formula, FormulaMeta, ParamSpec, ParamValues } from '../formulas/types';
import { clear, drawAxes, setupView, type View2D } from '../render/canvas2d';
import { gaussian, mulberry32 } from '../render/numerics';

export interface RWalkOpts {
  meta: Omit<FormulaMeta, 'surface' | 'animated'>;
  params: ParamSpec[];
  step: (p: ParamValues, prev: [number, number], rand: () => number) => [number, number];
  count?: number;
  steps?: number;
  view?: View2D;
}

export function rwalk(opts: RWalkOpts): Formula {
  const view: View2D = opts.view ?? { cx: 0, cy: 0, scale: 12 };
  let trails: [number, number][][] = [];
  let lastP = '';
  let seed = 1;
  return {
    meta: { ...opts.meta, surface: 'canvas2d', animated: true },
    params: opts.params,
    render(s, p) {
      if (s.kind !== 'canvas2d') return;
      const sig = JSON.stringify(p);
      if (sig !== lastP) {
        const c = (p['walks'] as number) ?? opts.count ?? 5;
        trails = Array.from({ length: c }, () => [[0, 0]] as [number, number][]);
        lastP = sig;
        seed = 1;
      }
      const rand = mulberry32(seed++);
      const max = opts.steps ?? 1500;
      for (const tr of trails) {
        if (tr.length < max) tr.push(opts.step(p, tr[tr.length - 1], rand));
      }
      clear(s);
      setupView(s, view);
      drawAxes(s, view);
      for (let i = 0; i < trails.length; i++) {
        s.ctx.strokeStyle = `hsl(${i * 60}, 70%, 60%)`;
        s.ctx.lineWidth = 1 / view.scale;
        s.ctx.beginPath();
        for (let j = 0; j < trails[i].length; j++) {
          const [x, y] = trails[i][j];
          if (j === 0) s.ctx.moveTo(x, y); else s.ctx.lineTo(x, y);
        }
        s.ctx.stroke();
      }
    },
  };
}

export { gaussian, mulberry32 };
