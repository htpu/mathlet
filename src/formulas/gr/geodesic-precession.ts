import { n } from '../types';
import type { Formula } from '../types';
const f:Formula = {
  meta:{slug:'geodesic-precession',title:'近日点进动 (水星)',domain:'gr',level:4,tex:'\\Delta\\phi=6\\pi GM/(c^2 a(1-e^2))',blurb:'GR 修正使椭圆轨道进动。',surface:'canvas2d',animated:true},
  params:[n('prec','进动度/orbit',8,0,30,0.01)],
  render(s,p,t){
    if(s.kind!=='canvas2d') return;
    const {ctx,width:W,height:H,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,W,H);
    const cx=W/2, cy=H/2, R=Math.min(W,H)*0.4;
    const e=0.4, prec=(p.prec as number)*Math.PI/180;
    ctx.fillStyle='#ffd166';
    ctx.beginPath(); ctx.arc(cx,cy,12,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle='#39bae6'; ctx.lineWidth=1.5;
    const N=400, orbits=8;
    ctx.beginPath();
    for(let i=0;i<N*orbits;i++){const th=2*Math.PI*i/N; const phi=th+prec*i/N; const r=R*(1-e*e)/(1+e*Math.cos(th)); const x=cx+r*Math.cos(phi), y=cy+r*Math.sin(phi); if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);}
    ctx.stroke();
    const tt=t%6/6*N*orbits|0;
    const th=2*Math.PI*tt/N; const phi=th+prec*tt/N; const r=R*(1-e*e)/(1+e*Math.cos(th));
    ctx.fillStyle='#f07178';
    ctx.beginPath(); ctx.arc(cx+r*Math.cos(phi), cy+r*Math.sin(phi), 6, 0, Math.PI*2); ctx.fill();
  },
};
export default f;
