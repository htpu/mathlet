import * as THREE from 'three';
import type { Formula } from '../types';
import { i, n } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last='';
export default {
  meta:{slug:'hopf-fibration',title:'Hopf 纤维化',domain:'topology',level:5,tex:'S^3\\to S^2',blurb:'S² 上每点对应 S³ 上一个圆。投影到 R³ 看缠绕环。',surface:'three'},
  params:[i('rings','环数',12,4,40),n('latitude','纬度',1,0.1,2,0.01)],
  render(s,p){
    if(s.kind!=='three') return;
    const c=getThree(s);
    const sig=`${p.rings}|${p.latitude}`;
    if(last===sig){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene); c.scene.add(new THREE.AxesHelper(2));
    const N=p.rings as number;
    for(let i=0;i<N;i++){
      const theta=(i/N)*Math.PI*2;
      const lat=(p.latitude as number);
      // base point on S^2: (sin(lat)cos(theta), sin(lat)sin(theta), cos(lat))
      const sx=Math.sin(lat)*Math.cos(theta), sy=Math.sin(lat)*Math.sin(theta), sz=Math.cos(lat);
      const pts:THREE.Vector3[]=[];
      for(let t=0;t<=Math.PI*2;t+=0.05){
        // Hopf preimage circle
        const a=Math.cos(lat/2), b=Math.sin(lat/2);
        const x1=a*Math.cos(t+theta/2);
        const x2=a*Math.sin(t+theta/2);
        const x3=b*Math.cos(t-theta/2);
        const x4=b*Math.sin(t-theta/2);
        // Stereographic projection from S^3 to R^3
        const k=1/(1-x4+1e-9);
        pts.push(new THREE.Vector3(x1*k,x2*k,x3*k));
      }
      const geo=new THREE.BufferGeometry().setFromPoints(pts);
      const mat=new THREE.LineBasicMaterial({color:new THREE.Color().setHSL(i/N,0.7,0.55)});
      c.scene.add(new THREE.Line(geo,mat));
    }
    last=sig;
    c.renderer.render(c.scene,c.camera);
  },
} satisfies Formula;
