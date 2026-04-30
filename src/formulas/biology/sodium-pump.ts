import * as THREE from 'three';
import type { Formula } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
const f:Formula = {
  meta:{slug:'sodium-pump',title:'Na/K-ATPase pump',domain:'biology',level:3,tex:'3Na^+ \\text{ out, } 2K^+ \\text{ in}',blurb:'跨膜钠钾泵示意：3 Na 出 / 2 K 入。',surface:'three'},
  params:[],
  render(s){
    if(s.kind!=='three') return; const c=getThree(s);
    clearScene(c.scene); addLights(c.scene);
    // membrane (two layers)
    for(const z of [-0.25, 0.25]){const slab=new THREE.Mesh(new THREE.BoxGeometry(4,0.18,2), new THREE.MeshStandardMaterial({color:0xffd166,opacity:0.4,transparent:true}));
      slab.position.set(0,z,0); c.scene.add(slab);}
    // pump (cylindrical channel)
    const pump=new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.4,0.9,16), new THREE.MeshStandardMaterial({color:0x39bae6,metalness:0.4,roughness:0.4}));
    c.scene.add(pump);
    // Na ions going out (top)
    for(let i=0;i<3;i++){const a=2*Math.PI*i/3;
      const na=new THREE.Mesh(new THREE.SphereGeometry(0.16,12,12), new THREE.MeshStandardMaterial({color:0xff6b35}));
      na.position.set(0.3*Math.cos(a),0.9,0.3*Math.sin(a)); c.scene.add(na);}
    // K ions going in (bottom)
    for(let i=0;i<2;i++){const a=Math.PI*i;
      const k=new THREE.Mesh(new THREE.SphereGeometry(0.18,12,12), new THREE.MeshStandardMaterial({color:0xc2d94c}));
      k.position.set(0.3*Math.cos(a),-0.9,0.3*Math.sin(a)); c.scene.add(k);}
    c.camera.position.set(2.5,2,3); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
