import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'superegg',title:'超球（superegg）',domain:'topology',level:3,tex:'|x|^n+|y|^n+|z|^n=1',blurb:'n=2 球，n→∞ 立方。'},
  params:[n('n','幂 n',4,0.5,8,0.05)],
  parametric:p=>{const nn=p.n as number;
    return (u,v,t)=>{const cu=Math.cos(u), su=Math.sin(u), cv=Math.cos(v), sv=Math.sin(v);
      const sgn=(x:number)=>x>=0?1:-1;
      const X=sgn(cv)*Math.pow(Math.abs(cv),2/nn)*sgn(cu)*Math.pow(Math.abs(cu),2/nn);
      const Y=sgn(sv)*Math.pow(Math.abs(sv),2/nn);
      const Z=sgn(cv)*Math.pow(Math.abs(cv),2/nn)*sgn(su)*Math.pow(Math.abs(su),2/nn);
      t.set(X,Y,Z);};
  },
  uRange:[0,Math.PI*2], vRange:[-Math.PI/2,Math.PI/2], segments:[60,40], color:0x39bae6,
});
