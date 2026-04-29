import { n, i } from '../types';
import { surface3d } from '../../templates/surface3d';
import * as THREE from 'three';
export default surface3d({
  meta:{slug:'helmholtz-2d',title:'2D 亥姆霍兹方程（矩形膜本征模）',domain:'pde',level:4,tex:'(\\nabla^2+k^2)u=0',blurb:'矩形膜本征模 sin(mπx)sin(nπy)。'},
  params:[i('m','m',2,1,6),i('n','n',3,1,6),n('amp','幅度',0.4,0.05,1,0.01)],
  parametric:p=>{const m=p.m as number, nn=p.n as number, a=p.amp as number;
    return (u,v,t)=>t.set(u-0.5, Math.sin(m*Math.PI*u)*Math.sin(nn*Math.PI*v)*a, v-0.5);
  },
  uRange:[0,1], vRange:[0,1], segments:[60,60], color:0x39bae6, showAxes:false,
});
