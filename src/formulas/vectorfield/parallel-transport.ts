import * as THREE from 'three';
import type { Formula } from '../types';
import { n } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let arrows:THREE.Group|null=null;
export default {
  meta:{slug:'parallel-transport',title:'球面上平行移动',domain:'vectorfield',level:5,tex:'\\nabla_X Y=0',blurb:'沿大圆移动向量保持平行 → Holonomy。',surface:'three'},
  params:[n('phi','起始纬',0.5,-1.4,1.4,0.01),n('range','弧长',2,0.5,4,0.01)],
  render(s,p){
    if(s.kind!=='three') return;
    const c=getThree(s);
    const sig=`${p.phi}|${p.range}`;
    if(last===sig&&arrows){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene); c.scene.add(new THREE.AxesHelper(2));
    const sphere=new THREE.Mesh(new THREE.SphereGeometry(1,32,24), new THREE.MeshStandardMaterial({color:0x222a36,wireframe:true}));
    c.scene.add(sphere);
    arrows=new THREE.Group();
    const N=12;
    const phi0=p.phi as number;
    for(let i=0;i<N;i++){const t=i/(N-1)*(p.range as number);
      const x=Math.cos(phi0)*Math.cos(t), y=Math.sin(phi0), z=Math.cos(phi0)*Math.sin(t);
      const dir=new THREE.Vector3(-Math.sin(t), 0, Math.cos(t));
      arrows.add(new THREE.ArrowHelper(dir, new THREE.Vector3(x,y,z), 0.3, 0xffb454, 0.1, 0.06));
    }
    c.scene.add(arrows); last=sig;
    c.renderer.render(c.scene,c.camera);
  },
} satisfies Formula;
