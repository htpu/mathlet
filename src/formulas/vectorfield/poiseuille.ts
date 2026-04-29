import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
export default {
  meta:{slug:'poiseuille',title:'Poiseuille 流（管中速度剖面）',domain:'vectorfield',level:3,tex:'u(r)=\\frac{\\Delta P}{4\\mu L}(R^2-r^2)',blurb:'圆管层流抛物线剖面。',surface:'canvas2d'},
  params:[n('R','管半径 R',1,0.3,2,0.01),n('dP','压差 ΔP',1,0,5,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:1,cy:0,scale:Math.min(s.width,s.height)/4};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    const R=p.R as number, dP=p.dP as number;
    s.ctx.strokeStyle='#2d3340'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(0,R); s.ctx.lineTo(2,R); s.ctx.moveTo(0,-R); s.ctx.lineTo(2,-R); s.ctx.stroke();
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=1/v.scale; s.ctx.fillStyle='#ffb454';
    for(let yi=-R+0.05;yi<=R-0.05;yi+=R/8){
      const u=dP/4*(R*R-yi*yi);
      s.ctx.beginPath(); s.ctx.moveTo(0.1,yi); s.ctx.lineTo(0.1+u,yi); s.ctx.stroke();
      const ang=0; const ah=0.05;
      s.ctx.beginPath();
      s.ctx.moveTo(0.1+u,yi);
      s.ctx.lineTo(0.1+u-ah*Math.cos(ang-0.4), yi-ah*Math.sin(ang-0.4));
      s.ctx.lineTo(0.1+u-ah*Math.cos(ang+0.4), yi-ah*Math.sin(ang+0.4));
      s.ctx.closePath(); s.ctx.fill();
    }
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath();
    for(let yi=-R;yi<=R;yi+=0.02){const u=dP/4*(R*R-yi*yi); if(yi===-R) s.ctx.moveTo(0.1+u,yi); else s.ctx.lineTo(0.1+u,yi);}
    s.ctx.stroke();
  },
} satisfies Formula;
