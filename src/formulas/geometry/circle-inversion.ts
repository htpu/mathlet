import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, strokeCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'circle-inversion',title:'反演变换',domain:'geometry',level:3,tex:'P\\to P\'\\text{ 使 }|OP||OP\'|=r^2',blurb:'网格在反演下变弧线。',surface:'canvas2d'},
  params:[n('r','反演半径',1,0.3,2,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    strokeCircle(s,v,0,0,p.r as number,'#ffb454');
    const r=p.r as number;
    const inv=(x:number,y:number)=>{const d=x*x+y*y; if(d<1e-6) return [Infinity, Infinity]; return [r*r*x/d, r*r*y/d];};
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=1/v.scale;
    for(let g=-3;g<=3;g++){
      s.ctx.beginPath();
      for(let t=-3;t<=3;t+=0.02){const [x,y]=inv(g,t); if(isFinite(x)&&Math.abs(x)<5&&Math.abs(y)<5){if(t===-3) s.ctx.moveTo(x,y); else s.ctx.lineTo(x,y);}}
      s.ctx.stroke();
      s.ctx.beginPath();
      for(let t=-3;t<=3;t+=0.02){const [x,y]=inv(t,g); if(isFinite(x)&&Math.abs(x)<5&&Math.abs(y)<5){if(t===-3) s.ctx.moveTo(x,y); else s.ctx.lineTo(x,y);}}
      s.ctx.stroke();
    }
  },
} satisfies Formula;
