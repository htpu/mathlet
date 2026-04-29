import { i, n, s as sel } from '../types';
import { escapeTime } from '../../templates/escape';
let prevX=0, prevY=0;
export default escapeTime({
  meta:{slug:'phoenix-fractal',title:'Phoenix 分形',domain:'fractal',level:5,tex:'z_{n+1}=z_n^2+c+pz_{n-1}',blurb:'引入前一步反馈项 p。'},
  params:[i('iter','迭代',100,32,300),n('p','反馈 p',-0.5,-1,1,0.005),n('cReal','c 实',0.56,-2,2,0.005),n('cImag','c 虚',-0.5,-2,2,0.005),n('cx','x',0,-2,2,0.005),n('cy','y',0,-2,2,0.005),n('zoom','缩放',0.7,0.1,1e3,0.1,true),sel('palette','调色板','electric',[{value:'fire',label:'Fire'},{value:'electric',label:'Electric'},{value:'ice',label:'Ice'}])],
  iterate:p=>(zx0,zy0)=>{let x=zx0,y=zy0,px=0,py=0,n=0; const max=p.iter as number; const cR=p.cReal as number, cI=p.cImag as number, P=p.p as number;
    while(x*x+y*y<=4&&n<max){const xt=x*x-y*y+cR+P*px, yt=2*x*y+cI+P*py; px=x; py=y; x=xt; y=yt; n++;} return n;},
});
