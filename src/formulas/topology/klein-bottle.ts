import * as THREE from 'three';
import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'klein-bottle',title:'克莱因瓶',domain:'topology',level:4,tex:'\\text{Klein parameterization}',blurb:'无内外之分的不可定向曲面（沉浸到 R³）。'},
  params:[n('scale','缩放',0.3,0.1,0.6,0.005)],
  parametric:p=>{const sc=p.scale as number;
    return (u,v,t)=>{
      const cu=Math.cos(u), su=Math.sin(u);
      let x=0,y=0,z=0;
      if(u<Math.PI){
        x=3*cu*(1+su)+(2*(1-cu/2))*cu*Math.cos(v);
        y=8*su+(2*(1-cu/2))*su*Math.cos(v);
      } else {
        x=3*cu*(1+su)+(2*(1-cu/2))*Math.cos(v+Math.PI);
        y=8*su;
      }
      z=(2*(1-cu/2))*Math.sin(v);
      t.set(x*sc,y*sc,z*sc);
    };
  },
  uRange:[0,Math.PI*2], vRange:[0,Math.PI*2], segments:[100,40], color:0x39bae6,
});
