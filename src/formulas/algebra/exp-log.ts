import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'exp-log',title:'指数 vs 对数',domain:'algebra',level:2,tex:'y=a^x,y=\\log_a x',blurb:'反函数互为镜像（y=x）。'},
  params:[n('a','底数 a',2,1.1,5,0.01)],
  fns:[
    {color:'#ffb454', fn:p=>x=>Math.pow(p.a as number, x)},
    {color:'#39bae6', fn:p=>x=>x>0?Math.log(x)/Math.log(p.a as number):NaN},
    {color:'#2d3340', fn:p=>x=>x},
  ],
  fn:()=>x=>Math.exp(x),
  view:{cx:0,cy:0,scale:35},
});
