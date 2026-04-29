import { i } from '../types';
import { ifs } from '../../templates/ifs';
export default ifs({
  meta:{slug:'box-fractal',title:'盒分形 (5 角)',domain:'fractal',level:3,tex:'\\text{5 sub-boxes (corners + center)}',blurb:'方块四角+中心保留，递归。'},
  params:[i('iters','点数',60000,5000,300000)],
  maps:()=>[
    {a:1/3,b:0,c:0,d:1/3,e:0,f:0,w:1},
    {a:1/3,b:0,c:0,d:1/3,e:2/3,f:0,w:1},
    {a:1/3,b:0,c:0,d:1/3,e:0,f:2/3,w:1},
    {a:1/3,b:0,c:0,d:1/3,e:2/3,f:2/3,w:1},
    {a:1/3,b:0,c:0,d:1/3,e:1/3,f:1/3,w:1},
  ],
  iterations:60000,
  view:{cx:0.5,cy:0.5,scale:300},
  color:'#c2d94c',
});
