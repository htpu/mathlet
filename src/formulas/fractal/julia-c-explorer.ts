import { i, n, s as sel } from '../types';
import { escapeTime } from '../../templates/escape';
export default escapeTime({
  meta:{slug:'julia-c-explorer',title:'Julia 集 c 巡游',domain:'fractal',level:4,tex:'z\\to z^2+c',blurb:'细调 c 看 Julia 形态突变。'},
  params:[i('iter','迭代',150,32,500),n('cReal','c 实',-0.4,-2,2,0.001),n('cImag','c 虚',0.6,-2,2,0.001),n('cx','x',0,-2,2,0.005),n('cy','y',0,-2,2,0.005),n('zoom','缩放',0.7,0.1,1e3,0.1,true),sel('palette','调色板','rainbow',[{value:'fire',label:'Fire'},{value:'electric',label:'Electric'},{value:'rainbow',label:'Rainbow'}])],
  iterate:p=>(zx0,zy0)=>{let x=zx0,y=zy0,n=0; const max=p.iter as number; const cR=p.cReal as number, cI=p.cImag as number;
    while(x*x+y*y<=4&&n<max){const xt=x*x-y*y+cR; y=2*x*y+cI; x=xt; n++;} return n;},
});
