import * as THREE from 'three';
import type { Formula } from '../types';
import { i } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let g:THREE.Group|null=null;
const f:Formula = {
  meta:{slug:'beta-barrel',title:'β 桶状结构',domain:'biology',level:4,tex:'\\text{closed parallel β-sheet}',blurb:'GFP / 膜孔蛋白的桶形结构。',surface:'three'},
  params:[i('strands','链数',8,4,20),i('len','链长',16,8,40)],
  render(s,p){
    if(s.kind!=='three') return; const c=getThree(s);
    const sig=`${p.strands}|${p.len}`; if(sig===last && g){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene);
    g=new THREE.Group();
    const ns=p.strands as number, nl=p.len as number;
    const R=ns*0.18, dz=0.18;
    for(let s=0;s<ns;s++){const a=2*Math.PI*s/ns;
      const pts:THREE.Vector3[]=[];
      for(let i=0;i<nl;i++){const z=i*dz-(nl-1)*dz/2; const r=R+((i%2===0)?0.05:-0.05); pts.push(new THREE.Vector3(r*Math.cos(a+i*0.05), r*Math.sin(a+i*0.05), z));}
      const path=new THREE.CatmullRomCurve3(pts);
      const tube=new THREE.TubeGeometry(path,100,0.12,8,false);
      g.add(new THREE.Mesh(tube, new THREE.MeshStandardMaterial({color:0xffb454, metalness:0.4, roughness:0.4})));
    }
    c.scene.add(g); last=sig;
    c.camera.position.set(3,3,4); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
