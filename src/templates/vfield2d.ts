import type { Formula, FormulaMeta, ParamSpec, ParamValues } from '../formulas/types';
import { clear, drawAxes, setupView, type View2D } from '../render/canvas2d';

export interface VField2DOpts {
  meta: Omit<FormulaMeta, 'surface'>;
  params: ParamSpec[];
  field: (p: ParamValues) => (x: number, y: number) => [number, number];
  view?: View2D;
  density?: number;
  color?: string;
}

export function vfield2d(opts: VField2DOpts): Formula {
  const view: View2D = opts.view ?? { cx: 0, cy: 0, scale: 30 };
  return {
    meta: { ...opts.meta, surface: 'canvas2d' },
    params: opts.params,
    render(s, p) {
      if (s.kind !== 'canvas2d') return;
      clear(s);
      setupView(s, view);
      drawAxes(s, view, { grid: false });
      const f = opts.field(p);
      const den = opts.density ?? 18;
      const wHalf = s.width / 2 / view.scale;
      const hHalf = s.height / 2 / view.scale;
      const stepX = (wHalf * 2) / den;
      const stepY = (hHalf * 2) / den;
      const { ctx } = s;
      ctx.lineWidth = 1 / view.scale;
      for (let i = 0; i < den; i++) {
        for (let j = 0; j < den; j++) {
          const x = view.cx - wHalf + (i + 0.5) * stepX;
          const y = view.cy - hHalf + (j + 0.5) * stepY;
          const [vx, vy] = f(x, y);
          const m = Math.hypot(vx, vy);
          if (m < 1e-9) continue;
          const len = Math.min(stepX, stepY) * 0.4;
          const nx = vx / m * len;
          const ny = vy / m * len;
          const hue = (Math.atan2(vy, vx) * 180 / Math.PI + 360) % 360;
          ctx.strokeStyle = `hsl(${hue}, 70%, 55%)`;
          ctx.beginPath();
          ctx.moveTo(x - nx / 2, y - ny / 2);
          ctx.lineTo(x + nx / 2, y + ny / 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(x + nx / 2, y + ny / 2, 1.5 / view.scale, 0, Math.PI * 2);
          ctx.fillStyle = `hsl(${hue}, 70%, 65%)`;
          ctx.fill();
        }
      }
    },
  };
}
