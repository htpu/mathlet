import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, fillCircle, plotFn } from '../../render/canvas2d';
import { mulberry32, gaussian } from '../../render/numerics';
export default {
  meta:{slug:'lasso-regression',title:'LASSO 回归（L1）',domain:'optimization',level:4,tex:'\\min\\|y-X\\beta\\|^2+\\lambda\\|\\beta\\|_1',blurb:'L1 罚 → 稀疏系数。'},
  params:[n('lambda','λ',0.5,0,5,0.01),n('noise','噪声',0.5,0,2,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const r=mulberry32(7);
    const xs:number[]=[], ys:number[]=[];
    for(let i=0;i<25;i++){const x=(r()-0.5)*5; const y=0.6*x+0.5+gaussian(r)*(p.noise as number); xs.push(x); ys.push(y); fillCircle(s,v,x,y,3,'rgba(57,186,230,0.6)');}
    // ISTA-like for 1D LASSO: simple
    const n=xs.length, mx=xs.reduce((a,b)=>a+b,0)/n, my=ys.reduce((a,b)=>a+b,0)/n;
    let num=0, den=0; for(let i=0;i<n;i++){num+=(xs[i]-mx)*(ys[i]-my); den+=(xs[i]-mx)**2;}
    const m_ols=num/den;
    const lam=p.lambda as number;
    const m_lasso=Math.sign(m_ols)*Math.max(0, Math.abs(m_ols)-lam/(2*den));
    const b=my-m_lasso*mx;
    plotFn(s,v,x=>m_lasso*x+b,'#ffb454');
  },
} satisfies Formula;
