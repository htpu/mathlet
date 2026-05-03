import { n } from '../types';
import { fn1d } from '../../templates/fn1d';

export default fn1d({
  meta: {
    slug: 'prisoners-dilemma',
    title: '囚徒困境期望收益',
    domain: 'gametheory',
    level: 2,
    tex: 'E_C=Rc+S(1-c),\\ E_D=Tc+P(1-c)',
    blurb: '面对群体合作率 c 时合作 C 与背叛 D 的期望收益；T>R>P>S 永远 D 占优。',
  },
  params: [
    n('T', '诱惑 T', 5, 0, 10, 0.01),
    n('R', '奖励 R', 3, 0, 10, 0.01),
    n('P', '惩罚 P', 1, 0, 10, 0.01),
    n('S', '受骗 S', 0, 0, 10, 0.01),
  ],
  fns: [
    {
      color: '#39bae6',
      fn: p => c => (p.R as number) * c + (p.S as number) * (1 - c),
    },
    {
      color: '#f07178',
      fn: p => c => (p.T as number) * c + (p.P as number) * (1 - c),
    },
  ],
  view: { cx: 0.5, cy: 2.5, scale: 100 },
});
