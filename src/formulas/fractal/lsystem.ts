import type { Formula } from '../types';
import { n, i, s as sel } from '../types';
import { clear } from '../../render/canvas2d';
const presets:Record<string,{ax:string, rules:Record<string,string>, ang:number}>={
  koch:{ax:'F', rules:{F:'F+F-F-F+F'}, ang:90},
  dragon:{ax:'FX', rules:{X:'X+YF+', Y:'-FX-Y'}, ang:90},
  sierp:{ax:'F-G-G', rules:{F:'F-G+F+G-F', G:'GG'}, ang:120},
  plant:{ax:'X', rules:{X:'F+[[X]-X]-F[-FX]+X', F:'FF'}, ang:25},
};
export default {
  meta:{slug:'lsystem',title:'L-System',domain:'fractal',level:3,tex:'F\\to F+F-F-F+F',blurb:'符号迭代生成分形：Koch/Dragon/Sierpinski/Plant。',surface:'canvas2d'},
  params:[sel('preset','预设','koch',[{value:'koch',label:'Koch'},{value:'dragon',label:'Dragon'},{value:'sierp',label:'Sierpinski'},{value:'plant',label:'Plant'}]),i('iter','迭代',4,1,8)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const pre=presets[p.preset as string];
    let str=pre.ax;
    for(let i=0;i<(p.iter as number);i++){let n=''; for(const ch of str) n+=pre.rules[ch]??ch; str=n;}
    let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
    let x=0,y=0,a=p.preset==='plant'?Math.PI/2:0;
    const stack:[number,number,number][]=[];
    const ang=pre.ang*Math.PI/180;
    const segs:[number,number,number,number][]=[];
    for(const ch of str){
      if(ch==='F'||ch==='G'){const nx=x+Math.cos(a), ny=y+Math.sin(a); segs.push([x,y,nx,ny]); x=nx; y=ny; minX=Math.min(minX,x); minY=Math.min(minY,y); maxX=Math.max(maxX,x); maxY=Math.max(maxY,y);}
      else if(ch==='+') a+=ang;
      else if(ch==='-') a-=ang;
      else if(ch==='[') stack.push([x,y,a]);
      else if(ch===']'){const t=stack.pop()!; x=t[0]; y=t[1]; a=t[2];}
    }
    const W=maxX-minX, H=maxY-minY; const sc=Math.min(width/W, height/H)*0.9; const ox=(width-W*sc)/2-minX*sc, oy=(height-H*sc)/2-minY*sc;
    ctx.strokeStyle='#c2d94c'; ctx.lineWidth=1;
    ctx.beginPath();
    for(const [x1,y1,x2,y2] of segs){ctx.moveTo(ox+x1*sc, oy+y1*sc); ctx.lineTo(ox+x2*sc, oy+y2*sc);}
    ctx.stroke();
  },
} satisfies Formula;
