import { n, i } from '../types';
import { escapeTime } from '../../templates/escape';
export default escapeTime({
  meta:{slug:'burning-ship-julia',title:'燃烧船 Julia',domain:'fractal',level:4,tex:'z\\to(|x|+i|y|)^2+c',blurb:'固定 c，对 z 平面着色。'},
  params:[n('cx','cx',-0.5,-2,2,0.001),n('cy','cy',0.6,-2,2,0.001),n('zoom','zoom',1,0.1,1000,0.01,true),i('iter','iter',150,20,500)],
  iterate:p=>(zx,zy)=>{let x=zx,y=zy; const cx=p.cx as number, cy=p.cy as number; for(let i=0;i<200;i++){const ax=Math.abs(x), ay=Math.abs(y); const nx=ax*ax-ay*ay+cx; const ny=2*ax*ay+cy; x=nx; y=ny; if(x*x+y*y>4) return i;} return 200;},
});
