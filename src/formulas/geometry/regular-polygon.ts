import type { Formula } from '../types';
import { i } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'regular-polygon',title:'正多边形 → 圆',domain:'geometry',level:1,tex:'\\lim_{n\\to\\infty}P_n=\\text{circle}',blurb:'n 越大正 n 边形越接近圆。'},
  params:[i('n','边数',6,3,100)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/2.4};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    const n=p.n as number;
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=1/v.scale;
    s.ctx.beginPath(); s.ctx.arc(0,0,1,0,Math.PI*2); s.ctx.stroke();
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath();
    for(let k=0;k<n;k++){const a=2*Math.PI*k/n; if(k===0) s.ctx.moveTo(Math.cos(a),Math.sin(a)); else s.ctx.lineTo(Math.cos(a),Math.sin(a));}
    s.ctx.closePath(); s.ctx.stroke();
  },
} satisfies Formula;
