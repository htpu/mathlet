import * as THREE from 'three';
import type { Formula } from '../types';
import { n } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let setup=false, donut:THREE.Mesh, cup:THREE.Mesh;
export default {
  meta:{slug:'bottle-coffee',title:'甜甜圈 ↔ 咖啡杯',domain:'topology',level:4,tex:'\\text{genus 1 同胚}',blurb:'拓扑同胚：同 genus 物体。',surface:'three',animated:true},
  params:[n('t','形变 t',0.5,0,1,0.005)],
  render(s,p,time){
    if(s.kind!=='three') return;
    const c=getThree(s);
    if(!setup){clearScene(c.scene); addLights(c.scene); c.scene.add(new THREE.AxesHelper(1.5));
      donut=new THREE.Mesh(new THREE.TorusGeometry(1,0.4,16,40), new THREE.MeshStandardMaterial({color:0xffb454,metalness:0.3,roughness:0.4}));
      cup=new THREE.Mesh(new THREE.CylinderGeometry(0.7,0.6,1.2,24,1,true), new THREE.MeshStandardMaterial({color:0xd2a6ff,metalness:0.3,roughness:0.4,side:THREE.DoubleSide}));
      c.scene.add(donut); c.scene.add(cup); setup=true;
    }
    const t=p.t as number;
    donut.position.set(-1.5+t*1.5, 0, 0);
    donut.scale.setScalar(1-t);
    cup.position.set(1.5-t*1.5, 0, 0);
    cup.scale.setScalar(t);
    donut.rotation.y=time*0.3; cup.rotation.y=time*0.3;
    c.renderer.render(c.scene,c.camera);
  },
} satisfies Formula;
