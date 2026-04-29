import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, plotParam } from '../../render/canvas2d';
export default {
  meta: { slug:'complex-power', title:'复幂映射 z^n', domain:'algebra', level:3, tex:'w=z^n=r^n e^{in\\theta}', blurb:'看 z 在单位圆上跑一圈，w=z^n 跑 n 圈。', surface:'canvas2d' },
  params: [n('n','幂次 n',3,0.5,8,0.1), n('r','半径 r',1,0.2,2,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/5};
    clear(s); setupView(s,v); drawAxes(s,v);
    const r=p.r as number, nn=p.n as number;
    plotParam(s,v,t=>{const a=t*nn; return [Math.pow(r,nn)*Math.cos(a), Math.pow(r,nn)*Math.sin(a)];},0,2*Math.PI,'#ffb454',2000);
    plotParam(s,v,t=>[r*Math.cos(t), r*Math.sin(t)],0,2*Math.PI,'#39bae6',1000);
  },
} satisfies Formula;
