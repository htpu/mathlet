import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'franck-condon',title:'Franck-Condon 振动重叠',domain:'quantum',level:4,tex:'I_{0\\to v}\\propto e^{-S}\\frac{S^v}{v!}',blurb:'Poisson 形式振动跃迁强度（Huang-Rhys 因子 S）。横轴 v。'},
  params:[n('S','S',2,0.1,10,0.01)],
  fn:p=>x=>{const v=Math.floor(x);if(v<0)return 0;const S=p.S as number;let lf=0;for(let i=2;i<=v;i++) lf+=Math.log(i);return Math.exp(-S+v*Math.log(S)-lf);},
  view:{cx:5,cy:0.2,scale:25},
});
