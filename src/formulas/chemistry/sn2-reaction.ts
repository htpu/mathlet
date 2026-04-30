import * as THREE from 'three';
import type { Formula } from '../types';
import { n } from '../types';
import { addLights, clearScene, getThree } from '../../render/three';
const f: Formula = {
  meta: { slug: 'sn2-reaction', title: 'SN2 反应轨迹', domain: 'chemistry', level: 3, tex: 'Nu^- + R\\text{-}LG \\to Nu\\text{-}R + LG^-', blurb: '亲核试剂背面进攻，构型反转 (Walden 翻转)。', surface: 'three', animated: true },
  params: [n('t', '反应进度 ξ', 0.5, 0, 1, 0.01)],
  render(s, p, time) {
    if (s.kind !== 'three') return; const c = getThree(s);
    clearScene(c.scene); addLights(c.scene);
    const xi = (p.t !== undefined ? (p.t as number) : (Math.sin(time * 0.5) * 0.5 + 0.5));
    const g = new THREE.Group();
    // central C
    const C = new THREE.Mesh(new THREE.SphereGeometry(0.45, 20, 20), new THREE.MeshStandardMaterial({ color: 0x444444 }));
    g.add(C);
    // 3 H atoms in plane that flips
    const flip = (xi - 0.5) * 2; // -1..+1
    const tilt = -flip * 0.4;
    const H_mat = new THREE.MeshStandardMaterial({ color: 0xeeeeee });
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * 2 * Math.PI;
      const h = new THREE.Mesh(new THREE.SphereGeometry(0.22, 14, 14), H_mat);
      h.position.set(0.9 * Math.cos(a), 0.9 * Math.sin(a) * Math.cos(tilt), 0.9 * Math.sin(a) * Math.sin(tilt));
      g.add(h);
      const bond = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.9, 8), new THREE.MeshStandardMaterial({ color: 0xaaaaaa }));
      bond.position.copy(h.position.clone().multiplyScalar(0.5));
      bond.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), h.position.clone().normalize());
      g.add(bond);
    }
    // leaving group (Cl) on +z, fades out
    const lgD = 1.2 + xi * 1.5;
    const lg = new THREE.Mesh(new THREE.SphereGeometry(0.45, 20, 20), new THREE.MeshStandardMaterial({ color: 0x44ff44, transparent: true, opacity: Math.max(0.15, 1 - xi) }));
    lg.position.set(0, 0, lgD); g.add(lg);
    // nucleophile (Br) on -z, comes in
    const nuD = -(2.7 - xi * 1.5);
    const nu = new THREE.Mesh(new THREE.SphereGeometry(0.45, 20, 20), new THREE.MeshStandardMaterial({ color: 0xb35a00, transparent: true, opacity: Math.min(1, xi + 0.2) }));
    nu.position.set(0, 0, nuD); g.add(nu);
    // partial bonds (dashed lines as cylinders)
    if (xi > 0.1 && xi < 0.9) {
      const pb1 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, Math.abs(nuD), 6), new THREE.MeshStandardMaterial({ color: 0xffb454, transparent: true, opacity: 0.7 }));
      pb1.position.set(0, 0, nuD / 2); pb1.rotation.x = Math.PI / 2; g.add(pb1);
      const pb2 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, lgD, 6), new THREE.MeshStandardMaterial({ color: 0xffb454, transparent: true, opacity: 0.7 }));
      pb2.position.set(0, 0, lgD / 2); pb2.rotation.x = Math.PI / 2; g.add(pb2);
    }
    c.scene.add(g);
    c.camera.position.set(3.5, 2, 3.5); c.camera.lookAt(0, 0, 0);
    c.renderer.render(c.scene, c.camera);
  },
};
export default f;
