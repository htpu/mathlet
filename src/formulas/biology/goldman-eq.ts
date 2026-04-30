import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'goldman-eq',title:'Goldman-Hodgkin-Katz',domain:'biology',level:4,tex:'V_m=\\frac{RT}{F}\\ln\\frac{P_K[K]_o+P_{Na}[Na]_o+P_{Cl}[Cl]_i}{P_K[K]_i+P_{Na}[Na]_i+P_{Cl}[Cl]_o}',blurb:'静息膜电位（K/Na/Cl 加权）。横轴 PNa/PK。'},
  params:[n('Ko','[K]o',5,1,20,0.1),n('Ki','[K]i',140,80,200,0.1),n('Nao','[Na]o',145,100,200,0.1),n('Nai','[Na]i',12,5,30,0.1)],
  fn:p=>x=>{const R=8.314, F=96485, T=310; const num=(p.Ko as number)+x*(p.Nao as number); const den=(p.Ki as number)+x*(p.Nai as number); if(num<=0||den<=0) return NaN; return (R*T/F)*Math.log(num/den)*1000;},
  view:{cx:0.5,cy:-50,scale:200},
});
