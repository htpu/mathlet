import * as THREE from 'three';
import type { Formula } from '../types';
import { i } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let g:THREE.Group|null=null;
const f:Formula = {
  meta:{slug:'bacteriophage',title:'噬菌体 (Bacteriophage)',domain:'biology',level:3,tex:'\\text{icosahedral head + tail + fibers}',blurb:'T4 噬菌体经典形态：头-颈-尾-纤维。',surface:'three'},
  params:[i('fibers','尾纤维',6,3,8)],
  render(s,p){
    if(s.kind!=='three') return; const c=getThree(s);
    const sig=`${p.fibers}`; if(sig===last && g){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene);
    g=new THREE.Group();
    const head=new THREE.Mesh(new THREE.IcosahedronGeometry(0.7,0), new THREE.MeshStandardMaterial({color:0x39bae6, flatShading:true, metalness:0.4, roughness:0.4}));
    head.position.set(0,1.2,0); g.add(head);
    const collar=new THREE.Mesh(new THREE.CylinderGeometry(0.15,0.15,0.1,12), new THREE.MeshStandardMaterial({color:0xff6b35}));
    collar.position.set(0,0.55,0); g.add(collar);
    const tail=new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,0.9,12), new THREE.MeshStandardMaterial({color:0xc2d94c, metalness:0.4, roughness:0.4}));
    tail.position.set(0,0,0); g.add(tail);
    const baseplate=new THREE.Mesh(new THREE.CylinderGeometry(0.25,0.25,0.06,12), new THREE.MeshStandardMaterial({color:0xff6b35}));
    baseplate.position.set(0,-0.5,0); g.add(baseplate);
    const N=p.fibers as number;
    for(let i=0;i<N;i++){const a=2*Math.PI*i/N;
      const fpts=[new THREE.Vector3(0,-0.5,0), new THREE.Vector3(0.4*Math.cos(a),-0.7,0.4*Math.sin(a)), new THREE.Vector3(0.6*Math.cos(a),-1.1,0.6*Math.sin(a))];
      const path=new THREE.CatmullRomCurve3(fpts);
      const tube=new THREE.TubeGeometry(path,16,0.025,6,false);
      g.add(new THREE.Mesh(tube, new THREE.MeshStandardMaterial({color:0xffd166})));
    }
    c.scene.add(g); last=sig;
    c.camera.position.set(3,1,3); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
