import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'bsgs-cost',title:'Baby-step Giant-step 复杂度',domain:'crypto',level:3,tex:'O(\\sqrt{n})',blurb:'离散对数 BSGS 时间/空间复杂度（log10）。横轴 log10 n。'},
  params:[],
  fn:_=>x=>x/2,
  view:{cx:8,cy:4,scale:30},
});
