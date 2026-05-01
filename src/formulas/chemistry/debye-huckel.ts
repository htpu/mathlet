import { n, i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'debye-huckel',title:'Debye-Hückel 活度系数',domain:'chemistry',level:3,tex:'\\log\\gamma=-\\frac{A z^2\\sqrt{I}}{1+Ba\\sqrt{I}}',blurb:'稀电解质活度系数随离子强度 I 变化。'},
  params:[i('z','z',2,1,4),n('Ba','B·a',1,0.1,5,0.01)],
  fn:p=>I=>I<=0?NaN:-(0.509)*(p.z as number)*(p.z as number)*Math.sqrt(I)/(1+(p.Ba as number)*Math.sqrt(I)),
  view:{cx:0.5,cy:-0.5,scale:300},
});
