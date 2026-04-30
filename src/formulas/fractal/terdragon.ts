import { i } from '../types';
import { ifs } from '../../templates/ifs';
const r=1/Math.sqrt(3);
export default ifs({
  meta:{slug:'terdragon',title:'Terdragon (三龙曲线)',domain:'fractal',level:3,tex:'\\text{3 maps, scale }1/\\sqrt{3},\\text{ ±30°}',blurb:'L 系统 F+F-F 的几何自相似。'},
  params:[i('iters','点数',80000,5000,300000)],
  maps:()=>[
    {a:r*Math.cos(Math.PI/6),b:-r*Math.sin(Math.PI/6),c:r*Math.sin(Math.PI/6),d:r*Math.cos(Math.PI/6),e:0,f:0,w:1},
    {a:r*Math.cos(-Math.PI/2),b:-r*Math.sin(-Math.PI/2),c:r*Math.sin(-Math.PI/2),d:r*Math.cos(-Math.PI/2),e:r*Math.cos(Math.PI/6),f:r*Math.sin(Math.PI/6),w:1},
    {a:r*Math.cos(Math.PI/6),b:-r*Math.sin(Math.PI/6),c:r*Math.sin(Math.PI/6),d:r*Math.cos(Math.PI/6),e:r*Math.cos(Math.PI/6),f:r*Math.sin(Math.PI/6)+r*Math.cos(Math.PI/6),w:1},
  ],
  view:{cx:0.5,cy:0.5,scale:300},
  color:'#ffb454',
});
