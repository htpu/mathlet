import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'seashell',title:'海螺曲面',domain:'topology',level:3,tex:'\\text{spiral } \\times\\text{ tube}',blurb:'指数螺旋路径上拉伸圆 = 海螺。'},
  params:[n('a','螺旋速率',0.18,0.05,0.5,0.005),n('turns','圈数',3,1,6,0.05)],
  parametric:p=>{const a=p.a as number, T=p.turns as number;
    return (u,v,t)=>{const U=u*T*Math.PI*2; const e=Math.exp(a*U);
      const x=(1-v)*e*Math.cos(U)*(1+0.3*Math.cos(v*Math.PI*2));
      const y=(1-v)*e*Math.sin(U)*(1+0.3*Math.cos(v*Math.PI*2));
      const z=0.3*e*Math.sin(v*Math.PI*2);
      t.set(x*0.3, z, y*0.3);};
  },
  uRange:[0,1], vRange:[0,1], segments:[120,40], color:0xd2a6ff,
});
