/* main.js — composition root. Wires data → views → behaviour → effects. */
import { ROLES } from './data.js';
import {
  renderHeroName, renderSkills, renderExperience, renderProjects,
  renderMarquee, fillInlineIcons,
} from './render.js';
import {
  initTheme, initNav, initReveal, initCounters, initScrollSpy, initPreloader,
} from './ui.js';
import {
  initConstellation, initRoleRotator, initScrambleOnReveal,
  initCursor, initMagnetic, initTilt, initSpotlight, initParallax, initTimelineDraw,
} from './effects.js';

function boot() {
  // 1 — views
  renderHeroName('Kiran P S');
  renderSkills();
  renderExperience();
  renderProjects();
  renderMarquee();
  fillInlineIcons();

  // 2 — background + first-paint sequence
  initConstellation();
  initPreloader();

  // 3 — pointer micro-interactions
  initCursor();
  initMagnetic();
  initTilt();
  initSpotlight();
  initParallax();

  // 4 — scroll & reveal behaviour
  initReveal();
  initScrambleOnReveal();
  initCounters();
  initScrollSpy();
  initTimelineDraw();
  initRoleRotator(ROLES);

  // 5 — chrome
  initTheme();
  initNav();
  document.getElementById('year').textContent = new Date().getFullYear();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();
