import { n, i } from '../types';
import type { Formula } from '../types';
const f:Formula={
  meta:{slug:'pythagoras-tree',title:'毕达哥拉斯树',domain:'fractal',level:3,tex:'\\text{recursive squares + triangle splits}',blurb:'每个方块顶部生两个旋转的子方块。'},
  params:[i('depth','深度',9,1,12),n('ang','角度°',45,5,85,0.1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const ang=(p.ang as number)*Math.PI/180;
    const cosA=Math.cos(ang), sinA=Math.sin(ang);
    function box(x:number,y:number,sz:number,a:number,d:number){
      if(d<=0||sz<0.5) return;
      ctx.save(); ctx.translate(x,y); ctx.rotate(a);
      ctx.fillStyle='#c2d94c'; ctx.globalAlpha=0.6;
      ctx.fillRect(-sz/2,0,sz,sz);
      ctx.restore();
      const tx=x-sz/2*Math.cos(a)+sz*Math.sin(-a-Math.PI), ty=y-sz/2*Math.sin(a)-sz*Math.cos(-a-Math.PI);
      const nx1=x+sz*Math.sin(a), ny1=y-sz*Math.cos(a);
      const nx2=nx1+sz*cosA*cosA*Math.sin(a+ang)*0, ny2=ny1;
      const s1=sz*cosA, s2=sz*sinA;
      const ax=nx1-sz/2*Math.cos(a), ay=ny1-sz/2*Math.sin(a);
      box(ax,ay,s1,a+ang,d-1);
      const dx=ax+s1*Math.sin(a+ang), dy=ay-s1*Math.cos(a+ang);
      box(dx,dy,s2,a+ang-Math.PI/2,d-1);
    }
    box(width/2,height-20,Math.min(width,height)*0.16,0,p.depth as number);
  },
};
export default f;
