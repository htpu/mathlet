import { i, s as sel } from '../types';
import { histogram } from '../../templates/histogram';
function sample(dist:string,n:number,r:()=>number){let s=0;
  if(dist==='uniform'){for(let i=0;i<n;i++) s+=r()*2-1;}
  else if(dist==='exp'){for(let i=0;i<n;i++) s+=-Math.log(1-r());}
  else if(dist==='bern'){for(let i=0;i<n;i++) s+=(r()<0.3?1:0);}
  return s/Math.sqrt(n);
}
export default histogram({
  meta:{slug:'clt',title:'中心极限定理',domain:'probability',level:2,tex:'\\frac{S_n-n\\mu}{\\sigma\\sqrt n}\\to\\mathcal N(0,1)',blurb:'调样本数 n 看分布如何向高斯靠近。'},
  params:[i('n','样本数 n',5,1,80), sel('dist','分布','uniform',[{value:'uniform',label:'均匀'},{value:'exp',label:'指数'},{value:'bern',label:'伯努利'}])],
  sample:(p,r)=>sample(p.dist as string, p.n as number, r),
  range:()=>[-3,3], bins:60,
});
