import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'stern-gerlach',title:'Stern-Gerlach 测量',domain:'quantum',level:3,tex:'P(\\uparrow)=\\cos^2(\\theta/2)',blurb:'自旋投影概率。横轴 θ (rad)。'},
  params:[],
  fn:()=>x=>Math.cos(x/2)**2,
  view:{cx:Math.PI,cy:0.5,scale:80},
});
