import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta: { slug: 'clausius-clapeyron', title: 'Clausius–Clapeyron', domain: 'chemistry', level: 3, tex: '\\ln\\frac{P}{P_1}=-\\frac{\\Delta H_{vap}}{R}\\left(\\frac{1}{T}-\\frac{1}{T_1}\\right)', blurb: '蒸气压随温度。横轴 T(K)。' },
  params: [n('Hvap','ΔHvap(kJ/mol)',40.7,5,100,0.1), n('P1','P1(kPa)',101.3,1,200,0.1), n('T1','T1(K)',373,200,500,0.1)],
  fn: p => T => { if(T<=0) return NaN; const R=8.314e-3; return (p.P1 as number)*Math.exp(-(p.Hvap as number)/R*(1/T-1/(p.T1 as number))); },
  view: { cx: 350, cy: 50, scale: 0.5 },
});
