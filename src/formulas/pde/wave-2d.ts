import * as THREE from 'three';
import type { Formula } from '../types';
import { n } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
const N=64;
let u:Float32Array, up:Float32Array, un:Float32Array;
let mesh:THREE.Mesh|null=null; let geo:THREE.PlaneGeometry|null=null;
export default {
  meta:{slug:'wave-2d',title:'2D 波动方程',domain:'pde',level:4,tex:'u_{tt}=c^2(u_{xx}+u_{yy})',blurb:'方形膜上的水波传播。',surface:'three',animated:true},
  params:[n('c','c',0.5,0.1,1,0.01),n('amp','振幅',0.4,0.05,1,0.01)],
  render(s,p){
    if(s.kind!=='three') return;
    const ctx=getThree(s);
    if(!mesh){clearScene(ctx.scene); addLights(ctx.scene); ctx.scene.add(new THREE.AxesHelper(1.5));
      geo=new THREE.PlaneGeometry(2,2,N-1,N-1);
      const mat=new THREE.MeshStandardMaterial({color:0xffb454,wireframe:false,metalness:0.4,roughness:0.3,side:THREE.DoubleSide,flatShading:true});
      mesh=new THREE.Mesh(geo,mat); mesh.rotation.x=-Math.PI/2; ctx.scene.add(mesh);
      u=new Float32Array(N*N); up=new Float32Array(N*N); un=new Float32Array(N*N);
      const cx=N/2, cy=N/2;
      for(let i=0;i<N;i++) for(let j=0;j<N;j++){const dx=i-cx, dy=j-cy; const r2=(dx*dx+dy*dy)/(N*N); u[i*N+j]=Math.exp(-r2*40); up[i*N+j]=u[i*N+j];}
    }
    const c=p.c as number; const r2=c*c*0.25;
    for(let k=0;k<3;k++){
      for(let i=1;i<N-1;i++) for(let j=1;j<N-1;j++){const idx=i*N+j; un[idx]=2*u[idx]-up[idx]+r2*(u[idx+1]+u[idx-1]+u[idx+N]+u[idx-N]-4*u[idx]);}
      const tmp=up; up=u; u=un; un=tmp;
    }
    const pos=geo!.attributes.position as THREE.BufferAttribute;
    const amp=p.amp as number;
    for(let i=0;i<N*N;i++) pos.setZ(i, u[i]*amp);
    pos.needsUpdate=true; geo!.computeVertexNormals();
    ctx.renderer.render(ctx.scene,ctx.camera);
  },
} satisfies Formula;
