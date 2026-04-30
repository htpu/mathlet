import * as THREE from 'three';
import type { Formula } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
const f:Formula = {
  meta:{slug:'nucleosome',title:'Nucleosome',domain:'biology',level:3,tex:'\\text{147 bp DNA wrapped 1.65 turns around histone octamer}',blurb:'染色质基本单位：DNA 缠绕 8 聚体组蛋白核心。',surface:'three'},
  params:[],
  render(s){
    if(s.kind!=='three') return; const c=getThree(s);
    clearScene(c.scene); addLights(c.scene);
    const histones=new THREE.Group();
    const hMat=new THREE.MeshStandardMaterial({color:0xff6b35,metalness:0.4,roughness:0.4});
    const offsets=[[0,0.3,0.3],[0,-0.3,0.3],[0.3,0,0.3],[-0.3,0,0.3],[0,0.3,-0.3],[0,-0.3,-0.3],[0.3,0,-0.3],[-0.3,0,-0.3]];
    for(const [x,y,z] of offsets){const m=new THREE.Mesh(new THREE.SphereGeometry(0.32,16,16),hMat); m.position.set(x,y,z); histones.add(m);}
    c.scene.add(histones);
    // DNA superhelix
    const path=new THREE.Curve<THREE.Vector3>();
    path.getPoint=(t,target=new THREE.Vector3())=>{const a=t*Math.PI*2*1.65; const r=0.85; return target.set(r*Math.cos(a), (t-0.5)*1.2, r*Math.sin(a));};
    const tube=new THREE.TubeGeometry(path,200,0.08,8,false);
    c.scene.add(new THREE.Mesh(tube, new THREE.MeshStandardMaterial({color:0x39bae6, metalness:0.5, roughness:0.4})));
    c.camera.position.set(2.5,2,2.5); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
