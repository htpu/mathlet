import type { Formula } from '../types';
import { n, i } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'polynomial-roots',title:'多项式根（复平面）',domain:'algebra',level:3,tex:'p(z)=\\prod(z-r_k)',blurb:'多项式 z^n + c·z + d 的复根分布。',surface:'canvas2d'},
  params:[i('n','次数 n',5,2,12),n('c','线性系数',1,-3,3,0.01),n('d','常数',1,-3,3,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/4};
    clear(s); setupView(s,v); drawAxes(s,v);
    const n=p.n as number, c=p.c as number, d=p.d as number;
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=1/v.scale;
    s.ctx.beginPath(); s.ctx.arc(0,0,1,0,Math.PI*2); s.ctx.stroke();
    // Durand-Kerner method
    const roots=Array.from({length:n},(_,k)=>[Math.cos(2*Math.PI*k/n)*1.2, Math.sin(2*Math.PI*k/n)*1.2] as [number,number]);
    const evalP=(zr:number,zi:number)=>{let r=1,i=0; for(let k=0;k<n;k++){const tr=r*zr-i*zi; i=r*zi+i*zr; r=tr;} return [r+c*zr+d, i+c*zi];};
    for(let it=0;it<60;it++){
      for(let k=0;k<n;k++){
        const [pr,pi]=evalP(roots[k][0], roots[k][1]);
        let dr=1, di=0;
        for(let j=0;j<n;j++){if(j===k) continue; const tr=dr*(roots[k][0]-roots[j][0])-di*(roots[k][1]-roots[j][1]); di=dr*(roots[k][1]-roots[j][1])+di*(roots[k][0]-roots[j][0]); dr=tr;}
        const den=dr*dr+di*di+1e-20;
        roots[k][0]-= (pr*dr+pi*di)/den;
        roots[k][1]-= (pi*dr-pr*di)/den;
      }
    }
    for(const r of roots) fillCircle(s,v,r[0],r[1],5,'#f07178');
  },
} satisfies Formula;
