import * as THREE from 'three';
import type { Formula } from '../types';
import { n } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
import { rk4 } from '../../render/numerics';
let last=''; let line:THREE.Line|null=null; let positions:Float32Array|null=null; let count=0; let state:number[]=[];
export default {
  meta:{slug:'abc-flow',title:'ABC (Arnold-Beltrami-Childress) 3D 流',domain:'vectorfield',level:5,tex:'\\dot x=A\\sin z+C\\cos y',blurb:'3D 不可压无黏混沌流。',surface:'three',animated:true},
  params:[n('A','A',1,0.1,2,0.01),n('B','B',0.7,0.1,2,0.01),n('C','C',0.5,0.1,2,0.01)],
  render(s,p,t){
    if(s.kind!=='three') return;
    const c=getThree(s);
    const sig=`${p.A}|${p.B}|${p.C}`;
    if(sig!==last||!line){clearScene(c.scene); addLights(c.scene); c.scene.add(new THREE.AxesHelper(2));
      const max=8000;
      positions=new Float32Array(max*3);
      const geo=new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geo.setDrawRange(0, 0);
      line=new THREE.Line(geo, new THREE.LineBasicMaterial({color:0xffb454}));
      c.scene.add(line);
      state=[1,0,0]; count=0; last=sig;
    }
    const A=p.A as number, B=p.B as number, C=p.C as number;
    const f=(_:number,y:number[])=>[A*Math.sin(y[2])+C*Math.cos(y[1]), B*Math.sin(y[0])+A*Math.cos(y[2]), C*Math.sin(y[1])+B*Math.cos(y[0])];
    const max=8000;
    for(let k=0;k<5;k++){state=rk4(f,0,state,0.05);
      if(count<max){positions![count*3]=state[0]*0.4; positions![count*3+1]=state[1]*0.4; positions![count*3+2]=state[2]*0.4; count++;}
      else {positions!.copyWithin(0,3); positions![(max-1)*3]=state[0]*0.4; positions![(max-1)*3+1]=state[1]*0.4; positions![(max-1)*3+2]=state[2]*0.4;}
    }
    const geo=line!.geometry as THREE.BufferGeometry;
    geo.attributes.position.needsUpdate=true; geo.setDrawRange(0,count); geo.computeBoundingSphere();
    c.renderer.render(c.scene,c.camera);
  },
} satisfies Formula;
