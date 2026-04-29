import type { Formula, FormulaMeta, ParamSpec, ParamValues } from '../formulas/types';
import { mulberry32 } from '../render/numerics';

export interface IFSMap { a: number; b: number; c: number; d: number; e: number; f: number; w: number; }

export interface IFSOpts {
  meta: Omit<FormulaMeta, 'surface'>;
  params: ParamSpec[];
  maps: (p: ParamValues) => IFSMap[];
  view: { cx: number; cy: number; scale: number };
  iterations?: number;
  color?: string;
}

export function ifs(opts: IFSOpts): Formula {
  return {
    meta: { ...opts.meta, surface: 'canvas2d' },
    params: opts.params,
    render(s, p) {
      if (s.kind !== 'canvas2d') return;
      const { ctx, width, height, dpr } = s;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = '#0a0e14';
      ctx.fillRect(0, 0, width, height);
      const maps = opts.maps(p);
      const total = maps.reduce((a, m) => a + m.w, 0);
      let acc = 0;
      const cum = maps.map(m => (acc += m.w / total));
      const rand = mulberry32(42);
      let x = 0, y = 0;
      const N = opts.iterations ?? 80000;
      const v = opts.view;
      const sx = (xi: number) => width / 2 + (xi - v.cx) * v.scale;
      const sy = (yi: number) => height / 2 - (yi - v.cy) * v.scale;
      ctx.fillStyle = opts.color ?? '#c2d94c';
      for (let i = 0; i < N; i++) {
        const r = rand();
        let k = 0;
        while (k < cum.length - 1 && r > cum[k]) k++;
        const m = maps[k];
        const nx = m.a * x + m.b * y + m.e;
        const ny = m.c * x + m.d * y + m.f;
        x = nx; y = ny;
        if (i > 20) ctx.fillRect(sx(x), sy(y), 1, 1);
      }
    },
  };
}
