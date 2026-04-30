import { i } from '../types';
import * as THREE from 'three';
import type { Formula } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let g:THREE.Group|null=null;
const f:Formula = {
  meta:{slug:'mrna-codon',title:'mRNA codons',domain:'biology',level:2,tex:'\\text{3 nucleotides per codon}',blurb:'mRNA 三联体编码。',surface:'three'},
  params:[i('codons','codon 数',8,3,20)],
  render(s,p){
    if(s.kind!=='three') return; const c=getThree(s);
    const sig=String(p.codons); if(sig===last && g){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene);
    g=new THREE.Group();
    const N=p.codons as number; const dx=0.4;
    const cols=[0xff6b35,0x39bae6,0xc2d94c,0xd2a6ff];
    for(let i=0;i<N*3;i++){const x=(i-(N*3)/2)*dx; const codonIdx=Math.floor(i/3);
      const sp=new THREE.Mesh(new THREE.SphereGeometry(0.16,12,12), new THREE.MeshStandardMaterial({color:cols[codonIdx%4],metalness:0.4,roughness:0.4}));
      sp.position.set(x,0,0); g.add(sp);
      if(i<N*3-1){const cyl=new THREE.Mesh(new THREE.CylinderGeometry(0.04,0.04,dx,6), new THREE.MeshStandardMaterial({color:0x707a8c}));
        cyl.position.set(x+dx/2,0,0); cyl.rotation.z=Math.PI/2; g.add(cyl);}
    }
    c.scene.add(g); last=sig;
    c.camera.position.set(0,1.5,4); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
