import type { Formula } from '../types';
import { n, i } from '../types';
import { clear, drawAxes, setupView, plotFn, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'golden-section',title:'黄金分割搜索',domain:'optimization',level:3,tex:'\\phi=(\\sqrt 5-1)/2',blurb:'区间内单峰函数最小化。'},
  params:[n('a','a',-2,-5,5,0.01),n('b','b',2,-5,5,0.01),i('iter','步',8,1,30)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/10};
    clear(s); setupView(s,v); drawAxes(s,v);
    const f=(x:number)=>(x-1)**2+0.3;
    plotFn(s,v,f,'#39bae6');
    let a=p.a as number, b=p.b as number;
    const phi=(Math.sqrt(5)-1)/2;
    for(let it=0;it<(p.iter as number);it++){
      const c=b-phi*(b-a), d=a+phi*(b-a);
      if(f(c)<f(d)) b=d; else a=c;
      fillCircle(s,v,a,0,3,'#ffb454'); fillCircle(s,v,b,0,3,'#f07178');
    }
    fillCircle(s,v,(a+b)/2,f((a+b)/2),5,'#c2d94c');
  },
} satisfies Formula;
