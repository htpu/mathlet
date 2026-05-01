import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'lennard-jones',title:'Lennard-Jones 势',domain:'chemistry',level:3,tex:'V(r)=4\\varepsilon\\left[\\left(\\frac{\\sigma}{r}\\right)^{12}-\\left(\\frac{\\sigma}{r}\\right)^{6}\\right]',blurb:'两中性分子相互作用势。横轴 r/σ，纵轴 V/ε。'},
  params:[],
  fn:_=>r=>r<=0?NaN:4*(Math.pow(1/r,12)-Math.pow(1/r,6)),
  view:{cx:1.5,cy:0,scale:200},
});
