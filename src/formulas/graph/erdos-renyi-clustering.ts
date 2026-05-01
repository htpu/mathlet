import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'erdos-renyi-clustering',title:'ER 聚类系数 C = p',domain:'graph',level:3,tex:'C=p=\\frac{\\langle k\\rangle}{n-1}',blurb:'随机图聚类系数随平均度线性。横轴 ⟨k⟩，固定 n。'},
  params:[i('n','n',1000,50,10000)],
  fn:p=>k=>k<0?NaN:k/((p.n as number)-1),
  view:{cx:30,cy:0.03,scale:10},
});
