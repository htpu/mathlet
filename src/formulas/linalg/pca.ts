import type { Formula } from '../types';
import { n, i } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
import { mulberry32, gaussian } from '../../render/numerics';
export default {
  meta:{slug:'pca',title:'PCA 主成分',domain:'linalg',level:3,tex:'C v=\\lambda v',blurb:'高斯散点的协方差矩阵特征向量 = 主轴。',surface:'canvas2d'},
  params:[n('cov','协方差',0.6,-0.95,0.95,0.01),n('sx','σx',1.5,0.3,3,0.01),n('sy','σy',0.6,0.3,3,0.01),i('N','点数',400,50,2000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const r=mulberry32(7);
    const sx=p.sx as number, sy=p.sy as number, rho=p.cov as number;
    let mx=0,my=0,sxx=0,syy=0,sxy=0;
    for(let k=0;k<(p.N as number);k++){
      const z1=gaussian(r), z2=gaussian(r);
      const x=sx*z1; const y=sy*(rho*z1+Math.sqrt(1-rho*rho)*z2);
      mx+=x; my+=y; sxx+=x*x; syy+=y*y; sxy+=x*y;
      fillCircle(s,v,x,y,1.5,'rgba(57,186,230,0.6)');
    }
    const N=p.N as number;
    mx/=N; my/=N; sxx=sxx/N-mx*mx; syy=syy/N-my*my; sxy=sxy/N-mx*my;
    const tr=sxx+syy, det=sxx*syy-sxy*sxy;
    const disc=Math.sqrt(Math.max(0,tr*tr-4*det));
    const l1=(tr+disc)/2, l2=(tr-disc)/2;
    for(const [l,col] of [[l1,'#ffb454'],[l2,'#f07178']] as [number,string][]){
      let vx=1,vy=0;
      if(Math.abs(sxy)>1e-9){vx=sxy; vy=l-sxx;} else {vx=l>=sxx?1:0; vy=l>=sxx?0:1;}
      const m=Math.hypot(vx,vy); vx/=m; vy/=m;
      const len=Math.sqrt(l)*2;
      s.ctx.strokeStyle=col; s.ctx.lineWidth=2.5/v.scale;
      s.ctx.beginPath(); s.ctx.moveTo(-len*vx,-len*vy); s.ctx.lineTo(len*vx,len*vy); s.ctx.stroke();
    }
  },
} satisfies Formula;
