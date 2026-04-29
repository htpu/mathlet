import { i } from '../types';
import { ca1d } from '../../templates/ca1d';
export default ca1d({
  meta:{slug:'wolfram-1d',title:'Wolfram 1D 元胞自动机',domain:'cellular',level:2,tex:'\\text{rule } 0\\le r\\le 255',blurb:'rule 30 混沌, rule 90 谢尔宾斯基, rule 110 图灵完备。'},
  params:[i('rule','规则号',30,0,255), i('init','初始',0,0,1)],
  width:300, rows:200,
});
