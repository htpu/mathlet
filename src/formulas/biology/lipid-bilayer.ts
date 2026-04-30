import * as THREE from 'three';
import type { Formula } from '../types';
import { i } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let g:THREE.Group|null=null;
const f:Formula = {
  meta:{slug:'lipid-bilayer',title:'磷脂双层',domain:'biology',level:3,tex:'\\text{two leaflets, hydrophobic core}',blurb:'磷脂头朝外，疏水尾对齐。',surface:'three'},
  params:[i('n','分子数 (每层边)',8,3,20)],
  render(s,p){
    if(s.kind!=='three') return; const c=getThree(s);
    const sig=`${p.n}`; if(sig===last && g){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene);
    g=new THREE.Group();
    const N=p.n as number, sp=0.35;
    const head=new THREE.MeshStandardMaterial({color:0xff6b35, metalness:0.3, roughness:0.4});
    const tail=new THREE.MeshStandardMaterial({color:0xffd166, roughness:0.6});
    for(let leaf=0;leaf<2;leaf++){const sign=leaf?-1:1;
      for(let x=0;x<N;x++) for(let y=0;y<N;y++){
        const px=(x-N/2)*sp, py=(y-N/2)*sp;
        const h=new THREE.Mesh(new THREE.SphereGeometry(0.14,10,10), head); h.position.set(px,py,sign*0.7); g.add(h);
        const t=new THREE.Mesh(new THREE.CylinderGeometry(0.04,0.04,0.6,6), tail);
        t.rotation.x=Math.PI/2; t.position.set(px,py,sign*0.35); g.add(t);
      }
    }
    c.scene.add(g); last=sig;
    c.camera.position.set(0,4,4); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
