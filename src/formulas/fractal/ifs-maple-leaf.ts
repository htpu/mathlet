import { i } from '../types';
import { ifs } from '../../templates/ifs';
export default ifs({
  meta:{slug:'ifs-maple-leaf',title:'枫叶 IFS',domain:'fractal',level:3,tex:'\\text{4 contractions}',blurb:'四映射逼近的叶形吸引子。'},
  params:[i('iters','点数',80000,5000,300000)],
  maps:()=>[
    {a:0.14,b:0.01,c:0,d:0.51,e:-0.08,f:-1.31,w:0.1},
    {a:0.43,b:0.52,c:-0.45,d:0.5,e:1.49,f:-0.75,w:0.35},
    {a:0.45,b:-0.49,c:0.47,d:0.47,e:-1.62,f:-0.74,w:0.35},
    {a:0.49,b:0,c:0,d:0.51,e:0.02,f:1.62,w:0.2},
  ],
  view:{cx:0,cy:0,scale:50},
  color:'#f07178',
});
