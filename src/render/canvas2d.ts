import type { Canvas2DSurface } from '../formulas/types';

export interface View2D { cx: number; cy: number; scale: number; }

export function clear(s: Canvas2DSurface, color = '#0a0e14') {
  const { ctx, width, height, dpr } = s;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);
}

export function setupView(s: Canvas2DSurface, v: View2D) {
  const { ctx, width, height, dpr } = s;
  ctx.setTransform(dpr * v.scale, 0, 0, -dpr * v.scale, dpr * (width / 2 - v.cx * v.scale), dpr * (height / 2 + v.cy * v.scale));
  ctx.lineWidth = 1 / v.scale;
}

export function drawAxes(s: Canvas2DSurface, v: View2D, opts: { grid?: boolean; color?: string; gridColor?: string; step?: number } = {}) {
  const color = opts.color ?? '#2d3340';
  const gridColor = opts.gridColor ?? '#1f2430';
  const { ctx, width, height } = s;
  const wHalf = width / 2 / v.scale;
  const hHalf = height / 2 / v.scale;
  const xMin = v.cx - wHalf, xMax = v.cx + wHalf;
  const yMin = v.cy - hHalf, yMax = v.cy + hHalf;
  const step = opts.step ?? Math.pow(10, Math.floor(Math.log10(Math.max(xMax - xMin, yMax - yMin) / 8)));
  ctx.lineWidth = 1 / v.scale;
  if (opts.grid !== false) {
    ctx.strokeStyle = gridColor;
    ctx.beginPath();
    for (let x = Math.ceil(xMin / step) * step; x <= xMax; x += step) { ctx.moveTo(x, yMin); ctx.lineTo(x, yMax); }
    for (let y = Math.ceil(yMin / step) * step; y <= yMax; y += step) { ctx.moveTo(xMin, y); ctx.lineTo(xMax, y); }
    ctx.stroke();
  }
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(xMin, 0); ctx.lineTo(xMax, 0);
  ctx.moveTo(0, yMin); ctx.lineTo(0, yMax);
  ctx.stroke();
}

export function plotFn(s: Canvas2DSurface, v: View2D, fn: (x: number) => number, color = '#ffb454', samples = 1000, lineWidth = 2) {
  const { ctx, width, height } = s;
  const xMin = v.cx - width / 2 / v.scale;
  const xMax = v.cx + width / 2 / v.scale;
  const dx = (xMax - xMin) / samples;
  // Clip y to ~1000× viewport so a single huge value (1e30) can't blow up
  // canvas2d rasterizer (we've seen Chrome crash on extreme coords).
  const yHalf = height / 2 / v.scale;
  const yClip = Math.abs(v.cy) + yHalf * 1000;
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth / v.scale;
  ctx.beginPath();
  let started = false;
  for (let i = 0; i <= samples; i++) {
    const x = xMin + i * dx;
    const y = fn(x);
    if (!isFinite(y) || Math.abs(y) > yClip) { started = false; continue; }
    if (!started) { ctx.moveTo(x, y); started = true; } else ctx.lineTo(x, y);
  }
  ctx.stroke();
}

export function plotParam(s: Canvas2DSurface, v: View2D, fn: (t: number) => [number, number], tMin: number, tMax: number, color = '#39bae6', samples = 2000, lineWidth = 2) {
  const { ctx } = s;
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth / v.scale;
  ctx.beginPath();
  for (let i = 0; i <= samples; i++) {
    const t = tMin + (tMax - tMin) * (i / samples);
    const [x, y] = fn(t);
    if (!isFinite(x) || !isFinite(y)) continue;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke();
}

export function fillCircle(s: Canvas2DSurface, v: View2D, x: number, y: number, r: number, color: string) {
  const { ctx } = s;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r / v.scale, 0, Math.PI * 2);
  ctx.fill();
}

export function strokeCircle(s: Canvas2DSurface, v: View2D, x: number, y: number, r: number, color: string, lineWidth = 2) {
  const { ctx } = s;
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth / v.scale;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.stroke();
}

export function text(s: Canvas2DSurface, x: number, y: number, str: string, color = '#cbccc6', size = 11, align: CanvasTextAlign = 'left') {
  const { ctx, dpr } = s;
  ctx.save();
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.font = `${size}px ui-monospace, monospace`;
  ctx.fillStyle = color;
  ctx.textAlign = align;
  ctx.textBaseline = 'top';
  ctx.fillText(str, x, y);
  ctx.restore();
}
