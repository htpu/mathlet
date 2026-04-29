import { i } from '../types';
import { ifs } from '../../templates/ifs';
export default ifs({
  meta:{slug:'menger-sponge-2d',title:'Menger 立方体（2D 投影）',domain:'fractal',level:4,tex:'\\text{20 sub-cubes}',blurb:'每方块切 27，去 7 → 20 留下。'},
  params:[i('iters','点数',100000,5000,400000)],
  maps:()=>{
    const out=[];
    for(let i=0;i<3;i++) for(let j=0;j<3;j++){
      const skip=(i===1&&j===1);
      if(!skip) out.push({a:1/3,b:0,c:0,d:1/3,e:i/3,f:j/3,w:1});
    }
    return out;
  },
  iterations:100000,
  view:{cx:0.5,cy:0.5,scale:300},
  color:'#39bae6',
});
