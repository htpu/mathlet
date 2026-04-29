import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, plotParam, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'cardinal-curvature',title:'曲线曲率(参数化)',domain:'vectorfield',level:4,tex:'\\kappa=\\frac{|x\'y\'\'-y\'x\'\'|}{(x\'^2+y\'^2)^{3/2}}',blurb:'参数曲线沿途的曲率（标在颜色）。'},
  params:[n('a','a',1,0.5,3,0.01),n('b','b',2,0.5,5,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/4};
    clear(s); setupView(s,v); drawAxes(s,v);
    const a=p.a as number, b=p.b as number;
    const X=(t:number)=>Math.sin(a*t); const Y=(t:number)=>Math.sin(b*t);
    const Xp=(t:number)=>a*Math.cos(a*t); const Yp=(t:number)=>b*Math.cos(b*t);
    const Xpp=(t:number)=>-a*a*Math.sin(a*t); const Ypp=(t:number)=>-b*b*Math.sin(b*t);
    for(let i=0;i<800;i++){const t=i/800*Math.PI*2; const k=Math.abs(Xp(t)*Ypp(t)-Yp(t)*Xpp(t))/Math.pow(Xp(t)**2+Yp(t)**2,1.5);
      fillCircle(s,v,X(t),Y(t),1.5, `hsl(${Math.min(360,k*120)},70%,55%)`);}
  },
} satisfies Formula;
