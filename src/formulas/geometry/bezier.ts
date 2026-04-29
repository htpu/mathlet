import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, fillCircle, plotParam } from '../../render/canvas2d';
function bez(p:number[][], t:number):[number,number]{
  let pts=p.map(q=>[...q]);
  while(pts.length>1){
    const next:number[][]=[];
    for(let i=0;i<pts.length-1;i++){
      next.push([pts[i][0]+(pts[i+1][0]-pts[i][0])*t, pts[i][1]+(pts[i+1][1]-pts[i][1])*t]);
    }
    pts=next;
  }
  return pts[0] as [number,number];
}
export default {
  meta:{slug:'bezier',title:'贝塞尔曲线（de Casteljau）',domain:'geometry',level:2,tex:'B(t)=\\sum\\binom{n}{i}(1-t)^{n-i}t^iP_i',blurb:'4 控制点拖动，看 t 处递归插值。',surface:'canvas2d',animated:true},
  params:[n('p0x','P0.x',-2,-3,3,0.05),n('p0y','P0.y',-1.5,-3,3,0.05),
          n('p1x','P1.x',-1,-3,3,0.05),n('p1y','P1.y',2,-3,3,0.05),
          n('p2x','P2.x',1,-3,3,0.05),n('p2y','P2.y',-2,-3,3,0.05),
          n('p3x','P3.x',2,-3,3,0.05),n('p3y','P3.y',1.5,-3,3,0.05),
          n('t','t',0.5,0,1,0.01)],
  render(s,pa,time){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const ctrl=[[pa.p0x,pa.p0y],[pa.p1x,pa.p1y],[pa.p2x,pa.p2y],[pa.p3x,pa.p3y]] as number[][];
    s.ctx.strokeStyle='#2d3340'; s.ctx.lineWidth=1/v.scale;
    s.ctx.beginPath(); ctrl.forEach((p,i)=>i===0?s.ctx.moveTo(p[0],p[1]):s.ctx.lineTo(p[0],p[1])); s.ctx.stroke();
    plotParam(s,v,t=>bez(ctrl,t),0,1,'#ffb454',300);
    ctrl.forEach((p,i)=>fillCircle(s,v,p[0],p[1],5,i===0||i===3?'#f07178':'#39bae6'));
    const t=(pa.t as number);
    const [x,y]=bez(ctrl,t);
    fillCircle(s,v,x,y,6,'#c2d94c');
  },
} satisfies Formula;
