import { i } from '../types';
import { ifs } from '../../templates/ifs';
export default ifs({
  meta:{slug:'ifs-tree',title:'IFS 树',domain:'fractal',level:3,tex:'\\text{4 affine maps}',blurb:'四映射树状吸引子。'},
  params:[i('iters','点数',80000,5000,300000)],
  maps:()=>[
    {a:0.05,b:0,c:0,d:0.6,e:0,f:0,w:0.1},
    {a:0.05,b:0,c:0,d:-0.5,e:0,f:1,w:0.1},
    {a:0.46,b:-0.32,c:0.39,d:0.38,e:0,f:0.6,w:0.4},
    {a:0.47,b:0.15,c:-0.15,d:0.42,e:0,f:1.1,w:0.4},
  ],
  view:{cx:0,cy:1.5,scale:120},
  color:'#c2d94c',
});
