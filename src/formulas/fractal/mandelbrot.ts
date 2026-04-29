import { n, i, s as sel } from '../types';
import { escapeTime } from '../../templates/escape';
export default escapeTime({
  meta:{slug:'mandelbrot',title:'Mandelbrot 集',domain:'fractal',level:4,tex:'z_{n+1}=z_n^2+c',blurb:'复迭代发散判定。zoom + center 探索。'},
  params:[i('iter','迭代',200,32,2000),n('cx','中心 x',-0.5,-2.5,1.5,0.001),n('cy','中心 y',0,-1.5,1.5,0.001),n('zoom','缩放',1,0.1,1e6,0.1,true),sel('palette','调色板','fire',[{value:'fire',label:'Fire'},{value:'ice',label:'Ice'},{value:'electric',label:'Electric'},{value:'rainbow',label:'Rainbow'},{value:'mono',label:'Mono'}])],
  iterate:p=>(zx0,zy0,cx,cy)=>{let x=0,y=0,n=0; const max=p.iter as number;
    while(x*x+y*y<=4&&n<max){const xt=x*x-y*y+cx; y=2*x*y+cy; x=xt; n++;} return n;},
});
