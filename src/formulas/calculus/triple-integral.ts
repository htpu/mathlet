import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
import * as THREE from 'three';
export default surface3d({
  meta:{slug:'triple-integral',title:'三重积分（球体可视化）',domain:'calculus',level:3,tex:'V=\\iiint dV=\\frac{4}{3}\\pi r^3',blurb:'球体作为三重积分的几何对象。'},
  params:[n('r','r',1,0.3,2,0.01)],
  parametric:p=>{const r=p.r as number; return (u,v,t)=>t.set(r*Math.sin(v)*Math.cos(u),r*Math.cos(v),r*Math.sin(v)*Math.sin(u));},
  uRange:[0,Math.PI*2], vRange:[0,Math.PI], segments:[40,40], color:0x39bae6,
});
