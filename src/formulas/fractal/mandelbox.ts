import { n, i } from '../types';
import { escapeTime } from '../../templates/escape';
function bf(v:number){if(v>1) return 2-v; if(v<-1) return -2-v; return v;}
export default escapeTime({
  meta:{slug:'mandelbox',title:'Mandelbox 2D',domain:'fractal',level:5,tex:'\\text{box-fold + sphere-fold + scale}+c',blurb:'盒折+球折迭代生成器。'},
  params:[n('cx','cx',0,-3,3,0.001),n('cy','cy',0,-3,3,0.001),n('zoom','zoom',0.5,0.1,1000,0.01,true),n('scl','scale',2,1,3,0.01),i('iter','iter',60,10,300)],
  iterate:p=>(zx,zy,cx,cy)=>{let x=zx,y=zy; const S=p.scl as number; for(let i=0;i<200;i++){x=bf(x); y=bf(y); const r2=x*x+y*y; if(r2<0.25){x*=4; y*=4;} else if(r2<1){const k=1/r2; x*=k; y*=k;} x=S*x+cx; y=S*y+cy; if(x*x+y*y>1e4) return i;} return 200;},
});
