import type { Formula } from '../types';
import { n, i } from '../types';
import { clear, drawAxes, setupView, fillCircle, strokeCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'trust-region',title:'信赖域方法',domain:'optimization',level:4,tex:'\\min m_k(p),\\|p\\|\\le\\Delta_k',blurb:'每步在 Δ 半径球内信任二次模型。'},
  params:[n('delta0','初始 Δ',0.5,0.1,2,0.01),i('iter','步数',8,1,30)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/4};
    clear(s); setupView(s,v); drawAxes(s,v);
    let x=[1.7,1.7];
    let delta=p.delta0 as number;
    for(let it=0;it<(p.iter as number);it++){
      const gx=2*x[0], gy=6*x[1];
      const gn=Math.hypot(gx,gy);
      const dx=Math.min(delta, gn*0.1)*(-gx/gn);
      const dy=Math.min(delta, gn*0.1)*(-gy/gn);
      strokeCircle(s,v,x[0],x[1],delta,'#39bae6',1);
      fillCircle(s,v,x[0],x[1],3,'#ffb454');
      x=[x[0]+dx, x[1]+dy];
      delta*=0.9;
    }
    fillCircle(s,v,x[0],x[1],5,'#f07178');
  },
} satisfies Formula;
