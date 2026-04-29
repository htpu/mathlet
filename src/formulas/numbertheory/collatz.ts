import type { Formula } from '../types';
import { i } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
export default {
  meta:{slug:'collatz',title:'Collatz 猜想轨迹',domain:'numbertheory',level:3,tex:'n\\to n/2 \\text{ 或 } 3n+1',blurb:'多个起始 n 的奇偶迭代轨迹。'},
  params:[i('nmax','起始最大 n',60,5,500),i('logy','log Y',1,0,1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const nmax=p.nmax as number;
    let maxLen=0, maxY=0;
    const trajs:number[][]=[];
    for(let n=2;n<=nmax;n++){const tr=[n]; let x=n; while(x!==1&&tr.length<2000){x=x%2===0?x/2:3*x+1; tr.push(x);} trajs.push(tr); maxLen=Math.max(maxLen,tr.length); maxY=Math.max(maxY,...tr);}
    const v={cx:maxLen/2,cy:p.logy?Math.log10(maxY)/2:maxY/2,scale:Math.min(s.width/(maxLen*1.05), s.height/((p.logy?Math.log10(maxY+1):maxY)*1.1))};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    for(let i=0;i<trajs.length;i++){
      s.ctx.strokeStyle=`hsla(${i*360/trajs.length}, 70%, 55%, 0.5)`;
      s.ctx.lineWidth=1/v.scale;
      s.ctx.beginPath();
      const tr=trajs[i];
      for(let j=0;j<tr.length;j++){const yv=p.logy?Math.log10(tr[j]):tr[j]; if(j===0) s.ctx.moveTo(j,yv); else s.ctx.lineTo(j,yv);}
      s.ctx.stroke();
    }
  },
} satisfies Formula;
