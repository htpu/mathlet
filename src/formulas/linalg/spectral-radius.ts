import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, fillCircle, strokeCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'spectral-radius',title:'谱半径与稳定性',domain:'linalg',level:3,tex:'\\rho(A)=\\max|\\lambda_i|',blurb:'特征值在单位圆内 → 迭代收敛。',surface:'canvas2d'},
  params:[n('a','a',0.6,-1.5,1.5,0.01),n('b','b',0.3,-1.5,1.5,0.01),n('c','c',-0.2,-1.5,1.5,0.01),n('d','d',0.5,-1.5,1.5,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/3};
    clear(s); setupView(s,v); drawAxes(s,v);
    strokeCircle(s,v,0,0,1,'#39bae6');
    const a=p.a as number, b=p.b as number, c=p.c as number, d=p.d as number;
    const tr=a+d, det=a*d-b*c;
    const disc=tr*tr-4*det;
    if(disc>=0){const l1=(tr+Math.sqrt(disc))/2, l2=(tr-Math.sqrt(disc))/2;
      fillCircle(s,v,l1,0,5,Math.abs(l1)<1?'#c2d94c':'#f07178');
      fillCircle(s,v,l2,0,5,Math.abs(l2)<1?'#c2d94c':'#f07178');}
    else {const re=tr/2, im=Math.sqrt(-disc)/2;
      const m=Math.hypot(re,im);
      fillCircle(s,v,re,im,5,m<1?'#c2d94c':'#f07178');
      fillCircle(s,v,re,-im,5,m<1?'#c2d94c':'#f07178');}
  },
} satisfies Formula;
