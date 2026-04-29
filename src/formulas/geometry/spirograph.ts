import { n } from '../types';
import { param2d } from '../../templates/param2d';
export default param2d({
  meta:{slug:'spirograph',title:'万花尺（Hypotrochoid）',domain:'geometry',level:2,tex:'(R-r)\\cos t + d\\cos\\frac{R-r}{r}t',blurb:'大圆 R 内滚小圆 r，固定点画轨迹。'},
  params:[n('R','大圆 R',5,1,8,0.05), n('r','小圆 r',3,0.5,7,0.05), n('d','偏移 d',5,0.1,8,0.05)],
  fn:p=>{const R=p.R as number, r=p.r as number, d=p.d as number;
    return t=>[(R-r)*Math.cos(t)+d*Math.cos((R-r)/r*t), (R-r)*Math.sin(t)-d*Math.sin((R-r)/r*t)];},
  tRange:()=>[0, Math.PI*40],
  samples:8000, view:{cx:0,cy:0,scale:25},
});
