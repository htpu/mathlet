import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'freezing-point-depression',title:'凝固点降低',domain:'chemistry',level:2,tex:'\\Delta T_f=K_f m i',blurb:'稀溶液凝固点下降量与质量摩尔浓度成正比。横轴 m (mol/kg)。'},
  params:[n('Kf','Kf',1.86,0.1,40,0.01),n('i','i van’t Hoff',2,1,5,0.01)],
  fn:p=>m=>(p.Kf as number)*m*(p.i as number),
  view:{cx:1,cy:2,scale:80},
});
