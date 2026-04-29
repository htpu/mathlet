import type { Formula } from '../types';
import { i } from '../types';
import { clear, drawAxes, setupView, fillCircle, text } from '../../render/canvas2d';
function gcd(a:number,b:number):number{return b===0?a:gcd(b,a%b);}
export default {
  meta:{slug:'farey-sequence',title:'Farey 序列',domain:'numbertheory',level:3,tex:'F_n=\\{a/b:0\\le a/b\\le 1,\\gcd(a,b)=1,b\\le n\\}',blurb:'阶 n 的 Farey 序列分布。',surface:'canvas2d'},
  params:[i('n','n',10,2,30)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0.5, cy:0, scale:Math.min(s.width/1.2, s.height/0.4)};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    const N=p.n as number;
    const fracs:[number,number][]=[];
    for(let b=1;b<=N;b++) for(let a=0;a<=b;a++) if(gcd(a,b)===1) fracs.push([a,b]);
    fracs.sort((x,y)=>x[0]/x[1]-y[0]/y[1]);
    for(const [a,b] of fracs){fillCircle(s,v,a/b, 0, 3, `hsl(${b*30%360},70%,55%)`);}
    text(s, 12, 12, `|F_${N}| = ${fracs.length}`, '#ffb454', 13);
  },
} satisfies Formula;
