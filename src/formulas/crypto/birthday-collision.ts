import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'birthday-collision',title:'生日攻击概率',domain:'crypto',level:3,tex:'P\\approx 1-e^{-n^2/(2N)}',blurb:'n 个哈希值碰撞概率。横轴 n / √N。'},
  params:[],
  fn:()=>x=>1-Math.exp(-x*x/2),
  view:{cx:2,cy:0.5,scale:80},
});
