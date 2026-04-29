import type { Formula } from '../types';
import { n, i } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
export default {
  meta:{slug:'logistic-map',title:'逻辑斯蒂映射',domain:'fractal',level:3,tex:'x_{n+1}=rx_n(1-x_n)',blurb:'蛛网图：抛物线 + y=x 的迭代轨迹。'},
  params:[n('r','r',3.6,0,4,0.005),n('x0','x₀',0.4,0.01,0.99,0.001),i('N','迭代步',60,1,300)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0.5,cy:0.5,scale:Math.min(s.width,s.height)/1.2};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    const r=p.r as number;
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=1.5/v.scale;
    s.ctx.beginPath(); for(let i=0;i<=200;i++){const x=i/200; if(i===0) s.ctx.moveTo(x,r*x*(1-x)); else s.ctx.lineTo(x,r*x*(1-x));} s.ctx.stroke();
    s.ctx.strokeStyle='#2d3340'; s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(1,1); s.ctx.stroke();
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=1/v.scale;
    let x=p.x0 as number, y=0; s.ctx.beginPath(); s.ctx.moveTo(x,0);
    for(let i=0;i<(p.N as number);i++){const ny=r*x*(1-x); s.ctx.lineTo(x,ny); s.ctx.lineTo(ny,ny); x=ny;}
    s.ctx.stroke();
  },
} satisfies Formula;
