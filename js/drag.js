/* drag.js — physics-based draggable behaviour.
   Uses the individual `translate`/`rotate`/`scale` CSS properties (NOT `transform`)
   so it composes cleanly with tilt (transform), float animations and parallax.
   Grab → follow pointer with velocity-based tilt → release → inertia + elastic
   spring back to the home position. */

function makeDraggable(el) {
  let active = false, moved = false;
  let sx = 0, sy = 0;          // pointer origin minus current offset
  let x = 0, y = 0;            // current offset from home
  let vx = 0, vy = 0;          // velocity
  let lx = 0, ly = 0;          // last pointer pos
  let raf = 0;

  const clampRot = v => Math.max(-16, Math.min(16, v));
  const apply = () => {
    el.style.translate = `${x.toFixed(2)}px ${y.toFixed(2)}px`;
    el.style.rotate = `${clampRot(vx * 0.5).toFixed(2)}deg`;
  };

  el.addEventListener('pointerdown', e => {
    if (e.button !== undefined && e.button !== 0) return;
    active = true; moved = false;
    el.classList.add('dragging');
    el.setPointerCapture?.(e.pointerId);
    sx = e.clientX - x; sy = e.clientY - y;
    lx = e.clientX; ly = e.clientY;
    cancelAnimationFrame(raf);
  });

  el.addEventListener('pointermove', e => {
    if (!active) return;
    x = e.clientX - sx; y = e.clientY - sy;
    vx = e.clientX - lx; vy = e.clientY - ly;
    lx = e.clientX; ly = e.clientY;
    if (Math.abs(x) > 5 || Math.abs(y) > 5) moved = true;
    apply();
  });

  const release = () => {
    if (!active) return;
    active = false;
    el.classList.remove('dragging');
    spring();
  };
  el.addEventListener('pointerup', release);
  el.addEventListener('pointercancel', release);
  el.addEventListener('lostpointercapture', release);

  // Suppress the click that follows a real drag (so dragged <a> cards don't navigate).
  el.addEventListener('click', e => { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
  // Block native HTML drag (images / links).
  el.addEventListener('dragstart', e => e.preventDefault());

  function spring() {
    const stiffness = 0.14, damping = 0.78;
    const step = () => {
      vx += (0 - x) * stiffness; vy += (0 - y) * stiffness;
      vx *= damping; vy *= damping;
      x += vx; y += vy;
      apply();
      if (Math.abs(x) < 0.4 && Math.abs(y) < 0.4 && Math.abs(vx) < 0.4 && Math.abs(vy) < 0.4) {
        el.style.translate = '0px 0px';
        el.style.rotate = '0deg';
        return;
      }
      raf = requestAnimationFrame(step);
    };
    step();
  }
}

/* Apply to everything that should be grabbable. */
export function initDraggable() {
  if (!matchMedia('(pointer: fine)').matches) return; // pointer drag only on fine pointers
  const SELECTORS = '.hero__photo-ring, .float-chip, .stat, .skill-group, .project, .contact-card';
  document.querySelectorAll(SELECTORS).forEach(el => {
    el.classList.add('draggable');
    makeDraggable(el);
  });
}
