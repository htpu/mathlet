import { surface3d } from '../../templates/surface3d';
import { n } from '../types';
export default surface3d({
  meta:{slug:'sphere-volume',title:'球冠体积',domain:'geometry',level:2,tex:'V=\\frac{1}{3}\\pi h^2(3r-h)',blurb:'高度 h 的球冠（截球面渲染）。'},
  params:[n('r','r',1,0.3,2,0.01),n('h','h',0.5,0.05,2,0.01)],
  parametric:p=>{const r=p.r as number, h=p.h as number;
    return (u,v,t)=>{const phi=v*Math.PI*h/(2*r);
      t.set(r*Math.sin(phi)*Math.cos(u), r*Math.cos(phi)-r+h, r*Math.sin(phi)*Math.sin(u));};},
  uRange:[0,Math.PI*2], vRange:[0,1], segments:[60,40], color:0xffb454,
});
