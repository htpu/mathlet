import * as THREE from 'three';
import type { Formula } from '../types';
import { n } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last = ''; let g: THREE.Group | null = null;
const f: Formula = {
  meta: { slug: 'water-molecule', title: '水分子 H₂O', domain: 'chemistry', level: 1, tex: '\\angle\\text{HOH}\\approx 104.5°', blurb: 'sp³ 杂化的弯曲分子，键角 104.5°。', surface: 'three' },
  params: [n('angle', '键角°', 104.5, 90, 130, 0.1), n('len', 'O-H 键长 Å', 0.96, 0.7, 1.5, 0.01)],
  render(s, p) {
    if (s.kind !== 'three') return; const c = getThree(s);
    const sig = `${p.angle}|${p.len}`; if (sig === last && g) { c.renderer.render(c.scene, c.camera); return; }
    clearScene(c.scene); addLights(c.scene);
    g = new THREE.Group();
    const ang = (p.angle as number) * Math.PI / 180, L = p.len as number;
    const O = new THREE.Mesh(new THREE.SphereGeometry(0.5, 24, 24), new THREE.MeshStandardMaterial({ color: 0xff4444, metalness: 0.4, roughness: 0.4 }));
    g.add(O);
    const half = ang / 2;
    const h1 = new THREE.Vector3(L * Math.sin(half), -L * Math.cos(half) * 0.3, L * Math.cos(half));
    const h2 = new THREE.Vector3(-L * Math.sin(half), -L * Math.cos(half) * 0.3, L * Math.cos(half));
    for (const pos of [h1, h2]) {
      const H = new THREE.Mesh(new THREE.SphereGeometry(0.28, 18, 18), new THREE.MeshStandardMaterial({ color: 0xeeeeee, metalness: 0.3, roughness: 0.5 }));
      H.position.copy(pos); g.add(H);
      const dir = pos.clone().normalize();
      const len = pos.length();
      const bond = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, len, 12), new THREE.MeshStandardMaterial({ color: 0xcccccc }));
      bond.position.copy(pos.clone().multiplyScalar(0.5));
      bond.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
      g.add(bond);
    }
    c.scene.add(g); last = sig;
    c.camera.position.set(2, 1.5, 3); c.camera.lookAt(0, 0, 0);
    c.renderer.render(c.scene, c.camera);
  },
};
export default f;
