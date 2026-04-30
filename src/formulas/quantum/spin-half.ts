import { n as nn } from '../types';
import * as THREE from 'three';
import type { Formula } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
const f:Formula = {
  meta:{slug:'spin-half',title:'Bloch 球 (spin-1/2)',domain:'quantum',level:4,tex:'|\\psi\\rangle=\\cos(\\theta/2)|0\\rangle+e^{i\\phi}\\sin(\\theta/2)|1\\rangle',blurb:'量子态在 Bloch 球面上的几何。',surface:'three'},
  params:[nn('theta','θ',Math.PI/3,0,Math.PI,0.01),nn('phi','φ',Math.PI/4,0,Math.PI*2,0.01)],
  render(s,p){
    if(s.kind!=='three') return; const c=getThree(s);
    clearScene(c.scene); addLights(c.scene);
    const sph=new THREE.Mesh(new THREE.SphereGeometry(1,32,32), new THREE.MeshStandardMaterial({color:0x39bae6, transparent:true, opacity:0.2, wireframe:true}));
    c.scene.add(sph);
    const ax=new THREE.AxesHelper(1.4); c.scene.add(ax);
    const th=p.theta as number, ph=p.phi as number;
    const v=new THREE.Vector3(Math.sin(th)*Math.cos(ph), Math.cos(th), Math.sin(th)*Math.sin(ph));
    const arrow=new THREE.ArrowHelper(v, new THREE.Vector3(0,0,0), 1, 0xffb454, 0.15, 0.08);
    c.scene.add(arrow);
    c.camera.position.set(2.5,2,2.5); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
