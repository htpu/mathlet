import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'hill-equation',title:'Hill 方程',domain:'biology',level:3,tex:'\\theta=\\frac{S^n}{K^n+S^n}',blurb:'协同结合，n>1 sigmoid。'},
  params:[n('K','K',1,0.1,5,0.01),n('nh','n',2,0.5,8,0.01)],
  fn:p=>x=>{if(x<=0) return 0; const k=Math.pow(x,p.nh as number); return k/(Math.pow(p.K as number,p.nh as number)+k);},
  view:{cx:2.5,cy:0.5,scale:80},
});
