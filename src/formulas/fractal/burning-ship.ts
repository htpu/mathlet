import { n, i, s as sel } from '../types';
import { escapeTime } from '../../templates/escape';
export default escapeTime({
  meta:{slug:'burning-ship',title:'Burning Ship 分形',domain:'fractal',level:4,tex:'z_{n+1}=(|x_n|+i|y_n|)^2+c',blurb:'船型分形：每步先取分量绝对值。'},
  params:[i('iter','迭代',150,32,800),n('cx','中心 x',-0.5,-2.5,1.5,0.001),n('cy','中心 y',-0.5,-1.5,1.5,0.001),n('zoom','缩放',0.6,0.1,1e4,0.1,true),sel('palette','调色板','fire',[{value:'fire',label:'Fire'},{value:'electric',label:'Electric'},{value:'mono',label:'Mono'}])],
  iterate:p=>(zx0,zy0,cx,cy)=>{let x=0,y=0,n=0; const max=p.iter as number;
    while(x*x+y*y<=4&&n<max){const xt=x*x-y*y+cx; y=Math.abs(2*x*y)+cy; x=Math.abs(xt); n++;} return n;},
});
