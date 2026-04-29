import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, plotFn } from '../../render/canvas2d';
function erf(x:number){const t=1/(1+0.3275911*Math.abs(x)); const y=1-(((((1.061405429*t-1.453152027)*t)+1.421413741)*t-0.284496736)*t+0.254829592)*t*Math.exp(-x*x); return x>=0?y:-y;}
function N(x:number){return 0.5*(1+erf(x/Math.SQRT2));}
function call(S:number,K:number,r:number,sig:number,T:number){const d1=(Math.log(S/K)+(r+sig*sig/2)*T)/(sig*Math.sqrt(T)); const d2=d1-sig*Math.sqrt(T); return S*N(d1)-K*Math.exp(-r*T)*N(d2);}
export default {
  meta:{slug:'black-scholes',title:'Black-Scholes 期权定价',domain:'pde',level:5,tex:'C=SN(d_1)-Ke^{-rT}N(d_2)',blurb:'欧式看涨期权价格 vs 当前股价 S。'},
  params:[n('K','行权价 K',100,50,200,0.5),n('r','利率 r',0.05,0,0.2,0.001),n('sigma','波动率 σ',0.2,0.05,1,0.005),n('T','到期 T',1,0.05,3,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:100,cy:30,scale:Math.min(s.width/200, s.height/80)};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    plotFn(s,v,S=>call(S, p.K as number, p.r as number, p.sigma as number, p.T as number),'#ffb454');
    plotFn(s,v,S=>Math.max(0,S-(p.K as number)),'#2d3340');
  },
} satisfies Formula;
