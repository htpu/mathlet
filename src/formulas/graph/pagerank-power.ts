import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'pagerank-power',title:'PageRank 收敛',domain:'graph',level:3,tex:'PR^{(t+1)}=dMP^{(t)}+(1-d)/N',blurb:'误差随迭代指数衰减。横轴 t。'},
  params:[n('d','阻尼 d',0.85,0,1,0.001)],
  fn:p=>t=>{if(t<0) return NaN; return Math.pow(p.d as number, t);},
  view:{cx:15,cy:0.5,scale:15},
});
