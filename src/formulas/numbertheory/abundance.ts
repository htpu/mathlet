import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'abundance',title:'σ(n)/n 充沛指数',domain:'numbertheory',level:3,tex:'\\sigma(n)/n=\\sum_{d|n}\\frac{1}{d}',blurb:'>2 充沛 / <2 亏 / =2 完全。横轴 n。'},
  params:[],
  fn:_=>x=>{let n=Math.floor(x);if(n<1)return NaN;const N=n;let r=0;for(let d=1;d*d<=N;d++) if(N%d===0){r+=1/d;const q=N/d;if(q!==d) r+=1/q;}return r;},
  view:{cx:60,cy:1.5,scale:6},
});
