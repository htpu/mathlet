import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'qubit-rotation',title:'量子比特 Bloch 旋转',domain:'quantum',level:3,tex:'\\langle\\sigma_z\\rangle=\\cos\\theta',blurb:'Bloch 球极角 θ 决定 Z 期望。横轴 θ。'},
  params:[],
  fn:_=>th=>Math.cos(th),
  view:{cx:Math.PI,cy:0,scale:80},
});
