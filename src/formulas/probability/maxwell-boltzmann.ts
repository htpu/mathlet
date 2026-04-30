import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'maxwell-boltzmann',title:'麦克斯韦-玻尔兹曼速率分布',domain:'probability',level:3,tex:'f(v)=4\\pi v^2(\\frac{m}{2\\pi kT})^{3/2}e^{-mv^2/2kT}',blurb:'气体分子速率分布。'},
  params:[n('T','温度 T (K)',300,100,2000,1),n('m','质量 m (1e-26 kg)',4.65,1,30,0.01)],
  fn:p=>x=>{const k=1.381e-23,T=p.T as number,m=(p.m as number)*1e-26,v=x; const a=m/(2*Math.PI*k*T); return 4*Math.PI*v*v*Math.pow(a,1.5)*Math.exp(-m*v*v/(2*k*T));},
  view:{cx:1500,cy:0.0007,scale:0.1},
});
