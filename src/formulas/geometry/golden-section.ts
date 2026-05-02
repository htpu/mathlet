import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'golden-section',title:'黄金分割比 φ',domain:'geometry',level:2,tex:'\\varphi=\\frac{1+\\sqrt{5}}{2},\\quad x\\to\\frac{x}{\\varphi}',blurb:'反复用 1/φ 切分生成几何级数 1, 0.618, 0.382, ...'},
  params:[],
  fn:_=>n=>n<0?NaN:Math.pow(1/((1+Math.sqrt(5))/2),n),
  view:{cx:8,cy:0.5,scale:25},
});
