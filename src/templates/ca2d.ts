import type { Formula, FormulaMeta, ParamSpec, ParamValues } from '../formulas/types';

export interface CA2DOpts {
  meta: Omit<FormulaMeta, 'surface' | 'animated'>;
  params: ParamSpec[];
  size?: number;
  step: (p: ParamValues, grid: Uint8Array, next: Uint8Array, w: number, h: number) => void;
  init: (p: ParamValues, grid: Uint8Array, w: number, h: number) => void;
  colorize?: (v: number) => [number, number, number];
  speedKey?: string;
}

export function ca2d(opts: CA2DOpts): Formula {
  let grid: Uint8Array | null = null;
  let next: Uint8Array | null = null;
  let lastP = '';
  const W = opts.size ?? 160;
  const H = opts.size ?? 160;
  return {
    meta: { ...opts.meta, surface: 'canvas2d', animated: true },
    params: opts.params,
    render(s, p) {
      if (s.kind !== 'canvas2d') return;
      const sig = JSON.stringify(p);
      if (sig !== lastP || !grid) {
        grid = new Uint8Array(W * H);
        next = new Uint8Array(W * H);
        opts.init(p, grid, W, H);
        lastP = sig;
      }
      const speed = (p[opts.speedKey ?? 'speed'] as number) ?? 1;
      for (let k = 0; k < speed; k++) {
        opts.step(p, grid!, next!, W, H);
        const tmp = grid; grid = next; next = tmp;
      }
      const { ctx, width, height, dpr } = s;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = '#0a0e14';
      ctx.fillRect(0, 0, width, height);
      const cellW = width / W;
      const cellH = height / H;
      const colorize = opts.colorize ?? ((v: number) => v ? [255, 180, 84] : [10, 14, 20] as [number, number, number]);
      const img = ctx.createImageData(W, H);
      for (let i = 0; i < W * H; i++) {
        const [r, g, b] = colorize(grid![i]);
        img.data[i*4] = r; img.data[i*4+1] = g; img.data[i*4+2] = b; img.data[i*4+3] = 255;
      }
      ctx.imageSmoothingEnabled = false;
      const off = document.createElement('canvas');
      off.width = W; off.height = H;
      off.getContext('2d')!.putImageData(img, 0, 0);
      ctx.drawImage(off, 0, 0, width, height);
    },
  };
}
