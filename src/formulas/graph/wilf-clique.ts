import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'wilf-clique',title:'Wilf 团数下界',domain:'graph',level:4,tex:'\\omega(G)\\ge\\frac{n}{n-\\rho(A)}',blurb:'图的最大团下界。横轴谱半径 ρ(A)，固定 n。'},
  params:[n('n','n',50,10,500,1)],
  fn:p=>r=>{const N=p.n as number;if(r>=N)return NaN;return N/(N-r);},
  view:{cx:25,cy:3,scale:8},
});
