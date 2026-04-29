import { i } from '../types';
import { ifs } from '../../templates/ifs';
export default ifs({
  meta:{slug:'ifs-barnsley',title:'Barnsley 蕨',domain:'fractal',level:3,tex:'\\text{IFS: 4 仿射映射加权}',blurb:'4 个仿射映射 + 概率权重生成蕨叶。'},
  params:[i('iters','迭代点数',80000,5000,300000)],
  maps:()=>[
    {a:0,b:0,c:0,d:0.16,e:0,f:0,w:0.01},
    {a:0.85,b:0.04,c:-0.04,d:0.85,e:0,f:1.6,w:0.85},
    {a:0.2,b:-0.26,c:0.23,d:0.22,e:0,f:1.6,w:0.07},
    {a:-0.15,b:0.28,c:0.26,d:0.24,e:0,f:0.44,w:0.07},
  ],
  iterations:80000,
  view:{cx:0,cy:5,scale:50},
  color:'#39d96e',
});
