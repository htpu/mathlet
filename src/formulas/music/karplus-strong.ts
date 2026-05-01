import { n, i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'karplus-strong',title:'Karplus-Strong 弦合成',domain:'music',level:3,tex:'y[n]=\\frac{1}{2}(y[n-N]+y[n-N-1])',blurb:'拨弦合成衰减包络。横轴 n (sample)，纵轴幅度。'},
  params:[i('N','N (delay)',50,5,200),n('decay','decay',0.995,0.9,1,0.0001)],
  fn:p=>x=>{const N=p.N as number;const d=p.decay as number;const n=Math.floor(x);if(n<0)return 0;return Math.pow(d,Math.floor(n/N))*Math.cos(2*Math.PI*n/N);},
  view:{cx:200,cy:0,scale:0.6},
});
