import { i } from '../types';
import { ifs } from '../../templates/ifs';
const ang=Math.PI*85/180; const r=1/(2*Math.cos(ang));
export default ifs({
  meta:{slug:'cesaro-fractal',title:'Cesàro 分形',domain:'fractal',level:3,tex:'\\text{2 maps with 85° angle}',blurb:'Koch 推广，角度可调达极限分形。'},
  params:[i('iters','点数',60000,5000,300000)],
  maps:()=>[
    {a:r*Math.cos(ang),b:-r*Math.sin(ang),c:r*Math.sin(ang),d:r*Math.cos(ang),e:0,f:0,w:1},
    {a:r*Math.cos(-ang),b:-r*Math.sin(-ang),c:r*Math.sin(-ang),d:r*Math.cos(-ang),e:0.5,f:0,w:1},
  ],
  view:{cx:0.5,cy:0.4,scale:300},
  color:'#39bae6',
});
