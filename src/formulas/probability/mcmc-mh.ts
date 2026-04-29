import type { Formula } from '../types';
import { n, i } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
import { mulberry32, gaussian } from '../../render/numerics';
let chain:[number,number][]=[]; let last='';
export default {
  meta:{slug:'mcmc-mh',title:'MCMC Metropolis-Hastings',domain:'probability',level:4,tex:'\\alpha=\\min(1,\\pi(x\')/\\pi(x))',blurb:'采样目标密度（双高斯混合）。',surface:'canvas2d',animated:true},
  params:[n('step','步长',0.4,0.05,2,0.01),i('reset','reset',0,0,1,1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const sig=`${p.reset}`;
    if(last!==sig){chain=[[0,0]]; last=sig;}
    const r=mulberry32(7+chain.length);
    const target=(x:number,y:number)=>{
      const a=Math.exp(-((x-1.2)**2+(y-0.5)**2)/0.4);
      const b=Math.exp(-((x+1)**2+(y+0.8)**2)/0.6);
      return a+0.7*b;
    };
    for(let k=0;k<20;k++){
      const cur=chain[chain.length-1];
      const nx=cur[0]+gaussian(r)*(p.step as number);
      const ny=cur[1]+gaussian(r)*(p.step as number);
      const a=Math.min(1, target(nx,ny)/target(cur[0],cur[1]));
      if(r()<a) chain.push([nx,ny]); else chain.push([cur[0],cur[1]]);
      if(chain.length>3000) chain.shift();
    }
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    s.ctx.strokeStyle='rgba(57,186,230,0.2)'; s.ctx.lineWidth=0.6/v.scale;
    s.ctx.beginPath();
    for(let i=1;i<chain.length;i++){s.ctx.moveTo(chain[i-1][0],chain[i-1][1]); s.ctx.lineTo(chain[i][0],chain[i][1]);}
    s.ctx.stroke();
    for(const c of chain) fillCircle(s,v,c[0],c[1],1.2,'#ffb454');
  },
} satisfies Formula;
