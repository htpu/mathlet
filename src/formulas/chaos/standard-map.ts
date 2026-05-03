import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';

let pts: [number, number][] = [];
let last = '';

export default {
  meta: {
    slug: 'standard-map',
    title: 'Chirikov 标准映射',
    domain: 'chaos',
    level: 4,
    tex: 'p_{n+1}=p_n+K\\sin\\theta_n,\\ \\theta_{n+1}=\\theta_n+p_{n+1}',
    blurb: 'K 增大相空间从规则环面破裂为混沌海；多初值同时迭代。',
    surface: 'canvas2d',
    animated: false,
  },
  params: [n('K', '扰动 K', 0.97, 0, 5, 0.005)],
  render(s, p) {
    if (s.kind !== 'canvas2d') return;
    const K = p.K as number;
    const sig = `${K}`;
    if (sig !== last) {
      pts = [];
      const TAU = Math.PI * 2;
      const seeds = 24;
      for (let k = 0; k < seeds; k++) {
        let theta = TAU * Math.random();
        let pp = -Math.PI + (TAU * k) / seeds;
        for (let i = 0; i < 1500; i++) {
          pp = pp + K * Math.sin(theta);
          theta = theta + pp;
          // wrap
          theta = ((theta % TAU) + TAU) % TAU;
          let pw = ((pp + Math.PI) % TAU + TAU) % TAU - Math.PI;
          pts.push([theta, pw]);
        }
      }
      last = sig;
    }
    const view = { cx: Math.PI, cy: 0, scale: Math.min(s.width, s.height) / 7 };
    clear(s);
    setupView(s, view);
    drawAxes(s, view, { grid: false });
    for (const [x, y] of pts) fillCircle(s, view, x, y, 0.5, 'rgba(57,186,230,0.5)');
  },
} satisfies Formula;
