import { i } from '../types';
import { ifs } from '../../templates/ifs';
const s=0.25;
export default ifs({
  meta:{slug:'minkowski-sausage',title:'Minkowski 香肠',domain:'fractal',level:3,tex:'\\text{8 segments per generator}',blurb:'方形拐弯递推的四进制曲线。'},
  params:[i('iters','点数',100000,5000,300000)],
  maps:()=>[
    {a:s,b:0,c:0,d:s,e:0,f:0,w:1},
    {a:0,b:-s,c:s,d:0,e:s,f:0,w:1},
    {a:s,b:0,c:0,d:s,e:s,f:s,w:1},
    {a:0,b:s,c:-s,d:0,e:2*s,f:s,w:1},
    {a:s,b:0,c:0,d:s,e:2*s,f:0,w:1},
    {a:0,b:-s,c:s,d:0,e:3*s,f:0,w:1},
    {a:s,b:0,c:0,d:s,e:3*s,f:s,w:1},
    {a:s,b:0,c:0,d:s,e:3*s+s,f:0,w:1},
  ],
  view:{cx:0.5,cy:0.2,scale:280},
  color:'#ffb454',
});
