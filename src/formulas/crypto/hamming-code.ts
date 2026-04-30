import { i } from '../types';
import type { Formula } from '../types';
const f:Formula = {
  meta:{slug:'hamming-code',title:'Hamming(7,4) 编码',domain:'crypto',level:3,tex:'\\text{4 data + 3 parity = 7 bits}',blurb:'单错检测纠正：奇偶位覆盖位置组。',surface:'canvas2d'},
  params:[i('data','数据 4-bit',11,0,15,1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width:W,height:H,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,W,H);
    const d=p.data as number;
    const d1=(d>>3)&1, d2=(d>>2)&1, d3=(d>>1)&1, d4=d&1;
    const p1=d1^d2^d4, p2=d1^d3^d4, p3=d2^d3^d4;
    const code=[p1,p2,d1,p3,d2,d3,d4];
    const labels=['p1','p2','d1','p3','d2','d3','d4'];
    const sw=W/8;
    ctx.font='16px ui-monospace';
    for(let i=0;i<7;i++){const x=sw*(i+0.5)+sw, y=H/2;
      ctx.fillStyle=(labels[i][0]==='p')?'#f07178':'#39bae6';
      ctx.beginPath(); ctx.roundRect(x-25,y-30,50,60,6); ctx.fill();
      ctx.fillStyle='#0a0e14'; ctx.fillText(String(code[i]), x-5, y+5);
      ctx.fillStyle='#fff'; ctx.fillText(labels[i], x-12, y+22);
    }
  },
};
export default f;
