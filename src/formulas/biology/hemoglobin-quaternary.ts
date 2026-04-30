import * as THREE from 'three';
import type { Formula } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
const f:Formula = {
  meta:{slug:'hemoglobin-quaternary',title:'血红蛋白四聚体',domain:'biology',level:3,tex:'\\alpha_2\\beta_2',blurb:'两个 α 链 + 两个 β 链，每个含血红素。',surface:'three'},
  params:[],
  render(s){
    if(s.kind!=='three') return; const c=getThree(s);
    clearScene(c.scene); addLights(c.scene);
    const positions:[number,number,number,number][]=[[1,0,0,0xff6b35],[-1,0,0,0xff6b35],[0,1,0,0x39bae6],[0,-1,0,0x39bae6]];
    for(const [x,y,z,col] of positions){const sub=new THREE.Mesh(new THREE.IcosahedronGeometry(0.6,1), new THREE.MeshStandardMaterial({color:col,flatShading:true,metalness:0.3,roughness:0.5}));
      sub.position.set(x,y,z); c.scene.add(sub);
      // heme group (red disk)
      const heme=new THREE.Mesh(new THREE.CylinderGeometry(0.18,0.18,0.05,12), new THREE.MeshStandardMaterial({color:0xf07178,metalness:0.6,roughness:0.3}));
      heme.position.set(x*0.55,y*0.55,z+0.4); heme.rotation.x=Math.PI/2; c.scene.add(heme);}
    c.camera.position.set(2.5,2.5,3.5); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
