import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, plotFn } from '../../render/canvas2d';
export default {
  meta:{slug:'stress-strain',title:'弹塑性应力-应变',domain:'pde',level:3,tex:'\\sigma=E\\epsilon \\text{ then yield}',blurb:'弹性段 + 塑性平台 + 硬化段。',surface:'canvas2d'},
  params:[n('E','杨氏模量 E',2,0.5,5,0.01),n('sy','屈服 σy',1,0.1,3,0.01),n('h','硬化 h',0.3,0,1,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:1,cy:1,scale:Math.min(s.width,s.height)/4};
    clear(s); setupView(s,v); drawAxes(s,v);
    const E=p.E as number, sy=p.sy as number, h=p.h as number;
    const ey=sy/E;
    plotFn(s,v,e=>e<ey?E*e:sy+h*(e-ey),'#ffb454');
  },
} satisfies Formula;
