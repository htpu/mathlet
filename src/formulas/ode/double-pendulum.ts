import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
import { rk4 } from '../../render/numerics';
let state:number[]=[]; let trail:[number,number][]=[]; let lastP='';
export default {
  meta:{slug:'double-pendulum',title:'双摆混沌',domain:'ode',level:5,tex:'\\text{Lagrangian: }L=T-V',blurb:'4 维相空间，对初值极敏感。',surface:'canvas2d',animated:true},
  params:[n('a1','θ₁',Math.PI*0.7,-Math.PI,Math.PI,0.01),n('a2','θ₂',Math.PI*0.5,-Math.PI,Math.PI,0.01),n('m1','m₁',1,0.2,3,0.01),n('m2','m₂',1,0.2,3,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const sig=JSON.stringify(p);
    if(sig!==lastP){state=[p.a1 as number, 0, p.a2 as number, 0]; trail=[]; lastP=sig;}
    const m1=p.m1 as number, m2=p.m2 as number, L1=1, L2=1, g=9.8;
    const f=(t:number,y:number[])=>{
      const [a1,w1,a2,w2]=y;
      const da=a1-a2;
      const den=2*m1+m2-m2*Math.cos(2*da);
      const aw1=(-g*(2*m1+m2)*Math.sin(a1)-m2*g*Math.sin(a1-2*a2)-2*Math.sin(da)*m2*(w2*w2*L2+w1*w1*L1*Math.cos(da)))/(L1*den);
      const aw2=(2*Math.sin(da)*(w1*w1*L1*(m1+m2)+g*(m1+m2)*Math.cos(a1)+w2*w2*L2*m2*Math.cos(da)))/(L2*den);
      return [w1,aw1,w2,aw2];
    };
    for(let k=0;k<5;k++) state=rk4(f,0,state,0.005);
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/6};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    const x1=L1*Math.sin(state[0]), y1=-L1*Math.cos(state[0]);
    const x2=x1+L2*Math.sin(state[2]), y2=y1-L2*Math.cos(state[2]);
    trail.push([x2,y2]); if(trail.length>500) trail.shift();
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=1/v.scale;
    s.ctx.beginPath(); for(let i=0;i<trail.length;i++){if(i===0) s.ctx.moveTo(trail[i][0],trail[i][1]); else s.ctx.lineTo(trail[i][0],trail[i][1]);} s.ctx.stroke();
    s.ctx.strokeStyle='#cbccc6'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(x1,y1); s.ctx.lineTo(x2,y2); s.ctx.stroke();
    fillCircle(s,v,x1,y1,m1*5,'#ffb454');
    fillCircle(s,v,x2,y2,m2*5,'#f07178');
  },
} satisfies Formula;
