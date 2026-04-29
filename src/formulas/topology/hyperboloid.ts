import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'hyperboloid',title:'单叶双曲面',domain:'topology',level:3,tex:'\\frac{x^2+y^2}{a^2}-\\frac{z^2}{c^2}=1',blurb:'两族直线生成的二次曲面。'},
  params:[n('a','a',1,0.3,3,0.01),n('c','c',1,0.3,3,0.01),n('h','高度',1.5,0.3,3,0.01)],
  parametric:p=>{const a=p.a as number, c=p.c as number, h=p.h as number;
    return (u,v,t)=>{const z=v*h*2-h; const r=a*Math.sqrt(1+(z/c)**2);
      t.set(r*Math.cos(u), z, r*Math.sin(u));};},
  uRange:[0,Math.PI*2], vRange:[0,1], segments:[60,40], color:0xd2a6ff,
});
