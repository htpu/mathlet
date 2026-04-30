import { i } from '../types';
import * as THREE from 'three';
import type { Formula } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
const f:Formula = {
  meta:{slug:'schwarzschild-funnel',title:'Schwarzschild 漏斗',domain:'gr',level:4,tex:'z(r)=2\\sqrt{r_s(r-r_s)}',blurb:'弯曲时空的 Flamm 嵌入。',surface:'three'},
  params:[i('seg','径向段',32,8,80)],
  render(s,p){
    if(s.kind!=='three') return; const c=getThree(s);
    clearScene(c.scene); addLights(c.scene);
    const N=p.seg as number, M=64;
    const geo=new THREE.BufferGeometry();
    const verts:number[]=[]; const idx:number[]=[];
    for(let i=0;i<=N;i++){const r=1+i*4/N; const z=-2*Math.sqrt(r-1);
      for(let j=0;j<=M;j++){const a=2*Math.PI*j/M; verts.push(r*Math.cos(a), z, r*Math.sin(a));}}
    for(let i=0;i<N;i++) for(let j=0;j<M;j++){const a=i*(M+1)+j, b=a+1, c=a+(M+1), d=c+1; idx.push(a,b,d, a,d,c);}
    geo.setAttribute('position', new THREE.Float32BufferAttribute(verts,3));
    geo.setIndex(idx); geo.computeVertexNormals();
    c.scene.add(new THREE.Mesh(geo, new THREE.MeshStandardMaterial({color:0xffb454, side:THREE.DoubleSide, wireframe:false, metalness:0.4, roughness:0.5})));
    c.camera.position.set(5,3,5); c.camera.lookAt(0,-1,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
