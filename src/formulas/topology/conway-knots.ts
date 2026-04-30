import * as THREE from 'three';
import type { Formula } from '../types';
import { i, n } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let mesh:THREE.Mesh|null=null;
export default {
  meta:{slug:'conway-knots',title:'扭结家族（torus knots）',domain:'topology',level:4,tex:'(p,q)\\text{-torus knot}',blurb:'p, q 互素 → 不同纽结类型。',surface:'three'},
  params:[i('p','p',2,1,7),i('q','q',5,1,11),n('R','R',1.2,0.5,2,0.01)],
  render(s,pa){
    if(s.kind!=='three') return;
    const c=getThree(s);
    const sig=`${pa.p}|${pa.q}|${pa.R}`;
    if(last===sig&&mesh){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene); c.scene.add(new THREE.AxesHelper(2));
    const pp=pa.p as number, qq=pa.q as number, R=pa.R as number;
    const path=new THREE.Curve<THREE.Vector3>();
    path.getPoint=(t:number, target=new THREE.Vector3())=>{const u=t*Math.PI*2; const r=R*(2+Math.cos(qq*u/Math.max(1,pp))); return target.set(r*Math.cos(pp*u/Math.max(1,pp)), Math.sin(qq*u/Math.max(1,pp))*R, r*Math.sin(pp*u/Math.max(1,pp))*0.5);};
    const tube=new THREE.TubeGeometry(path, 250, 0.15, 12, true);
    mesh=new THREE.Mesh(tube, new THREE.MeshStandardMaterial({color:0xc2d94c,metalness:0.4,roughness:0.3}));
    c.scene.add(mesh); last=sig;
    c.renderer.render(c.scene,c.camera);
  },
} satisfies Formula;
