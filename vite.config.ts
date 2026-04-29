import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { readdirSync, statSync } from 'node:fs';

function listFormulaPages(): Record<string, string> {
  const dir = resolve(__dirname, 'src/formulas');
  const out: Record<string, string> = {};
  for (const domain of readdirSync(dir)) {
    const dp = resolve(dir, domain);
    if (!statSync(dp).isDirectory()) continue;
    for (const slug of readdirSync(dp)) {
      const sp = resolve(dp, slug);
      if (!statSync(sp).isDirectory()) continue;
      out[`f/${slug}`] = resolve(__dirname, 'detail.html');
    }
  }
  return out;
}

export default defineConfig({
  base: '/',
  build: {
    target: 'es2022',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        detail: resolve(__dirname, 'detail.html'),
      },
    },
  },
});
