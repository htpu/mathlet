import * as THREE from 'three';
import type { Formula } from '../types';
import { n } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let setup=false; let mesh:THREE.Mesh; let q1:THREE.Quaternion, q2:THREE.Quaternion;
export default {
  meta:{slug:'quaternion-slerp',title:'四元数 Slerp 插值',domain:'linalg',level:4,tex:'q(t)=q_1(q_1^{-1}q_2)^t',blurb:'两个旋转之间的最短弧插值。',surface:'three'},
  params:[n('t','t',0.5,0,1,0.01)],
  render(s,p){
    if(s.kind!=='three') return;
    const c=getThree(s);
    if(!setup){clearScene(c.scene); addLights(c.scene); c.scene.add(new THREE.AxesHelper(2));
      mesh=new THREE.Mesh(new THREE.ConeGeometry(0.4,1.4,16), new THREE.MeshStandardMaterial({color:0xffb454,metalness:0.3,roughness:0.4}));
      c.scene.add(mesh);
      q1=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0), 0.5);
      q2=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,1).normalize(), 2.5);
      setup=true;
    }
    const q=new THREE.Quaternion().slerpQuaternions(q1,q2,p.t as number);
    mesh.quaternion.copy(q);
    c.renderer.render(c.scene,c.camera);
  },
} satisfies Formula;
