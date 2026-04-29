import type { Formula } from '../types';
import { i } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'golden-ratio',title:'黄金分割矩形',domain:'geometry',level:1,tex:'\\phi=\\frac{1+\\sqrt 5}{2}',blurb:'递归切正方形，留下黄金矩形。',surface:'canvas2d'},
  params:[i('depth','迭代',10,1,20)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const phi=(1+Math.sqrt(5))/2;
    let x=20, y=20, w=Math.min(width,height/0.618)*0.85, h=w/phi;
    let dir=0;
    ctx.strokeStyle='#ffb454'; ctx.lineWidth=1;
    for(let i=0;i<(p.depth as number);i++){
      ctx.strokeStyle=`hsl(${30+i*15},70%,55%)`;
      ctx.strokeRect(x,y,w,h);
      const sq=Math.min(w,h);
      if(dir===0){ctx.beginPath(); ctx.arc(x+sq, y+sq, sq, Math.PI, 1.5*Math.PI); ctx.stroke(); x+=sq; w-=sq;}
      else if(dir===1){ctx.beginPath(); ctx.arc(x, y+sq, sq, 1.5*Math.PI, Math.PI*2); ctx.stroke(); y+=sq; h-=sq;}
      else if(dir===2){ctx.beginPath(); ctx.arc(x, y, sq, 0, Math.PI/2); ctx.stroke(); w-=sq;}
      else {ctx.beginPath(); ctx.arc(x+sq, y, sq, Math.PI/2, Math.PI); ctx.stroke(); h-=sq;}
      dir=(dir+1)%4;
    }
  },
} satisfies Formula;
