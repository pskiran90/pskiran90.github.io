/* assistant.js — fully client-side "AI" assistant.
   A lightweight intent engine answers questions from the résumé data and
   streams the reply word-by-word with a typing indicator, so a static page
   feels like a live AI portfolio. No backend, no API keys. */
import { SKILLS, EXPERIENCE, PROJECTS } from './data.js';

const norm = s => s.toLowerCase().replace(/[^a-z0-9.\s]/g, ' ').replace(/\s+/g, ' ').trim();

/* ---- Answer builders (data-driven) ---- */
const A = {
  bio: () =>
    "I'm Kiran P S — a Senior Flutter Developer with 4+ years building production mobile apps across FinTech, AI/EdTech, ERP and real-time trading. I work across Flutter, native Android & iOS, and full-stack Node.js / PHP backends, following Clean Architecture, MVVM and SOLID.",
  experience: () =>
    "Kiran has held 3 roles over 4+ years:\n• Senior Mobile App Developer — Takyon System Solutions (Mar 2025 → Present)\n• Senior Flutter Developer — Webtree Media (Aug 2024 → Mar 2025)\n• Software Developer — Vide Alpha (Mar 2022 → May 2024)\nAsk me about any of them for details!",
  skills: () =>
    "Core stack: Flutter & Dart, native Android (Kotlin/Java) and iOS (Swift) with platform channels. State management in BLoC, Riverpod, GetX & Provider. Backends in Node.js & Core PHP. Plus CI/CD (GitHub Actions, Codemagic, Fastlane), Firebase, AWS, and AI dev tools like Claude Code & Cursor.",
  projects: () =>
    "Kiran has shipped 10+ products. Highlights:\n• STOGO.ai — AI exam generation & evaluation\n• APM Trader & Vide Trader — real-time forex trading\n• Spancom ERP — finance & inventory\n• Trrings — social platform\n• Native school-management apps\nAsk about any one, e.g. \"tell me about STOGO.ai\".",
  contact: () =>
    "Easiest ways to reach Kiran:\n📧 pskiran91@gmail.com\n📞 +91 96458 24038\n💼 linkedin.com/in/kiran-p-s-4658aa249\n🐙 github.com/kiranTakyon\nHe's open to senior Flutter roles, freelance & collaborations — email is fastest!",
  hire: () =>
    "Yes — Kiran is currently open to work! 🎯 He's a fit for senior Flutter / mobile roles, freelance and product collaborations.\n📧 pskiran91@gmail.com — drop a line and he'll get back fast.",
  location: () =>
    "Kiran is based in Kochi, Kerala, India 🇮🇳 — open to remote work and relocation.",
  greeting: () =>
    "Hi there! 👋 I'm Kiran's AI assistant. Ask me about his experience, skills, projects, or how to get in touch.",
  thanks: () => "Anytime! ✦ Anything else you'd like to know about Kiran?",
  whoami: () =>
    "I'm an AI assistant trained on Kiran's portfolio. I can answer questions about his experience, skills, projects and availability in real time.",
  fallback: () =>
    "I can tell you about Kiran's experience, skills, projects, or contact details — try a suggestion below, or ask something like \"what's your tech stack?\"",
};

/* ---- Intents (scored by keyword hits) ---- */
const INTENTS = [
  { fn: A.greeting,   keys: ['hi', 'hello', 'hey', 'yo', 'sup', 'greetings'] },
  { fn: A.thanks,     keys: ['thanks', 'thank', 'thx', 'appreciate', 'cool', 'nice', 'awesome'] },
  { fn: A.whoami,     keys: ['who are you', 'what are you', 'are you ai', 'are you a bot', 'your name'] },
  { fn: A.bio,        keys: ['about', 'yourself', 'who is kiran', 'who is', 'tell me about you', 'bio', 'summary', 'intro'] },
  { fn: A.experience, keys: ['experience', 'work history', 'career', 'job', 'jobs', 'roles', 'companies', 'years', 'worked', 'employment'] },
  { fn: A.skills,     keys: ['skill', 'skills', 'tech', 'stack', 'technologies', 'tools', 'languages', 'know', 'expertise', 'frameworks'] },
  { fn: A.projects,   keys: ['project', 'projects', 'apps', 'app', 'portfolio', 'built', 'made', 'products', 'work samples'] },
  { fn: A.contact,    keys: ['contact', 'email', 'mail', 'phone', 'reach', 'call', 'connect', 'github', 'linkedin', 'social'] },
  { fn: A.hire,       keys: ['hire', 'hiring', 'available', 'availability', 'open to work', 'recruit', 'opportunity', 'freelance', 'looking for'] },
  { fn: A.location,   keys: ['location', 'where', 'based', 'city', 'country', 'relocate', 'remote', 'live'] },
];

export function answer(raw) {
  const q = norm(raw);
  if (!q) return A.fallback();
  // Word stems: include the part before a dot too, so "stogo.ai" also matches "stogo".
  const stems = new Set();
  for (const word of q.split(' ')) { stems.add(word); const pre = word.split('.')[0]; if (pre) stems.add(pre); }
  const hasWord = w => stems.has(w);
  const hit = k => (k.includes(' ') ? q.includes(k) : hasWord(k)); // phrase vs whole-word

  // Specific project lookup (match on the project's lead word)
  for (const p of PROJECTS) {
    const base = norm(p.name).split(/[ .]/)[0];
    if (base.length > 2 && hasWord(base)) {
      return `${p.name} — ${p.desc}\nBuilt with: ${p.tech.join(', ')}.`;
    }
  }
  // Specific skill / "do you know X"
  const allTags = SKILLS.flatMap(s => s.tags);
  const tagHit = allTags.find(t => {
    const base = norm(t).split(/[ .]/)[0];
    return base.length > 2 && hasWord(base);
  });
  if (tagHit && (hasWord('know') || hasWord('use') || hasWord('familiar') ||
      q.includes('do you') || q.includes('can you') || q.includes('work with') || q.includes('experience with'))) {
    return `Yes — Kiran works with ${tagHit}. It's part of his day-to-day toolkit.`;
  }

  // Best-scoring intent (whole-word / phrase matching avoids false substring hits)
  let best = null, bestScore = 0;
  for (const intent of INTENTS) {
    let score = 0;
    for (const k of intent.keys) if (hit(k)) score += k.includes(' ') ? 2 : 1;
    if (score > bestScore) { bestScore = score; best = intent; }
  }
  if (best) return best.fn();
  if (tagHit) return `Yes — ${tagHit} is part of Kiran's stack. Ask me about his full skill set!`;
  return A.fallback();
}

/* ---- UI ---- */
const SUGGESTIONS = ['Tell me about Kiran', 'Tech stack?', 'Best projects', 'Are you hiring-ready?', 'How to contact?'];

export function initAssistant() {
  if (document.getElementById('ai')) return;

  const root = document.createElement('div');
  root.id = 'ai';
  root.innerHTML = `
    <button class="ai-fab magnetic" id="aiFab" aria-label="Ask Kiran's AI assistant">
      <span class="ai-fab__pulse"></span>
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l1.6 4.3L18 8l-4.4 1.7L12 14l-1.6-4.3L6 8l4.4-1.7L12 2z"/><circle cx="18.5" cy="16.5" r="2.2"/><circle cx="6" cy="17" r="1.6"/></svg>
      <span class="ai-fab__label">Ask&nbsp;AI</span>
    </button>

    <div class="ai-panel" id="aiPanel" role="dialog" aria-label="AI assistant" aria-modal="false">
      <header class="ai-panel__head">
        <span class="ai-avatar">✦</span>
        <div class="ai-panel__id">
          <strong>Kiran's AI</strong>
          <span class="ai-status"><span class="ai-status__dot"></span> online · ask me anything</span>
        </div>
        <button class="ai-close" id="aiClose" aria-label="Close">&times;</button>
      </header>
      <div class="ai-log" id="aiLog" aria-live="polite"></div>
      <div class="ai-suggest" id="aiSuggest"></div>
      <form class="ai-input" id="aiForm">
        <input id="aiText" type="text" autocomplete="off" placeholder="Ask about Kiran…" aria-label="Message" />
        <button type="submit" aria-label="Send">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </form>
    </div>`;
  document.body.appendChild(root);

  const panel = root.querySelector('#aiPanel');
  const fab = root.querySelector('#aiFab');
  const log = root.querySelector('#aiLog');
  const form = root.querySelector('#aiForm');
  const text = root.querySelector('#aiText');
  const suggest = root.querySelector('#aiSuggest');
  let greeted = false;

  const scroll = () => { log.scrollTop = log.scrollHeight; };

  function bubble(role, html) {
    const b = document.createElement('div');
    b.className = `ai-msg ai-msg--${role}`;
    b.innerHTML = html;
    log.appendChild(b);
    scroll();
    return b;
  }

  function typingDots() {
    const b = document.createElement('div');
    b.className = 'ai-msg ai-msg--bot ai-typing';
    b.innerHTML = '<span></span><span></span><span></span>';
    log.appendChild(b);
    scroll();
    return b;
  }

  // Stream a reply word-by-word into a bubble for the "AI" feel.
  function streamReply(reply) {
    const dots = typingDots();
    const delay = 380 + Math.min(reply.length * 4, 520);
    setTimeout(() => {
      dots.remove();
      const b = bubble('bot', '');
      const words = reply.split(' ');
      let i = 0;
      const tick = () => {
        b.innerHTML = words.slice(0, ++i).join(' ').replace(/\n/g, '<br>');
        scroll();
        if (i < words.length) setTimeout(tick, 22 + Math.random() * 24);
      };
      tick();
    }, delay);
  }

  function ask(q) {
    bubble('user', q.replace(/</g, '&lt;'));
    streamReply(answer(q));
  }

  SUGGESTIONS.forEach(s => {
    const chip = document.createElement('button');
    chip.className = 'ai-chip';
    chip.type = 'button';
    chip.textContent = s;
    chip.addEventListener('click', () => { ask(s); text.focus(); });
    suggest.appendChild(chip);
  });

  function open() {
    panel.classList.add('open');
    fab.classList.add('hidden');
    if (!greeted) { greeted = true; streamReply(A.greeting()); }
    setTimeout(() => text.focus(), 260);
  }
  function close() { panel.classList.remove('open'); fab.classList.remove('hidden'); }

  fab.addEventListener('click', open);
  root.querySelector('#aiClose').addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && panel.classList.contains('open')) close(); });
  form.addEventListener('submit', e => {
    e.preventDefault();
    const q = text.value.trim();
    if (!q) return;
    ask(q);
    text.value = '';
  });

  // Deep link: a URL ending in #ask opens the assistant on load.
  if (location.hash === '#ask') setTimeout(open, 600);
}
