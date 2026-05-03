// Single bottom-center toast. Calling toast() while one is showing replaces it.
let el: HTMLDivElement | null = null;
let timer: number | null = null;

export function toast(msg: string, ms = 1800) {
  if (!el) {
    el = document.createElement('div');
    el.className = 'toast';
    el.setAttribute('role', 'status');
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('visible');
  if (timer) clearTimeout(timer);
  timer = window.setTimeout(() => {
    el?.classList.remove('visible');
  }, ms);
}
