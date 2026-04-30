import * as THREE from 'three';
import type { Formula } from '../types';
import { i } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let g:THREE.Group|null=null;
const f:Formula = {
  meta:{slug:'alpha-helix',title:'蛋白 α 螺旋',domain:'biology',level:3,tex:'\\text{3.6 residues/turn, 1.5 Å rise}',blurb:'氢键 i→i+4，右手 α 螺旋。',surface:'three'},
  params:[i('res','残基数',24,5,60)],
  render(s,p){
    if(s.kind!=='three') return; const c=getThree(s);
    const sig=`${p.res}`; if(sig===last && g){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene);
    g=new THREE.Group();
    const N=p.res as number, dt=2*Math.PI/3.6, dz=0.15, R=0.5;
    const path=new THREE.Curve<THREE.Vector3>();
    path.getPoint=(t:number,target=new THREE.Vector3())=>{const u=t*N; const z=u*dz-N*dz/2; return target.set(R*Math.cos(u*dt), R*Math.sin(u*dt), z);};
    const tube=new THREE.TubeGeometry(path,300,0.18,12,false);
    const tubeMesh=new THREE.Mesh(tube,new THREE.MeshStandardMaterial({color:0xff6b35,metalness:0.5,roughness:0.4}));
    g.add(tubeMesh);
    for(let i=0;i<N;i++){const a=i*dt, z=i*dz-N*dz/2;
      const sp=new THREE.Mesh(new THREE.SphereGeometry(0.1,8,8), new THREE.MeshStandardMaterial({color:0xffd166}));
      sp.position.set(R*Math.cos(a),R*Math.sin(a),z); g.add(sp);
    }
    c.scene.add(g); last=sig;
    c.camera.position.set(2,2,5); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
