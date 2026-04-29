import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'himmelblau',title:'Himmelblau 函数',domain:'optimization',level:4,tex:'f=(x^2+y-11)^2+(x+y^2-7)^2',blurb:'4 个相同高度局部极小。'},
  params:[],
  parametric:()=>(u,v,t)=>t.set(u, Math.min(50, ((u*u+v-11)**2+(u+v*v-7)**2)*0.02), v),
  uRange:[-5,5], vRange:[-5,5], segments:[80,80], color:0xc2d94c,
});
