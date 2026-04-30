import * as THREE from 'three';
import type { ThreeSurface } from '../formulas/types';

export interface ThreeContext {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
}

const ctxMap = new WeakMap<HTMLCanvasElement, ThreeContext>();

export function getThree(s: ThreeSurface): ThreeContext {
  let ctx = ctxMap.get(s.canvas);
  if (!ctx) {
    const renderer = new THREE.WebGLRenderer({ canvas: s.canvas, antialias: true, alpha: false, preserveDrawingBuffer: true });
    renderer.setClearColor(0x000000, 1);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.01, 1000);
    camera.position.set(3, 3, 3); camera.lookAt(0, 0, 0);
    ctx = { scene, camera, renderer };
    ctxMap.set(s.canvas, ctx);
    setupOrbit(s.canvas, camera, () => renderer.render(scene, camera));
  }
  ctx.renderer.setSize(s.width, s.height, false);
  ctx.camera.aspect = s.width / Math.max(1, s.height);
  ctx.camera.updateProjectionMatrix();
  return ctx;
}

export function clearScene(scene: THREE.Scene) {
  for (const child of [...scene.children]) {
    scene.remove(child);
    const c = child as any;
    if (c.geometry) c.geometry.dispose();
    if (c.material) {
      const m = c.material;
      if (Array.isArray(m)) m.forEach((x: any) => x.dispose()); else m.dispose();
    }
  }
}

export function addLights(scene: THREE.Scene) {
  scene.add(new THREE.AmbientLight(0x404050, 1.4));
  const d1 = new THREE.DirectionalLight(0xffffff, 1.0); d1.position.set(5, 5, 5); scene.add(d1);
  const d2 = new THREE.DirectionalLight(0xffb454, 0.4); d2.position.set(-5, -3, 4); scene.add(d2);
}

function setupOrbit(canvas: HTMLCanvasElement, cam: THREE.PerspectiveCamera, render: () => void) {
  let dragging = false, lastX = 0, lastY = 0;
  let theta = Math.atan2(cam.position.x, cam.position.z);
  let phi = Math.acos(cam.position.y / cam.position.length());
  let dist = cam.position.length();

  const update = () => {
    cam.position.x = dist * Math.sin(phi) * Math.sin(theta);
    cam.position.y = dist * Math.cos(phi);
    cam.position.z = dist * Math.sin(phi) * Math.cos(theta);
    cam.lookAt(0, 0, 0);
    render();
  };

  canvas.addEventListener('pointerdown', e => { dragging = true; lastX = e.clientX; lastY = e.clientY; canvas.setPointerCapture(e.pointerId); });
  canvas.addEventListener('pointerup', e => { dragging = false; try { canvas.releasePointerCapture(e.pointerId); } catch {} });
  canvas.addEventListener('pointermove', e => {
    if (!dragging) return;
    theta -= (e.clientX - lastX) * 0.01;
    phi = Math.max(0.05, Math.min(Math.PI - 0.05, phi - (e.clientY - lastY) * 0.01));
    lastX = e.clientX; lastY = e.clientY;
    update();
  });
  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    dist = Math.max(0.5, Math.min(50, dist * (1 + e.deltaY * 0.001)));
    update();
  }, { passive: false });
}
