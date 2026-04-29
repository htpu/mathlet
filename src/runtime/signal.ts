type EffectFn = () => void;
interface Effect { run: EffectFn; deps: Set<Set<Effect>>; }

let active: Effect | null = null;

export interface Signal<T> {
  get value(): T;
  set value(n: T);
  peek(): T;
}

export function signal<T>(initial: T): Signal<T> {
  let v = initial;
  const subs = new Set<Effect>();
  return {
    get value() {
      if (active) { subs.add(active); active.deps.add(subs); }
      return v;
    },
    set value(n: T) {
      if (Object.is(n, v)) return;
      v = n;
      for (const e of [...subs]) queue(e);
    },
    peek: () => v,
  };
}

export function effect(fn: EffectFn): () => void {
  const e: Effect = { run: () => {}, deps: new Set() };
  e.run = () => {
    for (const d of e.deps) d.delete(e);
    e.deps.clear();
    const prev = active;
    active = e;
    try { fn(); } finally { active = prev; }
  };
  e.run();
  return () => { for (const d of e.deps) d.delete(e); e.deps.clear(); };
}

const q = new Set<Effect>();
let scheduled = false;
function queue(e: Effect): void {
  q.add(e);
  if (scheduled) return;
  scheduled = true;
  queueMicrotask(() => {
    scheduled = false;
    const batch = [...q];
    q.clear();
    for (const e of batch) e.run();
  });
}
