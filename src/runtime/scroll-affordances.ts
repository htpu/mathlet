// Topbar shadow + floating scroll-to-top button. Wire once per page.
export function installScrollAffordances() {
  const topbar = document.querySelector('.topbar');
  const btn = document.createElement('button');
  btn.className = 'scroll-top-btn';
  btn.type = 'button';
  btn.title = 'Back to top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.textContent = '↑';
  btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.appendChild(btn);
  let raf = 0;
  const onScroll = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      const y = window.scrollY;
      topbar?.classList.toggle('scrolled', y > 8);
      btn.classList.toggle('visible', y > 400);
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
