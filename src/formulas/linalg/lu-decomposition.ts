import type { Formula } from '../types';
import { n } from '../types';
import { clear, text } from '../../render/canvas2d';
export default {
  meta:{slug:'lu-decomposition',title:'LU 分解（2x2）',domain:'linalg',level:3,tex:'A=LU',blurb:'2x2 矩阵分解为下三角 × 上三角。',surface:'canvas2d'},
  params:[n('a','a',2,-5,5,0.01),n('b','b',1,-5,5,0.01),n('c','c',1,-5,5,0.01),n('d','d',3,-5,5,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const a=p.a as number, b=p.b as number, c=p.c as number, d=p.d as number;
    if(Math.abs(a)<1e-9){ text(s,20,20,'pivot a≈0','#f07178',16); return;}
    const l21=c/a; const u22=d-l21*b;
    const draw=(label:string, m:number[][], col:string, x0:number, y0:number)=>{
      ctx.fillStyle=col; ctx.font='16px ui-monospace,monospace'; ctx.textAlign='left'; ctx.textBaseline='top';
      ctx.fillText(label, x0, y0);
      ctx.fillStyle='#cbccc6'; ctx.font='14px ui-monospace,monospace';
      ctx.fillText(`[ ${m[0][0].toFixed(2).padStart(6)}  ${m[0][1].toFixed(2).padStart(6)} ]`, x0, y0+22);
      ctx.fillText(`[ ${m[1][0].toFixed(2).padStart(6)}  ${m[1][1].toFixed(2).padStart(6)} ]`, x0, y0+44);
    };
    const cw=width/3.3;
    draw('A',[[a,b],[c,d]],'#39bae6', cw*0.2, height/3);
    draw('L',[[1,0],[l21,1]],'#ffb454', cw*1.3, height/3);
    draw('U',[[a,b],[0,u22]],'#c2d94c', cw*2.4, height/3);
  },
} satisfies Formula;
