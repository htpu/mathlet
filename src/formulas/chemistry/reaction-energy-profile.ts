import { n } from '../types';
import type { Formula } from '../types';
const f: Formula = {
  meta: { slug: 'reaction-energy-profile', title: '反应能垒图', domain: 'chemistry', level: 2, tex: 'E(\\xi)\\colon\\ \\text{reactants}\\to\\text{TS}\\to\\text{products}', blurb: '反应坐标 ξ 上的能量曲线：反应物 → 过渡态 → 产物。', surface: 'canvas2d' },
  params: [n('Ea', '活化能 Ea (kJ/mol)', 80, 10, 200, 0.1), n('dG', '反应自由能 ΔG', -40, -150, 100, 0.1), n('cat', '催化剂效应', 0, 0, 60, 0.1)],
  render(s, p) {
    if (s.kind !== 'canvas2d') return;
    const { ctx, width: W, height: H, dpr } = s;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = '#0a0e14'; ctx.fillRect(0, 0, W, H);
    const Ea = p.Ea as number, dG = p.dG as number, cat = p.cat as number;
    const padL = 50, padR = 30, padT = 30, padB = 40;
    const plotW = W - padL - padR, plotH = H - padT - padB;
    const yMin = Math.min(0, dG) - 20, yMax = Math.max(Ea, Ea + dG) + 30;
    const xToPx = (x: number) => padL + x * plotW;
    const yToPx = (y: number) => padT + plotH - (y - yMin) / (yMax - yMin) * plotH;
    // axes
    ctx.strokeStyle = '#3a3f4b'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(padL, padT); ctx.lineTo(padL, H - padB); ctx.lineTo(W - padR, H - padB); ctx.stroke();
    ctx.fillStyle = '#707a8c'; ctx.font = '11px ui-monospace,monospace';
    ctx.fillText('ξ (reaction coord)', W / 2 - 50, H - 8);
    ctx.save(); ctx.translate(12, H / 2 + 30); ctx.rotate(-Math.PI / 2); ctx.fillText('Energy (kJ/mol)', 0, 0); ctx.restore();
    // baseline reactants at y=0
    // peak at xi=0.5, height = Ea (with catalyst lowering)
    const Ea_eff = Math.max(0, Ea - cat);
    const N = 200;
    const path: [number, number][] = [];
    for (let i = 0; i <= N; i++) {
      const xi = i / N;
      // smooth piecewise: pre-TS rise, post-TS fall to dG
      const rise = Ea_eff * 0.5 * (1 - Math.cos(Math.min(xi * 2 * Math.PI, Math.PI)));
      const drop = (Ea_eff - dG) * 0.5 * (1 - Math.cos(Math.max(0, (xi - 0.5) * 2 * Math.PI)));
      const y = xi <= 0.5 ? rise : Ea_eff - drop;
      path.push([xi, y]);
    }
    // draw uncatalyzed (dim) for reference
    if (cat > 0) {
      ctx.strokeStyle = '#3a3f4b'; ctx.lineWidth = 1.2; ctx.setLineDash([4, 3]);
      ctx.beginPath();
      for (let i = 0; i <= N; i++) {
        const xi = i / N;
        const rise = Ea * 0.5 * (1 - Math.cos(Math.min(xi * 2 * Math.PI, Math.PI)));
        const drop = (Ea - dG) * 0.5 * (1 - Math.cos(Math.max(0, (xi - 0.5) * 2 * Math.PI)));
        const y = xi <= 0.5 ? rise : Ea - drop;
        const X = xToPx(xi), Y = yToPx(y);
        if (i === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
      }
      ctx.stroke(); ctx.setLineDash([]);
    }
    // main curve
    ctx.strokeStyle = '#ffb454'; ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (let i = 0; i <= N; i++) {
      const X = xToPx(path[i][0]), Y = yToPx(path[i][1]);
      if (i === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
    }
    ctx.stroke();
    // markers
    ctx.fillStyle = '#39bae6';
    ctx.beginPath(); ctx.arc(xToPx(0), yToPx(0), 4, 0, 2 * Math.PI); ctx.fill();
    ctx.fillText('Reactants', xToPx(0) + 6, yToPx(0) - 6);
    ctx.fillStyle = '#f07178';
    ctx.beginPath(); ctx.arc(xToPx(0.5), yToPx(Ea_eff), 4, 0, 2 * Math.PI); ctx.fill();
    ctx.fillText('TS  Ea=' + Ea_eff.toFixed(0), xToPx(0.5) + 6, yToPx(Ea_eff) - 6);
    ctx.fillStyle = '#c2d94c';
    ctx.beginPath(); ctx.arc(xToPx(1), yToPx(dG), 4, 0, 2 * Math.PI); ctx.fill();
    ctx.fillText('Products  ΔG=' + dG.toFixed(0), xToPx(1) - 130, yToPx(dG) - 6);
  },
};
export default f;
