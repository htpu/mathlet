import { i } from '../types';
import { ifs } from '../../templates/ifs';
const r=Math.SQRT1_2;
export default ifs({
  meta:{slug:'levy-c-curve',title:'Lévy C 曲线',domain:'fractal',level:3,tex:'\\text{rotate ±45°, scale }1/\\sqrt{2}',blurb:'两次缩放旋转的自相似曲线。'},
  params:[i('iters','点数',60000,5000,300000)],
  maps:()=>[
    {a:r*Math.cos(Math.PI/4),b:-r*Math.sin(Math.PI/4),c:r*Math.sin(Math.PI/4),d:r*Math.cos(Math.PI/4),e:0,f:0,w:1},
    {a:r*Math.cos(-Math.PI/4),b:-r*Math.sin(-Math.PI/4),c:r*Math.sin(-Math.PI/4),d:r*Math.cos(-Math.PI/4),e:0.5,f:0.5,w:1},
  ],
  view:{cx:0.5,cy:0.4,scale:280},
  color:'#39bae6',
});
