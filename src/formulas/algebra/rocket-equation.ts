import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'rocket-equation',title:'齐奥尔科夫斯基方程',domain:'algebra',level:2,tex:'\\Delta v=v_e\\ln\\frac{m_0}{m_f}',blurb:'Δv 随质量比对数增长。横轴 m₀/m_f。'},
  params:[n('ve','排气速度 ve (km/s)',4.4,1,10,0.01)],
  fn:p=>x=>{if(x<=1) return NaN; return (p.ve as number)*Math.log(x);},
  view:{cx:5,cy:8,scale:50},
});
