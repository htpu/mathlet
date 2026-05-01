import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'critical-band-bark',title:'Bark 临界带尺度',domain:'music',level:3,tex:'\\text{Bark}=13\\arctan(0.00076 f)+3.5\\arctan\\left(\\frac{f}{7500}\\right)^2',blurb:'人耳临界带的对数频率压缩。横轴 f (Hz)。'},
  params:[],
  fn:_=>f=>f<=0?NaN:13*Math.atan(0.00076*f)+3.5*Math.pow(Math.atan(f/7500),2),
  view:{cx:8000,cy:12,scale:0.04},
});
