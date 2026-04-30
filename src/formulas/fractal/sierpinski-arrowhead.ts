import { i } from '../types';
import { ifs } from '../../templates/ifs';
const r=0.5;
export default ifs({
  meta:{slug:'sierpinski-arrowhead',title:'Sierpinski 箭头',domain:'fractal',level:3,tex:'\\text{3 maps, 60° rotations}',blurb:'生成 Sierpinski 三角的曲线版本。'},
  params:[i('iters','点数',80000,5000,300000)],
  maps:()=>[
    {a:r,b:0,c:0,d:r,e:0,f:0,w:1},
    {a:r*Math.cos(Math.PI/3),b:-r*Math.sin(Math.PI/3),c:r*Math.sin(Math.PI/3),d:r*Math.cos(Math.PI/3),e:r,f:0,w:1},
    {a:r,b:0,c:0,d:r,e:0.75,f:r*Math.sin(Math.PI/3),w:1},
  ],
  view:{cx:0.5,cy:0.3,scale:300},
  color:'#d2a6ff',
});
