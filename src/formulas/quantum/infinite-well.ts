import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'infinite-well',title:'无限深势阱',domain:'quantum',level:3,tex:'\\psi_n(x)=\\sqrt{2/L}\\sin(n\\pi x/L)',blurb:'1D 盒子中的能级波函数。'},
  params:[i('n','量子数 n',1,1,8)],
  fn:p=>x=>{if(x<0||x>1) return 0; return Math.sqrt(2)*Math.sin((p.n as number)*Math.PI*x);},
  view:{cx:0.5,cy:0,scale:200},
});
