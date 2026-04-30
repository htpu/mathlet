import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'debye-heat-capacity',title:'德拜热容',domain:'algebra',level:4,tex:'C_V=9NkT^3/\\Theta_D^3\\int_0^{x_D}\\frac{x^4 e^x}{(e^x-1)^2}dx',blurb:'低温 ∝T³，高温饱和到 3Nk。横轴 T/Θ_D。'},
  params:[],
  fn:()=>x=>{if(x<=0) return 0; const xD=1/x; const N=80,h=xD/N; let s=0; for(let i=1;i<N;i++){const u=i*h; const ex=Math.exp(u); s+=u**4*ex/(ex-1)**2;} const I=s*h; return 9*x*x*x*I;},
  view:{cx:1.2,cy:1.5,scale:120},
});
