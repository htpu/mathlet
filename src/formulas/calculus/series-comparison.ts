import type { Formula } from '../types';
import { i, s as sel } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
export default {
  meta:{slug:'series-comparison',title:'数项级数收敛比较',domain:'calculus',level:3,tex:'\\sum a_n',blurb:'调和/p-级数/几何 部分和增长对比。',surface:'canvas2d'},
  params:[i('N','项数',200,10,5000), sel('series','级数','harmonic',[{value:'harmonic',label:'1/n'},{value:'p2',label:'1/n²'},{value:'p_half',label:'1/√n'},{value:'geo_half',label:'(1/2)ⁿ'}])],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const series:Record<string,(n:number)=>number>={
      harmonic:n=>1/n, p2:n=>1/(n*n), p_half:n=>1/Math.sqrt(n), geo_half:n=>Math.pow(0.5,n),
    };
    const f=series[p.series as string];
    const N=p.N as number;
    let S=0; const sums:number[]=[];
    for(let i=1;i<=N;i++){S+=f(i); sums.push(S);}
    const max=sums[N-1], min=0;
    const v={cx:N/2, cy:max/2, scale:Math.min(s.width/(N*1.05), s.height/(max*1.1))};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath();
    for(let i=0;i<N;i++){if(i===0) s.ctx.moveTo(i+1, sums[i]); else s.ctx.lineTo(i+1, sums[i]);}
    s.ctx.stroke();
  },
} satisfies Formula;
