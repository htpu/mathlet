import { n } from '../types';
import { rwalk } from '../../templates/rwalk';
export default rwalk({
  meta:{slug:'levy-flight',title:'Lévy 飞行',domain:'fractal',level:4,tex:'P(L)\\propto L^{-\\alpha}',blurb:'步长服从幂律 → 长跳跃 + 簇集。'},
  params:[n('alpha','α',1.5,0.5,3,0.01),n('walks','轨迹',3,1,10,1)],
  step:(p,prev,r)=>{const a=p.alpha as number; const u=r(); const L=Math.pow(u,-1/a); const ang=r()*Math.PI*2;
    return [prev[0]+L*Math.cos(ang), prev[1]+L*Math.sin(ang)];},
  view:{cx:0,cy:0,scale:1},
  count:3, steps:1000,
});
