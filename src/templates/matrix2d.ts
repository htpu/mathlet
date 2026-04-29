import type { Formula, FormulaMeta, ParamSpec, ParamValues } from '../formulas/types';
import { clear, drawAxes, setupView, type View2D } from '../render/canvas2d';

export interface Matrix2DOpts {
  meta: Omit<FormulaMeta, 'surface'>;
  params: ParamSpec[];
  matrix: (p: ParamValues) => [number, number, number, number];
  view?: View2D;
}

export function matrix2d(opts: Matrix2DOpts): Formula {
  const view: View2D = opts.view ?? { cx: 0, cy: 0, scale: 50 };
  return {
    meta: { ...opts.meta, surface: 'canvas2d' },
    params: opts.params,
    render(s, p) {
      if (s.kind !== 'canvas2d') return;
      clear(s);
      setupView(s, view);
      drawAxes(s, view);
      const [a, b, c, d] = opts.matrix(p);
      const ctx = s.ctx;

      // Original grid (faint)
      ctx.strokeStyle = '#1f2430';
      ctx.lineWidth = 1 / view.scale;
      ctx.beginPath();
      for (let x = -5; x <= 5; x++) { ctx.moveTo(x, -5); ctx.lineTo(x, 5); }
      for (let y = -5; y <= 5; y++) { ctx.moveTo(-5, y); ctx.lineTo(5, y); }
      ctx.stroke();

      // Transformed grid
      ctx.strokeStyle = '#39bae6';
      ctx.lineWidth = 1.5 / view.scale;
      ctx.beginPath();
      for (let x = -5; x <= 5; x++) {
        let first = true;
        for (let y = -5; y <= 5; y += 0.5) {
          const tx = a * x + b * y;
          const ty = c * x + d * y;
          if (first) { ctx.moveTo(tx, ty); first = false; } else ctx.lineTo(tx, ty);
        }
      }
      for (let y = -5; y <= 5; y++) {
        let first = true;
        for (let x = -5; x <= 5; x += 0.5) {
          const tx = a * x + b * y;
          const ty = c * x + d * y;
          if (first) { ctx.moveTo(tx, ty); first = false; } else ctx.lineTo(tx, ty);
        }
      }
      ctx.stroke();

      // basis vectors
      const arrow = (x1: number, y1: number, x2: number, y2: number, color: string) => {
        ctx.strokeStyle = color; ctx.fillStyle = color;
        ctx.lineWidth = 3 / view.scale;
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
        const ang = Math.atan2(y2 - y1, x2 - x1);
        const ah = 0.15;
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x2 - ah * Math.cos(ang - 0.4), y2 - ah * Math.sin(ang - 0.4));
        ctx.lineTo(x2 - ah * Math.cos(ang + 0.4), y2 - ah * Math.sin(ang + 0.4));
        ctx.closePath(); ctx.fill();
      };
      arrow(0, 0, a, c, '#ffb454');
      arrow(0, 0, b, d, '#c2d94c');
    },
  };
}
