import type { Formula } from '../types';
import { n, i } from '../types';
import { clear, drawAxes, setupView, fillCircle, text } from '../../render/canvas2d';
export default {
  meta:{slug:'continued-fractions',title:'连分数收敛子',domain:'numbertheory',level:3,tex:'x=a_0+\\cfrac{1}{a_1+\\cfrac{1}{a_2+\\dots}}',blurb:'展示 √2/π/φ 的部分商序列与有理逼近。'},
  params:[i('which','数','golden' as any,0,2),i('depth','深度',12,1,40)],
  render(s,pa){
    if(s.kind!=='canvas2d') return;
    const targets=[Math.SQRT2, Math.PI, (1+Math.sqrt(5))/2];
    const labels=['√2','π','φ'];
    const x=targets[pa.which as number];
    let r=x; const a:number[]=[];
    for(let i=0;i<(pa.depth as number);i++){const ai=Math.floor(r); a.push(ai); r=1/(r-ai); if(!isFinite(r)) break;}
    const conv:[number,number][]=[];
    let h0=1,h1=a[0],k0=0,k1=1;
    conv.push([h1,k1]);
    for(let i=1;i<a.length;i++){const h=a[i]*h1+h0, k=a[i]*k1+k0; conv.push([h,k]); h0=h1; h1=h; k0=k1; k1=k;}
    const v={cx:x,cy:0,scale:Math.min(s.width,s.height)*30};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(x,-1); s.ctx.lineTo(x,1); s.ctx.stroke();
    for(let i=0;i<conv.length;i++){
      const val=conv[i][0]/conv[i][1];
      fillCircle(s,v,val,(i-conv.length/2)*0.001, 4, '#ffb454');
    }
    text(s, 12, 12, `target: ${labels[pa.which as number]} = ${x.toFixed(8)}`, '#ffb454', 13);
    text(s, 12, 28, `[${a.slice(0,15).join(', ')}${a.length>15?'...':''}]`, '#cbccc6', 11);
    if(conv.length){const c=conv[conv.length-1]; text(s,12,46,`${c[0]}/${c[1]} ≈ ${(c[0]/c[1]).toFixed(8)}`,'#c2d94c',11);}
  },
} satisfies Formula;
