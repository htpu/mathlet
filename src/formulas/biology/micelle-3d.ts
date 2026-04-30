import * as THREE from 'three';
import type { Formula } from '../types';
import { i } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let g:THREE.Group|null=null;
const f:Formula = {
  meta:{slug:'micelle-3d',title:'胶束 (Micelle)',domain:'biology',level:3,tex:'\\text{spherical surfactant cluster}',blurb:'两亲分子球形聚集，头朝外。'},
  params:[i('n','分子数',60,20,200)],
  render(s,p){
    if(s.kind!=='three') return; const c=getThree(s);
    const sig=`${p.n}`; if(sig===last && g){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene);
    g=new THREE.Group();
    const N=p.n as number;
    const head=new THREE.MeshStandardMaterial({color:0xff6b35, metalness:0.3, roughness:0.4});
    for(let i=0;i<N;i++){
      const phi=Math.acos(1-2*(i+0.5)/N), th=Math.PI*(1+Math.sqrt(5))*i;
      const dir=new THREE.Vector3(Math.sin(phi)*Math.cos(th), Math.sin(phi)*Math.sin(th), Math.cos(phi));
      const headPos=dir.clone().multiplyScalar(1.0);
      const h=new THREE.Mesh(new THREE.SphereGeometry(0.1,8,8), head); h.position.copy(headPos); g.add(h);
      const tail=new THREE.Mesh(new THREE.CylinderGeometry(0.025,0.025,0.6,6), new THREE.MeshStandardMaterial({color:0xffd166}));
      tail.position.copy(dir.clone().multiplyScalar(0.55));
      tail.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0), dir);
      g.add(tail);
    }
    c.scene.add(g); last=sig;
    c.camera.position.set(2.5,2.5,2.5); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
