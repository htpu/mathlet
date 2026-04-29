import * as THREE from 'three';
import type { Formula, FormulaMeta, ParamSpec, ParamValues } from '../formulas/types';
import { addLights, clearScene, getThree } from '../render/three';

export interface Surface3DOpts {
  meta: Omit<FormulaMeta, 'surface'>;
  params: ParamSpec[];
  parametric: (p: ParamValues) => (u: number, v: number, target: THREE.Vector3) => void;
  uRange?: [number, number];
  vRange?: [number, number];
  segments?: [number, number];
  color?: number;
  wireframe?: boolean;
  showAxes?: boolean;
}

function buildParametric(fn: (u: number, v: number, t: THREE.Vector3) => void, slices: number, stacks: number): THREE.BufferGeometry {
  const positions: number[] = [];
  const normals: number[] = [];
  const indices: number[] = [];
  const uvs: number[] = [];
  const t = new THREE.Vector3();
  const tu = new THREE.Vector3();
  const tv = new THREE.Vector3();
  const norm = new THREE.Vector3();
  const eps = 1e-4;
  for (let j = 0; j <= stacks; j++) {
    for (let i = 0; i <= slices; i++) {
      const u = i / slices;
      const v = j / stacks;
      fn(u, v, t);
      positions.push(t.x, t.y, t.z);
      uvs.push(u, v);
      fn(u + eps, v, tu);
      fn(u, v + eps, tv);
      tu.sub(t); tv.sub(t);
      norm.crossVectors(tu, tv).normalize();
      if (!isFinite(norm.x)) norm.set(0, 1, 0);
      normals.push(norm.x, norm.y, norm.z);
    }
  }
  for (let j = 0; j < stacks; j++) {
    for (let i = 0; i < slices; i++) {
      const a = j * (slices + 1) + i;
      const b = a + 1;
      const c = a + slices + 1;
      const d = c + 1;
      indices.push(a, c, b, b, c, d);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  return geo;
}

export function surface3d(opts: Surface3DOpts): Formula {
  let mesh: THREE.Mesh | null = null;
  let lastP = '';
  return {
    meta: { ...opts.meta, surface: 'three' },
    params: opts.params,
    render(s, p) {
      if (s.kind !== 'three') return;
      const ctx = getThree(s);
      const sig = JSON.stringify(p);
      if (sig !== lastP || !mesh) {
        clearScene(ctx.scene);
        addLights(ctx.scene);
        if (opts.showAxes !== false) ctx.scene.add(new THREE.AxesHelper(2));
        const [uMin, uMax] = opts.uRange ?? [0, Math.PI * 2];
        const [vMin, vMax] = opts.vRange ?? [0, Math.PI];
        const [su, sv] = opts.segments ?? [80, 60];
        const fn = opts.parametric(p);
        const geo = buildParametric((u, v, t) => fn(uMin + (uMax - uMin) * u, vMin + (vMax - vMin) * v, t), su, sv);
        const mat = new THREE.MeshStandardMaterial({
          color: opts.color ?? 0xffb454,
          metalness: 0.3,
          roughness: 0.45,
          side: THREE.DoubleSide,
          wireframe: opts.wireframe ?? false,
          flatShading: false,
        });
        mesh = new THREE.Mesh(geo, mat);
        ctx.scene.add(mesh);
        lastP = sig;
      }
      ctx.renderer.render(ctx.scene, ctx.camera);
    },
  };
}
