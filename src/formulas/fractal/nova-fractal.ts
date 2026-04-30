import { n, i } from '../types';
import { escapeTime } from '../../templates/escape';
export default escapeTime({
  meta:{slug:'nova-fractal',title:'Nova 分形',domain:'fractal',level:4,tex:'z\\to z-(z^3-1)/(3z^2)+c',blurb:'松弛 Newton + 加 c 偏移。'},
  params:[n('cx','cx',0,-2,2,0.001),n('cy','cy',0,-2,2,0.001),n('zoom','zoom',1,0.1,1000,0.01,true),i('iter','iter',60,10,300)],
  iterate:()=>(zx,zy,cx,cy)=>{let x=zx,y=zy; for(let i=0;i<200;i++){const x2=x*x-y*y, y2=2*x*y; const x3=x2*x-y2*y, y3=x2*y+y2*x; const dx=3*(x*x-y*y), dy=6*x*y; const nx=x3-1, ny=y3; const dn2=dx*dx+dy*dy; const rx=(nx*dx+ny*dy)/dn2, ry=(ny*dx-nx*dy)/dn2; x=x-rx+cx; y=y-ry+cy; if(x*x+y*y>1e6) return i;} return 200;},
});
