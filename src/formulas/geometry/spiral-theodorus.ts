import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'spiral-theodorus',title:'Theodorus 螺旋半径 √n',domain:'geometry',level:2,tex:'r_n=\\sqrt{n}',blurb:'依次拼接直角三角形得到 √n 螺旋半径。'},
  params:[],
  fn:_=>n=>n<0?NaN:Math.sqrt(n),
  view:{cx:50,cy:5,scale:6},
});
