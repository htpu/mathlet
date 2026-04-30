import * as THREE from 'three';
import type { Formula } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
const f:Formula = {
  meta:{slug:'synapse-3d',title:'化学突触',domain:'biology',level:3,tex:'\\text{vesicles release neurotransmitter into cleft}',blurb:'突触前、间隙、突触后膜与递质囊泡。',surface:'three'},
  params:[],
  render(s){
    if(s.kind!=='three') return; const c=getThree(s);
    clearScene(c.scene); addLights(c.scene);
    // pre-synaptic terminal
    const pre=new THREE.Mesh(new THREE.SphereGeometry(1,24,24), new THREE.MeshStandardMaterial({color:0xff6b35,transparent:true,opacity:0.4,side:THREE.DoubleSide}));
    pre.position.y=1.2; c.scene.add(pre);
    // vesicles
    for(let i=0;i<8;i++){const v=new THREE.Mesh(new THREE.SphereGeometry(0.13,10,10), new THREE.MeshStandardMaterial({color:0xffd166}));
      const a=Math.random()*Math.PI*2, r=Math.random()*0.5;
      v.position.set(r*Math.cos(a),1.2+r*Math.sin(a)*0.5,r*Math.sin(a)); c.scene.add(v);}
    // cleft (transmitters)
    for(let i=0;i<10;i++){const t=new THREE.Mesh(new THREE.SphereGeometry(0.06,8,8), new THREE.MeshStandardMaterial({color:0xc2d94c}));
      t.position.set((Math.random()-0.5)*1.4,0.1+Math.random()*0.2,(Math.random()-0.5)*0.8); c.scene.add(t);}
    // post-synaptic
    const post=new THREE.Mesh(new THREE.BoxGeometry(2.5,0.15,1.5), new THREE.MeshStandardMaterial({color:0x39bae6}));
    post.position.y=-0.4; c.scene.add(post);
    // receptors (small bumps)
    for(let i=-1;i<=1;i++) for(let j=-1;j<=1;j++){const r=new THREE.Mesh(new THREE.SphereGeometry(0.12,10,10), new THREE.MeshStandardMaterial({color:0xd2a6ff}));
      r.position.set(i*0.6,-0.3,j*0.4); c.scene.add(r);}
    c.camera.position.set(3,1.5,3.5); c.camera.lookAt(0,0.4,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
