// Async loader for FORMULA_I18N. zh users skip the 200kb payload entirely.
import type { Lang } from './strings';
import type { Translated } from './formulas';

export type FormulaI18NMap = Record<string, Partial<Record<Lang, Translated>>>;

let cache: FormulaI18NMap | null = null;
let loading: Promise<FormulaI18NMap> | null = null;

export function getFormulaI18N(lang: Lang): Promise<FormulaI18NMap> {
  if (lang === 'zh') return Promise.resolve({});
  if (cache) return Promise.resolve(cache);
  if (!loading) {
    loading = import('./formulas').then(m => {
      cache = m.FORMULA_I18N;
      return cache;
    });
  }
  return loading;
}

// Synchronous accessor — returns {} until the chunk loads.
export function peekFormulaI18N(): FormulaI18NMap {
  return cache ?? {};
}
