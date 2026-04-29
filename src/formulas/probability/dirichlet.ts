import type { Formula } from '../types';
import { n, i } from '../types';
import { clear } from '../../render/canvas2d';
import { mulberry32 } from '../../render/numerics';
export default {
  meta:{slug:'dirichlet',title:'Dirichlet 分布（单纯形）',domain:'probability',level:4,tex:'\\frac{1}{B(\\alpha)}\\prod x_i^{\\alpha_i-1}',blurb:'三元 Dirichlet 在三角形单纯形上的样本。'},
  params:[n('a1','α₁',2,0.1,10,0.05),n('a2','α₂',2,0.1,10,0.05),n('a3','α₃',2,0.1,10,0.05),i('N','样本',2000,100,10000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const r=mulberry32(7);
    function gamma(a:number){if(a<1) return gamma(a+1)*Math.pow(r(),1/a); const d=a-1/3, c=1/Math.sqrt(9*d);
      while(true){let z=Math.sqrt(-2*Math.log(r()))*Math.cos(2*Math.PI*r()); let v=1+c*z; if(v<=0) continue; v=v*v*v; const u=r();
        if(u<1-0.0331*z**4) return d*v;
        if(Math.log(u)<0.5*z*z+d*(1-v+Math.log(v))) return d*v;}}
    const cx=width/2, cy=height-50;
    const verts:[number,number][]=[[cx-180,cy],[cx+180,cy],[cx,cy-300]];
    ctx.strokeStyle='#2d3340'; ctx.lineWidth=2; ctx.beginPath();
    ctx.moveTo(verts[0][0],verts[0][1]); ctx.lineTo(verts[1][0],verts[1][1]); ctx.lineTo(verts[2][0],verts[2][1]); ctx.closePath(); ctx.stroke();
    const alphas=[p.a1,p.a2,p.a3] as number[];
    for(let i=0;i<(p.N as number);i++){const xs=alphas.map(a=>gamma(a)); const sum=xs[0]+xs[1]+xs[2]; const w=xs.map(x=>x/sum);
      const px=w[0]*verts[0][0]+w[1]*verts[1][0]+w[2]*verts[2][0];
      const py=w[0]*verts[0][1]+w[1]*verts[1][1]+w[2]*verts[2][1];
      ctx.fillStyle='rgba(255,180,84,0.4)'; ctx.fillRect(px,py,1.5,1.5);
    }
  },
} satisfies Formula;
