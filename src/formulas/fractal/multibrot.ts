import { i, n, s as sel } from '../types';
import { escapeTime } from '../../templates/escape';
export default escapeTime({
  meta:{slug:'multibrot',title:'Multibrot z^d+c',domain:'fractal',level:4,tex:'z\\to z^d+c',blurb:'调指数 d 看 Mandelbrot 的推广形态。'},
  params:[i('iter','迭代',150,32,500),n('d','指数 d',3,2,8,0.05),n('cx','中心 x',-0.3,-2,2,0.01),n('cy','中心 y',0,-2,2,0.01),n('zoom','缩放',0.8,0.1,1e3,0.1,true),sel('palette','调色板','electric',[{value:'fire',label:'Fire'},{value:'ice',label:'Ice'},{value:'electric',label:'Electric'},{value:'rainbow',label:'Rainbow'}])],
  iterate:p=>(zx0,zy0,cx,cy)=>{let x=0,y=0,n=0; const max=p.iter as number; const d=p.d as number;
    while(x*x+y*y<=4&&n<max){const r=Math.pow(x*x+y*y,d/2); const a=Math.atan2(y,x); const xt=r*Math.cos(d*a)+cx; y=r*Math.sin(d*a)+cy; x=xt; n++;} return n;},
});
