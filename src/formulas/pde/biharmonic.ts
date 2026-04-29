import { n, i } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'biharmonic',title:'双调和方程（板模式）',domain:'pde',level:5,tex:'\\nabla^4 u=0',blurb:'矩形板的弯曲振型。'},
  params:[i('m','m',2,1,5),i('n','n',2,1,5),n('amp','幅度',0.3,0.05,1,0.005)],
  parametric:p=>{const m=p.m as number, nn=p.n as number, a=p.amp as number;
    return (u,v,t)=>t.set(u-0.5, (Math.sin(m*Math.PI*u)*Math.sin(nn*Math.PI*v)+0.3*Math.sin(2*Math.PI*u)*Math.sin(2*Math.PI*v))*a, v-0.5);
  },
  uRange:[0,1], vRange:[0,1], segments:[60,60], color:0xc2d94c, showAxes:false,
});
