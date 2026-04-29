import type { Formula } from '../types';
import { n, i } from '../types';
import { clear, drawAxes, setupView, fillCircle, plotFn } from '../../render/canvas2d';
import { mulberry32, gaussian } from '../../render/numerics';
export default {
  meta:{slug:'levenberg-marquardt',title:'Levenberg-Marquardt 拟合',domain:'optimization',level:5,tex:'(J^TJ+\\lambda I)\\delta=J^Tr',blurb:'非线性最小二乘：a·exp(-bx²) 拟合噪声散点。'},
  params:[n('a0','初始 a',0.5,0,3,0.01),n('b0','初始 b',1,0,5,0.01),i('iter','迭代',10,1,30)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const r=mulberry32(7);
    const xs:number[]=[], ys:number[]=[];
    const ta=2, tb=1.5;
    for(let i=0;i<40;i++){const x=(r()-0.5)*4; const y=ta*Math.exp(-tb*x*x)+gaussian(r)*0.1; xs.push(x); ys.push(y); fillCircle(s,v,x,y,2.5,'rgba(57,186,230,0.6)');}
    let a=p.a0 as number, b=p.b0 as number; let lam=0.01;
    for(let it=0;it<(p.iter as number);it++){
      let JtJ=[[0,0],[0,0]], Jtr=[0,0], chi=0;
      for(let i=0;i<xs.length;i++){const e=Math.exp(-b*xs[i]*xs[i]); const f=a*e; const ri=ys[i]-f;
        chi+=ri*ri;
        const j0=e, j1=-a*xs[i]*xs[i]*e;
        JtJ[0][0]+=j0*j0; JtJ[0][1]+=j0*j1; JtJ[1][0]+=j1*j0; JtJ[1][1]+=j1*j1;
        Jtr[0]+=j0*ri; Jtr[1]+=j1*ri;
      }
      JtJ[0][0]+=lam; JtJ[1][1]+=lam;
      const det=JtJ[0][0]*JtJ[1][1]-JtJ[0][1]*JtJ[1][0];
      if(Math.abs(det)<1e-12) break;
      const da=(JtJ[1][1]*Jtr[0]-JtJ[0][1]*Jtr[1])/det;
      const db=(JtJ[0][0]*Jtr[1]-JtJ[1][0]*Jtr[0])/det;
      a+=da; b+=db;
      if(b<0) b=0.01;
    }
    plotFn(s,v,x=>a*Math.exp(-b*x*x),'#ffb454');
    plotFn(s,v,x=>ta*Math.exp(-tb*x*x),'#2d3340');
  },
} satisfies Formula;
