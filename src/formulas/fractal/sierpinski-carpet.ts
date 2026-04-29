import { i } from '../types';
import { ifs } from '../../templates/ifs';
export default ifs({
  meta:{slug:'sierpinski-carpet',title:'Sierpinski 地毯',domain:'fractal',level:3,tex:'\\text{8 个 1/3 缩仿射}',blurb:'方形挖中心，递归 8 个子方形。'},
  params:[i('iters','迭代',80000,5000,300000)],
  maps:()=>{
    const out=[];
    for(let i=0;i<3;i++) for(let j=0;j<3;j++){if(i===1&&j===1) continue;
      out.push({a:1/3,b:0,c:0,d:1/3,e:i/3,f:j/3,w:1});
    }
    return out;
  },
  iterations:80000,
  view:{cx:0.5,cy:0.5,scale:300},
  color:'#ffb454',
});
