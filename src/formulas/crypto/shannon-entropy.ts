import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'shannon-entropy',title:'二元熵',domain:'crypto',level:2,tex:'H(p)=-p\\log_2 p-(1-p)\\log_2(1-p)',blurb:'p=0.5 时熵最大。'},
  params:[],
  fn:()=>p=>{if(p<=0||p>=1) return 0; return -p*Math.log2(p)-(1-p)*Math.log2(1-p);},
  view:{cx:0.5,cy:0.5,scale:300},
});
