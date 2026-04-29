import * as THREE from 'three';
import type { Formula } from '../types';
import { n } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let setup=false; let arc:THREE.Line;
export default {
  meta:{slug:'geodesic-sphere',title:'球面测地线（大圆）',domain:'vectorfield',level:4,tex:'\\text{great circle}',blurb:'两点间最短路径 = 大圆弧。',surface:'three'},
  params:[n('lat1','点1 纬',0.3,-1.5,1.5,0.01),n('lon1','点1 经',-1,-3,3,0.01),n('lat2','点2 纬',-0.4,-1.5,1.5,0.01),n('lon2','点2 经',1.5,-3,3,0.01)],
  render(s,p){
    if(s.kind!=='three') return;
    const c=getThree(s);
    if(!setup){clearScene(c.scene); addLights(c.scene); c.scene.add(new THREE.AxesHelper(1.5));
      const sphere=new THREE.Mesh(new THREE.SphereGeometry(1,48,32), new THREE.MeshStandardMaterial({color:0x222a36,wireframe:true}));
      c.scene.add(sphere);
      arc=new THREE.Line(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({color:0xffb454,linewidth:3}));
      c.scene.add(arc); setup=true;
    }
    const sph=(la:number,lo:number)=>new THREE.Vector3(Math.cos(la)*Math.cos(lo), Math.sin(la), Math.cos(la)*Math.sin(lo));
    const a=sph(p.lat1 as number, p.lon1 as number);
    const b=sph(p.lat2 as number, p.lon2 as number);
    const pts:THREE.Vector3[]=[];
    for(let i=0;i<=64;i++){const t=i/64; const v=new THREE.Vector3().copy(a).lerp(b,t).normalize().multiplyScalar(1.005); pts.push(v);}
    arc.geometry.setFromPoints(pts);
    c.renderer.render(c.scene,c.camera);
  },
} satisfies Formula;
