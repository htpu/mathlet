import type { Formula } from '../types';
import { n } from '../types';
import { clear, text } from '../../render/canvas2d';
export default {
  meta:{slug:'bayes',title:'贝叶斯定理（医检）',domain:'probability',level:2,tex:'P(D|+)=\\frac{P(+|D)P(D)}{P(+)}',blurb:'灵敏度/特异度/患病率 → 阳性预测值。',surface:'canvas2d'},
  params:[n('prior','患病率',0.01,0.001,0.5,0.001),n('sens','灵敏度',0.95,0.5,1,0.005),n('spec','特异度',0.95,0.5,1,0.005)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const D=p.prior as number, sens=p.sens as number, spec=p.spec as number;
    const TP=D*sens, FN=D*(1-sens), FP=(1-D)*(1-spec), TN=(1-D)*spec;
    const ppv=TP/(TP+FP), npv=TN/(TN+FN);
    const w=width-80;
    const draw=(label:string, lo:number, hi:number, y:number, color:string)=>{
      ctx.fillStyle=color; ctx.fillRect(40+lo*w, y, (hi-lo)*w, 30);
      ctx.fillStyle='#cbccc6'; ctx.font='12px ui-monospace,monospace'; ctx.textAlign='left'; ctx.textBaseline='middle';
      ctx.fillText(label, 40, y-12);
    };
    draw(`病人 (${(D*100).toFixed(2)}%)`, 0, D, 50, 'rgba(240,113,120,0.7)');
    draw(`阳性中 真阳性=${(TP*100).toFixed(2)}% 假阳性=${(FP*100).toFixed(2)}%`, 0, TP+FP, 110, 'rgba(57,186,230,0.7)');
    text(s, 40, 170, `P(病|阳) = ${(ppv*100).toFixed(2)}%`, '#ffb454', 16);
    text(s, 40, 200, `P(无病|阴) = ${(npv*100).toFixed(2)}%`, '#c2d94c', 14);
  },
} satisfies Formula;
