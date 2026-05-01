import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'fermat-witness',title:'Fermat 素性测试假阴率',domain:'crypto',level:3,tex:'P_{fail}\\le 2^{-k}',blurb:'k 轮测试下 Fermat / Miller-Rabin 漏报概率上界。'},
  params:[],
  fn:_=>k=>k<0?NaN:Math.pow(2,-k),
  view:{cx:10,cy:0.5,scale:30},
});
