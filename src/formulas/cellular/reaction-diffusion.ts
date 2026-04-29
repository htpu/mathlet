import { i, n } from '../types';
import { ca2d } from '../../templates/ca2d';
let a:Float32Array, b:Float32Array, na:Float32Array, nb:Float32Array;
export default ca2d({
  meta:{slug:'reaction-diffusion',title:'Gray-Scott 反应扩散',domain:'cellular',level:4,tex:'\\partial_t U=D_u\\nabla^2 U-UV^2+F(1-U)',blurb:'细胞分裂/孔洞/迷宫斑纹（feed/kill 决定）。'},
  params:[i('speed','速度',2,1,5),n('feed','feed F',0.055,0.01,0.1,0.0005),n('kill','kill k',0.062,0.01,0.1,0.0005)],
  size:120,
  init:(p,g,W,H)=>{a=new Float32Array(W*H); b=new Float32Array(W*H); na=new Float32Array(W*H); nb=new Float32Array(W*H);
    for(let i=0;i<W*H;i++){a[i]=1; b[i]=0;}
    for(let i=W/2-10;i<W/2+10;i++) for(let j=H/2-10;j<H/2+10;j++) b[(i|0)*H+(j|0)]=1;
    for(let i=0;i<W*H;i++) g[i]=Math.floor(b[i]*255);
  },
  step:(p,g,n,W,H)=>{
    const F=p.feed as number, K=p.kill as number;
    const Du=1, Dv=0.5, dt=1;
    for(let i=0;i<W;i++) for(let j=0;j<H;j++){
      const idx=i*H+j;
      const lapA=a[((i-1+W)%W)*H+j]+a[((i+1)%W)*H+j]+a[i*H+(j-1+H)%H]+a[i*H+(j+1)%H]-4*a[idx];
      const lapB=b[((i-1+W)%W)*H+j]+b[((i+1)%W)*H+j]+b[i*H+(j-1+H)%H]+b[i*H+(j+1)%H]-4*b[idx];
      const r=a[idx]*b[idx]*b[idx];
      na[idx]=a[idx]+(Du*lapA-r+F*(1-a[idx]))*dt;
      nb[idx]=b[idx]+(Dv*lapB+r-(K+F)*b[idx])*dt;
    }
    [a,na]=[na,a]; [b,nb]=[nb,b];
    for(let i=0;i<W*H;i++) n[i]=Math.floor(Math.min(1,Math.max(0,b[i]))*255);
  },
  colorize:v=>[v, Math.floor(v*0.7), Math.floor(255-v)],
});
