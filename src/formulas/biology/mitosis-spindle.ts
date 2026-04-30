import * as THREE from 'three';
import type { Formula } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
const f:Formula = {
  meta:{slug:'mitosis-spindle',title:'有丝分裂纺锤体',domain:'biology',level:3,tex:'\\text{centrosomes + kinetochore microtubules}',blurb:'两极中心体伸出微管牵引染色体。',surface:'three'},
  params:[],
  render(s){
    if(s.kind!=='three') return; const c=getThree(s);
    clearScene(c.scene); addLights(c.scene);
    // centrosomes
    const cMat=new THREE.MeshStandardMaterial({color:0xff6b35,metalness:0.5,roughness:0.4});
    for(const x of [-2.5, 2.5]){const ce=new THREE.Mesh(new THREE.SphereGeometry(0.25,16,16),cMat); ce.position.set(x,0,0); c.scene.add(ce);}
    // microtubules from each pole
    const mtMat=new THREE.LineBasicMaterial({color:0x39bae6, transparent:true, opacity:0.6});
    for(const x of [-2.5, 2.5]) for(let i=0;i<14;i++){const ang=Math.PI*(i/13)-Math.PI/2;
      const target=new THREE.Vector3(0,Math.sin(ang)*0.9,Math.cos(ang)*0.9);
      const geo=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x,0,0), target]);
      c.scene.add(new THREE.Line(geo,mtMat));}
    // chromosomes at metaphase plate
    for(let i=0;i<6;i++){const a=2*Math.PI*i/6;
      const ch=new THREE.Mesh(new THREE.CapsuleGeometry(0.1,0.4,4,8), new THREE.MeshStandardMaterial({color:0xc2d94c}));
      ch.position.set(0,0.7*Math.cos(a),0.7*Math.sin(a)); ch.rotation.z=Math.random()*Math.PI; c.scene.add(ch);}
    c.camera.position.set(0,3,5); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
