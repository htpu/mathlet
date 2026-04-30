import { i } from '../types';
import { ifs } from '../../templates/ifs';
const r=1/4;
export default ifs({
  meta:{slug:'koch-quadratic',title:'四次 Koch 曲线',domain:'fractal',level:3,tex:'\\text{8 segments scaled 1/4}',blurb:'方形齿状 Koch 推广。'},
  params:[i('iters','点数',100000,5000,300000)],
  maps:()=>[
    {a:r,b:0,c:0,d:r,e:0,f:0,w:1},
    {a:0,b:-r,c:r,d:0,e:r,f:0,w:1},
    {a:r,b:0,c:0,d:r,e:r,f:r,w:1},
    {a:r,b:0,c:0,d:r,e:2*r,f:r,w:1},
    {a:0,b:r,c:-r,d:0,e:3*r,f:r,w:1},
    {a:0,b:r,c:-r,d:0,e:3*r,f:0,w:1},
    {a:r,b:0,c:0,d:r,e:3*r,f:-r,w:1},
    {a:r,b:0,c:0,d:r,e:4*r-r,f:0,w:1},
  ],
  view:{cx:0.5,cy:0,scale:280},
  color:'#39bae6',
});
