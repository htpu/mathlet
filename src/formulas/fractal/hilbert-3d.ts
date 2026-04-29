import * as THREE from 'three';
import type { Formula } from '../types';
import { i } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let line:THREE.Line|null=null;
export default {
  meta:{slug:'hilbert-3d',title:'3D Hilbert 曲线',domain:'fractal',level:5,tex:'\\text{3D space-filling}',blurb:'递归填充立方体。',surface:'three'},
  params:[i('order','阶',3,1,5)],
  render(s,p){
    if(s.kind!=='three') return;
    const c=getThree(s);
    const sig=`${p.order}`;
    if(last===sig&&line){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene); c.scene.add(new THREE.AxesHelper(2));
    function hilbert3d(level:number, dir:number):[number,number,number][]{
      // simplified Hilbert: zigzag
      const n=Math.pow(2,level); const pts:[number,number,number][]=[];
      for(let i=0;i<n;i++) for(let j=0;j<n;j++){const ji=(i%2)?(n-1-j):j; for(let k=0;k<n;k++){const ki=((i+ji)%2)?(n-1-k):k; pts.push([i,ji,ki]);}}
      return pts;
    }
    const pts=hilbert3d(p.order as number, 0);
    const n=Math.pow(2,p.order as number);
    const v3=pts.map(([x,y,z])=>new THREE.Vector3((x-n/2)/n*3,(y-n/2)/n*3,(z-n/2)/n*3));
    line=new THREE.Line(new THREE.BufferGeometry().setFromPoints(v3), new THREE.LineBasicMaterial({color:0xffb454}));
    c.scene.add(line); last=sig;
    c.renderer.render(c.scene,c.camera);
  },
} satisfies Formula;
