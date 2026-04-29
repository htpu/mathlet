import * as THREE from 'three';
import type { Formula } from '../types';
import { n } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let cube:THREE.Mesh|null=null;
export default {
  meta:{slug:'rotation-3d',title:'3D 旋转矩阵',domain:'linalg',level:3,tex:'R=R_z R_y R_x',blurb:'欧拉角合成的 3D 旋转。',surface:'three'},
  params:[n('rx','绕 x',0.3,-Math.PI,Math.PI,0.01),n('ry','绕 y',0.5,-Math.PI,Math.PI,0.01),n('rz','绕 z',0.2,-Math.PI,Math.PI,0.01)],
  render(s,p){
    if(s.kind!=='three') return;
    const c=getThree(s);
    if(!cube){clearScene(c.scene); addLights(c.scene); c.scene.add(new THREE.AxesHelper(2));
      const geo=new THREE.BoxGeometry(1.5,1,0.7);
      const mat=new THREE.MeshStandardMaterial({color:0xffb454,metalness:0.3,roughness:0.4});
      cube=new THREE.Mesh(geo,mat); c.scene.add(cube);
    }
    cube.rotation.set(p.rx as number, p.ry as number, p.rz as number);
    c.renderer.render(c.scene,c.camera);
  },
} satisfies Formula;
