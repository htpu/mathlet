import type { Formula } from '../types';
import { i } from '../types';
import { mulberry32 } from '../../render/numerics';
let grid:Uint8Array|null=null; let last=''; const N=200;
export default {
  meta:{slug:'diff-limited-aggregation',title:'扩散限制聚集 (DLA)',domain:'fractal',level:4,tex:'\\text{Brownian sticky aggregation}',blurb:'随机粒子游走粘到中心种子 → 树突。',surface:'canvas2d',animated:true},
  params:[i('speed','每帧粒子',5,1,30),i('reset','reset',0,0,1,1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const sig=`${p.reset}`;
    if(!grid||last!==sig){grid=new Uint8Array(N*N); grid[(N>>1)*N+(N>>1)]=1; last=sig;}
    const r=mulberry32(Date.now()&0xffff);
    for(let k=0;k<(p.speed as number);k++){
      let x=Math.floor(r()*N), y=Math.floor(r()*N);
      for(let it=0;it<5000;it++){
        x+=Math.floor(r()*3)-1; y+=Math.floor(r()*3)-1;
        if(x<0||x>=N||y<0||y>=N) break;
        for(const [dx,dy] of [[-1,0],[1,0],[0,-1],[0,1]]){const nx=x+dx, ny=y+dy; if(nx>=0&&nx<N&&ny>=0&&ny<N&&grid[nx*N+ny]){grid[x*N+y]=1; it=5000; break;}}
      }
    }
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const off=document.createElement('canvas'); off.width=N; off.height=N;
    const oc=off.getContext('2d')!; const img=oc.createImageData(N,N);
    for(let i=0;i<N*N;i++){if(grid[i]){img.data[i*4]=255; img.data[i*4+1]=180; img.data[i*4+2]=84;} else {img.data[i*4]=10; img.data[i*4+1]=14; img.data[i*4+2]=20;} img.data[i*4+3]=255;}
    oc.putImageData(img,0,0); ctx.imageSmoothingEnabled=false; ctx.drawImage(off,0,0,width,height);
  },
} satisfies Formula;
