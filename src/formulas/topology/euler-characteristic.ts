import type { Formula } from '../types';
import { i } from '../types';
import { clear, text } from '../../render/canvas2d';
export default {
  meta:{slug:'euler-characteristic',title:'Euler 数 V−E+F',domain:'topology',level:3,tex:'\\chi=V-E+F',blurb:'凸多面体 χ=2，环面 χ=0，亏格 g 曲面 χ=2−2g。',surface:'canvas2d'},
  params:[i('which','类型',0,0,4)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const cases=[
      {name:'四面体 Tetra', V:4, E:6, F:4},
      {name:'立方体 Cube', V:8, E:12, F:6},
      {name:'八面体 Octa', V:6, E:12, F:8},
      {name:'十二面体 Dodeca', V:20, E:30, F:12},
      {name:'二十面体 Icosa', V:12, E:30, F:20},
    ];
    const c=cases[p.which as number];
    text(s,40,60,c.name,'#ffb454',24);
    text(s,40,110,`V=${c.V}, E=${c.E}, F=${c.F}`,'#39bae6',18);
    text(s,40,150,`χ = V−E+F = ${c.V-c.E+c.F}`,'#c2d94c',22);
  },
} satisfies Formula;
