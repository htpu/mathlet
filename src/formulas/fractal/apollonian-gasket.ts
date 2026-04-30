import { i } from '../types';
import type { Formula } from '../types';
const f: Formula = {
  meta:{slug:'apollonian-gasket',title:'阿波罗尼斯垫片',domain:'fractal',level:4,tex:'\\text{recursive tangent circle packing}',blurb:'每三互切圆生两个 Descartes 切圆。'},
  params:[i('depth','深度',6,1,8)],
  render(s, p) {
    if (s.kind !== 'canvas2d') return;
    const { ctx, width, height, dpr } = s;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = '#0a0e14'; ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = '#39bae6'; ctx.lineWidth = 1;
    const cx = width / 2, cy = height / 2;
    const R = Math.min(width, height) * 0.45;
    type C = { x: number; y: number; k: number };
    const draw = (c: C) => {
      ctx.beginPath();
      ctx.arc(cx + c.x * R, cy + c.y * R, Math.abs(1 / c.k) * R, 0, 2 * Math.PI);
      ctx.stroke();
    };
    const k1 = -1, k2 = 2, k3 = 2, k4 = 3;
    const c1: C = { x: 0, y: 0, k: k1 };
    const c2: C = { x: -0.5, y: 0, k: k2 };
    const c3: C = { x: 0.5, y: 0, k: k3 };
    const c4: C = { x: 0, y: -2/3, k: k4 };
    const c5: C = { x: 0, y: 2/3, k: k4 };
    [c1, c2, c3, c4, c5].forEach(draw);
    function descartes(a: C, b: C, c: C, d: C): C {
      const k = 2 * (a.k + b.k + c.k) - d.k;
      const x = (2 * (a.k * a.x + b.k * b.x + c.k * c.x) - d.k * d.x) / k;
      const y = (2 * (a.k * a.y + b.k * b.y + c.k * c.y) - d.k * d.y) / k;
      return { x, y, k };
    }
    function recurse(a: C, b: C, c: C, d: C, depth: number) {
      if (depth <= 0) return;
      const e = descartes(a, b, c, d);
      if (Math.abs(e.k) > 1000) return;
      draw(e);
      recurse(a, b, e, c, depth - 1);
      recurse(a, c, e, b, depth - 1);
      recurse(b, c, e, a, depth - 1);
    }
    const dep = p.depth as number;
    recurse(c1, c2, c3, c4, dep);
    recurse(c1, c2, c3, c5, dep);
    recurse(c1, c2, c4, c5, dep);
    recurse(c1, c3, c4, c5, dep);
  },
};
export default f;
