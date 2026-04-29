import type { Formula } from '../types';
import { i } from '../types';
import { clear, drawAxes, setupView, strokeCircle, fillCircle } from '../../render/canvas2d';
export default {
  meta: { slug:'unit-roots', title:'单位根', domain:'algebra', level:2, tex:'\\zeta_k=e^{2\\pi ik/n}', blurb:'n 次单位根均匀分布在单位圆上，构成正 n 边形顶点。', surface:'canvas2d' },
  params: [i('n','n',7,2,40)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/2.6};
    clear(s); setupView(s,v); drawAxes(s,v);
    strokeCircle(s,v,0,0,1,'#39bae6',1);
    const n=p.n as number;
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=1.5/v.scale;
    s.ctx.beginPath();
    for(let k=0;k<n;k++){
      const a=2*Math.PI*k/n;
      const x=Math.cos(a), y=Math.sin(a);
      if(k===0) s.ctx.moveTo(x,y); else s.ctx.lineTo(x,y);
    }
    s.ctx.closePath(); s.ctx.stroke();
    for(let k=0;k<n;k++){
      const a=2*Math.PI*k/n;
      fillCircle(s,v,Math.cos(a),Math.sin(a),4,'#f07178');
    }
  },
} satisfies Formula;
