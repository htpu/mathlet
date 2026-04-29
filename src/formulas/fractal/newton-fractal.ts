import { i, n, s as sel } from '../types';
import { escapeTime } from '../../templates/escape';
export default escapeTime({
  meta:{slug:'newton-fractal',title:'Newton 分形（z³−1）',domain:'fractal',level:4,tex:'z\\to z-\\frac{p(z)}{p\'(z)}',blurb:'按收敛到的根上色。'},
  params:[i('iter','迭代',60,5,200),n('cx','中心 x',0,-2,2,0.01),n('cy','中心 y',0,-2,2,0.01),n('zoom','缩放',0.7,0.1,1e3,0.1,true),sel('palette','调色板','rainbow',[{value:'rainbow',label:'Rainbow'},{value:'fire',label:'Fire'},{value:'electric',label:'Electric'}])],
  iterate:p=>(zx0,zy0)=>{let x=zx0,y=zy0; const max=p.iter as number;
    for(let n=0;n<max;n++){
      // p(z)=z^3-1, p'(z)=3z^2
      const zr2=x*x-y*y, zi2=2*x*y;
      const z3r=zr2*x-zi2*y - 1, z3i=zr2*y+zi2*x;
      const dr=3*zr2, di=3*zi2;
      const den=dr*dr+di*di+1e-12;
      x=x-(z3r*dr+z3i*di)/den;
      y=y-(z3i*dr-z3r*di)/den;
      // check convergence to roots e^{2πik/3}
      for(let k=0;k<3;k++){const rx=Math.cos(2*Math.PI*k/3), ry=Math.sin(2*Math.PI*k/3);
        if((x-rx)**2+(y-ry)**2<1e-4) return n+k*max/3;}
    }
    return max;
  },
});
