import { n } from '../types';
import { rwalk } from '../../templates/rwalk';
export default rwalk({
  meta:{slug:'random-walk-1d',title:'1D 随机游走',domain:'probability',level:2,tex:'X_{n+1}=X_n+\\xi_n',blurb:'多条独立随机游走轨迹，t 是步数（横轴）。'},
  params:[n('walks','轨迹数',8,1,30,1)],
  step:(p,prev,r)=>[prev[0]+1, prev[1]+(r()<0.5?-1:1)],
  view:{cx:300,cy:0,scale:0.8},
  count:8, steps:600,
});
