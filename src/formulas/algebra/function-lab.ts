import type { Formula } from '../types';
import { n, t as tx, s as sel } from '../types';
import { clear, drawAxes, setupView, plotFn, type View2D } from '../../render/canvas2d';
import { compileExpr } from '../../render/expr';

export default {
  meta:{slug:'function-lab',title:'函数实验室（自定义表达式）',domain:'algebra',level:1,tex:'y=f(x)',blurb:'输入任意 JavaScript 数学表达式实时绘图。支持 sin/cos/exp/log/sqrt 等及常量 pi, e, tau, phi。',surface:'canvas2d'},
  params:[
    tx('expr1','f₁(x)','sin(x) * exp(-x*x/8)','例如: sin(x) + 0.5*cos(3*x)'),
    tx('expr2','f₂(x)','cos(x)/(1+x*x)',''),
    tx('expr3','f₃(x)','',''),
    n('xMin','x 起',-6,-30,30,0.1),
    n('xMax','x 止',6,-30,30,0.1),
    n('yMin','y 起',-2,-30,30,0.1),
    n('yMax','y 止',2,-30,30,0.1),
    sel('grid','网格','on',[{value:'on',label:'on'},{value:'off',label:'off'}]),
  ],
  render(s, p) {
    if (s.kind !== 'canvas2d') return;
    const xMin = p.xMin as number, xMax = p.xMax as number;
    const yMin = p.yMin as number, yMax = p.yMax as number;
    const w = s.width, h = s.height;
    const sx = w / Math.max(1e-6, xMax - xMin);
    const sy = h / Math.max(1e-6, yMax - yMin);
    const scale = Math.min(sx, sy);
    const cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2;
    const view: View2D = { cx, cy, scale };
    clear(s);
    setupView(s, view);
    drawAxes(s, view, { grid: p.grid !== 'off' });
    const colors = ['#ffb454', '#39bae6', '#c2d94c'];
    const exprs = [p.expr1, p.expr2, p.expr3] as string[];
    for (let i = 0; i < 3; i++) {
      const src = (exprs[i] || '').trim();
      if (!src) continue;
      const f = compileExpr(src, ['x']);
      plotFn(s, view, x => f({ x }), colors[i], 1500, 2);
    }
  },
} satisfies Formula;
