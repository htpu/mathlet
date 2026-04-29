import { i, n, s as sel } from '../types';
import { escapeTime } from '../../templates/escape';
export default escapeTime({
  meta:{slug:'tricorn',title:'Tricorn (Mandelbar)',domain:'fractal',level:4,tex:'z\\to\\bar z^2+c',blurb:'用共轭代替 z，对称破碎。'},
  params:[i('iter','迭代',150,32,500),n('cx','中心 x',0,-2,2,0.001),n('cy','中心 y',0,-2,2,0.001),n('zoom','缩放',0.5,0.1,1e3,0.1,true),sel('palette','调色板','fire',[{value:'fire',label:'Fire'},{value:'electric',label:'Electric'},{value:'rainbow',label:'Rainbow'}])],
  iterate:p=>(zx0,zy0,cx,cy)=>{let x=0,y=0,n=0; const max=p.iter as number;
    while(x*x+y*y<=4&&n<max){const xt=x*x-y*y+cx; y=-2*x*y+cy; x=xt; n++;} return n;},
});
