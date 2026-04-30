import * as THREE from 'three';
import type { Formula } from '../types';
import { i } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let g:THREE.Group|null=null;
const f:Formula = {
  meta:{slug:'ribosome-3d',title:'核糖体 (大小亚基)',domain:'biology',level:3,tex:'\\text{50S + 30S subunits}',blurb:'蛋白合成机器，两亚基夹合 mRNA。'},
  params:[i('seed','纹理 seed',7,1,100)],
  render(s,p){
    if(s.kind!=='three') return; const c=getThree(s);
    const sig=`${p.seed}`; if(sig===last && g){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene);
    g=new THREE.Group();
    const big=new THREE.Mesh(new THREE.IcosahedronGeometry(1.0, 1), new THREE.MeshStandardMaterial({color:0xff6b35, flatShading:true, metalness:0.3, roughness:0.5}));
    big.position.set(0,0.5,0); big.scale.set(1.2,1.0,1.1); g.add(big);
    const small=new THREE.Mesh(new THREE.IcosahedronGeometry(0.7, 1), new THREE.MeshStandardMaterial({color:0xffd166, flatShading:true, metalness:0.3, roughness:0.5}));
    small.position.set(0,-0.6,0); small.scale.set(1.0,0.7,1.0); g.add(small);
    const mrna=new THREE.Mesh(new THREE.CylinderGeometry(0.06,0.06,3,8), new THREE.MeshStandardMaterial({color:0x39bae6}));
    mrna.rotation.z=Math.PI/2; g.add(mrna);
    c.scene.add(g); last=sig;
    c.camera.position.set(3,1,3); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
