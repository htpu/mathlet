import * as THREE from 'three';
import type { Formula } from '../types';
import { n, i } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let mesh:THREE.Mesh|null=null;
export default {
  meta:{slug:'trefoil-knot',title:'三叶结',domain:'topology',level:3,tex:'(\\sin t+2\\sin 2t,\\cos t-2\\cos 2t,-\\sin 3t)',blurb:'最简单的非平凡纽结。',surface:'three'},
  params:[i('p','p',2,1,5),i('q','q',3,1,5),n('R','半径',1,0.3,2,0.01)],
  render(s,pa){
    if(s.kind!=='three') return;
    const c=getThree(s);
    const sig=`${pa.p}|${pa.q}|${pa.R}`;
    if(last===sig&&mesh){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene); c.scene.add(new THREE.AxesHelper(2));
    const pp=pa.p as number, qq=pa.q as number, R=pa.R as number;
    const path=new THREE.Curve<THREE.Vector3>();
    path.getPoint=(t:number, target=new THREE.Vector3())=>{const a=t*Math.PI*2; const r=R*(2+Math.cos(qq*a)); return target.set(r*Math.cos(pp*a), r*Math.sin(pp*a), -R*Math.sin(qq*a));};
    const geo=new THREE.TubeGeometry(path, 200, R*0.15, 12, true);
    const mat=new THREE.MeshStandardMaterial({color:0xffb454,metalness:0.4,roughness:0.3});
    mesh=new THREE.Mesh(geo,mat); c.scene.add(mesh); last=sig;
    c.renderer.render(c.scene,c.camera);
  },
} satisfies Formula;
