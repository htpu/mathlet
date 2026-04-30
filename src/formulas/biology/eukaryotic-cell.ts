import * as THREE from 'three';
import type { Formula } from '../types';
import { b } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let g:THREE.Group|null=null;
const f:Formula = {
  meta:{slug:'eukaryotic-cell',title:'真核细胞剖面',domain:'biology',level:3,tex:'\\text{nucleus + mito + ER + golgi}',blurb:'胞膜内含细胞核与多种细胞器。'},
  params:[b('cut','剖面',true)],
  render(s,p){
    if(s.kind!=='three') return; const c=getThree(s);
    const sig=`${p.cut}`; if(sig===last && g){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene);
    g=new THREE.Group();
    const cut=p.cut as boolean;
    const cell=new THREE.Mesh(new THREE.SphereGeometry(2, 32, 32, 0, cut?Math.PI:Math.PI*2), new THREE.MeshStandardMaterial({color:0x39bae6, transparent:true, opacity:0.18, side:THREE.DoubleSide}));
    g.add(cell);
    const nucleus=new THREE.Mesh(new THREE.SphereGeometry(0.6, 24, 24), new THREE.MeshStandardMaterial({color:0xd2a6ff, metalness:0.3, roughness:0.5}));
    nucleus.position.set(0.3, 0.2, 0); g.add(nucleus);
    const mitoMat=new THREE.MeshStandardMaterial({color:0xff6b35, metalness:0.4, roughness:0.4});
    for(const pos of [[-0.8,-0.6,0.4],[0.7,-0.7,-0.5],[-0.4,0.9,-0.3]]){
      const m=new THREE.Mesh(new THREE.CapsuleGeometry(0.15,0.4,6,12), mitoMat);
      m.position.set(pos[0],pos[1],pos[2]); m.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0); g.add(m);
    }
    const erMat=new THREE.MeshStandardMaterial({color:0xc2d94c, metalness:0.3, roughness:0.5, side:THREE.DoubleSide});
    for(let i=0;i<6;i++){const t=new THREE.Mesh(new THREE.TorusGeometry(0.5+i*0.05,0.06,6,32, Math.PI), erMat);
      t.position.set(-0.6,0.3,0); t.rotation.y=i*0.5; g.add(t);
    }
    const gMat=new THREE.MeshStandardMaterial({color:0xffd166});
    for(let i=0;i<5;i++){const r=0.35-i*0.04; const tt=new THREE.Mesh(new THREE.TorusGeometry(r,0.04,6,24), gMat);
      tt.position.set(1,-0.2,0.5); tt.rotation.x=Math.PI/2; tt.position.z=0.5+i*0.1; g.add(tt);
    }
    c.scene.add(g); last=sig;
    c.camera.position.set(4,3,4); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
