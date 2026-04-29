import type { Formula } from '../types';
import { n, i } from '../types';
import { clear, drawAxes, setupView, fillCircle, plotFn } from '../../render/canvas2d';
import { mulberry32, gaussian } from '../../render/numerics';
export default {
  meta:{slug:'regression-confidence',title:'回归 95% 置信带',domain:'probability',level:4,tex:'\\hat y\\pm t_{\\alpha/2}\\,SE',blurb:'OLS 拟合 + 95% 置信带。'},
  params:[i('N','点数',30,5,200),n('noise','σ',0.5,0.1,2,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const r=mulberry32(7);
    const xs:number[]=[], ys:number[]=[];
    for(let i=0;i<(p.N as number);i++){const x=(r()-0.5)*5; const y=0.6*x+0.5+gaussian(r)*(p.noise as number); xs.push(x); ys.push(y); fillCircle(s,v,x,y,3,'rgba(57,186,230,0.6)');}
    const n=xs.length, mx=xs.reduce((a,b)=>a+b,0)/n, my=ys.reduce((a,b)=>a+b,0)/n;
    let num=0, den=0; for(let i=0;i<n;i++){num+=(xs[i]-mx)*(ys[i]-my); den+=(xs[i]-mx)**2;}
    const m=num/den, b=my-m*mx;
    let SSR=0; for(let i=0;i<n;i++) SSR+=(ys[i]-(m*xs[i]+b))**2;
    const sigma=Math.sqrt(SSR/(n-2));
    plotFn(s,v,x=>m*x+b,'#ffb454');
    plotFn(s,v,x=>m*x+b+1.96*sigma*Math.sqrt(1/n+(x-mx)**2/den),'#f07178');
    plotFn(s,v,x=>m*x+b-1.96*sigma*Math.sqrt(1/n+(x-mx)**2/den),'#f07178');
  },
} satisfies Formula;
