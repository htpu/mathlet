import type { Formula } from '../types';
import { n, i } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'markov-chain',title:'马尔可夫链稳态',domain:'probability',level:3,tex:'\\pi P=\\pi',blurb:'3 状态链，看转移矩阵的稳态分布。',surface:'canvas2d',animated:true},
  params:[n('p12','P(1→2)',0.3,0,1,0.01),n('p13','P(1→3)',0.2,0,1,0.01),n('p21','P(2→1)',0.4,0,1,0.01),n('p23','P(2→3)',0.3,0,1,0.01),n('p31','P(3→1)',0.5,0,1,0.01),n('p32','P(3→2)',0.2,0,1,0.01),i('steps','步数',500,10,5000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const P=[[1-(p.p12 as number)-(p.p13 as number), p.p12, p.p13],[p.p21, 1-(p.p21 as number)-(p.p23 as number), p.p23],[p.p31, p.p32, 1-(p.p31 as number)-(p.p32 as number)]] as number[][];
    let pi=[1/3,1/3,1/3];
    for(let k=0;k<(p.steps as number);k++){const next=[0,0,0]; for(let i=0;i<3;i++) for(let j=0;j<3;j++) next[j]+=pi[i]*Math.max(0,P[i][j]); const sum=next[0]+next[1]+next[2]; pi=next.map(x=>x/sum);}
    const colors=['#ffb454','#39bae6','#f07178'];
    const labels=['S1','S2','S3'];
    const padX=80, padY=60; const w=width-padX*2, h=height-padY*2;
    const bw=w/3*0.6;
    ctx.font='14px ui-monospace,monospace';
    for(let i=0;i<3;i++){
      const x=padX+w/3*i+w/6-bw/2;
      const bh=pi[i]*h;
      ctx.fillStyle=colors[i]; ctx.fillRect(x, padY+h-bh, bw, bh);
      ctx.fillStyle='#cbccc6'; ctx.textAlign='center';
      ctx.fillText(labels[i], x+bw/2, padY+h+20);
      ctx.fillText(pi[i].toFixed(3), x+bw/2, padY+h-bh-8);
    }
  },
} satisfies Formula;
