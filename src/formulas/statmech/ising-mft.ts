import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, plotFn, setupView, type View2D } from '../../render/canvas2d';

export default {
  meta: {
    slug: 'ising-mft',
    title: 'Ising 平均场磁化',
    domain: 'statmech',
    level: 4,
    tex: 'm=\\tanh\\!\\left(\\frac{T_c}{T}m+\\frac{h}{T}\\right)',
    blurb: '平均场自洽解；T<T_c 出现自发磁化（h=0 时分叉于 T_c）。',
    surface: 'canvas2d',
    animated: false,
  },
  params: [n('Tc', '临界温度 T_c', 1, 0.2, 3, 0.01), n('h', '外场 h', 0, -0.5, 0.5, 0.005)],
  render(s, p) {
    if (s.kind !== 'canvas2d') return;
    const Tc = p.Tc as number;
    const h = p.h as number;
    const view: View2D = { cx: Tc, cy: 0, scale: 100 };
    clear(s);
    setupView(s, view);
    drawAxes(s, view);
    plotFn(s, view, T => {
      if (T <= 0) return 0;
      let m = h >= 0 ? 0.99 : -0.99;
      for (let i = 0; i < 80; i++) m = Math.tanh((Tc / T) * m + h / T);
      return m;
    }, '#ffb454');
    if (h === 0) {
      plotFn(s, view, T => {
        if (T <= 0) return 0;
        let m = -0.99;
        for (let i = 0; i < 80; i++) m = Math.tanh((Tc / T) * m);
        return m;
      }, '#39bae6');
    }
  },
} satisfies Formula;
