import * as THREE from 'three';
import type { Formula } from '../types';
import { n } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let group:THREE.Group|null=null;
export default {
  meta:{slug:'curl-3d',title:'3D 旋度场',domain:'vectorfield',level:5,tex:'\\nabla\\times F',blurb:'F=(0, x, 0) 的旋度可视化。',surface:'three'},
  params:[n('density','密度',5,3,10,1)],
  render(s,p){
    if(s.kind!=='three') return;
    const c=getThree(s);
    const sig=`${p.density}`;
    if(last===sig&&group){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene); c.scene.add(new THREE.AxesHelper(2));
    group=new THREE.Group();
    const D=p.density as number;
    for(let i=0;i<D;i++) for(let j=0;j<D;j++) for(let k=0;k<D;k++){
      const x=-1.5+i*3/(D-1), y=-1.5+j*3/(D-1), z=-1.5+k*3/(D-1);
      // F = (0, x, 0), curl F = (0, 0, 1)
      const dir=new THREE.Vector3(0,0,1);
      group.add(new THREE.ArrowHelper(dir, new THREE.Vector3(x,y,z), 0.3, 0xffb454, 0.1, 0.06));
    }
    c.scene.add(group); last=sig;
    c.renderer.render(c.scene,c.camera);
  },
} satisfies Formula;
