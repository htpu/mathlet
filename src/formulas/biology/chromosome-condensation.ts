import { n } from '../types';
import * as THREE from 'three';
import type { Formula } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let g:THREE.Group|null=null;
const f:Formula = {
  meta:{slug:'chromosome-condensation',title:'染色体凝集进度',domain:'biology',level:3,tex:'\\text{interphase} \\to \\text{metaphase}',blurb:'松散染色质 → 凝集染色体。t=0..1。',surface:'three'},
  params:[n('t','凝集 t',0.5,0,1,0.01)],
  render(s,p){
    if(s.kind!=='three') return; const c=getThree(s);
    const sig=String(p.t); if(sig===last && g){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene);
    g=new THREE.Group();
    const t=p.t as number;
    const N=80, R=1.5*(1-t)+0.3*t, len=3*(1-t)+1.0*t, thick=0.05+t*0.18;
    const path=new THREE.Curve<THREE.Vector3>();
    path.getPoint=(s,target=new THREE.Vector3())=>{const u=s*Math.PI*2*4*(1-t)+s*Math.PI*2*t; const z=(s-0.5)*len; return target.set(R*Math.cos(u), z, R*Math.sin(u));};
    g.add(new THREE.Mesh(new THREE.TubeGeometry(path,N*2,thick,8,false), new THREE.MeshStandardMaterial({color:0xff6b35,metalness:0.4,roughness:0.4})));
    c.scene.add(g); last=sig;
    c.camera.position.set(3,2.5,3.5); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
