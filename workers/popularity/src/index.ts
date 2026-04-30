export interface Env {
  DB: D1Database;
}

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);
    if (req.method === 'OPTIONS') return new Response(null, { headers: CORS });

    if (url.pathname === '/v' && req.method === 'POST') {
      let body: { slug?: unknown };
      try { body = await req.json(); } catch { return new Response('bad json', { status: 400, headers: CORS }); }
      const slug = body.slug;
      if (typeof slug !== 'string' || !/^[a-z0-9-]+$/i.test(slug) || slug.length > 64) {
        return new Response('bad slug', { status: 400, headers: CORS });
      }
      await env.DB.prepare(
        'INSERT INTO visits(slug,count) VALUES(?,1) ON CONFLICT(slug) DO UPDATE SET count=count+1'
      ).bind(slug).run();
      return new Response('ok', { headers: CORS });
    }

    if (url.pathname === '/top' && req.method === 'GET') {
      const n = Math.min(50, Math.max(1, parseInt(url.searchParams.get('n') ?? '20')));
      const r = await env.DB.prepare('SELECT slug, count FROM visits ORDER BY count DESC LIMIT ?').bind(n).all();
      return new Response(JSON.stringify(r.results ?? []), {
        headers: { ...CORS, 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=300' },
      });
    }

    return new Response('not found', { status: 404, headers: CORS });
  },
};
