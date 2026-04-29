import type { Formula } from '../types';
import { n, i } from '../types';
import { clear, drawAxes, setupView, fillCircle, plotFn } from '../../render/canvas2d';
const knownZeros=[14.135,21.022,25.011,30.425,32.935,37.586,40.919,43.327,48.005,49.774,52.97,56.446,59.347,60.832,65.113,67.080,69.546,72.067,75.705,77.145];
export default {
  meta:{slug:'zeta-zeros',title:'Riemann ζ 临界线',domain:'numbertheory',level:5,tex:'\\zeta(1/2+it)',blurb:'临界线上 |ζ| 的模长，零点 = 黎曼 ζ 零。'},
  params:[n('tmin','t 起',0,0,80,0.05),n('tmax','t 止',60,0,80,0.05)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const tmin=p.tmin as number, tmax=p.tmax as number;
    const v={cx:(tmin+tmax)/2,cy:1.5,scale:Math.min(s.width/(tmax-tmin), s.height/4)};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    // approximate |ζ(1/2+it)| via partial Dirichlet eta + reflection (rough)
    const zeta=(t:number)=>{let r=0,i=0; for(let n=1;n<=200;n++){const ang=-t*Math.log(n); r+=Math.pow(-1,n+1)*Math.cos(ang)/Math.sqrt(n); i+=Math.pow(-1,n+1)*Math.sin(ang)/Math.sqrt(n);}
      const factor=Math.hypot(r,i)/(1-Math.pow(2,0.5)); return factor;};
    plotFn(s,v,zeta,'#ffb454',1500);
    for(const z of knownZeros) if(z>=tmin&&z<=tmax) fillCircle(s,v,z,0,4,'#f07178');
  },
} satisfies Formula;
