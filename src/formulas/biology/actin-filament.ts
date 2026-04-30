import * as THREE from 'three';
import type { Formula } from '../types';
import { i } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let g:THREE.Group|null=null;
const f:Formula = {
  meta:{slug:'actin-filament',title:'肌动蛋白丝 (F-actin)',domain:'biology',level:3,tex:'\\text{double helix, 13 monomers/turn}',blurb:'两条 G-actin 链缠绕形成丝状结构。',surface:'three'},
  params:[i('n','单体数',40,10,100)],
  render(s,p){
    if(s.kind!=='three') return; const c=getThree(s);
    const sig=`${p.n}`; if(sig===last && g){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene);
    g=new THREE.Group();
    const N=p.n as number, R=0.35, twist=2*Math.PI/13.5, dz=0.13;
    const m=new THREE.MeshStandardMaterial({color:0xc2d94c, metalness:0.4, roughness:0.4});
    for(let i=0;i<N;i++){
      const a=i*twist, z=i*dz-N*dz/2;
      const sp=new THREE.Mesh(new THREE.SphereGeometry(0.18,12,12), m);
      sp.position.set(R*Math.cos(a), R*Math.sin(a), z); g.add(sp);
    }
    c.scene.add(g); last=sig;
    c.camera.position.set(2,2,5); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
