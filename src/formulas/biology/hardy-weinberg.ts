import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'hardy-weinberg',title:'Hardy-Weinberg 平衡',domain:'biology',level:2,tex:'p^2+2pq+q^2=1',blurb:'横轴 p，三条线为 AA / Aa / aa。'},
  params:[],
  fns:[
    {color:'#ffb454',fn:()=>p=>p*p},
    {color:'#39bae6',fn:()=>p=>2*p*(1-p)},
    {color:'#c2d94c',fn:()=>p=>(1-p)*(1-p)},
  ],
  fn:()=>p=>p*p,
  view:{cx:0.5,cy:0.5,scale:300},
});
