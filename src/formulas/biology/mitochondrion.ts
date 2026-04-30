import * as THREE from 'three';
import type { Formula } from '../types';
import { i } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let g:THREE.Group|null=null;
const f:Formula = {
  meta:{slug:'mitochondrion',title:'线粒体 (Mitochondrion)',domain:'biology',level:3,tex:'\\text{outer + inner cristae membrane}',blurb:'外膜光滑，内膜折叠成嵴产生 ATP。'},
  params:[i('cristae','嵴数',8,3,16)],
  render(s,p){
    if(s.kind!=='three') return; const c=getThree(s);
    const sig=`${p.cristae}`; if(sig===last && g){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene);
    g=new THREE.Group();
    const outer=new THREE.Mesh(new THREE.CapsuleGeometry(0.7,1.6,8,16), new THREE.MeshStandardMaterial({color:0xff6b35, transparent:true, opacity:0.25, side:THREE.DoubleSide}));
    g.add(outer);
    const inner=new THREE.Mesh(new THREE.CapsuleGeometry(0.55,1.4,8,16), new THREE.MeshStandardMaterial({color:0xffb454, transparent:true, opacity:0.4, side:THREE.DoubleSide}));
    g.add(inner);
    const N=p.cristae as number;
    for(let i=0;i<N;i++){const z=(i-(N-1)/2)*0.28;
      const cr=new THREE.Mesh(new THREE.TorusGeometry(0.45,0.05,6,32), new THREE.MeshStandardMaterial({color:0xff6b35}));
      cr.rotation.x=Math.PI/2; cr.position.set(0,0,z); g.add(cr);
    }
    c.scene.add(g); last=sig;
    c.camera.position.set(3,2,3); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
