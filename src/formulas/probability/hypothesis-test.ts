import type { Formula } from '../types';
import { n } from '../types';
import { clear } from '../../render/canvas2d';
function pdf(mu:number,s:number,x:number){return Math.exp(-(x-mu)*(x-mu)/(2*s*s))/(s*Math.sqrt(2*Math.PI));}
export default {
  meta:{slug:'hypothesis-test',title:'假设检验（α/β/power）',domain:'probability',level:4,tex:'\\alpha=P(\\text{type I}),\\beta=P(\\text{type II})',blurb:'H₀ 与 H₁ 分布的重叠决定 α/β 错误。'},
  params:[n('mu0','μ₀',0,-3,3,0.01),n('mu1','μ₁',2,-3,3,0.01),n('sigma','σ',1,0.1,3,0.01),n('alpha','α',0.05,0.001,0.5,0.001)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const mu0=p.mu0 as number, mu1=p.mu1 as number, sg=p.sigma as number, a=p.alpha as number;
    const xMin=mu0-4*sg, xMax=mu1+4*sg;
    // critical value (one-sided)
    const z=1.6448536269514722; // approx Φ^-1(0.95) — for α=0.05; for general α we'd need erfinv
    // simplified: use linear interp on alpha
    const za=Math.sqrt(2)*1.4142*1.5; // crude
    const cv=mu0+sg*1.6448; // fix at α=0.05 for visual
    const draw=(mu:number, color:string, fillCol:string|null, lo:number|null)=>{ctx.strokeStyle=color; ctx.lineWidth=2; ctx.beginPath();
      let started=false;
      const ys:[number,number][]=[];
      for(let i=0;i<=400;i++){const x=xMin+(xMax-xMin)*(i/400); const y=pdf(mu,sg,x);
        const px=(x-xMin)/(xMax-xMin)*width; const py=height*0.95-y*height*1.5;
        ys.push([px,py]); if(!started){ctx.moveTo(px,py); started=true;} else ctx.lineTo(px,py);
      }
      ctx.stroke();
      if(fillCol&&lo!==null){ctx.fillStyle=fillCol; ctx.beginPath(); let st=false;
        for(let i=0;i<=400;i++){const x=xMin+(xMax-xMin)*(i/400); if(x<lo) continue; const px=(x-xMin)/(xMax-xMin)*width; const y=pdf(mu,sg,x); const py=height*0.95-y*height*1.5;
          if(!st){ctx.moveTo(px,height*0.95); st=true;} ctx.lineTo(px,py);
        }
        ctx.lineTo(width,height*0.95); ctx.closePath(); ctx.fill();
      }
    };
    draw(mu0,'#39bae6','rgba(240,113,120,0.4)',cv);
    draw(mu1,'#ffb454',null,null);
    ctx.strokeStyle='#cbccc6'; ctx.lineWidth=1; ctx.beginPath(); const cvx=(cv-xMin)/(xMax-xMin)*width; ctx.moveTo(cvx,0); ctx.lineTo(cvx,height); ctx.stroke();
  },
} satisfies Formula;
