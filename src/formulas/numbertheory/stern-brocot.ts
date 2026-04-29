import type { Formula } from '../types';
import { i } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'stern-brocot',title:'Stern-Brocot 树',domain:'numbertheory',level:4,tex:'\\frac{a+c}{b+d}',blurb:'mediant 操作生成所有正有理数。'},
  params:[i('depth','深度',6,1,9)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    interface Node {a:number;b:number;c:number;d:number;x:number;depth:number;}
    const nodes:Node[]=[];
    const rec=(a:number,b:number,c:number,d:number,xL:number,xR:number,depth:number)=>{
      if(depth>(p.depth as number)) return;
      const x=(xL+xR)/2;
      nodes.push({a,b,c,d,x,depth});
      const mn=a+c, md=b+d;
      rec(a,b,mn,md,xL,x,depth+1);
      rec(mn,md,c,d,x,xR,depth+1);
    };
    rec(0,1,1,0,0,1,0);
    const padX=20, padY=40;
    const w=width-padX*2;
    const dy=(height-padY*2)/(p.depth as number);
    ctx.strokeStyle='#2d3340'; ctx.lineWidth=1;
    for(const n of nodes){
      const x=padX+n.x*w; const y=padY+n.depth*dy;
      const mn=n.a+n.c, md=n.b+n.d;
      ctx.fillStyle='#39bae6'; ctx.beginPath(); ctx.arc(x,y,3,0,Math.PI*2); ctx.fill();
      if(n.depth<5){ctx.fillStyle='#cbccc6'; ctx.font='10px ui-monospace,monospace'; ctx.textAlign='center'; ctx.fillText(`${mn}/${md}`, x, y-6);}
    }
  },
} satisfies Formula;
