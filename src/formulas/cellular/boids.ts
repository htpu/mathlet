import type { Formula } from '../types';
import { i, n } from '../types';
import { clear, fillCircle } from '../../render/canvas2d';
let pos:[number,number][]=[]; let vel:[number,number][]=[]; let last='';
export default {
  meta:{slug:'boids',title:'Boids 群体行为',domain:'cellular',level:3,tex:'\\text{cohesion+alignment+separation}',blurb:'三规则群体涌现集群飞行。',surface:'canvas2d',animated:true},
  params:[i('N','数量',80,10,300),n('coh','凝聚',0.005,0,0.05,0.0005),n('ali','对齐',0.05,0,0.3,0.005),n('sep','分离',0.07,0,0.3,0.005),n('vis','视野',40,5,100,1)],
  render(s,p,t){
    if(s.kind!=='canvas2d') return;
    const sig=`${p.N}|${s.width}|${s.height}`;
    if(last!==sig){pos=[]; vel=[]; for(let i=0;i<(p.N as number);i++){pos.push([Math.random()*s.width, Math.random()*s.height]); vel.push([(Math.random()-0.5)*2, (Math.random()-0.5)*2]);} last=sig;}
    const N=pos.length, vis=p.vis as number;
    for(let i=0;i<N;i++){
      let cx=0,cy=0,c=0,ax=0,ay=0,sx=0,sy=0;
      for(let j=0;j<N;j++){if(i===j) continue; const dx=pos[j][0]-pos[i][0], dy=pos[j][1]-pos[i][1]; const d=Math.hypot(dx,dy); if(d<vis){cx+=pos[j][0]; cy+=pos[j][1]; ax+=vel[j][0]; ay+=vel[j][1]; if(d<vis*0.4){sx-=dx; sy-=dy;} c++;}}
      if(c>0){cx/=c; cy/=c; ax/=c; ay/=c; vel[i][0]+=(cx-pos[i][0])*(p.coh as number)+(ax-vel[i][0])*(p.ali as number)+sx*(p.sep as number); vel[i][1]+=(cy-pos[i][1])*(p.coh as number)+(ay-vel[i][1])*(p.ali as number)+sy*(p.sep as number);}
      const sp=Math.hypot(vel[i][0],vel[i][1]); if(sp>3){vel[i][0]*=3/sp; vel[i][1]*=3/sp;}
      pos[i][0]+=vel[i][0]; pos[i][1]+=vel[i][1];
      if(pos[i][0]<0) pos[i][0]+=s.width; if(pos[i][0]>s.width) pos[i][0]-=s.width;
      if(pos[i][1]<0) pos[i][1]+=s.height; if(pos[i][1]>s.height) pos[i][1]-=s.height;
    }
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    for(let i=0;i<N;i++){const ang=Math.atan2(vel[i][1],vel[i][0]);
      ctx.fillStyle=`hsl(${(ang*180/Math.PI+360)%360},70%,55%)`;
      ctx.beginPath();
      ctx.moveTo(pos[i][0]+Math.cos(ang)*5, pos[i][1]+Math.sin(ang)*5);
      ctx.lineTo(pos[i][0]+Math.cos(ang+2.5)*4, pos[i][1]+Math.sin(ang+2.5)*4);
      ctx.lineTo(pos[i][0]+Math.cos(ang-2.5)*4, pos[i][1]+Math.sin(ang-2.5)*4);
      ctx.closePath(); ctx.fill();
    }
  },
} satisfies Formula;
