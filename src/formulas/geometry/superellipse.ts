import { n } from '../types';
import { param2d } from '../../templates/param2d';
export default param2d({
  meta:{slug:'superellipse',title:'超椭圆（Lamé 曲线）',domain:'geometry',level:2,tex:'\\left|\\frac{x}{a}\\right|^n+\\left|\\frac{y}{b}\\right|^n=1',blurb:'n=2 椭圆，n→∞ 矩形，n=2/3 星形线。'},
  params:[n('a','半轴 a',2,0.5,3,0.01), n('b','半轴 b',1.3,0.5,3,0.01), n('n','幂次 n',4,0.3,8,0.01)],
  fn:p=>{const a=p.a as number, b=p.b as number, nn=p.n as number;
    return t=>[a*Math.sign(Math.cos(t))*Math.pow(Math.abs(Math.cos(t)),2/nn), b*Math.sign(Math.sin(t))*Math.pow(Math.abs(Math.sin(t)),2/nn)];},
  tRange:()=>[0, Math.PI*2],
});
