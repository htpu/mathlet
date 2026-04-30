import { n, i } from '../types';
import { escapeTime } from '../../templates/escape';
export default escapeTime({
  meta:{slug:'mandelbar',title:'Mandelbar (Tricorn)',domain:'fractal',level:3,tex:'z\\to\\bar{z}^2+c',blurb:'共轭映射的 Mandelbrot 变体。'},
  params:[n('cx','cx',-0.5,-2,2,0.001),n('cy','cy',0,-2,2,0.001),n('zoom','zoom',1,0.1,1000,0.01,true),i('iter','iter',150,20,500)],
  iterate:()=>(zx,zy,cx,cy)=>{let x=zx,y=zy; for(let i=0;i<200;i++){const nx=x*x-y*y+cx; const ny=-2*x*y+cy; x=nx; y=ny; if(x*x+y*y>4) return i;} return 200;},
});
