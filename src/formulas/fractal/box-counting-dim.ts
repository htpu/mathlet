import type { Formula } from '../types';
import { i } from '../types';
import { clear, drawAxes, setupView, fillCircle, text } from '../../render/canvas2d';
export default {
  meta:{slug:'box-counting-dim',title:'盒计数维数',domain:'fractal',level:4,tex:'D=\\lim\\frac{\\log N(\\epsilon)}{\\log 1/\\epsilon}',blurb:'Koch 雪花的盒计数维数 ≈ log4/log3。',surface:'canvas2d'},
  params:[i('iter','分段',5,2,8)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:1.5,cy:1.5,scale:Math.min(s.width,s.height)/4};
    clear(s); setupView(s,v); drawAxes(s,v);
    const data:[number,number][]=[];
    for(let k=1;k<=(p.iter as number);k++){const N=Math.pow(4,k); const eps=1/Math.pow(3,k);
      data.push([Math.log(1/eps), Math.log(N)]); fillCircle(s,v,Math.log(1/eps), Math.log(N),5,'#39bae6');}
    if(data.length>=2){const last=data[data.length-1], first=data[0];
      const slope=(last[1]-first[1])/(last[0]-first[0]);
      s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale;
      s.ctx.beginPath(); s.ctx.moveTo(0, first[1]-slope*first[0]); s.ctx.lineTo(5, first[1]+slope*(5-first[0])); s.ctx.stroke();
      text(s,12,12,`D ≈ ${slope.toFixed(4)}, log4/log3 = ${(Math.log(4)/Math.log(3)).toFixed(4)}`,'#ffb454',12);
    }
  },
} satisfies Formula;
