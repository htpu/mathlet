import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, strokeCircle, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'cycloid-anim',title:'摆线生成动画',domain:'geometry',level:1,tex:'(r(t-\\sin t),r(1-\\cos t))',blurb:'圆滚动留下的轨迹 = 摆线。',surface:'canvas2d',animated:true},
  params:[n('r','半径',0.5,0.1,1.5,0.01),n('speed','速度',1,0.1,3,0.01)],
  render(s,p,t){
    if(s.kind!=='canvas2d') return;
    const v={cx:5,cy:0.5,scale:Math.min(s.width,s.height)/4};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    const r=p.r as number; const tt=(t*(p.speed as number))%(Math.PI*4);
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath();
    for(let u=0;u<=tt;u+=0.02){const x=r*(u-Math.sin(u)), y=r*(1-Math.cos(u)); if(u===0) s.ctx.moveTo(x,y); else s.ctx.lineTo(x,y);}
    s.ctx.stroke();
    const cx=r*tt; const cy=r;
    strokeCircle(s,v,cx,cy,r,'#39bae6');
    const px=r*(tt-Math.sin(tt)), py=r*(1-Math.cos(tt));
    fillCircle(s,v,px,py,5,'#f07178');
    s.ctx.strokeStyle='#2d3340'; s.ctx.lineWidth=1/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(cx,cy); s.ctx.lineTo(px,py); s.ctx.stroke();
  },
} satisfies Formula;
