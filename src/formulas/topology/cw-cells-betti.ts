import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'cw-cells-betti',title:'Morse 不等式',domain:'topology',level:5,tex:'c_k\\ge b_k',blurb:'CW 复形 k-胞数下界 = Betti 数 b_k。横轴 k 维度。'},
  params:[],
  fn:_=>k=>{const v=Math.floor(k);if(v<0)return NaN;return v;},
  view:{cx:5,cy:5,scale:30},
});
