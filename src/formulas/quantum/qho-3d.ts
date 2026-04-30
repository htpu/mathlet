import { i } from '../types';
import * as THREE from 'three';
import type { Formula } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last=''; let m:THREE.Mesh|null=null;
function H(n:number,x:number):number{if(n===0) return 1; if(n===1) return 2*x; return 2*x*H(n-1,x)-2*(n-1)*H(n-2,x);}
function fact(n:number):number{return n<=1?1:n*fact(n-1);}
const f:Formula = {
  meta:{slug:'qho-3d',title:'2D 谐振子 |ψ|²',domain:'quantum',level:4,tex:'\\psi_{n_x,n_y}(x,y)',blurb:'二维谐振子概率密度面。',surface:'three'},
  params:[i('nx','nx',2,0,5),i('ny','ny',1,0,5)],
  render(s,p){
    if(s.kind!=='three') return; const c=getThree(s);
    const sig=`${p.nx}|${p.ny}`; if(sig===last && m){c.renderer.render(c.scene,c.camera); return;}
    clearScene(c.scene); addLights(c.scene);
    const nx=p.nx as number, ny=p.ny as number, N=40, span=4;
    const cx=1/Math.sqrt(Math.pow(2,nx)*fact(nx)*Math.sqrt(Math.PI));
    const cy=1/Math.sqrt(Math.pow(2,ny)*fact(ny)*Math.sqrt(Math.PI));
    const geo=new THREE.PlaneGeometry(span,span,N,N);
    const pos=geo.attributes.position;
    for(let i=0;i<pos.count;i++){const x=pos.getX(i), y=pos.getY(i);
      const px=cx*H(nx,x)*Math.exp(-x*x/2);
      const py=cy*H(ny,y)*Math.exp(-y*y/2);
      pos.setZ(i,(px*py)*(px*py)*4);
    }
    geo.computeVertexNormals();
    m=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({color:0x39bae6,wireframe:false,side:THREE.DoubleSide,flatShading:false,metalness:0.3,roughness:0.5}));
    m.rotation.x=-Math.PI/2; c.scene.add(m); last=sig;
    c.camera.position.set(3,3,3); c.camera.lookAt(0,0,0);
    c.renderer.render(c.scene,c.camera);
  },
};
export default f;
