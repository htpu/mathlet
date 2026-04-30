import * as THREE from 'three';
import type { Formula } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
const f:Formula = {
  meta:{slug:'trna-cloverleaf',title:'tRNA cloverleaf',domain:'biology',level:3,tex:'\\text{4 stem-loops in clover shape}',blurb:'tRNA 二级结构：D臂、反密码子臂、TΨC臂、接受臂。',surface:'three'},
  params:[],
  render(s){
    if(s.kind!=='three') return; const c=getThree(s);
    clearScene(c.scene); addLights(c.scene);
    const stems=[[0,1,0,0xff6b35],[-1,0,0,0x39bae6],[1,0,0,0xc2d94c],[0,-1,0,0xd2a6ff]];
    for(const [dx,dy,_,col] of stems){const dir=new THREE.Vector3(dx as number, dy as number, 0).normalize();
      // stem
      const path=new THREE.Curve<THREE.Vector3>();
      path.getPoint=(t,target=new THREE.Vector3())=>{const r=0.5+t*1.2; return target.set(dir.x*r, dir.y*r, 0);};
      const tube=new THREE.TubeGeometry(path,30,0.1,8,false);
      c.scene.add(new THREE.Mesh(tube, new THREE.MeshStandardMaterial({color:col as number,metalness:0.4,roughness:0.4})));
      // loop circle at end
      const loop=new THREE.Mesh(new THREE.TorusGeometry(0.3,0.08,8,24), new THREE.MeshStandardMaterial({color:col as number}));
      loop.position.set(dir.x*1.9, dir.y*1.9, 0); loop.lookAt(dir.x*4, dir.y*4, 0); c.scene.add(loop);
    }
    // central junction
    c.scene.add(new THREE.Mesh(new THREE.SphereGeometry(0.18,16,16), new THREE.MeshStandardMaterial({color:0xffd166})));
    c.camera.position.set(0,0,5); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
