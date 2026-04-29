import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'rastrigin',title:'Rastrigin 函数',domain:'optimization',level:4,tex:'f=20+x^2+y^2-10(\\cos 2\\pi x+\\cos 2\\pi y)',blurb:'网格状局部极小。'},
  params:[],
  parametric:()=>(u,v,t)=>{const f=20+u*u+v*v-10*(Math.cos(2*Math.PI*u)+Math.cos(2*Math.PI*v)); t.set(u, f*0.1, v);},
  uRange:[-3,3], vRange:[-3,3], segments:[80,80], color:0xffb454,
});
