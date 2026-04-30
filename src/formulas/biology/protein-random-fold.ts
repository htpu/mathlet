import * as THREE from 'three';
import type { Formula } from '../types';
import { i } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
import { mulberry32 } from '../../render/numerics';
let last=''; let g:THREE.Group|null=null;
const f:Formula = {
  meta:{slug:'protein-random-fold',title:'蛋白随机折叠',domain:'biology',level:4,tex:'\\text{self-avoiding walk}',blurb:'随机角度自洽行走模拟肽链折叠。',surface:'three'},
  params:[i('seed','seed',42,1,200),i('len','长度',80,20,200)],
  render(s,p){
    if(s.kind!=='three') return; const c=getThree(s);
    const sig=`${p.seed}|${p.len}`; if(sig===last && g){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene);
    g=new THREE.Group();
    const r=mulberry32(p.seed as number); const N=p.len as number;
    const pts:THREE.Vector3[]=[new THREE.Vector3(0,0,0)];
    let dir=new THREE.Vector3(1,0,0);
    for(let i=1;i<N;i++){
      const ax=r()-0.5, ay=r()-0.5, az=r()-0.5;
      const m=new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(ax*0.7,ay*0.7,az*0.7));
      dir.applyMatrix4(m); dir.normalize();
      pts.push(pts[i-1].clone().add(dir.clone().multiplyScalar(0.25)));
    }
    const cx=pts.reduce((a,p)=>a+p.x,0)/N, cy=pts.reduce((a,p)=>a+p.y,0)/N, cz=pts.reduce((a,p)=>a+p.z,0)/N;
    pts.forEach(p=>p.sub(new THREE.Vector3(cx,cy,cz)));
    const path=new THREE.CatmullRomCurve3(pts);
    const tube=new THREE.TubeGeometry(path, N*4, 0.1, 8, false);
    g.add(new THREE.Mesh(tube, new THREE.MeshStandardMaterial({color:0x39bae6, metalness:0.5, roughness:0.4})));
    c.scene.add(g); last=sig;
    c.camera.position.set(4,4,4); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
