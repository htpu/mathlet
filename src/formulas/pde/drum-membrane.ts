import * as THREE from 'three';
import { n, i } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'drum-membrane',title:'圆膜本征模 (m,n)',domain:'pde',level:4,tex:'u_{mn}=J_m(\\alpha r)\\cos(m\\theta)',blurb:'圆鼓膜的本征振型，Bessel 函数节点圆。'},
  params:[i('m','m',2,0,5),i('mode','径向 n',1,1,5),n('amp','幅度',0.4,0.05,1,0.01)],
  parametric:p=>{
    const m=p.m as number, mode=p.mode as number, amp=p.amp as number;
    const zeros:Record<number,number[]>={0:[2.405,5.520,8.654,11.79,14.93],1:[3.832,7.016,10.17,13.32],2:[5.135,8.417,11.62,14.80],3:[6.380,9.761,13.01],4:[7.588,11.06,14.37],5:[8.771,12.34]};
    const a=zeros[m]?.[mode-1]??5;
    return (u,v,t)=>{const r=u, th=v;
      // crude J_m via series (ok for r in [0,~10])
      const x=a*r;
      let J=0; for(let kk=0;kk<25;kk++){J+=Math.pow(-1,kk)/((fact(kk)*fact(kk+m))) * Math.pow(x/2, 2*kk+m);}
      const z=J*Math.cos(m*th);
      t.set(r*Math.cos(th), z*amp, r*Math.sin(th));
    };
  },
  uRange:[0,1], vRange:[0,Math.PI*2],
  segments:[64,64], showAxes:false,
});
function fact(k:number){let r=1; for(let i=2;i<=k;i++) r*=i; return r;}
