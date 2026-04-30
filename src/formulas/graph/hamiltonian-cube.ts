import * as THREE from 'three';
import type { Formula } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
const f:Formula = {
  meta:{slug:'hamiltonian-cube',title:'立方图哈密顿环',domain:'graph',level:3,tex:'\\text{cycle visiting all 8 vertices}',blurb:'立方体上的哈密顿回路。',surface:'three'},
  params:[],
  render(s){
    if(s.kind!=='three') return; const c=getThree(s);
    clearScene(c.scene); addLights(c.scene);
    const verts:number[][]=[];
    for(let i=0;i<8;i++) verts.push([(i&1)?1:-1,(i&2)?1:-1,(i&4)?1:-1]);
    const mat=new THREE.MeshStandardMaterial({color:0xffb454, metalness:0.5, roughness:0.4});
    for(const [x,y,z] of verts){const m=new THREE.Mesh(new THREE.SphereGeometry(0.12,12,12),mat); m.position.set(x,y,z); c.scene.add(m);}
    const edges:[number,number][]=[]; for(let i=0;i<8;i++) for(let j=i+1;j<8;j++){let d=0; for(let k=0;k<3;k++) if(verts[i][k]!==verts[j][k]) d++; if(d===1) edges.push([i,j]);}
    const dim=new THREE.LineBasicMaterial({color:0x3a3f4b});
    for(const [a,b] of edges){const g=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(...verts[a]), new THREE.Vector3(...verts[b])]); c.scene.add(new THREE.Line(g,dim));}
    const cycle=[0,1,3,2,6,7,5,4,0];
    const hot=new THREE.LineBasicMaterial({color:0x39bae6, linewidth:3});
    for(let i=0;i<cycle.length-1;i++){const g=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(...verts[cycle[i]]), new THREE.Vector3(...verts[cycle[i+1]])]); c.scene.add(new THREE.Line(g,hot));}
    c.camera.position.set(3,3,3); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
