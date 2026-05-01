import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'rabi-oscillation',title:'Rabi 振荡 P(t)',domain:'quantum',level:3,tex:'P_{|1\\rangle}(t)=\\sin^2(\\Omega t/2)',blurb:'共振驱动下两能级激发概率。横轴 Ωt。'},
  params:[],
  fn:_=>x=>Math.pow(Math.sin(x/2),2),
  view:{cx:Math.PI*2,cy:0.5,scale:30},
});
