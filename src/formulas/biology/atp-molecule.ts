import * as THREE from 'three';
import type { Formula } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
const f:Formula = {
  meta:{slug:'atp-molecule',title:'ATP (示意)',domain:'biology',level:2,tex:'\\text{adenine + ribose + 3 phosphates}',blurb:'细胞能量货币：腺嘌呤+核糖+三磷酸基团。',surface:'three'},
  params:[],
  render(s){
    if(s.kind!=='three') return; const c=getThree(s);
    clearScene(c.scene); addLights(c.scene);
    // adenine (hexagon ring)
    const adenine=new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.4,0.1,6), new THREE.MeshStandardMaterial({color:0x39bae6,metalness:0.4,roughness:0.4}));
    adenine.position.set(-1.5,0,0); adenine.rotation.x=Math.PI/2; c.scene.add(adenine);
    // ribose (pentagon)
    const ribose=new THREE.Mesh(new THREE.CylinderGeometry(0.35,0.35,0.1,5), new THREE.MeshStandardMaterial({color:0xc2d94c,metalness:0.4,roughness:0.4}));
    ribose.position.set(-0.6,0,0); ribose.rotation.x=Math.PI/2; c.scene.add(ribose);
    // phosphates
    for(let i=0;i<3;i++){const ph=new THREE.Mesh(new THREE.SphereGeometry(0.3,16,16), new THREE.MeshStandardMaterial({color:0xff6b35,metalness:0.5,roughness:0.4}));
      ph.position.set(0.3+i*0.7,0,0); c.scene.add(ph);
      if(i<2){const bond=new THREE.Mesh(new THREE.CylinderGeometry(0.06,0.06,0.5,8), new THREE.MeshStandardMaterial({color:0xffd166}));
        bond.position.set(0.65+i*0.7,0,0); bond.rotation.z=Math.PI/2; c.scene.add(bond);}
    }
    // ribose-phosphate bond
    const b=new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,0.6,8), new THREE.MeshStandardMaterial({color:0x707a8c}));
    b.position.set(-0.15,0,0); b.rotation.z=Math.PI/2; c.scene.add(b);
    // adenine-ribose bond
    const b2=new THREE.Mesh(new THREE.CylinderGeometry(0.05,0.05,0.7,8), new THREE.MeshStandardMaterial({color:0x707a8c}));
    b2.position.set(-1.05,0,0); b2.rotation.z=Math.PI/2; c.scene.add(b2);
    c.camera.position.set(0,2.5,4); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
