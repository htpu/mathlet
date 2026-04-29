import { s as sel } from '../types';
import { fn1d } from '../../templates/fn1d';
const wins:Record<string,(x:number)=>number>={
  rect:x=>(x>=0&&x<=1)?1:0,
  hann:x=>(x>=0&&x<=1)?0.5*(1-Math.cos(2*Math.PI*x)):0,
  hamming:x=>(x>=0&&x<=1)?0.54-0.46*Math.cos(2*Math.PI*x):0,
  blackman:x=>(x>=0&&x<=1)?0.42-0.5*Math.cos(2*Math.PI*x)+0.08*Math.cos(4*Math.PI*x):0,
  bartlett:x=>(x>=0&&x<=1)?1-Math.abs(2*x-1):0,
};
export default fn1d({
  meta:{slug:'window-functions',title:'窗函数',domain:'signals',level:3,tex:'w(n)',blurb:'Rect/Hann/Hamming/Blackman/Bartlett。'},
  params:[sel('w','窗','hann',[{value:'rect',label:'矩形'},{value:'hann',label:'Hann'},{value:'hamming',label:'Hamming'},{value:'blackman',label:'Blackman'},{value:'bartlett',label:'Bartlett'}])],
  fn:p=>x=>wins[p.w as string](x),
  view:{cx:0.5,cy:0.5,scale:200},
});
