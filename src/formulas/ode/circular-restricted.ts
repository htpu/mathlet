import { n } from '../types';
import { ode2d } from '../../templates/ode2d';
export default ode2d({
  meta:{slug:'circular-restricted',title:'限制性三体问题（投影）',domain:'ode',level:5,tex:'\\ddot x=-\\partial U/\\partial x',blurb:'卫星在两大体共转坐标系中的位置。'},
  params:[n('mu','质量比 μ',0.012,0.001,0.5,0.001)],
  derivs:p=>(t,y)=>{const mu=p.mu as number;
    const x=y[0], yy=y[1], vx=y[2], vy=y[3];
    const r1=Math.pow((x+mu)**2+yy*yy, 1.5);
    const r2=Math.pow((x-1+mu)**2+yy*yy, 1.5);
    const ax=2*vy+x-(1-mu)*(x+mu)/r1-mu*(x-1+mu)/r2;
    const ay=-2*vx+yy-(1-mu)*yy/r1-mu*yy/r2;
    return [vx, vy, ax, ay];
  },
  init:()=>[[1.2,0.001],[0.5,0.5]],
  view:{cx:0,cy:0,scale:80}, step:0.005,
});
