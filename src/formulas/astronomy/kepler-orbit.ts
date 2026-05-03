import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
import { rk4 } from '../../render/numerics';

let state: number[] = [];
let trail: [number, number][] = [];
let last = '';

export default {
  meta: {
    slug: 'kepler-orbit',
    title: '开普勒轨道',
    domain: 'astronomy',
    level: 3,
    tex: '\\ddot{\\mathbf r}=-\\frac{GM}{r^3}\\mathbf r',
    blurb: '中心引力下行星走椭圆；近日点速度大、远日点速度小，扫过面积恒定。',
    surface: 'canvas2d',
    animated: true,
  },
  params: [
    n('GM', 'GM', 1, 0.2, 3, 0.01),
    n('e', '离心率 e', 0.6, 0, 0.95, 0.01),
    n('a', '半长轴 a', 3, 1, 6, 0.05),
  ],
  render(s, p) {
    if (s.kind !== 'canvas2d') return;
    const GM = p.GM as number;
    const a = p.a as number;
    const e = p.e as number;
    const sig = `${GM}|${a}|${e}`;
    if (last !== sig) {
      const rp = a * (1 - e);
      const vp = Math.sqrt(GM * (1 + e) / (a * (1 - e)));
      state = [rp, 0, 0, vp];
      trail = [];
      last = sig;
    }
    for (let k = 0; k < 3; k++) {
      state = rk4((_t, y) => {
        const [x, yy, vx, vy] = y;
        const r3 = Math.pow(x * x + yy * yy, 1.5) + 1e-9;
        return [vx, vy, -GM * x / r3, -GM * yy / r3];
      }, 0, state, 0.01);
      trail.push([state[0], state[1]]);
      if (trail.length > 2000) trail.shift();
    }
    const v = { cx: 0, cy: 0, scale: Math.min(s.width, s.height) / (4 * a) };
    clear(s);
    setupView(s, v);
    drawAxes(s, v, { grid: false });
    fillCircle(s, v, 0, 0, 7, '#ffb454');
    s.ctx.strokeStyle = 'rgba(57,186,230,0.7)';
    s.ctx.lineWidth = 1 / v.scale;
    s.ctx.beginPath();
    for (let i = 0; i < trail.length; i++) {
      const [x, y] = trail[i];
      if (i === 0) s.ctx.moveTo(x, y); else s.ctx.lineTo(x, y);
    }
    s.ctx.stroke();
    fillCircle(s, v, state[0], state[1], 4, '#f07178');
  },
} satisfies Formula;
