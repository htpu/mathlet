import { n } from '../types';
import { rwalk } from '../../templates/rwalk';
import { gaussian } from '../../render/numerics';
export default rwalk({
  meta:{slug:'brownian-2d',title:'2D 布朗运动',domain:'probability',level:3,tex:'dX=\\sigma dW',blurb:'独立高斯增量的二维布朗运动。'},
  params:[n('walks','轨迹数',6,1,15,1),n('sigma','σ',1,0.1,3,0.05)],
  step:(p,prev,r)=>[prev[0]+(p.sigma as number)*gaussian(r), prev[1]+(p.sigma as number)*gaussian(r)],
  view:{cx:0,cy:0,scale:8},
  count:6, steps:1500,
});
