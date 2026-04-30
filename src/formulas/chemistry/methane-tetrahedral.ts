import * as THREE from 'three';
import type { Formula } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
let last = ''; let g: THREE.Group | null = null;
const f: Formula = {
  meta: { slug: 'methane-tetrahedral', title: '甲烷 CH₄ (四面体)', domain: 'chemistry', level: 1, tex: '\\angle\\text{HCH}=109.47°', blurb: 'sp³ 杂化，正四面体几何。', surface: 'three' },
  params: [],
  render(s) {
    if (s.kind !== 'three') return; const c = getThree(s);
    if (last === 'k' && g) { c.renderer.render(c.scene, c.camera); return; }
    clearScene(c.scene); addLights(c.scene);
    g = new THREE.Group();
    const C = new THREE.Mesh(new THREE.SphereGeometry(0.45, 24, 24), new THREE.MeshStandardMaterial({ color: 0x444444 }));
    g.add(C);
    const verts = [
      new THREE.Vector3(1, 1, 1), new THREE.Vector3(-1, -1, 1),
      new THREE.Vector3(-1, 1, -1), new THREE.Vector3(1, -1, -1),
    ].map(v => v.normalize().multiplyScalar(1.1));
    for (const v of verts) {
      const H = new THREE.Mesh(new THREE.SphereGeometry(0.25, 18, 18), new THREE.MeshStandardMaterial({ color: 0xeeeeee }));
      H.position.copy(v); g.add(H);
      const bond = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.1, 10), new THREE.MeshStandardMaterial({ color: 0xbbbbbb }));
      bond.position.copy(v.clone().multiplyScalar(0.5));
      bond.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), v.clone().normalize());
      g.add(bond);
    }
    c.scene.add(g); last = 'k';
    c.camera.position.set(3, 2.5, 3); c.camera.lookAt(0, 0, 0);
    c.renderer.render(c.scene, c.camera);
  },
};
export default f;
