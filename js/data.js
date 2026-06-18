/* data.js — résumé content. Single source; views render from this. */

export const SKILLS = [
  { title: 'Mobile & Frameworks', icon: 'smartphone', tags: ['Flutter', 'Dart', 'Android (Java/Kotlin)', 'iOS (Swift/Obj-C)', 'Platform Channels'] },
  { title: 'Architecture & Patterns', icon: 'layers', tags: ['Clean Architecture', 'MVVM', 'MVC', 'SOLID', 'Design Patterns'] },
  { title: 'State Management', icon: 'sliders', tags: ['BLoC', 'Riverpod', 'Provider', 'GetX'] },
  { title: 'Backend & APIs', icon: 'server', tags: ['Node.js', 'Core PHP', 'REST APIs', 'WebSockets', 'Socket.io', 'JWT Auth'] },
  { title: 'Storage & Databases', icon: 'database', tags: ['Hive', 'SQLite', 'SharedPreferences', 'Secure Storage', 'Firestore', 'MongoDB', 'MySQL'] },
  { title: 'Testing & Quality', icon: 'check', tags: ['Unit Testing', 'Widget Testing', 'Integration Testing', 'TDD', 'Mockito'] },
  { title: 'CI/CD & Cloud', icon: 'cloud', tags: ['GitHub Actions', 'Codemagic', 'Fastlane', 'Play Store', 'App Store', 'Firebase', 'AWS'] },
  { title: 'AI Dev Tools', icon: 'cpu', tags: ['Claude Code', 'Claude Cowork', 'Cursor', 'GitHub Copilot', 'OpenAI Codex', 'ChatGPT', 'Gemini'] },
];

export const EXPERIENCE = [
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

export const PROJECTS = [
  { icon: 'brain', name: 'STOGO.ai', desc: 'AI-powered automated exam generation & evaluation platform; built the Flutter app and PHP backend.', tech: ['Flutter', 'GetX', 'Hive', 'Core PHP', 'MySQL', 'AWS', 'Firebase'] },
  { icon: 'trendingUp', name: 'APM Trader', desc: 'Forex trading mobile app with real-time market feeds and live order execution.', tech: ['Flutter', 'BLoC', 'Node.js', 'WebSockets', 'Hive'] },
  { icon: 'barChart', name: 'Vide Trader', desc: 'Trading platform with live price streaming, charting and portfolio analytics.', tech: ['Flutter', 'BLoC', 'Node.js', 'WebSockets', 'SQLite'] },
  { icon: 'monitor', name: 'Trader Admin Panels', desc: 'Web admin dashboards for trade monitoring, user management and reporting.', tech: ['Flutter Web', 'BLoC', 'Node.js', 'Firebase'] },
  { icon: 'briefcase', name: 'Spancom ERP', desc: 'Enterprise ERP system covering finance and inventory management workflows.', tech: ['Flutter', 'BLoC', 'Firebase'] },
  { icon: 'message', name: 'Vide Chat', desc: 'Real-time messaging platform with one-to-one and group chat.', tech: ['Flutter', 'Firebase', 'Socket.io'] },
  { icon: 'share', name: 'Trrings', desc: 'Social media platform with feeds, messaging and media uploads.', tech: ['Flutter', 'GetX', 'Spring Boot', 'AWS'] },
  { icon: 'book', name: 'School Mgmt Apps', desc: 'Orison / Habitat / LPS — parent-teacher comms, attendance & notifications. Native Android & iOS.', tech: ['Android Native', 'iOS Native', 'AWS'] },
];

export const MARQUEE = ['Flutter', 'Dart', 'BLoC', 'Riverpod', 'GetX', 'Android', 'iOS', 'Swift', 'Kotlin', 'Node.js', 'PHP', 'WebSockets', 'Firebase', 'AWS', 'MySQL', 'MongoDB', 'Hive', 'SQLite', 'CI/CD', 'Clean Architecture'];

/* Words cycled by the hero role typewriter/scramble */
export const ROLES = ['Senior Flutter Developer', 'Mobile Architect', 'Full-Stack Engineer', 'Native iOS & Android'];
