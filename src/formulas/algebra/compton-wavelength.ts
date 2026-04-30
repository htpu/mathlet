import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'compton-wavelength',title:'康普顿散射波长偏移',domain:'algebra',level:3,tex:'\\Delta\\lambda=\\lambda_c(1-\\cos\\theta)',blurb:'光子被电子散射后波长变化。横轴 θ (rad)，纵轴 Δλ/λc。'},
  params:[],
  fn:()=>x=>1-Math.cos(x),
  view:{cx:Math.PI,cy:1,scale:80},
});
