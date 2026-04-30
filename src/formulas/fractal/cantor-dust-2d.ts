import { i } from '../types';
import { ifs } from '../../templates/ifs';
const r=1/3;
export default ifs({
  meta:{slug:'cantor-dust-2d',title:'2D Cantor 尘',domain:'fractal',level:2,tex:'\\text{4 corner contractions, 1/3}',blurb:'方形 4 角不断 1/3 缩放。'},
  params:[i('iters','点数',60000,5000,300000)],
  maps:()=>[
    {a:r,b:0,c:0,d:r,e:0,f:0,w:1},
    {a:r,b:0,c:0,d:r,e:2/3,f:0,w:1},
    {a:r,b:0,c:0,d:r,e:0,f:2/3,w:1},
    {a:r,b:0,c:0,d:r,e:2/3,f:2/3,w:1},
  ],
  view:{cx:0.5,cy:0.5,scale:300},
  color:'#c2d94c',
});
