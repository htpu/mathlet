import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'bohemian-dome',title:'波西米亚穹顶',domain:'topology',level:4,tex:'(a\\cos u, b\\sin u+c\\cos v, c\\sin v)',blurb:'两正交圆的扫掠面。'},
  params:[n('a','a',1,0.3,2,0.01),n('b','b',1,0.3,2,0.01),n('c','c',0.5,0.2,1.5,0.01)],
  parametric:p=>{const a=p.a as number, b=p.b as number, c=p.c as number;
    return (u,v,t)=>t.set(a*Math.cos(u), b*Math.sin(u)+c*Math.cos(v), c*Math.sin(v));},
  uRange:[0,Math.PI*2], vRange:[0,Math.PI*2], segments:[60,40], color:0xf07178,
});
