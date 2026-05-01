import { n, i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'ideal-gas',title:'理想气体 PV=nRT',domain:'chemistry',level:1,tex:'P=\\frac{nRT}{V}',blurb:'等温线：压强随体积反比下降。横轴 V (L)。'},
  params:[i('n','n(mol)',1,1,5),n('T','T(K)',300,200,500,1)],
  fn:p=>V=>V<=0?NaN:(p.n as number)*0.08314*(p.T as number)/V,
  view:{cx:5,cy:5,scale:50},
});
