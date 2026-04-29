import * as THREE from 'three';
import type { Formula, FormulaMeta, ParamSpec, ParamValues } from '../formulas/types';
import { addLights, clearScene, getThree } from '../render/three';
import { rk4 } from '../render/numerics';

export interface ODE3DOpts {
  meta: Omit<FormulaMeta, 'surface' | 'animated'>;
  params: ParamSpec[];
  derivs: (p: ParamValues) => (t: number, y: number[]) => number[];
  init: (p: ParamValues) => [number, number, number];
  step?: number;
  maxPoints?: number;
  scale?: number;
}

export function ode3d(opts: ODE3DOpts): Formula {
  let line: THREE.Line | null = null;
  let positions: Float32Array | null = null;
  let count = 0;
  let state: number[] = [];
  let lastP = '';
  return {
    meta: { ...opts.meta, surface: 'three', animated: true },
    params: opts.params,
    render(s, p, t) {
      if (s.kind !== 'three') return;
      const ctx = getThree(s);
      const sig = JSON.stringify(p);
      const max = opts.maxPoints ?? 8000;
      if (sig !== lastP || !line) {
        clearScene(ctx.scene);
        addLights(ctx.scene);
        const grid = new THREE.GridHelper(20, 20, 0x2d3340, 0x1f2430);
        ctx.scene.add(grid);
        positions = new Float32Array(max * 3);
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setDrawRange(0, 0);
        const mat = new THREE.LineBasicMaterial({ color: 0xffb454 });
        line = new THREE.Line(geo, mat);
        ctx.scene.add(line);
        const init = opts.init(p);
        state = [init[0], init[1], init[2]];
        count = 0;
        lastP = sig;
      }
      const f = opts.derivs(p);
      const h = opts.step ?? 0.01;
      const sc = opts.scale ?? 1;
      const stepsPerFrame = 8;
      for (let k = 0; k < stepsPerFrame; k++) {
        state = rk4(f, t, state, h);
        if (count < max) {
          positions![count * 3] = state[0] * sc;
          positions![count * 3 + 1] = state[1] * sc;
          positions![count * 3 + 2] = state[2] * sc;
          count++;
        } else {
          positions!.copyWithin(0, 3);
          positions![(max - 1) * 3] = state[0] * sc;
          positions![(max - 1) * 3 + 1] = state[1] * sc;
          positions![(max - 1) * 3 + 2] = state[2] * sc;
        }
      }
      const geo = (line!.geometry as THREE.BufferGeometry);
      geo.attributes.position.needsUpdate = true;
      geo.setDrawRange(0, count);
      geo.computeBoundingSphere();
      ctx.renderer.render(ctx.scene, ctx.camera);
    },
  };
}
