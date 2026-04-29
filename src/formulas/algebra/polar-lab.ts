import type { Formula } from '../types';
import { n, t as tx } from '../types';
import { clear, drawAxes, setupView, plotParam, type View2D } from '../../render/canvas2d';
import { compileExpr } from '../../render/expr';

export default {
  meta:{slug:'polar-lab',title:'极坐标实验室',domain:'algebra',level:2,tex:'r=f(\\theta)',blurb:'极坐标自定义函数（如 1+cos(t), 2*sin(5t)）。',surface:'canvas2d'},
  params:[
    tx('rExpr','r(θ)','1+cos(t)',''),
    n('tMin','θ 起',0,-50,50,0.1),
    n('tMax','θ 止',6.28318,-50,50,0.1),
    n('view','视野半径',2,0.1,20,0.1),
  ],
  render(s, p) {
    if (s.kind !== 'canvas2d') return;
    const view: View2D = { cx: 0, cy: 0, scale: Math.min(s.width, s.height) / ((p.view as number) * 2.4) };
    clear(s); setupView(s, view); drawAxes(s, view);
    const fr = compileExpr(p.rExpr as string, ['t']);
    plotParam(s, view, t => { const r = fr({ t }); return [r * Math.cos(t), r * Math.sin(t)]; }, p.tMin as number, p.tMax as number, '#f07178', 3000);
  },
} satisfies Formula;
