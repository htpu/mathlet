import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'plucker-genus',title:'Plücker 亏格 g(d)',domain:'topology',level:4,tex:'g=\\frac{(d-1)(d-2)}{2}',blurb:'光滑平面代数曲线亏格。横轴次数 d。'},
  params:[],
  fn:_=>d=>{const v=Math.floor(d);if(v<1)return NaN;return (v-1)*(v-2)/2;},
  view:{cx:8,cy:30,scale:25},
});
