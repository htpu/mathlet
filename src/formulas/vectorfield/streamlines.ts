import type { Formula } from '../types';
import { n, s as sel } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
import { rk4 } from '../../render/numerics';
const fields:Record<string,(x:number,y:number)=>[number,number]>={
  saddle:(x,y)=>[x,-y],
  spiral:(x,y)=>[-y-0.1*x,x-0.1*y],
  doublewell:(x,y)=>[y, x-x*x*x],
};
export default {
  meta:{slug:'streamlines',title:'流线（积分曲线）',domain:'vectorfield',level:3,tex:'\\frac{dx}{dt}=F(x)',blurb:'多种 2D 向量场的流线。',surface:'canvas2d'},
  params:[sel('field','场','spiral',[{value:'saddle',label:'鞍'},{value:'spiral',label:'螺旋'},{value:'doublewell',label:'双井'}]), n('density','密度',12,4,30,1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/6};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    const fn=fields[p.field as string];
    const f=(_:number,y:number[])=>fn(y[0],y[1]);
    const den=p.density as number;
    for(let i=0;i<den;i++) for(let j=0;j<den;j++){
      const x0=-3+(i+0.5)*6/den, y0=-3+(j+0.5)*6/den;
      let st=[x0,y0];
      s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=0.6/v.scale;
      s.ctx.beginPath(); s.ctx.moveTo(x0,y0);
      for(let k=0;k<80;k++){st=rk4(f,0,st,0.05); if(Math.abs(st[0])>4||Math.abs(st[1])>4) break; s.ctx.lineTo(st[0],st[1]);}
      s.ctx.stroke();
    }
  },
} satisfies Formula;
