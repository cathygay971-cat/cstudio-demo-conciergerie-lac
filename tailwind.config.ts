// Tailwind lit ses couleurs et polices depuis des variables CSS (--bg, --ink, etc.)
// Ces variables CSS sont définies dans globals.css pour les 2 palettes (azur et sauge)
// et changent automatiquement selon data-palette sur <html>.
// Résultat : changer design.palette dans site.config.ts change tout sans toucher aux composants.

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ─── Couleurs sémantiques → variables CSS → 2 palettes ────────────────
      colors: {
        // Fond et surfaces
        'c-bg':       'var(--bg)',
        'c-surface':  'var(--surface)',
        'c-surface2': 'var(--surface-2)',
        'c-line':     'var(--line)',
        // Texte
        'c-ink':      'var(--ink)',
        'c-ink-soft': 'var(--ink-soft)',
        'c-text':     'var(--text)',
        'c-muted':    'var(--muted)',
        // Accent (doré azur / terre sauge)
        'c-accent':   'var(--accent)',
        'c-accent-dk':'var(--accent-dk)',
        'c-accent-t': 'var(--accent-tint)',
        // Fond sombre (footer, stats-band)
        'c-dark':     'var(--dark-bg)',
        'c-dark2':    'var(--dark-bg-2)',
        // Texte sur fond sombre
        'c-on-dark':  'var(--on-dark)',
        'c-on-dark-m':'var(--on-dark-mut)',
      },
      // ─── Polices → variables CSS → 3 paires typo ──────────────────────────
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      // ─── Espacements et rayons repris des maquettes ───────────────────────
      borderRadius: {
        DEFAULT: '4px',
        lg:      '10px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(20,24,38,.06), 0 4px 16px rgba(20,24,38,.05)',
        md: '0 8px 30px rgba(20,24,38,.10)',
        lg: '0 24px 70px rgba(20,24,38,.16)',
      },
      maxWidth: {
        content: '1200px',
      },
      // ─── Tailles clamp pour heading fluides ───────────────────────────────
      fontSize: {
        'hero':    ['clamp(38px, 6vw, 72px)', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
        'hero-sm': ['clamp(34px, 5vw, 56px)', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
        'h2':      ['clamp(30px, 4.2vw, 48px)', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
        'h3-lg':   ['clamp(24px, 3vw, 34px)', { lineHeight: '1.1' }],
        'stat':    ['clamp(38px, 5vw, 58px)', { lineHeight: '1' }],
      },
      // ─── Animation scroll hint (hero) ─────────────────────────────────────
      keyframes: {
        scrolldn: {
          '0%':  { transform: 'scaleY(0)', transformOrigin: 'top' },
          '45%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '55%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%':{ transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
        efade: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to:   { opacity: '1', transform: 'none' },
        },
        reveal: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to:   { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        scrolldn: 'scrolldn 1.8s cubic-bezier(.22,.61,.36,1) infinite',
        efade:    'efade .42s cubic-bezier(.22,.61,.36,1)',
        reveal:   'reveal .7s cubic-bezier(.22,.61,.36,1)',
      },
      transitionTimingFunction: {
        ease: 'cubic-bezier(.22,.61,.36,1)',
      },
    },
  },
  plugins: [],
}

export default config
