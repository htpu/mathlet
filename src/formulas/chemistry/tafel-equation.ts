import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'tafel-equation',title:'Tafel 方程',domain:'chemistry',level:3,tex:'\\eta=a+b\\log j',blurb:'电化学过电位与电流密度对数关系。横轴 log10 j。'},
  params:[n('a','a (V)',-0.4,-1,1,0.001),n('b','b (V/dec)',0.118,0.02,0.5,0.001)],
  fn:p=>x=>(p.a as number)+(p.b as number)*x,
  view:{cx:0,cy:-0.3,scale:300},
});
