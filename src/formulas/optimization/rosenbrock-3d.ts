import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'rosenbrock-3d',title:'Rosenbrock 香蕉函数',domain:'optimization',level:3,tex:'f=(1-x)^2+100(y-x^2)^2',blurb:'经典优化测试函数。'},
  params:[],
  parametric:()=>(u,v,t)=>t.set(u, Math.min(50, ((1-u)**2+100*(v-u*u)**2)*0.05), v),
  uRange:[-2,2], vRange:[-1,3], segments:[80,80], color:0xffb454,
});
