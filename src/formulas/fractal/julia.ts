import { n, i, s as sel } from '../types';
import { escapeTime } from '../../templates/escape';
export default escapeTime({
  meta:{slug:'julia',title:'Julia 集',domain:'fractal',level:4,tex:'z_{n+1}=z_n^2+c',blurb:'固定 c，初值 z₀ 扫遍复平面。'},
  params:[i('iter','迭代',200,32,1000),n('cReal','c 实部',-0.7,-2,2,0.001),n('cImag','c 虚部',0.27,-2,2,0.001),n('cx','中心 x',0,-2,2,0.005),n('cy','中心 y',0,-2,2,0.005),n('zoom','缩放',1,0.1,1e4,0.1,true),sel('palette','调色板','electric',[{value:'fire',label:'Fire'},{value:'ice',label:'Ice'},{value:'electric',label:'Electric'},{value:'rainbow',label:'Rainbow'}])],
  iterate:p=>(zx0,zy0)=>{let x=zx0,y=zy0,n=0; const max=p.iter as number; const cR=p.cReal as number, cI=p.cImag as number;
    while(x*x+y*y<=4&&n<max){const xt=x*x-y*y+cR; y=2*x*y+cI; x=xt; n++;} return n;},
});
