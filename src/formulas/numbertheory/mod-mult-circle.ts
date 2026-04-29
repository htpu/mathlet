import type { Formula } from '../types';
import { i, n } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
export default {
  meta:{slug:'mod-mult-circle',title:'模乘圆心形',domain:'numbertheory',level:2,tex:'i \\to mi \\bmod n',blurb:'圆周 n 等分，连 i 到 (m·i) mod n。m=2 心形。'},
  params:[i('n','n',200,10,2000),n('m','m',2,1,40,0.1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/2.4};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    const n=p.n as number, m=p.m as number;
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=0.4/v.scale;
    s.ctx.beginPath();
    for(let i=0;i<n;i++){const a=2*Math.PI*i/n, j=(i*m)%n; const b=2*Math.PI*j/n;
      s.ctx.moveTo(Math.cos(a),Math.sin(a)); s.ctx.lineTo(Math.cos(b),Math.sin(b));}
    s.ctx.stroke();
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=1/v.scale;
    s.ctx.beginPath(); s.ctx.arc(0,0,1,0,Math.PI*2); s.ctx.stroke();
  },
} satisfies Formula;
