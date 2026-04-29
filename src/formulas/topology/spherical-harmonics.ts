import * as THREE from 'three';
import { i, n } from '../types';
import { surface3d } from '../../templates/surface3d';
function fact(k:number){let r=1; for(let i=2;i<=k;i++) r*=i; return r;}
function P(l:number,m:number,x:number):number{
  if(m<0||m>l||Math.abs(x)>1) return 0;
  let pmm=1;
  if(m>0){const sx=Math.sqrt((1-x)*(1+x)); let f=1; for(let i=1;i<=m;i++){pmm*=-f*sx; f+=2;}}
  if(l===m) return pmm;
  let pmm1=x*(2*m+1)*pmm;
  if(l===m+1) return pmm1;
  let p=0;
  for(let ll=m+2;ll<=l;ll++){p=((2*ll-1)*x*pmm1-(ll+m-1)*pmm)/(ll-m); pmm=pmm1; pmm1=p;}
  return p;
}
export default surface3d({
  meta:{slug:'spherical-harmonics',title:'球谐函数 Y_{l,m}',domain:'topology',level:5,tex:'Y_l^m(\\theta,\\phi)',blurb:'量子原子轨道形状。'},
  params:[i('l','l',3,0,6),i('m','m',2,0,6)],
  parametric:p=>{const l=p.l as number, m=Math.min(p.m as number, l);
    return (u,v,t)=>{const phi=u, theta=v;
      const Y=Math.cos(m*phi)*P(l,m,Math.cos(theta));
      const r=Math.abs(Y)*0.8+0.3;
      t.set(r*Math.sin(theta)*Math.cos(phi), r*Math.cos(theta), r*Math.sin(theta)*Math.sin(phi));};
  },
  uRange:[0,Math.PI*2], vRange:[0,Math.PI], segments:[80,60], color:0xffb454,
});
