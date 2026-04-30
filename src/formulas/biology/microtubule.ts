import * as THREE from 'three';
import type { Formula } from '../types';
import { i } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let g:THREE.Group|null=null;
const f:Formula = {
  meta:{slug:'microtubule',title:'微管 (Microtubule)',domain:'biology',level:3,tex:'\\text{13 protofilaments, αβ-tubulin dimers}',blurb:'13 条原丝构成的中空管。',surface:'three'},
  params:[i('n','环数',16,5,40)],
  render(s,p){
    if(s.kind!=='three') return; const c=getThree(s);
    const sig=`${p.n}`; if(sig===last && g){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene);
    g=new THREE.Group();
    const N=p.n as number, R=0.6, dz=0.2, P=13;
    const ma=new THREE.MeshStandardMaterial({color:0x39bae6, metalness:0.5, roughness:0.4});
    const mb=new THREE.MeshStandardMaterial({color:0xff6b35, metalness:0.5, roughness:0.4});
    for(let i=0;i<N;i++) for(let j=0;j<P;j++){
      const a=2*Math.PI*j/P + i*0.05;
      const z=i*dz-N*dz/2;
      const sp=new THREE.Mesh(new THREE.SphereGeometry(0.13,10,10), (i%2===0)?ma:mb);
      sp.position.set(R*Math.cos(a), R*Math.sin(a), z); g.add(sp);
    }
    c.scene.add(g); last=sig;
    c.camera.position.set(2,2,4); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
