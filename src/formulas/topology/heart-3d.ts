import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'heart-3d',title:'3D 心形（Taubin）',domain:'topology',level:3,tex:'(x^2+\\frac{9}{4}y^2+z^2-1)^3=x^2z^3+\\frac{9}{80}y^2z^3',blurb:'Taubin 心形隐式曲面（参数近似）。'},
  params:[n('s','缩放',1,0.3,2,0.01)],
  parametric:p=>{const s=p.s as number;
    return (u,v,t)=>{
      const cu=Math.cos(u), su=Math.sin(u), cv=Math.cos(v), sv=Math.sin(v);
      const x=s*16*Math.pow(sv,3)*cu*0.06;
      const y=s*(13*cv-5*Math.cos(2*v)-2*Math.cos(3*v)-Math.cos(4*v))*0.06;
      const z=s*16*Math.pow(sv,3)*su*0.06;
      t.set(x,y,z);
    };
  },
  uRange:[0,Math.PI*2], vRange:[0,Math.PI], segments:[60,60], color:0xf07178,
});
