import * as THREE from 'three';
import type { Formula } from '../types';
import { i } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let mesh:THREE.Mesh|null=null;
export default {
  meta:{slug:'icosahedron',title:'柏拉图正多面体',domain:'geometry',level:2,tex:'\\text{tetra/octa/icosa/dodeca}',blurb:'5 种正多面体可视化。',surface:'three'},
  params:[i('which','类型',2,0,4)],
  render(s,p){
    if(s.kind!=='three') return;
    const c=getThree(s);
    const sig=`${p.which}`;
    if(last===sig&&mesh){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene); c.scene.add(new THREE.AxesHelper(2));
    const geos=[new THREE.TetrahedronGeometry(1),new THREE.BoxGeometry(1.5,1.5,1.5),new THREE.OctahedronGeometry(1),new THREE.IcosahedronGeometry(1),new THREE.DodecahedronGeometry(1)];
    mesh=new THREE.Mesh(geos[p.which as number], new THREE.MeshStandardMaterial({color:0xffb454,metalness:0.4,roughness:0.3,flatShading:true}));
    c.scene.add(mesh); last=sig;
    c.renderer.render(c.scene,c.camera);
  },
} satisfies Formula;
