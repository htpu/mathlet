import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';

let pts: [number, number][] = [];
let last = '';

export default {
  meta: {
    slug: 'henon-map',
    title: 'Hénon 映射',
    domain: 'chaos',
    level: 3,
    tex: 'x_{n+1}=1-ax_n^2+y_n,\\quad y_{n+1}=bx_n',
    blurb: 'a=1.4, b=0.3 处的奇异吸引子；离散映射逐次迭代点。',
    surface: 'canvas2d',
    animated: false,
  },
  params: [n('a', 'a', 1.4, 0.5, 1.5, 0.001), n('b', 'b', 0.3, 0, 0.5, 0.001)],
  render(s, p) {
    if (s.kind !== 'canvas2d') return;
    const a = p.a as number;
    const b = p.b as number;
    const sig = `${a}|${b}`;
    if (sig !== last) {
      pts = [];
      let x = 0, y = 0;
      for (let i = 0; i < 200; i++) { const xn = 1 - a * x * x + y; y = b * x; x = xn; }
      for (let i = 0; i < 12000; i++) {
        const xn = 1 - a * x * x + y;
        y = b * x; x = xn;
        if (!isFinite(x) || !isFinite(y) || Math.abs(x) > 5) break;
        pts.push([x, y]);
      }
      last = sig;
    }
    const view = { cx: 0, cy: 0, scale: Math.min(s.width, s.height) / 4 };
    clear(s);
    setupView(s, view);
    drawAxes(s, view, { grid: false });
    for (const [x, y] of pts) fillCircle(s, view, x, y, 0.6, 'rgba(255,180,84,0.7)');
  },
} satisfies Formula;
