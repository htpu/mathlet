import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'mwc-allosteric',title:'MWC 协同模型',domain:'biology',level:4,tex:'\\bar{Y}=\\frac{Lc\\alpha(1+c\\alpha)^{n-1}+\\alpha(1+\\alpha)^{n-1}}{L(1+c\\alpha)^n+(1+\\alpha)^n}',blurb:'变构酶 Monod-Wyman-Changeux。'},
  params:[n('L','L',1000,1,10000,1,true),n('c','c',0.1,0.001,1,0.001,true),n('nh','n',4,1,8,0.01)],
  fn:p=>x=>{const L=p.L as number, c=p.c as number, nh=p.nh as number, a=x; const T=L*c*a*Math.pow(1+c*a,nh-1)+a*Math.pow(1+a,nh-1); const B=L*Math.pow(1+c*a,nh)+Math.pow(1+a,nh); return T/B;},
  view:{cx:1.5,cy:0.5,scale:120},
});
