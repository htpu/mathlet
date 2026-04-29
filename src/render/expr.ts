// Tiny safe math expression compiler.
// Supports: + - * / ^ ( ) , unary -, identifiers, function calls.
// Whitelisted names: x, t (or arg), pi, e, plus Math functions.
// Uses Function constructor with a lexical scope of allowed bindings only.

const FN_NAMES = ['sin','cos','tan','asin','acos','atan','atan2','sinh','cosh','tanh','exp','log','log2','log10','sqrt','cbrt','abs','sign','floor','ceil','round','min','max','pow','hypot'];
const CONST_NAMES = ['pi','e','tau','phi'];

const ALLOWED_RE = /^[\s\dxytPI()+\-*/^,.\w]+$/;

export function compileExpr(src: string, vars: string[] = ['x']): (env: Record<string, number>) => number {
  if (!src || !src.trim()) return () => NaN;
  if (!ALLOWED_RE.test(src)) return () => NaN;
  // Replace ^ with ** for JS power
  let body = src.replace(/\^/g, '**');
  // Implicit multiplication: 2x → 2*x, )( → )*(, 2( → 2*(
  body = body.replace(/(\d)([a-zA-Z_(])/g, '$1*$2');
  body = body.replace(/(\))(\w|\()/g, '$1*$2');
  // Validate identifiers — only known names and vars
  const allowedIds = new Set([...vars, ...FN_NAMES, ...CONST_NAMES]);
  const idRe = /[a-zA-Z_][a-zA-Z0-9_]*/g;
  let m: RegExpExecArray | null;
  while ((m = idRe.exec(body)) !== null) {
    if (!allowedIds.has(m[0])) return () => NaN;
  }
  try {
    const args = vars.join(',');
    // Map identifiers to env / Math
    const fn = new Function('x','t','y','Math','Object','globalThis', `
      const {sin,cos,tan,asin,acos,atan,atan2,sinh,cosh,tanh,exp,log,log2,log10,sqrt,cbrt,abs,sign,floor,ceil,round,min,max,pow,hypot,PI,E} = Math;
      const pi = PI, e = E, tau = 2*PI, phi = (1+sqrt(5))/2;
      try { return (${body}); } catch { return NaN; }
    `);
    return (env: Record<string, number>) => {
      try { return fn(env.x ?? 0, env.t ?? 0, env.y ?? 0, Math, undefined, undefined); }
      catch { return NaN; }
    };
  } catch {
    return () => NaN;
  }
}
