import { i } from '../types';
import { ifs } from '../../templates/ifs';
export default ifs({
  meta:{slug:'ifs-spiral',title:'IFS 螺旋',domain:'fractal',level:3,tex:'\\text{2 contraction maps with rotation}',blurb:'两映射螺旋吸引子。'},
  params:[i('iters','点数',80000,5000,300000)],
  maps:()=>[
    {a:0.787879,b:-0.424242,c:0.242424,d:0.859848,e:1.758647,f:1.408065,w:0.9},
    {a:-0.121212,b:0.257576,c:0.151515,d:0.053030,e:-6.721654,f:1.377236,w:0.1},
  ],
  view:{cx:0,cy:5,scale:18},
  color:'#d2a6ff',
});
