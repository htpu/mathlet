import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'rydberg-formula',title:'Rydberg 氢谱线',domain:'quantum',level:3,tex:'\\frac{1}{\\lambda}=R\\left(\\frac{1}{n_1^2}-\\frac{1}{n_2^2}\\right)',blurb:'氢原子跃迁波长。横轴 n₂，固定 n₁。'},
  params:[i('n1','n₁',2,1,5),i('span','axis range',10,3,15)],
  fn:p=>n2=>{const n1=p.n1 as number;const v=Math.floor(n2);if(v<=n1)return NaN;const inv=1.097e7*(1/(n1*n1)-1/(v*v));return 1/inv*1e9;},
  view:{cx:5,cy:500,scale:30},
});
