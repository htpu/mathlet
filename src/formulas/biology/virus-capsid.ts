import * as THREE from 'three';
import type { Formula } from '../types';
import { i } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let g:THREE.Group|null=null;
const f:Formula = {
  meta:{slug:'virus-capsid',title:'病毒衣壳 (二十面体)',domain:'biology',level:3,tex:'\\text{T=}n\\text{ icosahedral capsid}',blurb:'蛋白亚基对称排布，T 数控复杂度。',surface:'three'},
  params:[i('detail','细分',1,0,3)],
  render(s,p){
    if(s.kind!=='three') return; const c=getThree(s);
    const sig=`${p.detail}`; if(sig===last && g){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene);
    g=new THREE.Group();
    const geo=new THREE.IcosahedronGeometry(1.2, p.detail as number);
    const wire=new THREE.LineSegments(new THREE.WireframeGeometry(geo), new THREE.LineBasicMaterial({color:0x39bae6,opacity:0.4,transparent:true}));
    g.add(wire);
    const pos=geo.attributes.position;
    const seen=new Set<string>();
    for(let i=0;i<pos.count;i++){
      const v=new THREE.Vector3().fromBufferAttribute(pos,i);
      const k=`${v.x.toFixed(2)}|${v.y.toFixed(2)}|${v.z.toFixed(2)}`;
      if(seen.has(k)) continue; seen.add(k);
      const sub=new THREE.Mesh(new THREE.SphereGeometry(0.15,12,12), new THREE.MeshStandardMaterial({color:0xff6b35, metalness:0.5, roughness:0.4}));
      sub.position.copy(v); g.add(sub);
    }
    c.scene.add(g); last=sig;
    c.camera.position.set(3,3,3); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
