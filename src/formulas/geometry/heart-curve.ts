import { n } from '../types';
import { param2d } from '../../templates/param2d';
export default param2d({
  meta:{slug:'heart-curve',title:'心形参数曲线',domain:'geometry',level:2,tex:'(16\\sin^3 t,\\,13\\cos t-5\\cos 2t-2\\cos 3t-\\cos 4t)',blurb:'经典心形闭曲线。'},
  params:[n('s','缩放',1,0.3,2,0.01)],
  fn:p=>{const s=p.s as number; return t=>[16*Math.sin(t)**3*s, (13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))*s];},
  tRange:()=>[0, Math.PI*2],
  view:{cx:0,cy:5,scale:8},
  color:'#f07178',
});
