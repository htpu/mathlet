import * as THREE from 'three';
import type { Formula } from '../types';
import { i } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let g:THREE.Group|null=null;
const f:Formula = {
  meta:{slug:'rna-hairpin',title:'RNA 茎-环结构',domain:'biology',level:3,tex:'\\text{stem helix + loop}',blurb:'RNA 二级结构：双链茎 + 单链环。'},
  params:[i('stem','茎长',8,3,15),i('loop','环长',6,3,12)],
  render(s,p){
    if(s.kind!=='three') return; const c=getThree(s);
    const sig=`${p.stem}|${p.loop}`; if(sig===last && g){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene);
    g=new THREE.Group();
    const stem=p.stem as number, loop=p.loop as number;
    const m=new THREE.MeshStandardMaterial({color:0xc2d94c,metalness:0.4,roughness:0.4});
    const mp=new THREE.MeshStandardMaterial({color:0xff6b35,metalness:0.4,roughness:0.4});
    const R=0.4, dz=0.25;
    for(let i=0;i<stem;i++){const z=i*dz; const a=i*0.6;
      const s1=new THREE.Mesh(new THREE.SphereGeometry(0.13,10,10),m); s1.position.set(R*Math.cos(a),R*Math.sin(a),z); g.add(s1);
      const s2=new THREE.Mesh(new THREE.SphereGeometry(0.13,10,10),m); s2.position.set(R*Math.cos(a+Math.PI),R*Math.sin(a+Math.PI),z); g.add(s2);
    }
    const baseZ=stem*dz;
    for(let i=0;i<loop;i++){const ang=Math.PI*(i+0.5)/loop; const lr=0.6;
      const x=lr*Math.cos(ang)*0.7, y=lr*Math.sin(ang), z=baseZ+0.3+lr*Math.sin(ang)*0.3;
      const sp=new THREE.Mesh(new THREE.SphereGeometry(0.13,10,10),mp); sp.position.set(x,y,z); g.add(sp);
    }
    c.scene.add(g); last=sig;
    c.camera.position.set(2,2,5); c.camera.lookAt(0,0,baseZ/2);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
