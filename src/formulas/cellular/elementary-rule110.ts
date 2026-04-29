import { i } from '../types';
import { ca1d } from '../../templates/ca1d';
export default ca1d({
  meta:{slug:'elementary-rule110',title:'Elementary CA Rule 110（图灵完备）',domain:'cellular',level:4,tex:'\\text{Rule 110}',blurb:'已被证明图灵完备的简单 1D CA。'},
  params:[i('rule','规则号',110,0,255), i('init',' 初始',1,0,1)],
  width:300, rows:200,
});
