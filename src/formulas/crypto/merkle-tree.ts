import { i } from '../types';
import type { Formula } from '../types';
const f:Formula = {
  meta:{slug:'merkle-tree',title:'Merkle 树',domain:'crypto',level:3,tex:'\\text{recursive hash of leaves}',blurb:'区块链交易摘要结构。',surface:'canvas2d'},
  params:[i('depth','深度',4,2,6)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width:W,height:H,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,W,H);
    const D=p.depth as number;
    const dy=(H-40)/D;
    for(let lvl=0;lvl<=D;lvl++){const N=Math.pow(2,lvl); const dx=W/(N+1);
      for(let i=0;i<N;i++){const x=(i+1)*dx, y=20+lvl*dy;
        const isLeaf=lvl===D;
        ctx.fillStyle=isLeaf?'#39bae6':'#ffb454';
        ctx.beginPath(); ctx.arc(x,y,8,0,Math.PI*2); ctx.fill();
        if(lvl>0){const px=(Math.floor(i/2)+1)*W/(Math.pow(2,lvl-1)+1), py=20+(lvl-1)*dy;
          ctx.strokeStyle='#3a3f4b'; ctx.beginPath(); ctx.moveTo(px,py); ctx.lineTo(x,y); ctx.stroke();}
      }
    }
  },
};
export default f;
