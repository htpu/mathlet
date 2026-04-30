import { n, i } from '../types';
import { escapeTime } from '../../templates/escape';
export default escapeTime({
  meta:{slug:'multibrot-cubic',title:'立方 Multibrot',domain:'fractal',level:3,tex:'z\\to z^3+c',blurb:'三阶 Mandelbrot 推广。'},
  params:[n('cx','cx',0,-2,2,0.001),n('cy','cy',0,-2,2,0.001),n('zoom','zoom',1,0.1,1000,0.01,true),i('iter','iter',150,20,500)],
  iterate:()=>(zx,zy,cx,cy)=>{let x=zx,y=zy; for(let i=0;i<200;i++){const x2=x*x, y2=y*y; const nx=x*x2-3*x*y2+cx; const ny=3*x2*y-y*y2+cy; x=nx; y=ny; if(x*x+y*y>4) return i;} return 200;},
});
