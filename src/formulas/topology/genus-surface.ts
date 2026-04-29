import * as THREE from 'three';
import type { Formula } from '../types';
import { i } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let group:THREE.Group|null=null;
export default {
  meta:{slug:'genus-surface',title:'亏格曲面 (g-torus)',domain:'topology',level:4,tex:'\\chi=2-2g',blurb:'g 个洞拼接 = 亏格 g 曲面。'},
  params:[i('g','亏格',2,1,5)],
  render(s,p){
    if(s.kind!=='three') return;
    const c=getThree(s);
    const sig=`${p.g}`;
    if(last===sig&&group){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene); c.scene.add(new THREE.AxesHelper(2));
    group=new THREE.Group();
    const g=p.g as number;
    for(let i=0;i<g;i++){const t=new THREE.Mesh(new THREE.TorusGeometry(0.5,0.2,12,24), new THREE.MeshStandardMaterial({color:0x39bae6,metalness:0.4,roughness:0.3}));
      t.position.set(i*0.9-g*0.45+0.45, 0, 0); group.add(t);}
    c.scene.add(group); last=sig;
    c.renderer.render(c.scene,c.camera);
  },
} satisfies Formula;
