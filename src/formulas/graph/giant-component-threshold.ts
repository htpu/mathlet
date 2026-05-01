import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'giant-component-threshold',title:'巨连通分量阈值',domain:'graph',level:4,tex:'S=1-e^{-c\\,S}',blurb:'Erdős–Rényi 平均度 c=np 跨过 1 时巨分量大小 S 的相变。'},
  params:[],
  fn:_=>c=>{if(c<=0)return 0;let s=0.5;for(let i=0;i<60;i++) s=1-Math.exp(-c*s);return s;},
  view:{cx:2,cy:0.5,scale:120},
});
