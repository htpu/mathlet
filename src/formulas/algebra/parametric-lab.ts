import type { Formula } from '../types';
import { n, t as tx } from '../types';
import { clear, drawAxes, setupView, plotParam, type View2D } from '../../render/canvas2d';
import { compileExpr } from '../../render/expr';

export default {
  meta:{slug:'parametric-lab',title:'参数曲线实验室',domain:'algebra',level:2,tex:'(x(t),y(t))',blurb:'用参数 t 自定义参数曲线（如 (cos(3t), sin(2t))）。',surface:'canvas2d'},
  params:[
    tx('xExpr','x(t)','cos(3*t)',''),
    tx('yExpr','y(t)','sin(2*t)',''),
    n('tMin','t 起',0,-50,50,0.1),
    n('tMax','t 止',6.28318,-50,50,0.1),
    n('view','视野半径',1.5,0.1,20,0.1),
  ],
  render(s, p) {
    if (s.kind !== 'canvas2d') return;
    const view: View2D = { cx: 0, cy: 0, scale: Math.min(s.width, s.height) / ((p.view as number) * 2.4) };
    clear(s); setupView(s, view); drawAxes(s, view);
    const fx = compileExpr(p.xExpr as string, ['t']);
    const fy = compileExpr(p.yExpr as string, ['t']);
    plotParam(s, view, t => [fx({ t }), fy({ t })], p.tMin as number, p.tMax as number, '#ffb454', 3000);
  },
} satisfies Formula;
