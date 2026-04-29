import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, strokeCircle, fillCircle, text } from '../../render/canvas2d';
export default {
  meta:{slug:'gauss-circle',title:'高斯圆问题',domain:'numbertheory',level:3,tex:'N(r)=\\#\\{(x,y)\\in\\Z^2:x^2+y^2\\le r^2\\}',blurb:'计数半径 r 圆内整点。N(r) ≈ πr²。',surface:'canvas2d'},
  params:[n('r','r',5,1,15,0.05)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/((p.r as number)*2.5)};
    clear(s); setupView(s,v); drawAxes(s,v);
    const r=p.r as number;
    strokeCircle(s,v,0,0,r,'#ffb454',2);
    let count=0;
    for(let x=-Math.ceil(r);x<=Math.ceil(r);x++) for(let y=-Math.ceil(r);y<=Math.ceil(r);y++){
      if(x*x+y*y<=r*r){count++; fillCircle(s,v,x,y,3,'#39bae6');}
    }
    text(s,12,12,`N(${r.toFixed(2)}) = ${count}`,'#ffb454',13);
    text(s,12,30,`πr² ≈ ${(Math.PI*r*r).toFixed(2)}`,'#cbccc6',11);
  },
} satisfies Formula;
