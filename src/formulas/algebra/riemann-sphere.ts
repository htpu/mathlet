import * as THREE from 'three';
import type { Formula } from '../types';
import { n } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
export default {
  meta: { slug:'riemann-sphere', title:'Riemann 球面', domain:'algebra', level:4, tex:'(X,Y,Z)=\\frac{(2x,2y,x^2+y^2-1)}{x^2+y^2+1}', blurb:'复平面 → 球面的立体投影。', surface:'three' },
  params: [n('grid','网格密度',8,2,20,1)],
  render(s,p){
    if(s.kind!=='three') return;
    const c=getThree(s);
    clearScene(c.scene); addLights(c.scene);
    const sphere=new THREE.Mesh(new THREE.SphereGeometry(1,48,32), new THREE.MeshStandardMaterial({color:0x222a36,wireframe:false,transparent:true,opacity:0.5}));
    c.scene.add(sphere);
    c.scene.add(new THREE.AxesHelper(2));
    const project=(x:number,y:number)=>{
      const d=x*x+y*y+1;
      return new THREE.Vector3(2*x/d, (x*x+y*y-1)/d, 2*y/d);
    };
    const g=p.grid as number;
    for(let k=-g;k<=g;k++){
      const pts:THREE.Vector3[]=[];
      for(let t=-g;t<=g;t+=0.1) pts.push(project(k/2,t/2));
      c.scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({color:0x39bae6})));
      const pts2:THREE.Vector3[]=[];
      for(let t=-g;t<=g;t+=0.1) pts2.push(project(t/2,k/2));
      c.scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts2), new THREE.LineBasicMaterial({color:0xffb454})));
    }
    c.renderer.render(c.scene,c.camera);
  },
} satisfies Formula;
