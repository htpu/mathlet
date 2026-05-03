import type { Formula } from '../types';
import { i, s as sel } from '../types';

const OPS: Record<string, (a: number, b: number, c: number) => number> = {
  and: (a, b, c) => a & b & c,
  or:  (a, b, c) => a | b | c,
  xor: (a, b, c) => a ^ b ^ c,
  maj: (a, b, c) => (a + b + c) >= 2 ? 1 : 0,
  imp: (a, b, c) => ((!a || b) ? 1 : 0) & (b | c ? 1 : 1),
  ite: (a, b, c) => a ? b : c,
};

export default {
  meta: {
    slug: 'truth-table-3var',
    title: '三变量真值表',
    domain: 'logic',
    level: 1,
    tex: 'f:\\{0,1\\}^3\\to\\{0,1\\}',
    blurb: '8 行真值表；选择布尔函数（与/或/异或/多数/蕴含/条件）。',
    surface: 'canvas2d',
    animated: false,
  },
  params: [
    sel('op', '函数', 'maj', [
      { value: 'and', label: 'AND' },
      { value: 'or', label: 'OR' },
      { value: 'xor', label: 'XOR' },
      { value: 'maj', label: 'MAJ' },
      { value: 'imp', label: 'IMP' },
      { value: 'ite', label: 'ITE' },
    ]),
    i('hi', '高亮行', 0, 0, 7),
  ],
  render(s, p) {
    if (s.kind !== 'canvas2d') return;
    const ctx = s.ctx;
    ctx.save();
    ctx.fillStyle = '#0d0f12';
    ctx.fillRect(0, 0, s.width, s.height);
    const op = OPS[p.op as string] ?? OPS.maj;
    const cols = ['a', 'b', 'c', 'f'];
    const colW = s.width / cols.length;
    const rowH = s.height / 9;
    ctx.font = `${rowH * 0.5}px ui-monospace, monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#888';
    for (let i = 0; i < cols.length; i++) {
      ctx.fillText(cols[i], colW * (i + 0.5), rowH * 0.5);
    }
    for (let r = 0; r < 8; r++) {
      const a = (r >> 2) & 1, b = (r >> 1) & 1, c = r & 1;
      const f = op(a, b, c) & 1;
      const yy = rowH * (r + 1.5);
      if (r === (p.hi as number)) {
        ctx.fillStyle = 'rgba(255,180,84,0.18)';
        ctx.fillRect(0, yy - rowH * 0.5, s.width, rowH);
      }
      const vals = [a, b, c, f];
      for (let i = 0; i < 4; i++) {
        ctx.fillStyle = i === 3 ? (vals[i] ? '#ffb454' : '#5b6470') : (vals[i] ? '#39bae6' : '#5b6470');
        ctx.fillText(String(vals[i]), colW * (i + 0.5), yy);
      }
    }
    ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.beginPath();
    ctx.moveTo(0, rowH);
    ctx.lineTo(s.width, rowH);
    ctx.moveTo(colW * 3, 0);
    ctx.lineTo(colW * 3, s.height);
    ctx.stroke();
    ctx.restore();
  },
} satisfies Formula;
