import * as THREE from 'three';
import type { Formula } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';

let g: THREE.Group | null = null;
let atoms: { mesh: THREE.Mesh; from: THREE.Vector3; to: THREE.Vector3 }[] = [];
let bonds: { mesh: THREE.Mesh; pair: [number, number]; phase: 'r' | 'p' | 'b' }[] = [];
let flame: THREE.Mesh | null = null;
let built = false;

const C_COL = 0x444444, H_COL = 0xeeeeee, O_COL = 0xff5252, BOND = 0xbbbbbb;
const aR = 0.45, aH = 0.22, aO = 0.32;

function build(scene: THREE.Scene) {
  clearScene(scene); addLights(scene);
  g = new THREE.Group();
  atoms = [];
  bonds = [];

  // Reactants: CH4 (centre-left) + 2 O2 (centre-right)
  // Atom indices: 0 = C, 1-4 = H, 5-6 = O₂(a), 7-8 = O₂(b)
  const ch4_C = new THREE.Vector3(-2.6, 0, 0);
  const verts = [
    new THREE.Vector3(1, 1, 1), new THREE.Vector3(-1, -1, 1),
    new THREE.Vector3(-1, 1, -1), new THREE.Vector3(1, -1, -1),
  ].map(v => v.normalize().multiplyScalar(1.0));
  const ch4_H = verts.map(v => ch4_C.clone().add(v));
  const o2a = [new THREE.Vector3(2.0, 0.6, 0), new THREE.Vector3(2.0, 0.6, 1.2)];
  const o2b = [new THREE.Vector3(2.0, -0.6, 0), new THREE.Vector3(2.0, -0.6, -1.2)];

  // Products: CO2 centred + 2 H2O on flanks
  const co2_C = new THREE.Vector3(0, 0, 0);
  const co2_O1 = new THREE.Vector3(-1.4, 0, 0);
  const co2_O2 = new THREE.Vector3(1.4, 0, 0);
  // H2O #1 (upper left)  O at (-2.6, 1.6, 0)
  const h2o1_O = new THREE.Vector3(-2.6, 1.6, 0);
  const h2o1_H1 = new THREE.Vector3(-3.3, 2.0, 0.4);
  const h2o1_H2 = new THREE.Vector3(-1.9, 2.0, -0.4);
  // H2O #2 (lower right) O at (2.6, -1.6, 0)
  const h2o2_O = new THREE.Vector3(2.6, -1.6, 0);
  const h2o2_H1 = new THREE.Vector3(3.3, -2.0, 0.4);
  const h2o2_H2 = new THREE.Vector3(1.9, -2.0, -0.4);

  // Build atoms with from/to. Index order: C, H1..H4, O1..O4 (O2a then O2b).
  const spec: [number, number, THREE.Vector3, THREE.Vector3][] = [
    [aR, C_COL, ch4_C, co2_C],
    [aH, H_COL, ch4_H[0], h2o1_H1],
    [aH, H_COL, ch4_H[1], h2o1_H2],
    [aH, H_COL, ch4_H[2], h2o2_H1],
    [aH, H_COL, ch4_H[3], h2o2_H2],
    [aO, O_COL, o2a[0], co2_O1],
    [aO, O_COL, o2a[1], h2o1_O],
    [aO, O_COL, o2b[0], co2_O2],
    [aO, O_COL, o2b[1], h2o2_O],
  ];
  for (const [r, col, from, to] of spec) {
    const mat = new THREE.MeshStandardMaterial({ color: col, roughness: 0.5 });
    const m = new THREE.Mesh(new THREE.SphereGeometry(r, 18, 18), mat);
    m.position.copy(from);
    g.add(m);
    atoms.push({ mesh: m, from: from.clone(), to: to.clone() });
  }

  // Bonds. Reactant phase = 'r' (visible while progress < 0.45),
  // product phase = 'p' (visible while progress > 0.55), break phase = 'b' transitional (skipped).
  const bondMat = () => new THREE.MeshStandardMaterial({ color: BOND, roughness: 0.6 });
  const mkBond = (p: [number, number], phase: 'r' | 'p') => {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1, 8), bondMat());
    g!.add(m);
    bonds.push({ mesh: m, pair: p, phase });
  };
  // Reactant bonds: C–H ×4, O=O ×2
  mkBond([0, 1], 'r'); mkBond([0, 2], 'r'); mkBond([0, 3], 'r'); mkBond([0, 4], 'r');
  mkBond([5, 6], 'r'); mkBond([7, 8], 'r');
  // Product bonds: C=O ×2, O–H ×4
  mkBond([0, 5], 'p'); mkBond([0, 7], 'p');
  mkBond([6, 1], 'p'); mkBond([6, 2], 'p');
  mkBond([8, 3], 'p'); mkBond([8, 4], 'p');

  // Flame glow at fusion point.
  const flameMat = new THREE.MeshBasicMaterial({ color: 0xffaa33, transparent: true, opacity: 0 });
  flame = new THREE.Mesh(new THREE.SphereGeometry(1.4, 24, 24), flameMat);
  g.add(flame);

  scene.add(g);
}

function setBond(b: { mesh: THREE.Mesh; pair: [number, number] }, a: THREE.Vector3, c: THREE.Vector3) {
  const mid = a.clone().add(c).multiplyScalar(0.5);
  const len = a.distanceTo(c);
  b.mesh.position.copy(mid);
  b.mesh.scale.set(1, len, 1);
  b.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), c.clone().sub(a).normalize());
}

const f: Formula = {
  meta: {
    slug: 'methane-combustion',
    title: '甲烷燃烧 CH₄ + 2O₂ → CO₂ + 2H₂O',
    domain: 'chemistry', level: 3,
    tex: 'CH_4+2O_2\\to CO_2+2H_2O+\\Delta',
    blurb: '动画展示反应物 → 火焰 → 产物的原子重排。',
    surface: 'three', animated: true,
  },
  params: [],
  render(s, _p, t) {
    if (s.kind !== 'three') return;
    const c = getThree(s);
    if (!built) {
      build(c.scene); built = true;
      c.camera.position.set(0, 1.5, 8); c.camera.lookAt(0, 0, 0);
    }
    // 4s cycle: 0..0.4 react stable → 0.4..0.7 transform (with flame) → 0.7..1 product stable
    const cycle = ((t || 0) / 4) % 1;
    let p = 0;
    if (cycle < 0.4) p = 0;
    else if (cycle < 0.7) p = (cycle - 0.4) / 0.3;
    else p = 1;
    // ease in-out
    const u = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
    for (const a of atoms) {
      a.mesh.position.x = a.from.x + (a.to.x - a.from.x) * u;
      a.mesh.position.y = a.from.y + (a.to.y - a.from.y) * u;
      a.mesh.position.z = a.from.z + (a.to.z - a.from.z) * u;
    }
    for (const b of bonds) {
      const visible = b.phase === 'r' ? u < 0.5 : u > 0.5;
      b.mesh.visible = visible;
      if (visible) {
        const a = atoms[b.pair[0]].mesh.position;
        const cc = atoms[b.pair[1]].mesh.position;
        setBond(b, a as any, cc as any);
      }
    }
    if (flame) {
      const flameU = Math.sin(Math.PI * Math.max(0, Math.min(1, (cycle - 0.35) / 0.35)));
      (flame.material as THREE.MeshBasicMaterial).opacity = Math.max(0, flameU * 0.55);
      const s2 = 0.6 + flameU * 0.6;
      flame.scale.set(s2, s2, s2);
    }
    // gentle rotation
    if (g) g.rotation.y = (t || 0) * 0.15;
    c.renderer.render(c.scene, c.camera);
  },
};
export default f;
