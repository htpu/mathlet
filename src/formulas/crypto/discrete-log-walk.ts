import { i, n as nn } from '../types';
import type { Formula } from '../types';
const f:Formula = {
  meta:{slug:'discrete-log-walk',title:'离散对数 g^k mod p',domain:'crypto',level:3,tex:'g^k\\bmod p',blurb:'循环群中点的轨迹。',surface:'canvas2d'},
  params:[i('p','p (素数)',23,5,101,2),i('g','g',5,2,30,1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width:W,height:H,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,W,H);
    const P=Math.max(2, Math.round(p.p as number)), G=Math.max(2, Math.round(p.g as number));
    const cx=W/2, cy=H/2, R=Math.min(W,H)*0.4;
    ctx.strokeStyle='#3a3f4b'; ctx.lineWidth=1;
    ctx.beginPath(); ctx.arc(cx,cy,R,0,Math.PI*2); ctx.stroke();
    ctx.fillStyle='#3a3f4b';
    for(let i=0;i<P;i++){const a=2*Math.PI*i/P; ctx.beginPath(); ctx.arc(cx+R*Math.cos(a), cy+R*Math.sin(a), 2, 0, Math.PI*2); ctx.fill();}
    let v=1; const path:[number,number][]=[];
    for(let k=0;k<P;k++){const a=2*Math.PI*v/P; path.push([cx+R*Math.cos(a), cy+R*Math.sin(a)]); v=(v*G)%P;}
    ctx.strokeStyle='#39bae6'; ctx.lineWidth=1.2;
    ctx.beginPath();
    for(let i=0;i<path.length;i++){if(i===0) ctx.moveTo(path[i][0],path[i][1]); else ctx.lineTo(path[i][0],path[i][1]);}
    ctx.stroke();
    ctx.fillStyle='#ffb454';
    for(const [x,y] of path){ctx.beginPath(); ctx.arc(x,y,3,0,Math.PI*2); ctx.fill();}
  },
};
export default f;
