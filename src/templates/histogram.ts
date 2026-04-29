import type { Formula, FormulaMeta, ParamSpec, ParamValues } from '../formulas/types';
import { mulberry32 } from '../render/numerics';

export interface HistogramOpts {
  meta: Omit<FormulaMeta, 'surface'>;
  params: ParamSpec[];
  sample: (p: ParamValues, rand: () => number) => number;
  range: (p: ParamValues) => [number, number];
  bins?: number;
  samples?: number;
  color?: string;
  overlay?: (p: ParamValues) => ((x: number) => number) | null;
}

export function histogram(opts: HistogramOpts): Formula {
  return {
    meta: { ...opts.meta, surface: 'canvas2d' },
    params: opts.params,
    render(s, p) {
      if (s.kind !== 'canvas2d') return;
      const { ctx, width, height, dpr } = s;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = '#0a0e14';
      ctx.fillRect(0, 0, width, height);
      const bins = opts.bins ?? 60;
      const N = opts.samples ?? 50000;
      const [a, b] = opts.range(p);
      const counts = new Uint32Array(bins);
      const rand = mulberry32(7);
      for (let i = 0; i < N; i++) {
        const v = opts.sample(p, rand);
        const k = Math.floor((v - a) / (b - a) * bins);
        if (k >= 0 && k < bins) counts[k]++;
      }
      const max = Math.max(...counts);
      const padX = 30, padY = 24;
      const w = width - padX * 2, h = height - padY * 2;
      const bw = w / bins;
      ctx.fillStyle = opts.color ?? '#39bae6';
      for (let i = 0; i < bins; i++) {
        const bh = (counts[i] / max) * h;
        ctx.fillRect(padX + i * bw, padY + h - bh, bw - 1, bh);
      }
      // axes
      ctx.strokeStyle = '#2d3340';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(padX, padY); ctx.lineTo(padX, padY + h); ctx.lineTo(padX + w, padY + h);
      ctx.stroke();
      // overlay PDF
      const overlay = opts.overlay?.(p);
      if (overlay) {
        const norm = (N / bins) * (b - a) / bins;
        ctx.strokeStyle = '#ffb454';
        ctx.lineWidth = 2;
        ctx.beginPath();
        let started = false;
        for (let i = 0; i <= 200; i++) {
          const x = a + (b - a) * (i / 200);
          const y = overlay(x) * norm;
          const px = padX + (x - a) / (b - a) * w;
          const py = padY + h - (y / max) * h;
          if (!started) { ctx.moveTo(px, py); started = true; } else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }
    },
  };
}
