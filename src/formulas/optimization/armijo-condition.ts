import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'armijo-condition',title:'Armijo 条件 (回溯线搜索)',domain:'optimization',level:3,tex:'f(x+\\alpha d)\\le f(x)+c\\alpha\\nabla f^Td',blurb:'蓝线 = 原 f；橙线 = 接受界。横轴步长 α，f(x)=x²。'},
  params:[n('c','c',0.5,0.01,1,0.01)],
  fns:[
    {color:'#39bae6',fn:_=>a=>a*a},
    {color:'#ffb454',fn:p=>a=>{const c=p.c as number;return -2*c*a;}},
  ],
  fn:_=>a=>a*a,
  view:{cx:0,cy:0,scale:80},
});
