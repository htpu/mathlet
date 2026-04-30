import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'planck-radiation',title:'普朗克黑体辐射',domain:'algebra',level:4,tex:'B(\\lambda,T)=\\frac{2hc^2}{\\lambda^5}\\frac{1}{e^{hc/\\lambda k T}-1}',blurb:'温度 T 决定光谱形状。横轴 λ (μm)。'},
  params:[n('T','温度 T (K)',5778,500,12000,10)],
  fn:p=>x=>{if(x<=0) return 0; const h=6.626e-34,c=3e8,k=1.381e-23,T=p.T as number; const lam=x*1e-6; const e=Math.exp(h*c/(lam*k*T))-1; return (2*h*c*c/Math.pow(lam,5))/e/1e13;},
  view:{cx:1.5,cy:8,scale:80},
});
