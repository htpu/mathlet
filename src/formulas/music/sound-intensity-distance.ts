import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'sound-intensity-distance',title:'声强随距离衰减 (1/r²)',domain:'music',level:1,tex:'I=\\frac{P}{4\\pi r^2}',blurb:'点声源声强 ∝ 1/r²。横轴 r (m)。'},
  params:[],
  fn:_=>r=>r<=0?NaN:1/(4*Math.PI*r*r),
  view:{cx:5,cy:0.005,scale:30},
});
