import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'midi-frequency',title:'MIDI 音高 → 频率',domain:'music',level:1,tex:'f(n)=440\\cdot 2^{(n-69)/12}',blurb:'MIDI 音符号 0..127 对应频率（A4=69→440Hz）。'},
  params:[i('span','axis',128,40,128)],
  fn:_=>n=>440*Math.pow(2,(n-69)/12),
  view:{cx:64,cy:200,scale:5},
});
