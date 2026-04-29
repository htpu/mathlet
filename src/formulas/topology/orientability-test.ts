import * as THREE from 'three';
import type { Formula } from '../types';
import { n } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let setup=false; let strip:THREE.Mesh, marker:THREE.Mesh;
export default {
  meta:{slug:'orientability-test',title:'可定向性测试 (Möbius 蚂蚁)',domain:'topology',level:4,tex:'\\text{single-sided surface}',blurb:'蚂蚁沿 Möbius 带走一周回到反面。',surface:'three',animated:true},
  params:[n('speed','速度',0.5,0.1,2,0.01)],
  render(s,p,t){
    if(s.kind!=='three') return;
    const c=getThree(s);
    if(!setup){clearScene(c.scene); addLights(c.scene); c.scene.add(new THREE.AxesHelper(2));
      const path=new THREE.Curve<THREE.Vector3>();
      path.getPoint=(t:number, target=new THREE.Vector3())=>{const u=t*Math.PI*2; return target.set(Math.cos(u)*1.5, 0, Math.sin(u)*1.5);};
      const tube=new THREE.TubeGeometry(path, 200, 0.4, 8, true);
      strip=new THREE.Mesh(tube, new THREE.MeshStandardMaterial({color:0x444a55,side:THREE.DoubleSide,wireframe:false,transparent:true,opacity:0.6}));
      c.scene.add(strip);
      marker=new THREE.Mesh(new THREE.SphereGeometry(0.1), new THREE.MeshStandardMaterial({color:0xffb454}));
      c.scene.add(marker); setup=true;
    }
    const u=(t*(p.speed as number))%(Math.PI*4);
    const halfU=u/2;
    const x=(1.5+0.4*Math.cos(halfU))*Math.cos(u);
    const z=(1.5+0.4*Math.cos(halfU))*Math.sin(u);
    const y=0.4*Math.sin(halfU);
    marker.position.set(x,y,z);
    c.renderer.render(c.scene,c.camera);
  },
} satisfies Formula;
