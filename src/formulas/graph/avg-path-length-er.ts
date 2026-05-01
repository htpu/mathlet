import { n as nn } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'avg-path-length-er',title:'Erdős–Rényi 平均路径长度',domain:'graph',level:3,tex:'\\langle\\ell\\rangle\\approx\\frac{\\ln n}{\\ln(np)}',blurb:'随机图直径量级。横轴 n。'},
  params:[nn('np','np',3,1.1,20,0.01)],
  fn:p=>n=>{if(n<=1)return NaN;return Math.log(n)/Math.log(p.np as number);},
  view:{cx:500,cy:5,scale:1},
});
