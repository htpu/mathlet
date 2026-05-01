import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'boltzmann-rate',title:'Boltzmann 速率分布 (3D)',domain:'chemistry',level:3,tex:'f(v)\\propto v^2 e^{-mv^2/2kT}',blurb:'Maxwell-Boltzmann 速率分布概率密度。横轴 v (m/s)。'},
  params:[n('T','T(K)',300,100,1500,1),n('M','M(g/mol)',28,1,200,0.1)],
  fn:p=>v=>{if(v<=0)return 0;const m=(p.M as number)*1.66e-27;const kT=1.38e-23*(p.T as number);return 4*Math.PI*Math.pow(m/(2*Math.PI*kT),1.5)*v*v*Math.exp(-m*v*v/(2*kT));},
  view:{cx:600,cy:0.001,scale:0.5},
});
