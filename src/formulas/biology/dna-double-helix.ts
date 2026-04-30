import * as THREE from 'three';
import type { Formula } from '../types';
import { i, n } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let group:THREE.Group|null=null;
const f:Formula = {
  meta:{slug:'dna-double-helix',title:'DNA 双螺旋 (B 型)',domain:'biology',level:3,tex:'\\text{2 strands, 10.5 bp/turn, 3.4 Å rise}',blurb:'B-form 右手螺旋，AT/GC 配对桥连。',surface:'three'},
  params:[i('bp','碱基对',30,5,80),n('twist','扭角°/bp',34.3,20,60,0.1),n('rise','上升 Å/bp',3.4,2,5,0.01)],
  render(s,p){
    if(s.kind!=='three') return; const c=getThree(s);
    const sig=`${p.bp}|${p.twist}|${p.rise}`;
    if(sig===last && group){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene);
    group=new THREE.Group();
    const N=p.bp as number, dt=(p.twist as number)*Math.PI/180, dz=(p.rise as number)*0.05, R=0.5;
    const m1=new THREE.MeshStandardMaterial({color:0x39bae6,metalness:0.5,roughness:0.4});
    const m2=new THREE.MeshStandardMaterial({color:0xd2a6ff,metalness:0.5,roughness:0.4});
    const colA=[0xc2d94c,0xffb454,0xf07178,0x39bae6];
    for(let i=0;i<N;i++){
      const z=i*dz-N*dz/2, a=i*dt;
      const x1=R*Math.cos(a), y1=R*Math.sin(a);
      const x2=R*Math.cos(a+Math.PI), y2=R*Math.sin(a+Math.PI);
      const s1=new THREE.Mesh(new THREE.SphereGeometry(0.13,12,12),m1); s1.position.set(x1,y1,z); group.add(s1);
      const s2=new THREE.Mesh(new THREE.SphereGeometry(0.13,12,12),m2); s2.position.set(x2,y2,z); group.add(s2);
      const mid=new THREE.Vector3((x1+x2)/2,(y1+y2)/2,z);
      const dir=new THREE.Vector3(x2-x1,y2-y1,0); const len=dir.length();
      const cyl=new THREE.Mesh(new THREE.CylinderGeometry(0.04,0.04,len,8), new THREE.MeshStandardMaterial({color:colA[i%4],roughness:0.5}));
      cyl.position.copy(mid); cyl.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0), dir.clone().normalize()); group.add(cyl);
    }
    c.scene.add(group); last=sig;
    c.camera.position.set(2.5,2.5,4); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
