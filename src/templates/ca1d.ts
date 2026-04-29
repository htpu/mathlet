import type { Formula, FormulaMeta, ParamSpec, ParamValues } from '../formulas/types';

export interface CA1DOpts {
  meta: Omit<FormulaMeta, 'surface'>;
  params: ParamSpec[];
  width?: number;
  rows?: number;
  ruleKey?: string;
}

export function ca1d(opts: CA1DOpts): Formula {
  return {
    meta: { ...opts.meta, surface: 'canvas2d' },
    params: opts.params,
    render(s, p) {
      if (s.kind !== 'canvas2d') return;
      const W = opts.width ?? 256;
      const H = opts.rows ?? 200;
      const rule = (p[opts.ruleKey ?? 'rule'] as number) | 0;
      const init: number = (p['init'] as number) ?? 0;
      const grid = new Uint8Array(W * H);
      if (init === 0) {
        grid[Math.floor(W / 2)] = 1;
      } else {
        for (let i = 0; i < W; i++) grid[i] = Math.random() < 0.5 ? 1 : 0;
      }
      for (let r = 1; r < H; r++) {
        for (let i = 0; i < W; i++) {
          const l = grid[(r - 1) * W + (i - 1 + W) % W];
          const c = grid[(r - 1) * W + i];
          const ri = grid[(r - 1) * W + (i + 1) % W];
          const idx = (l << 2) | (c << 1) | ri;
          grid[r * W + i] = (rule >> idx) & 1;
        }
      }
      const { ctx, width, height, dpr } = s;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = '#0a0e14';
      ctx.fillRect(0, 0, width, height);
      const off = document.createElement('canvas');
      off.width = W; off.height = H;
      const octx = off.getContext('2d')!;
      const img = octx.createImageData(W, H);
      for (let i = 0; i < W * H; i++) {
        const v = grid[i];
        img.data[i*4] = v ? 255 : 10;
        img.data[i*4+1] = v ? 180 : 14;
        img.data[i*4+2] = v ? 84 : 20;
        img.data[i*4+3] = 255;
      }
      octx.putImageData(img, 0, 0);
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(off, 0, 0, width, height);
    },
  };
}
