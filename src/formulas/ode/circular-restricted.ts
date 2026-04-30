import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
import { rk4 } from '../../render/numerics';
let trail:[number,number][]=[]; let state:number[]=[]; let last='';
export default {
  meta:{slug:'circular-restricted',title:'限制性三体问题（投影）',domain:'ode',level:5,tex:'\\ddot x=-\\partial U/\\partial x',blurb:'卫星在两大体共转坐标系中的位置。',surface:'canvas2d',animated:true},
  params:[n('mu','质量比 μ',0.012,0.001,0.5,0.001),n('reset','reset',0,0,1,1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const sig=`${p.mu}|${p.reset}`;
    if(last!==sig||state.length!==4){state=[1.05,0,0,0.5]; trail=[]; last=sig;}
    const mu=p.mu as number;
    for(let k=0;k<3;k++){
      state=rk4((_:number,y:number[])=>{const x=y[0], yy=y[1], vx=y[2], vy=y[3];
        const r1=Math.pow((x+mu)**2+yy*yy, 1.5)+1e-9;
        const r2=Math.pow((x-1+mu)**2+yy*yy, 1.5)+1e-9;
        const ax=2*vy+x-(1-mu)*(x+mu)/r1-mu*(x-1+mu)/r2;
        const ay=-2*vx+yy-(1-mu)*yy/r1-mu*yy/r2;
        return [vx, vy, ax, ay];
      }, 0, state, 0.005);
      trail.push([state[0],state[1]]);
      if(trail.length>1500) trail.shift();
    }
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/4};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    fillCircle(s,v,-mu,0,7,'#ffb454');
    fillCircle(s,v,1-mu,0,4,'#39bae6');
    s.ctx.strokeStyle='rgba(194,217,76,0.6)'; s.ctx.lineWidth=1/v.scale;
    s.ctx.beginPath();
    for(let i=0;i<trail.length;i++){if(i===0) s.ctx.moveTo(trail[i][0],trail[i][1]); else s.ctx.lineTo(trail[i][0],trail[i][1]);}
    s.ctx.stroke();
    fillCircle(s,v,state[0],state[1],4,'#f07178');
  },
} satisfies Formula;
