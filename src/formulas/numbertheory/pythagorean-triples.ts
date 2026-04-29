import type { Formula } from '../types';
import { i } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
function gcd(a:number,b:number):number{return b===0?a:gcd(b,a%b);}
export default {
  meta:{slug:'pythagorean-triples',title:'毕达哥拉斯三元组',domain:'numbertheory',level:3,tex:'a^2+b^2=c^2',blurb:'本原三元组 (a, b, c) 在平面上的分布。',surface:'canvas2d'},
  params:[i('max','c 上限',50,5,200)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const M=p.max as number;
    const v={cx:M/2,cy:M/2,scale:Math.min(s.width,s.height)/(M*1.2)};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    for(let m=2;m<Math.sqrt(M);m++) for(let nn=1;nn<m;nn++){if(gcd(m,nn)===1&&(m-nn)%2===1){const a=m*m-nn*nn, b=2*m*nn, c=m*m+nn*nn;
      if(c<=M){fillCircle(s,v,a,b,3,'#ffb454'); fillCircle(s,v,b,a,3,'#39bae6');}}}
  },
} satisfies Formula;
