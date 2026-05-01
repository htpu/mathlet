import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'hubble-law',title:'Hubble 定律',domain:'gr',level:2,tex:'v=H_0\\,d',blurb:'宇宙膨胀：星系退行速度与距离成正比。横轴 d (Mpc)。'},
  params:[n('H0','H₀(km/s/Mpc)',70,50,100,0.1)],
  fn:p=>d=>(p.H0 as number)*d,
  view:{cx:0,cy:0,scale:0.5},
});
