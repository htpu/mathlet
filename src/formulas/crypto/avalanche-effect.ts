import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'avalanche-effect',title:'雪崩效应理想曲线',domain:'crypto',level:3,tex:'P(b_i\\text{ flips})=\\tfrac{1}{2}',blurb:'理想哈希翻转概率 1/2 + 二项分布 (n,1/2) 的归一化输出位翻转分布。'},
  params:[i('n','n bits',128,8,512)],
  fn:p=>k=>{const n=p.n as number;const v=Math.floor(k);if(v<0||v>n)return 0;let lc=0;for(let i=1;i<=v;i++) lc+=Math.log(n-i+1)-Math.log(i);return Math.exp(lc-n*Math.log(2));},
  view:{cx:64,cy:0.06,scale:5},
});
