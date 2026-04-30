import * as THREE from 'three';
import type { Formula } from '../types';
import { i } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let g:THREE.Group|null=null;
const f:Formula = {
  meta:{slug:'neuron-3d',title:'神经元 (示意)',domain:'biology',level:3,tex:'\\text{soma + dendrites + axon + terminals}',blurb:'胞体、树突、轴突、突触末梢。',surface:'three'},
  params:[i('dendrites','树突数',8,3,20)],
  render(s,p){
    if(s.kind!=='three') return; const c=getThree(s);
    const sig=String(p.dendrites); if(sig===last && g){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene);
    g=new THREE.Group();
    // soma
    const soma=new THREE.Mesh(new THREE.SphereGeometry(0.6,24,24), new THREE.MeshStandardMaterial({color:0xff6b35,metalness:0.3,roughness:0.5}));
    g.add(soma);
    // dendrites
    const N=p.dendrites as number;
    for(let i=0;i<N;i++){const phi=Math.acos(1-2*(i+0.5)/N), th=Math.PI*(1+Math.sqrt(5))*i;
      const dir=new THREE.Vector3(Math.sin(phi)*Math.cos(th), Math.sin(phi)*Math.sin(th), Math.cos(phi));
      const len=0.8+Math.random()*0.4;
      const path=new THREE.Curve<THREE.Vector3>();
      path.getPoint=(t,target=new THREE.Vector3())=>{const r=0.6+t*len; return target.set(dir.x*r+Math.sin(t*5)*0.05, dir.y*r, dir.z*r);};
      const tube=new THREE.TubeGeometry(path,30,0.05,6,false);
      g.add(new THREE.Mesh(tube, new THREE.MeshStandardMaterial({color:0xffb454})));}
    // axon (long)
    const apath=new THREE.Curve<THREE.Vector3>();
    apath.getPoint=(t,target=new THREE.Vector3())=>{return target.set(0.6+t*3, -0.05+Math.sin(t*3)*0.1, 0);};
    g.add(new THREE.Mesh(new THREE.TubeGeometry(apath,40,0.07,8,false), new THREE.MeshStandardMaterial({color:0x39bae6})));
    // terminal bouquets
    for(let i=0;i<5;i++){const a=2*Math.PI*i/5;
      const t=new THREE.Mesh(new THREE.SphereGeometry(0.1,10,10), new THREE.MeshStandardMaterial({color:0xc2d94c}));
      t.position.set(3.7,0.25*Math.cos(a),0.25*Math.sin(a)); g.add(t);
      const ax=new THREE.Mesh(new THREE.CylinderGeometry(0.03,0.03,0.4,6), new THREE.MeshStandardMaterial({color:0x39bae6}));
      ax.position.set(3.5,0.13*Math.cos(a),0.13*Math.sin(a)); ax.lookAt(3.7,0.25*Math.cos(a),0.25*Math.sin(a)); ax.rotation.x+=Math.PI/2; g.add(ax);}
    c.scene.add(g); last=sig;
    c.camera.position.set(2.5,2,3.5); c.camera.lookAt(1.5,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
