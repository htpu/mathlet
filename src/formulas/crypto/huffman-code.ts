import { i } from '../types';
import type { Formula } from '../types';
const f:Formula = {
  meta:{slug:'huffman-code',title:'Huffman 编码树',domain:'crypto',level:3,tex:'\\text{frequent symbols → shorter codes}',blurb:'最优前缀编码。',surface:'canvas2d'},
  params:[i('seed','seed',5,1,200)],
  render(s){
    if(s.kind!=='canvas2d') return;
    const {ctx,width:W,height:H,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,W,H);
    interface Node{w:number; ch?:string; l?:Node; r?:Node;}
    const freqs:Node[]=[{w:5,ch:'a'},{w:9,ch:'b'},{w:12,ch:'c'},{w:13,ch:'d'},{w:16,ch:'e'},{w:45,ch:'f'}];
    while(freqs.length>1){freqs.sort((a,b)=>a.w-b.w); const a=freqs.shift()!, b=freqs.shift()!; freqs.push({w:a.w+b.w,l:a,r:b});}
    const root=freqs[0];
    function draw(n:Node,x:number,y:number,sp:number){
      ctx.fillStyle=n.ch?'#ffb454':'#39bae6';
      ctx.beginPath(); ctx.arc(x,y,16,0,Math.PI*2); ctx.fill();
      ctx.fillStyle='#0a0e14'; ctx.font='13px ui-monospace';
      ctx.fillText(n.ch?n.ch:String(n.w),x-5,y+5);
      if(n.l){ctx.strokeStyle='#3a3f4b'; ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(x-sp,y+50); ctx.stroke(); draw(n.l, x-sp, y+50, sp/1.7);}
      if(n.r){ctx.strokeStyle='#3a3f4b'; ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(x+sp,y+50); ctx.stroke(); draw(n.r, x+sp, y+50, sp/1.7);}
    }
    draw(root, W/2, 30, W*0.3);
  },
};
export default f;
