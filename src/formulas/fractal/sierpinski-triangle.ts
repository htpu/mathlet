import { i } from '../types';
import { ifs } from '../../templates/ifs';
export default ifs({
  meta:{slug:'sierpinski-triangle',title:'Sierpinski 三角',domain:'fractal',level:2,tex:'\\text{3 半缩仿射}',blurb:'三角形递归挖洞。'},
  params:[i('iters','迭代',60000,5000,300000)],
  maps:()=>[
    {a:0.5,b:0,c:0,d:0.5,e:0,f:0,w:1},
    {a:0.5,b:0,c:0,d:0.5,e:0.5,f:0,w:1},
    {a:0.5,b:0,c:0,d:0.5,e:0.25,f:0.5,w:1},
  ],
  iterations:60000,
  view:{cx:0.5,cy:0.4,scale:300},
  color:'#39bae6',
});
