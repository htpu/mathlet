import { s as sel, n } from '../types';
import { fn1d } from '../../templates/fn1d';
const fns:Record<string,(p:any,x:number)=>number>={
  relu:(_,x)=>Math.max(0,x),
  leaky:(p,x)=>x>0?x:0.1*x,
  elu:(p,x)=>x>0?x:(p.a as number)*(Math.exp(x)-1),
  gelu:(_,x)=>0.5*x*(1+Math.tanh(Math.sqrt(2/Math.PI)*(x+0.044715*x*x*x))),
  swish:(_,x)=>x/(1+Math.exp(-x)),
};
export default fn1d({
  meta:{slug:'relu',title:'ReLU 家族',domain:'algebra',level:2,tex:'\\max(0,x),\\text{Leaky},\\text{ELU},\\text{GELU},\\text{Swish}',blurb:'神经网常用激活函数。'},
  params:[sel('fn','类型','relu',[{value:'relu',label:'ReLU'},{value:'leaky',label:'Leaky'},{value:'elu',label:'ELU'},{value:'gelu',label:'GELU'},{value:'swish',label:'Swish'}]), n('a','ELU α',1,0.1,3,0.01)],
  fn:p=>x=>fns[p.fn as string](p,x),
  view:{cx:0,cy:0,scale:60},
});
