import * as THREE from 'three';
import type { Formula } from '../types';
import { n } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
export default {
  meta:{slug:'cross-product-3d',title:'3D 叉积',domain:'linalg',level:2,tex:'a\\times b',blurb:'结果向量垂直于 a, b。',surface:'three'},
  params:[n('ax','a.x',1,-2,2,0.01),n('ay','a.y',1,-2,2,0.01),n('az','a.z',0,-2,2,0.01),n('bx','b.x',0,-2,2,0.01),n('by','b.y',1,-2,2,0.01),n('bz','b.z',1,-2,2,0.01)],
  render(s,p){
    if(s.kind!=='three') return;
    const c=getThree(s);
    clearScene(c.scene); addLights(c.scene); c.scene.add(new THREE.AxesHelper(2));
    const a=new THREE.Vector3(p.ax as number,p.ay as number,p.az as number);
    const b=new THREE.Vector3(p.bx as number,p.by as number,p.bz as number);
    const cross=new THREE.Vector3().crossVectors(a,b);
    c.scene.add(new THREE.ArrowHelper(a.clone().normalize(), new THREE.Vector3(0,0,0), a.length(), 0x39bae6));
    c.scene.add(new THREE.ArrowHelper(b.clone().normalize(), new THREE.Vector3(0,0,0), b.length(), 0xc2d94c));
    c.scene.add(new THREE.ArrowHelper(cross.clone().normalize(), new THREE.Vector3(0,0,0), cross.length(), 0xffb454));
    c.renderer.render(c.scene,c.camera);
  },
} satisfies Formula;
