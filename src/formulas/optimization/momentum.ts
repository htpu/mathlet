import type { Formula } from '../types';
import { n, i, s as sel } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'momentum',title:'SGD vs Momentum vs Adam',domain:'optimization',level:4,tex:'v_t=\\beta v_{t-1}+(1-\\beta)\\nabla f',blurb:'三种优化器在峡谷地形上的轨迹对比。',surface:'canvas2d'},
  params:[n('lr','lr',0.05,0.001,0.5,0.001),n('beta','β',0.9,0,0.99,0.005),i('steps','步数',150,10,500)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/4};
    clear(s); setupView(s,v); drawAxes(s,v);
    const f=(x:number,y:number)=>0.1*x*x+5*y*y;
    const gx=(x:number)=>0.2*x;
    const gy=(_:number,y:number)=>10*y;
    for(let l=0;l<6;l++){const lev=Math.pow(2,l-2);
      s.ctx.strokeStyle=`rgba(57,186,230,0.3)`; s.ctx.lineWidth=0.8/v.scale; s.ctx.beginPath();
      for(let t=0;t<Math.PI*2;t+=0.02){const r=Math.sqrt(lev/0.1); s.ctx.lineTo(r*Math.cos(t), r*Math.sin(t)/Math.sqrt(50));}
      s.ctx.stroke();}
    const lr=p.lr as number, beta=p.beta as number, steps=p.steps as number;
    const draw=(name:string, color:string, step:(x:number,y:number,vx:number,vy:number,t:number)=>[number,number,number,number])=>{
      let x=-1.7,y=0.7,vx=0,vy=0;
      s.ctx.strokeStyle=color; s.ctx.lineWidth=1.5/v.scale; s.ctx.beginPath(); s.ctx.moveTo(x,y);
      for(let t=0;t<steps;t++){const r=step(x,y,vx,vy,t); x=r[0]; y=r[1]; vx=r[2]; vy=r[3]; if(!isFinite(x)) break; s.ctx.lineTo(x,y);}
      s.ctx.stroke();
      fillCircle(s,v,x,y,4,color);
    };
    draw('SGD','#ffb454',(x,y)=>[x-lr*gx(x), y-lr*gy(0,y), 0, 0]);
    draw('Momentum','#c2d94c',(x,y,vx,vy)=>{vx=beta*vx-lr*gx(x); vy=beta*vy-lr*gy(0,y); return [x+vx,y+vy,vx,vy];});
    let mx=0,my=0,sx=0,sy=0,t0=1;
    draw('Adam','#f07178',(x,y,_vx,_vy,t)=>{const gxv=gx(x), gyv=gy(0,y); mx=0.9*mx+0.1*gxv; my=0.9*my+0.1*gyv; sx=0.999*sx+0.001*gxv*gxv; sy=0.999*sy+0.001*gyv*gyv; const mxh=mx/(1-Math.pow(0.9,t+1)), myh=my/(1-Math.pow(0.9,t+1)), sxh=sx/(1-Math.pow(0.999,t+1)), syh=sy/(1-Math.pow(0.999,t+1)); return [x-lr*mxh/(Math.sqrt(sxh)+1e-8), y-lr*myh/(Math.sqrt(syh)+1e-8), 0,0];});
  },
} satisfies Formula;
