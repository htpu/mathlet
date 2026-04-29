import type { Formula, FormulaMeta, ParamSpec, ParamValues } from '../formulas/types';

export interface EscapeOpts {
  meta: Omit<FormulaMeta, 'surface'>;
  params: ParamSpec[];
  iterate: (p: ParamValues) => (zx0: number, zy0: number, cx: number, cy: number) => number;
  centerKey?: { cx: string; cy: string; zoom: string };
  iterKey?: string;
  paletteKey?: string;
}

export function escapeTime(opts: EscapeOpts): Formula {
  return {
    meta: { ...opts.meta, surface: 'canvas2d' },
    params: opts.params,
    render(s, p) {
      if (s.kind !== 'canvas2d') return;
      const { ctx, width, height, dpr } = s;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const w = Math.floor(width);
      const h = Math.floor(height);
      const img = ctx.createImageData(w, h);
      const cx = (p[opts.centerKey?.cx ?? 'cx'] as number) ?? -0.5;
      const cy = (p[opts.centerKey?.cy ?? 'cy'] as number) ?? 0;
      const zoom = (p[opts.centerKey?.zoom ?? 'zoom'] as number) ?? 1;
      const maxIter = (p[opts.iterKey ?? 'iter'] as number) ?? 200;
      const palette = (p[opts.paletteKey ?? 'palette'] as string) ?? 'fire';
      const span = 3 / zoom;
      const iter = opts.iterate(p);
      for (let py = 0; py < h; py++) {
        for (let px = 0; px < w; px++) {
          const x0 = cx + (px / w - 0.5) * span;
          const y0 = cy + (py / h - 0.5) * span * (h / w);
          const n = iter(x0, y0, x0, y0);
          const i = (py * w + px) * 4;
          if (n >= maxIter) { img.data[i] = 0; img.data[i+1] = 0; img.data[i+2] = 0; img.data[i+3] = 255; }
          else {
            const t = n / maxIter;
            const [r, g, b] = paletteColor(palette, t);
            img.data[i] = r; img.data[i+1] = g; img.data[i+2] = b; img.data[i+3] = 255;
          }
        }
      }
      ctx.putImageData(img, 0, 0);
    },
  };
}

export function paletteColor(p: string, t: number): [number, number, number] {
  const u = Math.sqrt(t);
  if (p === 'fire') return [Math.floor(255 * u), Math.floor(120 * u * u), Math.floor(40 * u * u * u)];
  if (p === 'ice') return [Math.floor(40 * u * u), Math.floor(180 * u), Math.floor(255 * u)];
  if (p === 'electric') return [Math.floor(180 * u), Math.floor(80 * u * u), Math.floor(255 * u)];
  if (p === 'mono') return [Math.floor(255 * u), Math.floor(255 * u), Math.floor(255 * u)];
  // rainbow
  const h = u * 360;
  return hsv2rgb(h, 0.85, u);
}
function hsv2rgb(h: number, s: number, v: number): [number, number, number] {
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;
  let r = 0, g = 0, b = 0;
  if (h < 60) { r = c; g = x; b = 0; }
  else if (h < 120) { r = x; g = c; b = 0; }
  else if (h < 180) { r = 0; g = c; b = x; }
  else if (h < 240) { r = 0; g = x; b = c; }
  else if (h < 300) { r = x; g = 0; b = c; }
  else { r = c; g = 0; b = x; }
  return [Math.floor((r + m) * 255), Math.floor((g + m) * 255), Math.floor((b + m) * 255)];
}
