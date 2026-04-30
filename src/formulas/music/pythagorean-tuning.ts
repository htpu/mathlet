import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'pythagorean-tuning',title:'毕达哥拉斯调律',domain:'music',level:3,tex:'r=(3/2)^n\\bmod 2',blurb:'5度堆叠后归到八度内。'},
  params:[],
  fn:()=>n=>{if(n<0) return NaN; let r=Math.pow(1.5,n); while(r>=2) r/=2; return r;},
  view:{cx:7,cy:1.4,scale:30},
});
