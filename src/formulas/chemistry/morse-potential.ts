import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'morse-potential',title:'Morse 势',domain:'chemistry',level:3,tex:'V(r)=D_e\\left(1-e^{-a(r-r_e)}\\right)^2',blurb:'真实双原子分子振动势。横轴 r。'},
  params:[n('De','De',1,0.1,5,0.01),n('a','a',1,0.1,5,0.01),n('re','re',1,0.1,3,0.01)],
  fn:p=>r=>{const D=p.De as number,a=p.a as number,re=p.re as number;return D*Math.pow(1-Math.exp(-a*(r-re)),2);},
  view:{cx:2,cy:0.5,scale:150},
});
