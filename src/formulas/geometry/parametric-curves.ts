import { n, s as sel } from '../types';
import { param2d } from '../../templates/param2d';
export default param2d({
  meta:{slug:'parametric-curves',title:'参数曲线集',domain:'geometry',level:2,tex:'(x,y)=(f(t),g(t))',blurb:'摆线/星型线/心形线/外摆线。'},
  params:[sel('curve','曲线','cycloid',[
    {value:'cycloid',label:'摆线'},
    {value:'astroid',label:'星型线'},
    {value:'cardioid',label:'心脏线'},
    {value:'epicycloid',label:'外摆线'},
    {value:'hypocycloid',label:'内摆线'},
  ]), n('a','参数 a',1,0.2,3,0.01), n('b','参数 b',0.3,0.05,1,0.01)],
  fn:p=>t=>{
    const a=p.a as number, b=p.b as number;
    if(p.curve==='cycloid') return [a*(t-Math.sin(t)), a*(1-Math.cos(t))];
    if(p.curve==='astroid') return [a*Math.cos(t)**3, a*Math.sin(t)**3];
    if(p.curve==='cardioid') return [a*(2*Math.cos(t)-Math.cos(2*t)), a*(2*Math.sin(t)-Math.sin(2*t))];
    if(p.curve==='epicycloid') return [(a+b)*Math.cos(t)-b*Math.cos((a+b)/b*t), (a+b)*Math.sin(t)-b*Math.sin((a+b)/b*t)];
    return [(a-b)*Math.cos(t)+b*Math.cos((a-b)/b*t), (a-b)*Math.sin(t)-b*Math.sin((a-b)/b*t)];
  },
  tRange:()=>[0, Math.PI*8],
  view:{cx:0,cy:0,scale:50},
});
