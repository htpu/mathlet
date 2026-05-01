import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'mel-scale',title:'Mel 听觉刻度',domain:'music',level:2,tex:'m=2595\\log_{10}\\left(1+\\frac{f}{700}\\right)',blurb:'人耳频率感知的对数尺度。横轴 f (Hz)。'},
  params:[],
  fn:_=>f=>f<=0?NaN:2595*Math.log10(1+f/700),
  view:{cx:5000,cy:1500,scale:0.07},
});
