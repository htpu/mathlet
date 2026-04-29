import * as THREE from 'three';
import type { Formula } from '../types';
import { n } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let group:THREE.Group|null=null;
export default {
  meta:{slug:'torus-vector-field',title:'环面切向量场',domain:'vectorfield',level:5,tex:'v=\\partial_u+a\\partial_v',blurb:'环面 (R,r) 上线性向量场（不可绳化）。',surface:'three'},
  params:[n('a','纵向系数',0.3,0,2,0.01),n('R','R',1.5,0.5,2.5,0.01),n('r','r',0.4,0.1,1,0.01)],
  render(s,p){
    if(s.kind!=='three') return;
    const c=getThree(s);
    const sig=`${p.a}|${p.R}|${p.r}`;
    if(last===sig&&group){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene); c.scene.add(new THREE.AxesHelper(2));
    const R=p.R as number, r=p.r as number, a=p.a as number;
    const torus=new THREE.Mesh(new THREE.TorusGeometry(R,r,16,40), new THREE.MeshStandardMaterial({color:0x222a36,wireframe:true}));
    c.scene.add(torus);
    group=new THREE.Group();
    for(let u=0;u<Math.PI*2;u+=Math.PI/8) for(let v=0;v<Math.PI*2;v+=Math.PI/8){
      const px=(R+r*Math.cos(v))*Math.cos(u);
      const py=r*Math.sin(v);
      const pz=(R+r*Math.cos(v))*Math.sin(u);
      const Tu=new THREE.Vector3(-(R+r*Math.cos(v))*Math.sin(u), 0, (R+r*Math.cos(v))*Math.cos(u));
      const Tv=new THREE.Vector3(-r*Math.sin(v)*Math.cos(u), r*Math.cos(v), -r*Math.sin(v)*Math.sin(u));
      const dir=new THREE.Vector3().addScaledVector(Tu, 1).addScaledVector(Tv, a).normalize().multiplyScalar(0.2);
      const arr=new THREE.ArrowHelper(dir.clone().normalize(), new THREE.Vector3(px,py,pz), 0.2, 0xffb454, 0.07, 0.05);
      group.add(arr);
    }
    c.scene.add(group);
    last=sig;
    c.renderer.render(c.scene,c.camera);
  },
} satisfies Formula;
