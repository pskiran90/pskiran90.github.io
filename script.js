/* ============ Icon set (Feather/Lucide-style, stroke = currentColor) ============ */
const P = {
  smartphone: '<rect x="5" y="2" width="14" height="20" rx="2.5"/><line x1="12" y1="18" x2="12.01" y2="18"/>',
  layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  sliders: '<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
  server: '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
  check: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  cloud: '<path d="M16 16l-4-4-4 4"/><path d="M12 12v9"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>',
  cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',
  brain: '<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/>',
  trendingUp: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
  barChart: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
  monitor: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  message: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',
  book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
  pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  arrow: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
};

function icon(name, size = 24) {
  return `<svg class="ic" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${P[name] || ''}</svg>`;
}

/* ============ Data (from résumé) ============ */
const SKILLS = [
  { title: 'Mobile & Frameworks', icon: 'smartphone', tags: ['Flutter', 'Dart', 'Android (Java/Kotlin)', 'iOS (Swift/Obj-C)', 'Platform Channels'] },
  { title: 'Architecture & Patterns', icon: 'layers', tags: ['Clean Architecture', 'MVVM', 'MVC', 'SOLID', 'Design Patterns'] },
  { title: 'State Management', icon: 'sliders', tags: ['BLoC', 'Riverpod', 'Provider', 'GetX'] },
  { title: 'Backend & APIs', icon: 'server', tags: ['Node.js', 'Core PHP', 'REST APIs', 'WebSockets', 'Socket.io', 'JWT Auth'] },
  { title: 'Storage & Databases', icon: 'database', tags: ['Hive', 'SQLite', 'SharedPreferences', 'Secure Storage', 'Firestore', 'MongoDB', 'MySQL'] },
  { title: 'Testing & Quality', icon: 'check', tags: ['Unit Testing', 'Widget Testing', 'Integration Testing', 'TDD', 'Mockito'] },
  { title: 'CI/CD & Cloud', icon: 'cloud', tags: ['GitHub Actions', 'Codemagic', 'Fastlane', 'Play Store', 'App Store', 'Firebase', 'AWS'] },
  { title: 'AI Dev Tools', icon: 'cpu', tags: ['Claude Code', 'Claude Cowork', 'Cursor', 'GitHub Copilot', 'OpenAI Codex', 'ChatGPT', 'Gemini'] },
];

const EXPERIENCE = [
  {
    role: 'Senior Mobile Application Developer',
    company: 'Takyon System Solutions Pvt Ltd · Thrissur, India',
    date: 'Mar 2025 – Present',
    points: [
      'Lead end-to-end development of STOGO.ai, an AI-powered exam generation & evaluation platform built with Flutter for iOS & Android, with a Core PHP backend.',
      'Designed & implemented PHP backend services: REST APIs, database schema, JWT auth, and integration with AI evaluation pipelines.',
      'Architected real-time evaluation pipelines that improved grading efficiency by 70% and cut manual review effort for educators.',
      'Configured CI/CD pipelines for automated build, signing & release to Google Play and Apple App Store.',
      'Implemented offline-first architecture with Hive & SharedPreferences for low-connectivity environments.',
      'Built ERP modules: attendance tracking, analytics dashboards, and role-based access control.',
    ],
  },
  {
    role: 'Senior Flutter Developer',
    company: 'Webtree Media Solutions W.L.L · Mangalore, India',
    date: 'Aug 2024 – Mar 2025',
    points: [
      'Developed large-scale social media platforms with real-time feeds, messaging & media-rich experiences in Flutter.',
      'Implemented scalable state management with BLoC & GetX following Clean Architecture and SOLID.',
      'Integrated platform channels bridging native Android (Kotlin) and iOS (Swift) for camera, file system & biometric auth.',
      'Optimized UI to consistent 60fps via widget-tree analysis, const constructors and ListView.builder optimizations.',
      'Reduced production crash rates through Crashlytics monitoring, profiling and targeted refactoring.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Vide Alpha · New Delhi, India',
    date: 'Mar 2022 – May 2024',
    points: [
      'Built Forex trading platforms with a Flutter frontend and Node.js backend, shipped to App Store & Play Store.',
      'Implemented WebSocket streaming for real-time market data and order flow, supporting thousands of concurrent users.',
      'Developed Flutter Web admin dashboards for trade monitoring, user management and analytics.',
      'Implemented secure auth, JWT sessions and role-based access control across mobile and web.',
      'Used Hive & SQLite for offline persistence of watchlists, trade history and preferences.',
    ],
  },
];

const PROJECTS = [
  { icon: 'brain', name: 'STOGO.ai', desc: 'AI-powered automated exam generation & evaluation platform; built the Flutter app and PHP backend.', tech: ['Flutter', 'GetX', 'Hive', 'Core PHP', 'MySQL', 'AWS', 'Firebase'] },
  { icon: 'trendingUp', name: 'APM Trader', desc: 'Forex trading mobile app with real-time market feeds and live order execution.', tech: ['Flutter', 'BLoC', 'Node.js', 'WebSockets', 'Hive'] },
  { icon: 'barChart', name: 'Vide Trader', desc: 'Trading platform with live price streaming, charting and portfolio analytics.', tech: ['Flutter', 'BLoC', 'Node.js', 'WebSockets', 'SQLite'] },
  { icon: 'monitor', name: 'Trader Admin Panels', desc: 'Web admin dashboards for trade monitoring, user management and reporting.', tech: ['Flutter Web', 'BLoC', 'Node.js', 'Firebase'] },
  { icon: 'briefcase', name: 'Spancom ERP', desc: 'Enterprise ERP system covering finance and inventory management workflows.', tech: ['Flutter', 'BLoC', 'Firebase'] },
  { icon: 'message', name: 'Vide Chat', desc: 'Real-time messaging platform with one-to-one and group chat.', tech: ['Flutter', 'Firebase', 'Socket.io'] },
  { icon: 'share', name: 'Trrings', desc: 'Social media platform with feeds, messaging and media uploads.', tech: ['Flutter', 'GetX', 'Spring Boot', 'AWS'] },
  { icon: 'book', name: 'School Mgmt Apps', desc: 'Orison / Habitat / LPS — parent-teacher comms, attendance & notifications. Native Android & iOS.', tech: ['Android Native', 'iOS Native', 'AWS'] },
];

/* ============ Render ============ */
function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstChild;
}

function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  SKILLS.forEach((s, i) => {
    const card = el(`
      <div class="skill-group tilt reveal" style="transition-delay:${i * 60}ms">
        <div class="skill-group__title">
          <span class="skill-group__icon">${icon(s.icon, 20)}</span>${s.title}
        </div>
        <div class="tags">${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>`);
    grid.appendChild(card);
  });
}

function renderExperience() {
  const tl = document.getElementById('timeline');
  EXPERIENCE.forEach(e => {
    const item = el(`
      <div class="tl-item reveal">
        <div class="tl-item__top">
          <span class="tl-item__role">${e.role}</span>
          <span class="tl-item__date">${e.date}</span>
        </div>
        <div class="tl-item__company">${e.company}</div>
        <ul class="tl-item__list">${e.points.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>`);
    tl.appendChild(item);
  });
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  PROJECTS.forEach((p, i) => {
    const card = el(`
      <div class="project tilt reveal" style="transition-delay:${i * 50}ms">
        <span class="project__icon">${icon(p.icon, 22)}</span>
        <div class="project__name">${p.name}</div>
        <div class="project__desc">${p.desc}</div>
        <div class="project__tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
      </div>`);
    grid.appendChild(card);
  });
}

/* Fill any inline [data-icon] placeholders in the static HTML */
function fillInlineIcons() {
  document.querySelectorAll('[data-icon]').forEach(node => {
    node.innerHTML = icon(node.getAttribute('data-icon'), 18);
  });
}

/* Marquee ribbon of the tech stack */
const MARQUEE = ['Flutter', 'Dart', 'BLoC', 'Riverpod', 'GetX', 'Android', 'iOS', 'Swift', 'Kotlin', 'Node.js', 'PHP', 'WebSockets', 'Firebase', 'AWS', 'MySQL', 'MongoDB', 'Hive', 'SQLite', 'CI/CD', 'Clean Architecture'];
function renderMarquee() {
  const track = document.getElementById('marqueeTrack');
  const items = MARQUEE.map(t => `<span class="marquee__item">${t}</span>`).join('');
  track.innerHTML = items + items; // duplicate for seamless loop
}

/* ============ Interactions ============ */
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');
  toggle.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });
}

function initNav() {
  const nav = document.getElementById('nav');
  const burger = document.getElementById('navBurger');
  const links = document.getElementById('navLinks');
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('open');
    links.classList.remove('open');
  }));
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    document.getElementById('scrollProgress').style.width = pct + '%';
  });
}

function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(r => obs.observe(r));
}

/* Cursor spotlight — track pointer position as CSS vars on cards */
function initSpotlight() {
  const cards = document.querySelectorAll('.stat, .skill-group, .project, .contact-card');
  cards.forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

/* Count-up animation for stats when they scroll into view */
function initCounters() {
  const nums = document.querySelectorAll('.stat__num[data-count]');
  const run = (node) => {
    const target = parseFloat(node.getAttribute('data-count'));
    const suffix = node.getAttribute('data-suffix') || '';
    const dur = 1400;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      node.textContent = Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { run(e.target); obs.unobserve(e.target); } });
  }, { threshold: 0.6 });
  nums.forEach(n => obs.observe(n));
}

/* Scroll-spy — highlight the nav link of the section in view */
function initScrollSpy() {
  const links = [...document.querySelectorAll('.nav__links a')];
  const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
  const sections = [...document.querySelectorAll('section[id]')];
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(a => a.classList.remove('active'));
        map.get(e.target.id)?.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => obs.observe(s));
}

/* Preloader → reveals hero once "loaded" */
function initPreloader() {
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
      setTimeout(() => {
        pre.classList.add('done');
        document.body.classList.add('ready');
      }, 280);
    }
  }, 130);
}

/* Custom cursor with lagging ring + hover growth */
function initCursor() {
  if (!matchMedia('(pointer: fine)').matches) return;
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  document.body.classList.add('cursor-ready');
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  addEventListener('pointermove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });
  const loop = () => {
    rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  };
  loop();
  document.querySelectorAll('a, button, .tilt, .tag').forEach(el => {
    el.addEventListener('pointerenter', () => ring.classList.add('is-hover'));
    el.addEventListener('pointerleave', () => ring.classList.remove('is-hover'));
  });
}

/* Magnetic pull for buttons / nav controls */
function initMagnetic() {
  if (!matchMedia('(pointer: fine)').matches) return;
  document.querySelectorAll('.magnetic').forEach(el => {
    const strength = 0.35;
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
}

/* 3D tilt on cards (respects spotlight vars) */
function initTilt() {
  if (!matchMedia('(pointer: fine)').matches) return;
  document.querySelectorAll('.tilt').forEach(el => {
    const max = 8;
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = (0.5 - py) * max * 2;
      const ry = (px - 0.5) * max * 2;
      el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
}

/* Subtle mouse parallax on hero photo + aurora */
function initParallax() {
  if (!matchMedia('(pointer: fine)').matches) return;
  const photo = document.getElementById('heroPhoto');
  const blobs = document.querySelectorAll('.aurora__blob');
  addEventListener('pointermove', e => {
    const dx = (e.clientX / innerWidth - 0.5);
    const dy = (e.clientY / innerHeight - 0.5);
    if (photo) photo.style.translate = `${dx * -22}px ${dy * -22}px`;
    blobs.forEach((b, i) => { b.style.translate = `${dx * (12 + i * 6)}px ${dy * (12 + i * 6)}px`; });
  });
}

/* ============ Boot ============ */
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderExperience();
  renderProjects();
  renderMarquee();
  fillInlineIcons();
  initPreloader();
  initCursor();
  initMagnetic();
  initTilt();
  initParallax();
  initTheme();
  initNav();
  initReveal();
  initSpotlight();
  initCounters();
  initScrollSpy();
  document.getElementById('year').textContent = new Date().getFullYear();
});
