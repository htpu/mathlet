import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'photoelectric',title:'光电效应 E_k = hf − φ',domain:'quantum',level:2,tex:'E_k=hf-\\varphi',blurb:'最大动能随频率线性。横轴 f (10¹⁴ Hz)，纵轴 E_k (eV)。'},
  params:[n('phi','φ(eV)',2.3,1,6,0.01)],
  fn:p=>f=>{const E=4.136e-15*f*1e14-(p.phi as number);return E;},
  view:{cx:8,cy:0,scale:50},
});
