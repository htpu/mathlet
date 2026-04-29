import type { Formula } from '../types';
import { n, i } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
let pop:[number,number][]=[]; let last='';
export default {
  meta:{slug:'genetic-algorithm',title:'遗传算法',domain:'optimization',level:4,tex:'\\text{select+crossover+mutate}',blurb:'种群在多峰地形上演化找最大。',surface:'canvas2d',animated:true},
  params:[i('N','种群数',60,10,300),n('mut','突变率',0.05,0,0.5,0.005)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const sig=`${p.N}`;
    if(last!==sig){pop=[]; for(let i=0;i<(p.N as number);i++) pop.push([(Math.random()-0.5)*5, (Math.random()-0.5)*5]); last=sig;}
    const f=(x:number,y:number)=>Math.exp(-((x-1)**2+(y-1)**2)/2)+0.7*Math.exp(-((x+1.5)**2+(y+0.5)**2)/3);
    // selection + crossover + mutation
    const fits=pop.map(p=>f(p[0],p[1]));
    const total=fits.reduce((a,b)=>a+b,0);
    const cum:number[]=[]; let acc=0; for(const fi of fits){acc+=fi/total; cum.push(acc);}
    const next:[number,number][]=[];
    for(let i=0;i<pop.length;i++){
      const r1=Math.random(); let p1=0; while(p1<cum.length-1&&r1>cum[p1]) p1++;
      const r2=Math.random(); let p2=0; while(p2<cum.length-1&&r2>cum[p2]) p2++;
      let cx=(pop[p1][0]+pop[p2][0])/2, cy=(pop[p1][1]+pop[p2][1])/2;
      if(Math.random()<(p.mut as number)) {cx+=(Math.random()-0.5)*0.5; cy+=(Math.random()-0.5)*0.5;}
      next.push([cx,cy]);
    }
    pop=next;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    for(const pt of pop) fillCircle(s,v,pt[0],pt[1],3,`hsl(${f(pt[0],pt[1])*120},70%,60%)`);
  },
} satisfies Formula;
