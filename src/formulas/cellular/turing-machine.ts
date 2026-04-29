import type { Formula } from '../types';
import { i } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'turing-machine',title:'忙海狸 Busy Beaver (3-state)',domain:'cellular',level:5,tex:'\\text{S→ R/L/halt}',blurb:'3 状态图灵机执行轨迹。',surface:'canvas2d'},
  params:[i('steps','步数',13,1,30)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    // BB(3) winning machine
    const tape=new Uint8Array(40);
    let head=20, state=0;
    const T:Record<string, [number, number, number]>={
      '0,0':[1,1,1],'0,1':[1,-1,2],
      '1,0':[1,-1,0],'1,1':[1,1,1],
      '2,0':[1,-1,1],'2,1':[1,0,-1],
    };
    const N=p.steps as number;
    const sc=Math.min(width/40, height/(N+2));
    const ox=(width-sc*40)/2;
    for(let row=0;row<N;row++){const k=`${state},${tape[head]}`; const r=T[k]; if(!r||r[2]===-1) break;
      for(let i=0;i<40;i++){ctx.fillStyle=tape[i]?'#ffb454':'#1f2430'; ctx.fillRect(ox+i*sc, 20+row*sc, sc-0.5, sc-0.5);
        if(i===head){ctx.strokeStyle='#f07178'; ctx.lineWidth=1.5; ctx.strokeRect(ox+i*sc, 20+row*sc, sc-0.5, sc-0.5);}}
      tape[head]=r[0]; head+=r[1]; state=r[2]; if(head<0||head>=40) break;
    }
  },
} satisfies Formula;
