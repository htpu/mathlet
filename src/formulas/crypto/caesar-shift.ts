import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'caesar-shift',title:'Caesar 移位密码',domain:'crypto',level:1,tex:'c=(p+k)\\bmod 26',blurb:'字母 0..25 经移位 k 得到密文位置。横轴明文位置 p。'},
  params:[i('k','k',3,0,25)],
  fn:p=>x=>{const v=Math.floor(x);if(v<0||v>25)return NaN;return (v+(p.k as number))%26;},
  view:{cx:13,cy:13,scale:15},
});
