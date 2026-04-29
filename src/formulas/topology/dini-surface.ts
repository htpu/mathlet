import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'dini-surface',title:'Dini 螺旋面',domain:'topology',level:5,tex:'(\\cos u\\sin v,\\sin u\\sin v,\\cos v+\\ln\\tan(v/2)+au)',blurb:'常负高斯曲率的扭转曲面。'},
  params:[n('a','扭转 a',0.2,0.05,0.6,0.005),n('turns','圈数',2,1,4,0.05)],
  parametric:p=>{const a=p.a as number, T=p.turns as number;
    return (u,v,t)=>{const U=u*T*Math.PI*2; const V=v*0.95+0.05;
      const x=Math.cos(U)*Math.sin(V); const y=Math.sin(U)*Math.sin(V); const z=Math.cos(V)+Math.log(Math.max(1e-6,Math.tan(V/2)))+a*U;
      t.set(x,z*0.3,y);};},
  uRange:[0,1], vRange:[0,1], segments:[120,40], color:0xf07178,
});
