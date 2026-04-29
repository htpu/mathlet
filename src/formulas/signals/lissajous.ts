import { n } from '../types';
import { param2d } from '../../templates/param2d';
export default param2d({
  meta:{slug:'lissajous',title:'Lissajous 曲线',domain:'signals',level:1,tex:'x=A\\sin(at+\\delta),y=B\\sin(bt)',blurb:'频率比 a:b 决定闭合形态。'},
  params:[n('a','a',3,1,12,0.01),n('b','b',2,1,12,0.01),n('delta','δ',Math.PI/2,0,Math.PI*2,0.01)],
  fn:p=>t=>[Math.sin((p.a as number)*t+(p.delta as number)), Math.sin((p.b as number)*t)],
  tRange:()=>[0, Math.PI*2],
  view:{cx:0,cy:0,scale:120},
});
