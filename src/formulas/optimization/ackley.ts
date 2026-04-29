import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'ackley',title:'Ackley 函数',domain:'optimization',level:4,tex:'f=-20e^{-0.2\\sqrt{(x^2+y^2)/2}}-e^{(\\cos 2\\pi x+\\cos 2\\pi y)/2}+e+20',blurb:'多模态地形测试。'},
  params:[],
  parametric:()=>(u,v,t)=>{const r=Math.sqrt((u*u+v*v)/2); const f=-20*Math.exp(-0.2*r)-Math.exp((Math.cos(2*Math.PI*u)+Math.cos(2*Math.PI*v))/2)+Math.E+20; t.set(u, f*0.2, v);},
  uRange:[-3,3], vRange:[-3,3], segments:[80,80], color:0x39bae6,
});
