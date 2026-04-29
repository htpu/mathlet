import { n, i } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'membrane-rect',title:'矩形膜本征模 (m, n)',domain:'pde',level:3,tex:'\\sin(m\\pi x/a)\\sin(n\\pi y/b)',blurb:'与 helmholtz-2d 类似但纵横比可调。'},
  params:[i('m','m',2,1,6),i('n','n',3,1,6),n('a','宽 a',1,0.3,2,0.01),n('b','高 b',1,0.3,2,0.01)],
  parametric:p=>{const m=p.m as number, nn=p.n as number, a=p.a as number, b=p.b as number;
    return (u,v,t)=>t.set(u*a-a/2, Math.sin(m*Math.PI*u)*Math.sin(nn*Math.PI*v)*0.5, v*b-b/2);},
  uRange:[0,1], vRange:[0,1], segments:[50,50], color:0xd2a6ff, showAxes:false,
});
