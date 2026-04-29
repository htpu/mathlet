import type { Formula, FormulaMeta, ParamSpec, ParamValues } from '../formulas/types';
import { clear, drawAxes, setupView, type View2D } from '../render/canvas2d';
import { rk4 } from '../render/numerics';

export interface ODE2DOpts {
  meta: Omit<FormulaMeta, 'surface' | 'animated'>;
  params: ParamSpec[];
  derivs: (p: ParamValues) => (t: number, y: number[]) => number[];
  init: (p: ParamValues) => [number, number][];
  view?: View2D;
  step?: number;
  trail?: number;
  colors?: string[];
}

export function ode2d(opts: ODE2DOpts): Formula {
  const view: View2D = opts.view ?? { cx: 0, cy: 0, scale: 40 };
  let states: number[][] = [];
  let trails: number[][][] = [];
  let lastP = '';
  return {
    meta: { ...opts.meta, surface: 'canvas2d', animated: true },
    params: opts.params,
    render(s, p, t) {
      if (s.kind !== 'canvas2d') return;
      const sig = JSON.stringify(p);
      if (sig !== lastP) {
        states = opts.init(p).map(([x, y]) => [x, y]);
        trails = states.map(st => [[...st]]);
        lastP = sig;
      }
      const f = opts.derivs(p);
      const h = opts.step ?? 0.02;
      const stepsPerFrame = 3;
      for (let k = 0; k < stepsPerFrame; k++) {
        for (let i = 0; i < states.length; i++) {
          states[i] = rk4(f, t, states[i], h);
          trails[i].push([...states[i]]);
          if (trails[i].length > (opts.trail ?? 600)) trails[i].shift();
        }
      }
      clear(s);
      setupView(s, view);
      drawAxes(s, view);
      const colors = opts.colors ?? ['#ffb454', '#39bae6', '#c2d94c', '#f07178', '#d2a6ff'];
      for (let i = 0; i < trails.length; i++) {
        s.ctx.strokeStyle = colors[i % colors.length];
        s.ctx.lineWidth = 1.5 / view.scale;
        s.ctx.beginPath();
        const tr = trails[i];
        for (let j = 0; j < tr.length; j++) {
          const [x, y] = tr[j];
          if (j === 0) s.ctx.moveTo(x, y); else s.ctx.lineTo(x, y);
        }
        s.ctx.stroke();
        s.ctx.fillStyle = colors[i % colors.length];
        s.ctx.beginPath();
        s.ctx.arc(states[i][0], states[i][1], 4 / view.scale, 0, Math.PI * 2);
        s.ctx.fill();
      }
    },
  };
}
