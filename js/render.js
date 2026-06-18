/* render.js — pure view builders. Take data, return/inject DOM. */
import { icon } from './icons.js';
import { SKILLS, EXPERIENCE, PROJECTS, MARQUEE } from './data.js';

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstChild;
}

/* Split the hero name into per-character spans for the 3D tumble-in. */
export function renderHeroName(text) {
  const host = document.getElementById('heroName');
  if (!host) return;
  let i = 0;
  host.innerHTML = [...text].map(ch => {
    if (ch === ' ') return '<span class="char char--space" aria-hidden="true"></span>';
    return `<span class="char" style="--i:${i++}">${ch}</span>`;
  }).join('');
  host.setAttribute('aria-label', text);
}

export function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  SKILLS.forEach((s, i) => {
    grid.appendChild(el(`
      <div class="skill-group tilt reveal" style="transition-delay:${i * 60}ms">
        <div class="skill-group__title">
          <span class="skill-group__icon">${icon(s.icon, 20)}</span>${s.title}
        </div>
        <div class="tags">${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>`));
  });
}

export function renderExperience() {
  const tl = document.getElementById('timeline');
  // progress rail that the scroll-draw effect grows
  tl.appendChild(el('<div class="timeline__progress" id="timelineProgress"></div>'));
  EXPERIENCE.forEach((e, i) => {
    tl.appendChild(el(`
      <div class="tl-item reveal reveal--left" style="transition-delay:${i * 80}ms">
        <div class="tl-item__top">
          <span class="tl-item__role">${e.role}</span>
          <span class="tl-item__date">${e.date}</span>
        </div>
        <div class="tl-item__company">${e.company}</div>
        <ul class="tl-item__list">${e.points.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>`));
  });
}

export function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  PROJECTS.forEach((p, i) => {
    // Outer wrapper floats; inner card handles reveal + tilt so transforms don't collide.
    grid.appendChild(el(`
      <div class="project-float" style="--fd:${(i % 4) * 0.55}s">
        <div class="project tilt reveal reveal--scale" style="transition-delay:${i * 50}ms">
          <span class="project__icon">${icon(p.icon, 22)}</span>
          <div class="project__name">${p.name}</div>
          <div class="project__desc">${p.desc}</div>
          <div class="project__tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
        </div>
      </div>`));
  });
}

export function renderMarquee() {
  const track = document.getElementById('marqueeTrack');
  const items = MARQUEE.map(t => `<span class="marquee__item">${t}</span>`).join('');
  track.innerHTML = items + items; // duplicate for a seamless loop
}

/* Fill inline [data-icon] placeholders in the static HTML. */
export function fillInlineIcons() {
  document.querySelectorAll('[data-icon]').forEach(node => {
    node.innerHTML = icon(node.getAttribute('data-icon'), 18);
  });
}
