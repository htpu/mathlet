import * as THREE from 'three';
import type { Formula } from '../types';
import { i, n } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let group:THREE.Group|null=null;
const f:Formula = {
  meta:{slug:'dna-z-form',title:'DNA Z 型左手螺旋',domain:'biology',level:4,tex:'\\text{12 bp/turn, left-handed, zig-zag}',blurb:'高盐 + GC 重复序列下的左手螺旋。'},
  params:[i('bp','碱基对',24,6,60)],
  render(s,p){
    if(s.kind!=='three') return; const c=getThree(s);
    const sig=`${p.bp}`;
    if(sig===last && group){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene);
    group=new THREE.Group();
    const N=p.bp as number, twist=-30*Math.PI/180, rise=0.185, R=0.45;
    const m1=new THREE.MeshStandardMaterial({color:0xff9800,metalness:0.5,roughness:0.4});
    const m2=new THREE.MeshStandardMaterial({color:0x4ecdc4,metalness:0.5,roughness:0.4});
    for(let i=0;i<N;i++){
      const z=i*rise-N*rise/2, a=i*twist + (i%2===0?0:0.5);
      const x1=R*Math.cos(a), y1=R*Math.sin(a);
      const x2=R*Math.cos(a+Math.PI), y2=R*Math.sin(a+Math.PI);
      const s1=new THREE.Mesh(new THREE.SphereGeometry(0.12,12,12),m1); s1.position.set(x1,y1,z); group.add(s1);
      const s2=new THREE.Mesh(new THREE.SphereGeometry(0.12,12,12),m2); s2.position.set(x2,y2,z); group.add(s2);
    }
    c.scene.add(group); last=sig;
    c.camera.position.set(2.5,2.5,4); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
