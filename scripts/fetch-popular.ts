import { writeFileSync } from 'node:fs';
const URL = process.env.POPULAR_URL ?? 'https://mathlet-popularity.htp2008.workers.dev/top?n=20';
async function main() {
  try {
    const res = await fetch(URL, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error(`http ${res.status}`);
    const data = await res.json();
    writeFileSync('public/popular.json', JSON.stringify(data));
    console.log(`popular: ${Array.isArray(data) ? data.length : 0} entries`);
  } catch (e: any) {
    console.warn('popular: fetch failed, writing []:', e.message);
    writeFileSync('public/popular.json', '[]');
  }
}
main();
