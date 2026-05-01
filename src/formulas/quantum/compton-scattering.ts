import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'compton-scattering',title:'Compton 散射波长偏移',domain:'quantum',level:3,tex:"\\lambda'-\\lambda=\\frac{h}{m_e c}(1-\\cos\\theta)",blurb:'光子从电子散射的波长增量。横轴散射角 θ (rad)。'},
  params:[n('span','axis',Math.PI,0.1,Math.PI,0.01)],
  fn:_=>th=>2.426e-12*(1-Math.cos(th)), // m
  view:{cx:Math.PI/2,cy:2.4e-12,scale:80},
});
