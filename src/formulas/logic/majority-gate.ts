import { n } from '../types';
import { fn1d } from '../../templates/fn1d';

export default fn1d({
  meta: {
    slug: 'majority-gate',
    title: '多数门可靠性',
    domain: 'logic',
    level: 3,
    tex: 'R(p)=\\sum_{k=\\lceil n/2\\rceil}^{n}\\binom{n}{k}p^k(1-p)^{n-k}',
    blurb: '每路位独立正确概率 p，n 路投票门正确率；n 越大 sigmoid 越陡。',
  },
  params: [n('n', '路数 n（奇）', 7, 1, 21, 2)],
  fn: p => x => {
    if (x < 0 || x > 1) return NaN;
    const n = Math.round(p.n as number);
    const half = Math.floor(n / 2) + 1;
    let r = 0;
    let logC = 0;
    for (let k = 0; k <= n; k++) {
      if (k > 0) logC += Math.log((n - k + 1) / k);
      if (k >= half) {
        r += Math.exp(logC + k * Math.log(Math.max(x, 1e-12)) + (n - k) * Math.log(Math.max(1 - x, 1e-12)));
      }
    }
    return r;
  },
  view: { cx: 0.5, cy: 0.5, scale: 280 },
});
