import type { Formula } from '../types';
import { i } from '../types';
import { clear, drawAxes, setupView, strokeCircle, fillCircle } from '../../render/canvas2d';
import { mulberry32 } from '../../render/numerics';
export default {
  meta:{slug:'circle-pack',title:'圆密堆积',domain:'geometry',level:2,tex:'\\rho_{2D}=\\frac{\\pi}{2\\sqrt 3}',blurb:'平面最密堆积六边形格，密度 ≈ 0.9069。',surface:'canvas2d'},
  params:[i('rows','行数',8,3,20)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:5,cy:5,scale:Math.min(s.width,s.height)/12};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    const N=p.rows as number;
    for(let r=0;r<N;r++) for(let c=0;c<N;c++){
      const x=c+(r%2)*0.5, y=r*Math.sqrt(3)/2;
      strokeCircle(s,v,x,y,0.5,`hsl(${(r+c)*20%360},70%,55%)`,1);
    }
  },
} satisfies Formula;
