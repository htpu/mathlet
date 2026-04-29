import type { Formula } from '../types';
import { n, i, s as sel } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
type FN={f:(x:number,y:number)=>number, gx:(x:number,y:number)=>number, gy:(x:number,y:number)=>number, scale:number};
const fns:Record<string,FN>={
  bowl:{f:(x,y)=>x*x+3*y*y, gx:(x)=>2*x, gy:(_,y)=>6*y, scale:30},
  rosen:{f:(x,y)=>(1-x)**2+50*(y-x*x)**2, gx:(x,y)=>-2*(1-x)-200*x*(y-x*x), gy:(x,y)=>100*(y-x*x), scale:40},
  saddle:{f:(x,y)=>x*x-y*y, gx:(x)=>2*x, gy:(_,y)=>-2*y, scale:30},
};
export default {
  meta:{slug:'gradient-descent',title:'梯度下降轨迹',domain:'optimization',level:3,tex:'x_{n+1}=x_n-\\eta\\nabla f',blurb:'看 lr 和函数地形如何决定收敛。',surface:'canvas2d'},
  params:[sel('fn','函数','bowl',[{value:'bowl',label:'碗形'},{value:'rosen',label:'Rosenbrock'},{value:'saddle',label:'鞍点'}]),n('lr','lr',0.05,0.001,0.5,0.001),n('x0','起 x',-1.5,-2,2,0.01),n('y0','起 y',1,-2,2,0.01),i('steps','步数',60,1,500)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const fn=fns[p.fn as string];
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/5};
    clear(s); setupView(s,v); drawAxes(s,v);
    // contour
    const {ctx}=s;
    for(let l=0;l<10;l++){const lev=Math.pow(2,l-2);
      ctx.strokeStyle=`rgba(57,186,230,${0.2+l*0.05})`; ctx.lineWidth=0.6/v.scale; ctx.beginPath();
      for(let x=-2;x<=2;x+=0.05) for(let y=-2;y<=2;y+=0.05){if(Math.abs(fn.f(x,y)-lev)<lev*0.1) ctx.fillRect(x,y,0.02,0.02);}
      ctx.stroke();
    }
    let x=p.x0 as number, y=p.y0 as number;
    ctx.strokeStyle='#ffb454'; ctx.lineWidth=1.5/v.scale; ctx.beginPath(); ctx.moveTo(x,y);
    for(let i=0;i<(p.steps as number);i++){x-=(p.lr as number)*fn.gx(x,y); y-=(p.lr as number)*fn.gy(x,y); if(!isFinite(x)||!isFinite(y)) break; ctx.lineTo(x,y);}
    ctx.stroke();
    fillCircle(s,v,p.x0 as number, p.y0 as number, 5, '#39bae6');
    if(isFinite(x)&&isFinite(y)) fillCircle(s,v,x,y,5,'#f07178');
  },
} satisfies Formula;
