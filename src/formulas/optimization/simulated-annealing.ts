import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
let pos=[0,0]; let trail:[number,number][]=[]; let last=''; let T0=2;
export default {
  meta:{slug:'simulated-annealing',title:'模拟退火',domain:'optimization',level:4,tex:'P=e^{-\\Delta E/T}',blurb:'温度逐步下降，跳出局部最小。',surface:'canvas2d',animated:true},
  params:[n('cool','降温率',0.999,0.99,0.9999,0.0001),n('reset','reset',0,0,1,1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const sig=`${p.reset}`;
    if(last!==sig){pos=[(Math.random()-0.5)*4, (Math.random()-0.5)*4]; trail=[]; T0=2; last=sig;}
    const f=(x:number,y:number)=>0.5*((x-1)**2+(y-1)**2)*0.5+Math.cos(x*3)*Math.cos(y*3);
    for(let k=0;k<10;k++){
      const nx=pos[0]+(Math.random()-0.5)*T0;
      const ny=pos[1]+(Math.random()-0.5)*T0;
      const dE=f(nx,ny)-f(pos[0],pos[1]);
      if(dE<0||Math.random()<Math.exp(-dE/T0)){pos=[nx,ny];}
      T0*=p.cool as number;
    }
    trail.push([pos[0],pos[1]]); if(trail.length>500) trail.shift();
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    s.ctx.strokeStyle='rgba(255,180,84,0.4)'; s.ctx.lineWidth=1/v.scale;
    s.ctx.beginPath(); for(let i=0;i<trail.length;i++){if(i===0) s.ctx.moveTo(trail[i][0],trail[i][1]); else s.ctx.lineTo(trail[i][0],trail[i][1]);} s.ctx.stroke();
    fillCircle(s,v,pos[0],pos[1],5,'#f07178');
  },
} satisfies Formula;
