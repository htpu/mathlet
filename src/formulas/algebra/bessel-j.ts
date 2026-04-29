import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
function fact(k:number){let r=1; for(let i=2;i<=k;i++) r*=i; return r;}
function J(m:number,x:number){let s=0; for(let k=0;k<25;k++) s+=Math.pow(-1,k)/(fact(k)*fact(k+m))*Math.pow(x/2,2*k+m); return s;}
export default fn1d({
  meta:{slug:'bessel-j',title:'Bessel 函数 Jₘ',domain:'algebra',level:4,tex:'J_m(x)',blurb:'圆柱坐标系本征解。'},
  params:[i('m','阶 m',0,0,5)],
  fn:p=>x=>J(p.m as number, x),
  view:{cx:5,cy:0,scale:40},
});
