import { i } from '../types';
import { ca1d } from '../../templates/ca1d';
export default ca1d({
  meta:{slug:'totalistic',title:'1D Totalistic CA',domain:'cellular',level:4,tex:'\\text{rule based on neighborhood sum}',blurb:'代码 0..255 决定 8 种总和模式。'},
  params:[i('rule','规则',1635,0,16384), i('init','初始',0,0,1)],
  width:300, rows:200,
});
