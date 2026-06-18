/* ui.js — stateful interface behaviour (theme, nav, reveal, counters). */

export function initTheme() {
  const toggle = document.getElementById('themeToggle');
  if (localStorage.getItem('theme') === 'light') document.documentElement.setAttribute('data-theme', 'light');
  toggle.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) { document.documentElement.removeAttribute('data-theme'); localStorage.setItem('theme', 'dark'); }
    else { document.documentElement.setAttribute('data-theme', 'light'); localStorage.setItem('theme', 'light'); }
  });
}

export function initNav() {
  const nav = document.getElementById('nav');
  const burger = document.getElementById('navBurger');
  const links = document.getElementById('navLinks');
  burger.addEventListener('click', () => { burger.classList.toggle('open'); links.classList.toggle('open'); });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { burger.classList.remove('open'); links.classList.remove('open'); }));
  const progress = document.getElementById('scrollProgress');
  let ticking = false;
  const onScroll = () => {
    ticking = false;
    const h = document.documentElement;
    nav.classList.toggle('scrolled', h.scrollTop > 20);
    progress.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + '%';
  };
  addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
}

export function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(r => obs.observe(r));
}

export function initCounters() {
  const nums = document.querySelectorAll('.stat__num[data-count]');
  const run = (node) => {
    const target = parseFloat(node.getAttribute('data-count'));
    const suffix = node.getAttribute('data-suffix') || '';
    const dur = 1400; let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      node.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { run(e.target); obs.unobserve(e.target); } });
  }, { threshold: 0.6 });
  nums.forEach(n => obs.observe(n));
}

export function initScrollSpy() {
  const links = [...document.querySelectorAll('.nav__links a')];
  const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { links.forEach(a => a.classList.remove('active')); map.get(e.target.id)?.classList.add('active'); }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('section[id]').forEach(s => obs.observe(s));
}

export function initPreloader() {
  const pre = document.getElementById('preloader');
  const fill = document.getElementById('preloaderFill');
  const pct = document.getElementById('preloaderPct');
  let p = 0;
  const tick = setInterval(() => {
    p = Math.min(p + Math.random() * 18 + 6, 100);
    fill.style.width = p + '%';
    pct.textContent = Math.round(p) + '%';
    if (p >= 100) {
      clearInterval(tick);
      setTimeout(() => { pre.classList.add('done'); document.body.classList.add('ready'); }, 280);
    }
  }, 130);
}
