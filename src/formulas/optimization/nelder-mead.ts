import type { Formula } from '../types';
import { n, i } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'nelder-mead',title:'Nelder-Mead 单纯形',domain:'optimization',level:4,tex:'\\text{reflect/expand/contract/shrink}',blurb:'2D 三角形通过反射/扩张/收缩搜索最小值。'},
  params:[i('steps','步数',30,1,200)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/4};
    clear(s); setupView(s,v); drawAxes(s,v);
    const f=(p:[number,number])=>p[0]*p[0]+3*p[1]*p[1];
    let pts:[number,number][]=[[1.5,1.2],[1.8,0.5],[1,1.6]];
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=1/v.scale;
    for(let it=0;it<(p.steps as number);it++){
      pts.sort((a,b)=>f(a)-f(b));
      s.ctx.beginPath(); s.ctx.moveTo(pts[0][0],pts[0][1]); for(let i=1;i<3;i++) s.ctx.lineTo(pts[i][0],pts[i][1]); s.ctx.closePath(); s.ctx.stroke();
      const cx=(pts[0][0]+pts[1][0])/2, cy=(pts[0][1]+pts[1][1])/2;
      const wo=pts[2];
      const r:[number,number]=[2*cx-wo[0], 2*cy-wo[1]];
      if(f(r)<f(pts[0])){const e:[number,number]=[3*cx-2*wo[0], 3*cy-2*wo[1]]; pts[2]=f(e)<f(r)?e:r;}
      else if(f(r)<f(pts[1])) pts[2]=r;
      else {const c:[number,number]=[(cx+wo[0])/2, (cy+wo[1])/2]; if(f(c)<f(wo)) pts[2]=c; else {pts[1]=[(pts[0][0]+pts[1][0])/2,(pts[0][1]+pts[1][1])/2]; pts[2]=[(pts[0][0]+wo[0])/2,(pts[0][1]+wo[1])/2];}}
    }
    for(const pt of pts) fillCircle(s,v,pt[0],pt[1],4,'#f07178');
  },
} satisfies Formula;
