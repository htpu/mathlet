import type { Formula } from '../types';
import { i } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
function gcd(a:number,b:number):number{return b===0?a:gcd(b,a%b);}
export default {
  meta:{slug:'lattice-gcd',title:'格点 gcd 视图',domain:'geometry',level:2,tex:'\\gcd(x,y)',blurb:'整点上 gcd 着色。',surface:'canvas2d'},
  params:[i('range','范围',20,5,80)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/((p.range as number)*2.2)};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    const R=p.range as number;
    for(let x=-R;x<=R;x++) for(let y=-R;y<=R;y++) if(x!==0||y!==0){
      const g=gcd(Math.abs(x),Math.abs(y));
      fillCircle(s,v,x,y,2,g===1?'#ffb454':`hsl(${(g*40)%360},70%,55%)`);
    }
  },
} satisfies Formula;
