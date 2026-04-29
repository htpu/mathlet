export function rk4(f: (t: number, y: number[]) => number[], t: number, y: number[], h: number): number[] {
  const k1 = f(t, y);
  const y2 = y.map((yi, i) => yi + h / 2 * k1[i]);
  const k2 = f(t + h / 2, y2);
  const y3 = y.map((yi, i) => yi + h / 2 * k2[i]);
  const k3 = f(t + h / 2, y3);
  const y4 = y.map((yi, i) => yi + h * k3[i]);
  const k4 = f(t + h, y4);
  return y.map((yi, i) => yi + h / 6 * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]));
}

export function hslColor(h: number, s = 70, l = 55): string {
  return `hsl(${((h % 360) + 360) % 360}, ${s}%, ${l}%)`;
}

export function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function gaussian(rand: () => number): number {
  const u = 1 - rand(); const v = rand();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}
