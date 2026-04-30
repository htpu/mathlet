import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'ficks-law',title:'Fick 扩散定律',domain:'biology',level:2,tex:'J=-D\\frac{dC}{dx}',blurb:'通量正比于浓度梯度。横轴 dC/dx。'},
  params:[n('D','D',1,0.01,10,0.01)],
  fn:p=>x=>-(p.D as number)*x,
  view:{cx:0,cy:0,scale:50},
});
