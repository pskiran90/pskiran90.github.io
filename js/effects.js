/* effects.js — motion & canvas engine (the "wow" layer).
   Each export is an init function called once on boot. All of them
   no-op under prefers-reduced-motion where motion would distract. */

const fine = () => matchMedia('(pointer: fine)').matches;
const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============================================================
   Interactive constellation + shooting stars (single canvas)
   Particles drift, link to nearby neighbours and to the cursor,
   while colored meteors streak across periodically.
   ============================================================ */
export function initConstellation() {
  const canvas = document.getElementById('fx');
  if (!canvas || reduced()) return;
  const ctx = canvas.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const SHOOT = ['139,92,246', '34,211,238', '244,114,182'];
  let w = 0, h = 0, nodes = [], shooters = [], frame = 0, nextShoot = 60;
  let cols = 0, rows = 0, grid = [];
  let running = true;
  const mouse = { x: -999, y: -999 };
  const CELL = 132;                                  // ≈ sqrt(LINK2); 1 link reach per cell
  const LINK2 = 17000;
  const coarse = matchMedia('(pointer: coarse)').matches;

  // Theme-aware palette: dark uses bright nodes on black; light uses deep indigo on white.
  const isLight = () => document.documentElement.getAttribute('data-theme') === 'light';
  const pal = () => isLight()
    ? { node: '76,58,150', link: '92,70,190', linkMul: 2.1, cursor: '14,116,144', cursorMul: 1.3 }
    : { node: '210,216,255', link: '139,148,255', linkMul: 1, cursor: '34,211,238', cursorMul: 1 };

  function resize() {
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // Fewer particles on touch devices (cheaper) than on desktop.
    const density = coarse ? 26000 : 16000;
    const count = Math.min(coarse ? 64 : 120, Math.round((w * h) / density));
    nodes = Array.from({ length: count }, (_, idx) => ({
      idx, cx: 0, cy: 0,
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.4 + 0.4,
      tw: Math.random() * 0.02 + 0.004, ph: Math.random() * Math.PI * 2,
    }));
    cols = Math.ceil(w / CELL) + 1; rows = Math.ceil(h / CELL) + 1;
    grid = Array.from({ length: cols * rows }, () => []);
  }

  function spawnShooter() {
    const fromLeft = Math.random() > 0.4;
    const ang = (Math.PI / 4) + (Math.random() * 0.3 - 0.15);
    const speed = Math.random() * 6 + 9;
    shooters.push({
      x: fromLeft ? Math.random() * w * 0.4 : Math.random() * w,
      y: Math.random() * h * 0.5,
      vx: Math.cos(ang) * speed, vy: Math.sin(ang) * speed,
      len: Math.random() * 120 + 90, life: 0, ttl: Math.random() * 40 + 50,
      color: SHOOT[Math.floor(Math.random() * SHOOT.length)],
    });
  }

  function draw() {
    frame++;
    ctx.clearRect(0, 0, w, h);
    const c = pal();

    // Pass 1 — integrate motion through a generative flow field (layered sines ≈
    // curl noise) and bucket each node into a spatial grid for cheap neighbour links.
    const t = frame * 0.0016;
    for (let g = 0; g < grid.length; g++) grid[g].length = 0;
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      const angle = (Math.sin(a.x * 0.0021 + t) + Math.cos(a.y * 0.0019 - t * 0.8)
                   + Math.sin((a.x + a.y) * 0.0013 + t * 1.4)) * 1.4;
      a.vx += Math.cos(angle) * 0.035;
      a.vy += Math.sin(angle) * 0.035;
      a.vx *= 0.95; a.vy *= 0.95;                 // gentle damping → no runaway speed
      a.x += a.vx; a.y += a.vy; a.ph += a.tw;
      if (a.x < -10) a.x = w + 10; else if (a.x > w + 10) a.x = -10;
      if (a.y < -10) a.y = h + 10; else if (a.y > h + 10) a.y = -10;
      a.cx = Math.max(0, Math.min(cols - 1, (a.x / CELL) | 0));
      a.cy = Math.max(0, Math.min(rows - 1, (a.y / CELL) | 0));
      grid[a.cy * cols + a.cx].push(a);
    }

    // Pass 2 — links (grid neighbours only), cursor links + draw nodes.
    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let gy = a.cy - 1; gy <= a.cy + 1; gy++) {
        if (gy < 0 || gy >= rows) continue;
        for (let gx = a.cx - 1; gx <= a.cx + 1; gx++) {
          if (gx < 0 || gx >= cols) continue;
          const cell = grid[gy * cols + gx];
          for (let k = 0; k < cell.length; k++) {
            const b = cell[k];
            if (b.idx <= a.idx) continue;           // each pair once
            const dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
            if (d2 < LINK2) {
              ctx.strokeStyle = `rgba(${c.link},${(1 - d2 / LINK2) * 0.18 * c.linkMul})`;
              ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
            }
          }
        }
      }
      // cursor link + gentle attraction
      const mdx = a.x - mouse.x, mdy = a.y - mouse.y, md2 = mdx * mdx + mdy * mdy;
      if (md2 < 30000) {
        ctx.strokeStyle = `rgba(${c.cursor},${(1 - md2 / 30000) * 0.4 * c.cursorMul})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        a.x -= mdx * 0.0008; a.y -= mdy * 0.0008;
      }
      const tw = (0.55 + Math.sin(a.ph) * 0.35) * c.linkMul;
      ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${c.node},${Math.min(tw, 1)})`; ctx.fill();
    }

    // shooting stars
    if (frame >= nextShoot) { spawnShooter(); nextShoot = frame + Math.round(Math.random() * 150 + 80); }
    for (let i = shooters.length - 1; i >= 0; i--) {
      const m = shooters[i];
      m.x += m.vx; m.y += m.vy; m.life++;
      const fade = 1 - m.life / m.ttl;
      const tx = m.x - m.vx * (m.len / 12), ty = m.y - m.vy * (m.len / 12);
      const g = ctx.createLinearGradient(m.x, m.y, tx, ty);
      g.addColorStop(0, `rgba(${m.color},${0.9 * fade})`);
      g.addColorStop(1, `rgba(${m.color},0)`);
      ctx.strokeStyle = g; ctx.lineWidth = 2; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(m.x, m.y); ctx.lineTo(tx, ty); ctx.stroke();
      ctx.beginPath(); ctx.arc(m.x, m.y, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${fade})`; ctx.fill();
      if (m.life > m.ttl || m.x > w + 200 || m.y > h + 200) shooters.splice(i, 1);
    }
    if (running) requestAnimationFrame(draw);
  }

  // Pause the loop entirely while the tab is hidden (saves battery / CPU).
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { running = false; }
    else if (!running) { running = true; draw(); }
  });

  resize();
  addEventListener('resize', resize);
  addEventListener('pointermove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  addEventListener('pointerleave', () => { mouse.x = -999; mouse.y = -999; });
  draw();
}

/* ============================================================
   Text scramble — decodes a string with random glyphs.
   Used for the rotating hero role + section titles on reveal.
   ============================================================ */
const GLYPHS = '!<>-_\\/[]{}—=+*^?#________01';
class Scramble {
  constructor(node) { this.node = node; this.queue = []; this.frame = 0; this.update = this.update.bind(this); }
  to(text) {
    const old = this.node.textContent;
    const len = Math.max(old.length, text.length);
    return new Promise(res => {
      this.resolve = res;
      this.queue = [];
      for (let i = 0; i < len; i++) {
        const from = old[i] || '';
        const to = text[i] || '';
        const start = Math.floor(Math.random() * 22);
        const end = start + Math.floor(Math.random() * 22) + 12;
        this.queue.push({ from, to, start, end, char: '' });
      }
      cancelAnimationFrame(this.raf);
      this.frame = 0; this.update();
    });
  }
  update() {
    let out = '', done = 0;
    for (const q of this.queue) {
      if (this.frame >= q.end) { done++; out += q.to; }
      else if (this.frame >= q.start) {
        if (!q.char || Math.random() < 0.28) q.char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        out += `<span class="scramble-glyph">${q.char}</span>`;
      } else out += q.from;
    }
    this.node.innerHTML = out;
    if (done === this.queue.length) this.resolve && this.resolve();
    else { this.raf = requestAnimationFrame(this.update); this.frame++; }
  }
}

/* Rotating job titles in the hero, with scramble between each. */
export function initRoleRotator(roles) {
  const node = document.getElementById('roleText');
  if (!node) return;
  if (reduced()) { node.textContent = roles[0]; return; }
  const fx = new Scramble(node);
  let i = 0;
  const cycle = () => fx.to(roles[i % roles.length]).then(() => {
    i++; setTimeout(cycle, 1900);
  });
  cycle();
}

/* Scramble-decode any [data-scramble] element the first time it reveals. */
export function initScrambleOnReveal() {
  const targets = document.querySelectorAll('[data-scramble]');
  if (reduced()) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const fx = new Scramble(e.target);
        fx.to(e.target.dataset.scramble || e.target.textContent);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.6 });
  targets.forEach(t => obs.observe(t));
}

/* ============================================================
   Pointer-driven micro-interactions
   ============================================================ */
export function initCursor() {
  if (!fine()) return;
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  document.body.classList.add('cursor-ready');
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  addEventListener('pointermove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });
  (function loop() {
    rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  })();
  document.querySelectorAll('a, button, .tilt, .tag').forEach(el => {
    el.addEventListener('pointerenter', () => ring.classList.add('is-hover'));
    el.addEventListener('pointerleave', () => ring.classList.remove('is-hover'));
  });
}

export function initMagnetic() {
  if (!fine()) return;
  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
}

/* 3D tilt + holographic glare that tracks the pointer. */
export function initTilt() {
  if (!fine()) return;
  document.querySelectorAll('.tilt').forEach(el => {
    const glare = document.createElement('span');
    glare.className = 'glare';
    el.appendChild(glare);
    const max = 9;
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.transform = `perspective(820px) rotateX(${(0.5 - py) * max * 2}deg) rotateY(${(px - 0.5) * max * 2}deg) translateY(-6px)`;
      glare.style.setProperty('--gx', `${px * 100}%`);
      glare.style.setProperty('--gy', `${py * 100}%`);
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
}

/* Spotlight CSS vars for the radial hover glow on cards. */
export function initSpotlight() {
  document.querySelectorAll('.stat, .skill-group, .project, .contact-card').forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

/* Mouse parallax on the avatar + aurora blobs. */
export function initParallax() {
  if (!fine()) return;
  const photo = document.getElementById('heroPhoto');
  const blobs = document.querySelectorAll('.aurora__blob');
  let dx = 0, dy = 0, queued = false;
  const apply = () => {
    queued = false;
    if (photo && !photo.classList.contains('dragging')) photo.style.translate = `${dx * -22}px ${dy * -22}px`;
    blobs.forEach((b, i) => { b.style.translate = `${dx * (12 + i * 6)}px ${dy * (12 + i * 6)}px`; });
  };
  addEventListener('pointermove', e => {
    dx = e.clientX / innerWidth - 0.5;
    dy = e.clientY / innerHeight - 0.5;
    if (!queued) { queued = true; requestAnimationFrame(apply); }
  }, { passive: true });
}

/* Grow the timeline's gradient rail as the section scrolls through. */
export function initTimelineDraw() {
  const wrap = document.getElementById('timeline');
  const bar = document.getElementById('timelineProgress');
  if (!wrap || !bar) return;
  let ticking = false;
  const update = () => {
    ticking = false;
    const r = wrap.getBoundingClientRect();
    const passed = Math.min(Math.max(innerHeight * 0.7 - r.top, 0), r.height);
    bar.style.height = passed + 'px';
  };
  addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
}
