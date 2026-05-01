import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'perceived-loudness',title:'Stevens 响度律',domain:'music',level:3,tex:'L\\propto I^{0.3}',blurb:'感知响度按声强 0.3 次幂。横轴 log10 I。'},
  params:[],
  fn:_=>x=>x*0.3,
  view:{cx:0,cy:0,scale:80},
});
