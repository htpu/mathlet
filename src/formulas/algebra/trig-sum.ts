import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'trig-sum',title:'三角和角公式',domain:'algebra',level:2,tex:'\\sin(a+b)=\\sin a\\cos b+\\cos a\\sin b',blurb:'sin(x+φ) 的相位偏移 = 余弦/正弦组合。'},
  params:[n('phi','相位 φ',1,-Math.PI,Math.PI,0.01)],
  fns:[
    {color:'#2d3340', fn:p=>x=>Math.sin(x)},
    {color:'#39bae6', fn:p=>x=>Math.cos(x)*Math.sin(p.phi as number)},
    {color:'#c2d94c', fn:p=>x=>Math.sin(x)*Math.cos(p.phi as number)},
    {color:'#ffb454', fn:p=>x=>Math.sin(x+(p.phi as number))},
  ],
  fn:()=>x=>Math.sin(x),
  view:{cx:0,cy:0,scale:50},
});
