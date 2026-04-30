import * as THREE from 'three';
import type { Formula } from '../types';
import { i, b } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let g:THREE.Group|null=null;
const f:Formula = {
  meta:{slug:'beta-sheet',title:'蛋白 β 折叠片',domain:'biology',level:3,tex:'\\text{parallel/antiparallel pleated sheet}',blurb:'链间氢键的 zig-zag 平面结构。'},
  params:[i('strands','链数',5,2,10),i('len','链长',12,5,30),b('anti','反平行',true)],
  render(s,p){
    if(s.kind!=='three') return; const c=getThree(s);
    const sig=`${p.strands}|${p.len}|${p.anti}`; if(sig===last && g){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene);
    g=new THREE.Group();
    const ns=p.strands as number, nl=p.len as number, anti=p.anti as boolean;
    const dx=0.3, dz=0.6;
    for(let s=0;s<ns;s++){const z=s*dz-(ns-1)*dz/2; const dir=(anti && s%2===1)?-1:1;
      const pts:THREE.Vector3[]=[];
      for(let i=0;i<nl;i++){const x=(i*dx-(nl-1)*dx/2)*dir; const y=((i%2===0)?0.1:-0.1); pts.push(new THREE.Vector3(x,y,z));}
      const path=new THREE.CatmullRomCurve3(pts);
      const tube=new THREE.TubeGeometry(path,80,0.13,8,false);
      g.add(new THREE.Mesh(tube, new THREE.MeshStandardMaterial({color:s%2?0xc2d94c:0x39bae6, metalness:0.4, roughness:0.4})));
    }
    c.scene.add(g); last=sig;
    c.camera.position.set(0,3,5); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
