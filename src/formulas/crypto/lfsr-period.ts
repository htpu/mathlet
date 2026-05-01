import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'lfsr-period',title:'LFSR 输出位流',domain:'crypto',level:3,tex:'b_t=\\bigoplus_{i\\in T} b_{t-i}',blurb:'线性反馈移位寄存器输出位流，反馈抽头由 taps 控制。'},
  params:[i('taps','taps mask (low bits)',13,1,255),i('init','init',1,1,255)],
  fn:p=>t=>{let st=p.init as number;const taps=p.taps as number;let bit=0;for(let i=0;i<Math.floor(t)+1;i++){bit=st&1;let nb=0;let m=taps,s=st;while(m){if(m&1) nb^=(s&1);m>>=1;s>>=1;}st=(st>>1)|(nb<<7);}return bit;},
  view:{cx:64,cy:0.5,scale:5},
});
