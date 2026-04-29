import type { Formula } from '../types';
import { n, i } from '../types';
import { clear, drawAxes, setupView, fillCircle, plotFn } from '../../render/canvas2d';
import { mulberry32, gaussian } from '../../render/numerics';
export default {
  meta:{slug:'leastsquares',title:'最小二乘拟合',domain:'linalg',level:3,tex:'\\hat\\beta=(X^TX)^{-1}X^Ty',blurb:'噪声散点的最小二乘直线。',surface:'canvas2d'},
  params:[n('slope','真实斜率',1,-2,2,0.01),n('intercept','真实截距',0.5,-2,2,0.01),n('noise','噪声 σ',0.5,0,2,0.01),i('N','点数',40,5,200)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const r=mulberry32(7);
    const xs:number[]=[], ys:number[]=[];
    for(let i=0;i<(p.N as number);i++){const x=(r()-0.5)*5; const y=(p.slope as number)*x+(p.intercept as number)+gaussian(r)*(p.noise as number); xs.push(x); ys.push(y); fillCircle(s,v,x,y,3,'rgba(57,186,230,0.6)');}
    const n=xs.length;
    const mx=xs.reduce((a,b)=>a+b,0)/n, my=ys.reduce((a,b)=>a+b,0)/n;
    let num=0, den=0;
    for(let i=0;i<n;i++){num+=(xs[i]-mx)*(ys[i]-my); den+=(xs[i]-mx)**2;}
    const m=num/den, b=my-m*mx;
    plotFn(s,v,x=>m*x+b,'#ffb454');
    plotFn(s,v,x=>(p.slope as number)*x+(p.intercept as number),'#2d3340');
  },
} satisfies Formula;
