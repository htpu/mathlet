import type { Formula } from '../types';
import { n, i } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'coordinate-descent',title:'坐标下降',domain:'optimization',level:3,tex:'\\arg\\min_{x_i} f \\text{ 一次只动一维}',blurb:'交替沿 x、y 方向最小化。'},
  params:[n('x0','初值 x',-1.5,-3,3,0.01),n('y0','初值 y',1.5,-3,3,0.01),i('steps','步数',10,1,30)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/5};
    clear(s); setupView(s,v); drawAxes(s,v);
    const f=(x:number,y:number)=>x*x+3*y*y+x*y;
    let x=p.x0 as number, y=p.y0 as number;
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale; s.ctx.beginPath(); s.ctx.moveTo(x,y);
    fillCircle(s,v,x,y,4,'#39bae6');
    for(let i=0;i<(p.steps as number);i++){
      // minimize over x: 2x + y = 0 → x = -y/2
      x=-y/2; s.ctx.lineTo(x,y);
      // minimize over y: 6y + x = 0 → y = -x/6
      y=-x/6; s.ctx.lineTo(x,y);
      fillCircle(s,v,x,y,3,'#f07178');
    }
    s.ctx.stroke();
  },
} satisfies Formula;
